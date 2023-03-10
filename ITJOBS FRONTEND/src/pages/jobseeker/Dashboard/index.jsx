//library
import classNames from "classnames/bind"

import styles from "./Dashboard.module.css"
import SideBar from "~/layouts/Components/jobseeker/SideBar";
import config from "~/config/config.routes"
import {useSelector} from "react-redux"
//icon
import EditIcon from '@mui/icons-material/Edit';
import LockIcon from '@mui/icons-material/Lock';
import LanguageIcon from '@mui/icons-material/Language';
import BoltIcon from '@mui/icons-material/Bolt';

const cx=classNames.bind(styles);

const Dashboard = () => {
    
  return (
<div className={cx("page-content","d-flex","align-items-stretch")}> 
<SideBar className={cx} />
 <div className={cx("content-inner")}>

<div className={cx("container-fluid")}>
  <div className={cx("dash-board-wrap")}>
    <div className={cx("row","mergebox")}>
      <div className={cx("col-lg-8")}>
        <div className={cx("widget","widget-2")}>
          <div className={cx("widget-head")}>
            <div className={cx("cb-title-h3")}>
              <h3>Careerbuilder Profile</h3>
            </div>
          </div>
          <div className={cx("widget-body")}>
            <div className={cx("row")}>
              <div className={cx("col-lg-4","col-xl-3")}>
                <div className={cx("img-info")}>
                  <div className={cx("figure")}>
                    <div className={cx("image","img-result","hide")}>
                      <input
                        style={{ display: "none" }}
                        onchange="return ajaxFileUpload();"
                        type="file"
                        className={cx("file")}
                        id="fileAvatar"
                        name="fileAvatar"
                      />
                      <img
                        id="img_mem_avatar"
                        src="https://static.careerbuilder.vn/themes/careerbuilder/img/dash-board/1.png"
                        alt="Lop Minh"
                      />
                    </div>
                    <div className={cx("edit-image","dropdown")}>
                      <div className={cx("dropdown-menu")}>
                        <ul>
                          <li className={cx("upload-pro")}>
                            <a
                              href=""
                              onclick="choose_file();"
                            >
                            
                              <span>T???i h??nh ???nh</span>
                            </a>
                          </li>
                          <li className={cx("view-pro")}>
                            <a
                              href=""
                              onclick="removeAvarta();"
                            >
                              {" "}
                             
                              <span>X??a h??nh ???nh</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className={cx("mobile-show")}>
                    <div className={cx("cb-name")}>
                      <h2>Lop Minh</h2>
                    </div>
                    <div className={cx("information")}>
                      <div className={cx("assistant")}>
                        <span id="titleresume_17722295">
                          Frontend Developer
                        </span>{" "}
                        <a
                          href="https://careerbuilder.vn/vi/jobseekers/mykiemviec/my-profile"
                          style={{ marginLeft: 10 }}
                          title="H??? s?? Careerbuilder"
                        >
                          <em
                            className={cx("material-icons")}
                            style={{ fontSize: 16 }}
                          >
                            create
                          </em>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx("col-lg-8","col-xl-9")}>
                <div className={cx("cb-name")}>
                  <h2>Lop Minh</h2>
                </div>
                <div className={cx("information")}>
                  <div className={cx("assistant")}>
                    <span>Frontend Developer</span>{" "}
                    <a
                      href="https://careerbuilder.vn/vi/jobseekers/mykiemviec/my-profile"
                      style={{ marginLeft: 10 }}
                      title="H??? s?? Careerbuilder"
                    >
                     <EditIcon fontSize="small" />
                    </a>
                  </div>
                  <ul className={cx("desired")}>
                    <li>
                      <p>Ch??a c?? kinh nghi???m</p>
                    </li>
                    <li>
                      <p>
                        C???p b???c mong mu???n:{" "}
                        <span>Sinh vi??n/ Th???c t???p sinh</span>
                      </p>
                    </li>
                    <li>
                      <p>
                        M???c l????ng mong mu???n:{" "}
                        <span> 500,000 - 1,000,000 VND</span>
                      </p>
                    </li>
                    <li style={{ position: "relative" }}>
                      <p id="date_17722295">
                        Ng??y c???p nh???t: 27/12/2022
                        <a
                          title="C???p nh???t h??? s??"
                          href=""
                          className={cx("ac_refesh")}
                          rel={17722295}
                        >
                     
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={cx("col-lg-12")}>
                <div className={cx("progress-bar-status","not-approve")}>
                  <div className={cx("profile-strength")}>
                    <p>
                      M???c ????? ho??n th??nh: <span>Kh??ng ???????c duy???t</span>
                    </p>
                  </div>
                  <div className={cx("noti")}>
                    <em className={cx("mdi","mdi-alert-circle-outline")} />
                    <p>
                      Kh??ng ???????c duy???t - H??? s?? c???a b???n kh??ng ???????c duy???t n??n
                      vui l??ng check mail v?? l??m theo h?????ng d???n.
                    </p>
                  </div>
                  <div className={cx("progress-bar")}>
                    <div className={cx("progress")}>
                      <progress
                        className={cx("progress-main")}
                        max={7}
                        value={2}
                      />
                    </div>
                    <div className={cx("progress-row")}>
                      {" "}
                      <div className={cx("line","active")} />
                      <div className={cx("line","active")} />
                      <div className={cx("line","active")} />
                      <div className={cx("line","")} />
                      <div className={cx("line","")} />
                      <div className={cx("line","")} />
                      <div className={cx("line","")}>
                        <span className={cx("success")} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx("col-lg-12","cvcht-slide")}>
                <div className={cx("swiper-container","swiper-container-initialized","swiper-container-horizontal")}>
                  <div
                    className={cx("swiper-wrapper")}
                    style={{ transform: "translate3d(0px, 0px, 0px)" }}
                  >
                    <div
                      className={cx("swiper-slide","swiper-slide-active")}
                      style={{ width: "300.5px", marginRight: 15 }}
                    >
                      <a href="https://careerbuilder.vn/vi/jobseekers/mykiemviec/my-profile#other-activity-section">;
                        <div className={cx("item-cvcht")}>
                          <div className={cx("col-sm-3","icon")}>
                            <img src="img/dash-board/i13.png" alt="" />
                          </div>
                          <div className={cx("col-sm-9","txt")}>Ho???t ?????ng kh??c</div>
                        </div>
                      </a>
                    </div>
                  </div>
                  <span
                    className={cx("swiper-notification")}
                    aria-live="assertive"
                    aria-atomic="true"
                  />
                </div>
                <div
                  className={cx("swiper-next","swiper-button-disabled")}
                  tabIndex={0}
                  role="button"
                  aria-label="Next slide"
                  aria-disabled="true"
                >
                  <span className={cx("lnr","lnr-chevron-right")} />
                </div>
                <div
                  className={cx("swiper-prev","swiper-button-disabled")}
                  tabIndex={0}
                  role="button"
                  aria-label="Previous slide"
                  aria-disabled="true"
                >
                  <span className={cx("lnr","lnr-chevron-left")} />
                </div>
              </div>{" "}
              <div className={cx("col-lg-12","function-bottom")}>
                <div className={cx("button-list")}>
                  <div className={cx("item")}>
                    <a
                      title="C???p nh???t h??? s??"
                      href=""
                      className={cx("ac_refesh")}
                      rel={17722295}
                    >
                      <span className={cx("mdi","mdi-rotate-3d-variant")} />
                      C???p nh???t h??? s??
                    </a>
                  </div>
                  <div className={cx("item")}>
                    <a id="btn_view_cbprofile" href="">
                      <span className={cx("mdi","mdi-eye")} />
                      Xem h??? s??
                    </a>
                  </div>
                  <div className={cx("item")}>
                    <a
                      href=""
                      onclick="downloadCvProfile(17722295)"
                    >
                      <span className={cx("mdi","mdi-download")} />
                      T???i h??? s??
                    </a>
                  </div>
                </div>
                <div className={cx("edit-profile")}>
                  <a href="https://careerbuilder.vn/vi/jobseekers/mykiemviec/changetemplate">;
                    Ch???nh m???u h??? s??
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("col-lg-4")}>
        <div className={cx("widget-b","searchable-cv-widget")}>
          <h4>
            Cho ph??p t??m ki???m Profile CareerBuilder
            <div className={cx("tips","p1")} data-type={1}>
              <div className={cx("icon")}>
                <em className={cx("mdi","mdi-lightbulb")} />
              </div>
              <p>Tips</p>
            </div>
          </h4>
          <div
            className={cx("switch-status","group_searchable")}
            id="cv_searchable_17722295"
            data-id={17722295}
            data-complete={1}
          >
            <a
              href=""
              data-type={2}
              className={cx("lock","","active","")}
            >
            <LockIcon sx={{fontSize:'14.5px',marginRight:'5px'}}/>
            Kh??a
            </a>
            <a href="" data-type={1} className={cx("public","")}>
            <LanguageIcon sx={{fontSize:'14.5px',marginRight:'5px'}}/>
            C??ng khai
            </a>
            <a href="" data-type={3} className={cx("flash","")}>
              <BoltIcon sx={{fontSize:'14.5px',marginRight:'5px'}}/>
              Kh???n c???p
            </a>
          </div>
          <p>
            B???n c?? th??? cho ph??p nh?? tuy???n d???ng t??m ki???m h??? s?? CareerBuilder
          </p>
        </div>
        <div className={cx("widget-b","jobalert-cv-widget")}>
          <h4>
            Nh???n th??ng b??o vi???c l??m
            <div className={cx("tips","p2")} data-type={2}>
              <div className={cx("icon")}>
                <em className={cx("mdi","mdi-lightbulb")} />
              </div>
              <p>Tips</p>
            </div>
          </h4>
          <div
            className={cx("switch-status","group_jobalert_top")}
            id="cv_jobalert_17722295"
            data-id={17722295}
            data-complete={1}
          >
            <a
              href=""
              data-type={0}
              className={cx("inactive","")}
            >
              Kh??ng nh???n
            </a>
            <a
              href=""
              data-type={1}
              className={cx("actives","","active","")}
            >
              Nh???n
            </a>
          </div>
          <p>Nh???n th??ng b??o vi???c l??m ph?? h???p v???i h??? s?? n??y m???i 2 tu???n</p>
        </div>
      </div>
    </div>
    <div className={cx("row")}>
      <div className={cx("col-sm-6","col-lg-3")}>
        <div className={cx("widget-1","b1")}>
          <div className={cx("widget-head")}>
            <p>0</p>
            <p>Nh?? tuy???n d???ng xem h??? s?? c???a t??i</p>
          </div>
          <div className={cx("widget-body")}>
            <div className={cx("item")}>
              <div className={cx("number")}>
                <a
                  href="https://careerbuilder.vn/vi/jobseekers/myresume/viewbyemp"
                  className={cx("x1")}
                >
                  0
                </a>
              </div>
              <p>
                <a href="https://careerbuilder.vn/vi/jobseekers/myresume/viewbyemp">;
                  NTD xem qua h??? s?? CB
                </a>
              </p>
            </div>
            <div className={cx("item")}>
              <div className={cx("number")}>
                <a
                  href="https://careerbuilder.vn/vi/jobseekers/myresume/viewbyemp"
                  className={cx("x2")}
                >
                  0
                </a>
              </div>
              <div>
                <a href="https://careerbuilder.vn/vi/jobseekers/myresume/viewbyemp">;
                  NTD xem qua h??? s?? vi???c l??m kh???n c???p
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("col-sm-6","col-lg-3")}>
        <div className={cx("widget-1","b2")}>
          <div className={cx("widget-head")}>
            <p>0</p>
            <p>Nh?? tuy???n d???ng ???????c c??i ?????t h???n ch??? xem h??? s??</p>
          </div>
          <div className={cx("widget-body")}>
            <div className={cx("item")}>
              <div className={cx("nonum")}>
                <a href="https://careerbuilder.vn/vi/jobseekers/blacklist">;
                  Xem th??m
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("col-sm-6","col-lg-3")}>
        <div className={cx("widget-1","b3")}>
          <div className={cx("widget-head")}>
            <p>0</p>
            <p>Vi???c l??m ???? l??u</p>
          </div>
          <div className={cx("widget-body")}>
            <div className={cx("item")}>
              <div className={cx("nonum")}>
                <a href="https://careerbuilder.vn/vi/jobseekers/mykiemviec/jobsaved">;
                  Xem th??m
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("col-sm-6","col-lg-3")}>
        <div className={cx("widget-1","b4")}>
          <div className={cx("widget-head")}>
            <p>0</p>
            <p>Vi???c l??m ???? n???p</p>
          </div>
          <div className={cx("widget-body")}>
            <div className={cx("item")}>
              <div className={cx("number")}>
                <a
                  href="https://careerbuilder.vn/vi/jobseekers/mykiemviec/jobapplied"
                  className={cx("x3")}
                >
                  0
                </a>
              </div>
              <div>
                <a href="https://careerbuilder.vn/vi/jobseekers/mykiemviec/jobapplied">;
                  N???p ??? tr???ng th??i b??nh th?????ng
                </a>
              </div>
            </div>
            <div className={cx("item")}>
              <div className={cx("number")}>
                <a
                  href="https://careerbuilder.vn/vi/jobseekers/mykiemviec/jobapplied"
                  className={cx("x4")}
                >
                  0
                </a>
              </div>
              <div>
                <a href="https://careerbuilder.vn/vi/jobseekers/mykiemviec/jobapplied">;
                  N???p ??? tr???ng th??i T??m vi???c kh???n c???p
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={cx("row")}>
      <div className={cx("col-lg-8")}>
        <div className={cx("widget","widget-4","attached-resume")}>
          <div className={cx("widget-head")}>
            <div className={cx("cb-title-h3")}>
              <h3>H??? s?? ????nh k??m</h3>
            </div>
            <p>
              Ngo??i h??? s?? CareerBuilder, b???n c?? th??? t???o h??? s?? ????nh k??m ?????
              ???ng tuy???n v?? t??m ki???m b???i nh?? tuy???n d???ng
            </p>
          </div>
          <div className={cx("widget-body")}>
            <div className={cx("attached-item")}>
              <div className={cx("row")}>
                <div className={cx("col-12")}>
                  <div className={cx("head-title")}>
                    <div className={cx("row")}>
                      <div className={cx("col-lg-5")}>
                        <div className={cx("title")}>
                          <h4 id="titleresume_18020074">123</h4>
                          <div className={cx("status","success")}>
                            <p>Ho??n T???t</p>
                          </div>
                        </div>
                      </div>
                      <div className={cx("col-lg-7")}>
                        <div className={cx("top-action")}>
                          <div className={cx("switch-box","jobalert-cv-widget")}>
                            <label htmlFor="cv_jobalert_18020074">
                              Th??ng b??o vi???c l??m
                              <input
                                type="checkbox"
                                id="cv_jobalert_18020074"
                                className={cx("group_jobalert")}
                                data-id={18020074}
                              />
                              <span className={cx("slider")} />
                            </label>
                          </div>
                          <div className={cx("action")}>
                            <ul>
                              <li className={cx("edit")}>
                                <a href="https://careerbuilder.vn/vi/jobseekers/myresume/myattach?id=18020074">;
                                  Ch???nh s???a
                                </a>
                              </li>
                              <li className={cx("delete")}>
                                <a
                                  href=""
                                  onclick="deleteResume('18020074','123', '','2'); return false;"
                                >
                                  X??a
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx("row")}>
                <div className={cx("col-lg-5")}>
                  <div className={cx("figure")}>
                    <div className={cx("image")}>
                      <img
                        src="https://static.careerbuilder.vn/themes/kiemviecv32/images/icons/ic-resume.png"
                        alt={123}
                      />
                    </div>
                    <div className={cx("figcaption")}>
                      <div className={cx("time")}>
                        <p>Ng??y c???p nh???t:</p>
                        <time id="date_18020074">27/12/2022</time>
                        <a
                          className={cx("refresh","ac_refesh")}
                          title="C???p nh???t h??? s??"
                          href="javascript:;"
                          rel={18020074}
                        >
                        </a>
                      </div>
                      <div className={cx("view-number")}>
                        <p>L?????t xem:</p>
                        <span>0</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cx("col-lg-7")}>
                  <div className={cx("attached-status-area")}>
                    <p>Cho ph??p t??m</p>
                    <div
                      className={cx("switch-status","group_searchable")}
                      id="cv_searchable_18020074"
                      data-id={18020074}
                      data-complete={1}
                    >
                      <a
                        href=""
                        data-type={2}
                        className={cx("lock","active")}
                      >
                        Kh??a
                      </a>
                      <a
                        href=""
                        data-type={1}
                        className={cx("public","")}
                      >
                        C??ng khai
                      </a>
                      <a
                        href=""
                        data-type={3}
                        className={cx("flash","")}
                      >
                        Kh???n c???p
                      </a>
                    </div>
                    <p className={cx("text-notes","text-notes-2","d-block")}>
                      B???n ??ang <span>v?? hi???u h??a</span> h??? s??. Nh?? tuy???n
                      d???ng s??? kh??ng th???y ???????c h??? s?? n??y c???a b???n.
                    </p>
                    <p className={cx("text-notes","text-notes-1","d-none")}>
                      H??? s?? c???a b???n ??ang ??? tr???ng th??i <span>C??ng Khai</span>
                      . Nh?? tuy???n d???ng c?? th??? t??m th???y H??? s?? n??y c???a b???n.
                    </p>
                    <p className={cx("text-notes","text-notes-3","d-none")}>
                      H??? s?? c???a b???n ??ang ??? tr???ng th??i <span>Kh???n c???p</span>.
                      H??? s?? c???a b???n s??? ???????c ??u ti??n t??m th???y b???i c??c nh??
                      tuy???n d???ng.
                    </p>
                    <div className={cx("right-action")}>
                      <ul>
                        <li>
                          <a
                            href="https://careerbuilder.vn/vi/quan-ly-nghe-nghiep/ho-so-cua-toi/ho-so-dinh-kem/123-18020074"
                            title="Xem"
                            className={cx("view")}
                          >
                            <em className={cx("mdi","mdi-eye")} />
                            Xem
                          </a>
                        </li>
                        <li>
                          <a
                            href=""
                            onclick="downloadCvAttach(18020074);"
                            title="T???i h??? s??"
                            className={cx("down")}
                          >
                            <em className={cx("mdi","mdi-download")} />
                            T???i h??? s??
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("attached-item")}>
              <div className={cx("row")}>
                <div className={cx("col-12")}>
                  <div className={cx("head-title")}>
                    <div className={cx("row")}>
                      <div className={cx("col-lg-5")}>
                        <div className={cx("title")}>
                          <h4 id="titleresume_18006664">
                            Frontend Developer 123
                          </h4>
                          <div className={cx("status","success")}>
                            <p>Ho??n T???t</p>
                          </div>
                        </div>
                      </div>
                      <div className={cx("col-lg-7")}>
                        <div className={cx("top-action")}>
                          <div className={cx("switch-box","jobalert-cv-widget")}>
                            <label htmlFor="cv_jobalert_18006664">
                              Th??ng b??o vi???c l??m
                              <input
                                type="checkbox"
                                id="cv_jobalert_18006664"
                                className={cx("group_jobalert")}
                                data-id={18006664}
                              />
                              <span className={cx("slider")} />
                            </label>
                          </div>
                          <div className={cx("action")}>
                            <ul>
                              <li className={cx("edit")}>
                                <a href="https://careerbuilder.vn/cv-hay/tao-cv/resume/18006664">;
                                  Ch???nh s???a
                                </a>
                              </li>
                              <li className={cx("delete")}>
                                <a
                                  href=""
                                  onclick="deleteResume('18006664','Frontend Developer 123', '','3'); return false;"
                                >
                                  X??a
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx("row")}>
                <div className={cx("col-lg-5")}>
                  <div className={cx("figure")}>
                    <div className={cx("image")}>
                      <img
                        src="https://static.careerbuilder.vn/themes/cv_tool/images/template/cvtemplate05_1605606637.jpg"
                        alt="Frontend Developer 123"
                      />
                    </div>
                    <div className={cx("figcaption")}>
                      <div className={cx("time")}>
                        <p>Ng??y c???p nh???t:</p>
                        <time id="date_18006664">25/12/2022</time>
                        <a
                          className={cx("refresh","ac_refesh")}
                          title="C???p nh???t h??? s??"
                          href="javascript:;"
                          rel={18006664}
                        >
                        </a>
                      </div>
                      <div className={cx("view-number")}>
                        <p>L?????t xem:</p>
                        <span>0</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cx("col-lg-7")}>
                  <div className={cx("attached-status-area")}>
                    <p>Cho ph??p t??m</p>
                    <div
                      className={cx("switch-status","group_searchable")}
                      id="cv_searchable_18006664"
                      data-id={18006664}
                      data-complete={1}
                    >
                      <a
                        href=""
                        data-type={2}
                        className={cx("lock","active")}
                      >
                        <em className={cx("mdi","mdi-lock")} />
                        Kh??a
                      </a>
                      <a
                        href=""
                        data-type={1}
                        className={cx("public","")}
                      >
                        <em className={cx("mdi","mdi-web")} />
                        C??ng khai
                      </a>
                      <a
                        href=""
                        data-type={3}
                        className={cx("flash","")}
                      >
                        <em className={cx("mdi","mdi-flash")} />
                        Kh???n c???p
                      </a>
                    </div>
                    <p className={cx("text-notes","text-notes-2","d-block")}>
                      B???n ??ang <span>v?? hi???u h??a</span> h??? s??. Nh?? tuy???n
                      d???ng s??? kh??ng th???y ???????c h??? s?? n??y c???a b???n.
                    </p>
                    <p className={cx("text-notes","text-notes-1","d-none")}>
                      H??? s?? c???a b???n ??ang ??? tr???ng th??i <span>C??ng Khai</span>
                      . Nh?? tuy???n d???ng c?? th??? t??m th???y H??? s?? n??y c???a b???n.
                    </p>
                    <p className={cx("text-notes","text-notes-3","d-none")}>
                      H??? s?? c???a b???n ??ang ??? tr???ng th??i <span>Kh???n c???p</span>.
                      H??? s?? c???a b???n s??? ???????c ??u ti??n t??m th???y b???i c??c nh??
                      tuy???n d???ng.
                    </p>
                    <div className={cx("right-action")}>
                      <ul>
                        <li>
                          <a
                            href="https://careerbuilder.vn/cv-hay/tao-cv/resume/preview/18006664"
                            title="Xem"
                            className={cx("view")}
                          >
                            <em className={cx("mdi","mdi-eye")} />
                            Xem
                          </a>
                        </li>
                        <li>
                          <a
                            href=""
                            onclick="downloadCvProfile(18006664);"
                            title="T???i h??? s??"
                            className={cx("down")}
                          >
                            <em className={cx("mdi","mdi-download")} />
                            T???i h??? s??
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("row")}>
              <div className={cx("col-md-7","create-info")}>
                <p>B???n c?? th??? t???o t???i ??a 4 h??? s?? ????nh k??m</p>
              </div>
              <div className={cx("col-md-5","button-upload")} id="created-resume">
                <a href="">T???o H??? S?? Ngay!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("col-lg-4")}>
        <div className={cx("widget","widget-5")}>
          <div className={cx("widget-head")}>
            <div className={cx("cb-title-h3")}>
              <h3>C??i ?????t h???n ch??? nh?? tuy???n d???ng</h3>
            </div>
          </div>
          <div className={cx("widget-body")}>
            <div className={cx("main-form")}>
              <div className={cx("form-group","form-text")}>
                <div className={cx("form-group","form-keyword")}>
                  <input
                    type="text"
                    name="company_name_blacklist"
                    placeholder="Nh???p t??n c??ng ty"
                    className={cx("company_name")}
                    id="company_name_blacklist"
                    autoComplete="off"
                  />
                  <div className={cx("cleartext")}>
                    <em className={cx("mdi","mdi-close-circle")} />
                  </div>
                </div>
                <div className={cx("form-group","form-submit")}>
                  <a
                    className={cx("btn-gradient")}
                    href=""
                    onclick="addBlackListDashboard();"
                  >
                    Th??m
                  </a>
                </div>
              </div>
            </div>
            <div className={cx("top-employers-list")}></div>
            <div className={cx("main-form")}>
              <div className={cx("form-group","form-text")}>
                <div className={cx("form-group","form-keyword")}>
                  <input
                    type="text"
                    name="company_domain_blacklist"
                    placeholder="Nh???p domain c??ng ty"
                    className={cx("company_domain")}
                    id="company_domain_blacklist"
                  />
                  <div className={cx("cleartext","active-clear")}>
                    <em className={cx("mdi","mdi-close-circle")} />
                  </div>
                </div>
                <div className={cx("form-group","form-submit")}>
                  <a
                    className={cx("btn-gradient")}
                    href=""
                    onclick="addBlackListDomain();"
                  >
                    Th??m
                  </a>
                </div>
              </div>
            </div>
            <div className={cx("domain-saved")}></div>
            <div className={cx("view-more")}>
              <a href="https://careerbuilder.vn/vi/jobseekers/blacklist-domain">;
                Xem th??m <span className={cx("mdi","mdi-arrow-right")} />
              </a>
            </div>
            <form action="" method="post" id="frmAddBlacklist">
              <input
                type="hidden"
                defaultValue={0}
                name="jblacklist_id[]"
                id="company_id_blacklist"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className={cx("row")}>
      <div className={cx("col-12")}>
        <div className={cx("widget","widget-6")}>
          <div className={cx("widget-head")}>
            <div className={cx("cb-title-h3")}>
              <h3>Vi???c L??m VIP ( $1000+)</h3>
            </div>
          </div>
          <div className={cx("apply-job-area")}>
            <div className={cx("row")}>
              <div className={cx("col-lg-4")}>
                <div className={cx("list-job","jobs-list-ajax")} id="jobs-list">
                  {" "}
                  <div className={cx("item")}>
                    <div className={cx("ckb-item")}>
                      <label className={cx("container-ckb")}>
                        <input
                          type="checkbox"
                          defaultChecked="checked"
                          name="jobchk[]"
                          defaultValue="35BB3FA0"
                        />
                        <span className={cx("checkmark")} />
                      </label>
                    </div>
                    <div className={cx("job-item","active")} id="job-item-35BB3FA0">
                      <div className={cx("figure")}>
                        <div className={cx("image")}>
                          <a
                            href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-giay-fuluh.35A7BB93.html"
                            target="_blank"
                            title="C??ng Ty TNHH Gi???y Fuluh "
                          >
                            <img
                              className={cx("lazy-bg")}
                              data-src="https://images.careerbuilder.vn/employer_folders/lot9/184979/79x79/101626logo.png"
                              src="../kiemviecv32/images/graphics/blank.gif"
                              alt="C??ng Ty TNHH Gi???y Fuluh "
                            />
                          </a>
                        </div>
                        <div className={cx("figcaption")}>
                          <div className={cx("title")}>
                            <a
                              className={cx("job_link")}
                              data-id="35BB3FA0"
                              href="https://careerbuilder.vn/vi/tim-viec-lam/asst-manager-formulation-ce.35BB3FA0.html"
                              title="Asst. manager Formulation CE"
                              target="_blank"
                            >
                              Asst. manager Formulation CE
                            </a>
                          </div>
                          <div className={cx("caption")}>
                            <a
                              className={cx("company-name")}
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-giay-fuluh.35A7BB93.html"
                              title="C??ng Ty TNHH Gi???y Fuluh "
                            >
                              C??ng Ty TNHH Gi???y Fuluh{" "}
                            </a>
                            <p className={cx("salary")}>
                              <em className={cx("fa","fa-usd")} /> C???nh Tranh
                            </p>
                            <div className={cx("location")}>
                              <ul>
                                <li>Long An</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx("item")}>
                    <div className={cx("ckb-item")}>
                      <label className={cx("container-ckb")}>
                        <input
                          type="checkbox"
                          defaultChecked="checked"
                          name="jobchk[]"
                          defaultValue="35BB3FA2"
                        />
                        <span className={cx("checkmark")} />
                      </label>
                    </div>
                    <div className={cx("job-item")} id="job-item-35BB3FA2">
                      <div className={cx("figure")}>
                        <div className={cx("image")}>
                          <a href="" title="B???o m???t">
                            <img
                              className={cx("lazy-bg")}
                              data-src="https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/logo-default.png"
                              src="../kiemviecv32/images/graphics/blank.gif"
                              alt="B???o m???t"
                            />
                          </a>
                        </div>
                        <div className={cx("figcaption")}>
                          <div className={cx("title")}>
                            <a
                              className={cx("job_link")}
                              data-id="35BB3FA2"
                              href="https://careerbuilder.vn/vi/tim-viec-lam/giam-doc-truyen-thong-va-marketing.35BB3FA2.html"
                              title="Gi??m ?????c Truy???n th??ng v?? Marketing"
                              target="_blank"
                            >
                              Gi??m ?????c Truy???n th??ng v?? Marketing
                            </a>
                          </div>
                          <div className={cx("caption")}>
                            <div className={cx("company-name")}>B???o m???t</div>
                            <p className={cx("salary")}>
                              <em className={cx("fa","fa-usd")} /> 66 Tr - 110 Tr
                              VND
                            </p>
                            <div className={cx("location")}>
                              <ul>
                                <li>H?? N???i</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx("item")}>
                    <div className={cx("ckb-item")}>
                      <label className={cx("container-ckb")}>
                        <input
                          type="checkbox"
                          defaultChecked="checked"
                          name="jobchk[]"
                          defaultValue="35BB3F9F"
                        />
                        <span className={cx("checkmark")} />
                      </label>
                    </div>
                    <div className={cx("job-item")} id="job-item-35BB3F9F">
                      <div className={cx("figure")}>
                        <div className={cx("image")}>
                          <a href="" title="B???o m???t">
                            <img
                              className={cx("lazy-bg")}
                              data-src="https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/logo-default.png"
                              src="../kiemviecv32/images/graphics/blank.gif"
                              alt="B???o m???t"
                            />
                          </a>
                        </div>
                        <div className={cx("figcaption")}>
                          <div className={cx("title")}>
                            <a
                              className={cx("job_link")}
                              data-id="35BB3F9F"
                              href="https://careerbuilder.vn/vi/tim-viec-lam/giam-doc-nha-may-nhua.35BB3F9F.html"
                              title="Gi??m ?????c Nh?? m??y Nh???a"
                              target="_blank"
                            >
                              Gi??m ?????c Nh?? m??y Nh???a
                            </a>
                          </div>
                          <div className={cx("caption")}>
                            <div className={cx("company-name")}>B???o m???t</div>
                            <p className={cx("salary")}>
                              <em className={cx("fa","fa-usd")} /> C???nh Tranh
                            </p>
                            <div className={cx("location")}>
                              <ul>
                                <li>H?? N???i | H??ng Y??n | Long An</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx("item")}>
                    <div className={cx("ckb-item")}>
                      <label className={cx("container-ckb")}>
                        <input
                          type="checkbox"
                          defaultChecked="checked"
                          name="jobchk[]"
                          defaultValue="35BB3F9E"
                        />
                        <span className={cx("checkmark")} />
                      </label>
                    </div>
                    <div className={cx("job-item")} id="job-item-35BB3F9E">
                      <div className={cx("figure")}>
                        <div className={cx("image")}>
                          <a href="" title="B???o m???t">
                            <img
                              className={cx("lazy-bg")}
                              data-src="https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/logo-default.png"
                              src="../kiemviecv32/images/graphics/blank.gif"
                              alt="B???o m???t"
                            />
                          </a>
                        </div>
                        <div className={cx("figcaption")}>
                          <div className={cx("title")}>
                            <a
                              className={cx("job_link")}
                              data-id="35BB3F9E"
                              href="https://careerbuilder.vn/vi/tim-viec-lam/giam-doc-nha-may-son.35BB3F9E.html"
                              title="Gi??m ?????c Nh?? m??y S??n"
                              target="_blank"
                            >
                              Gi??m ?????c Nh?? m??y S??n
                            </a>
                          </div>
                          <div className={cx("caption")}>
                            <div className={cx("company-name")}>B???o m???t</div>
                            <p className={cx("salary")}>
                              <em className={cx("fa","fa-usd")} /> C???nh Tranh
                            </p>
                            <div className={cx("location")}>
                              <ul>
                                <li>H?? N???i | H??ng Y??n | H?? Nam</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx("item")}>
                    <div className={cx("ckb-item")}>
                      <label className={cx("container-ckb")}>
                        <input
                          type="checkbox"
                          defaultChecked="checked"
                          name="jobchk[]"
                          defaultValue="35BB3F9D"
                        />
                        <span className={cx("checkmark")} />
                      </label>
                    </div>
                    <div className={cx("job-item")} id="job-item-35BB3F9D">
                      <div className={cx("figure")}>
                        <div className={cx("image")}>
                          <a
                            href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-san-xuat-lap-rap-tuan-nghia.35A8030D.html"
                            target="_blank"
                            title="C??ng ty TNHH S???n xu???t, l???p r??p Tu???n Ngh??a"
                          >
                            <img
                              className={cx("lazy-bg")}
                              data-src="https://images.careerbuilder.vn/employer_folders/lot7/203277/79x79/151251untitled.png"
                              src="../kiemviecv32/images/graphics/blank.gif"
                              alt="C??ng ty TNHH S???n xu???t, l???p r??p Tu???n Ngh??a"
                            />
                          </a>
                        </div>
                        <div className={cx("figcaption")}>
                          <div className={cx("title")}>
                            <a
                              className={cx("job_link")}
                              data-id="35BB3F9D"
                              href="https://careerbuilder.vn/vi/tim-viec-lam/truong-nhom-kinh-doanh-tai-ha-noi-quang-ninh-thanh-hoa-vinh-phuc-bac-giang-phu-tho-hung-yen-hai-phong-nam-dinh.35BB3F9D.html"
                              title="Tr?????ng nh??m Kinh Doanh t???i H?? N???i, Qu???ng Ninh, Thanh Ho??, V??nh Ph??c, B???c Giang, Ph?? Th???, H??ng Y??n, H???i Ph??ng, Nam ?????nh"
                              target="_blank"
                            >
                              Tr?????ng nh??m Kinh Doanh t???i H?? N???i, Qu???ng Ninh,
                              Thanh Ho??, V??nh Ph??c, B???c Giang, Ph?? Th???, H??ng
                              Y??n, H???i Ph??ng, Nam ?????nh
                            </a>
                          </div>
                          <div className={cx("caption")}>
                            <a
                              className={cx("company-name")}
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-san-xuat-lap-rap-tuan-nghia.35A8030D.html"
                              title="C??ng ty TNHH S???n xu???t, l???p r??p Tu???n Ngh??a"
                            >
                              C??ng ty TNHH S???n xu???t, l???p r??p Tu???n Ngh??a
                            </a>
                            <p className={cx("salary")}>
                              <em className={cx("fa","fa-usd")} /> 10 Tr - 30 Tr VND
                            </p>
                            <div className={cx("location")}>
                              <ul>
                                <li>Qu???ng Ninh</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cx("action")}>
                  <div className={cx("check-area")}>
                    <a href="javascript:void(0)" id="check-uncheck">
                      B??? ch???n t???t c???
                    </a>
                  </div>
                  <div className={cx("load-more")}>
                    <a
                      href="https://careerbuilder.vn/vi/jobseekers/dashboard?page=2"
                      rel="nofollow,noindex"
                      title="Xem th??m"
                    >
                      Xem th??m
                      <span className={cx("mdi","mdi-arrow-right")} />
                    </a>
                  </div>
                </div>
              </div>
              <div className={cx("col-lg-8")} id="job-detail-template">
                <div className={cx("detail-loading")} style={{ display: "none" }}>
                  <div className={cx("job-desc")}>
                    <div className={cx("job-item")}>
                      <div className={cx("figure")}>
                        <div className={cx("image")}>
                          <a href="#">
                            <img src="" alt="" />
                          </a>
                        </div>
                        <div className={cx("figcaption")}>
                          <div className={cx("title")}>
                            <a href="#">
                              <p className={cx("text-line","text-line-sm")} />
                            </a>
                          </div>
                          <div className={cx("caption")}>
                            <p className={cx("company-name","text-line","text-line-sm")} />
                            <p className={cx("salary","text-line","text-line-sm")} />
                            <div className={cx("location")}>
                              <ul>
                                <li>
                                  <p className={cx("text-line","text-line-sm")} />
                                </li>
                                <li>
                                  <p className={cx("text-line","text-line-sm")} />
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={cx("job-detail")}>
                      <div className={cx("row-detail")}>
                        <h3>Th??ng tin vi???c l??m</h3>
                        <div className={cx("row","row-custom")}>
                          <div className={cx("col-lg-3")}>
                            <div className={cx("box-info")}>
                              <h4>????ng trong v??ng</h4>
                              <p className={cx("text-line","text-line-sm")} />
                            </div>
                          </div>
                          <div className={cx("col-lg-3")}>
                            <div className={cx("box-info")}>
                              <h4>Ph????ng th???c l??m vi???c</h4>
                              <p className={cx("text-line","text-line-sm")} />
                            </div>
                          </div>
                          <div className={cx("col-lg-3")}>
                            <div className={cx("box-info")}>
                              <h4>C???p b???c</h4>
                              <p className={cx("text-line","text-line-sm")} />
                            </div>
                          </div>
                          <div className={cx("col-lg-3")}>
                            <div className={cx("box-info")}>
                              <h4>Ng??nh ngh???</h4>
                              <p className={cx("text-line","text-line-sm")} />
                            </div>
                          </div>
                          <div className={cx("col-lg-3")}>
                            <div className={cx("box-info")}>
                              <h4>Kinh nghi???m</h4>
                              <p className={cx("text-line","text-line-sm")} />
                            </div>
                          </div>
                          <div className={cx("col-lg-3")}>
                            <div className={cx("box-info")}>
                              <h4>H???t h???n n???p</h4>
                              <p className={cx("text-line","text-line-sm")} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={cx("row-detail")}>
                        <h3>Ph??c l???i</h3>
                        <ul className={cx("welfare-list")}>
                          <li>
                            <p className={cx("text-line","text-line-sm")} />
                          </li>
                          <li>
                            <p className={cx("text-line","text-line-sm")} />
                          </li>
                          <li>
                            <p className={cx("text-line","text-line-sm")} />
                          </li>
                        </ul>
                      </div>
                      <div className={cx("row-detail")}>
                        <h3>M?? t??? c??ng vi???c</h3>
                        <div className={cx("text-desc")}>
                          <p className={cx("text-line","text-line-sm")} />
                          <p className={cx("text-line","text-line-sm")} />
                          <p className={cx("text-line","text-line-sm")} />
                        </div>
                      </div>
                      <div className={cx("row-detail")}>
                        <h3>Y??u c???u c??ng vi???c</h3>
                        <div className={cx("text-desc")}>
                          <p className={cx("text-line","text-line-sm")} />
                          <p className={cx("text-line","text-line-sm")} />
                          <p className={cx("text-line","text-line-sm")} />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
                <div className={cx("detail-content")}>
                  {" "}
                  <div className={cx("job-desc")}>
                    <div className={cx("job-item")}>
                      <div className={cx("figure")}>
                        <div className={cx("image")}>
                          <a
                            href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-giay-fuluh.35A7BB93.html"
                            target="_blank"
                            title="C??ng Ty TNHH Gi???y Fuluh "
                          >
                            <img
                              src="https://images.careerbuilder.vn/employer_folders/lot9/184979/67x67/101626logo.png"
                              alt="C??ng Ty TNHH Gi???y Fuluh "
                            />
                          </a>
                        </div>
                        <div className={cx("figcaption")}>
                          <div className={cx("title")}>
                            <a
                              className={cx("job_link")}
                              data-id="35BB3FA0"
                              href="https://careerbuilder.vn/vi/tim-viec-lam/asst-manager-formulation-ce.35BB3FA0.html"
                              target="_blank"
                              title="Asst. manager Formulation CE"
                            >
                              Asst. manager Formulation CE
                            </a>
                          </div>
                          <div className={cx("caption")}>
                            <p className={cx("company-name")}>
                              C??ng Ty TNHH Gi???y Fuluh{" "}
                            </p>
                            <p className={cx("salary")}>
                              <em className={cx("fa","fa-usd")} /> C???nh tranh
                            </p>
                            <div className={cx("location")}>
                              <ul>
                                <li> Long An</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={cx("job-detail")}>
                      <div className={cx("row-detail")}>
                        <h3>Th??ng tin vi???c l??m</h3>
                        <div className={cx("row","row-custom")}>
                          <div className={cx("col-lg-3")}>
                            <div className={cx("box-info")}>
                              <h4>Ng??y c???p nh???t</h4>
                              <span>18/01/2023</span>
                            </div>
                          </div>
                          <div className={cx("col-lg-3")}>
                            <div className={cx("box-info")}>
                              <h4>H??nh th???c</h4>
                              <span>Nh??n vi??n ch??nh th???c</span>
                            </div>
                          </div>
                          <div className={cx("col-lg-3")}>
                            <div className={cx("box-info")}>
                              <h4>C???p b???c</h4>
                              <span>Qu???n l??</span>
                            </div>
                          </div>
                          <div className={cx("col-lg-3")}>
                            <div className={cx("box-info")}>
                              <h4>Ng??nh ngh???</h4>
                              <span>
                                {" "}
                                <a href="https://careerbuilder.vn/viec-lam/san-xuat-van-hanh-san-xuat-c25-vi.html">;
                                  S???n xu???t / V???n h??nh s???n xu???t
                                </a>
                                ,{" "}
                                <a href="https://careerbuilder.vn/viec-lam/hoa-hoc-c41-vi.html">;
                                  H??a h???c
                                </a>
                                ,{" "}
                                <a href="https://careerbuilder.vn/viec-lam/det-may-da-giay-thoi-trang-c39-vi.html">;
                                  D???t may / Da gi??y / Th???i trang
                                </a>
                              </span>
                            </div>
                          </div>
                          <div className={cx("col-lg-3")}>
                            <div className={cx("box-info")}>
                              <h4>Kinh nghi???m</h4>
                              <span> 3 - 0 N??m</span>
                            </div>
                          </div>
                          <div className={cx("col-lg-3")}>
                            <div className={cx("box-info")}>
                              <h4>H???t h???n n???p</h4>
                              <span>28/02/2023</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={cx("row-detail")}>
                        <h2 className={cx("detail-title")}>Ph??c l???i </h2>
                        <ul className={cx("welfare-list")}>
                          <li>
                            <span className={cx("fa","fa-laptop")} /> Laptop
                          </li>
                          <li>
                            <span className={cx("fa","fa-medkit")} /> Ch??? ????? b???o
                            hi???m
                          </li>
                          <li>
                            <span className={cx("fa","fa-money")} /> Ph??? c???p
                          </li>
                          <li>
                            <span className={cx("fa","fa-taxi")} /> Xe ????a ????n
                          </li>
                          <li>
                            <span className={cx("fa","fa-usd")} /> Ch??? ????? th?????ng
                          </li>
                          <li>
                            <span className={cx("fa","fa-user-md")} /> Ch??m s??c s???c
                            kh???e
                          </li>
                          <li>
                            <span className={cx("fa","fa-graduation-cap")} /> ????o
                            t???o
                          </li>
                          <li>
                            <span className={cx("fa","fa-line-chart")} /> T??ng l????ng
                          </li>
                          <li>
                            <span className={cx("fa","fa-briefcase")} /> Ngh??? ph??p
                            n??m
                          </li>
                        </ul>
                      </div>
                      <div className={cx("row-detail")}>
                        <h3>M?? t??? C??ng vi???c</h3>
                        <div className={cx("text-desc")}>
                          <p>
                            <strong>
                              Leading formulation development team,
                              including innovation / optimize /
                              standarlized, study new color effect and share
                              risk assessment result / analysis . Then
                              prepare written document to share progress,
                              milestone and project summary.
                            </strong>
                          </p>
                          <p>
                            <em>
                              <strong>PRIMARY RESPONSIBILITIES:</strong>
                            </em>
                          </p>
                          <p>
                            <strong>1.1</strong> Follow supervisor or
                            organization's direction to initiate a project
                            and then share project plan, activity, task,
                            deliverable and objective w/ stakeholders
                            regularly.
                          </p>
                          <p>
                            <em>
                              1.1.1 Prioritizing activty and task to meet
                              agreed project timeline and result.
                            </em>
                          </p>
                          <p>
                            <strong>1.2</strong> Apply DoE and analysis tool
                            &lt;like fish bone&gt; to identify causes and
                            actions and then lead the team to plan
                            applicable prevention plan for formula
                            development and manufacturing.
                          </p>
                          <p>
                            <em>
                              1.2.1 Clearly list out correlation between new
                              compound, mold and bottom component making
                              method and then set up quick verfication
                              method / database set-up.{" "}
                            </em>
                          </p>
                          <p>
                            <em>
                              1.2.2 Data capturing, record and analysis need
                              to be performed.
                            </em>
                          </p>
                          <p>
                            <strong>1.3</strong> Join and engage cross
                            function &lt;or w/ Nike&gt; meeting and training
                            to equip proper process, R&amp;R, technical
                            knowledge and understanding.
                          </p>
                          <p>
                            <strong>1.4</strong> Lead and prepare written
                            docutment in English &lt;Vietnamese is an
                            optional&gt; for tracking, training or used as
                            guideline, can be reported to leadership or
                            Nike.
                          </p>
                          <p>
                            <strong>1.5</strong> Provide training material,
                            training schedule and assessment tool according
                            to project type. Keep team development and
                            increase members capability / skill with regular
                            assessment.
                          </p>
                          <p>
                            <strong>1.6</strong> Follow manager's
                            instruction to carry out other management duties
                            such as work plan adjustment, training,
                            assessment or necessary supportive task to
                            ensure team successful.
                          </p>
                          <p>
                            <strong>1.7</strong> Lead bottom related vendor
                            audit in term of chemical process during
                            development stage / new vendor approval
                          </p>
                        </div>
                      </div>
                      <div className={cx("row-detail")}>
                        <h3>Y??u C???u C??ng Vi???c</h3>
                        <div className={cx("text-desc")}>
                          <p>
                            First priority : &nbsp;Minimum 3 years of
                            working experience as formulation CE focus on
                            rubber outsole or Eva midsole.
                          </p>
                          <p>
                            Second priority: Minimum 3 years of working
                            experience in handling the formulation of Rubber
                            or Eva in non-shoe industry.
                          </p>
                          <p>
                            Third priority : With Master or PHD degree in
                            Chemical Engineer but with limited work
                            experience
                          </p>
                          <p>
                            <br />
                            &nbsp;
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cx("follow-area")}>
                  <a
                    href="https://careerbuilder.vn/viec-lam/muc-luong-20trvnd-s20-vi.html"
                    className={cx("left-follow")}
                  >
                    Xem th??m
                  </a>
                  <div className={cx("right-follow")}>
                    <a
                      href="javascript:void(0)"
                      className={cx("btn-apply-all","btn-gradient-1")}
                    >
                      ???ng tuy???n c??c v??? tr?? ???? ch???n&nbsp;
                      <span id="countjob">(5)</span>
                    </a>
                    <a
                      href="javascript:void(0)"
                      className={cx("btn-apply-now","btn-gradient")}
                    >
                      ???ng tuy???n ngay
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
</div>
</div>
</div>

  )
}

export default Dashboard