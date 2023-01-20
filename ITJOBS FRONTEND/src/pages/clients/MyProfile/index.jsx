import classNames from "classnames/bind";
import styles from "./MyProfile.module.css";

import SideBar from "~/layouts/Components/clients/SideBar";
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
                                onchange="return ajaxFileUpload();"
                                type="file"
                                id="fileAvatar"
                                name="fileAvatar"
                              />
                              <a
                                href="javascript:void(0);"
                                onclick="choose_file();"
                                id="upload-image"
                              >
                                <em className={cx("material-icons")}>
                                  add_photo_alternate
                                </em>
                                <span>Tải hình ảnh</span>
                              </a>{" "}
                            </li>
                            <li className={cx("view-pro")}>
                              <a
                                href="javascript:void(0);"
                                onclick="removeAvarta();"
                              >
                                {" "}
                                <em className={cx("material-icons")}>
                                  highlight_off
                                </em>
                                <span>Xóa hình ảnh</span>
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
                                Mức độ hoàn thành: <span>Không được duyệt</span>
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
                                Không được duyệt - Hồ sơ của bạn không được
                                duyệt nên vui lòng check mail và làm theo hướng
                                dẫn.
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
                                href="javascript:void(0);"
                                data-type={2}
                                className={cx("lock", "active")}
                              >
                                <em className={cx("mdi", "mdi-lock")} />
                                Khóa
                              </a>
                              <a
                                href="javascript:void(0);"
                                data-type={1}
                                className={cx("public", "")}
                              >
                                <em className={cx("mdi", "mdi-web")} />
                                Công khai
                              </a>
                              <a
                                href="javascript:void(0);"
                                data-type={3}
                                className={cx("flash", "")}
                              >
                                <em className={cx("mdi", "mdi-flash")} />
                                Khẩn cấp
                              </a>
                            </div>
                            <p
                              className={cx(
                                "text-notes",
                                "text-notes-2",
                                "d-block"
                              )}
                            >
                              Bạn đang <span>vô hiệu hóa</span> hồ sơ. Nhà tuyển
                              dụng sẽ không thấy được hồ sơ này của bạn.
                            </p>
                            <p
                              className={cx(
                                "text-notes",
                                "text-notes-1",
                                "d-none"
                              )}
                            >
                              Hồ sơ của bạn đang ở trạng thái{" "}
                              <span>Công Khai</span>. Nhà tuyển dụng có thể tìm
                              thấy Hồ sơ này của bạn.
                            </p>
                            <p
                              className={cx(
                                "text-notes",
                                "text-notes-3",
                                "d-none"
                              )}
                            >
                              Hồ sơ của bạn đang ở trạng thái{" "}
                              <span>Khẩn cấp</span>. Hồ sơ của bạn sẽ được ưu
                              tiên tìm thấy bởi các nhà tuyển dụng.
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
                                Nhận thông báo việc làm
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
                          <h3>Tiêu đề hồ sơ *</h3>
                          <div className={cx("status", "success")}>
                            <p>Hoàn thành</p>
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
                            <em className={cx("material-icons")}>create</em>
                            <span>Chỉnh sửa</span>
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
                          <h3>Thông tin cá nhân *</h3>
                          <div className={cx("status", "success")}>
                            <p>Hoàn thành</p>
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
                            href="javascript:void(0);"
                            onclick="editProfile();"
                          >
                            {" "}
                            <em className={cx("material-icons")}>create</em>
                            <span>Chỉnh sửa</span>
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
                            <td>Họ và Tên Lót</td>
                            <td>Lop</td>
                          </tr>
                          <tr>
                            <td>Tên</td>
                            <td>Minh</td>
                          </tr>
                          <tr>
                            <td>Ngày sinh</td>
                            <td>31/12/2007</td>
                          </tr>
                          <tr>
                            <td>Điện thoại</td>
                            <td>0964185472</td>
                          </tr>
                          <tr>
                            <td>Email</td>
                            <td>lop7cttnq@gmail.com</td>
                          </tr>
                          <tr>
                            <td>Quốc tịch</td>
                            <td>Người Việt Nam</td>
                          </tr>
                          <tr>
                            <td>Tình trạng hôn nhân</td>
                            <td>Độc thân</td>
                          </tr>
                          <tr>
                            <td>Quốc gia</td>
                            <td>Việt Nam</td>
                          </tr>
                          <tr>
                            <td>Tỉnh/ Thành phố</td>
                            <td>Hà Nội</td>
                          </tr>
                          <tr>
                            <td>Quận/ Huyện</td>
                            <td>Huyện Ba Vì</td>
                          </tr>
                          <tr>
                            <td>Địa chỉ</td>
                            <td>123, Huyện Ba Vì, Hà Nội, Việt Nam</td>
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
                          <h3>Mục tiêu nghề nghiệp</h3>
                          <div className={cx("status")}>
                            <p>Không bắt buộc</p>
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
                            href="javascript:void(0);"
                            onclick="editResumeObjective();"
                          >
                            {" "}
                            <em className={cx("material-icons")}>create</em>
                            <span>Chỉnh sửa</span>
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
                          href="javascript:void(0);"
                          onclick="deleteResumeObject();"
                        >
                          {" "}
                          <em className={cx("material-icons")}>
                            highlight_off
                          </em>
                          <span>Xóa</span>
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
                          <h3>Thông tin nghề nghiệp *</h3>
                          <div className={cx("status", "success")}>
                            <p>Hoàn thành</p>
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
                            title="Chỉnh sửa"
                            href="javascript:void(0)"
                            onclick="editDesiredJob();"
                          >
                            {" "}
                            <em className={cx("material-icons")}>create</em>
                            <span>Chỉnh sửa</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx("widget-body")}>
                    <table>
                      <tbody>
                        <tr>
                          <td>Cấp bậc mong muốn</td>
                          <td>Sinh viên/ Thực tập sinh</td>
                        </tr>
                        <tr>
                          <td>Mức lương</td>
                          <td>500,000 - 1,000,000 VND</td>
                        </tr>
                        <tr>
                          <td>Hình thức làm việc</td>
                          <td>Nhân viên chính thức</td>
                        </tr>
                        <tr>
                          <td>Phương thức công việc</td>
                          <td>Work from home</td>
                        </tr>
                        <tr>
                          <td>Ngành nghề</td>
                          <td>
                            <ul>
                              <li>Bán lẻ / Bán sỉ</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>Nơi làm việc</td>
                          <td>
                            <ul>
                              <li>Dak Lak - Huyện Buôn Đôn</li>
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
                          <h3>Kinh nghiệm làm việc *</h3>
                          <div className={cx("status", "success")}>
                            <p>Hoàn thành</p>
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
                            href="javascript:void(0);"
                            onclick="show_frmExperience(0);"
                            title="Thêm mới"
                          >
                            {" "}
                            <em className={cx("material-icons")}>add</em>
                            <span>Thêm mới</span>
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
                            <td>Số năm kinh nghiệm</td>
                            <td id="txt-experience">Chưa có kinh nghiệm</td>
                            <td>
                              <div className={cx("link-edit")}>
                                <a
                                  href="javascript:void(0);"
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
                            <td>Cấp bậc hiện tại</td>
                            <td id="cbprofile_levelpresent">Mới tốt nghiệp</td>
                            <td>
                              <div className={cx("link-edit")}>
                                <a
                                  href="javascript:void(0);"
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
                              <h4>nhân viên</h4>
                              <div className={cx("sub-title")}>
                                <p>fpt</p>
                              </div>
                              <div className={cx("date")}>
                                <p>1/2005 - Hiện tại</p>
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
                                    href="javascript:void(0);"
                                    title="Chỉnh sửa"
                                    onclick="show_frmExperience(2451920);"
                                  >
                                    {" "}
                                    <em className={cx("material-icons")}>
                                      create
                                    </em>
                                  </a>
                                </li>
                                <li className={cx("delete")}>
                                  <a
                                    href="javascript:void(0);"
                                    title="Xóa"
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
                          <h3>Học vấn *</h3>
                          <div className={cx("status", "success")}>
                            <p>Hoàn thành</p>
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
                            title="Thêm mới"
                          >
                            {" "}
                            <em className={cx("material-icons")}>add</em>
                            <span>Thêm mới</span>
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
                            <td>Bằng cấp cao nhất</td>
                            <td>
                              <div
                                className={cx("box-edit-degree")}
                                id="cbprofile_degree_name"
                              >
                                Cao đẳng{" "}
                                <div
                                  className={cx(
                                    "link-edit",
                                    "link-highest-degree"
                                  )}
                                >
                                  <a href="javascript:void(0);">
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
                                      <option value="">Chọn</option>
                                      <option value={0}>Chưa tốt nghiệp</option>
                                      <option value={1}>Trung học</option>
                                      <option value={2}>Trung cấp</option>
                                      <option value={3} selected="selected">
                                        Cao đẳng
                                      </option>
                                      <option value={4}>Đại học</option>
                                      <option value={5}>Sau đại học</option>
                                      <option value={6}>Khác</option>
                                    </select>
                                  </form>
                                </div>
                                <div className={cx("link-save")}>
                                  {" "}
                                  <a
                                    href="javascript:void(0);"
                                    onclick="saveEduLevel();"
                                  >
                                    <em className={cx("material-icons")}>
                                      save
                                    </em>
                                    Lưu Lại
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
                              <h4>Trung học</h4>
                              <div className={cx("sub-title")}>
                                <p>fpt</p>
                              </div>
                              <div className={cx("date")}>
                                <p>Tốt nghiệp 2-2006</p>
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
                                    href="javascript:void(0);"
                                    onclick="show_frmEducation(1815961);"
                                    title="Chỉnh sửa"
                                  >
                                    {" "}
                                    <em className={cx("material-icons")}>
                                      create
                                    </em>
                                  </a>
                                </li>
                                <li className={cx("delete")}>
                                  <a
                                    href="javascript:void(0);"
                                    onclick="deleteEducation(1815961);"
                                    title="Xóa"
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
                              <h4>Trung cấp</h4>
                              <div className={cx("sub-title")}>
                                <p>fpt</p>
                              </div>
                              <div className={cx("date")}>
                                <p>Tốt nghiệp 3-2005</p>
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
                                    href="javascript:void(0);"
                                    onclick="show_frmEducation(1815960);"
                                    title="Chỉnh sửa"
                                  >
                                    {" "}
                                    <em className={cx("material-icons")}>
                                      create
                                    </em>
                                  </a>
                                </li>
                                <li className={cx("delete")}>
                                  <a
                                    href="javascript:void(0);"
                                    onclick="deleteEducation(1815960);"
                                    title="Xóa"
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
                          <h3>Chứng chỉ khác</h3>
                          <div className={cx("status")}>
                            <p>Không bắt buộc</p>
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
                            <em className={cx("material-icons")}>add</em>
                            <span>Thêm mới</span>
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
                              <h4>kỹ sư phần mềm</h4>
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
                          <h3>Ngôn ngữ </h3>
                          <div className={cx("status")}>
                            <p>Không bắt buộc</p>
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
                            <em className={cx("material-icons")}>add</em>
                            <span>Thêm mới</span>
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
                            <th>Trình độ ngoại ngữ</th>
                            <th>Trình độ</th>
                            <th>Chứng chỉ ngoại ngữ</th>
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
                                <div className={cx("lavel")}>Sơ cấp</div>
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
                                    <span>Chỉnh sửa</span>
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
                                    <span>Xoá</span>
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
                          <h3>Kỹ năng chuyên môn *</h3>
                          <div className={cx("status", "success")}>
                            <p>Hoàn thành</p>
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
                            href="javascript:void(0);"
                            onclick="show_frmSkill(0);"
                          >
                            {" "}
                            <em className={cx("material-icons")}>add</em>
                            <span>Thêm mới</span>
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
                            <th>Mức độ</th>
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
                                <p>tốt</p>
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
                                  Mức độ <span>3/5</span>
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
                                    href="javascript:void(0);"
                                    onclick="show_frmSkill(3144927);"
                                    title="Chỉnh sửa"
                                  >
                                    {" "}
                                    <em className={cx("material-icons")}>
                                      create
                                    </em>
                                    <span>Chỉnh sửa</span>
                                  </a>
                                </li>
                                <li className={cx("delete")}>
                                  <a
                                    href="javascript:void(0);"
                                    title="Xóa"
                                    onclick="deleteResumeSkill(3144927)"
                                  >
                                    {" "}
                                    <em className={cx("material-icons")}>
                                      highlight_off
                                    </em>
                                    <span>Xóa</span>
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
                          <h3>Thành tích nổi bật</h3>
                          <div className={cx("status", "default")}>
                            <p>Không bắt buộc</p>
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
                            href="javascript:void(0);"
                            onclick="editResumeAdditioninfo();"
                          >
                            {" "}
                            <em className={cx("material-icons")}>create</em>
                            <span>Chỉnh sửa</span>
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
                      <p>Vui lòng thêm Thành tích nổi bật của bạn</p>
                      <a
                        href="javascript:void(0);"
                        onclick="editResumeAdditioninfo();"
                      >
                        <em className={cx("mdi", "mdi-plus-circle")} />
                        <span>Thêm mới</span>
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
                          href="javascript:void(0);"
                          onclick="deleteResumeAdditionInfo();"
                        >
                          {" "}
                          <em className={cx("material-icons")}>
                            highlight_off
                          </em>
                          <span>Xóa</span>
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
                          <h3>Hoạt động khác</h3>
                          <div className={cx("status")}>
                            <p>Không bắt buộc</p>
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
                            <em className={cx("material-icons")}>add</em>
                            <span>Thêm mới</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx("widget-body")}>
                    <div className={cx("no-content")}>
                      <p>Mô tả hoạt động</p>
                      <a
                        href="javascript:void(0)"
                        onclick="editResumeActivity(0);"
                      >
                        <em className={cx("mdi", "mdi-plus-circle")} />
                        <span>Thêm mới</span>
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
                          <h3>Người tham khảo</h3>
                          <div className={cx("status", "default")}>
                            <p>Không bắt buộc</p>
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
                            href="javascript:void(0);"
                            onclick="show_frmRefer(0);"
                          >
                            {" "}
                            <em className={cx("material-icons")}>add</em>
                            <span>Thêm mới</span>
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
                                href="javascript:void(0);"
                                onclick="show_frmRefer(825646);"
                              >
                                {" "}
                                <em className={cx("material-icons")}>create</em>
                              </a>
                            </li>
                            <li className={cx("delete")}>
                              <a
                                href="javascript:void(0);"
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
                              Chức vụ leader
                            </li>
                            <li>
                              {" "}
                              <em className={cx("material-icons")}>domain</em>
                              Công ty fpt
                            </li>
                            <li>
                              {" "}
                              <em className={cx("material-icons")}>phone</em>Số
                              điện thoại: 0839704567
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
                          href="javascript:void(0);"
                        >
                          <em className={cx("mdi", "mdi-share")} />
                          <span>Chia sẻ hồ sơ</span>{" "}
                          <span className={cx("new-label")}> New </span>{" "}
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="https://careerbuilder.vn/vi/jobseekers/mykiemviec/changetemplate">
                          {" "}
                          <em className={cx("material-icons")}>edit</em>
                          <span>Chỉnh Mẫu Hồ Sơ</span>
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="javascript:void(0);" id="btn_view_cbprofile">
                          {" "}
                          <em className={cx("material-icons")}>
                            remove_red_eye
                          </em>
                          <span>Xem CV Template</span>
                        </a>
                      </li>
                      <li id="btn_download" style={{ display: "block" }}>
                        {" "}
                        <a
                          href="javascript:void(0);"
                          onclick="downloadCvProfile(17722295)"
                        >
                          {" "}
                          <em className={cx("material-icons")}>get_app</em>
                          <span>Tải hồ sơ</span>
                        </a>
                      </li>
                      <li>
                        <a
                          className={cx("hidden-info")}
                          href="javascript:void(0);"
                          onclick="showHideInfor();"
                        >
                          <em className={cx("fa", "fa-eye-slash")} />
                          <span>Ẩn thông tin</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className={cx("head-menu")}>
                    <div className={cx("name-shortchut")}>
                      <a className={cx("active")} href="javascript:void(0);">
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
                        href="javascript:void(0);"
                        data-href="#widget-11"
                      >
                        Careerbuilder Profile
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        data-href="#t-resume-section"
                      >
                        Tiêu đề hồ sơ
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        data-href="#personalinfo-section"
                      >
                        Thông tin cá nhân
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" data-href="#widget-14">
                        Mục tiêu nghề nghiệp
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" data-href="#widget-18">
                        Thông tin nghề nghiệp
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" data-href="#widget-15">
                        Kinh nghiệm làm việc
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" data-href="#widget-16">
                        Học vấn
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        data-href="#certificate-section"
                      >
                        Chứng chỉ khác
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        data-href="#language-section"
                      >
                        Ngôn ngữ
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" data-href="#widget-17">
                        Kỹ năng chuyên môn
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" data-href="#widget-19">
                        Thành tích nổi bật
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        data-href="#other-activity-section"
                      >
                        Hoạt động khác
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" data-href="#widget-20">
                        Người tham khảo
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
              <h3>Ẩn một số thông tin</h3>
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
                  <p>Thông tin cá nhân</p>
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
                        Tình trạng hôn nhân
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
                      <label htmlFor="chkConfidential_0">Ẩn Họ và tên</label>
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
                        Địa chỉ (Số nhà, Đường)
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
                      <label htmlFor="chkConfidential_3">Số điện thoại</label>
                    </div>
                  </div>
                </div>
                <div className={cx("line")}>
                  <p>Thông tin nghề nghiệp</p>
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
                        Hình thức làm việc
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
                      <label htmlFor="chkConfidential_9">Mức lương</label>
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
                        Phúc lợi mong muốn
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
                    Lưu Lại
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
              <h3>Kinh nghiệm làm việc</h3>
            </div>
            <div className={cx("modal-body")}>
              <form name="frm_Experience" id="frm_Experience">
                <div className={cx("form-group", "row")}>
                  <div className={cx("col-lg-4")}>
                    <label htmlFor="">Số năm kinh nghiệm</label>
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
                        Chưa có kinh nghiệm
                      </label>
                    </div>
                  </div>
                </div>
                <div className={cx("form-group", "row")}>
                  <div className={cx("col-lg-4")}>
                    <label htmlFor="">Cấp bậc hiện tại</label>
                  </div>
                  <div className={cx("col-lg-8")}>
                    <div className={cx("select-group")}>
                      <select
                        name="levelcurrent_id"
                        id="levelcurrent_id"
                        style={{ float: "left", width: 200, marginBottom: 5 }}
                      >
                        <option value="">Chọn</option>
                        <option value={1}>Sinh viên/ Thực tập sinh</option>
                        <option value={2} selected="selected">
                          Mới tốt nghiệp
                        </option>
                        <option value={3}>Nhân viên</option>
                        <option value={4}>Trưởng nhóm / Giám sát</option>
                        <option value={5}>Quản lý</option>
                        <option value={6}>Phó Giám đốc</option>
                        <option value={7}>Giám đốc </option>
                        <option value={8}>Tổng giám đốc</option>
                        <option value={9}>Chủ tịch / Phó Chủ tịch</option>
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
                      Lưu Lại
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
              <h3>TÍNH NĂNG "CHIA SẺ HỒ SƠ" ĐÃ SẴN SÀNG!</h3>
            </div>
            <div className={cx("modal-body")}>
              <div className={cx("box-intro")}>
                <div className={cx("box-img")}>
                  <img src="https://static.careerbuilder.vn/themes/careerbuilder/images/cv-profile/banner_popup_share_profile.jpg" />
                </div>
                <div className={cx("text-intro")}>
                  <p>
                    Bạn đã sẵn sàng "khoe" thương hiệu cá nhân trên mọi nền
                    tảng? Trải nghiệm ngay tính năng "Chia sẻ profile" đến bất
                    cứ nơi đâu nhé!
                  </p>
                </div>
                <div className={cx("action")}>
                  <label className={cx("container-ckb")}>
                    Không hiển thị lại
                    <input type="checkbox" name="ckb-1" id="sp_popup_chk" />
                    <span className={cx("checkmark")} />
                  </label>
                  <button className={cx("btn-close-modal", "btn-close-popup")}>
                    Đóng
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
                <h3>Để CV không chỉ Hay mà còn Đẹp trong mắt Nhà tuyển dụng</h3>
              </div>
            </div>
            <div className={cx("body-modal")}>
              <div className={cx("widget", "widget-12")}>
                <div className={cx("widget-body")}>
                  <div className={cx("swiper-container")}>
                    <div className={cx("swiper-wrapper")}>
                      <div className={cx("swiper-slide")}>
                        <div className={cx("cb-title-h3")}>
                          <h3>Hồ sơ CareerBuilder 4</h3>
                        </div>
                        <div className={cx("content")}>
                          <p>
                            Phông chữ trong CV phần nào thể hiện phong thái của
                            bạn khi làm việc và Nhà tuyển dụng thường mong muốn
                            được đọc các thông tin bạn đưa ra ở một cỡ chữ vừa
                            phải, rõ ràng, không quá to cũng không quá nhỏ. Cỡ
                            chữ gợi ý cho một CV chuẩn là tầm 12 đến 14 và bạn
                            có thể kiểm tra thử bằng cách in CV ra trên khổ giấy
                            A4 trước khi gửi đi ứng tuyển nhé.
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
                <h3>Để CV không chỉ Hay mà còn Đẹp trong mắt Nhà tuyển dụng</h3>
              </div>
            </div>
            <div className={cx("body-modal")}>
              <div className={cx("widget", "widget-12")}>
                <div className={cx("widget-body")}>
                  <div className={cx("swiper-container")}>
                    <div className={cx("swiper-wrapper")}>
                      Tiêu đề hồ sơ:
                      <br />
                      Bạn nên để tiêu đề là vị trí bạn đang ứng tuyển hoặc muốn
                      làm việc. Giúp Nhà tuyển dụng hiểu ngay vị trí mong muốn
                      khi nhận hồ sơ của bạn.
                      <br />
                      Ví dụ: "Nhân viên kinh doanh" hoặc "Marketing Manager"
                      <br />
                      Lưu ý: hãy điều chỉnh tiêu đề theo từng công việc ứng
                      tuyển nhé!
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
                <h3>Để CV không chỉ Hay mà còn Đẹp trong mắt Nhà tuyển dụng</h3>
              </div>
            </div>
            <div className={cx("body-modal")}>
              <div className={cx("widget", "widget-12")}>
                <div className={cx("widget-body")}>
                  <div className={cx("swiper-container")}>
                    <div className={cx("swiper-wrapper")}>
                      Thông tin cá nhân:
                      <br />
                      - Hãy sử dụng địa chỉ email chuyên nghiệp phù hợp dùng cho
                      công việc, hạn chế sử dụng email khó đọc hoặc dùng nhiều
                      ký tự đặc biệt.
                      <br />
                      - Ảnh đại diện trên hồ sơ cũng như lần đầu tiên tạo ấn
                      tượng với Nhà tuyển dụng. Nên chọn ảnh đại diện chụp từ
                      vai trở lên, có ánh sáng tốt, không gian hạn chế nhiều chi
                      tiết, nên mặc trang phục công sở.
                      <br />- Kiểm tra thông tin cá nhân để tránh trường hợp Nhà
                      Tuyển Dụng không liên hệ được
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
                <h3>Để CV không chỉ Hay mà còn Đẹp trong mắt Nhà tuyển dụng</h3>
              </div>
            </div>
            <div className={cx("body-modal")}>
              <div className={cx("widget", "widget-12")}>
                <div className={cx("widget-body")}>
                  <div className={cx("swiper-container")}>
                    <div className={cx("swiper-wrapper")}>
                      Mục tiêu nghề nghiệp: <br />
                      - Hãy trình bày mục tiêu của bản thân một cách ngắn gọn,
                      rõ ràng nhưng cũng thể hiện được mong muốn của bản thân
                      đối với vị trí/ngành nghề mà bạn ứng tuyển.
                      <br />- Trong trường hợp bạn muốn nói thêm về sự nghiệp và
                      kinh nghiệm làm việc trong quá khứ để nhà tuyển dụng có
                      thể hình dung rõ hơn, thì cũng đừng quên trình bày thật
                      tóm tắt nhé!
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
                <h3>Để CV không chỉ Hay mà còn Đẹp trong mắt Nhà tuyển dụng</h3>
              </div>
            </div>
            <div className={cx("body-modal")}>
              <div className={cx("widget", "widget-12")}>
                <div className={cx("widget-body")}>
                  <div className={cx("swiper-container")}>
                    <div className={cx("swiper-wrapper")}>
                      Thông tin nghề nghiệp:
                      <br />
                      Hãy điền thật đầy đủ và chính xác những thông tin này để
                      Nhà tuyển dụng có được cái nhìn tổng quan về mong muốn của
                      bạn.
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
                <h3>Để CV không chỉ Hay mà còn Đẹp trong mắt Nhà tuyển dụng</h3>
              </div>
            </div>
            <div className={cx("body-modal")}>
              <div className={cx("widget", "widget-12")}>
                <div className={cx("widget-body")}>
                  <div className={cx("swiper-container")}>
                    <div className={cx("swiper-wrapper")}>
                      Kinh nghiệm làm việc:
                      <br />
                      - Kinh nghiệm nên trình bày theo thứ tự gần nhất đến xa
                      nhất.
                      <br />
                      - Nếu bạn có rất nhiều kinh nghiệm, hãy chọn lọc mô tả chi
                      tiết những công việc có liên quan đến vị trí đang ứng
                      tuyển
                      <br />
                      - Hãy đọc thật kĩ bản mô tả và yêu cầu công việc của Nhà
                      tuyển dụng, sử dụng các từ khóa liên quan và trình bày
                      những kinh nghiệm của bạn thân bằng những từ khóa đó, điều
                      này sẽ giúp cho nhà tuyển dụng thấy độ phù hợp của bạn với
                      công việc hoặc vị trí đó. Tất nhiên hãy luôn đảm bảo sự
                      trung thực trong quá trình viết.
                      <br />- Đừng quên, thể hiện năng lực thông qua các thành
                      tích của từng công việc bạn đã trải qua nhé.
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
                <h3>Để CV không chỉ Hay mà còn Đẹp trong mắt Nhà tuyển dụng</h3>
              </div>
            </div>
            <div className={cx("body-modal")}>
              <div className={cx("widget", "widget-12")}>
                <div className={cx("widget-body")}>
                  <div className={cx("swiper-container")}>
                    <div className={cx("swiper-wrapper")}>
                      Học vấn: <br />
                      - Hãy nêu ra những bậc học đạt được như cao đẳng, đại học,
                      thạc sĩ,... <br />
                      - Bạn cũng có thể kể thêm những khóa học ngắn hạn, khóa
                      đào tạo chuyên nghiệp (có phí) mà bạn đã từng được học.{" "}
                      <br />- Lưu ý chọn lọc những khóa học liên quan đến công
                      việc mà bạn ứng tuyển thôi nhé
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
                <h3>Để CV không chỉ Hay mà còn Đẹp trong mắt Nhà tuyển dụng</h3>
              </div>
            </div>
            <div className={cx("body-modal")}>
              <div className={cx("widget", "widget-12")}>
                <div className={cx("widget-body")}>
                  <div className={cx("swiper-container")}>
                    <div className={cx("swiper-wrapper")}>
                      Chứng chỉ khác: <br />
                      Bạn có thể chọn hiển thị hoặc không hiển thị mục này trên
                      CV
                      <br />
                      - Chỉ nên đề cập đến những chứng chỉ liên quan đến công
                      việc bạn đang ứng tuyển hoặc những chứng chỉ có kĩ năng
                      nổi bật.
                      <br />
                      - Hãy điền đầy đủ các thông tin như ngày hoàn thành, tổ
                      chức cấp.
                      <br />- Bạn cũng có thể kể tên các hội thảo, hội nghị có
                      uy tín mà bạn đã từng được tham dự
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
                <h3>Để CV không chỉ Hay mà còn Đẹp trong mắt Nhà tuyển dụng</h3>
              </div>
            </div>
            <div className={cx("body-modal")}>
              <div className={cx("widget", "widget-12")}>
                <div className={cx("widget-body")}>
                  <div className={cx("swiper-container")}>
                    <div className={cx("swiper-wrapper")}>
                      Kĩ năng khác:
                      <br />
                      - Nêu nổi bật 6 đến 8 kĩ năng liên quan nhất đến công việc
                      bạn ứng tuyển
                      <br />
                      - Nếu bạn chưa có nhiều kĩ năng cứng, hãy xem xét tới việc
                      nêu ra các kĩ năng mềm như: "kỹ năng thuyết trình", "kỹ
                      năng phân tích"
                      <br />- Nên sử dụng những cụm từ ngắn, ưu tiên sử dụng
                      những kĩ năng có nhắc đến trong bản mô tả công việc
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
                <h3>Để CV không chỉ Hay mà còn Đẹp trong mắt Nhà tuyển dụng</h3>
              </div>
            </div>
            <div className={cx("body-modal")}>
              <div className={cx("widget", "widget-12")}>
                <div className={cx("widget-body")}>
                  <div className={cx("swiper-container")}>
                    <div className={cx("swiper-wrapper")}>
                      Thành tích nổi bật:
                      <br />
                      Bạn có thể chọn hiển thị hoặc không hiển thị mục này trên
                      CV
                      <br />
                      Phần này bạn có thể kể đến những dự án cá nhân có liên
                      quan đến công việc bạn ứng tuyển, hãy cố gắng trình bày
                      thật chi tiết kèm theo những số liệu và kĩ năng, thành
                      tích bạn đạt được từ dự án.
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
                <h3>Để CV không chỉ Hay mà còn Đẹp trong mắt Nhà tuyển dụng</h3>
              </div>
            </div>
            <div className={cx("body-modal")}>
              <div className={cx("widget", "widget-12")}>
                <div className={cx("widget-body")}>
                  <div className={cx("swiper-container")}>
                    <div className={cx("swiper-wrapper")}>
                      Người tham khảo:
                      <br />
                      Bạn có thể chọn hiển thị hoặc không hiển thị mục này trên
                      CV
                      <br />
                      - "Người tham khảo" có thể là cấp trên hoặc người làm việc
                      trực tiếp với bạn.
                      <br />
                      - Hãy luôn đảm bảo rằng "Người tham khảo" biết rằng họ có
                      thể sẽ nhận được cuộc gọi từ nhà tuyển dụng hiện tại của
                      bạn.
                      <br />- Nếu "Người tham khảo" có các chức danh công việc
                      như Bác sĩ, Luật sư,... thì hãy để nó trước tên của họ.
                      Trong trường hợp không có, hãy để tín ngữ Ông/Bà/Mr/Ms/...
                      trước tên của họ nhé!
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
                <h3>Để CV không chỉ Hay mà còn Đẹp trong mắt Nhà tuyển dụng</h3>
              </div>
            </div>
            <div className={cx("body-modal")}>
              <div className={cx("widget", "widget-12")}>
                <div className={cx("widget-body")}>
                  <div className={cx("swiper-container")}>
                    <div className={cx("swiper-wrapper")}>
                      Ngôn ngữ khác:
                      <br />
                      -Bạn nên liệt kê các ngôn ngữ bạn có thể sử dụng, bao gồm
                      cả giấy chứng nhận về ngoại ngữ đó hoặc đề cập thêm về
                      khoảng thời gian bạn du học, tham gia chường trình trao
                      đổi ngôn ngữ để giúp nhà tuyển dụng hình dung rõ thêm về
                      khả năng ngôn ngữ của bạn. <br />
                      -Nên liệt kê ngôn ngữ theo thứ tự từ thành thục nhất đến
                      ít thành thục nhất
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
                <h3>Để CV không chỉ Hay mà còn Đẹp trong mắt Nhà tuyển dụng</h3>
              </div>
            </div>
            <div className={cx("body-modal")}>
              <div className={cx("widget", "widget-12")}>
                <div className={cx("widget-body")}>
                  <div className={cx("swiper-container")}>
                    <div className={cx("swiper-wrapper")}>
                      Những hoạt động khác:
                      <br />
                      Bạn có thể chọn hiển thị hoặc không hiển thị mục này trên
                      CV
                      <br />
                      - Hãy liệt kê các hoạt động ngoại khóa mà bạn tham gia,
                      đặc biệt là những hoạt động thể hiện khả năng lãnh đạo.
                      <br />- Tóm tắt những thành tích và kết quả thu được từ
                      hoạt động nhé
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
