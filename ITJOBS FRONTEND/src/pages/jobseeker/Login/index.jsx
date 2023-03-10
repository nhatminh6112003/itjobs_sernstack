import { useNavigate} from "react-router";
import { Link,Navigate } from "react-router-dom";
import { useDispatch,useSelector} from "react-redux";
import { useMutation } from "react-query";
import classNames from "classnames/bind";

import axiosClient from "~/api/axiosClient";

import { loginStart, loginSuccess } from "~/features/authentication/authSlice";
import config from "~/config/config.routes";
import styles from "./Login.module.css";
import LoginForm from "./Form/LoginForm";
import { loginUser } from "~/features/authentication/authRequest";
const cx=classNames.bind(styles);
const Login = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
 
  const handleLoginFormSubmit=(data) => { 
    loginUser(data,dispatch,navigate) 
   }
   const currentUser = useSelector((state) => state.auth.login.currentUser);


  // const handleSubmit = async (e) => {
    // const [email, password] = e.target.elements;
    // e.preventDefault();
    // mutate({
    //   email:email.value,
    //   password:password.value
    // })
    
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

      // if (response.isSuccess) {
      //   axiosClient.defaults.headers.common[
      //     "Authorization"
      //   ] = `Bearer ${response.data.accessToken}`;
      // }


    //     navigate("/");
    // } catch (error) {
    
    //   if (error?.response?.data) {
    //     setError(error.response.data);
    //   } else {
    //     setError(error.message);
    //   }
    //   return { success: false, message: error.message };
    // }
  // };



  return (
    <>

     {!currentUser ?  <section className={cx("signin-form","cb-section")}>
  <div className={cx("container")}>
    <div className={cx("cb-title","cb-title-center")}>
      <h2>Ch??o m???ng b???n tham gia ItJobs</h2>
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
                      <h3>Th??ng b??o vi???c l??m</h3>
                    </div>
                    <div className={cx("caption")}>
                      <p>
                        ???????c c???p nh???t c??c c?? h???i vi???c l??m m???i nh???t t??? nhi???u c??ng
                        ty h??ng ?????u
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
                      <h3>Ki???m vi???c d??? d??ng</h3>
                    </div>
                    <div className={cx("caption")}>
                      <p>
                        T??m ???????c c??ng vi???c b???n y??u th??ch ph?? h???p v???i k??? n??ng v??
                        ti??u ch?? b???n quan t??m
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
                      <h3>???ng tuy???n nhanh ch??ng</h3>
                    </div>
                    <div className={cx("caption")}>

                      <p>
                        D??? d??ng ???ng tuy???n nhi???u v??? tr?? m?? kh??ng c???n m???t nhi???u
                        th???i gian
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
                to={config.jobSeekerRoutes.login}

                  title="????ng Nh???p "
                >
                  ????ng Nh???p{" "}
                </Link>
              </li>
              <li>
                <Link
                  to={config.jobSeekerRoutes.register}
                  title="????ng k??"
                >
                  ????ng k??
                </Link>
              </li>
            </ul>
            <div className={cx("form-login")}>

        <LoginForm onSubmit={handleLoginFormSubmit} className={cx}/>
             
            </div>
            <div className={cx("forgot-password")}>
              <a href="https://careerbuilder.vn/vi/jobseekers/forgotpassword">
                Qu??n m???t kh???u?
              </a>
            </div>
          </div>
        </div> 
      </div>
    </div>
  </div>
</section> : <Navigate to={config.jobSeekerRoutes.home} />}
      {/* <form onSubmit={handleSubmit}>
        <div>Email</div>
        <input type="text" name="email" />
        <div>Password</div>

        <input type="text" name="password" />
        <div>
          <button type="submit">G???i</button>
        </div>
      </form> */}


 
    </>
  );
};
export default Login;
