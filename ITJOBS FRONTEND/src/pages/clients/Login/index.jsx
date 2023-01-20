import { useState, useEffect } from "react";
import { useNavigate} from "react-router";
import { Link,Navigate } from "react-router-dom";

import axiosClient from "~/api/axiosClient";
import { loginStart, loginSuccess } from "~/features/authentication/slices/authSlice";
import { useDispatch,useSelector} from "react-redux";
import config from "~/config/config.routes";
import styles from "./Login.module.css";
import classNames from "classnames/bind";
import { useMutation } from "react-query";

import Loading from "~/components/Loading";
const cx=classNames.bind(styles)
const Login = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const currentUser = useSelector((state) => state.auth.login.currentUser);
  const {mutate,error}=useMutation({
    mutationFn:(body)=>{
      return axiosClient.post("/users/login",body)
    }
  })
  const errorForm=() => {
    if(error.response.data?.message){
      return error.response.data
    }
    return null
  }


  const handleSubmit = async (e) => {
    const [email, password] = e.target.elements;
    e.preventDefault();
    mutate({
      email:email.value,
      password:password.value
    })
    
    // try {
    //   dispatch(loginStart());
    //   const response = await axiosClient.post(
    //     "/users/login",
    //     {
    //       email: email.value,
    //       password: password.value,
    //     }
    //   );

    //   dispatch(loginSuccess(response.data));

    //   if (response.isSuccess) {
    //     axiosClient.defaults.headers.common[
    //       "Authorization"
    //     ] = `Bearer ${response.data.accessToken}`;
    //   }


    //     navigate("/");
    // } catch (error) {
    
    //   if (error?.response?.data) {
    //     setError(error.response.data);
    //   } else {
    //     setError(error.message);
    //   }
    //   return { success: false, message: error.message };
    // }
  };

  // const getDataUser = async () => {
  //   const response = await axiosClient.get("/users/dataUser");
  //   console.log(response);
  // };

  const Logout = () => {
    axiosClient
      .post("/users/logout", {}, { withCredentials: true })
      .then((res) => {});
  };

  return (
    <>
    {error?.response?.data?.message && <span style={{color:'red'}}>{error?.response?.data?.message}</span> }
     {!currentUser ?  <section className={cx("signin-form","cb-section")}>
  <div className={cx("container")}>
    <div className={cx("cb-title","cb-title-center")}>
      <h2>Chào mừng bạn tham gia ItJobs</h2>
    </div>
    <div className={cx("box-shadown")}>
      <div className={cx("row")}>
        <div className={cx("col-md-6")}>
          <div className={cx("information")}>
            <div className={cx("list-info")} id={cx("list-info")}>
              <div className={cx("job-item")}>
                <div className={cx("figure")}>
                  <div className={cx("image","is-blue")}>
                    <img
                      className="lazy-bg"
                      src="	https://static.careerbuilder.vn/themes/careerbuilder/img/job-alert/i1.png"
                      alt=""
                    />
                  </div>
                  <div className={cx("figcaption")}>
                    <div className={cx("title")}>
                      <h3>Thông báo việc làm</h3>
                    </div>
                    <div className={cx("caption")}>
                      <p>
                        Được cập nhật các cơ hội việc làm mới nhất từ nhiều công
                        ty hàng đầu
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx("job-item")}>
              <div className={cx("figure")}>
              <div className={cx("image","is-green")}>

                    <img
                      className="lazy-bg"
                      src="	https://static.careerbuilder.vn/themes/careerbuilder/img/job-alert/i2.png"
                      alt=""
                    />
                  </div>
                  <div className={cx("figcaption")}>
                    <div className={cx("title")}>
                      <h3>Kiếm việc dễ dàng</h3>
                    </div>
                    <div className={cx("caption")}>
                      <p>
                        Tìm được công việc bạn yêu thích phù hợp với kỹ năng và
                        tiêu chí bạn quan tâm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx("job-item")}>
              <div className={cx("figure")}>
              <div className={cx("image","is-yellow")}>
                    <img
                      className="lazy-bg"
                      src="	https://static.careerbuilder.vn/themes/careerbuilder/img/job-alert/i3.png"
                      alt=""
                    />
                  </div>
                  <div className={cx("figcaption")}>
                    <div className={cx("title")}>
                      <h3>Ứng tuyển nhanh chóng</h3>
                    </div>
                    <div className={cx("caption")}>

                      <p>
                        Dễ dàng ứng tuyển nhiều vị trí mà không cần mất nhiều
                        thời gian
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("col-md-6")}>
          <div className={cx("main-form")}>
            <ul className={cx("list-tabs")}>
              <li className={cx("active")}>
                <Link
                to={config.clientsRoutes.login}

                  title="Đăng Nhập "
                >
                  Đăng Nhập{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to={config.clientsRoutes.register}
                  title="Đăng ký"
                >
                  Đăng ký
                </Link>
              </li>
            </ul>
            <div className={cx("form-login")}>
              <form 
                onSubmit={handleSubmit}
                name="frmLogin"
                id={cx("frmLogin")}
                method="POST"
                noValidate="true"
              >
                <div className={cx("form-group","form-text")}>
                  <input
                    required=""
                    data-pristine-required-message="Vui lòng nhập email của bạn"
                    type="text"
                    name="email"
                    id={cx("email")}
                    autoComplete="on"
                  />
                  <label htmlFor="">Vui lòng nhập email</label>
                </div>
                <div className={cx("form-group","form-text")}>
                  <input
                    required=""
                    data-pristine-required-message="Vui lòng nhập password của bạn"
                    type="password"
                    name="password"
                    autoComplete="off"
                  />
                  <label htmlFor="">Vui lòng nhập mật khẩu</label>
                </div>
                <div className={cx("form-group","form-checkbox")}>
                  <input
                    type="checkbox"
                    name="chkSave"
                    defaultValue={1}
                    id="chkSave"
                  />
                  <label htmlFor="chkSave">Tự động đăng nhập</label>
                </div>
                <div style={{ color: "red" }} />
                <div className={cx("form-group","form-submit")}>
                  
                  <button
                    type="submit"
                    id={cx("submit_login")}
                    className={cx("btn-gradient")}
                  >
                    Đăng nhập
                  </button>
                </div>
              </form>
            </div>
            <div className={cx("forgot-password")}>
              <a href="https://careerbuilder.vn/vi/jobseekers/forgotpassword">
                Quên mật khẩu?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> : <Navigate to={config.clientsRoutes.home} />}
      {/* {error && <div style={{ color: "red" }}>{error.message}</div>}
      <form onSubmit={handleSubmit}>
        <div>Email</div>
        <input type="text" name="email" />
        <div>Password</div>

        <input type="text" name="password" />
        <div>
          <button type="submit">Gửi</button>
        </div>
      </form>

      <button onClick={getDataUser}>Get dataUser</button> */}

 
    </>
  );
};
export default Login;
