import authService from "@src/services/auth.service.js";
import responseStatus from "@src/constants/responseStatus";
import jwtHelpers from "@src/helpers/jwt.helper";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
const jwtDecode = require('jwt-decode');
dotenv.config();
class Auth {
  async register(req, res) {
    const data = req.body;
    await authService.createUser(data);
    return res.json(responseStatus.SUCCESS);
  }

  async login(req, res) {
    const data = req.body;
    try {
      // res.cookie('accessToken', accessToken, { httpOnly: true });
      //phải query từ database để xác thực tên tài khoản mật khẩu có đúng không sau đó mới ủy quyền
      const dataUser = await authService.authentication(data);
      if (!dataUser) {
        throw new Error("Tài khoản hoặc mật khẩu không đúng");
      }
      const [{ password,refresh_token, ...rest }] = dataUser;

      const [accessToken, refreshToken] = await Promise.all([
        jwtHelpers.signAccessToken(rest),
        jwtHelpers.signRefreshToken(rest),
      ]);
      const updateRefreshToken = await authService.updateRefeshToken({
        refreshToken,
        id: rest.id,
      });
      res.cookie("userRefreshToken", refreshToken, {
        maxAge: 3.154e10, // 1 year
        sameSite: "strict",
        secure: false,
        httpOnly: false,
      });
      return res.json({
        ...responseStatus.SUCCESS,
        data: { accessToken, ...rest },
      });
    } catch (error) {
      return res.status(400).json({
        status: 400,
        success: false,
        message: error.message,
        data: {
          request: data,
          response: null,
          timestamp: new Date().toISOString(),
        },
      });
    }
  }
  // const currentTime = Math.floor(Date.now() / 1000);
  //     const refreshTokenExpiration = currentTime - 60;
  //     const expiredRefreshToken = jwt.sign({ sub: user.id },process.env.REFRESH_TOKEN_SECRET, { expiresIn: refreshTokenExpiration });

  async logout(req, res) {
    const { userRefreshToken } = req.cookies;
    try {
      const decoded =
        userRefreshToken &&
        (await jwt.verify(userRefreshToken, process.env.REFRESH_TOKEN_SECRET));
      const authUser = await authService.findUser(decoded);
      if (!authUser) {
        return res.status(404).send({ message: "User not found" });
      }
    
      const deleteRefeshToken = await authService.deleteRefeshToken({
        id: decoded.id,
      });
      res.cookie('userRefreshToken', '', { expires: new Date(0), httpOnly: true });
      res.clearCookie("userRefreshToken");
      return res.json({...responseStatus.SUCCESS,message:"Logout successful"});
    } catch (error) {
      if (error.name === "JsonWebTokenError") {
        return res.status(200).json({ code: 401, message: error.message });
      } else if (error.name === "TokenExpiredError") {
        const decoded =  jwtDecode(userRefreshToken);
        const authUser = await authService.findUser(decoded);
        if (!authUser) {
          return res.status(404).send({ message: "User not found" });
        }
        const deleteRefeshToken = await authService.deleteRefeshToken({
          id: decoded.id,
        });
        res.clearCookie("userRefreshToken");
        return res.json({...responseStatus.SUCCESS,message:"Token expired"});
      }
      return res.json(responseStatus.UNAUTHORIZED);
    }
  }

  async refreshToken(req, res) {
    const { userRefreshToken } = req.cookies;

    try {
      const decoded =
        userRefreshToken &&
        (await jwt.verify(userRefreshToken, process.env.REFRESH_TOKEN_SECRET));

      const authUser = await authService.findUser(decoded);

      if (!authUser) {
        return res.status(404).send({ message: "User not found" });
      }
      const { iat, exp, ...rest } = decoded;

      if (exp < Date.now() / 1000) {
        return res
          .status(200)
          .send({ code: 401, message: "Refresh token expired" });
      }
      const accessToken = await jwtHelpers.signAccessToken(rest);
      return res.json({ ...responseStatus.SUCCESS, data: { accessToken } });
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Refresh token expired" });
      } else if (error.name === "JsonWebTokenError") {
        return res.status(200).json({ code: 401, message: error.message });
      }
      return res.json(responseStatus.UNAUTHORIZED);
    }
  }
}
module.exports = new Auth();
