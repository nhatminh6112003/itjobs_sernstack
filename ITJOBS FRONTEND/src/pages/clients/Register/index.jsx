import { Link } from "react-router-dom";


import config from "~/config/config.routes";
import styles from "./Register.module.css"
import classNames from "classnames/bind";
const cx=classNames.bind(styles)
const Register = () => {
  return (

 <section className={cx("register-form","cb-section")}>
    <div className={cx("container")}>
      <div className={cx("cb-title","cb-title-center")}>
        <h2>Tham gia ngay hôm nay</h2>
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
                        alt=""
                        src="./img/job-alert/i1.png"
                        style={{}}
                      />
                    </div>
                    <div className={cx("figcaption")}>
                      <div className={cx("title")}>
                        <h3>Thông báo việc làm</h3>
                      </div>
                      <div className={cx("caption")}>
                        <p>
                          Được cập nhật các cơ hội việc làm mới nhất từ nhiều
                          công ty hàng đầu
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
                        alt=""
                        src="./img/job-alert/i2.png"
                        style={{}}
                      />
                    </div>
                    <div className={cx("figcaption")}>
                      <div className={cx("title")}>
                        <h3>Kiếm việc dễ dàng</h3>
                      </div>
                      <div className={cx("caption")}>
                        <p>
                          Tìm được công việc bạn yêu thích phù hợp với kỹ năng
                          và tiêu chí bạn quan tâm
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
                        alt=""
                        src="./img/job-alert/i3.png"
                        style={{}}
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
                <li>
                  <Link style={{padding:"5px 0"}}  
                  to={config.clientsRoutes.login}

                    title="Đăng Nhập "
                  >
                    Đăng Nhập
                  </Link>
                </li>
                <li className={cx("active")}>
                  <Link style={{padding:"5px 0"}} 
                  to={config.clientsRoutes.register}

                    title="Đăng ký"
                  >
                    Đăng ký
                  </Link>
                </li>
              </ul>
              {/* <div className={cx("choose-follow")}>
                <p>Đăng nhập bằng</p>
                <ul className={cx("list-follow")}>
                  <li>
                    <button
                      className="fb"
                      onclick="popupapi('facebook','aHR0cHM6Ly9jYXJlZXJidWlsZGVyLnZuL3ZpL2pvYnNlZWtlcnMvbG9naW5mYWNlYm9vaz9jaGVjaz0xJm93bmVyPWtpZW12aWVjJmFwcGx5X3VybD1odHRwczovL2NhcmVlcmJ1aWxkZXIudm4vdmkvam9ic2Vla2Vycy9yZGxvZ2luc2M=');"
                    >
                      <em className="fa fa-facebook" />
                      Facebook
                    </button>
                  </li>
                  <li>
                    <button
                      className="gg"
                      onclick="popupapi('google','aHR0cHM6Ly9jYXJlZXJidWlsZGVyLnZuL3ZpL2pvYnNlZWtlcnMvbG9naW5nb29nbGU=');"
                    >
                      <em className="fa fa-google" />
                      Google
                    </button>
                  </li>
                </ul>
              </div>
              <div className={cx("or-line")}>
                <span>hoặc </span>
              </div> */}
              <div className={cx("form-register")}>
                <form
                  name={cx("frmRegister")}
                  id={cx("frmRegister")}
                  method="post"
                  action="https://careerbuilder.vn/vi/jobseekers/member/register"
                  autoComplete="off"
                >
                  <div className={cx("form-group","form-text")}>
                    <input
                      name={cx("firstname")}
                      id={cx("firstname")}
                      maxLength={15}
                      type="text"
                      onkeyup="this.setAttribute('value', this.value);"
                      defaultValue=""
                    />
                    <label htmlFor="">* Tên</label>
                    <span
                      className="error_firstname"
                      style={{ display: "none" }}
                    />
                  </div>
                  <div className={cx("form-group","form-text")}>
                    <input
                      name={cx("lastname")}
                      id={cx("lastname")}
                      maxLength={50}
                      type="text"
                      onkeyup="this.setAttribute('value', this.value);"
                      defaultValue=""
                    />
                    <label htmlFor="">* Họ và tên lót</label>
                    <span
                      className="error_lastname"
                      style={{ display: "none" }}
                    />
                  </div>
                  <div className={cx("form-group","form-text")}>
                    <input
                      name="email"
                      id="email"
                      maxLength={50}
                      type="text"
                      onkeyup="this.setAttribute('value', this.value);"
                      defaultValue=""
                    />
                    <label htmlFor="">* Email</label>
                    <span className="error_email" style={{ display: "none" }} />
                  </div>
                  <div className={cx("form-group","form-text")}>
                    <input
                      type="password"
                      name={cx("password")}
                      id={cx("password")}
                      maxLength={255}
                      onkeyup="this.setAttribute('value', this.value);"
                      defaultValue=""
                    />
                    <label htmlFor="">* Mật khẩu</label>
                    <span
                      className="error_password"
                      style={{ display: "none" }}
                    />
                  </div>
                  <div className={cx("form-group","form-text")}>
                    <input
                      type="password"
                      name={cx("confirm_password")}
                      id={cx("confirm_password")}
                      maxLength={255}
                      onkeyup="this.setAttribute('value', this.value);"
                      defaultValue=""
                    />
                    <label htmlFor="">* Xác nhận mật khẩu</label>
                    <span
                      className="error_confirm_password"
                      style={{ display: "none" }}
                    />
                  </div>
                  <div className={cx("form-group","form-checkbox")}>
                    <input
                      type="checkbox"
                      defaultChecked="checked"
                      name="chkAgree"
                      id="chkAgree"
                      defaultValue={1}
                    />
                    <label htmlFor="chkAgree">
                      Đồng ý với{" "}
                      <a href="https://careerbuilder.vn/vi/jobseekers/security">
                        Quy định bảo mật
                      </a>{" "}
                      và{" "}
                      <a href="https://careerbuilder.vn/vi/jobseekers/use">
                        Thỏa thuận sử dụng
                      </a>{" "}
                      của CareerBuilder.vn
                    </label>
                    <span
                      className="error_chkAgree"
                      style={{ display: "none" }}
                    />
                  </div>
                  <div className="form-group form-submit">
                    <input
                      type="hidden"
                      name="csrf_token_register"
                      defaultValue="0735f55b0226e526857f0e0a51bc48a33e536442d2c56367ca0564e77c923769"
                    />
                    <button className={cx("btn-gradient")}>Đăng ký</button>
                  </div>
                </form>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>



  )
}

export default Register