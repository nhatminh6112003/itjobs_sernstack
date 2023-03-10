import styles from "~/layouts/DefaultLayout/jobseeker/jobseeker-layout.module.css";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const Banner = () => {
  return (
    <div className={cx("cb-main-search")}>
      <section className={cx("cb-banner-home")}>
        <div className={cx("banner-pc")}>
          <div className={cx("swiper-container")}>
            <div className={cx("swiper-wrapper", "pc-swiper-wrapper")}>
              <div className={cx("swiper-slide")}>
                <a
                  href="https://careerbuilder.vn/vi/jobseekers/ajax/counterbannerclick?url=aHR0cHM6Ly9jYXJlZXJidWlsZGVyLnZuL3ZpL25oYS10dXllbi1kdW5nL25nYW4taGFuZy10bWNwLXF1YW4tZG9pLjM1QTY2RDcwLmh0bWw=&id=291"
                  rel="nofollow;noreferrer"
                  target="_blank"
                >
                  <div className={cx("image")}>
                    <img
                      src="https://images.careerbuilder.vn/background/mbbank_1900x570_2022_12_12_1670843523.jpg"
                      alt="Banner"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className={cx("main-page")}>
            <div className={cx("swiper-pagination")} />
          </div>
        </div>
        <div className={cx("banner-mobile")}>
          <div className={cx("swiper-container")}>
            <div className={cx("swiper-wrapper", "mobile-swiper-wrapper")}>
              <div className={cx("swiper-slide")}>
                <a
                  href="https://careerbuilder.vn/vi/jobseekers/ajax/counterbannerclick?url=aHR0cHM6Ly9jYXJlZXJidWlsZGVyLnZuL3ZpL25oYS10dXllbi1kdW5nL25nYW4taGFuZy10bWNwLXF1YW4tZG9pLjM1QTY2RDcwLmh0bWw=&id=291"
                  rel="nofollow;noreferrer"
                  target="_blank"
                >
                  <div className={cx("image")}>
                    <img
                      src="https://images.careerbuilder.vn/background/mbbank_640x430_2022_12_12_1670843523.jpg"
                      alt="Banner"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className={cx("main-page")}>
            <div className={cx("swiper-pagination")} />
          </div>
        </div>
      </section>
      <section className={cx("cb-box-find")}>
        <div className={cx("container")}>
          <div className={cx("main-box")}>
            <div className={cx("box-body")}>
              <div className={cx("title")}>
                <h1>
                  ????n l???y th??nh c??ng v???i{" "}
                  <span> 17,664 c?? h???i ngh??? nghi???p </span>
                </h1>
              </div>
              <form>
                <div className={cx("main-form")}>
                  <div className={cx("row")}>
                    <div className={cx("form-group", "col-12", "form-keyword")}>
                      <label>
                        <span className={cx("mdi", "mdi-magnify")} />
                      </label>
                      <input
                        style={{
                          appearance: "none",
                          width: "100%",
                          height: 40,
                          padding: "5px 10px",
                          paddingLeft: 40,
                          border: "1px solid #cccccc",
                          borderRadius: 4,
                          background: "#fff",
                          color: "#172642",
                          fontSize: 16,
                          fontWeight: 500,
                        }}
                        type="search"
                        className="prompt keyword"
                        autofocus=""
                        name="keyword"
                        id="keyword"
                        placeholder="Ch???c danh, K??? n??ng, T??n c??ng ty"
                        autoComplete="off"
                      />

                      <div className={cx("cleartext")}>
                        <em className={cx("mdi", "mdi-close-circle")} />
                      </div>
                    </div>
                  </div>
                  <div className={cx("advanced-search")}>
                    <div className={cx("row")}>
                      <div className={cx("form-group","col-sm-6")}>
                        <label>
                          {/* <span className={cx("mdi","mdi-map-marker")} /> */}
                        </label>
                        <select
                          id={cx("location")}
                          name={cx("location")}
                          className={cx(
                            "chosen-select",
                            "chosen-select-max-three"
                          )}
                          data-placeholder="T???t c??? ?????a ??i???m"
                          style={{
                          appearance: "none",
                          width: "100%",
                          height: 40,
                          padding: "5px 10px",
                          paddingLeft: 40,
                          border: "1px solid #cccccc",
                          borderRadius: 4,
                          backgroundColor: "#fff!important",
                          color: "#172642",
                          fontSize: 16,
                          fontWeight: 500,
                        }}
                        >
                          <option value="">Ch???n ?????a ??i???m</option>
                          <option value="ha-noi_4">H?? N???i</option>
                        </select>
                      </div>
                      <div className="form-group col-sm-6">
                        <label>
                          {/* <span className="mdi mdi-menu" /> */}
                        </label>
                        <select
                          id="industry"
                          name="industry"
                          className="chosen-select chosen-select-max-three"
                          data-placeholder="T???t c??? ng??nh ngh???"
                          multiple=""
                        >
                          <option value="">Ch???n ng??nh ngh???</option>
                          <option value="bao-tri-sua-chua_71">
                            B???o tr?? / S???a ch???a
                          </option>
                          <option value="nganh-khac_27">Ng??nh kh??c</option>
                        </select>
                      </div>
                      <div className="form-group col-sm-6">
                        <label>
                          {/* <span className={cx("mdi", "mdi-currency-usd")} /> */}
                        </label>
                        <select
                          name="salary"
                          id={cx("salary")}
                          className={cx("chosen-select")}
                          data-placeholder="Ch???n M???c L????ng"
                          multiple=""
                        >
                          <option value="">Ch???n m???c l????ng</option>
                          <option value={3}>T??? 3.000.000 ??</option>
                          <option value={5}>T??? 5.000.000 ??</option>
                          <option value={7}>T??? 7.000.000 ??</option>
                          <option value={10}>T??? 10.000.000 ??</option>
                          <option value={15}>T??? 15.000.000 ??</option>
                          <option value={20}>T??? 20.000.000 ??</option>
                          <option value={30}>T??? 30.000.000 ??</option>
                          <option value={40}>T??? 40.000.000 ??</option>
                          <option value={50}>T??? 50.000.000 ??</option>
                          <option value={60}>T??? 60.000.000 ??</option>
                          <option value={70}>T??? 70.000.000 ??</option>
                        </select>
                      </div>
                      <div className={cx("form-group", "col-sm-6")}>
                        <label>
                          {/* <span className={cx("mdi", "mdi-briefcase")} /> */}
                        </label>
                        <select
                          id={cx("level")}
                          name="level"
                          className="chosen-select chosen-select-max-one"
                          data-placeholder="C???p b???c"
                          multiple=""
                        >
                          <option value="">Ch???n c???p b???c</option>
                          <option value="sinh-vien-thuc-tap-sinh_1">
                            Sinh vi??n/ Th???c t???p sinh
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cx("reset-form")}>
                  <a href="">
                    <i className={cx("fa", "fa-rotate-right")} /> Reset
                  </a>
                </div>
                <div className={cx("toggle-search")}>
                  <div className={cx("advanced-search-btn")}>
                    <a href="#">
                      <span className={cx("mdi", "mdi-magnify-plus-outline")} />{" "}
                      T??m ki???m n??ng cao
                    </a>
                  </div>
                  <div className={cx("expend-less-btn")}>
                    <a href="#">
                      <span className={cx("mdi", "mdi-chevron-up")} /> Thu g???n
                    </a>
                  </div>
                </div>
                <div className={cx("find-jobs")}>
                  <button className={cx("btn-gradient")}>T??M VI???C NGAY</button>
                </div>
              </form>
            </div>
            <div className={cx("box-footer")}>
              <div className={cx("content")}>
                <p>????ng h??? s?? ngh??? nghi???p ????? d??? d??ng ???ng tuy???n nhanh</p>
              </div>
              <div className={cx("upload-resume")}>
                <button className={cx("btn-gradient")}>????NG NGAY</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
