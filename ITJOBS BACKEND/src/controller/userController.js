import userService from "@src/services/userService.js";
import responseStatus from "@src/constants/responseStatus";
import jwtHelpers from "@src/helpers/jwtHelpers";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
class User {
  async dashboard(req, res) {
    const data = req.body;

    // const data = await userService.dataUser();
    res.status(200).json({ status: "dashboard", data });
  }
  async home(req, res) {
    res.render("home", { data: [1, 2, 3], layout: null });

    // const data = await userService.dataUser();
  }
  async updateUser(req, res) {
    const data = req.body;
    await userService.updateUser(data);
    res.status(200).json({ status: "success" });
  }

  async downloadCvProfile(req, res) {
    // res.render("template", { data:[1,2,3], layout: null });
    await userService.generatePdf(res);

    // res.render("template", { data:[1,2,3], layout: null });
    // res.status(200).json({status:"success"});
  }
  async viewPdf(req, res) {
    res.render("template", { data: [1, 2, 3], layout: null });
  }

  async register(req, res) {
    const data = req.body;
    await userService.createUser(data);
    return res.json(responseStatus.SUCCESS);
  }
  async dataUser(req, res) {
    const data = await userService.dataUser();
    return res.json({ ...responseStatus.SUCCESS, data: { data } });
  }
  async login(req, res) {
    const data = req.body;
    try {
      // res.cookie('accessToken', accessToken, { httpOnly: true });
      //phải query từ database để xác thực tên tài khoản mật khẩu có đúng không sau đó mới ủy quyền
      const dataUser = await userService.authentication(data);
      if (!dataUser) {
        throw new Error("Tài khoản hoặc mật khẩu không đúng");
      }
      const [{password,...rest}]=dataUser;

      const [accessToken, refreshToken] = await Promise.all([
        jwtHelpers.signAccessToken(rest),
        jwtHelpers.signRefreshToken(rest),
      ]);
      // res.cookie("accessToken",accessToken,{
      //   maxAge:300000, //5 phut
      //   httpOnly:true,
      // })
      res.cookie("userRefreshToken", refreshToken, {
        maxAge: 3.154e10, // 1 year
        sameSite: "strict",
        secure: false,
        httpOnly: true,
      });
      return res.json({
        ...responseStatus.SUCCESS,
        data: { accessToken,...rest},
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

  async logout(req, res) {
    const { userRefreshToken } = req.cookies;
    const decoded = await jwt.verify(
      userRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );
    if (!decoded) {
      return res.json(responseStatus.UNAUTHORIZED);
    }
    res.clearCookie("userRefreshToken");
    return res.json(responseStatus.SUCCESS);
  }

  async refreshToken(req, res) {
    const { refreshToken } = req.cookies;

    if (!refreshToken) {
      return res.json(responseStatus.UNAUTHORIZED);
    }
    const decoded = await jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );
    if (!decoded) {
      return res.json(responseStatus.UNAUTHORIZED);
    }
    const accessToken = await jwtHelpers.signAccessToken(decoded);
    return res.json({ ...responseStatus.SUCCESS, data: { accessToken } });
  }
}
module.exports = new User();
