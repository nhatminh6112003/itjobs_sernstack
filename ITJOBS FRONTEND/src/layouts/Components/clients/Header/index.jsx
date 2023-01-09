import { Link } from "react-router-dom";
import config from "~/config";
// import CardItem from "~/layouts/Components/clients/JobItem";
import styles from "./Header.module.css";
import classNames from "classnames/bind";
const cx=classNames.bind(styles);
const Header = () => {
  return (
    <>
      <header>
  <div className={cx("container-fluid")}>
    <div className={cx("main-wrap")}>
      <div className={cx("left-wrap")}>
        <div className={cx("button-hambuger")}>
          <span className={cx("mdi mdi-menu")} />
        </div>
        <div className={cx("logo")}>
          <a href="" title="Tuyển dụng & Tìm kiếm việc làm nhanh">
            <img
              style={{ height: 80 }}
              src=""
              alt="Tuyển dụng & Tìm kiếm việc làm nhanh"
            />
          </a>
        </div>
        <div className={cx("main-menu")}>
          <ul className={cx("menu")}>
            <li>
              <a
                className={cx("px-2")}
                href="<?= _WEB_ROOT . '/Alljob' ?>"
                title="Việc làm mới nhất"
              >
                Việc làm mới nhất
              </a>
            </li>
            <li>
              {" "}
              <a
                className={cx("px-2")}
                href="<?= _WEB_ROOT.'/tim_viec_lam' ?>"
                title="Ngành nghề / Địa điểm"
              >
                Ngành nghề / Địa điểm
              </a>
            </li>
            <li>
              {" "}
              <a
                className={cx("px-2")}
                href="http://localhost//itjobs/Alljob?keyword=&industry%5B%5D=1"
                title="Tiếp thị / Marketing"
              >
                Tiếp thị / Marketing
              </a>
            </li>
            <li>
              {" "}
              <a
                className={cx("px-2")}
                href="http://localhost//itjobs/Alljob?keyword=&industry%5B%5D=2"
                title="CNTT - Phần mềm"
              >
                CNTT - Phần mềm
              </a>
            </li>
            <li>
              {" "}
              <a
                href="<?= _WEB_ROOT.'/tinh_luong_gross_net' ?>"
                title="Tính Lương"
              >
                Tính Lương
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={cx("right-wrap")}>
        <div className="main-noti dropdown">
          {/* <a href="https://careerbuilder.vn/thong-bao-viec-lam" title="Thông Báo Việc Làm">
                  <span class="mdi mdi-bell"></span>
              </a>
              <div class="dropdown-menu">
                  <div class="noti">
                      <p></p>
                      <p>Chào mừng bạn đến CareerBuilder.vn</p>
                      <p>Đăng nhập ngay để xem việc làm phù hợp với bạn, nhà tuyển dụng đã xem hồ sơ của bạn và
                          cập nhật nhiều hơn nữa ...<br><br></p>
                      <p></p>
                      <a class="email" href="https://careerbuilder.vn/thong-bao-viec-lam" title="Tạo Ngay">
                          Tạo Ngay
                      </a>
                  </div>
              </div> */}
        </div>
        <div className={cx("main-login","dropdown")}>
          <div className="title-login">
            <a href="" title="Đăng nhập">
              {/* <span class="mdi mdi-account-circle"></span> */}
              Đăng nhập
            </a>
          </div>
        </div>
        <div className="main-register">
          <a href="" title="Đăng ký">
            Đăng ký
          </a>
        </div>
        <div className={cx("main-login","logged","dropdown")}>
          <a href="" rel="nofollow">
            <span className="mdi mdi-account-circle" />
            Chào
            <span className={cx("nameUser")} />
          </a>
          <div className={cx("dropdown-menu")}>
            <ul>
              <li>
                <a href="" rel="nofollow">
                  Quản Lý Hồ Sơ
                </a>
              </li>
              <li>
                <a href="" rel="nofollow">
                  Hồ sơ của tôi
                </a>
              </li>
              <li>
                <a href="" rel="nofollow">
                  Việc làm đã lưu
                </a>
              </li>
              <li>
                <a href="" rel="nofollow">
                  Việc làm đã ứng tuyển
                </a>
              </li>
              <li>
                <a href="" rel="nofollow">
                  Cài đặt
                </a>
              </li>
              <li>
                <a
                  onclick="return localStorage.removeItem('scrollPosition');"
                  href="<?= _WEB_ROOT . '/account/logout' ?>"
                  rel="nofollow"
                >
                  Thoát
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={cx("main-employer","dropdown")}>
          <a>
            <div className={cx("dropdown-toggle")}>
              <h4>
                Dành cho nhà tuyển dụng
                <em className="mdi mdi-chevron-down" />
              </h4>
              <p>Đăng tuyển, Tìm ứng viên</p>
            </div>
          </a>
          <div className={cx("dropdown-menu")}>
            <ul>
              <li>
                <Link to={config.clientsRoutes.login}>Đăng nhập</Link>
              </li>
              <li>
                <a href="" title="Đăng Tuyển Dụng">
                  Đăng Tuyển Dụng
                </a>
              </li>
              <li>
                <a href="">Tìm Ứng Viên</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="backdrop" />
</header>
    </>
  );
};

export default Header;
