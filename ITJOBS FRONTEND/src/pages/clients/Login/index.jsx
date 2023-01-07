import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router";

import axiosClient from "~/api/axiosClient";
import { loginStart, loginSuccess } from "~/features/authentication/slices/authSlice";
import { useDispatch } from "react-redux";


const Login = () => {
  const [error, setError] = useState();
  const navigate = useNavigate();
  const dispatch=useDispatch();

  const handleSubmit = async (e) => {
    const [email, password] = e.target.elements;
    e.preventDefault();
    try {
      dispatch(loginStart());
      const response = await axiosClient.post(
        "/users/login",
        {
          email: email.value,
          password: password.value,
        },
        { withCredentials: true }
      );

      dispatch(loginSuccess(response.data));

      if (response.isSuccess) {
        axiosClient.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.accessToken}`;
      }
      //   phải tạo hàm loadUser kiểm tra trong cookie có refresh token không nếu có thì đã đăng nhập không thì chưa

      //   Chúng ta phải set refreshToken hết hạn 1 năm vì đây cũng là khoảng thời gian refeshToken ở trong hệ thống hết hạn và chúng ta không thể sử dụng refreshToken ở trong cookie sử dụng các tác vụ được nữa

        navigate("/");
    } catch (error) {
    
      if (error?.response?.data) {
        setError(error.response.data);
      } else {
        setError(error.message);
      }
      return { success: false, message: error.message };
    }
  };

  const getDataUser = async () => {
    const response = await axiosClient.get("/users/dataUser");
    console.log(response);
  };

  const Logout = () => {
    axiosClient
      .post("/users/logout", {}, { withCredentials: true })
      .then((res) => {});
  };

  return (
    <>
      {error && <div style={{ color: "red" }}>{error.message}</div>}
      <form onSubmit={handleSubmit}>
        <div>Email</div>
        <input type="text" name="email" />
        <div>Password</div>

        <input type="text" name="password" />
        <div>
          <button type="submit">Gửi</button>
        </div>
      </form>

      <button onClick={getDataUser}>Get dataUser</button>

      <div>
        <div className="box">
         
          <button className="button yellow">Renew Cookies</button>
        </div>
      </div>
    </>
  );
};
export default Login;
