import responseStatus from "@src/constants/responseStatus";
import authModel from "@src/models/auth.model.js";
import bcryptHelpers from "@src/helpers/bcrypt.helper";

import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

dotenv.config();

class AuthService {
  // Hàm tạo người dùng mới
  async createUser(data) {
    return new Promise(async (resolve, reject) => {
      try {
        // Mã hóa mật khẩu người dùng trước khi lưu vào cơ sở dữ liệu
        const hashedPassword = await bcryptHelpers.hashPassword(data.password);
        //Thêm người dùng vào cơ sở dữ liệu
        await authModel.insert({
          email: data.email,
          password: hashedPassword,
          user_type_id: 1,
        });
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  }

  updateUser(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const { email, id } = data;
        await userModel.update({ email }, { id });
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  }

 

 
  async authentication( data) {
    const { email, password } = data;
    const user = await authModel.findById({ email, user_type_id: 1 });
    if (user.length === 0) {
      return ;
    }
    const isPasswordMatch = await bcrypt.compare(password, user[0].password);
    if (!isPasswordMatch) {
      return;
    }
    return user;
  }
  async findUser(data){
    const {email,id,user_type_id}=data
    const user = await authModel.findById({ id,email,user_type_id },["refresh_token"]);

    if(user.length==0){
      return null;
    }
    return user;
  }
  
  updateRefeshToken({refreshToken:refresh_token,id}) {
    return new Promise(async (resolve, reject) => {
      try {
        await authModel.update({ refresh_token }, { id });
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  }
 // Hàm xoá người dùng
 deleteRefeshToken({id}) {
  return new Promise(async (resolve, reject) => {
    try {
      await authModel.update({ refresh_token:"" }, { id });
      resolve();
    } catch (err) {
      reject(err);
    }
  });
}

  // Hàm cập nhật thông tin người dùng
  update() {
    // ...
  }

 
}
module.exports = new AuthService();
