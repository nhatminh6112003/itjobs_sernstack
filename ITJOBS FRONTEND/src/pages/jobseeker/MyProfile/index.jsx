import classNames from "classnames/bind";
import styles from "./MyProfile.module.css";

import SideBar from "~/layouts/Components/jobseeker/SideBar";
import {
  LockIcon,
  ShareIcon,
  EditIcon,
  RemoveRedEyeIcon,
  VisibilityOffIcon,
  GetAppIcon,
  AddPhotoAlternateIcon,
  HighlightOffIcon,
  AddIcon
} from "~/resources"
 

const cx = classNames.bind(styles);

const MyProfile = () => {
  return (
    <div className={cx("page-content", "d-flex", "align-items-stretch")}>
      <SideBar className={cx} />
      <div className={cx("content-inner")}>
        <div className={cx("container-fluid")}>
          <div className={cx("db-my-profile")}>
            <div className={cx("row")}>
              <div className={cx("col-lg-8", "col-xl-9", "main-widget")}>
                <div
                  className={cx("widget", "widget-2", "widget-11")}
                  id="widget-11"
                >
                  <div className={cx("widget-head")}>
                    <div className={cx("cb-title-h3")}>
                      <h3>Careerbuilder Profile</h3>
                    </div>
                  </div>
                  <div className={cx("widget-body")}>
                    <div className={cx("row")}>
                      <div className={cx("col-lg-4", "col-xl-3")}>
                        <div className={cx("img-info")}>
                          <div className={cx("figure")}>
                            <div className={cx("image", "img-result", "hide")}>
                              <img
                                id="img_mem_avatar"
                                className={cx("cropped")}
                                src="./img/dash-board/1.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className={cx("mobile-show")}>
                            <div className={cx("cb-name")}>
                              <h2>Lop Minh</h2>
                            </div>
                            <div className={cx("information")}>
                              <div
                                className={cx("assistant")}
                                id="titleresume_17722295"
                              >
                                Frontend Developer
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={cx("action-profile")}>
                          <ul>
                            <li className={cx("edit-pro")}>
                              <input
                                className={cx("hidden")}
                                type="hidden"
                                id="fileAvatar"
                                name="fileAvatar"
                              />
                              <a
                                href=""
                                id="upload-image"
                              >
                               <AddPhotoAlternateIcon fontSize="small" sx={{paddingRight:'5px'}} />
                                <span>T???i h??nh ???nh</span>
                              </a>
                            </li>
                            <li className={cx("view-pro")}>
                              <a
                                href=""
                              >
                                <HighlightOffIcon fontSize="small"  sx={{paddingRight:'5px'}}/>
                                <span>X??a h??nh ???nh</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className={cx("col-lg-8", "col-xl-9")}>
                        <div className={cx("cb-name")}>
                          <h2 id="section_name">Lop Minh</h2>
                        </div>
                        <div className={cx("information")}>
                          <div className={cx("assistant")}>
                            Frontend Developer
                          </div>
                        </div>
                        <div id="complete_section">
                          {" "}
                          <div
                            className={cx("progress-bar-status", "not-approve")}
                          >
                            <div className={cx("profile-strength")}>
                              <p>
                                M???c ????? ho??n th??nh: <span>Kh??ng ???????c duy???t</span>
                              </p>
                            </div>
                            <div className={cx("noti")}>
                              <em
                                className={cx(
                                  "mdi",
                                  "mdi-alert-circle-outline"
                                )}
                              />
                              <p>
                                Kh??ng ???????c duy???t - H??? s?? c???a b???n kh??ng ???????c
                                duy???t n??n vui l??ng check mail v?? l??m theo h?????ng
                                d???n.
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
                                <div className={cx("line", "active")} />
                                <div className={cx("line", "active")} />
                                <div className={cx("line", "active")} />
                                <div className={cx("line", "")} />
                                <div className={cx("line", "")} />
                                <div className={cx("line", "")} />
                                <div className={cx("line", "")}>
                                  <span className={cx("success")} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className={cx(
                              "searchable-cv-widget",
                              "status-area",
                              "attached-status-area"
                            )}
                          >
                            <div
                              className={cx(
                                "switch-status",
                                "group_searchable"
                              )}
                              id="cv_searchable_17722295"
                              data-id={17722295}
                              data-complete={1}
                            >
                              <a
                                href=""
                                data-type={2}
                                className={cx("lock", "active")}
                              >
                                <LockIcon fontSize="small" />
                                Kh??a
                              </a>
                              <a
                                href=""
                                data-type={1}
                                className={cx("public", "")}
                              >
                                <em className={cx("mdi", "mdi-web")} />
                                C??ng khai
                              </a>
                              <a
                                href=""
                                data-type={3}
                                className={cx("flash", "")}
                              >
                                <em className={cx("mdi", "mdi-flash")} />
                                Kh???n c???p
                              </a>
                            </div>
                            <p
                              className={cx(
                                "text-notes",
                                "text-notes-2",
                                "d-block"
                              )}
                            >
                              B???n ??ang <span>v?? hi???u h??a</span> h??? s??. Nh?? tuy???n
                              d???ng s??? kh??ng th???y ???????c h??? s?? n??y c???a b???n.
                            </p>
                            <p
                              className={cx(
                                "text-notes",
                                "text-notes-1",
                                "d-none"
                              )}
                            >
                              H??? s?? c???a b???n ??ang ??? tr???ng th??i{" "}
                              <span>C??ng Khai</span>. Nh?? tuy???n d???ng c?? th??? t??m
                              th???y H??? s?? n??y c???a b???n.
                            </p>
                            <p
                              className={cx(
                                "text-notes",
                                "text-notes-3",
                                "d-none"
                              )}
                            >
                              H??? s?? c???a b???n ??ang ??? tr???ng th??i{" "}
                              <span>Kh???n c???p</span>. H??? s?? c???a b???n s??? ???????c ??u
                              ti??n t??m th???y b???i c??c nh?? tuy???n d???ng.
                            </p>
                          </div>
                          <div className={cx("check-box")}>
                            <div
                              className={cx(
                                "form-group",
                                "form-check-box",
                                "job-alerts"
                              )}
                            >
                              <label htmlFor="cv_jobalert_17722295">
                                Nh???n th??ng b??o vi???c l??m
                                <input
                                  type="checkbox"
                                  name="cv_jobalert_17722295"
                                  id="cv_jobalert_17722295"
                                  defaultValue={17722295}
                                  defaultChecked="checked"
                                  onclick="updateCvJobalert(this);"
                                />
                                <span className={cx("slider")} />{" "}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={cx("widget", "widget-24")}
                  id="t-resume-section"
                >
                  {" "}
                  <div className={cx("widget-head")}>
                    <div className={cx("cb-title-h3")}>
                      <div className={cx("figure")}>
                        <div className={cx("image")}>
                          <img src="./img/dash-board/i14.png" alt="" />
                        </div>
                        <div className={cx("figcaption")}>
                          <h3>Ti??u ????? h??? s?? *</h3>
                          <div className={cx("status", "success")}>
                            <p>Ho??n th??nh</p>
                          </div>
                        </div>
                      </div>
                      <div className={cx("right-action")}>
                        <div
                          className={cx("tips", "p1")}
                          onclick="openTipSlide('tip-t-resume')"
                        >
                          <div className={cx("icon")}>
                            <em className={cx("mdi", "mdi-lightbulb")} />
                          </div>
                          <p>Tips</p>
                        </div>
                        <div className={cx("link-edit")}>
                          <a
                            href="javascript:void(0)"
                            onclick="editResumeTitle();"
                          >
                            {" "}
                            <em className={cx("material-icons")}>
                              <EditIcon fontSize="normal"/>
                            </em>
                            <span>Ch???nh s???a</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx("widget-body")}>
                    <div className={cx("content")}>
                      <p>Frontend Developer</p>
                    </div>
                    <input
                      type="hidden"
                      id="title_hidden_value"
                      defaultValue="Frontend Developer"
                    />
                  </div>
                </div>
                <div
                  className={cx("widget", "widget-13")}
                  id="personalinfo-section"
                >
                  {" "}
                  <div className={cx("widget-head")}>
                    <div className={cx("cb-title-h3")}>
                      <div className={cx("figure")}>
                        <div className={cx("image")}>
                          <img src="./img/dash-board/i2.png" alt="" />
                        </div>
                        <div className={cx("figcaption")}>
                          <h3>Th??ng tin c?? nh??n *</h3>
                          <div className={cx("status", "success")}>
                            <p>Ho??n th??nh</p>
                          </div>
                        </div>
                      </div>
                      <div className={cx("right-action")}>
                        <div
                          className={cx("tips", "p1")}
                          onclick="openTipSlide('tip-personalinfo')"
                        >
                          <div className={cx("icon")}>
                            <em className={cx("mdi", "mdi-lightbulb")} />
                          </div>
                          <p>Tips</p>
                        </div>
                        <div className={cx("link-edit")}>
                          <a
                            href=""
                            onclick="editProfile();"
                          >
                            {" "}
                            <em className={cx("material-icons")}>
                            <EditIcon fontSize="normal"/>

                            </em>
                            <span>Ch???nh s???a</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx("widget-body")}>
                    <div className={cx("table")}>
                      <table>
                        <tbody>
                          <tr>
                            <td>H??? v?? T??n L??t</td>
                            <td>Lop</td>
                          </tr>
                          <tr>
                            <td>T??n</td>
                            <td>Minh</td>
                          </tr>
                          <tr>
                            <td>Ng??y sinh</td>
                            <td>31/12/2007</td>
                          </tr>
                          <tr>
                            <td>??i???n tho???i</td>
                            <td>0964185472</td>
                          </tr>
                          <tr>
                            <td>Email</td>
                            <td>lop7cttnq@gmail.com</td>
                          </tr>
                          <tr>
                            <td>Qu???c t???ch</td>
                            <td>Ng?????i Vi???t Nam</td>
                          </tr>
                          <tr>
                            <td>T??nh tr???ng h??n nh??n</td>
                            <td>?????c th??n</td>
                          </tr>
                          <tr>
                            <td>Qu???c gia</td>
                            <td>Vi???t Nam</td>
                          </tr>
                          <tr>
                            <td>T???nh/ Th??nh ph???</td>
                            <td>H?? N???i</td>
                          </tr>
                          <tr>
                            <td>Qu???n/ Huy???n</td>
                            <td>Huy???n Ba V??</td>
                          </tr>
                          <tr>
                            <td>?????a ch???</td>
                            <td>123, Huy???n Ba V??, H?? N???i, Vi???t Nam</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className={cx("widget", "widget-14")} id="widget-14">
                  {" "}
                  <div className={cx("widget-head")}>
                    <div className={cx("cb-title-h3")}>
                      <div className={cx("figure")}>
                        <div className={cx("image")}>
                          <img src="./img/dash-board/i3.png" alt="" />
                        </div>
                        <div className={cx("figcaption")}>
                          <h3>M???c ti??u ngh??? nghi???p</h3>
                          <div className={cx("status")}>
                            <p>Kh??ng b???t bu???c</p>
                          </div>
                        </div>
                      </div>
                      <div className={cx("right-action")}>
                        <div
                          className={cx("tips", "p1")}
                          onclick="openTipSlide('tip-objective')"
                        >
                          <div className={cx("icon")}>
                            <em className={cx("mdi", "mdi-lightbulb")} />
                          </div>
                          <p>Tips</p>
                        </div>
                        <div className={cx("link-edit")}>
                          <a
                            href=""
                            onclick="editResumeObjective();"
                          >
                            {" "}
                            <em className={cx("material-icons")}>
                            <EditIcon fontSize="normal"/>

                            </em>
                            <span>Ch???nh s???a</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx("widget-body")}>
                    <div className={cx("content")}>
                      <p>mimnhvodcih</p>{" "}
                    </div>
                    <ul className={cx("list-action")}>
                      <li className={cx("delete", "no-bf")}>
                        <a
                          href=""
                          onclick="deleteResumeObject();"
                        >
                          {" "}
                          <em className={cx("material-icons")}>
                            highlight_off
                          </em>
                          <span>X??a</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={cx("widget", "widget-18")} id="widget-18">
                  <div className={cx("widget-head")}>
                    <div className={cx("cb-title-h3")}>
                      <div className={cx("figure")}>
                        <div className={cx("image")}>
                          <img src="./img/dash-board/i5.png" alt="" />
                        </div>
                        <div className={cx("figcaption")}>
                          <h3>Th??ng tin ngh??? nghi???p *</h3>
                          <div className={cx("status", "success")}>
                            <p>Ho??n th??nh</p>
                          </div>
                        </div>
                      </div>
                      <div className={cx("right-action")}>
                        <div
                          className={cx("tips", "p1")}
                          onclick="openTipSlide('tip-desired-job')"
                        >
                          <div className={cx("icon")}>
                            <em className={cx("mdi", "mdi-lightbulb")} />
                          </div>
                          <p>Tips</p>
                        </div>
                        <div className={cx("link-edit")}>
                          <a
                            title="Ch???nh s???a"
                            href="javascript:void(0)"
                            onclick="editDesiredJob();"
                          >
                            {" "}
                            <em className={cx("material-icons")}>
                            <EditIcon fontSize="normal"/>

                            </em>
                            <span>Ch???nh s???a</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx("widget-body")}>
                    <table>
                      <tbody>
                        <tr>
                          <td>C???p b???c mong mu???n</td>
                          <td>Sinh vi??n/ Th???c t???p sinh</td>
                        </tr>
                        <tr>
                          <td>M???c l????ng</td>
                          <td>500,000 - 1,000,000 VND</td>
                        </tr>
                        <tr>
                          <td>H??nh th???c l??m vi???c</td>
                          <td>Nh??n vi??n ch??nh th???c</td>
                        </tr>
                        <tr>
                          <td>Ph????ng th???c c??ng vi???c</td>
                          <td>Work from home</td>
                        </tr>
                        <tr>
                          <td>Ng??nh ngh???</td>
                          <td>
                            <ul>
                              <li>B??n l??? / B??n s???</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>N??i l??m vi???c</td>
                          <td>
                            <ul>
                              <li>Dak Lak - Huy???n Bu??n ????n</li>
                              <li />
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className={cx("widget", "widget-15")} id="widget-15">
                  <div className={cx("widget-head")}>
                    <div className={cx("cb-title-h3")}>
                      <div className={cx("figure")}>
                        <div className={cx("image")}>
                          <img src="./img/dash-board/i4.png" alt="" />
                        </div>
                        <div className={cx("figcaption")}>
                          <h3>Kinh nghi???m l??m vi???c *</h3>
                          <div className={cx("status", "success")}>
                            <p>Ho??n th??nh</p>
                          </div>
                        </div>
                      </div>
                      <div className={cx("right-action")}>
                        <div
                          className={cx("tips", "p1")}
                          onclick="openTipSlide('tip-experience')"
                        >
                          <div className={cx("icon")}>
                            <em className={cx("mdi", "mdi-lightbulb")} />
                          </div>
                          <p>Tips</p>
                        </div>
                        <div className={cx("link-add")}>
                          <a
                            href=""
                            onclick="show_frmExperience(0);"
                            title="Th??m m???i"
                          >
                         
                            <em className={cx("material-icons")}>
                              <AddIcon sx={{fontSize:"20px"}}/>
                            </em>
                            <span>Th??m m???i</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx("widget-body")}>
                    <div className={cx("experience")}>
                      <table>
                        <tbody>
                          <tr>
                            <td>S??? n??m kinh nghi???m</td>
                            <td id="txt-experience">Ch??a c?? kinh nghi???m</td>
                            <td>
                              <div className={cx("link-edit")}>
                                <a
                                  href=""
                                  onclick="editFrmExperience();"
                                >
                                  {" "}
                                  <em className={cx("material-icons")}>
                                    create
                                  </em>
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>C???p b???c hi???n t???i</td>
                            <td id="cbprofile_levelpresent">M???i t???t nghi???p</td>
                            <td>
                              <div className={cx("link-edit")}>
                                <a
                                  href=""
                                  onclick="editFrmExperience();"
                                >
                                  {" "}
                                  <em className={cx("material-icons")}>
                                    create
                                  </em>
                                </a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className={cx("sticker")}>
                      <ul className={cx("list-sticker")}>
                        <li className={cx("item")} id="expList_2451920">
                          <div className={cx("head-sticker")}>
                            <div className={cx("title")}>
                              <h4>nh??n vi??n</h4>
                              <div className={cx("sub-title")}>
                                <p>fpt</p>
                              </div>
                              <div className={cx("date")}>
                                <p>1/2005 - Hi???n t???i</p>
                              </div>
                            </div>
                            <div className={cx("right-head")}>
                              <div className={cx("view-less")}>
                                <em className={cx("material-icons")}>
                                  expand_more
                                </em>
                              </div>
                              <ul className={cx("list-action")}>
                                <li className={cx("edit-link")}>
                                  <a
                                    href=""
                                    title="Ch???nh s???a"
                                    onclick="show_frmExperience(2451920);"
                                  >
                                    <em className={cx("material-icons")}>
                                    <EditIcon fontSize="normal"/>

                                    </em>
                                  </a>
                                </li>
                                <li className={cx("delete")}>
                                  <a
                                    href=""
                                    title="X??a"
                                    onclick="deleteExperience(2451920);"
                                  >
                                    {" "}
                                    <em className={cx("material-icons")}>
                                      highlight_off
                                    </em>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className={cx("body-sticker")}>
                            <div className={cx("content")}> 123 </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={cx("widget", "widget-16")} id="widget-16">
                  {" "}
                  <div className={cx("widget-head")}>
                    <div className={cx("cb-title-h3")}>
                      <div className={cx("figure")}>
                        <div className={cx("image")}>
                          <img src="./img/dash-board/i7.png" alt="" />
                        </div>
                        <div className={cx("figcaption")}>
                          <h3>H???c v???n *</h3>
                          <div className={cx("status", "success")}>
                            <p>Ho??n th??nh</p>
                          </div>
                        </div>
                      </div>
                      <div className={cx("right-action")}>
                        <div
                          className={cx("tips", "p1")}
                          onclick="openTipSlide('tip-education')"
                        >
                          <div className={cx("icon")}>
                            <em className={cx("mdi", "mdi-lightbulb")} />
                          </div>
                          <p>Tips</p>
                        </div>
                        <div className={cx("link-add")}>
                          <a
                            href="javascript:void(0)"
                            onclick="show_frmEducation(0);"
                            title="Th??m m???i"
                          >
                            {" "}
                            <em className={cx("material-icons")}>
                            <AddIcon sx={{fontSize:"20px"}}/>
                            </em>
                            <span>Th??m m???i</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx("widget-body")}>
                    <div className={cx("experience")}>
                      <table>
                        <tbody>
                          <tr>
                            <td>B???ng c???p cao nh???t</td>
                            <td>
                              <div
                                className={cx("box-edit-degree")}
                                id="cbprofile_degree_name"
                              >
                                Cao ?????ng{" "}
                                <div
                                  className={cx(
                                    "link-edit",
                                    "link-highest-degree"
                                  )}
                                >
                                  <a href="">
                                    {" "}
                                    <em className={cx("material-icons")}>
                                      create
                                    </em>
                                  </a>
                                </div>
                              </div>
                              <div className={cx("highest-degree")}>
                                <div className={cx("select-group")}>
                                  <form id="resume-degree-form">
                                    <select name="degree" id="degree">
                                      <option value="">Ch???n</option>
                                      <option value={0}>Ch??a t???t nghi???p</option>
                                      <option value={1}>Trung h???c</option>
                                      <option value={2}>Trung c???p</option>
                                      <option value={3} selected="selected">
                                        Cao ?????ng
                                      </option>
                                      <option value={4}>?????i h???c</option>
                                      <option value={5}>Sau ?????i h???c</option>
                                      <option value={6}>Kh??c</option>
                                    </select>
                                  </form>
                                </div>
                                <div className={cx("link-save")}>
                                  {" "}
                                  <a
                                    href=""
                                    onclick="saveEduLevel();"
                                  >
                                    <em className={cx("material-icons")}>
                                      save
                                    </em>
                                    L??u L???i
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className={cx("sticker")}>
                      <ul className={cx("list-sticker")}>
                        <li className={cx("item")} id="eduList_1815961">
                          <div className={cx("head-sticker")}>
                            <div className={cx("title")}>
                              <h4>Trung h???c</h4>
                              <div className={cx("sub-title")}>
                                <p>fpt</p>
                              </div>
                              <div className={cx("date")}>
                                <p>T???t nghi???p 2-2006</p>
                              </div>
                            </div>
                            <div className={cx("right-head")}>
                              <div className={cx("view-less")}>
                                <em className={cx("material-icons")}>
                                  expand_more
                                </em>
                              </div>
                              <ul className={cx("list-action")}>
                                <li className={cx("edit-link")}>
                                  <a
                                    href=""
                                    onclick="show_frmEducation(1815961);"
                                    title="Ch???nh s???a"
                                  >
                                    {" "}
                                    <em className={cx("material-icons")}>
                                      create
                                    </em>
                                  </a>
                                </li>
                                <li className={cx("delete")}>
                                  <a
                                    href=""
                                    onclick="deleteEducation(1815961);"
                                    title="X??a"
                                  >
                                    {" "}
                                    <em className={cx("material-icons")}>
                                      highlight_off
                                    </em>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div
                            className={cx("body-sticker")}
                            style={{ display: "none" }}
                          >
                            <div className={cx("content")}>132</div>
                          </div>
                        </li>
                        <li className={cx("item")} id="eduList_1815960">
                          <div className={cx("head-sticker")}>
                            <div className={cx("title")}>
                              <h4>Trung c???p</h4>
                              <div className={cx("sub-title")}>
                                <p>fpt</p>
                              </div>
                              <div className={cx("date")}>
                                <p>T???t nghi???p 3-2005</p>
                              </div>
                            </div>
                            <div className={cx("right-head")}>
                              <div className={cx("view-less")}>
                                <em className={cx("material-icons")}>
                                  expand_more
                                </em>
                              </div>
                              <ul className={cx("list-action")}>
                                <li className={cx("edit-link")}>
                                  <a
                                    href=""
                                    onclick="show_frmEducation(1815960);"
                                    title="Ch???nh s???a"
                                  >
                                    {" "}
                                    <em className={cx("material-icons")}>
                                      create
                                    </em>
                                  </a>
                                </li>
                                <li className={cx("delete")}>
                                  <a
                                    href=""
                                    onclick="deleteEducation(1815960);"
                                    title="X??a"
                                  >
                                    {" "}
                                    <em className={cx("material-icons")}>
                                      highlight_off
                                    </em>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div
                            className={cx("body-sticker")}
                            style={{ display: "none" }}
                          >
                            <div className={cx("content")}>123</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className={cx("widget", "widget-16")}
                  id="certificate-section"
                >
                  {" "}
                  <div className={cx("widget-head")}>
                    <div className={cx("cb-title-h3")}>
                      <div className={cx("figure")}>
                        <div className={cx("image")}>
                          <img src="./img/dash-board/i10.png" alt="" />
                        </div>
                        <div className={cx("figcaption")}>
                          <h3>Ch???ng ch??? kh??c</h3>
                          <div className={cx("status")}>
                            <p>Kh??ng b???t bu???c</p>
                          </div>
                        </div>
                      </div>
                      <div className={cx("right-action")}>
                        <div
                          className={cx("tips", "p1")}
                          onclick="openTipSlide('tip-certificate')"
                        >
                          <div className={cx("icon")}>
                            <em className={cx("mdi", "mdi-lightbulb")} />
                          </div>
                          <p>Tips</p>
                        </div>
                        <div className={cx("link-add")}>
                          <a
                            href="javascript:void(0)"
                            onclick="editResumeCertificate(0);"
                          >
                            {" "}
                            <em className={cx("material-icons")}>
                            <AddIcon sx={{fontSize:"20px"}}/>

                            </em>
                            <span>Th??m m???i</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx("widget-body")}>
                    <div className={cx("sticker")}>
                      <ul className={cx("list-sticker")}>
                        <li className={cx("item")} id="certificate_106485">
                          <div className={cx("head-sticker")}>
                            <div className={cx("title")}>
                              <h4>k??? s?? ph???n m???m</h4>
                              <div className={cx("sub-title")}>
                                <p>fpt</p>
                              </div>
                              <div className={cx("date")}>
                                <p>25/12/2022 - 25/12/2022</p>
                              </div>
                            </div>
                            <div className={cx("right-head")}>
                              <ul className={cx("list-action")}>
                                <li className={cx("edit-link")}>
                                  <a
                                    href="javascript:void(0)"
                                    onclick="editResumeCertificate(106485);"
                                  >
                                    {" "}
                                    <em className={cx("material-icons")}>
                                      create
                                    </em>
                                  </a>
                                </li>
                                <li className={cx("delete")}>
                                  <a
                                    href="javascript:void(0)"
                                    onclick="deleteCertificate(106485);"
                                  >
                                    {" "}
                                    <em className={cx("material-icons")}>
                                      highlight_off
                                    </em>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className={cx("widget", "widget-22", "widget-17")}
                  id="language-section"
                >
                  {" "}
                  <div className={cx("widget-head")}>
                    <div className={cx("cb-title-h3")}>
                      <div className={cx("figure")}>
                        <div className={cx("image", "icon-translate")}>
                          <span className={cx("material-icons")}>
                            translate
                          </span>
                        </div>
                        <div className={cx("figcaption")}>
                          <h3>Ng??n ng??? </h3>
                          <div className={cx("status")}>
                            <p>Kh??ng b???t bu???c</p>
                          </div>
                        </div>
                      </div>
                      <div className={cx("right-action")}>
                        <div
                          className={cx("tips", "p1")}
                          onclick="openTipSlide('tip-language')"
                        >
                          <div className={cx("icon")}>
                            <em className={cx("mdi", "mdi-lightbulb")} />
                          </div>
                          <p>Tips</p>
                        </div>
                        <div className={cx("link-add-lang")}>
                          <a
                            href="javascript:void(0)"
                            onclick="editResumeLanguage(0);"
                          >
                            {" "}
                            <em className={cx("material-icons")}>
                            <AddIcon sx={{fontSize:"20px"}}/>

                            </em>
                            <span>Th??m m???i</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx("widget-body")}>
                    <div className={cx("list-progress")}>
                      <table>
                        <thead>
                          <tr>
                            <th>Tr??nh ????? ngo???i ng???</th>
                            <th>Tr??nh ?????</th>
                            <th>Ch???ng ch??? ngo???i ng???</th>
                            <th> </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className={cx("title")}>
                                <h4>Anh</h4>
                              </div>
                            </td>
                            <td>
                              <div className={cx("progress")}>
                                <progress
                                  className={cx("progress-main")}
                                  max={5}
                                  value={2}
                                />
                                <div className={cx("lavel")}>S?? c???p</div>
                                <div className={cx("progress-row")}>
                                  <div className={cx("line", "success")} />
                                  <div className={cx("line", "")} />
                                  <div className={cx("line", "")} />
                                  <div className={cx("line", "")} />
                                </div>
                              </div>
                            </td>
                            <td>
                              <span>ielts</span>
                            </td>
                            <td>
                              <ul className={cx("list-action")}>
                                <li className={cx("edit-link")}>
                                  <a
                                    href="javascript:void(0)"
                                    onclick="editResumeLanguage(329508);"
                                  >
                                    {" "}
                                    <em className={cx("material-icons")}>
                                      create
                                    </em>
                                    <span>Ch???nh s???a</span>
                                  </a>
                                </li>
                                <li className={cx("delete")}>
                                  <a
                                    href="javascript:void(0)"
                                    onclick="deleteResumeLanguageProfile(329508);"
                                  >
                                    {" "}
                                    <em className={cx("material-icons")}>
                                      highlight_off
                                    </em>
                                    <span>Xo??</span>
                                  </a>
                                </li>
                              </ul>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className={cx("widget", "widget-17")} id="widget-17">
                  {" "}
                  <div className={cx("widget-head")}>
                    <div className={cx("cb-title-h3")}>
                      <div className={cx("figure")}>
                        <div className={cx("image")}>
                          <img src="./img/dash-board/i9.png" alt="" />
                        </div>
                        <div className={cx("figcaption")}>
                          <h3>K??? n??ng chuy??n m??n *</h3>
                          <div className={cx("status", "success")}>
                            <p>Ho??n th??nh</p>
                          </div>
                        </div>
                      </div>
                      <div className={cx("right-action")}>
                        <div
                          className={cx("tips", "p1")}
                          onclick="openTipSlide('tip-skill')"
                        >
                          <div className={cx("icon")}>
                            <em className={cx("mdi", "mdi-lightbulb")} />
                          </div>
                          <p>Tips</p>
                        </div>
                        <div className={cx("link-add")}>
                          <a
                            href=""
                            onclick="show_frmSkill(0);"
                          >
                            {" "}
                            <em className={cx("material-icons")}>
                            <AddIcon sx={{fontSize:"20px"}}/>

                            </em>
                            <span>Th??m m???i</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx("widget-body")}>
                    <div
                      className={cx("list-progress")}
                      id="list-progress-skill"
                    >
                      <table>
                        <thead>
                          <tr>
                            <th>Skill </th>
                            <th>M???c ?????</th>
                            <th> </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr id="skillList_3144927">
                            <td>
                              <div className={cx("title")}>
                                <h4>c#</h4>
                              </div>
                              <div className={cx("content")}>
                                <p>t???t</p>
                              </div>
                            </td>
                            <td>
                              <div className={cx("progress")}>
                                <progress
                                  className={cx("progress-main")}
                                  max={5}
                                  value={3}
                                />
                                <div className={cx("lavel")}>
                                  M???c ????? <span>3/5</span>
                                </div>
                                <div className={cx("progress-row")}>
                                  <div className={cx("line", "success")} />
                                  <div className={cx("line", "success")} />
                                  <div className={cx("line", "success")} />
                                  <div className={cx("line", "")} />
                                  <div className={cx("line", "")} />
                                </div>
                              </div>
                            </td>
                            <td>
                              <ul className={cx("list-action")}>
                                <li className={cx("edit-link")}>
                                  <a
                                    href=""
                                    onclick="show_frmSkill(3144927);"
                                    title="Ch???nh s???a"
                                  >
                                    {" "}
                                    <em className={cx("material-icons")}>
                                      create
                                    </em>
                                    <span>Ch???nh s???a</span>
                                  </a>
                                </li>
                                <li className={cx("delete")}>
                                  <a
                                    href=""
                                    title="X??a"
                                    onclick="deleteResumeSkill(3144927)"
                                  >
                                    {" "}
                                    <em className={cx("material-icons")}>
                                      highlight_off
                                    </em>
                                    <span>X??a</span>
                                  </a>
                                </li>
                              </ul>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className={cx("widget", "widget-19")} id="widget-19">
                  {" "}
                  <div className={cx("widget-head")}>
                    <div className={cx("cb-title-h3")}>
                      <div className={cx("figure")}>
                        <div className={cx("image")}>
                          <img src="./img/dash-board/i6.png" alt="" />
                        </div>
                        <div className={cx("figcaption")}>
                          <h3>Th??nh t??ch n???i b???t</h3>
                          <div className={cx("status", "default")}>
                            <p>Kh??ng b???t bu???c</p>
                          </div>
                        </div>
                      </div>
                      <div className={cx("right-action")}>
                        <div
                          className={cx("tips", "p1")}
                          onclick="openTipSlide('tip-award')"
                        >
                          <div className={cx("icon")}>
                            <em className={cx("mdi", "mdi-lightbulb")} />
                          </div>
                          <p>Tips</p>
                        </div>
                        <div className={cx("link-edit")}>
                          <a
                            href=""
                            onclick="editResumeAdditioninfo();"
                          >
                            {" "}
                            <em className={cx("material-icons")}>create</em>
                            <span>Ch???nh s???a</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={cx("widget-body")}
                    id="no-content"
                    style={{ display: "none" }}
                  >
                    <div className={cx("no-content")}>
                      <p>Vui l??ng th??m Th??nh t??ch n???i b???t c???a b???n</p>
                      <a
                        href=""
                        onclick="editResumeAdditioninfo();"
                      >
                        <em className={cx("mdi", "mdi-plus-circle")} />
                        <span>Th??m m???i</span>
                      </a>{" "}
                    </div>
                  </div>
                  <div className={cx("widget-body")}>
                    <div className={cx("content")} id="content">
                      {" "}
                      <p>hackathon 2022</p>
                    </div>
                    <ul className={cx("list-action")}>
                      <li className={cx("delete")}>
                        <a
                          href=""
                          onclick="deleteResumeAdditionInfo();"
                        >
                          {" "}
                          <em className={cx("material-icons")}>
                            highlight_off
                          </em>
                          <span>X??a</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className={cx("widget", "widget-23", "widget-15")}
                  id="other-activity-section"
                >
                  {" "}
                  <div className={cx("widget-head")}>
                    <div className={cx("cb-title-h3")}>
                      <div className={cx("figure")}>
                        <div className={cx("image")}>
                          <img src="./img/dash-board/i13.png" alt="" />
                        </div>
                        <div className={cx("figcaption")}>
                          <h3>Ho???t ?????ng kh??c</h3>
                          <div className={cx("status")}>
                            <p>Kh??ng b???t bu???c</p>
                          </div>
                        </div>
                      </div>
                      <div className={cx("right-action")}>
                        <div
                          className={cx("tips", "p1")}
                          onclick="openTipSlide('tip-other-activity')"
                        >
                          <div className={cx("icon")}>
                            <em className={cx("mdi", "mdi-lightbulb")} />
                          </div>
                          <p>Tips</p>
                        </div>
                        <div className={cx("link-add")}>
                          <a
                            href="javascript:void(0)"
                            onclick="editResumeActivity(0);"
                          >
                            {" "}
                            <em className={cx("material-icons")}>
                            <AddIcon sx={{fontSize:"20px"}}/>

                            </em>
                            <span>Th??m m???i</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx("widget-body")}>
                    <div className={cx("no-content")}>
                      <p>M?? t??? ho???t ?????ng</p>
                      <a
                        href="javascript:void(0)"
                        onclick="editResumeActivity(0);"
                      >
                        <em className={cx("mdi", "mdi-plus-circle")} />
                        <span>Th??m m???i</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className={cx("widget", "widget-20")} id="widget-20">
                  {" "}
                  <div className={cx("widget-head")}>
                    <div className={cx("cb-title-h3")}>
                      <div className={cx("figure")}>
                        <div className={cx("image")}>
                          <img src="./img/dash-board/i8.png" alt="" />
                        </div>
                        <div className={cx("figcaption")}>
                          <h3>Ng?????i tham kh???o</h3>
                          <div className={cx("status", "default")}>
                            <p>Kh??ng b???t bu???c</p>
                          </div>
                        </div>
                      </div>
                      <div className={cx("right-action")}>
                        <div
                          className={cx("tips", "p1")}
                          onclick="openTipSlide('tip-references')"
                        >
                          <div className={cx("icon")}>
                            <em className={cx("mdi", "mdi-lightbulb")} />
                          </div>
                          <p>Tips</p>
                        </div>
                        <div className={cx("link-add")}>
                          <a
                            href=""
                            onclick="show_frmRefer(0);"
                          >
                            {" "}
                            <em className={cx("material-icons")}>
                            <AddIcon sx={{fontSize:"20px"}}/>

                            </em>
                            <span>Th??m m???i</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx("widget-body")}>
                    <div className={cx("list-references")}>
                      {" "}
                      <div className={cx("item")} id="referList_825646">
                        <div className={cx("title")}>
                          <h4>nguyen nhat minh</h4>
                          <ul className={cx("list-action")}>
                            <li className={cx("edit-link")}>
                              <a
                                href=""
                                onclick="show_frmRefer(825646);"
                              >
                                {" "}
                                <em className={cx("material-icons")}>create</em>
                              </a>
                            </li>
                            <li className={cx("delete")}>
                              <a
                                href=""
                                onclick="deleteRefer(825646);"
                              >
                                {" "}
                                <em className={cx("material-icons")}>
                                  highlight_off
                                </em>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className={cx("content")}>
                          <ul>
                            <li>
                              {" "}
                              <em className={cx("material-icons")}>person</em>
                              Ch???c v??? leader
                            </li>
                            <li>
                              {" "}
                              <em className={cx("material-icons")}>domain</em>
                              C??ng ty fpt
                            </li>
                            <li>
                              {" "}
                              <em className={cx("material-icons")}>phone</em>S???
                              ??i???n tho???i: 0839704567
                            </li>
                            <li>
                              {" "}
                              <em className={cx("material-icons")}>email</em>
                              Email: aolang169@gmail.com
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={cx("col-lg-4", "col-xl-3", "main-menu")}>
                <div className={cx("menu-shortchut")}>
                  <div className={cx("list-button")}>
                    <ul>
                      <li>
                        <a
                          className={cx("share-profile")}
                          href=""
                        >
                          <em className={cx("material-icons")}>
                          <ShareIcon fontSize="normal"/>
                          </em>
                          <span>Chia s??? h??? s??</span>{" "}
                          <span className={cx("new-label")}> New </span>{" "}
                        </a>
                      </li>
                      <li>
                        <a href="https://careerbuilder.vn/vi/jobseekers/mykiemviec/changetemplate">
                          {" "}
                          <em className={cx("material-icons")}>
                            <EditIcon fontSize="normal"/>
                          </em>
                          <span>Ch???nh M???u H??? S??</span>
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="" id="btn_view_cbprofile">
                          <em className={cx("material-icons")}>
                          <RemoveRedEyeIcon fontSize="normal"/>
                          </em>
                          <span>Xem CV Template</span>
                        </a>
                      </li>
                      <li id="btn_download" style={{ display: "block" }}>
                      
                        <a
                          href=""
                          onclick="downloadCvProfile(17722295)"
                        >
                         
                          <em className={cx("material-icons")}>
                            <GetAppIcon  fontSize="normal" />
                          </em>
                          <span>T???i h??? s??</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className={cx("hidden-info")}
                          href=""
                          onclick="showHideInfor();"
                        >
                           <em className={cx("material-icons")}>
                            <VisibilityOffIcon fontSize="normal"/>
                          </em>
                          <span>???n th??ng tin</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className={cx("head-menu")}>
                    <div className={cx("name-shortchut")}>
                      <a className={cx("active")} href="">
                        Careerbuilder Profile
                      </a>
                    </div>
                    <div className={cx("toggle-menu")}>
                      <em className={cx("material-icons")}>list</em>
                    </div>
                  </div>
                  <ul className={cx("list-shortchut")}>
                    <li className={cx("active")}>
                      <a
                        className={cx("active")}
                        href=""
                        data-href="#widget-11"
                      >
                        Careerbuilder Profile
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        data-href="#t-resume-section"
                      >
                        Ti??u ????? h??? s??
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        data-href="#personalinfo-section"
                      >
                        Th??ng tin c?? nh??n
                      </a>
                    </li>
                    <li>
                      <a href="" data-href="#widget-14">
                        M???c ti??u ngh??? nghi???p
                      </a>
                    </li>
                    <li>
                      <a href="" data-href="#widget-18">
                        Th??ng tin ngh??? nghi???p
                      </a>
                    </li>
                    <li>
                      <a href="" data-href="#widget-15">
                        Kinh nghi???m l??m vi???c
                      </a>
                    </li>
                    <li>
                      <a href="" data-href="#widget-16">
                        H???c v???n
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        data-href="#certificate-section"
                      >
                        Ch???ng ch??? kh??c
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        data-href="#language-section"
                      >
                        Ng??n ng???
                      </a>
                    </li>
                    <li>
                      <a href="" data-href="#widget-17">
                        K??? n??ng chuy??n m??n
                      </a>
                    </li>
                    <li>
                      <a href="" data-href="#widget-19">
                        Th??nh t??ch n???i b???t
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        data-href="#other-activity-section"
                      >
                        Ho???t ?????ng kh??c
                      </a>
                    </li>
                    <li>
                      <a href="" data-href="#widget-20">
                        Ng?????i tham kh???o
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className={cx("hidden-edit-modal", "edit-modal-dashboard")}
            style={{ display: "none" }}
          >
            <div className={cx("modal-title")}>
              <h3>???n m???t s??? th??ng tin</h3>
            </div>
            <div className={cx("body-modal", "main-form")}>
              <form
                name="frmConfident"
                id="frmConfident"
                method="POST"
                className={cx("form-horizontal")}
              >
                <input type="hidden" name="r_id" defaultValue={0} />
                <input type="hidden" name="type_id" defaultValue="profile" />
                <div className={cx("line")}>
                  <p>Th??ng tin c?? nh??n</p>
                </div>
                <div className={cx("row", "data-list")}>
                  <div className={cx("col-md-6")}>
                    <div className={cx("form-group", "form-checkbox")}>
                      <input
                        type="checkbox"
                        id="chkConfidential_6"
                        name="chkConfidential[6]"
                        defaultValue={1}
                      />
                      <label htmlFor="chkConfidential_6">
                        T??nh tr???ng h??n nh??n
                      </label>
                    </div>
                  </div>
                  <div className={cx("col-md-6")}>
                    <div className={cx("form-group", "form-checkbox")}>
                      <input
                        type="checkbox"
                        id="chkConfidential_0"
                        name="chkConfidential[0]"
                        defaultValue={1}
                      />
                      <label htmlFor="chkConfidential_0">???n H??? v?? t??n</label>
                    </div>
                  </div>
                  <div className={cx("col-md-6")}>
                    <div className={cx("form-group", "form-checkbox")}>
                      <input
                        type="checkbox"
                        id="chkConfidential_1"
                        name="chkConfidential[1]"
                        defaultValue={1}
                      />
                      <label htmlFor="chkConfidential_1">
                        ?????a ch??? (S??? nh??, ???????ng)
                      </label>
                    </div>
                  </div>
                  <div className={cx("col-md-6")}>
                    <div className={cx("form-group", "form-checkbox")}>
                      <input
                        type="checkbox"
                        id="chkConfidential_3"
                        name="chkConfidential[3]"
                        defaultValue={1}
                      />
                      <label htmlFor="chkConfidential_3">S??? ??i???n tho???i</label>
                    </div>
                  </div>
                </div>
                <div className={cx("line")}>
                  <p>Th??ng tin ngh??? nghi???p</p>
                </div>
                <div className={cx("row", "data-list")}>
                  <div className={cx("col-md-6")}>
                    <div className={cx("form-group", "form-checkbox")}>
                      <input
                        type="checkbox"
                        id="chkConfidential_7"
                        name="chkConfidential[7]"
                        defaultValue={1}
                      />
                      <label htmlFor="chkConfidential_7">
                        H??nh th???c l??m vi???c
                      </label>
                    </div>
                  </div>
                  <div className={cx("col-md-6")}>
                    <div className={cx("form-group", "form-checkbox")}>
                      <input
                        type="checkbox"
                        id="chkConfidential_9"
                        name="chkConfidential[9]"
                        defaultValue={1}
                      />
                      <label htmlFor="chkConfidential_9">M???c l????ng</label>
                    </div>
                  </div>
                  <div className={cx("col-md-6")}>
                    <div className={cx("form-group", "form-checkbox")}>
                      <input
                        type="checkbox"
                        id="chkConfidential_8"
                        name="chkConfidential[8]"
                        defaultValue={1}
                      />
                      <label htmlFor="chkConfidential_8">
                        Ph??c l???i mong mu???n
                      </label>
                    </div>
                  </div>
                </div>
                <div className={cx("button-modal")}>
                  <a
                    className={cx("btn-gradient")}
                    href="javascript:;"
                    onclick="saveConfResume();"
                  >
                    L??u L???i
                  </a>
                </div>
              </form>
            </div>
          </div>
          <div
            className={cx("edit-db-work-experience-1", "edit-modal-dashboard")}
            style={{ display: "none" }}
          >
            <div className={cx("modal-title")}>
              <h3>Kinh nghi???m l??m vi???c</h3>
            </div>
            <div className={cx("modal-body")}>
              <form name="frm_Experience" id="frm_Experience">
                <div className={cx("form-group", "row")}>
                  <div className={cx("col-lg-4")}>
                    <label htmlFor="">S??? n??m kinh nghi???m</label>
                  </div>
                  <div className={cx("col-lg-8")}>
                    <div className={cx("input-group")}>
                      <input
                        type="number"
                        className={cx("exp-yet")}
                        maxLength={2}
                        name="yearOfExperience"
                        id="yearOfExperience"
                        min={1}
                        max={55}
                        defaultValue={0}
                        disabled="disabled"
                      />
                    </div>
                    <div className={cx("form-error")}>
                      <span
                        className={cx("err_yearOfExperience")}
                        style={{ display: "none" }}
                      />
                    </div>
                    <div className={cx("form-group", "form-checkbox", "mt-1")}>
                      <input
                        type="checkbox"
                        id="not_experence"
                        name="not_experence"
                        defaultChecked="checked"
                        defaultValue={1}
                        style={{ marginRight: 5 }}
                      />
                      <label
                        className={cx("no-exp-yet")}
                        htmlFor="not_experence"
                      >
                        Ch??a c?? kinh nghi???m
                      </label>
                    </div>
                  </div>
                </div>
                <div className={cx("form-group", "row")}>
                  <div className={cx("col-lg-4")}>
                    <label htmlFor="">C???p b???c hi???n t???i</label>
                  </div>
                  <div className={cx("col-lg-8")}>
                    <div className={cx("select-group")}>
                      <select
                        name="levelcurrent_id"
                        id="levelcurrent_id"
                        style={{ float: "left", width: 200, marginBottom: 5 }}
                      >
                        <option value="">Ch???n</option>
                        <option value={1}>Sinh vi??n/ Th???c t???p sinh</option>
                        <option value={2} selected="selected">
                          M???i t???t nghi???p
                        </option>
                        <option value={3}>Nh??n vi??n</option>
                        <option value={4}>Tr?????ng nh??m / Gi??m s??t</option>
                        <option value={5}>Qu???n l??</option>
                        <option value={6}>Ph?? Gi??m ?????c</option>
                        <option value={7}>Gi??m ?????c </option>
                        <option value={8}>T???ng gi??m ?????c</option>
                        <option value={9}>Ch??? t???ch / Ph?? Ch??? t???ch</option>
                      </select>
                    </div>
                    <div className={cx("form-error")}>
                      <span
                        className={cx("err_levelcurrent_id")}
                        style={{ display: "none" }}
                      />
                    </div>
                  </div>
                </div>
                <div className={cx("form-group", "form-button")}>
                  <div className={cx("button-save", "button-center")}>
                    <button
                      className={cx("btn-gradient")}
                      type="button"
                      onclick="return saveFrmExperience();"
                    >
                      L??u L???i
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div
            id="popup-modal"
            className={cx("popup-modal", "intro-modal", "edit-modal-dashboard")}
            style={{ display: "none" }}
          >
            <div className={cx("modal-title")}>
              <h3>T??NH N??NG "CHIA S??? H??? S??" ???? S???N S??NG!</h3>
            </div>
            <div className={cx("modal-body")}>
              <div className={cx("box-intro")}>
                <div className={cx("box-img")}>
                  <img src="https://static.careerbuilder.vn/themes/careerbuilder/images/cv-profile/banner_popup_share_profile.jpg" />
                </div>
                <div className={cx("text-intro")}>
                  <p>
                    B???n ???? s???n s??ng "khoe" th????ng hi???u c?? nh??n tr??n m???i n???n
                    t???ng? Tr???i nghi???m ngay t??nh n??ng "Chia s??? profile" ?????n b???t
                    c??? n??i ????u nh??!
                  </p>
                </div>
                <div className={cx("action")}>
                  <label className={cx("container-ckb")}>
                    Kh??ng hi???n th??? l???i
                    <input type="checkbox" name="ckb-1" id="sp_popup_chk" />
                    <span className={cx("checkmark")} />
                  </label>
                  <button className={cx("btn-close-modal", "btn-close-popup")}>
                    ????ng
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className={cx("tips-modal")}
            id="tip_cvsetting"
            style={{ display: "none" }}
          >
            <div className={cx("head-modal")}>
              <div className={cx("icon")}>
                <em className={cx("mdi", "mdi-lightbulb-outline")} />
              </div>
              <div className={cx("title")}>
                <h3>????? CV kh??ng ch??? Hay m?? c??n ?????p trong m???t Nh?? tuy???n d???ng</h3>
              </div>
            </div>
            <div className={cx("body-modal")}>
              <div className={cx("widget", "widget-12")}>
                <div className={cx("widget-body")}>
                  <div className={cx("swiper-container")}>
                    <div className={cx("swiper-wrapper")}>
                      <div className={cx("swiper-slide")}>
                        <div className={cx("cb-title-h3")}>
                          <h3>H??? s?? CareerBuilder 4</h3>
                        </div>
                        <div className={cx("content")}>
                          <p>
                            Ph??ng ch??? trong CV ph???n n??o th??? hi???n phong th??i c???a
                            b???n khi l??m vi???c v?? Nh?? tuy???n d???ng th?????ng mong mu???n
                            ???????c ?????c c??c th??ng tin b???n ????a ra ??? m???t c??? ch??? v???a
                            ph???i, r?? r??ng, kh??ng qu?? to c??ng kh??ng qu?? nh???. C???
                            ch??? g???i ?? cho m???t CV chu???n l?? t???m 12 ?????n 14 v?? b???n
                            c?? th??? ki???m tra th??? b???ng c??ch in CV ra tr??n kh??? gi???y
                            A4 tr?????c khi g???i ??i ???ng tuy???n nh??.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={cx("main-button")}>
                      <div className={cx("button-prev")}>
                        <em className={cx("mdi", "mdi-chevron-left")} />
                      </div>
                      <div className={cx("button-next")}>
                        <em className={cx("mdi", "mdi-chevron-right")} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={cx("tips-modal")}
            id="tip-t-resume"
            style={{ display: "none" }}
          >
            <div className={cx("head-modal")}>
              <div className={cx("icon")}>
                <em className={cx("mdi", "mdi-lightbulb-outline")} />
              </div>
              <div className={cx("title")}>
                <h3>????? CV kh??ng ch??? Hay m?? c??n ?????p trong m???t Nh?? tuy???n d???ng</h3>
              </div>
            </div>
            <div className={cx("body-modal")}>
              <div className={cx("widget", "widget-12")}>
                <div className={cx("widget-body")}>
                  <div className={cx("swiper-container")}>
                    <div className={cx("swiper-wrapper")}>
                      Ti??u ????? h??? s??:
                      <br />
                      B???n n??n ????? ti??u ????? l?? v??? tr?? b???n ??ang ???ng tuy???n ho???c mu???n
                      l??m vi???c. Gi??p Nh?? tuy???n d???ng hi???u ngay v??? tr?? mong mu???n
                      khi nh???n h??? s?? c???a b???n.
                      <br />
                      V?? d???: "Nh??n vi??n kinh doanh" ho???c "Marketing Manager"
                      <br />
                      L??u ??: h??y ??i???u ch???nh ti??u ????? theo t???ng c??ng vi???c ???ng
                      tuy???n nh??!
                    </div>
                    <div className={cx("main-button")}>
                      <div className={cx("button-prev")}>
                        <em className={cx("mdi", "mdi-chevron-left")} />
                      </div>
                      <div className={cx("button-next")}>
                        <em className={cx("mdi", "mdi-chevron-right")} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={cx("tips-modal")}
            id="tip-personalinfo"
            style={{ display: "none" }}
          >
            <div className={cx("head-modal")}>
              <div className={cx("icon")}>
                <em className={cx("mdi", "mdi-lightbulb-outline")} />
              </div>
              <div className={cx("title")}>
                <h3>????? CV kh??ng ch??? Hay m?? c??n ?????p trong m???t Nh?? tuy???n d???ng</h3>
              </div>
            </div>
            <div className={cx("body-modal")}>
              <div className={cx("widget", "widget-12")}>
                <div className={cx("widget-body")}>
                  <div className={cx("swiper-container")}>
                    <div className={cx("swiper-wrapper")}>
                      Th??ng tin c?? nh??n:
                      <br />
                      - H??y s??? d???ng ?????a ch??? email chuy??n nghi???p ph?? h???p d??ng cho
                      c??ng vi???c, h???n ch??? s??? d???ng email kh?? ?????c ho???c d??ng nhi???u
                      k?? t??? ?????c bi???t.
                      <br />
                      - ???nh ?????i di???n tr??n h??? s?? c??ng nh?? l???n ?????u ti??n t???o ???n
                      t?????ng v???i Nh?? tuy???n d???ng. N??n ch???n ???nh ?????i di???n ch???p t???
                      vai tr??? l??n, c?? ??nh s??ng t???t, kh??ng gian h???n ch??? nhi???u chi
                      ti???t, n??n m???c trang ph???c c??ng s???.
                      <br />- Ki???m tra th??ng tin c?? nh??n ????? tr??nh tr?????ng h???p Nh??
                      Tuy???n D???ng kh??ng li??n h??? ???????c
                    </div>
                    <div className={cx("main-button")}>
                      <div className={cx("button-prev")}>
                        <em className={cx("mdi", "mdi-chevron-left")} />
                      </div>
                      <div className={cx("button-next")}>
                        <em className={cx("mdi", "mdi-chevron-right")} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={cx("tips-modal")}
            id="tip-objective"
            style={{ display: "none" }}
          >
            <div className={cx("head-modal")}>
              <div className={cx("icon")}>
                <em className={cx("mdi", "mdi-lightbulb-outline")} />
              </div>
              <div className={cx("title")}>
                <h3>????? CV kh??ng ch??? Hay m?? c??n ?????p trong m???t Nh?? tuy???n d???ng</h3>
              </div>
            </div>
            <div className={cx("body-modal")}>
              <div className={cx("widget", "widget-12")}>
                <div className={cx("widget-body")}>
                  <div className={cx("swiper-container")}>
                    <div className={cx("swiper-wrapper")}>
                      M???c ti??u ngh??? nghi???p: <br />
                      - H??y tr??nh b??y m???c ti??u c???a b???n th??n m???t c??ch ng???n g???n,
                      r?? r??ng nh??ng c??ng th??? hi???n ???????c mong mu???n c???a b???n th??n
                      ?????i v???i v??? tr??/ng??nh ngh??? m?? b???n ???ng tuy???n.
                      <br />- Trong tr?????ng h???p b???n mu???n n??i th??m v??? s??? nghi???p v??
                      kinh nghi???m l??m vi???c trong qu?? kh??? ????? nh?? tuy???n d???ng c??
                      th??? h??nh dung r?? h??n, th?? c??ng ?????ng qu??n tr??nh b??y th???t
                      t??m t???t nh??!
                    </div>
                    <div className={cx("main-button")}>
                      <div className={cx("button-prev")}>
                        <em className={cx("mdi", "mdi-chevron-left")} />
                      </div>
                      <div className={cx("button-next")}>
                        <em className={cx("mdi", "mdi-chevron-right")} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={cx("tips-modal")}
            id="tip-desired-job"
            style={{ display: "none" }}
          >
            <div className={cx("head-modal")}>
              <div className={cx("icon")}>
                <em className={cx("mdi", "mdi-lightbulb-outline")} />
              </div>
              <div className={cx("title")}>
                <h3>????? CV kh??ng ch??? Hay m?? c??n ?????p trong m???t Nh?? tuy???n d???ng</h3>
              </div>
            </div>
            <div className={cx("body-modal")}>
              <div className={cx("widget", "widget-12")}>
                <div className={cx("widget-body")}>
                  <div className={cx("swiper-container")}>
                    <div className={cx("swiper-wrapper")}>
                      Th??ng tin ngh??? nghi???p:
                      <br />
                      H??y ??i???n th???t ?????y ????? v?? ch??nh x??c nh???ng th??ng tin n??y ?????
                      Nh?? tuy???n d???ng c?? ???????c c??i nh??n t???ng quan v??? mong mu???n c???a
                      b???n.
                    </div>
                    <div className={cx("main-button")}>
                      <div className={cx("button-prev")}>
                        <em className={cx("mdi", "mdi-chevron-left")} />
                      </div>
                      <div className={cx("button-next")}>
                        <em className={cx("mdi", "mdi-chevron-right")} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={cx("tips-modal")}
            id="tip-experience"
            style={{ display: "none" }}
          >
            <div className={cx("head-modal")}>
              <div className={cx("icon")}>
                <em className={cx("mdi", "mdi-lightbulb-outline")} />
              </div>
              <div className={cx("title")}>
                <h3>????? CV kh??ng ch??? Hay m?? c??n ?????p trong m???t Nh?? tuy???n d???ng</h3>
              </div>
            </div>
            <div className={cx("body-modal")}>
              <div className={cx("widget", "widget-12")}>
                <div className={cx("widget-body")}>
                  <div className={cx("swiper-container")}>
                    <div className={cx("swiper-wrapper")}>
                      Kinh nghi???m l??m vi???c:
                      <br />
                      - Kinh nghi???m n??n tr??nh b??y theo th??? t??? g???n nh???t ?????n xa
                      nh???t.
                      <br />
                      - N???u b???n c?? r???t nhi???u kinh nghi???m, h??y ch???n l???c m?? t??? chi
                      ti???t nh???ng c??ng vi???c c?? li??n quan ?????n v??? tr?? ??ang ???ng
                      tuy???n
                      <br />
                      - H??y ?????c th???t k?? b???n m?? t??? v?? y??u c???u c??ng vi???c c???a Nh??
                      tuy???n d???ng, s??? d???ng c??c t??? kh??a li??n quan v?? tr??nh b??y
                      nh???ng kinh nghi???m c???a b???n th??n b???ng nh???ng t??? kh??a ????, ??i???u
                      n??y s??? gi??p cho nh?? tuy???n d???ng th???y ????? ph?? h???p c???a b???n v???i
                      c??ng vi???c ho???c v??? tr?? ????. T???t nhi??n h??y lu??n ?????m b???o s???
                      trung th???c trong qu?? tr??nh vi???t.
                      <br />- ?????ng qu??n, th??? hi???n n??ng l???c th??ng qua c??c th??nh
                      t??ch c???a t???ng c??ng vi???c b???n ???? tr???i qua nh??.
                    </div>
                    <div className={cx("main-button")}>
                      <div className={cx("button-prev")}>
                        <em className={cx("mdi", "mdi-chevron-left")} />
                      </div>
                      <div className={cx("button-next")}>
                        <em className={cx("mdi", "mdi-chevron-right")} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={cx("tips-modal")}
            id="tip-education"
            style={{ display: "none" }}
          >
            <div className={cx("head-modal")}>
              <div className={cx("icon")}>
                <em className={cx("mdi", "mdi-lightbulb-outline")} />
              </div>
              <div className={cx("title")}>
                <h3>????? CV kh??ng ch??? Hay m?? c??n ?????p trong m???t Nh?? tuy???n d???ng</h3>
              </div>
            </div>
            <div className={cx("body-modal")}>
              <div className={cx("widget", "widget-12")}>
                <div className={cx("widget-body")}>
                  <div className={cx("swiper-container")}>
                    <div className={cx("swiper-wrapper")}>
                      H???c v???n: <br />
                      - H??y n??u ra nh???ng b???c h???c ?????t ???????c nh?? cao ?????ng, ?????i h???c,
                      th???c s??,... <br />
                      - B???n c??ng c?? th??? k??? th??m nh???ng kh??a h???c ng???n h???n, kh??a
                      ????o t???o chuy??n nghi???p (c?? ph??) m?? b???n ???? t???ng ???????c h???c.{" "}
                      <br />- L??u ?? ch???n l???c nh???ng kh??a h???c li??n quan ?????n c??ng
                      vi???c m?? b???n ???ng tuy???n th??i nh??
                    </div>
                    <div className={cx("main-button")}>
                      <div className={cx("button-prev")}>
                        <em className={cx("mdi", "mdi-chevron-left")} />
                      </div>
                      <div className={cx("button-next")}>
                        <em className={cx("mdi", "mdi-chevron-right")} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={cx("tips-modal")}
            id="tip-certificate"
            style={{ display: "none" }}
          >
            <div className={cx("head-modal")}>
              <div className={cx("icon")}>
                <em className={cx("mdi", "mdi-lightbulb-outline")} />
              </div>
              <div className={cx("title")}>
                <h3>????? CV kh??ng ch??? Hay m?? c??n ?????p trong m???t Nh?? tuy???n d???ng</h3>
              </div>
            </div>
            <div className={cx("body-modal")}>
              <div className={cx("widget", "widget-12")}>
                <div className={cx("widget-body")}>
                  <div className={cx("swiper-container")}>
                    <div className={cx("swiper-wrapper")}>
                      Ch???ng ch??? kh??c: <br />
                      B???n c?? th??? ch???n hi???n th??? ho???c kh??ng hi???n th??? m???c n??y tr??n
                      CV
                      <br />
                      - Ch??? n??n ????? c???p ?????n nh???ng ch???ng ch??? li??n quan ?????n c??ng
                      vi???c b???n ??ang ???ng tuy???n ho???c nh???ng ch???ng ch??? c?? k?? n??ng
                      n???i b???t.
                      <br />
                      - H??y ??i???n ?????y ????? c??c th??ng tin nh?? ng??y ho??n th??nh, t???
                      ch???c c???p.
                      <br />- B???n c??ng c?? th??? k??? t??n c??c h???i th???o, h???i ngh??? c??
                      uy t??n m?? b???n ???? t???ng ???????c tham d???
                    </div>
                    <div className={cx("main-button")}>
                      <div className={cx("button-prev")}>
                        <em className={cx("mdi", "mdi-chevron-left")} />
                      </div>
                      <div className={cx("button-next")}>
                        <em className={cx("mdi", "mdi-chevron-right")} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={cx("tips-modal")}
            id="tip-skill"
            style={{ display: "none" }}
          >
            <div className={cx("head-modal")}>
              <div className={cx("icon")}>
                <em className={cx("mdi", "mdi-lightbulb-outline")} />
              </div>
              <div className={cx("title")}>
                <h3>????? CV kh??ng ch??? Hay m?? c??n ?????p trong m???t Nh?? tuy???n d???ng</h3>
              </div>
            </div>
            <div className={cx("body-modal")}>
              <div className={cx("widget", "widget-12")}>
                <div className={cx("widget-body")}>
                  <div className={cx("swiper-container")}>
                    <div className={cx("swiper-wrapper")}>
                      K?? n??ng kh??c:
                      <br />
                      - N??u n???i b???t 6 ?????n 8 k?? n??ng li??n quan nh???t ?????n c??ng vi???c
                      b???n ???ng tuy???n
                      <br />
                      - N???u b???n ch??a c?? nhi???u k?? n??ng c???ng, h??y xem x??t t???i vi???c
                      n??u ra c??c k?? n??ng m???m nh??: "k??? n??ng thuy???t tr??nh", "k???
                      n??ng ph??n t??ch"
                      <br />- N??n s??? d???ng nh???ng c???m t??? ng???n, ??u ti??n s??? d???ng
                      nh???ng k?? n??ng c?? nh???c ?????n trong b???n m?? t??? c??ng vi???c
                    </div>
                    <div className={cx("main-button")}>
                      <div className={cx("button-prev")}>
                        <em className={cx("mdi", "mdi-chevron-left")} />
                      </div>
                      <div className={cx("button-next")}>
                        <em className={cx("mdi", "mdi-chevron-right")} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={cx("tips-modal")}
            id="tip-award"
            style={{ display: "none" }}
          >
            <div className={cx("head-modal")}>
              <div className={cx("icon")}>
                <em className={cx("mdi", "mdi-lightbulb-outline")} />
              </div>
              <div className={cx("title")}>
                <h3>????? CV kh??ng ch??? Hay m?? c??n ?????p trong m???t Nh?? tuy???n d???ng</h3>
              </div>
            </div>
            <div className={cx("body-modal")}>
              <div className={cx("widget", "widget-12")}>
                <div className={cx("widget-body")}>
                  <div className={cx("swiper-container")}>
                    <div className={cx("swiper-wrapper")}>
                      Th??nh t??ch n???i b???t:
                      <br />
                      B???n c?? th??? ch???n hi???n th??? ho???c kh??ng hi???n th??? m???c n??y tr??n
                      CV
                      <br />
                      Ph???n n??y b???n c?? th??? k??? ?????n nh???ng d??? ??n c?? nh??n c?? li??n
                      quan ?????n c??ng vi???c b???n ???ng tuy???n, h??y c??? g???ng tr??nh b??y
                      th???t chi ti???t k??m theo nh???ng s??? li???u v?? k?? n??ng, th??nh
                      t??ch b???n ?????t ???????c t??? d??? ??n.
                    </div>
                    <div className={cx("main-button")}>
                      <div className={cx("button-prev")}>
                        <em className={cx("mdi", "mdi-chevron-left")} />
                      </div>
                      <div className={cx("button-next")}>
                        <em className={cx("mdi", "mdi-chevron-right")} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={cx("tips-modal")}
            id="tip-references"
            style={{ display: "none" }}
          >
            <div className={cx("head-modal")}>
              <div className={cx("icon")}>
                <em className={cx("mdi", "mdi-lightbulb-outline")} />
              </div>
              <div className={cx("title")}>
                <h3>????? CV kh??ng ch??? Hay m?? c??n ?????p trong m???t Nh?? tuy???n d???ng</h3>
              </div>
            </div>
            <div className={cx("body-modal")}>
              <div className={cx("widget", "widget-12")}>
                <div className={cx("widget-body")}>
                  <div className={cx("swiper-container")}>
                    <div className={cx("swiper-wrapper")}>
                      Ng?????i tham kh???o:
                      <br />
                      B???n c?? th??? ch???n hi???n th??? ho???c kh??ng hi???n th??? m???c n??y tr??n
                      CV
                      <br />
                      - "Ng?????i tham kh???o" c?? th??? l?? c???p tr??n ho???c ng?????i l??m vi???c
                      tr???c ti???p v???i b???n.
                      <br />
                      - H??y lu??n ?????m b???o r???ng "Ng?????i tham kh???o" bi???t r???ng h??? c??
                      th??? s??? nh???n ???????c cu???c g???i t??? nh?? tuy???n d???ng hi???n t???i c???a
                      b???n.
                      <br />- N???u "Ng?????i tham kh???o" c?? c??c ch???c danh c??ng vi???c
                      nh?? B??c s??, Lu???t s??,... th?? h??y ????? n?? tr?????c t??n c???a h???.
                      Trong tr?????ng h???p kh??ng c??, h??y ????? t??n ng??? ??ng/B??/Mr/Ms/...
                      tr?????c t??n c???a h??? nh??!
                    </div>
                    <div className={cx("main-button")}>
                      <div className={cx("button-prev")}>
                        <em className={cx("mdi", "mdi-chevron-left")} />
                      </div>
                      <div className={cx("button-next")}>
                        <em className={cx("mdi", "mdi-chevron-right")} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={cx("tips-modal")}
            id="tip-language"
            style={{ display: "none" }}
          >
            <div className={cx("head-modal")}>
              <div className={cx("icon")}>
                <em className={cx("mdi", "mdi-lightbulb-outline")} />
              </div>
              <div className={cx("title")}>
                <h3>????? CV kh??ng ch??? Hay m?? c??n ?????p trong m???t Nh?? tuy???n d???ng</h3>
              </div>
            </div>
            <div className={cx("body-modal")}>
              <div className={cx("widget", "widget-12")}>
                <div className={cx("widget-body")}>
                  <div className={cx("swiper-container")}>
                    <div className={cx("swiper-wrapper")}>
                      Ng??n ng??? kh??c:
                      <br />
                      -B???n n??n li???t k?? c??c ng??n ng??? b???n c?? th??? s??? d???ng, bao g???m
                      c??? gi???y ch???ng nh???n v??? ngo???i ng??? ???? ho???c ????? c???p th??m v???
                      kho???ng th???i gian b???n du h???c, tham gia ch?????ng tr??nh trao
                      ?????i ng??n ng??? ????? gi??p nh?? tuy???n d???ng h??nh dung r?? th??m v???
                      kh??? n??ng ng??n ng??? c???a b???n. <br />
                      -N??n li???t k?? ng??n ng??? theo th??? t??? t??? th??nh th???c nh???t ?????n
                      ??t th??nh th???c nh???t
                    </div>
                    <div className={cx("main-button")}>
                      <div className={cx("button-prev")}>
                        <em className={cx("mdi", "mdi-chevron-left")} />
                      </div>
                      <div className={cx("button-next")}>
                        <em className={cx("mdi", "mdi-chevron-right")} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={cx("tips-modal")}
            id="tip-other-activity"
            style={{ display: "none" }}
          >
            <div className={cx("head-modal")}>
              <div className={cx("icon")}>
                <em className={cx("mdi", "mdi-lightbulb-outline")} />
              </div>
              <div className={cx("title")}>
                <h3>????? CV kh??ng ch??? Hay m?? c??n ?????p trong m???t Nh?? tuy???n d???ng</h3>
              </div>
            </div>
            <div className={cx("body-modal")}>
              <div className={cx("widget", "widget-12")}>
                <div className={cx("widget-body")}>
                  <div className={cx("swiper-container")}>
                    <div className={cx("swiper-wrapper")}>
                      Nh???ng ho???t ?????ng kh??c:
                      <br />
                      B???n c?? th??? ch???n hi???n th??? ho???c kh??ng hi???n th??? m???c n??y tr??n
                      CV
                      <br />
                      - H??y li???t k?? c??c ho???t ?????ng ngo???i kh??a m?? b???n tham gia,
                      ?????c bi???t l?? nh???ng ho???t ?????ng th??? hi???n kh??? n??ng l??nh ?????o.
                      <br />- T??m t???t nh???ng th??nh t??ch v?? k???t qu??? thu ???????c t???
                      ho???t ?????ng nh??
                    </div>
                    <div className={cx("main-button")}>
                      <div className={cx("button-prev")}>
                        <em className={cx("mdi", "mdi-chevron-left")} />
                      </div>
                      <div className={cx("button-next")}>
                        <em className={cx("mdi", "mdi-chevron-right")} />
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
  );
};

export default MyProfile;
