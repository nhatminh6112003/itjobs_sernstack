import responseStatus from "@src/constants/responseStatus";
import userModel from "@src/models/userModel.js";
import bcryptHelpers from "@src/helpers/bcryptHelpers";

import dotenv from "dotenv";
import puppeteer from "puppeteer";
import fs from "fs";
import path from "path";
import bcrypt from "bcrypt";


dotenv.config();

class UserService {
  // Hàm tạo người dùng mới
  async createUser(data) {
    return new Promise(async (resolve, reject) => {
      try {
        // Mã hóa mật khẩu người dùng trước khi lưu vào cơ sở dữ liệu
        const hashedPassword = await bcryptHelpers.hashPassword(data.password);
        //Thêm người dùng vào cơ sở dữ liệu
        await userModel.insert({
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

  // Hàm lấy tất cả thông tin người dùng
  async dataUser() {
    return userModel.getAllUser();
  }

  // Hàm mã hóa mật khẩu người dùng
  //Tương tự nhau
  //  try {
  //   const hashPassword = await bcrypt.hash(password, 10);
  //   return await hashPassword;
  // } catch (err) {
  //     console.error(err);
  // }

  async authentication( data) {
    const { email, password } = data;
    const user = await userModel.findById({ email, user_type_id: 1 });
    if (user.length === 0) {
      return ;
    }
    const hashedPassword = await userModel.findById({ email, user_type_id: 1 }, [
      "password",
    ]);
    const isPasswordMatch = await bcrypt.compare(password, hashedPassword[0].password);
    if (!isPasswordMatch) {
      return;
    }
    return user;
  }
  
  refeshToken() {}

  async generatePdf(res) {
    try {
      const htmlFilePath = "../views/template.hbs";
      const absoluteHtmlFilePath = path.resolve(__dirname, htmlFilePath);
      const html = await fs.readFileSync(absoluteHtmlFilePath, "utf8");
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.setContent(html);

      const pdf = await page.pdf({ format: "A4" });

      res.contentType("application/pdf");

      res.send(pdf);
      await browser.close();
    } catch (error) {
      res.json(responseStatus.INTERNAL_SERVER_ERROR);
    }
  }

  // Hàm cập nhật thông tin người dùng
  update() {
    // ...
  }

  // Hàm xoá người dùng
  delete() {
    // ...
  }
}
module.exports = new UserService();
