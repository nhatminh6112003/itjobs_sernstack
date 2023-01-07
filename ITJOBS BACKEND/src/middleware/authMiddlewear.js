import jwt from "jsonwebtoken";
import responseStatus from "../constants/responseStatus";
import dotenv from "dotenv";
import userModel from "@src/models/userModel.js";

dotenv.config();

class AuthMiddleWear {
  async protect(req, res, next) {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    // Nếu không có token hoặc token không hợp lệ, trả về lỗi 401 Unauthorized
    if (!token) {
      return res
        .status(responseStatus.UNAUTHORIZED.status)
        .send({ error: "Unauthorized" });
    }
    try {
      // Xác thực token với khóa bí mật
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      if (!decoded) {
        return res
          .status(responseStatus.UNAUTHORIZED.status)
          .send({ error: "Unauthorized" });
      }
      const [{ email }] = decoded.payload;
      const user = await userModel.findById({ email, user_type_id: 1 }, [
        "id",
        "email",
      ]);
      if (user.length == 0) {
        return res
          .status(responseStatus.UNAUTHORIZED.status)
          .send({ error: "Unauthorized" });
      }
      // Lưu thông tin người dùng vào request để sử dụng trong các middleware tiếp theo
      req.user = user;
      next();
    } catch (error) {
      // Nếu token không hợp lệ, trả về lỗi 401 Unauthorized
      return res.status(401).send({ error: "Unauthorized" });
    }
  }

  authPage(permission) {
    return (req, res, next) => {
      const { role } = req.body;

      if (!role) {
        return res.status(403).json({ error: "Không có quyền", role: 123 });
      }
      if (!permission.includes(role)) {
        return res.status(401).json("You dont have permission");
      }
      next();
    };
  }
}

// const protect = asyncHandler(async (req, res, next)=>{

// })

export default new AuthMiddleWear();
