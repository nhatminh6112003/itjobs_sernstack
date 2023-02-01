import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import responseStatus from "@src/constants/responseStatus";
class JwtHelpers {
  async signAccessToken(payload) {
    //Hàm sign trong thư viện jsonwebtoken dùng để tạo một JSON Web Token (JWT) từ một object và một khóa bí mật.
    try {
      // const results = await Promise.all([function1(), function2()]);
      const accessToken = await jwt.sign(
        payload,
        process.env.ACCESS_TOKEN_SECRET,
        {
          algorithm: "HS256",
          expiresIn: "5s",
        }
      );
      
      return accessToken;
    } catch (error) {
      console.log(error)
    }
  }

  async signRefreshToken(payload) {
    //Hàm sign trong thư viện jsonwebtoken dùng để tạo một JSON Web Token (JWT) từ một object và một khóa bí mật.

    try {
      const refreshToken = await jwt.sign(
        payload,
        process.env.REFRESH_TOKEN_SECRET,
        {
          algorithm: "HS256",
          expiresIn: "1y",
        }
      );
      return refreshToken;
    } catch (error) {
      return null;
    }
  }

  
  
}
const jwtHelpers = new JwtHelpers();
export default jwtHelpers;
