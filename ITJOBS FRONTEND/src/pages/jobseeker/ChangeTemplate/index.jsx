import SideBar from "~/layouts/Components/jobseeker/SideBar";
import styles from "./changetemplate.module.css";
import classNames from "classnames/bind";
import FontDownloadIcon from "@mui/icons-material/FontDownload";
import { Link } from "react-router-dom";
import { useCallback, useState } from "react";
import Tips from "~/components/ui/Modal/Tips";
import useModal from "~/hooks/useModal";
import ChosseTemplate from "~/components/ui/Modal/ChosseTemplate";
const cx = classNames.bind(styles);
const ChangeTemplate = () => {
  const { isShowing, toggle } = useModal({
    tips: false,
    chooseTemplate: false,
  });
  let [currentFont, changeFont] = useState("Roboto");
  let [currentFontSize, changeFontSize] = useState("fontCVsize14");
  let [language, changeLanguage] = useState("en");
 

  const toggleLanguage = (e) => {
    changeLanguage(e.target.value);
  };
  // let [currentFont,changeFont]=useState("");
  const fonts = {
    Roboto: "fontCVRoboto",
    Helvetica: "fontCVHelvetica",
    OpenSans: "fontCVOpenSans",
    Arial: "fontCVArial",
    TimesNewRoman: "fontCVTimesNewRoman",
  };
  const fontSize = {
    fontCVsize12: "fontCVsize12",
    fontCVsize14: "fontCVsize14",
    fontCVsize16: "fontCVsize16",
  };
  const handleSetFontSize = (e) => {
    changeFontSize(e.currentTarget.dataset.fontsize);
  };

  return (
    <div className={cx("page-content", "d-flex", "align-items-stretch")}>
      <SideBar className={cx} />
      <div className={cx("content-inner")}>
        <div className={cx("container-fluid")}>
          <div className={cx("change-cv-template-wrap")}>
            <div className={cx("button")}>
              <div className={cx("left")}>
                <div className={cx("view-back")}>
                  <a href="javascript:void(0)" id="btn_preview">
                    Xem CV Template
                  </a>
                </div>
              </div>
              <div className={cx("right")}>
                <div className={cx("save")}>
                  <a href="javascript:void(0);" id="btn_savetemplate">
                    {" "}
                    <span>L??u L???i</span>
                    <em className={cx("material-icons")}>save</em>
                  </a>
                </div>
                <div className={cx("download-profile")}>
                  <a
                    className={cx("btn-gradient")}
                    href="javascript:void(0);"
                    onclick="downloadCvProfile(17722295);"
                  >
                    {" "}
                    <span>T???i h??? s??</span>
                    <em className={cx("material-icons")}>get_app</em>
                  </a>
                </div>
              </div>
            </div>
            <form
              method="post"
              name="frmTemplatePattern"
              id="frmTemplatePattern"
            >
              <input
                type="hidden"
                name="cv_color"
                id="cv_color"
                defaultValue={171}
              />
              <input
                type="hidden"
                name="cv_newlayout"
                id="cv_newlayout"
                defaultValue={1}
              />
              <input
                type="hidden"
                name="cv_template"
                id="cv_template"
                defaultValue={18}
              />
              <input
                type="hidden"
                name="cv_size"
                id="cv_size"
                defaultValue="fontCVsize14"
              />

              <div className={cx("row")}>
                <div className={cx("col-tools")}>
                  <div className={cx("tools-schemes")}>
                    <div className={cx("head-tools")}>
                      <div className={cx("figure")}>
                        <div className={cx("image")}>
                          <img
                            src="https://static.careerbuilder.vn/themes/careerbuilder/img/dash-board/i9.png"
                            alt="C??ng c???"
                          />
                        </div>
                        <div className={cx("figcaption")}>
                          <h2>C??ng c???</h2>
                        </div>
                        <div className={cx("tips")} onClick={()=>toggle("tips")}>
                          <div className={cx("icon")}>
                            <em className={cx("mdi", "mdi-lightbulb")} />
                          </div>
                          <p>G???i ??</p>
                        </div>
                      </div>
                      <div className={cx("view-less")}>
                        <em className={cx("material-icons")}>expand_more</em>
                      </div>
                    </div>
                    <div className={cx("mb-show")}>
                      <div className={cx("row")}>
                        <div
                          className={cx(
                            "col-sm-6",
                            "col-md-5",
                            "col-xl-12",
                            "col-xxxl-6"
                          )}
                        >
                          <ul className={cx("list-tools")}>
                            <li className={cx("item-tools")}>
                              <div className={cx("title-tools")}>
                                <h3>M???u CV</h3>
                              </div>
                              <div className={cx("template")}>
                                <div className={cx("name")}>
                                  <p id="cv_template_name" />
                                </div>
                                <div className={cx("change")}>
                                  <Link
                                    onClick={() => toggle('chooseTemplate')}
                                    className={cx("btn-change-template")}
                                  >
                                    ?????i M???u
                                  </Link>
                                </div>
                              </div>
                            </li>
                            <li className={cx("item-tools")}>
                              <div className={cx("title-tools")}>
                                <h3>Ng??n ng???</h3>
                              </div>
                              <div className={cx("language")}>
                                <div
                                  className={cx("form-group", "form-select")}
                                >
                                  <label>
                                    H??n 80% Nh?? tuy???n d???ng ??a th??ch CV ti???ng Anh
                                  </label>
                                  <select
                                    onChange={toggleLanguage}
                                    name="cv_language"
                                    id="cv_language"
                                  >
                                    <option value="vi">Ti???ng Vi???t</option>
                                    <option value="en" selected="selected">
                                      Ti???ng Anh
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </li>
                            <li className={cx("item-tools")}>
                              <div className={cx("title-tools")}>
                                <h3>Font ch???</h3>
                              </div>
                              <div className={cx("font-family")}>
                                <div
                                  className={cx("form-group", "form-select")}
                                >
                                  <select
                                    onChange={(e) => {
                                      changeFont(e.target.value);
                                    }}
                                    className={cx("form-control")}
                                    name="cv_font"
                                    id="cv_font"
                                  >
                                    <option value="Roboto" selected="selected">
                                      Roboto
                                    </option>
                                    <option value="Helvetica">Helvetica</option>
                                    <option value="OpenSans">OpenSans</option>
                                    <option value="Arial">Arial</option>
                                    <option value="TimesNewRoman">
                                      TimesNewRoman
                                    </option>
                                  </select>
                                </div>
                              </div>
                            </li>
                            <li className={cx("item-tools")}>
                              <div className={cx("title-tools")}>
                                <h3>C??? ch???</h3>
                              </div>
                              <div className={cx("font-size")}>
                                <ul className={cx("list-font-size")}>
                                  <li
                                    className={cx(
                                      "fontsize",
                                      "fontsize12",
                                      currentFontSize ==
                                        fontSize["fontCVsize12"]
                                        ? "active"
                                        : ""
                                    )}
                                    id="fontCVsize12"
                                  >
                                    <Link
                                      className={cx("select-size")}
                                      data-fontsize="fontCVsize12"
                                      onClick={handleSetFontSize}
                                      style={{ fontSize: "0.8em" }}
                                    >
                                      <svg
                                        style={{ color: "#212529" }}
                                        className={cx(
                                          "svg-inline--fa",
                                          "fa-font",
                                          "fa-w-14"
                                        )}
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fa"
                                        data-icon="font"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                        data-fa-i2svg=""
                                      >
                                        <path
                                          fill="currentColor"
                                          d="M432 416h-23.41L277.88 53.69A32 32 0 0 0 247.58 32h-47.16a32 32 0 0 0-30.3 21.69L39.41 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-19.58l23.3-64h152.56l23.3 64H304a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM176.85 272L224 142.51 271.15 272z"
                                        ></path>
                                      </svg>
                                    </Link>
                                  </li>
                                  <li
                                    className={cx(
                                      "fontsize",
                                      "fontsize14",
                                      currentFontSize ==
                                        fontSize["fontCVsize14"]
                                        ? "active"
                                        : ""
                                    )}
                                    id="fontCVsize14"
                                  >
                                    <Link
                                      className={cx("select-size")}
                                      data-fontsize="fontCVsize14"
                                      onClick={handleSetFontSize}
                                      style={{ fontSize: "1.0em" }}
                                    >
                                      <svg
                                        style={{ color: "#212529" }}
                                        className={cx(
                                          "svg-inline--fa",
                                          "fa-font",
                                          "fa-w-14"
                                        )}
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fa"
                                        data-icon="font"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                        data-fa-i2svg=""
                                      >
                                        <path
                                          fill="currentColor"
                                          d="M432 416h-23.41L277.88 53.69A32 32 0 0 0 247.58 32h-47.16a32 32 0 0 0-30.3 21.69L39.41 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-19.58l23.3-64h152.56l23.3 64H304a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM176.85 272L224 142.51 271.15 272z"
                                        ></path>
                                      </svg>
                                    </Link>
                                  </li>
                                  <li
                                    className={cx(
                                      "fontsize",
                                      "fontsize16",
                                      currentFontSize ==
                                        fontSize["fontCVsize16"]
                                        ? "active"
                                        : ""
                                    )}
                                    id="fontCVsize16"
                                  >
                                    <Link
                                      className={cx("select-size")}
                                      data-fontsize="fontCVsize16"
                                      onClick={handleSetFontSize}
                                      style={{ fontSize: "1.2em" }}
                                    >
                                      <svg
                                        style={{ color: "#212529" }}
                                        className={cx(
                                          "svg-inline--fa",
                                          "fa-font",
                                          "fa-w-14"
                                        )}
                                        aria-hidden="true"
                                        focusable="false"
                                        data-prefix="fa"
                                        data-icon="font"
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                        data-fa-i2svg=""
                                      >
                                        <path
                                          fill="currentColor"
                                          d="M432 416h-23.41L277.88 53.69A32 32 0 0 0 247.58 32h-47.16a32 32 0 0 0-30.3 21.69L39.41 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-19.58l23.3-64h152.56l23.3 64H304a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM176.85 272L224 142.51 271.15 272z"
                                        ></path>
                                      </svg>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div
                          className={cx(
                            "col-sm-6",
                            "col-md-5",
                            "col-xl-12",
                            "col-xxxl-6"
                          )}
                        >
                          <ul className={cx("list-tools")}>
                            <li className={cx("item-tools")}>
                              <div className={cx("title-tools")}>
                                <h3>Cover CV</h3>
                              </div>
                              <div className={cx("cover-cv")}>
                                <div className={cx("name")}>
                                  <p>CV th??m trang b??a thu h??t s??? ch?? ?? h??n</p>
                                </div>
                                <div
                                  className={cx("form-group", "form-check-box")}
                                >
                                  <label htmlFor="cv_cover">
                                    <input
                                      type="checkbox"
                                      name="cv_cover"
                                      id="cv_cover"
                                      defaultChecked="checked"
                                    />
                                    <span className={cx("slider")} />{" "}
                                  </label>
                                </div>
                              </div>
                              <div
                                className={cx("image-cover-cv", "showImgCover")}
                                style={{ display: "block" }}
                              >
                                <img
                                  src="https://static.careerbuilder.vn/themes/cv_tool/images/template/image-18.png"
                                  alt=""
                                />
                              </div>
                            </li>
                            <li className={cx("item-tools")}>
                              <div className={cx("title-tools")}>
                                <h3>M??u s???c</h3>
                              </div>
                              <div
                                className={cx("row", "color-schemes-wrapper")}
                                id="colorItems"
                              ></div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cx("col-template")}>
                  <div className={cx("main-template")}>
                    {/* ,
                        "clrOrangeBlack18",
                        "fontCVHelvetica",
                        "fontCVsize14" */}
                    {language == "en" ? (
                      <div
                        id="ZoneShowCVTemplateEn"
                        className={cx(
                          "cv-template-wrapper",
                          currentFont ? fonts[currentFont] : "",
                          currentFontSize
                            ? fontSize[currentFontSize]
                            : fontSize["fontCVsize14"],
                          "cv-template-18",
                          "clrOrangeBlack18"
                        )}
                      >
                        <div className={cx("dflex")}>
                          <div className={cx("col-5", "col-left")}>
                            <div className={cx("col-12", "top")}>
                              <div className={cx("iavatar")}>
                                <img
                                  src="https://static.careerbuilder.vn/themes/cv_tool/images/avatar.jpg"
                                  alt=""
                                />
                              </div>
                              <div className={cx("col-12", "name")}>
                                <h2>Nguyen Van A</h2>
                                <h4>Expected Tittle</h4>
                              </div>
                            </div>
                            <div
                              className={cx(
                                "col-12",
                                "block-cv",
                                "main-contact"
                              )}
                            >
                              <h3>Contact</h3>
                              <ul>
                                <li className={cx("phone")}>
                                  <i className={cx("fa", "fa-phone")} />
                                  <p>Phone number</p>
                                </li>
                                <li className={cx("mail")}>
                                  <i className={cx("fa", "fa-envelope")} />
                                  <p>Example@gmail.com</p>
                                </li>
                                <li className={cx("address2")}>
                                  <i className={cx("fa", "fa-home")} />
                                  <p>Address</p>
                                </li>
                              </ul>
                            </div>
                            <div
                              className={cx(
                                "col-12",
                                "block-cv",
                                "info-personal"
                              )}
                            >
                              <h3>Contact</h3>
                              <ul>
                                <li>
                                  <label>Gender:</label> Gender
                                </li>
                                <li>
                                  <label>Birthday:</label> MM/DD/YYYY
                                </li>
                                <li>
                                  <label>Marital status:</label> Single
                                </li>
                                <li>
                                  <label>Nationality:</label> Vietnamese
                                </li>
                                <li>
                                  <label>Location:</label> Vietnam
                                </li>
                              </ul>
                            </div>
                            <div
                              className={cx("col-12", "block-cv", "skill-list")}
                            >
                              <h3>Skill</h3>
                              <div className={cx("dflex", "text-edt")}>
                                <p>Problem Solving</p>
                                <p>
                                  <span className={cx("itemlvl")} />
                                  <span className={cx("itemlvl")} />
                                  <span className={cx("itemlvl")} />
                                  <span className={cx("itemlvl")} />
                                </p>
                              </div>
                              <div className={cx("dflex", "text-edt")}>
                                <p>Communication</p>
                                <p>
                                  <span className={cx("itemlvl")} />
                                  <span className={cx("itemlvl")} />
                                  <span className={cx("itemlvl")} />
                                </p>
                              </div>
                              <div className={cx("dflex", "text-edt")}>
                                <p>Project manager</p>
                                <p>
                                  <span className={cx("itemlvl")} />
                                  <span className={cx("itemlvl")} />
                                  <span className={cx("itemlvl")} />
                                  <span className={cx("itemlvl")} />
                                  <span className={cx("itemlvl")} />
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className={cx("col-7", "col-right")}>
                            <div className={cx("block-cv")}>
                              <p>
                                Your personal statement is perhaps the single
                                most important part of you CV. Its aim is to
                                highlight your professional attributes and
                                goals, summarize why someone should consider
                                your application. (80-100 words)
                              </p>
                            </div>
                            <div className={cx("block-cv", "work-exp")}>
                              <h3>WORK EXPERIENCE</h3>
                              <div className={cx("text-edt")}>
                                <div className={cx("date")}>
                                  From MM/YY to MM/YY
                                </div>
                                <div className={cx("title")}>
                                  Job Title - Company Name
                                </div>
                                <div className={cx("content_fck")}>
                                  06.2017 ??? 06.2018:
                                  <b> Job Title - Company Name</b>
                                  <br />
                                  Key achievements:
                                  <br />
                                  - Provide a list of the key achievements you
                                  have made in your job.
                                  <br />
                                  - Try to show evidence such as percentage
                                  increases or financial figures.
                                  <br />
                                  Key skills gained:
                                  <br />
                                  - Show that you have the relevant knowledge
                                  required to succeed.
                                  <br />
                                  06.2017 ??? 06.2018:
                                  <b> Job Title - Company Name</b>
                                  <br />
                                  Key achievements:
                                  <br />
                                  - Provide a list of the key achievements you
                                  have made in your job.
                                  <br />
                                  - Try to show evidence such as percentage
                                  increases or financial figures.
                                  <br />
                                  Key skills gained:
                                  <br />
                                  - Show that you have the relevant knowledge
                                  required to succeed.
                                  <br />
                                </div>
                              </div>
                              <div className={cx("text-edt")}>
                                <div className={cx("date")}>
                                  From MM/YY to MM/YY
                                </div>
                                <div className={cx("title")}>
                                  Job Title - Company Name
                                </div>
                                <div className={cx("content_fck")}>
                                  Key achievements:
                                  <br />
                                  - Provide a list of the key achievements you
                                  have made in your job.
                                  <br />
                                  - Try to show evidence such as percentage
                                  increases or financial figures.
                                  <br />
                                  Key skills gained:
                                  <br />
                                  - Show that you have the relevant knowledge
                                  required to succeed.
                                  <br />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div
                        id="ZoneShowCVTemplateVi"
                        className={cx(
                          "cv-template-wrapper",
                          currentFont ? fonts[currentFont] : "",
                          currentFontSize
                            ? fontSize[currentFontSize]
                            : fontSize["fontCVsize14"],
                          "cv-template-18",
                          "clrOrangeBlack18"
                        )}
                      >
                        <div className={cx("dflex")}>
                          <div className={cx("col-5", "col-left")}>
                            <div className={cx("col-12", "top")}>
                              <div className={cx("iavatar")}>
                                <img
                                  src="https://static.careerbuilder.vn/themes/cv_tool/images/avatar.jpg"
                                  alt=""
                                />
                              </div>
                              <div className={cx("col-12", "name")}>
                                <h2>Nguyen Van A</h2>
                                <h4>V??? tr?? mong mu???n ???ng tuy???n</h4>
                              </div>
                            </div>
                            <div
                              className={cx(
                                "col-12",
                                "block-cv",
                                "main-contact"
                              )}
                            >
                              <h3>Li??n h???</h3>
                              <ul>
                                <li className={cx("phone")}>
                                  <i className={cx("fa", "fa-phone")} />
                                  <p>S??? ??i???n tho???i</p>
                                </li>
                                <li className={cx("mail")}>
                                  <i className={cx("fa", "fa-envelope")} />
                                  <p>Example@gmail.com</p>
                                </li>
                                <li className={cx("address2")}>
                                  <i className={cx("fa", "fa-home")} />
                                  <p>?????a ch???</p>
                                </li>
                              </ul>
                            </div>
                            <div
                              className={cx(
                                "col-12",
                                "block-cv",
                                "info-personal"
                              )}
                            >
                              <h3>Li??n h???</h3>
                              <ul>
                                <li>
                                  <label>Gi???i t??nh:</label> Gi???i t??nh
                                </li>
                                <li>
                                  <label>Sinh nh???t:</label> MM/DD/YYYY
                                </li>
                                <li>
                                  <label>T??nh tr???ng h??n nh??n:</label> ?????c th??n
                                </li>
                                <li>
                                  <label>Qu???c t???ch:</label> Vi???t Nam
                                </li>
                                <li>
                                  <label>Qu???c gia:</label> Vi???t Nam
                                </li>
                              </ul>
                            </div>
                            <div
                              className={cx("col-12", "block-cv", "skill-list")}
                            >
                              <h3>K??? n??ng</h3>
                              <div className={cx("dflex", "text-edt")}>
                                <p>Gi???i quy???t v???n ?????</p>
                                <p>
                                  <span className={cx("itemlvl")} />
                                  <span className={cx("itemlvl")} />
                                  <span className={cx("itemlvl")} />
                                  <span className={cx("itemlvl")} />
                                </p>
                              </div>
                              <div className={cx("dflex", "text-edt")}>
                                <p>K??? n??ng giao ti???p</p>
                                <p>
                                  <span className={cx("itemlvl")} />
                                  <span className={cx("itemlvl")} />
                                  <span className={cx("itemlvl")} />
                                </p>
                              </div>
                              <div className={cx("dflex", "text-edt")}>
                                <p>K??? n??ng qu???n l?? d??? ??n</p>
                                <p>
                                  <span className={cx("itemlvl")} />
                                  <span className={cx("itemlvl")} />
                                  <span className={cx("itemlvl")} />
                                  <span className={cx("itemlvl")} />
                                  <span className={cx("itemlvl")} />
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className={cx("col-7", "col-right")}>
                            <div className={cx("block-cv")}>
                              <p>
                                M???c ti??u ngh??? nghi???p l?? m???t ph???n quan tr???ng nh???t
                                trong CV. H??y ????? c???p nh???ng ??i???m n???i b???t c???a s???
                                nghi???p v?? m???c ti??u cho c??ng vi???c ??ang ???ng tuy???n.
                                T??m t???t l?? do t???i sao Nh?? tuy???n d???ng ph???i ch???n
                                b???n (n??n t??? 80 ??? 100 t???)
                              </p>
                            </div>
                            <div className={cx("block-cv", "work-exp")}>
                              <h3>Kinh Nghi???m L??m Vi???c</h3>
                              <div className={cx("text-edt")}>
                                <div className={cx("date")}>
                                  T??? MM/YY ?????n MM/YY
                                </div>
                                <div className={cx("title")}>
                                  T??n c??ng vi???c - T??n c??ng ty
                                </div>
                                <div className={cx("content_fck")}>
                                  06.2017 ??? 06.2018:
                                  <b>Ch???c danh ??? T??n c??ng ty</b>
                                  <br />
                                  Th??nh t???u ch??nh:
                                  <br />
                                  - Nh???ng th??nh t???u ch??nh b???n ???? g???t h??i trong
                                  c??ng vi???c n??y
                                  <br />- N??n th??? hi???n b???ng con s???, t??? l??? ph???n
                                  tr??m t??ng tr?????ng ho???c s??? li???u t??i ch??nh
                                  <p>C??c k??? n??ng b???n ???? ?????t ???????c:</p>
                                  - K??? n??ng/ ki???n th???c t??ch l??y ???????c trong qu??
                                  tr??nh l??m vi???c
                                  <br />
                                  06.2017 ??? 06.2018:
                                  <b>Ch???c danh ??? T??n c??ng ty</b>
                                  <br />
                                  Th??nh t???u ch??nh:
                                  <br />
                                  - Nh???ng th??nh t???u ch??nh b???n ???? g???t h??i trong
                                  c??ng vi???c n??y
                                  <br />- N??n th??? hi???n b???ng con s???, t??? l??? ph???n
                                  tr??m t??ng tr?????ng ho???c s??? li???u t??i ch??nh
                                  <p>C??c k??? n??ng b???n ???? ?????t ???????c:</p>
                                  - K??? n??ng/ ki???n th???c t??ch l??y ???????c trong qu??
                                  tr??nh l??m vi???c
                                  <br />
                                </div>
                              </div>
                              <div className={cx("text-edt")}>
                                <div className={cx("date")}>
                                  T??? MM/YY ?????n MM/YY
                                </div>
                                <div className={cx("title")}>
                                  T??n c??ng vi???c - T??n c??ng ty
                                </div>
                                <div className={cx("content_fck")}>
                                  Th??nh t???u ch??nh:
                                  <br />
                                  - Nh???ng th??nh t???u ch??nh b???n ???? g???t h??i trong
                                  c??ng vi???c n??y
                                  <br />- N??n th??? hi???n b???ng con s???, t??? l??? ph???n
                                  tr??m t??ng tr?????ng ho???c s??? li???u t??i ch??nh
                                  <p>C??c k??? n??ng b???n ???? ?????t ???????c:</p>
                                  - K??? n??ng/ ki???n th???c t??ch l??y ???????c trong qu??
                                  tr??nh l??m vi???c
                                  <br />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ti???ng anh */}

                    {/*end ti???ng anh */}
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div
            className={cx("change-cv-template-modal")}
            style={{ display: "none" }}
          >
            <div className={cx("title")}>
              <h3>Ch???n template</h3>
            </div>
            <div className={cx("list-template")}>
              <div className={cx("row")}>
                <div
                  className={cx("col-xs-12", "col-sm-6", "col-md-4", "cv-item")}
                >
                  <div className={cx("figure")}>
                    <div className={cx("image")}>
                      <img
                        src="https://static.careerbuilder.vn/themes/cv_tool/images/template/cvtemplate15_1605606748.jpg"
                        alt="Template 15"
                      />
                    </div>
                    <div className={cx("figcaption")}>
                      <p>Template 15</p>
                    </div>
                    <div className={cx("el-horizontal")}>
                      <a
                        className={cx("btn-gradient", "select-template-new")}
                        href="javascript:void(0);"
                        data-template-id={15}
                        data-template-name="Template 15"
                      >
                        Ch???n template
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className={cx("col-xs-12", "col-sm-6", "col-md-4", "cv-item")}
                >
                  <div className={cx("figure")}>
                    <div className={cx("image")}>
                      <img
                        src="https://static.careerbuilder.vn/themes/cv_tool/images/template/cvtemplate14_1605606737.jpg"
                        alt="Template 14"
                      />
                    </div>
                    <div className={cx("figcaption")}>
                      <p>Template 14</p>
                    </div>
                    <div className={cx("el-horizontal")}>
                      <a
                        className={cx("btn-gradient", "select-template-new")}
                        href="javascript:void(0);"
                        data-template-id={14}
                        data-template-name="Template 14"
                      >
                        Ch???n template
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className={cx("col-xs-12", "col-sm-6", "col-md-4", "cv-item")}
                >
                  <div className={cx("figure")}>
                    <div className={cx("image")}>
                      <img
                        src="https://static.careerbuilder.vn/themes/cv_tool/images/template/cvtemplate13_1605606716.jpg"
                        alt="Template 13"
                      />
                    </div>
                    <div className={cx("figcaption")}>
                      <p>Template 13</p>
                    </div>
                    <div className={cx("el-horizontal")}>
                      <a
                        className={cx("btn-gradient", "select-template-new")}
                        href="javascript:void(0);"
                        data-template-id={13}
                        data-template-name="Template 13"
                      >
                        Ch???n template
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className={cx("col-xs-12", "col-sm-6", "col-md-4", "cv-item")}
                >
                  <div className={cx("figure")}>
                    <div className={cx("image")}>
                      <img
                        src="https://static.careerbuilder.vn/themes/cv_tool/images/template/cvtemplate12_1605606705.jpg"
                        alt="Template 12"
                      />
                    </div>
                    <div className={cx("figcaption")}>
                      <p>Template 12</p>
                    </div>
                    <div className={cx("el-horizontal")}>
                      <a
                        className={cx("btn-gradient", "select-template-new")}
                        href="javascript:void(0);"
                        data-template-id={12}
                        data-template-name="Template 12"
                      >
                        Ch???n template
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className={cx("col-xs-12", "col-sm-6", "col-md-4", "cv-item")}
                >
                  <div className={cx("figure")}>
                    <div className={cx("image")}>
                      <img
                        src="https://static.careerbuilder.vn/themes/cv_tool/images/template/cvtemplate11_1605606695.jpg"
                        alt="Template 11"
                      />
                    </div>
                    <div className={cx("figcaption")}>
                      <p>Template 11</p>
                    </div>
                    <div className={cx("el-horizontal")}>
                      <a
                        className={cx("btn-gradient", "select-template-new")}
                        href="javascript:void(0);"
                        data-template-id={11}
                        data-template-name="Template 11"
                      >
                        Ch???n template
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className={cx("col-xs-12", "col-sm-6", "col-md-4", "cv-item")}
                >
                  <div className={cx("figure")}>
                    <div className={cx("image")}>
                      <img
                        src="https://static.careerbuilder.vn/themes/cv_tool/images/template/cvtemplate10_1605606686.jpg"
                        alt="Template 10"
                      />
                    </div>
                    <div className={cx("figcaption")}>
                      <p>Template 10</p>
                    </div>
                    <div className={cx("el-horizontal")}>
                      <a
                        className={cx("btn-gradient", "select-template-new")}
                        href="javascript:void(0);"
                        data-template-id={10}
                        data-template-name="Template 10"
                      >
                        Ch???n template
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className={cx("col-xs-12", "col-sm-6", "col-md-4", "cv-item")}
                >
                  <div className={cx("figure")}>
                    <div className={cx("image")}>
                      <img
                        src="https://static.careerbuilder.vn/themes/cv_tool/images/template/cvtemplate09_1605606677.jpg"
                        alt="Template 9"
                      />
                    </div>
                    <div className={cx("figcaption")}>
                      <p>Template 9</p>
                    </div>
                    <div className={cx("el-horizontal")}>
                      <a
                        className={cx("btn-gradient", "select-template-new")}
                        href="javascript:void(0);"
                        data-template-id={9}
                        data-template-name="Template 9"
                      >
                        Ch???n template
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className={cx("col-xs-12", "col-sm-6", "col-md-4", "cv-item")}
                >
                  <div className={cx("figure")}>
                    <div className={cx("image")}>
                      <img
                        src="https://static.careerbuilder.vn/themes/cv_tool/images/template/cvtemplate08_1605606667.jpg"
                        alt="Template 8"
                      />
                    </div>
                    <div className={cx("figcaption")}>
                      <p>Template 8</p>
                    </div>
                    <div className={cx("el-horizontal")}>
                      <a
                        className={cx("btn-gradient", "select-template-new")}
                        href="javascript:void(0);"
                        data-template-id={8}
                        data-template-name="Template 8"
                      >
                        Ch???n template
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className={cx("col-xs-12", "col-sm-6", "col-md-4", "cv-item")}
                >
                  <div className={cx("figure")}>
                    <div className={cx("image")}>
                      <img
                        src="https://static.careerbuilder.vn/themes/cv_tool/images/template/cvtemplate07_1605606659.jpg"
                        alt="Template 7"
                      />
                    </div>
                    <div className={cx("figcaption")}>
                      <p>Template 7</p>
                    </div>
                    <div className={cx("el-horizontal")}>
                      <a
                        className={cx("btn-gradient", "select-template-new")}
                        href="javascript:void(0);"
                        data-template-id={7}
                        data-template-name="Template 7"
                      >
                        Ch???n template
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className={cx("col-xs-12", "col-sm-6", "col-md-4", "cv-item")}
                >
                  <div className={cx("figure")}>
                    <div className={cx("image")}>
                      <img
                        src="https://static.careerbuilder.vn/themes/cv_tool/images/template/cvtemplate06_1605606647.jpg"
                        alt="Template 6"
                      />
                    </div>
                    <div className={cx("figcaption")}>
                      <p>Template 6</p>
                    </div>
                    <div className={cx("el-horizontal")}>
                      <a
                        className={cx("btn-gradient", "select-template-new")}
                        href="javascript:void(0);"
                        data-template-id={6}
                        data-template-name="Template 6"
                      >
                        Ch???n template
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className={cx("col-xs-12", "col-sm-6", "col-md-4", "cv-item")}
                >
                  <div className={cx("figure")}>
                    <div className={cx("image")}>
                      <img
                        src="https://static.careerbuilder.vn/themes/cv_tool/images/template/cvtemplate05_1605606637.jpg"
                        alt="Template 5"
                      />
                    </div>
                    <div className={cx("figcaption")}>
                      <p>Template 5</p>
                    </div>
                    <div className={cx("el-horizontal")}>
                      <a
                        className={cx("btn-gradient", "select-template-new")}
                        href="javascript:void(0);"
                        data-template-id={5}
                        data-template-name="Template 5"
                      >
                        Ch???n template
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className={cx("col-xs-12", "col-sm-6", "col-md-4", "cv-item")}
                >
                  <div className={cx("figure")}>
                    <div className={cx("image")}>
                      <img
                        src="https://static.careerbuilder.vn/themes/cv_tool/images/template/cvtemplate04_1605606626.jpg"
                        alt="Template 4"
                      />
                    </div>
                    <div className={cx("figcaption")}>
                      <p>Template 4</p>
                    </div>
                    <div className={cx("el-horizontal")}>
                      <a
                        className={cx("btn-gradient", "select-template-new")}
                        href="javascript:void(0);"
                        data-template-id={4}
                        data-template-name="Template 4"
                      >
                        Ch???n template
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className={cx("col-xs-12", "col-sm-6", "col-md-4", "cv-item")}
                >
                  <div className={cx("figure")}>
                    <div className={cx("image")}>
                      <img
                        src="https://static.careerbuilder.vn/themes/cv_tool/images/template/cvtemplate03_1605606616.jpg"
                        alt="Template 3"
                      />
                    </div>
                    <div className={cx("figcaption")}>
                      <p>Template 3</p>
                    </div>
                    <div className={cx("el-horizontal")}>
                      <a
                        className={cx("btn-gradient", "select-template-new")}
                        href="javascript:void(0);"
                        data-template-id={3}
                        data-template-name="Template 3"
                      >
                        Ch???n template
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className={cx("col-xs-12", "col-sm-6", "col-md-4", "cv-item")}
                >
                  <div className={cx("figure")}>
                    <div className={cx("image")}>
                      <img
                        src="https://static.careerbuilder.vn/themes/cv_tool/images/template/cvtemplate02_1605606605.jpg"
                        alt="Template 2"
                      />
                    </div>
                    <div className={cx("figcaption")}>
                      <p>Template 2</p>
                    </div>
                    <div className={cx("el-horizontal")}>
                      <a
                        className={cx("btn-gradient", "select-template-new")}
                        href="javascript:void(0);"
                        data-template-id={2}
                        data-template-name="Template 2"
                      >
                        Ch???n template
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className={cx("col-xs-12", "col-sm-6", "col-md-4", "cv-item")}
                >
                  <div className={cx("figure")}>
                    <div className={cx("image")}>
                      <img
                        src="https://static.careerbuilder.vn/themes/cv_tool/images/template/cvtemplate01_1605606576.jpg"
                        alt="Template 1"
                      />
                    </div>
                    <div className={cx("figcaption")}>
                      <p>Template 1</p>
                    </div>
                    <div className={cx("el-horizontal")}>
                      <a
                        className={cx("btn-gradient", "select-template-new")}
                        href="javascript:void(0);"
                        data-template-id={1}
                        data-template-name="Template 1"
                      >
                        Ch???n template
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className={cx("col-xs-12", "col-sm-6", "col-md-4", "cv-item")}
                >
                  <div className={cx("figure")}>
                    <div className={cx("image")}>
                      <img
                        src="https://static.careerbuilder.vn/themes/cv_tool/images/template/cb-cvhay_template-2020_16-02_1630384185.png"
                        alt="Template 16"
                      />
                    </div>
                    <div className={cx("figcaption")}>
                      <p>Template 16</p>
                    </div>
                    <div className={cx("el-horizontal")}>
                      <a
                        className={cx("btn-gradient", "select-template-new")}
                        href="javascript:void(0);"
                        data-template-id={16}
                        data-template-name="Template 16"
                      >
                        Ch???n template
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className={cx("col-xs-12", "col-sm-6", "col-md-4", "cv-item")}
                >
                  <div className={cx("figure")}>
                    <div className={cx("image")}>
                      <img
                        src="https://static.careerbuilder.vn/themes/cv_tool/images/template/cb-cvhay_template-2020_17-02_1630384203.png"
                        alt="Template 17"
                      />
                    </div>
                    <div className={cx("figcaption")}>
                      <p>Template 17</p>
                    </div>
                    <div className={cx("el-horizontal")}>
                      <a
                        className={cx("btn-gradient", "select-template-new")}
                        href="javascript:void(0);"
                        data-template-id={17}
                        data-template-name="Template 17"
                      >
                        Ch???n template
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className={cx("col-xs-12", "col-sm-6", "col-md-4", "cv-item")}
                >
                  <div className={cx("figure")}>
                    <div className={cx("image")}>
                      <img
                        src="https://static.careerbuilder.vn/themes/cv_tool/images/template/cb-cvhay_template-2020_18-02_1630384223.png"
                        alt="Template 18"
                      />
                    </div>
                    <div className={cx("figcaption")}>
                      <p>Template 18</p>
                    </div>
                    <div className={cx("el-horizontal")}>
                      <a
                        className={cx("btn-gradient", "select-template-new")}
                        href="javascript:void(0);"
                        data-template-id={18}
                        data-template-name="Template 18"
                      >
                        Ch???n template
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Tips
            isShowing={isShowing.tips}
            hide={() => toggle('tips')}
            title=">G???i ??"
            content="???nh ch??n dung trong CV tuy kh??ng quy???t ?????nh t???t c???
                          nh??ng l???i c?? kh??? n??ng g??y ???n t?????ng v???i Nh?? tuy???n d???ng
                          t??? c??i nh??n ?????u ti??n. N???u CV c???a b???n c?? th??m ???nh ch??n
                          dung, b???n c???n nh??? nh???ng nguy??n t???c c?? b???n sau: M???m
                          c?????i v???a ????? t???o thi???n c???m; Trang ph???c trong ???nh n??n c??
                          m??u ????n s???c v?? t??ng t????i t???n, nh??? nh??ng; Ph??ng n???n c???a
                          ???nh kh??ng r?????m r?? hay c?? nhi???u chi ti???t ph???."
          />
          <ChosseTemplate 
            isShowing={isShowing.chooseTemplate}
            hide={() => toggle('chooseTemplate')}
            classNames={cx}
          />
        </div>
      </div>
    </div>
  );
};

export default ChangeTemplate;
