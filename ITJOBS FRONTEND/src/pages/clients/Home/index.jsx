import { useSelector,useDispatch } from "react-redux";
import React,{ useState,useEffect,lazy,Suspense } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/black-and-white.css';

import axiosClient from "~/api/axiosClient";
import { logoutSuccess  } from "~/features/authentication/slices/authSlice";
// import JobItem from "~/layouts/Components/clients/JobItem";
import Banner from "~/layouts/Components/clients/Banner";
import ItemLoading from "~/components/ItemLoading";

const JobItem = React.lazy(() => import("~/layouts/Components/clients/JobItem"));
// const JobItem2 = React.lazy(() => import("~/layouts/Components/clients/JobItem2"));



const Home = () => {
  const user = useSelector((state) => state.auth.login.currentUser);
  const dispatch=useDispatch();

  const logout = () => {
    try {
      axiosClient
      .post("/users/logout", {}, { withCredentials: true });
      dispatch(logoutSuccess());
    } catch (error) {
      
    }
  };


  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  return (
    <>

      {user && <div>Xin chào {user.name}</div>}
      <>
      <Banner />
  <section
    className="cb-section cb-section-border-bottom"
    id="box-job-suggest"
    style={{ display: "none" }}
  />
  <section className="cb-section cb-section-border-bottom">
    <div className="container">
      <div className="cb-title cb-title-center">
        <h2>NHÀ TUYỂN DỤNG HÀNG ĐẦU</h2>
      </div>
      <div className="top-employers-list"></div>
      <div className="top-employers-banner">
        <div className="row">
          <div className="col-lg-6">
            <div className="item">
              <div className="image adsTopBanner" id={846}>
                {/**/}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="item">
              <div className="image adsTopBanner" id={847}>
                {/**/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="cb-section">
    <div className="container">
      <div className="hot-jobs-list">
        <div className="tabs">
          <ul className="tabs-toggle">
            <li>
              <a className="pointer" alt="#tab-1">
                Việc Làm Nổi Bật
              </a>
            </li>
            <li>
              <a className="pointer" alt="#tab-2">
                Việc Làm VIP ($1000+)
              </a>
            </li>
            <li>
              <a className="pointer" alt="#tab-3">
                Việc Làm Từ Top Headhunter
              </a>
            </li>
          
          </ul>
          <div className="tab-content" id="tab-1">
            <div className="hot-jobs-slide" id="hot-jobs-slide">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="row">
                      <div className="col-lg-6 ">
                        <div className="job-item">
                          <div className="figure">
                            <div className="image">
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/ngan-hang-tmcp-sai-gon-ha-noi-shb.35A6E089.html"
                                title="Ngân Hàng TMCP Sài Gòn - Hà Nội ( SHB )"
                              >
                              <LazyLoadImage 
                                  src="	https://images.careerbuilder.vn/employer_folders/lot7/87417/67x67/13452210999_2011_11_23.gif"
                                  effect="black-and-white"
                                  alt="Ngân Hàng TMCP Sài Gòn - Hà Nội ( SHB )"
                              />
                                {/* <img
                                  className="swiper-lazy"
                                  data-src="https://images.careerbuilder.vn/employer_folders/lot5/128905/67x67/184852newimage1.png"
                                  alt="Ngân Hàng TMCP Sài Gòn - Hà Nội ( SHB )"
                                /> */}
                              </a>
                            </div>
                            <div className="figcaption">
                              <div className="title">
                                <a
                                  target="_blank"
                                  href="https://careerbuilder.vn/vi/tim-viec-lam/cọng-tác-vien-phòng-quản-trị-hiẹu-suát-khói-qt-ptnnl.35BB3173.html"
                                  title="Cộng tác viên - Phòng Quản trị hiệu suất - Khối QT&PTNNL"
                                >
                                  Cộng tác viên - Phòng Quản trị hiệu suất -
                                  Khối QT&amp;PTNNL
                                </a>
                              </div>
                              <div className="caption">
                                <a
                                  className="company-name"
                                  href="https://careerbuilder.vn/vi/nha-tuyen-dung/ngan-hang-tmcp-sai-gon-ha-noi-shb.35A6E089.html"
                                  title="Ngân Hàng TMCP Sài Gòn - Hà Nội ( SHB )"
                                  target="_blank"
                                >
                                  Ngân Hàng TMCP Sài Gòn - Hà Nội ( SHB )
                                </a>
                                <p className="salary">
                                  <em className="fa fa-usd" />
                                  Lương: Cạnh Tranh
                                </p>
                                <div className="location">
                                  <em className="mdi mdi-map-marker" />
                                  <p> Hà Nội</p>
                                </div>
                              </div>
                            </div>
                            <div className="top-icon">
                              {" "}
                              <span className="top">Top</span>{" "}
                            </div>
                          </div>
                        </div>
                        {/* <ItemLoading items={8}/> */}
                        <Suspense fallback={<div>...loading</div>}>
                        <JobItem />
                        </Suspense>

                      </div>
                     
                    </div>
                  </div>
                </div>
                <div className="swiper-bottom">
                  <div className="swiper-navigation">
                    <div className="swiper-prev">
                      <span className="mdi mdi-chevron-left" />
                    </div>
                    <div className="main-pagination">
                      <div className="swiper-pagination" />
                    </div>
                    <div className="swiper-next">
                      <span className="mdi mdi-chevron-right" />
                    </div>
                  </div>
                  <div className="view-more">
                    <a href="https://careerbuilder.vn/viec-lam/tat-ca-viec-lam-vi.html">
                      Xem việc làm mới cập nhật
                      <span className="mdi mdi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
  </div>
        
        </div>
      </div>
    </div>
  </section>
  <section
    className="form-email-get-job lazy-bg"
  >
    <div className="container form-email">
      <div className="cb-title cb-title-center cb-title-white">
        <h2>
          Đăng ký theo dõi để nhận cập nhật về cơ hội việc làm mới và phù hợp
          nhất
        </h2>
      </div>
      <form
        method="get"
        id="home_page_created_jobalert"
        action="https://careerbuilder.vn/thong-bao-viec-lam"
      >
        <div className="row">
          <div className="col-xl-6">
            <div className="form-group">
              <input
                type="text"
                name="email"
                placeholder="Nhập địa chỉ email của bạn"
              />
              <button type="submit" className="btn-gradient">
                <span className="mdi mdi-pencil" />
                ĐĂNG KÝ NGAY
              </button>
              <div id="email_validate" />
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
  <section className="banner-promo cb-section cb-section-border-bottom">
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-lg-3">
          <div className="item">
            <div className="image loadAds" id={848}>
              {/**/}
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="item">
            <div className="image loadAds" id={849}>
              {/**/}
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="item">
            <div className="image loadAds" id={850}>
              {/**/}
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="item">
            <div className="image loadAds" id={851}>
              {/**/}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="job-topic cb-section">
    <div className="container">
      <div className="job-topic-title">
        <div className="col-title col-title-1">
          <div className="job-title d-flex">
            <h3>Bán hàng / Kinh doanh</h3>
          </div>
        </div>
        <div className="col-title col-title-2">
          <div className="job-title d-flex">
            <h3>Tiếp thị / Marketing</h3>
          </div>
        </div>
        <div className="col-title col-title-3">
          <div className="job-title d-flex">
            <h3>Hành chính / Thư ký</h3>
          </div>
        </div>
      </div>
      <div className="job-topic-slide">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="inner">
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/tong-cong-ty-chuyen-phat-nhanh-buu-dien.35A7D2A3.html"
                              title="Tổng Công Ty Chuyển Phát Nhanh Bưu Điện"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot3/190883/67x67/145650logo2020.jpg"
                                alt="Tổng Công Ty Chuyển Phát Nhanh Bưu Điện"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-phat-trien-thi-truong-tai-bac-ninh-vinh-phuc-thai-nguyen-quang-ninh.35BAE777.html"
                                title="Nhân Viên Phát triển thị trường Tại Bắc Ninh - Vĩnh Phúc - Thái Nguyên - Quảng Ninh"
                              >
                                Nhân Viên Phát triển thị trường Tại Bắc Ninh -
                                Vĩnh Phúc - Thái Nguyên - Quảng Ninh
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/tong-cong-ty-chuyen-phat-nhanh-buu-dien.35A7D2A3.html"
                                title="Tổng Công Ty Chuyển Phát Nhanh Bưu Điện"
                                target="_blank"
                              >
                                Tổng Công Ty Chuyển Phát Nhanh Bưu Điện
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 8 Tr - 20 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Thái Nguyên | Quảng Ninh | Bắc Ninh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/tong-cong-ty-chuyen-phat-nhanh-buu-dien.35A7D2A3.html"
                              title="Tổng Công Ty Chuyển Phát Nhanh Bưu Điện"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot3/190883/67x67/145650logo2020.jpg"
                                alt="Tổng Công Ty Chuyển Phát Nhanh Bưu Điện"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-phat-trien-thi-truong-tai-bac-ninh-vinh-phuc-thai-nguyen-quang-ninh.35BAE777.html"
                                title="Nhân Viên Phát triển thị trường Tại Bắc Ninh - Vĩnh Phúc - Thái Nguyên - Quảng Ninh"
                              >
                                Nhân Viên Phát triển thị trường Tại Bắc Ninh -
                                Vĩnh Phúc - Thái Nguyên - Quảng Ninh
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/tong-cong-ty-chuyen-phat-nhanh-buu-dien.35A7D2A3.html"
                                title="Tổng Công Ty Chuyển Phát Nhanh Bưu Điện"
                                target="_blank"
                              >
                                Tổng Công Ty Chuyển Phát Nhanh Bưu Điện
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 8 Tr - 20 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Thái Nguyên | Quảng Ninh | Bắc Ninh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                     
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a href="" title="Bảo mật">
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/logo-default.png"
                                alt="Bảo mật"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/quan-ly-hanh-chinh-to-chuc.35BB34D1.html"
                                title="Quản lý hành chính tổ chức"
                              >
                                Quản lý hành chính tổ chức
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href=""
                                title="Bảo mật"
                              >
                                Bảo mật
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Lên đến 20 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
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
            <div className="swiper-slide">
              <div className="inner">
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/hyosung-vietnam.35A57472.html"
                              title="Hyosung Vietnam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employers/35698/67x67/135051hyosunglogo.png"
                                alt="Hyosung Vietnam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/sales-engineer-ky-su-ban-hang-ha-noi.35BB142B.html"
                                title="Sales Engineer/ Kỹ Sư Bán Hàng [Hà Nội]"
                              >
                                Sales Engineer/ Kỹ Sư Bán Hàng [Hà Nội]
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/hyosung-vietnam.35A57472.html"
                                title="Hyosung Vietnam"
                                target="_blank"
                              >
                                Hyosung Vietnam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 11 Tr - 22 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-rita-vo.35A56516.html"
                              title="Công Ty TNHH Rita Võ"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employers/31766/67x67/140020logo-ritavo-extrabold-fa-1_-_copy_1572405716.png"
                                alt="Công Ty TNHH Rita Võ"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/thanh-hoa-nhan-vien-ban-hang-sport.35BB1CCB.html"
                                title="[Thanh Hóa] Nhân viên bán hàng Sport"
                              >
                                [Thanh Hóa] Nhân viên bán hàng Sport
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-rita-vo.35A56516.html"
                                title="Công Ty TNHH Rita Võ"
                                target="_blank"
                              >
                                Công Ty TNHH Rita Võ
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 7 Tr - 10 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Thanh Hóa</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-golden-phoenix-vietnam.35A87104.html"
                              title="Công Ty TNHH Golden Phoenix Vietnam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot8/231428/67x67/141517logoavanti-01.png"
                                alt="Công Ty TNHH Golden Phoenix Vietnam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/head-of-sales.35BB320F.html"
                                title="Head of sales"
                              >
                                Head of sales
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-golden-phoenix-vietnam.35A87104.html"
                                title="Công Ty TNHH Golden Phoenix Vietnam"
                                target="_blank"
                              >
                                Công Ty TNHH Golden Phoenix Vietnam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 50 Tr - 70 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/saint-gobain-vietnam.35A527B9.html"
                              title="Saint-Gobain Vietnam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employers/16057/67x67/165059logo_saintgobain_rvb.jpg"
                                alt="Saint-Gobain Vietnam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/senior-brand-marketing-executive-construction-chemical.35BB14D6.html"
                                title="Senior Brand Marketing Executive (Construction Chemical)"
                              >
                                Senior Brand Marketing Executive (Construction
                                Chemical)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/saint-gobain-vietnam.35A527B9.html"
                                title="Saint-Gobain Vietnam"
                                target="_blank"
                              >
                                Saint-Gobain Vietnam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/viet-thai-international.35A4F4B4.html"
                              title="Viet Thai International"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employers/2996/67x67/11552808d75f53baccdb3fe6600824c464a9c9.jpg"
                                alt="Viet Thai International"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/highlands-coffee-cpg-senior-trade-marketing-officer-for-gt-channel.35BB151D.html"
                                title="[Highlands Coffee CPG] Senior Trade Marketing Officer (For GT channel)"
                              >
                                [Highlands Coffee CPG] Senior Trade Marketing
                                Officer (For GT channel)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/viet-thai-international.35A4F4B4.html"
                                title="Viet Thai International"
                                target="_blank"
                              >
                                Viet Thai International
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-maison-retail-management-international.35A7715A.html"
                              title="CÔNG TY CỔ PHẦN MAISON RETAIL MANAGEMENT INTERNATIONAL"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot8/165978/67x67/112655maisonrmilogo.jpg"
                                alt="CÔNG TY CỔ PHẦN MAISON RETAIL MANAGEMENT INTERNATIONAL"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/pr-media-manager.35BB14C0.html"
                                title="PR & Media Manager"
                              >
                                PR &amp; Media Manager
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-maison-retail-management-international.35A7715A.html"
                                title="CÔNG TY CỔ PHẦN MAISON RETAIL MANAGEMENT INTERNATIONAL"
                                target="_blank"
                              >
                                CÔNG TY CỔ PHẦN MAISON RETAIL MANAGEMENT
                                INTERNATIONAL
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cn-cong-ty-tnhh-dv-tm-mesa.35A6FED0.html"
                              title="CN Công Ty TNHH DV & TM MESA"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot6/136656/67x67/150647logomesa-02-002.png"
                                alt="CN Công Ty TNHH DV & TM MESA"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/admin-phong-kinh-doanh-kcn-tan-binh-p-g.35BB3453.html"
                                title="Admin Phòng Kinh Doanh (KCN Tân Bình - P&G)"
                              >
                                Admin Phòng Kinh Doanh (KCN Tân Bình - P&amp;G)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cn-cong-ty-tnhh-dv-tm-mesa.35A6FED0.html"
                                title="CN Công Ty TNHH DV & TM MESA"
                                target="_blank"
                              >
                                CN Công Ty TNHH DV &amp; TM MESA
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 8 Tr - 10 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-quang-cao-va-thuong-mai-dien-tu-tnt.35A95471.html"
                              title="CÔNG TY TNHH QUẢNG CÁO VÀ THƯƠNG MẠI ĐIỆN TỬ TNT"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/logo-default.png"
                                alt="CÔNG TY TNHH QUẢNG CÁO VÀ THƯƠNG MẠI ĐIỆN TỬ TNT"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/tro-ly-giam-doc.35BB2A06.html"
                                title="TRỢ LÝ GIÁM ĐỐC"
                              >
                                TRỢ LÝ GIÁM ĐỐC
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-quang-cao-va-thuong-mai-dien-tu-tnt.35A95471.html"
                                title="CÔNG TY TNHH QUẢNG CÁO VÀ THƯƠNG MẠI ĐIỆN TỬ TNT"
                                target="_blank"
                              >
                                CÔNG TY TNHH QUẢNG CÁO VÀ THƯƠNG MẠI ĐIỆN TỬ TNT
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 15 Tr - 30 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/huy-anh-rubber-co-ltd-cong-ty-tnhh-mot-thanh-vien-cao-su-huy-anh-phong-dien.35A950D1.html"
                              title="HUY ANH RUBBER CO.,LTD - CÔNG TY TNHH MỘT THÀNH VIÊN CAO SU HUY ANH PHONG ĐIỀN"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot1/288721/67x67/160822logo1-002.jpg"
                                alt="HUY ANH RUBBER CO.,LTD - CÔNG TY TNHH MỘT THÀNH VIÊN CAO SU HUY ANH PHONG ĐIỀN"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/truong-phong-hanh-chinh-quan-tri.35BB2E40.html"
                                title="Trưởng Phòng Hành Chính Quản Trị"
                              >
                                Trưởng Phòng Hành Chính Quản Trị
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/huy-anh-rubber-co-ltd-cong-ty-tnhh-mot-thanh-vien-cao-su-huy-anh-phong-dien.35A950D1.html"
                                title="HUY ANH RUBBER CO.,LTD - CÔNG TY TNHH MỘT THÀNH VIÊN CAO SU HUY ANH PHONG ĐIỀN"
                                target="_blank"
                              >
                                HUY ANH RUBBER CO.,LTD - CÔNG TY TNHH MỘT THÀNH
                                VIÊN CAO SU HUY ANH PHONG ĐIỀN
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Thừa Thiên- Huế</p>
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
            <div className="swiper-slide">
              <div className="inner">
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-transformer-robotics-pte.35A95079.html"
                              title="CÔNG TY TNHH TRANSFORMER ROBOTICS PTE"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot3/288633/67x67/152659logo-004.jpg"
                                alt="CÔNG TY TNHH TRANSFORMER ROBOTICS PTE"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/sales-manager.35BB34B5.html"
                                title="Sales Manager"
                              >
                                Sales Manager
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-transformer-robotics-pte.35A95079.html"
                                title="CÔNG TY TNHH TRANSFORMER ROBOTICS PTE"
                                target="_blank"
                              >
                                CÔNG TY TNHH TRANSFORMER ROBOTICS PTE
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Bình Dương</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/coca-cola.35A4FE5F.html"
                              title="Coca-Cola "
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employers/5471/67x67/153006logococa.png"
                                alt="Coca-Cola "
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/sales-supervisor-modern-trade.35BB34E7.html"
                                title="Sales Supervisor - Modern Trade"
                              >
                                Sales Supervisor - Modern Trade
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/coca-cola.35A4FE5F.html"
                                title="Coca-Cola "
                                target="_blank"
                              >
                                Coca-Cola{" "}
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-dau-tu-thuong-mai-va-phat-trien-dich-vu-new-gold.35A955FC.html"
                              title="CÔNG TY TNHH ĐẦU TƯ THƯƠNG MẠI VÀ PHÁT TRIỂN DỊCH VỤ NEW GOLD"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot4/290044/67x67/133134logonewgold.png"
                                alt="CÔNG TY TNHH ĐẦU TƯ THƯƠNG MẠI VÀ PHÁT TRIỂN DỊCH VỤ NEW GOLD"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/truong-phong-kinh-doanh.35BB34D2.html"
                                title="TRƯỞNG PHÒNG KINH DOANH"
                              >
                                TRƯỞNG PHÒNG KINH DOANH
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-dau-tu-thuong-mai-va-phat-trien-dich-vu-new-gold.35A955FC.html"
                                title="CÔNG TY TNHH ĐẦU TƯ THƯƠNG MẠI VÀ PHÁT TRIỂN DỊCH VỤ NEW GOLD"
                                target="_blank"
                              >
                                CÔNG TY TNHH ĐẦU TƯ THƯƠNG MẠI VÀ PHÁT TRIỂN
                                DỊCH VỤ NEW GOLD
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 45 Tr - 50 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-thanh-pho-du-lich-sinh-thai-son-tien.35A8E5CE.html"
                              title="CÔNG TY CỔ PHẦN THÀNH PHỐ DU LỊCH SINH THÁI SƠN TIÊN"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot6/261326/67x67/90104logocty.jpg"
                                alt="CÔNG TY CỔ PHẦN THÀNH PHỐ DU LỊCH SINH THÁI SƠN TIÊN"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/truong-bo-phan-marketing.35BB28CE.html"
                                title="TRƯỞNG BỘ PHẬN MARKETING"
                              >
                                TRƯỞNG BỘ PHẬN MARKETING
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-thanh-pho-du-lich-sinh-thai-son-tien.35A8E5CE.html"
                                title="CÔNG TY CỔ PHẦN THÀNH PHỐ DU LỊCH SINH THÁI SƠN TIÊN"
                                target="_blank"
                              >
                                CÔNG TY CỔ PHẦN THÀNH PHỐ DU LỊCH SINH THÁI SƠN
                                TIÊN
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 20 Tr - 25 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Đồng Nai</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/saint-gobain-vietnam.35A527B9.html"
                              title="Saint-Gobain Vietnam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employers/16057/67x67/165059logo_saintgobain_rvb.jpg"
                                alt="Saint-Gobain Vietnam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/senior-brand-marketing-executive-construction-chemical.35BB34EB.html"
                                title="Senior Brand Marketing Executive (Construction Chemical)"
                              >
                                Senior Brand Marketing Executive (Construction
                                Chemical)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/saint-gobain-vietnam.35A527B9.html"
                                title="Saint-Gobain Vietnam"
                                target="_blank"
                              >
                                Saint-Gobain Vietnam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/lotus-group.35A7B50E.html"
                              title="LOTUS GROUP"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot0/183310/67x67/152304logo240x160.jpg"
                                alt="LOTUS GROUP"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/assistant-brand-manager-abm.35BB347A.html"
                                title="Assistant Brand Manager - ABM"
                              >
                                Assistant Brand Manager - ABM
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/lotus-group.35A7B50E.html"
                                title="LOTUS GROUP"
                                target="_blank"
                              >
                                LOTUS GROUP
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 15 Tr - 18 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/dksh-vietnam-co-ltd.35A4FD40.html"
                              title="DKSH Vietnam Co., Ltd."
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employers/5184/67x67/5184.gif"
                                alt="DKSH Vietnam Co., Ltd."
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-van-phong-bo-phan-thau-6-thang.35BB329D.html"
                                title="Nhân viên văn phòng - Bộ phận Thầu (6 tháng)"
                              >
                                Nhân viên văn phòng - Bộ phận Thầu (6 tháng)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/dksh-vietnam-co-ltd.35A4FD40.html"
                                title="DKSH Vietnam Co., Ltd."
                                target="_blank"
                              >
                                DKSH Vietnam Co., Ltd.
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 7 Tr - 8 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/lotte-finance-vietnam.35A82317.html"
                              title="LOTTE FINANCE VIETNAM"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot9/211479/67x67/111350logo-02.png"
                                alt="LOTTE FINANCE VIETNAM"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/ho-chi-minh-chuyen-vien-hanh-chinh-admin-officer.35BB3289.html"
                                title="[Hồ Chí Minh] - Chuyên viên hành chính (Admin Officer)"
                              >
                                [Hồ Chí Minh] - Chuyên viên hành chính (Admin
                                Officer)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/lotte-finance-vietnam.35A82317.html"
                                title="LOTTE FINANCE VIETNAM"
                                target="_blank"
                              >
                                LOTTE FINANCE VIETNAM
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 8 Tr - 10 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/tap-doan-tan-a-dai-thanh.35A78A0B.html"
                              title="Tập Đoàn Tân Á Đại Thành"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot9/172299/67x67/93531logo.jpg"
                                alt="Tập Đoàn Tân Á Đại Thành"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-hanh-chinh.35BB2FF3.html"
                                title="Nhân viên Hành chính"
                              >
                                Nhân viên Hành chính
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/tap-doan-tan-a-dai-thanh.35A78A0B.html"
                                title="Tập Đoàn Tân Á Đại Thành"
                                target="_blank"
                              >
                                Tập Đoàn Tân Á Đại Thành
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 7 Tr - 8 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
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
            <div className="swiper-slide">
              <div className="inner">
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-daeyeong-vina.35A7AB48.html"
                              title="CÔNG TY TNHH DAEYEONG VINA "
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot8/180808/67x67/92701z3566372640312_23d2ba13092acdf9c0b67beef70c991e.jpg"
                                alt="CÔNG TY TNHH DAEYEONG VINA "
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/truong-phong-kinh-doanh.35BB34C8.html"
                                title="TRƯỞNG PHÒNG KINH DOANH"
                              >
                                TRƯỞNG PHÒNG KINH DOANH
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-daeyeong-vina.35A7AB48.html"
                                title="CÔNG TY TNHH DAEYEONG VINA "
                                target="_blank"
                              >
                                CÔNG TY TNHH DAEYEONG VINA{" "}
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 30 Tr - 50 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Đồng Nai</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/mondelēz-kinh-do-viet-nam.35A4E9C3.html"
                              title="Mondelēz Kinh Đô Việt Nam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employers/195/67x67/94515logo-mdlzsnackingrgb.png"
                                alt="Mondelēz Kinh Đô Việt Nam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/sale-force-automation-effectiveness-specialist.35BB34C2.html"
                                title="Sale Force Automation & Effectiveness Specialist"
                              >
                                Sale Force Automation &amp; Effectiveness
                                Specialist
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/mondelēz-kinh-do-viet-nam.35A4E9C3.html"
                                title="Mondelēz Kinh Đô Việt Nam"
                                target="_blank"
                              >
                                Mondelēz Kinh Đô Việt Nam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 20 Tr - 35 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-sapporo-vietnam.35A7D950.html"
                              title="Công ty TNHH SAPPORO Vietnam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot2/192592/67x67/13373902-logosapporo.png"
                                alt="Công ty TNHH SAPPORO Vietnam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/phu-quoc-nhan-vien-kinh-doanh.35BB34C0.html"
                                title="[Phú Quốc]  Nhân viên Kinh doanh"
                              >
                                [Phú Quốc] Nhân viên Kinh doanh
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-sapporo-vietnam.35A7D950.html"
                                title="Công ty TNHH SAPPORO Vietnam"
                                target="_blank"
                              >
                                Công ty TNHH SAPPORO Vietnam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Kiên Giang</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-sua-quoc-te-idp.35A71DAC.html"
                              title="Công Ty CP Sữa Quốc Tế IDP"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot6/144556/67x67/101133idp_suaquocte_88x50_2015_07_31.gif"
                                alt="Công Ty CP Sữa Quốc Tế IDP"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/trade-marketing-executive.35BB1C7A.html"
                                title="Trade Marketing Executive"
                              >
                                Trade Marketing Executive
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-sua-quoc-te-idp.35A71DAC.html"
                                title="Công Ty CP Sữa Quốc Tế IDP"
                                target="_blank"
                              >
                                Công Ty CP Sữa Quốc Tế IDP
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 8 Tr - 14 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-cong-nghe-citek.35A8C8BE.html"
                              title="CÔNG TY CỔ PHẦN CÔNG NGHỆ CITEK"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot6/253886/67x67/163706logo-2x.png"
                                alt="CÔNG TY CỔ PHẦN CÔNG NGHỆ CITEK"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/business-development.35BB20E9.html"
                                title="Business Development"
                              >
                                Business Development
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-cong-nghe-citek.35A8C8BE.html"
                                title="CÔNG TY CỔ PHẦN CÔNG NGHỆ CITEK"
                                target="_blank"
                              >
                                CÔNG TY CỔ PHẦN CÔNG NGHỆ CITEK
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/fedex-express-tnt-express-worldwide-vietnam.35A51C57.html"
                              title="FedEx Express (TNT Express Worldwide Vietnam)"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employers/13143/67x67/152243express_eng_2c_pos_rgb-1-forposting.png"
                                alt="FedEx Express (TNT Express Worldwide Vietnam)"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/account-executive-nhan-vien-kinh-doanh.35BB2EDF.html"
                                title="Account Executive (Nhân viên Kinh doanh)"
                              >
                                Account Executive (Nhân viên Kinh doanh)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/fedex-express-tnt-express-worldwide-vietnam.35A51C57.html"
                                title="FedEx Express (TNT Express Worldwide Vietnam)"
                                target="_blank"
                              >
                                FedEx Express (TNT Express Worldwide Vietnam)
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/tap-doan-dat-xanh.35A55BA5.html"
                              title="Tập Đoàn Đất Xanh"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employers/29349/67x67/92201logonn.png"
                                alt="Tập Đoàn Đất Xanh"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/thu-ky-hoi-dong-quan-tri-thu-ky-dieu-hanh.35BB2FE9.html"
                                title="Thư Ký Hội Đồng Quản Trị (Thư Ký Điều Hành)"
                              >
                                Thư Ký Hội Đồng Quản Trị (Thư Ký Điều Hành)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/tap-doan-dat-xanh.35A55BA5.html"
                                title="Tập Đoàn Đất Xanh"
                                target="_blank"
                              >
                                Tập Đoàn Đất Xanh
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-thiet-bi-may-hongfa-viet-nam.35A955BE.html"
                              title="CÔNG TY TNHH THIẾT BỊ MÁY HONGFA VIỆT NAM"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/logo-default.png"
                                alt="CÔNG TY TNHH THIẾT BỊ MÁY HONGFA VIỆT NAM"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-hanh-chinh-van-phong-nhan-su-marketing-dich-vu-khach-hang-hanh-chinh-ke-toan.35BB2DC7.html"
                                title="Nhân Viên Hành Chính Văn Phòng (Nhân sự, Marketing, Dịch vụ khách hàng, Hành chính /Kế toán)."
                              >
                                Nhân Viên Hành Chính Văn Phòng (Nhân sự,
                                Marketing, Dịch vụ khách hàng, Hành chính /Kế
                                toán).
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-thiet-bi-may-hongfa-viet-nam.35A955BE.html"
                                title="CÔNG TY TNHH THIẾT BỊ MÁY HONGFA VIỆT NAM"
                                target="_blank"
                              >
                                CÔNG TY TNHH THIẾT BỊ MÁY HONGFA VIỆT NAM
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 8 Tr - 15 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội | Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/zen-living-representative-office.35A91376.html"
                              title="Zen Living Representative Office"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot4/273014/67x67/1418344c1dbc074b738b2dd262.jpg"
                                alt="Zen Living Representative Office"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/general-accounting.35BB0F46.html"
                                title="General Accounting"
                              >
                                General Accounting
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/zen-living-representative-office.35A91376.html"
                                title="Zen Living Representative Office"
                                target="_blank"
                              >
                                Zen Living Representative Office
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 11 Tr - 19,8 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
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
            <div className="swiper-slide">
              <div className="inner">
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-sapporo-vietnam.35A7D950.html"
                              title="Công ty TNHH SAPPORO Vietnam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot2/192592/67x67/13373902-logosapporo.png"
                                alt="Công ty TNHH SAPPORO Vietnam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/bac-ninh-nhan-vien-kinh-doanh.35BB34BD.html"
                                title="[Bắc Ninh] Nhân viên Kinh doanh"
                              >
                                [Bắc Ninh] Nhân viên Kinh doanh
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-sapporo-vietnam.35A7D950.html"
                                title="Công ty TNHH SAPPORO Vietnam"
                                target="_blank"
                              >
                                Công ty TNHH SAPPORO Vietnam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Bắc Ninh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/tap-doan-y-te-amv.35A6AB8A.html"
                              title="Tập Đoàn Y Tế AMV"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot8/115338/67x67/1024261.jpg"
                                alt="Tập Đoàn Y Tế AMV"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/trinh-duoc-vien-sale-mien-bac.35BB3495.html"
                                title="Trình Dược Viên/ Sale Miền Bắc"
                              >
                                Trình Dược Viên/ Sale Miền Bắc
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/tap-doan-y-te-amv.35A6AB8A.html"
                                title="Tập Đoàn Y Tế AMV"
                                target="_blank"
                              >
                                Tập Đoàn Y Tế AMV
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Trên 15 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội | Nam Định | Lào Cai</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-toan-phat.35A891E8.html"
                              title="Công ty TNHH Toàn Phát"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot8/239848/67x67/94706logo-1.jpg"
                                alt="Công ty TNHH Toàn Phát"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-kinh-doanh.35BB2ED6.html"
                                title="Nhân Viên Kinh Doanh"
                              >
                                Nhân Viên Kinh Doanh
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-toan-phat.35A891E8.html"
                                title="Công ty TNHH Toàn Phát"
                                target="_blank"
                              >
                                Công ty TNHH Toàn Phát
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hưng Yên</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-hoa-sen-viet.35A7DB9E.html"
                              title="CÔNG TY CỔ PHẦN HOA SEN VIỆT"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot2/193182/67x67/133058logo.png"
                                alt="CÔNG TY CỔ PHẦN HOA SEN VIỆT"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/hcm-performance-marketing-supervisor-reebok.35BB3416.html"
                                title="[HCM] Performance Marketing Supervisor - Reebok"
                              >
                                [HCM] Performance Marketing Supervisor - Reebok
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-hoa-sen-viet.35A7DB9E.html"
                                title="CÔNG TY CỔ PHẦN HOA SEN VIỆT"
                                target="_blank"
                              >
                                CÔNG TY CỔ PHẦN HOA SEN VIỆT
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-thuong-mai-quoc-te-viet-nguyen.35A86B8F.html"
                              title="Công Ty TNHH Thương Mại Quốc Tế Việt Nguyên"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot1/230031/67x67/13091803-vnglogo.png"
                                alt="Công Ty TNHH Thương Mại Quốc Tế Việt Nguyên"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-kinh-doanh-nganh-ton-quan-2.35BB334E.html"
                                title="NHÂN VIÊN KINH DOANH (NGÀNH TÔN-QUẬN 2)"
                              >
                                NHÂN VIÊN KINH DOANH (NGÀNH TÔN-QUẬN 2)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-thuong-mai-quoc-te-viet-nguyen.35A86B8F.html"
                                title="Công Ty TNHH Thương Mại Quốc Tế Việt Nguyên"
                                target="_blank"
                              >
                                Công Ty TNHH Thương Mại Quốc Tế Việt Nguyên
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 9 Tr - 12 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/lg-electronics-vietnam.35A59DA9.html"
                              title="LG Electronics Vietnam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot9/46249/67x67/132520logo.png"
                                alt="LG Electronics Vietnam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/b2b-product-marketing-executive-electronics-technological-products.35BB3339.html"
                                title="B2B Product Marketing Executive (Electronics / Technological Products)"
                              >
                                B2B Product Marketing Executive (Electronics /
                                Technological Products)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/lg-electronics-vietnam.35A59DA9.html"
                                title="LG Electronics Vietnam"
                                target="_blank"
                              >
                                LG Electronics Vietnam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-phan-mem-phuong-chi.35A95592.html"
                              title="CÔNG TY TNHH PHẦN MỀM PHƯƠNG CHI"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot8/289938/67x67/142052photo_2022-12-28_13-45-37.jpg"
                                alt="CÔNG TY TNHH PHẦN MỀM PHƯƠNG CHI"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-hanh-chinh-van-phong.35BB2F74.html"
                                title="Nhân viên hành chính văn phòng"
                              >
                                Nhân viên hành chính văn phòng
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-phan-mem-phuong-chi.35A95592.html"
                                title="CÔNG TY TNHH PHẦN MỀM PHƯƠNG CHI"
                                target="_blank"
                              >
                                CÔNG TY TNHH PHẦN MỀM PHƯƠNG CHI
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 10,0 Tr - 16 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội | Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-dau-tu-dia-oc-thanh-pho-cityland.35A6AE21.html"
                              title="Công Ty TNHH Đầu Tư Địa Ốc Thành Phố (CityLand)"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot1/116001/67x67/83352z3193682331898_c5bb28f49a893f8f1e8d53f3ed40d109.jpg"
                                alt="Công Ty TNHH Đầu Tư Địa Ốc Thành Phố (CityLand)"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/pho-phong-hanh-chinh.35BB29DF.html"
                                title="Phó phòng Hành chính"
                              >
                                Phó phòng Hành chính
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-dau-tu-dia-oc-thanh-pho-cityland.35A6AE21.html"
                                title="Công Ty TNHH Đầu Tư Địa Ốc Thành Phố (CityLand)"
                                target="_blank"
                              >
                                Công Ty TNHH Đầu Tư Địa Ốc Thành Phố (CityLand)
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-sua-quoc-te-idp.35A71DAC.html"
                              title="Công Ty CP Sữa Quốc Tế IDP"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot6/144556/67x67/101133idp_suaquocte_88x50_2015_07_31.gif"
                                alt="Công Ty CP Sữa Quốc Tế IDP"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/le-tan-van-phong-thoi-vu-6-thang.35BB1CC0.html"
                                title="Lễ Tân Văn Phòng (Thời Vụ 6 tháng)"
                              >
                                Lễ Tân Văn Phòng (Thời Vụ 6 tháng)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-sua-quoc-te-idp.35A71DAC.html"
                                title="Công Ty CP Sữa Quốc Tế IDP"
                                target="_blank"
                              >
                                Công Ty CP Sữa Quốc Tế IDP
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
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
            <div className="swiper-slide">
              <div className="inner">
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/daikin-air-conditioning-vietnam-joint-stock-company.35A4FFF3.html"
                              title="Daikin Air Conditioning (Vietnam) Joint Stock Company"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employers/5875/67x67/131726daikin_logo_corporate_color_h.jpg"
                                alt="Daikin Air Conditioning (Vietnam) Joint Stock Company"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/ap-services-sales-leader.35BB343F.html"
                                title="AP Services Sales Leader"
                              >
                                AP Services Sales Leader
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/daikin-air-conditioning-vietnam-joint-stock-company.35A4FFF3.html"
                                title="Daikin Air Conditioning (Vietnam) Joint Stock Company"
                                target="_blank"
                              >
                                Daikin Air Conditioning (Vietnam) Joint Stock
                                Company
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/daikin-air-conditioning-vietnam-joint-stock-company.35A4FFF3.html"
                              title="Daikin Air Conditioning (Vietnam) Joint Stock Company"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employers/5875/67x67/131726daikin_logo_corporate_color_h.jpg"
                                alt="Daikin Air Conditioning (Vietnam) Joint Stock Company"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/sales-executive.35BB1269.html"
                                title="Sales Executive"
                              >
                                Sales Executive
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/daikin-air-conditioning-vietnam-joint-stock-company.35A4FFF3.html"
                                title="Daikin Air Conditioning (Vietnam) Joint Stock Company"
                                target="_blank"
                              >
                                Daikin Air Conditioning (Vietnam) Joint Stock
                                Company
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/mf-viet-nam-information-technology-co-ltd.35A80ECC.html"
                              title="MF Viet Nam Information Technology Co.,Ltd"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot4/206284/67x67/90857logomf.jpg"
                                alt="MF Viet Nam Information Technology Co.,Ltd"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-tu-van-online-qua-chat.35BB3260.html"
                                title="Nhân Viên Tư Vấn Online Qua Chat"
                              >
                                Nhân Viên Tư Vấn Online Qua Chat
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/mf-viet-nam-information-technology-co-ltd.35A80ECC.html"
                                title="MF Viet Nam Information Technology Co.,Ltd"
                                target="_blank"
                              >
                                MF Viet Nam Information Technology Co.,Ltd
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 8 Tr - 20 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội | Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/kompa-technology.35A8689E.html"
                              title="Kompa Technology"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot8/229278/67x67/224843logokompa_20122019.png"
                                alt="Kompa Technology"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/research-account-leader-social-listening.35BAE5AA.html"
                                title="Research & Account Leader (Social Listening)"
                              >
                                Research &amp; Account Leader (Social Listening)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/kompa-technology.35A8689E.html"
                                title="Kompa Technology"
                                target="_blank"
                              >
                                Kompa Technology
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-duoc-hau-giang.35A8A2B8.html"
                              title="Công ty Cổ phần Dược Hậu Giang"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot2/244152/67x67/155633duochaugiang_logo-002.jpg"
                                alt="Công ty Cổ phần Dược Hậu Giang"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/tp-hcm-chuyen-vien-quan-ly-khach-hang-trong-diem-pharmacy-chain-key-account-specialist-pharmacy-chain.35BB32F1.html"
                                title="[TP.HCM] Chuyên viên quản lý khách hàng trọng điểm (Pharmacy chain)/ Key Account Specialist (Pharmacy chain)"
                              >
                                [TP.HCM] Chuyên viên quản lý khách hàng trọng
                                điểm (Pharmacy chain)/ Key Account Specialist
                                (Pharmacy chain)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-duoc-hau-giang.35A8A2B8.html"
                                title="Công ty Cổ phần Dược Hậu Giang"
                                target="_blank"
                              >
                                Công ty Cổ phần Dược Hậu Giang
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-tap-doan-trung-nguyen.35A4E9E2.html"
                              title="Công Ty Cổ Phần Tập Đoàn Trung Nguyên"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employers/226/67x67/155142logotrungnguyenlegend05-2020.jpg"
                                alt="Công Ty Cổ Phần Tập Đoàn Trung Nguyên"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/assistant-brand-manager.35BB2177.html"
                                title="Assistant Brand Manager"
                              >
                                Assistant Brand Manager
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-tap-doan-trung-nguyen.35A4E9E2.html"
                                title="Công Ty Cổ Phần Tập Đoàn Trung Nguyên"
                                target="_blank"
                              >
                                Công Ty Cổ Phần Tập Đoàn Trung Nguyên
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 14 Tr - 16 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-stavian-hoa-chat.35A859CA.html"
                              title="Công ty CP Stavian Hóa chất"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot2/225482/67x67/104455logostavianchemical-chinhthucdungtu1-7-2022.png"
                                alt="Công ty CP Stavian Hóa chất"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-hanh-chinh-le-tan.35BB171C.html"
                                title="Chuyên viên Hành chính - Lễ tân"
                              >
                                Chuyên viên Hành chính - Lễ tân
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-stavian-hoa-chat.35A859CA.html"
                                title="Công ty CP Stavian Hóa chất"
                                target="_blank"
                              >
                                Công ty CP Stavian Hóa chất
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-aeonmall-viet-nam.35A75E45.html"
                              title="Công Ty TNHH AEONMALL Việt Nam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot3/161093/67x67/143232aeonmall_corporation_logo-svg.png"
                                alt="Công Ty TNHH AEONMALL Việt Nam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/internal-audit-executive-hanoi-head-office-263.35BB1701.html"
                                title="Internal Audit Executive (Hanoi Head Office - 263)"
                              >
                                Internal Audit Executive (Hanoi Head Office -
                                263)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-aeonmall-viet-nam.35A75E45.html"
                                title="Công Ty TNHH AEONMALL Việt Nam"
                                target="_blank"
                              >
                                Công Ty TNHH AEONMALL Việt Nam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 15 Tr - 20 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-duoc-pham-pharmacity.35A7E5C8.html"
                              title="Công Ty CP Dược Phẩm Pharmacity"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot4/195784/67x67/1710521-thumbnail_logogrey.png"
                                alt="Công Ty CP Dược Phẩm Pharmacity"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/executive-assistant-to-ceo.35BB2C08.html"
                                title="Executive Assistant to CEO"
                              >
                                Executive Assistant to CEO
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-duoc-pham-pharmacity.35A7E5C8.html"
                                title="Công Ty CP Dược Phẩm Pharmacity"
                                target="_blank"
                              >
                                Công Ty CP Dược Phẩm Pharmacity
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
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
            <div className="swiper-slide">
              <div className="inner">
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-bia-carlsberg-viet-nam.35A8A752.html"
                              title="CÔNG TY TNHH BIA CARLSBERG VIỆT NAM"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot0/245330/67x67/184518download.png"
                                alt="CÔNG TY TNHH BIA CARLSBERG VIỆT NAM"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/hcm-sales-representative-key-account-executive-modern-on-trade.35BB3346.html"
                                title="[HCM] SALES REPRESENTATIVE / KEY ACCOUNT EXECUTIVE - MODERN ON TRADE"
                              >
                                [HCM] SALES REPRESENTATIVE / KEY ACCOUNT
                                EXECUTIVE - MODERN ON TRADE
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-bia-carlsberg-viet-nam.35A8A752.html"
                                title="CÔNG TY TNHH BIA CARLSBERG VIỆT NAM"
                                target="_blank"
                              >
                                CÔNG TY TNHH BIA CARLSBERG VIỆT NAM
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-kitz-valve-actuation-viet-nam.35A91895.html"
                              title="CÔNG TY TNHH KITZ VALVE & ACTUATION VIỆT NAM"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot5/274325/67x67/104944logo_kitz.jpg"
                                alt="CÔNG TY TNHH KITZ VALVE & ACTUATION VIỆT NAM"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/sales-executive-industry.35BB221B.html"
                                title="Sales Executive (INDUSTRY)"
                              >
                                Sales Executive (INDUSTRY)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-kitz-valve-actuation-viet-nam.35A91895.html"
                                title="CÔNG TY TNHH KITZ VALVE & ACTUATION VIỆT NAM"
                                target="_blank"
                              >
                                CÔNG TY TNHH KITZ VALVE &amp; ACTUATION VIỆT NAM
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 15 Tr - 25 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-bao-hiem-nhan-tho-prudential-viet-nam-–-bọ-phạn-họp-tác-kinh-doanh.35A7A52C.html"
                              title="Công Ty TNHH Bảo Hiểm Nhân Thọ Prudential Việt Nam – Bộ Phận Hợp Tác Kinh Doanh"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot4/179244/67x67/100304logo-04.png"
                                alt="Công Ty TNHH Bảo Hiểm Nhân Thọ Prudential Việt Nam – Bộ Phận Hợp Tác Kinh Doanh"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/khu-vuc-bac-ninh-ha-nam-hai-duong-chuyen-vien-tu-van-tai-chinh-cap-cao-_-kenh-hop-tac-ngan-hang.35BB2817.html"
                                title="[Khu Vực Bắc Ninh/ Hà Nam/ Hải Dương] Chuyên Viên Tư Vấn Tài Chính Cấp Cao _ Kênh Hợp Tác Ngân Hàng"
                              >
                                [Khu Vực Bắc Ninh/ Hà Nam/ Hải Dương] Chuyên
                                Viên Tư Vấn Tài Chính Cấp Cao _ Kênh Hợp Tác
                                Ngân Hàng
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-bao-hiem-nhan-tho-prudential-viet-nam-–-bọ-phạn-họp-tác-kinh-doanh.35A7A52C.html"
                                title="Công Ty TNHH Bảo Hiểm Nhân Thọ Prudential Việt Nam – Bộ Phận Hợp Tác Kinh Doanh"
                                target="_blank"
                              >
                                Công Ty TNHH Bảo Hiểm Nhân Thọ Prudential Việt
                                Nam – Bộ Phận Hợp Tác Kinh Doanh
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 7 Tr - 21 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Bắc Ninh | Hà Nam | Hải Dương</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-duoc-hau-giang.35A8A2B8.html"
                              title="Công ty Cổ phần Dược Hậu Giang"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot2/244152/67x67/155633duochaugiang_logo-002.jpg"
                                alt="Công ty Cổ phần Dược Hậu Giang"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/tp-ho-chi-minh-chuyen-vien-quan-ly-khach-hang-trong-diem-h-b-chain-key-account-specialist-h-b-chain.35BB32E6.html"
                                title="[TP. Hồ Chí Minh] Chuyên viên quản lý khách hàng trọng điểm (H&B chain)/ Key Account Specialist (H&B chain)"
                              >
                                [TP. Hồ Chí Minh] Chuyên viên quản lý khách hàng
                                trọng điểm (H&amp;B chain)/ Key Account
                                Specialist (H&amp;B chain)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-duoc-hau-giang.35A8A2B8.html"
                                title="Công ty Cổ phần Dược Hậu Giang"
                                target="_blank"
                              >
                                Công ty Cổ phần Dược Hậu Giang
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/nautilus-food-vietnam-member-of-pataya-food-group.35A84E84.html"
                              title="Nautilus Food (Vietnam)/Member of Pataya Food Group"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot6/222596/67x67/131219logonautilus2019-cmjn.jpg"
                                alt="Nautilus Food (Vietnam)/Member of Pataya Food Group"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/digital-e-commerce-cum-designer.35BB31B1.html"
                                title="Digital / E-commerce cum Designer"
                              >
                                Digital / E-commerce cum Designer
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/nautilus-food-vietnam-member-of-pataya-food-group.35A84E84.html"
                                title="Nautilus Food (Vietnam)/Member of Pataya Food Group"
                                target="_blank"
                              >
                                Nautilus Food (Vietnam)/Member of Pataya Food
                                Group
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/hup-hong-machinery-vn-company-ltd.35A62D32.html"
                              title="Hup Hong Machinery (VN) Company Ltd,."
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot4/82994/67x67/132245logo.jpg"
                                alt="Hup Hong Machinery (VN) Company Ltd,."
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-marketing-online-ho-tro-sales.35BB2672.html"
                                title="Nhân Viên Marketing Online/Hỗ trợ Sales"
                              >
                                Nhân Viên Marketing Online/Hỗ trợ Sales
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/hup-hong-machinery-vn-company-ltd.35A62D32.html"
                                title="Hup Hong Machinery (VN) Company Ltd,."
                                target="_blank"
                              >
                                Hup Hong Machinery (VN) Company Ltd,.
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 8 Tr - 10 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dau-tu-phat-trien-minh-global.35A8CE7A.html"
                              title="CÔNG TY CỔ PHẦN ĐẦU TƯ PHÁT TRIỂN MINH GLOBAL"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot4/255354/67x67/141603logomoi.jpg"
                                alt="CÔNG TY CỔ PHẦN ĐẦU TƯ PHÁT TRIỂN MINH GLOBAL"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/tro-ly-tong-giam-doc.35BB2B6E.html"
                                title="Trợ lý Tổng giám đốc"
                              >
                                Trợ lý Tổng giám đốc
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dau-tu-phat-trien-minh-global.35A8CE7A.html"
                                title="CÔNG TY CỔ PHẦN ĐẦU TƯ PHÁT TRIỂN MINH GLOBAL"
                                target="_blank"
                              >
                                CÔNG TY CỔ PHẦN ĐẦU TƯ PHÁT TRIỂN MINH GLOBAL
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/truong-mam-non-quoc-te-mother-goose-academy.35A88B73.html"
                              title="TRƯỜNG MẦM NON QUỐC TẾ MOTHER GOOSE ACADEMY"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot5/238195/67x67/13322153927c611950efde4abe3d0217539f90.png"
                                alt="TRƯỜNG MẦM NON QUỐC TẾ MOTHER GOOSE ACADEMY"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/giao-vien-tieng-anh.35BACE51.html"
                                title="Giáo Viên Tiếng Anh"
                              >
                                Giáo Viên Tiếng Anh
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/truong-mam-non-quoc-te-mother-goose-academy.35A88B73.html"
                                title="TRƯỜNG MẦM NON QUỐC TẾ MOTHER GOOSE ACADEMY"
                                target="_blank"
                              >
                                TRƯỜNG MẦM NON QUỐC TẾ MOTHER GOOSE ACADEMY
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 9 Tr - 15 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Bình Dương</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-tap-doan-dau-tu-viet-phuong.35A844D0.html"
                              title="Công ty CP Tập đoàn Đầu tư Việt Phương"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot2/220112/67x67/173613logovietphuong.png"
                                alt="Công ty CP Tập đoàn Đầu tư Việt Phương"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/thu-ky-tong-giam-doc-tieng-anh-tot.35BAD117.html"
                                title="Thư ký Tổng Giám đốc (Tiếng Anh tốt)"
                              >
                                Thư ký Tổng Giám đốc (Tiếng Anh tốt)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-tap-doan-dau-tu-viet-phuong.35A844D0.html"
                                title="Công ty CP Tập đoàn Đầu tư Việt Phương"
                                target="_blank"
                              >
                                Công ty CP Tập đoàn Đầu tư Việt Phương
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Trên 15 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
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
            <div className="swiper-slide">
              <div className="inner">
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-ktg-electric.35A8A3A2.html"
                              title="CÔNG TY CỔ PHẦN  KTG ELECTRIC"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot6/244386/67x67/135946ktge_logocongty.jpg"
                                alt="CÔNG TY CỔ PHẦN  KTG ELECTRIC"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-kinh-doanh-kenh-sieu-thi.35BB1B0D.html"
                                title="Chuyên viên kinh doanh kênh siêu thị"
                              >
                                Chuyên viên kinh doanh kênh siêu thị
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-ktg-electric.35A8A3A2.html"
                                title="CÔNG TY CỔ PHẦN  KTG ELECTRIC"
                                target="_blank"
                              >
                                CÔNG TY CỔ PHẦN KTG ELECTRIC
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-cong-nghe-citek.35A8C8BE.html"
                              title="CÔNG TY CỔ PHẦN CÔNG NGHỆ CITEK"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot6/253886/67x67/163706logo-2x.png"
                                alt="CÔNG TY CỔ PHẦN CÔNG NGHỆ CITEK"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/business-development.35BB20E9.html"
                                title="Business Development"
                              >
                                Business Development
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-cong-nghe-citek.35A8C8BE.html"
                                title="CÔNG TY CỔ PHẦN CÔNG NGHỆ CITEK"
                                target="_blank"
                              >
                                CÔNG TY CỔ PHẦN CÔNG NGHỆ CITEK
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-kinh-doanh-lop-xe-bridgestone-viet-nam.35A95070.html"
                              title="CÔNG TY TNHH KINH DOANH LỐP XE BRIDGESTONE VIỆT NAM"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot4/288624/67x67/223628bridgestone-set-logo.jpg"
                                alt="CÔNG TY TNHH KINH DOANH LỐP XE BRIDGESTONE VIỆT NAM"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/sales-executive.35BB2142.html"
                                title="Sales Executive"
                              >
                                Sales Executive
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-kinh-doanh-lop-xe-bridgestone-viet-nam.35A95070.html"
                                title="CÔNG TY TNHH KINH DOANH LỐP XE BRIDGESTONE VIỆT NAM"
                                target="_blank"
                              >
                                CÔNG TY TNHH KINH DOANH LỐP XE BRIDGESTONE VIỆT
                                NAM
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/tap-doan-duoc-pham-vimedimex.35A73058.html"
                              title="Tập đoàn Dược Phẩm Vimedimex "
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot6/149336/67x67/94352logo.png"
                                alt="Tập đoàn Dược Phẩm Vimedimex "
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/truong-phong-marketing.35BB2DD1.html"
                                title="Trưởng phòng Marketing"
                              >
                                Trưởng phòng Marketing
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/tap-doan-duoc-pham-vimedimex.35A73058.html"
                                title="Tập đoàn Dược Phẩm Vimedimex "
                                target="_blank"
                              >
                                Tập đoàn Dược Phẩm Vimedimex{" "}
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Lên đến 25 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/insee.35A4FAE9.html"
                              title="INSEE"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employers/4585/67x67/165313logo.jpg"
                                alt="INSEE"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/brand-activation-trainee.35BB2D11.html"
                                title="Brand Activation Trainee"
                              >
                                Brand Activation Trainee
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/insee.35A4FAE9.html"
                                title="INSEE"
                                target="_blank"
                              >
                                INSEE
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/to-hop-cong-nghe-giao-duc-topica.35A6590E.html"
                              title="Tổ Hợp Công Nghệ Giáo Dục Topica"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot2/94222/67x67/104923logo.png"
                                alt="Tổ Hợp Công Nghệ Giáo Dục Topica"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/assistant-marketing-manager.35BB3258.html"
                                title="Assistant Marketing Manager"
                              >
                                Assistant Marketing Manager
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/to-hop-cong-nghe-giao-duc-topica.35A6590E.html"
                                title="Tổ Hợp Công Nghệ Giáo Dục Topica"
                                target="_blank"
                              >
                                Tổ Hợp Công Nghệ Giáo Dục Topica
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/tong-cong-ty-co-phan-thuong-mai-xay-dung.35A923F5.html"
                              title="TỔNG CÔNG TY CỔ PHẦN THƯƠNG MẠI XÂY DỰNG"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot7/277237/67x67/90903logo1.png"
                                alt="TỔNG CÔNG TY CỔ PHẦN THƯƠNG MẠI XÂY DỰNG"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/pho-phong-nhan-su-tct-kiem-gd-nhan-su-cty-thanh-vien.35BB3561.html"
                                title="Phó phòng Nhân sự TCT kiêm GĐ Nhân sự CTy Thành viên"
                              >
                                Phó phòng Nhân sự TCT kiêm GĐ Nhân sự CTy Thành
                                viên
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/tong-cong-ty-co-phan-thuong-mai-xay-dung.35A923F5.html"
                                title="TỔNG CÔNG TY CỔ PHẦN THƯƠNG MẠI XÂY DỰNG"
                                target="_blank"
                              >
                                TỔNG CÔNG TY CỔ PHẦN THƯƠNG MẠI XÂY DỰNG
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-m2-viet-nam.35A7C931.html"
                              title="Công ty Cổ Phần M2 Việt Nam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot5/188465/67x67/100339ff.png"
                                alt="Công ty Cổ Phần M2 Việt Nam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-hanh-chinh-nhan-su-tong-hop-m2-factory-hung-ha.35BAE7F2.html"
                                title="Nhân Viên Hành Chính Nhân Sự Tổng Hợp M2 Factory Hưng Hà"
                              >
                                Nhân Viên Hành Chính Nhân Sự Tổng Hợp M2 Factory
                                Hưng Hà
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-m2-viet-nam.35A7C931.html"
                                title="Công ty Cổ Phần M2 Việt Nam"
                                target="_blank"
                              >
                                Công ty Cổ Phần M2 Việt Nam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 7 Tr - 9 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Thái Bình</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dau-tu-van-phu-invest.35A81E79.html"
                              title="CÔNG TY CỔ PHẦN ĐẦU TƯ VĂN PHÚ - INVEST"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot7/210297/67x67/151353logovpi.jpg"
                                alt="CÔNG TY CỔ PHẦN ĐẦU TƯ VĂN PHÚ - INVEST"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-quan-ly-tai-san.35BAE785.html"
                                title="Chuyên viên Quản lý tài sản"
                              >
                                Chuyên viên Quản lý tài sản
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dau-tu-van-phu-invest.35A81E79.html"
                                title="CÔNG TY CỔ PHẦN ĐẦU TƯ VĂN PHÚ - INVEST"
                                target="_blank"
                              >
                                CÔNG TY CỔ PHẦN ĐẦU TƯ VĂN PHÚ - INVEST
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
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
            <div className="swiper-slide">
              <div className="inner">
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/fedex-express-tnt-express-worldwide-vietnam.35A51C57.html"
                              title="FedEx Express (TNT Express Worldwide Vietnam)"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employers/13143/67x67/152243express_eng_2c_pos_rgb-1-forposting.png"
                                alt="FedEx Express (TNT Express Worldwide Vietnam)"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/account-executive-nhan-vien-kinh-doanh.35BB2EDF.html"
                                title="Account Executive (Nhân viên Kinh doanh)"
                              >
                                Account Executive (Nhân viên Kinh doanh)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/fedex-express-tnt-express-worldwide-vietnam.35A51C57.html"
                                title="FedEx Express (TNT Express Worldwide Vietnam)"
                                target="_blank"
                              >
                                FedEx Express (TNT Express Worldwide Vietnam)
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a href="" title="Bảo mật">
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/logo-default.png"
                                alt="Bảo mật"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/giam-sat-ban-hang-kenh-truyen-thong.35BB2ED2.html"
                                title="Giám sát bán hàng kênh truyền thống"
                              >
                                Giám sát bán hàng kênh truyền thống
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href=""
                                title="Bảo mật"
                              >
                                Bảo mật
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/goldbell-equipment-co-ltd.35A6FE63.html"
                              title="Goldbell Equipment Co., Ltd."
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot7/136547/67x67/102114logo.jpg"
                                alt="Goldbell Equipment Co., Ltd."
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/sales-manager-ha-noi.35BB2E91.html"
                                title="Sales Manager (Hà Nội)"
                              >
                                Sales Manager (Hà Nội)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/goldbell-equipment-co-ltd.35A6FE63.html"
                                title="Goldbell Equipment Co., Ltd."
                                target="_blank"
                              >
                                Goldbell Equipment Co., Ltd.
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-xuat-nhap-khau-trung-quoc-dai-duong.35A93C75.html"
                              title="CÔNG TY CỔ PHẦN XUẤT NHẬP KHẨU TRUNG QUỐC ĐẠI DƯƠNG"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot9/283509/67x67/143445z3551744323268_77dc83a34980381df20b496ba6847b12.jpg"
                                alt="CÔNG TY CỔ PHẦN XUẤT NHẬP KHẨU TRUNG QUỐC ĐẠI DƯƠNG"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/truong-nhom-digital-marketing-thu-nhap-den-30-trieu.35BAE4C2.html"
                                title="Trưởng nhóm Digital Marketing  (Thu nhập đến 30 triệu)"
                              >
                                Trưởng nhóm Digital Marketing (Thu nhập đến 30
                                triệu)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-xuat-nhap-khau-trung-quoc-dai-duong.35A93C75.html"
                                title="CÔNG TY CỔ PHẦN XUẤT NHẬP KHẨU TRUNG QUỐC ĐẠI DƯƠNG"
                                target="_blank"
                              >
                                CÔNG TY CỔ PHẦN XUẤT NHẬP KHẨU TRUNG QUỐC ĐẠI
                                DƯƠNG
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Trên 30 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-hoa-sen-viet.35A7DB9E.html"
                              title="CÔNG TY CỔ PHẦN HOA SEN VIỆT"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot2/193182/67x67/133058logo.png"
                                alt="CÔNG TY CỔ PHẦN HOA SEN VIỆT"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/hcm-marketing-manager-cosmetic.35BB3066.html"
                                title="[HCM] Marketing Manager -Cosmetic"
                              >
                                [HCM] Marketing Manager -Cosmetic
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-hoa-sen-viet.35A7DB9E.html"
                                title="CÔNG TY CỔ PHẦN HOA SEN VIỆT"
                                target="_blank"
                              >
                                CÔNG TY CỔ PHẦN HOA SEN VIỆT
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/dai-ichi-life-vietnam.35A6F2D0.html"
                              title="Dai-ichi Life Vietnam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot4/133584/67x67/165643dai-ichilife.png"
                                alt="Dai-ichi Life Vietnam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/phu-trach-cao-cap-ho-tro-kinh-doanh-kenh-phan-phoi-mo-rong.35BB2BD4.html"
                                title="Phụ Trách Cao Cấp Hỗ Trợ Kinh Doanh - Kênh Phân Phối Mở Rộng"
                              >
                                Phụ Trách Cao Cấp Hỗ Trợ Kinh Doanh - Kênh Phân
                                Phối Mở Rộng
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/dai-ichi-life-vietnam.35A6F2D0.html"
                                title="Dai-ichi Life Vietnam"
                                target="_blank"
                              >
                                Dai-ichi Life Vietnam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dau-tu-va-phat-trien-hung-vuong-reality.35A942B0.html"
                              title="CÔNG TY CỔ PHẦN ĐẦU TƯ VÀ PHÁT TRIỂN HƯNG VƯỢNG REALITY"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot4/285104/67x67/151448logohvr.png"
                                alt="CÔNG TY CỔ PHẦN ĐẦU TƯ VÀ PHÁT TRIỂN HƯNG VƯỢNG REALITY"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/thu-ky-tong-giam-doc.35BAE861.html"
                                title="Thư Ký Tổng Giám Đốc"
                              >
                                Thư Ký Tổng Giám Đốc
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dau-tu-va-phat-trien-hung-vuong-reality.35A942B0.html"
                                title="CÔNG TY CỔ PHẦN ĐẦU TƯ VÀ PHÁT TRIỂN HƯNG VƯỢNG REALITY"
                                target="_blank"
                              >
                                CÔNG TY CỔ PHẦN ĐẦU TƯ VÀ PHÁT TRIỂN HƯNG VƯỢNG
                                REALITY
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 14 Tr - 18 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dau-tu-vjc.35A88FE8.html"
                              title="Công Ty Cổ Phần Đầu Tư VJC"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot6/239336/67x67/115752logojobbankfinal2.png"
                                alt="Công Ty Cổ Phần Đầu Tư VJC"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/truong-phong-hanh-chinh-nhan-su-upto30tr-n2-ha-nam.35BAE849.html"
                                title="TRƯỞNG PHÒNG HÀNH CHÍNH NHÂN SỰ (UPTO30TR - N2 - HÀ NAM)"
                              >
                                TRƯỞNG PHÒNG HÀNH CHÍNH NHÂN SỰ (UPTO30TR - N2 -
                                HÀ NAM)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dau-tu-vjc.35A88FE8.html"
                                title="Công Ty Cổ Phần Đầu Tư VJC"
                                target="_blank"
                              >
                                Công Ty Cổ Phần Đầu Tư VJC
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 25 Tr - 30 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nam | Hà Nội | Hưng Yên</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cỏ-phàn-tạp-doàn-vinatech-viet-nam.35A87262.html"
                              title="Công ty Cổ phần tập đoàn Vinatech Việt Nam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot8/231778/67x67/100745b4c687021ca2fbfca2b3.jpg"
                                alt="Công ty Cổ phần tập đoàn Vinatech Việt Nam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/truong-nhom-sales-admin.35BAE7EB.html"
                                title="TRƯỞNG NHÓM SALES ADMIN"
                              >
                                TRƯỞNG NHÓM SALES ADMIN
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cỏ-phàn-tạp-doàn-vinatech-viet-nam.35A87262.html"
                                title="Công ty Cổ phần tập đoàn Vinatech Việt Nam"
                                target="_blank"
                              >
                                Công ty Cổ phần tập đoàn Vinatech Việt Nam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
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
            <div className="swiper-slide">
              <div className="inner">
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/vietmec-cong-ty-co-phan-duoc-lieu-viet-nam.35A875E1.html"
                              title="VIETMEC - CÔNG TY CỔ PHẦN DƯỢC LIỆU VIỆT NAM"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot3/232673/67x67/161902logovietmec.png"
                                alt="VIETMEC - CÔNG TY CỔ PHẦN DƯỢC LIỆU VIỆT NAM"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-sales-admin-nha-thuoc.35BB2E42.html"
                                title="NHÂN VIÊN SALES ADMIN NHÀ THUỐC"
                              >
                                NHÂN VIÊN SALES ADMIN NHÀ THUỐC
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/vietmec-cong-ty-co-phan-duoc-lieu-viet-nam.35A875E1.html"
                                title="VIETMEC - CÔNG TY CỔ PHẦN DƯỢC LIỆU VIỆT NAM"
                                target="_blank"
                              >
                                VIETMEC - CÔNG TY CỔ PHẦN DƯỢC LIỆU VIỆT NAM
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 7 Tr - 9 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/ricoh-vietnam-company-limited.35A64F9F.html"
                              title="RICOH VIETNAM COMPANY LIMITED"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot7/91807/67x67/91418pic26428.gif"
                                alt="RICOH VIETNAM COMPANY LIMITED"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/inside-sales.35BB2E19.html"
                                title="Inside Sales"
                              >
                                Inside Sales
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/ricoh-vietnam-company-limited.35A64F9F.html"
                                title="RICOH VIETNAM COMPANY LIMITED"
                                target="_blank"
                              >
                                RICOH VIETNAM COMPANY LIMITED
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-daoukiwoom-innovation.35A911EE.html"
                              title="CÔNG TY TNHH DAOUKIWOOM INNOVATION"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot2/272622/67x67/94730logofinal-002.jpg"
                                alt="CÔNG TY TNHH DAOUKIWOOM INNOVATION"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-kinh-doanh-nhan-viec-ngay.35BB2EED.html"
                                title="Chuyên viên Kinh doanh (Nhận việc Ngay)"
                              >
                                Chuyên viên Kinh doanh (Nhận việc Ngay)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-daoukiwoom-innovation.35A911EE.html"
                                title="CÔNG TY TNHH DAOUKIWOOM INNOVATION"
                                target="_blank"
                              >
                                CÔNG TY TNHH DAOUKIWOOM INNOVATION
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 8 Tr - 20 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/jotun-paints-vietnam-company-limited.35A62F32.html"
                              title="Jotun Paints Vietnam Company Limited"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot6/83506/67x67/174210jotun_12483_29072011.gif"
                                alt="Jotun Paints Vietnam Company Limited"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/sales-executive-–-phat-trien-he-thong-dai-ly-son-trang-tri-ha-noi.35BB1E57.html"
                                title="Sales Executive – Phát Triển Hệ Thống Đại Lý Sơn Trang Trí (Hà Nội)"
                              >
                                Sales Executive – Phát Triển Hệ Thống Đại Lý Sơn
                                Trang Trí (Hà Nội)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/jotun-paints-vietnam-company-limited.35A62F32.html"
                                title="Jotun Paints Vietnam Company Limited"
                                target="_blank"
                              >
                                Jotun Paints Vietnam Company Limited
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-golden-phoenix-vietnam.35A87104.html"
                              title="Công Ty TNHH Golden Phoenix Vietnam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot8/231428/67x67/141517logoavanti-01.png"
                                alt="Công Ty TNHH Golden Phoenix Vietnam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/digital-marketing-executive.35BB2BC5.html"
                                title="DIGITAL MARKETING EXECUTIVE"
                              >
                                DIGITAL MARKETING EXECUTIVE
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-golden-phoenix-vietnam.35A87104.html"
                                title="Công Ty TNHH Golden Phoenix Vietnam"
                                target="_blank"
                              >
                                Công Ty TNHH Golden Phoenix Vietnam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 20 Tr - 25 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/dac-nhan-tam-entrepreneurs-school-jsc.35A65B73.html"
                              title="Đắc Nhân Tâm Entrepreneurs School JSC."
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot5/94835/67x67/162747dc_logo_standard_monogram_pos_cmyk_r-02.png"
                                alt="Đắc Nhân Tâm Entrepreneurs School JSC."
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/thuc-tap-sinh-marketing.35B1D992.html"
                                title="Thực Tập Sinh Marketing"
                              >
                                Thực Tập Sinh Marketing
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/dac-nhan-tam-entrepreneurs-school-jsc.35A65B73.html"
                                title="Đắc Nhân Tâm Entrepreneurs School JSC."
                                target="_blank"
                              >
                                Đắc Nhân Tâm Entrepreneurs School JSC.
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 2,5 Tr - 3,5 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/techcombank.35A511D3.html"
                              title="TECHCOMBANK"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employers/10451/67x67/93152logotcb_1200x1200-min.png"
                                alt="TECHCOMBANK"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/chuyen-gia-quan-ly-tai-nang.35BAE7E6.html"
                                title="Chuyên Gia Quản Lý Tài Năng"
                              >
                                Chuyên Gia Quản Lý Tài Năng
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/techcombank.35A511D3.html"
                                title="TECHCOMBANK"
                                target="_blank"
                              >
                                TECHCOMBANK
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/fwd-viet-nam.35A7D500.html"
                              title="FWD Việt Nam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot8/191488/67x67/174116unnamed.jpg"
                                alt="FWD Việt Nam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/senior-officer-distribution-support-ifa.35BAE803.html"
                                title="Senior Officer, Distribution Support (IFA)"
                              >
                                Senior Officer, Distribution Support (IFA)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/fwd-viet-nam.35A7D500.html"
                                title="FWD Việt Nam"
                                target="_blank"
                              >
                                FWD Việt Nam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/lienvietpostbank.35A6730E.html"
                              title="LienVietPostBank"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot8/100878/67x67/140835logojobssss.png"
                                alt="LienVietPostBank"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/ho-khoi-van-phong-phong-ke-hoach-tong-hop-chuyen-vien-ban-ke-hoach.35BAE6A0.html"
                                title="HO - Khối Văn phòng - Phòng Kế hoạch Tổng hợp - Chuyên viên Ban Kế hoạch"
                              >
                                HO - Khối Văn phòng - Phòng Kế hoạch Tổng hợp -
                                Chuyên viên Ban Kế hoạch
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/lienvietpostbank.35A6730E.html"
                                title="LienVietPostBank"
                                target="_blank"
                              >
                                LienVietPostBank
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
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
            <div className="swiper-slide">
              <div className="inner">
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-daoukiwoom-innovation.35A911EE.html"
                              title="CÔNG TY TNHH DAOUKIWOOM INNOVATION"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot2/272622/67x67/94730logofinal-002.jpg"
                                alt="CÔNG TY TNHH DAOUKIWOOM INNOVATION"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/sales-team-leader-truong-nhom-kinh-doanh.35BB2EF8.html"
                                title="Sales Team Leader - Trưởng Nhóm Kinh Doanh"
                              >
                                Sales Team Leader - Trưởng Nhóm Kinh Doanh
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-daoukiwoom-innovation.35A911EE.html"
                                title="CÔNG TY TNHH DAOUKIWOOM INNOVATION"
                                target="_blank"
                              >
                                CÔNG TY TNHH DAOUKIWOOM INNOVATION
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/daikin-air-conditioning-vietnam-joint-stock-company.35A4FFF3.html"
                              title="Daikin Air Conditioning (Vietnam) Joint Stock Company"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employers/5875/67x67/131726daikin_logo_corporate_color_h.jpg"
                                alt="Daikin Air Conditioning (Vietnam) Joint Stock Company"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/consulting-senior-sales-manager-hvac.35BB3424.html"
                                title="Consulting (Senior) Sales Manager (HVAC)"
                              >
                                Consulting (Senior) Sales Manager (HVAC)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/daikin-air-conditioning-vietnam-joint-stock-company.35A4FFF3.html"
                                title="Daikin Air Conditioning (Vietnam) Joint Stock Company"
                                target="_blank"
                              >
                                Daikin Air Conditioning (Vietnam) Joint Stock
                                Company
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dgv-digital.35A8FD83.html"
                              title="Công ty Cổ phần DGV Digital"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot5/267395/67x67/145726stickerdgv.jpg"
                                alt="Công ty Cổ phần DGV Digital"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/business-development-executive.35BB33EA.html"
                                title="Business Development Executive"
                              >
                                Business Development Executive
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dgv-digital.35A8FD83.html"
                                title="Công ty Cổ phần DGV Digital"
                                target="_blank"
                              >
                                Công ty Cổ phần DGV Digital
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 8 Tr - 18 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-eurowindow.35A69BE6.html"
                              title="Công Ty Cổ Phần Eurowindow"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot4/111334/67x67/114411eu.png"
                                alt="Công Ty Cổ Phần Eurowindow"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-truyen-thong-su-kien.35BB30C3.html"
                                title="NHÂN VIÊN TRUYỀN THÔNG - SỰ KIỆN"
                              >
                                NHÂN VIÊN TRUYỀN THÔNG - SỰ KIỆN
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-eurowindow.35A69BE6.html"
                                title="Công Ty Cổ Phần Eurowindow"
                                target="_blank"
                              >
                                Công Ty Cổ Phần Eurowindow
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 10 Tr - 13 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-viet-tinh-anh.35A7458F.html"
                              title="Công Ty CP Việt Tinh Anh"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot7/154767/67x67/936461.png"
                                alt="Công Ty CP Việt Tinh Anh"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-marketing.35BB308E.html"
                                title="Nhân Viên Marketing"
                              >
                                Nhân Viên Marketing
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-viet-tinh-anh.35A7458F.html"
                                title="Công Ty CP Việt Tinh Anh"
                                target="_blank"
                              >
                                Công Ty CP Việt Tinh Anh
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-giay-sai-gon-saigon-paper-corporation.35A4FCE2.html"
                              title="Công ty Cổ Phần Giấy Sài Gòn - SAIGON PAPER CORPORATION"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot0/5090/67x67/90150logosgp-conentrang.png"
                                alt="Công ty Cổ Phần Giấy Sài Gòn - SAIGON PAPER CORPORATION"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/specialist-trade-marketing.35BB2FCF.html"
                                title="Specialist - Trade Marketing"
                              >
                                Specialist - Trade Marketing
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-giay-sai-gon-saigon-paper-corporation.35A4FCE2.html"
                                title="Công ty Cổ Phần Giấy Sài Gòn - SAIGON PAPER CORPORATION"
                                target="_blank"
                              >
                                Công ty Cổ Phần Giấy Sài Gòn - SAIGON PAPER
                                CORPORATION
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-tap-doan-thanh-nam.35A8406C.html"
                              title="Công ty cổ phần Tập đoàn Thành Nam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot8/218988/67x67/11012129695511_1595318013921462_2461110974158293460_n.png"
                                alt="Công ty cổ phần Tập đoàn Thành Nam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-nhan-su-thoi-vu-6-thang.35BAE6BF.html"
                                title="Nhân Viên Nhân Sự (Thời vụ 6 tháng)"
                              >
                                Nhân Viên Nhân Sự (Thời vụ 6 tháng)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-tap-doan-thanh-nam.35A8406C.html"
                                title="Công ty cổ phần Tập đoàn Thành Nam"
                                target="_blank"
                              >
                                Công ty cổ phần Tập đoàn Thành Nam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 8 Tr - 10 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/columbia-sportwear-vietnam.35A8A771.html"
                              title="Columbia sportwear Vietnam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot1/245361/67x67/150834csclogo_black.png"
                                alt="Columbia sportwear Vietnam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/accountant-temp.35BB159E.html"
                                title="Accountant Temp"
                              >
                                Accountant Temp
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/columbia-sportwear-vietnam.35A8A771.html"
                                title="Columbia sportwear Vietnam"
                                target="_blank"
                              >
                                Columbia sportwear Vietnam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-aeonmall-viet-nam.35A75E45.html"
                              title="Công Ty TNHH AEONMALL Việt Nam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot3/161093/67x67/143232aeonmall_corporation_logo-svg.png"
                                alt="Công Ty TNHH AEONMALL Việt Nam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/hr-officer-recruitment-and-training-269.35BB14EB.html"
                                title="HR Officer (Recruitment and Training - 269)"
                              >
                                HR Officer (Recruitment and Training - 269)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-aeonmall-viet-nam.35A75E45.html"
                                title="Công Ty TNHH AEONMALL Việt Nam"
                                target="_blank"
                              >
                                Công Ty TNHH AEONMALL Việt Nam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 8,5 Tr - 14 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
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
            <div className="swiper-slide">
              <div className="inner">
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/vietmec-cong-ty-co-phan-duoc-lieu-viet-nam.35A875E1.html"
                              title="VIETMEC - CÔNG TY CỔ PHẦN DƯỢC LIỆU VIỆT NAM"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot3/232673/67x67/161902logovietmec.png"
                                alt="VIETMEC - CÔNG TY CỔ PHẦN DƯỢC LIỆU VIỆT NAM"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-admin-hanh-chinh.35BB33E2.html"
                                title="NHÂN VIÊN ADMIN HÀNH CHÍNH"
                              >
                                NHÂN VIÊN ADMIN HÀNH CHÍNH
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/vietmec-cong-ty-co-phan-duoc-lieu-viet-nam.35A875E1.html"
                                title="VIETMEC - CÔNG TY CỔ PHẦN DƯỢC LIỆU VIỆT NAM"
                                target="_blank"
                              >
                                VIETMEC - CÔNG TY CỔ PHẦN DƯỢC LIỆU VIỆT NAM
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 7 Tr - 9 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-banyan-viet-nam.35A7FB16.html"
                              title="Công Ty TNHH Banyan Việt Nam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot8/201238/67x67/143450logo_new-002.png"
                                alt="Công Ty TNHH Banyan Việt Nam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-sale-online.35BB339E.html"
                                title="Nhân viên Sale Online"
                              >
                                Nhân viên Sale Online
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-banyan-viet-nam.35A7FB16.html"
                                title="Công Ty TNHH Banyan Việt Nam"
                                target="_blank"
                              >
                                Công Ty TNHH Banyan Việt Nam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-dao-hai-san.35A8B9A7.html"
                              title="CÔNG TY TNHH ĐẢO HẢI SẢN"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot3/250023/67x67/92518logo-dhs-02.jpg"
                                alt="CÔNG TY TNHH ĐẢO HẢI SẢN"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/quan-ly-nganh-hang-food-luong-tu-20-25-trieu.35BB283E.html"
                                title="QUẢN LÝ NGÀNH HÀNG FOOD (Lương từ 20-25 triệu)"
                              >
                                QUẢN LÝ NGÀNH HÀNG FOOD (Lương từ 20-25 triệu)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-dao-hai-san.35A8B9A7.html"
                                title="CÔNG TY TNHH ĐẢO HẢI SẢN"
                                target="_blank"
                              >
                                CÔNG TY TNHH ĐẢO HẢI SẢN
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 20 Tr - 25 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/akati-wood-vietnam-co-ltd.35A5B0F8.html"
                              title="Akati Wood (Vietnam) Co. Ltd"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employers/51192/67x67/93739aaaaaaaaaa.jpg"
                                alt="Akati Wood (Vietnam) Co. Ltd"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/sales-executive-–-furniture-material-division.35BAE1BD.html"
                                title="Sales Executive – Furniture Material Division"
                              >
                                Sales Executive – Furniture Material Division
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/akati-wood-vietnam-co-ltd.35A5B0F8.html"
                                title="Akati Wood (Vietnam) Co. Ltd"
                                target="_blank"
                              >
                                Akati Wood (Vietnam) Co. Ltd
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 8 Tr - 12 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Bình Dương</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-gia-kho-group.35A8BCC0.html"
                              title="Công ty TNHH Giá Kho Group"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot6/250816/67x67/215812logo.png"
                                alt="Công ty TNHH Giá Kho Group"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-crm-automation.35BB1038.html"
                                title="Chuyên Viên CRM - Automation"
                              >
                                Chuyên Viên CRM - Automation
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-gia-kho-group.35A8BCC0.html"
                                title="Công ty TNHH Giá Kho Group"
                                target="_blank"
                              >
                                Công ty TNHH Giá Kho Group
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 12 Tr - 17 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/fwd-viet-nam.35A7D500.html"
                              title="FWD Việt Nam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot8/191488/67x67/174116unnamed.jpg"
                                alt="FWD Việt Nam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/assistant-digital-marketing-contract-12-months.35BB1AC8.html"
                                title="Assistant, Digital Marketing (Contract 12 Months)"
                              >
                                Assistant, Digital Marketing (Contract 12
                                Months)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/fwd-viet-nam.35A7D500.html"
                                title="FWD Việt Nam"
                                target="_blank"
                              >
                                FWD Việt Nam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-bodynits-tien-giang.35A8B7A9.html"
                              title="Công Ty TNHH Bodynits Tiền Giang"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot3/249513/67x67/1020451.png"
                                alt="Công Ty TNHH Bodynits Tiền Giang"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/ke-toan-kho.35BB1539.html"
                                title="Kế toán kho"
                              >
                                Kế toán kho
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-bodynits-tien-giang.35A8B7A9.html"
                                title="Công Ty TNHH Bodynits Tiền Giang"
                                target="_blank"
                              >
                                Công Ty TNHH Bodynits Tiền Giang
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 8 Tr - 12 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Tiền Giang</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-may-mac-leading-star-vn.35A794EC.html"
                              title="CÔNG TY TNHH MAY MẶC LEADING STAR VN"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot4/175084/67x67/162206logo_leadingstar.jpg"
                                alt="CÔNG TY TNHH MAY MẶC LEADING STAR VN"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/english-translater.35BB148B.html"
                                title="English Translater"
                              >
                                English Translater
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-may-mac-leading-star-vn.35A794EC.html"
                                title="CÔNG TY TNHH MAY MẶC LEADING STAR VN"
                                target="_blank"
                              >
                                CÔNG TY TNHH MAY MẶC LEADING STAR VN
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 10 Tr - 15 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Bình Dương</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-transcosmos-viet-nam.35A74594.html"
                              title="Công Ty TNHH TransCosmos Việt Nam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot2/154772/67x67/95734image001.png"
                                alt="Công Ty TNHH TransCosmos Việt Nam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/business-management-trainee.35BB1560.html"
                                title="Business Management Trainee"
                              >
                                Business Management Trainee
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-transcosmos-viet-nam.35A74594.html"
                                title="Công Ty TNHH TransCosmos Việt Nam"
                                target="_blank"
                              >
                                Công Ty TNHH TransCosmos Việt Nam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 20 Tr - 30 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
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
            <div className="swiper-slide">
              <div className="inner">
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-thuong-mai-quoc-te-viet-nguyen.35A86B8F.html"
                              title="Công Ty TNHH Thương Mại Quốc Tế Việt Nguyên"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot1/230031/67x67/13091803-vnglogo.png"
                                alt="Công Ty TNHH Thương Mại Quốc Tế Việt Nguyên"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-kinh-doanh-nganh-ton-quan-2.35BB334E.html"
                                title="NHÂN VIÊN KINH DOANH (NGÀNH TÔN-QUẬN 2)"
                              >
                                NHÂN VIÊN KINH DOANH (NGÀNH TÔN-QUẬN 2)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-thuong-mai-quoc-te-viet-nguyen.35A86B8F.html"
                                title="Công Ty TNHH Thương Mại Quốc Tế Việt Nguyên"
                                target="_blank"
                              >
                                Công Ty TNHH Thương Mại Quốc Tế Việt Nguyên
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 9 Tr - 12 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/saladin-cong-ty-tnhh-tu-van-va-cong-nghe-10x.35A94EE6.html"
                              title="Saladin - CÔNG TY TNHH TƯ VẤN VÀ CÔNG NGHỆ 10X"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot0/288230/67x67/145921appicon.png"
                                alt="Saladin - CÔNG TY TNHH TƯ VẤN VÀ CÔNG NGHỆ 10X"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/telesales-officer-di-lam-ngay-sau-tet.35BB334D.html"
                                title="Telesales Officer - Đi làm ngay sau tết"
                              >
                                Telesales Officer - Đi làm ngay sau tết
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/saladin-cong-ty-tnhh-tu-van-va-cong-nghe-10x.35A94EE6.html"
                                title="Saladin - CÔNG TY TNHH TƯ VẤN VÀ CÔNG NGHỆ 10X"
                                target="_blank"
                              >
                                Saladin - CÔNG TY TNHH TƯ VẤN VÀ CÔNG NGHỆ 10X
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 8,5 Tr - 25 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-huu-toan-group.35A4FC1E.html"
                              title="Công ty TNHH Hữu Toàn Group"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employers/4894/67x67/94633viberimage.jpg"
                                alt="Công ty TNHH Hữu Toàn Group"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-kinh-doanh-b2b.35BB331F.html"
                                title="Chuyên Viên Kinh Doanh (B2B)"
                              >
                                Chuyên Viên Kinh Doanh (B2B)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-huu-toan-group.35A4FC1E.html"
                                title="Công ty TNHH Hữu Toàn Group"
                                target="_blank"
                              >
                                Công ty TNHH Hữu Toàn Group
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội | Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/hanwha-life.35A8E7C2.html"
                              title="Hanwha Life"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot6/261826/67x67/132422hanwha_logo.png"
                                alt="Hanwha Life"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/digital-customer-services-senior-officer.35BB1C01.html"
                                title="Digital Customer Services Senior Officer"
                              >
                                Digital Customer Services Senior Officer
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/hanwha-life.35A8E7C2.html"
                                title="Hanwha Life"
                                target="_blank"
                              >
                                Hanwha Life
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/resort-amanoi.35A9541F.html"
                              title="Resort Amanoi"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot7/289567/67x67/103354amanoi-heritagelogo_black.png"
                                alt="Resort Amanoi"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/director-of-sales-marketing.35BB2EAE.html"
                                title="Director of Sales & Marketing"
                              >
                                Director of Sales &amp; Marketing
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/resort-amanoi.35A9541F.html"
                                title="Resort Amanoi"
                                target="_blank"
                              >
                                Resort Amanoi
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Ninh Thuận</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-duoc-hau-giang.35A8A2B8.html"
                              title="Công ty Cổ phần Dược Hậu Giang"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot2/244152/67x67/155633duochaugiang_logo-002.jpg"
                                alt="Công ty Cổ phần Dược Hậu Giang"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/can-tho-chuyen-vien-marketing-thuong-mai.35BB0E9F.html"
                                title="[ Cần Thơ] Chuyên viên Marketing Thương Mại"
                              >
                                [ Cần Thơ] Chuyên viên Marketing Thương Mại
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-duoc-hau-giang.35A8A2B8.html"
                                title="Công ty Cổ phần Dược Hậu Giang"
                                target="_blank"
                              >
                                Công ty Cổ phần Dược Hậu Giang
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 13 Tr - 15 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Cần Thơ</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-pt.35A84A1A.html"
                              title="Công ty cổ phần PT"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot6/221466/67x67/114616z3204732851093_131fa1f84ef44636810ba175fa37fdd8.jpg"
                                alt="Công ty cổ phần PT"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-tuyen-dung-va-dao-tao.35BB1572.html"
                                title="Chuyên viên Tuyển dụng và Đào tạo"
                              >
                                Chuyên viên Tuyển dụng và Đào tạo
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-pt.35A84A1A.html"
                                title="Công ty cổ phần PT"
                                target="_blank"
                              >
                                Công ty cổ phần PT
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 9 Tr - 12 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dich-vu-xuat-khau-lao-dong-va-chuyen-gia-suleco.35A7AA22.html"
                              title="Công ty Cổ phần Dịch vụ Xuất khẩu Lao động và Chuyên gia (Suleco)"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/logo-default.png"
                                alt="Công ty Cổ phần Dịch vụ Xuất khẩu Lao động và Chuyên gia (Suleco)"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/営業部長補佐-tro-ly-giam-doc-kinh-doanh.35BB1590.html"
                                title="営業部長補佐 (Trợ lý giám đốc kinh doanh)"
                              >
                                営業部長補佐 (Trợ lý giám đốc kinh doanh)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dich-vu-xuat-khau-lao-dong-va-chuyen-gia-suleco.35A7AA22.html"
                                title="Công ty Cổ phần Dịch vụ Xuất khẩu Lao động và Chuyên gia (Suleco)"
                                target="_blank"
                              >
                                Công ty Cổ phần Dịch vụ Xuất khẩu Lao động và
                                Chuyên gia (Suleco)
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dau-tu-tadco.35A941D6.html"
                              title="CÔNG TY CỔ PHẦN ĐẦU TƯ TADCO"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot6/284886/67x67/170555logo.png"
                                alt="CÔNG TY CỔ PHẦN ĐẦU TƯ TADCO"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-tuyen-dung-hanh-chinh.35BB15BF.html"
                                title="Chuyên viên tuyển dụng, hành chính"
                              >
                                Chuyên viên tuyển dụng, hành chính
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dau-tu-tadco.35A941D6.html"
                                title="CÔNG TY CỔ PHẦN ĐẦU TƯ TADCO"
                                target="_blank"
                              >
                                CÔNG TY CỔ PHẦN ĐẦU TƯ TADCO
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 7 Tr - 10 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
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
            <div className="swiper-slide">
              <div className="inner">
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-ngoi-nha-chau-au-viet-nam.35A884AA.html"
                              title="Công ty TNHH Ngôi Nhà Châu Âu (Việt Nam)"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot8/236458/67x67/85400eh.png"
                                alt="Công ty TNHH Ngôi Nhà Châu Âu (Việt Nam)"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-kinh-doanh.35BB332B.html"
                                title="Nhân Viên Kinh Doanh"
                              >
                                Nhân Viên Kinh Doanh
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-ngoi-nha-chau-au-viet-nam.35A884AA.html"
                                title="Công ty TNHH Ngôi Nhà Châu Âu (Việt Nam)"
                                target="_blank"
                              >
                                Công ty TNHH Ngôi Nhà Châu Âu (Việt Nam)
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/monroe-consulting-group-vietnam.35A7C008.html"
                              title="Monroe Consulting Group Vietnam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot0/186120/67x67/164230monroelogosquarewhitebackground-resize2.jpg"
                                alt="Monroe Consulting Group Vietnam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/executive-recruitment-consultant-headhunter-hanoi.35BB332D.html"
                                title="Executive Recruitment Consultant/Headhunter (Hanoi)"
                              >
                                Executive Recruitment Consultant/Headhunter
                                (Hanoi)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/monroe-consulting-group-vietnam.35A7C008.html"
                                title="Monroe Consulting Group Vietnam"
                                target="_blank"
                              >
                                Monroe Consulting Group Vietnam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/openasia-group.35A64B5E.html"
                              title="Openasia Group"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot8/90718/67x67/140845openasia.png"
                                alt="Openasia Group"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/tam-son-hcm-sales-staff-nhan-vien-ban-hang-noi-that-cao-cap.35BB330B.html"
                                title="[TAM SON] HCM - Sales Staff (Nhân Viên Bán Hàng Nội Thất Cao Cấp)"
                              >
                                [TAM SON] HCM - Sales Staff (Nhân Viên Bán Hàng
                                Nội Thất Cao Cấp)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/openasia-group.35A64B5E.html"
                                title="Openasia Group"
                                target="_blank"
                              >
                                Openasia Group
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-quoc-te-anh-duy.35A74A80.html"
                              title="Công Ty TNHH Quốc Tế Anh Duy"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot2/156032/67x67/170654logoanhduy1.jpg"
                                alt="Công Ty TNHH Quốc Tế Anh Duy"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-trien-khai-sieu-thi.35BB22B8.html"
                                title="Nhân viên Triển Khai Siêu Thị"
                              >
                                Nhân viên Triển Khai Siêu Thị
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-quoc-te-anh-duy.35A74A80.html"
                                title="Công Ty TNHH Quốc Tế Anh Duy"
                                target="_blank"
                              >
                                Công Ty TNHH Quốc Tế Anh Duy
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 8 Tr - 10 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/tong-cong-ty-doi-tac-chan-that.35A7F3FC.html"
                              title="Tổng Công ty Đối Tác Chân Thật"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot0/199420/67x67/101854logo.jpg"
                                alt="Tổng Công ty Đối Tác Chân Thật"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-media-marketing.35BADE13.html"
                                title="Nhân viên Media Marketing"
                              >
                                Nhân viên Media Marketing
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/tong-cong-ty-doi-tac-chan-that.35A7F3FC.html"
                                title="Tổng Công ty Đối Tác Chân Thật"
                                target="_blank"
                              >
                                Tổng Công ty Đối Tác Chân Thật
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 10 Tr - 15 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/eurofins-vietnam.35A7E4DD.html"
                              title="EUROFINS VIETNAM"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot9/195549/67x67/93201logo-eurofins.png"
                                alt="EUROFINS VIETNAM"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-content-gentis.35BB0D95.html"
                                title="Nhân viên Content - GENTIS"
                              >
                                Nhân viên Content - GENTIS
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/eurofins-vietnam.35A7E4DD.html"
                                title="EUROFINS VIETNAM"
                                target="_blank"
                              >
                                EUROFINS VIETNAM
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 12 Tr - 15 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/the-deutsche-gesellschaft-f-r-internationale-zusammenarbeit-giz.35A66830.html"
                              title="The Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ)"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot6/98096/67x67/150710giz.jpg"
                                alt="The Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ)"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/project-assistant-cum-translator.35BB13DB.html"
                                title="Project Assistant cum Translator"
                              >
                                Project Assistant cum Translator
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/the-deutsche-gesellschaft-f-r-internationale-zusammenarbeit-giz.35A66830.html"
                                title="The Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ)"
                                target="_blank"
                              >
                                The Deutsche Gesellschaft für Internationale
                                Zusammenarbeit (GIZ)
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Long An</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dv-cn-tin-hoc-hpt.35A6336C.html"
                              title="Công Ty Cổ Phần DV CN Tin Học HPT"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot8/84588/67x67/104616hpt_13041_2011_08_26.gif"
                                alt="Công Ty Cổ Phần DV CN Tin Học HPT"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-truyen-thong-noi-bo.35BB14F4.html"
                                title="Nhân Viên Truyền Thông Nội Bộ"
                              >
                                Nhân Viên Truyền Thông Nội Bộ
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dv-cn-tin-hoc-hpt.35A6336C.html"
                                title="Công Ty Cổ Phần DV CN Tin Học HPT"
                                target="_blank"
                              >
                                Công Ty Cổ Phần DV CN Tin Học HPT
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 8 Tr - 13 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-chung-khoan-rhb-viet-nam.35A9007A.html"
                              title="Công ty TNHH chứng khoán RHB Việt Nam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot4/268154/67x67/180217logo.jpg"
                                alt="Công ty TNHH chứng khoán RHB Việt Nam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/tro-ly-tong-giam-doc.35BB1480.html"
                                title="Trợ Lý Tổng Giám Đốc"
                              >
                                Trợ Lý Tổng Giám Đốc
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-chung-khoan-rhb-viet-nam.35A9007A.html"
                                title="Công ty TNHH chứng khoán RHB Việt Nam"
                                target="_blank"
                              >
                                Công ty TNHH chứng khoán RHB Việt Nam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
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
            <div className="swiper-slide">
              <div className="inner">
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/openasia-group.35A64B5E.html"
                              title="Openasia Group"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot8/90718/67x67/140845openasia.png"
                                alt="Openasia Group"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/tam-son-hn-sales-staff-nhan-vien-ban-hang-thoi-trang-noi-that-cao-cap.35BB10FD.html"
                                title="[TAM SON] HN - Sales Staff (Nhân Viên Bán Hàng Thời Trang, Nội Thất Cao Cấp)"
                              >
                                [TAM SON] HN - Sales Staff (Nhân Viên Bán Hàng
                                Thời Trang, Nội Thất Cao Cấp)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/openasia-group.35A64B5E.html"
                                title="Openasia Group"
                                target="_blank"
                              >
                                Openasia Group
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/bellsystem24-hoa-sao.35A58ACD.html"
                              title="BellSystem24-Hoa Sao"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employers/41421/67x67/94649logo-new1.png"
                                alt="BellSystem24-Hoa Sao"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/truong-nhom-kinh-doanh-vinhomes.35BB10C1.html"
                                title="Trưởng nhóm Kinh doanh Vinhomes"
                              >
                                Trưởng nhóm Kinh doanh Vinhomes
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/bellsystem24-hoa-sao.35A58ACD.html"
                                title="BellSystem24-Hoa Sao"
                                target="_blank"
                              >
                                BellSystem24-Hoa Sao
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-mot-thanh-vien-c-est-bon-bakery.35A95322.html"
                              title="CÔNG TY TNHH MỘT THÀNH VIÊN C'EST BON BAKERY"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot4/289314/67x67/122050cbblogo3.jpg"
                                alt="CÔNG TY TNHH MỘT THÀNH VIÊN C'EST BON BAKERY"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-kinh-doanh-sales-executive.35BB1A4B.html"
                                title="Chuyên viên kinh doanh/Sales Executive"
                              >
                                Chuyên viên kinh doanh/Sales Executive
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-mot-thanh-vien-c-est-bon-bakery.35A95322.html"
                                title="CÔNG TY TNHH MỘT THÀNH VIÊN C'EST BON BAKERY"
                                target="_blank"
                              >
                                CÔNG TY TNHH MỘT THÀNH VIÊN C'EST BON BAKERY
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 10 Tr - 25 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/chi-nhanh-cong-ty-co-phan-oristar.35A93E22.html"
                              title="CHI NHÁNH CÔNG TY CỔ PHẦN ORISTAR"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot8/283938/67x67/182540logo-oristar-400x250.jpg"
                                alt="CHI NHÁNH CÔNG TY CỔ PHẦN ORISTAR"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/sales-executive-nhan-vien-phat-trien-kinh-doanh.35BB0BCC.html"
                                title="Sales executive (Nhân viên phát triển kinh doanh)"
                              >
                                Sales executive (Nhân viên phát triển kinh
                                doanh)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/chi-nhanh-cong-ty-co-phan-oristar.35A93E22.html"
                                title="CHI NHÁNH CÔNG TY CỔ PHẦN ORISTAR"
                                target="_blank"
                              >
                                CHI NHÁNH CÔNG TY CỔ PHẦN ORISTAR
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 15 Tr - 20 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-an-hai-vn.35A868DA.html"
                              title="CÔNG TY TNHH AN HẢI VN "
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/logo-default.png"
                                alt="CÔNG TY TNHH AN HẢI VN "
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/senior-brand-manager.35BB0B2C.html"
                                title="Senior Brand Manager"
                              >
                                Senior Brand Manager
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-an-hai-vn.35A868DA.html"
                                title="CÔNG TY TNHH AN HẢI VN "
                                target="_blank"
                              >
                                CÔNG TY TNHH AN HẢI VN{" "}
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-trung-tam-thuong-mai-quoc-te.35A88221.html"
                              title="CÔNG TY TNHH TRUNG TÂM THƯƠNG MẠI QUỐC TẾ"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot9/235809/67x67/172456logo.png"
                                alt="CÔNG TY TNHH TRUNG TÂM THƯƠNG MẠI QUỐC TẾ"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/marketing-assistant-manager.35BB2BF4.html"
                                title="Marketing Assistant Manager"
                              >
                                Marketing Assistant Manager
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-trung-tam-thuong-mai-quoc-te.35A88221.html"
                                title="CÔNG TY TNHH TRUNG TÂM THƯƠNG MẠI QUỐC TẾ"
                                target="_blank"
                              >
                                CÔNG TY TNHH TRUNG TÂM THƯƠNG MẠI QUỐC TẾ
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-y-b.35A8E445.html"
                              title="Công Ty Cổ Phần Y&B"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot3/260933/67x67/120244a98068ef680cf8d961db66bef1e1b3b7.png"
                                alt="Công Ty Cổ Phần Y&B"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-thu-mua.35BB14A5.html"
                                title="NHÂN VIÊN THU MUA"
                              >
                                NHÂN VIÊN THU MUA
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-y-b.35A8E445.html"
                                title="Công Ty Cổ Phần Y&B"
                                target="_blank"
                              >
                                Công Ty Cổ Phần Y&amp;B
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 10 Tr - 15 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Long An</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-phat-trien-cong-nghe-ruby.35A95177.html"
                              title="CÔNG TY TNHH PHÁT TRIỂN CÔNG NGHỆ RUBY"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot7/288887/67x67/135754303616232_585221469976439_8538905845861076163_n.png"
                                alt="CÔNG TY TNHH PHÁT TRIỂN CÔNG NGHỆ RUBY"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/tro-ly-thu-ky.35BB216A.html"
                                title="Trợ lý thư ký"
                              >
                                Trợ lý thư ký
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-phat-trien-cong-nghe-ruby.35A95177.html"
                                title="CÔNG TY TNHH PHÁT TRIỂN CÔNG NGHỆ RUBY"
                                target="_blank"
                              >
                                CÔNG TY TNHH PHÁT TRIỂN CÔNG NGHỆ RUBY
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 15 Tr - 22 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-ha-thanh-o-to.35A720C4.html"
                              title="Công ty Cổ phần Hà Thành Ô Tô"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot8/145348/67x67/100554logo.png"
                                alt="Công ty Cổ phần Hà Thành Ô Tô"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-hanh-chinh-nhan-su-chi-nhanh-tay-ho.35BB217F.html"
                                title="Nhân viên Hành chính nhân sự Chi nhánh Tây Hồ"
                              >
                                Nhân viên Hành chính nhân sự Chi nhánh Tây Hồ
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-ha-thanh-o-to.35A720C4.html"
                                title="Công ty Cổ phần Hà Thành Ô Tô"
                                target="_blank"
                              >
                                Công ty Cổ phần Hà Thành Ô Tô
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 6 Tr - 10 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
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
            <div className="swiper-slide">
              <div className="inner">
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/maison-marou-vietnam.35A849EE.html"
                              title="Maison Marou Vietnam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot2/221422/67x67/111041mainlogomarou.png"
                                alt="Maison Marou Vietnam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/sales-executive.35BB1A57.html"
                                title="Sales Executive"
                              >
                                Sales Executive
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/maison-marou-vietnam.35A849EE.html"
                                title="Maison Marou Vietnam"
                                target="_blank"
                              >
                                Maison Marou Vietnam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 8 Tr - 9 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/bim-group.35A5B74D.html"
                              title="BIM Group"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employers/52813/67x67/103534logo_bimgroup_1539759048_1539854522_1549964590.png"
                                alt="BIM Group"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-kinh-doanh-hau.35BB3238.html"
                                title="Nhân viên Kinh doanh Hàu"
                              >
                                Nhân viên Kinh doanh Hàu
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/bim-group.35A5B74D.html"
                                title="BIM Group"
                                target="_blank"
                              >
                                BIM Group
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tai-chinh-tnhh-mb-shinsei-mcredit.35A78FCD.html"
                              title="Công ty Tài chính TNHH MB SHINSEI (MCREDIT)"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot3/173773/67x67/160149logopng_rgb_digitaluse_onwhitebg.png"
                                alt="Công ty Tài chính TNHH MB SHINSEI (MCREDIT)"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/cv-cvcc-phat-trien-kinh-doanh-so.35BB1F71.html"
                                title="CV/ CVCC Phát triển kinh doanh số"
                              >
                                CV/ CVCC Phát triển kinh doanh số
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tai-chinh-tnhh-mb-shinsei-mcredit.35A78FCD.html"
                                title="Công ty Tài chính TNHH MB SHINSEI (MCREDIT)"
                                target="_blank"
                              >
                                Công ty Tài chính TNHH MB SHINSEI (MCREDIT)
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-nha-khoa-an-phuoc.35A6A4BD.html"
                              title="CÔNG TY TNHH NHA KHOA AN PHƯỚC"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot7/113597/67x67/101439104477303_1964130197064961_6505118394066820068_n-002.jpg"
                                alt="CÔNG TY TNHH NHA KHOA AN PHƯỚC"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/truong-phong-marketing.35BAD79C.html"
                                title="Trưởng Phòng Marketing"
                              >
                                Trưởng Phòng Marketing
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-nha-khoa-an-phuoc.35A6A4BD.html"
                                title="CÔNG TY TNHH NHA KHOA AN PHƯỚC"
                                target="_blank"
                              >
                                CÔNG TY TNHH NHA KHOA AN PHƯỚC
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 30 Tr - 50 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Tiền Giang</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/saint-gobain-vietnam.35A527B9.html"
                              title="Saint-Gobain Vietnam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employers/16057/67x67/165059logo_saintgobain_rvb.jpg"
                                alt="Saint-Gobain Vietnam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/trade-marketing-executive.35BAD774.html"
                                title="Trade Marketing Executive"
                              >
                                Trade Marketing Executive
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/saint-gobain-vietnam.35A527B9.html"
                                title="Saint-Gobain Vietnam"
                                target="_blank"
                              >
                                Saint-Gobain Vietnam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/dream-talent-co-ltd-cong-ty-tnhh-dream-talent.35A813FB.html"
                              title="DREAM TALENT CO.,LTD - CÔNG TY TNHH DREAM TALENT"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot1/207611/67x67/35801dreamtalentblackwhite.jpg"
                                alt="DREAM TALENT CO.,LTD - CÔNG TY TNHH DREAM TALENT"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-youtube-ads.35BAD6BB.html"
                                title="Chuyên Viên Youtube Ads"
                              >
                                Chuyên Viên Youtube Ads
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/dream-talent-co-ltd-cong-ty-tnhh-dream-talent.35A813FB.html"
                                title="DREAM TALENT CO.,LTD - CÔNG TY TNHH DREAM TALENT"
                                target="_blank"
                              >
                                DREAM TALENT CO.,LTD - CÔNG TY TNHH DREAM TALENT
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 12 Tr - 18 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-phat-trien-cong-nghe-ruby.35A95177.html"
                              title="CÔNG TY TNHH PHÁT TRIỂN CÔNG NGHỆ RUBY"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot7/288887/67x67/135754303616232_585221469976439_8538905845861076163_n.png"
                                alt="CÔNG TY TNHH PHÁT TRIỂN CÔNG NGHỆ RUBY"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nguoi-mau.35BB2175.html"
                                title="Người mẫu"
                              >
                                Người mẫu
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-phat-trien-cong-nghe-ruby.35A95177.html"
                                title="CÔNG TY TNHH PHÁT TRIỂN CÔNG NGHỆ RUBY"
                                target="_blank"
                              >
                                CÔNG TY TNHH PHÁT TRIỂN CÔNG NGHỆ RUBY
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 12 Tr - 16 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-thuong-mai-dich-vu-du-lich-anh-sao-thien-ast-travel.35A7769F.html"
                              title="Công ty TNHH Thương Mại Dịch Vụ Du Lịch Ánh Sao Thiên - AST TRAVEL "
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot7/167327/67x67/141932ast_iatalogosizelo-n.png"
                                alt="Công ty TNHH Thương Mại Dịch Vụ Du Lịch Ánh Sao Thiên - AST TRAVEL "
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/ke-toan-no-phai-thu.35BB2169.html"
                                title="KẾ TOÁN NỢ PHẢI THU"
                              >
                                KẾ TOÁN NỢ PHẢI THU
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-thuong-mai-dich-vu-du-lich-anh-sao-thien-ast-travel.35A7769F.html"
                                title="Công ty TNHH Thương Mại Dịch Vụ Du Lịch Ánh Sao Thiên - AST TRAVEL "
                                target="_blank"
                              >
                                Công ty TNHH Thương Mại Dịch Vụ Du Lịch Ánh Sao
                                Thiên - AST TRAVEL{" "}
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 8 Tr - 15 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/wanek-furniture.35A5892F.html"
                              title="Wanek Furniture"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot7/41007/67x67/131309waneklogo-org.jpg"
                                alt="Wanek Furniture"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/translator-english.35BB28C6.html"
                                title="Translator (English)"
                              >
                                Translator (English)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/wanek-furniture.35A5892F.html"
                                title="Wanek Furniture"
                                target="_blank"
                              >
                                Wanek Furniture
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Bình Dương</p>
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
            <div className="swiper-slide">
              <div className="inner">
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-giai-phap-va-cong-nghe-vietnix.35A71C83.html"
                              title="CÔNG TY CỔ PHẦN GIẢI PHÁP VÀ CÔNG NGHỆ VIETNIX"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot9/144259/67x67/172653logovietnixcareer-01.png"
                                alt="CÔNG TY CỔ PHẦN GIẢI PHÁP VÀ CÔNG NGHỆ VIETNIX"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-kinh-doanh.35BB255B.html"
                                title="Nhân Viên Kinh Doanh"
                              >
                                Nhân Viên Kinh Doanh
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-giai-phap-va-cong-nghe-vietnix.35A71C83.html"
                                title="CÔNG TY CỔ PHẦN GIẢI PHÁP VÀ CÔNG NGHỆ VIETNIX"
                                target="_blank"
                              >
                                CÔNG TY CỔ PHẦN GIẢI PHÁP VÀ CÔNG NGHỆ VIETNIX
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 5 Tr - 10 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/hup-hong-machinery-vn-company-ltd.35A62D32.html"
                              title="Hup Hong Machinery (VN) Company Ltd,."
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot4/82994/67x67/132245logo.jpg"
                                alt="Hup Hong Machinery (VN) Company Ltd,."
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-marketing-online-ho-tro-sales.35BB2672.html"
                                title="Nhân Viên Marketing Online/Hỗ trợ Sales"
                              >
                                Nhân Viên Marketing Online/Hỗ trợ Sales
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/hup-hong-machinery-vn-company-ltd.35A62D32.html"
                                title="Hup Hong Machinery (VN) Company Ltd,."
                                target="_blank"
                              >
                                Hup Hong Machinery (VN) Company Ltd,.
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 8 Tr - 10 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-do-thi-thong-minh-viet-nam.35A8B194.html"
                              title="Công Ty Cổ Phần Đô Thị Thông Minh Việt Nam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot6/247956/67x67/110905logo_vnsc_cttv-04.png"
                                alt="Công Ty Cổ Phần Đô Thị Thông Minh Việt Nam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-kinh-doanh-bds-cao-cap.35BB26CA.html"
                                title="Chuyên Viên Kinh Doanh BĐS Cao Cấp"
                              >
                                Chuyên Viên Kinh Doanh BĐS Cao Cấp
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-do-thi-thong-minh-viet-nam.35A8B194.html"
                                title="Công Ty Cổ Phần Đô Thị Thông Minh Việt Nam"
                                target="_blank"
                              >
                                Công Ty Cổ Phần Đô Thị Thông Minh Việt Nam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 9 Tr - 350 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Đà Nẵng | Quảng Bình | Quảng Ngãi</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/dong-tho-jsc.35A54230.html"
                              title="DONG THO JSC"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employers/22832/67x67/143757dtlgo18.png"
                                alt="DONG THO JSC"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/business-development-executive.35BAF9EC.html"
                                title="Business Development Executive"
                              >
                                Business Development Executive
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/dong-tho-jsc.35A54230.html"
                                title="DONG THO JSC"
                                target="_blank"
                              >
                                DONG THO JSC
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/got-it.35A84C65.html"
                              title="GOT IT"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot3/222053/67x67/101704logogotit2022-06.png"
                                alt="GOT IT"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/sales-b2b.35BB1BDC.html"
                                title="Sales B2B"
                              >
                                Sales B2B
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/got-it.35A84C65.html"
                                title="GOT IT"
                                target="_blank"
                              >
                                GOT IT
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 22 Tr - 28,6 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              href=""
                              title="CareerBuilder's client"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/logo-default.png"
                                alt="CareerBuilder's client"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/senior-sales-manager.35BAC19F.html"
                                title="SENIOR SALES MANAGER"
                              >
                                SENIOR SALES MANAGER
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href=""
                                title="CareerBuilder's client"
                              >
                                CareerBuilder's client
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Bình Dương</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-thanh-thanh-cong-bien-hoa.35A7FCC0.html"
                              title="Công ty CP Thành Thành Công - Biên Hòa"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot4/201664/67x67/90931untitled-1.png"
                                alt="Công ty CP Thành Thành Công - Biên Hòa"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/truong-bo-phan-hanh-chinh-lam-viec-tai-campuchia.35BB28E0.html"
                                title="Trưởng bộ phận hành chính (Làm việc tại Campuchia)"
                              >
                                Trưởng bộ phận hành chính (Làm việc tại
                                Campuchia)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-thanh-thanh-cong-bien-hoa.35A7FCC0.html"
                                title="Công ty CP Thành Thành Công - Biên Hòa"
                                target="_blank"
                              >
                                Công ty CP Thành Thành Công - Biên Hòa
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Kratie | Tây Ninh | Bình Dương</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-thanh-thanh-cong-bien-hoa.35A7FCC0.html"
                              title="Công ty CP Thành Thành Công - Biên Hòa"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot4/201664/67x67/90931untitled-1.png"
                                alt="Công ty CP Thành Thành Công - Biên Hòa"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/truong-phong-van-hanh-lam-viec-tai-campuchia.35BB28E1.html"
                                title="Trưởng phòng Vận hành (Làm việc tại Campuchia)"
                              >
                                Trưởng phòng Vận hành (Làm việc tại Campuchia)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-thanh-thanh-cong-bien-hoa.35A7FCC0.html"
                                title="Công ty CP Thành Thành Công - Biên Hòa"
                                target="_blank"
                              >
                                Công ty CP Thành Thành Công - Biên Hòa
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Kratie | Tây Ninh | Bình Dương</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-imarket-vn.35A77D2A.html"
                              title="Công ty TNHH iMarket VN"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot2/169002/67x67/101730imvnewlogo.jpg"
                                alt="Công ty TNHH iMarket VN"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/c-b-executive-8-month-contract.35BB3121.html"
                                title="C&B Executive (8-Month Contract)"
                              >
                                C&amp;B Executive (8-Month Contract)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-imarket-vn.35A77D2A.html"
                                title="Công ty TNHH iMarket VN"
                                target="_blank"
                              >
                                Công ty TNHH iMarket VN
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
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
            <div className="swiper-slide">
              <div className="inner">
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-bia-carlsberg-viet-nam.35A8A752.html"
                              title="CÔNG TY TNHH BIA CARLSBERG VIỆT NAM"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot0/245330/67x67/184518download.png"
                                alt="CÔNG TY TNHH BIA CARLSBERG VIỆT NAM"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/phu-giao-bau-bang-dau-tieng-dai-dien-kinh-doanh.35BB2DE1.html"
                                title="[PHÚ GIÁO, BÀU BÀNG, DẦU TIẾNG] Đại Diện Kinh Doanh"
                              >
                                [PHÚ GIÁO, BÀU BÀNG, DẦU TIẾNG] Đại Diện Kinh
                                Doanh
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-bia-carlsberg-viet-nam.35A8A752.html"
                                title="CÔNG TY TNHH BIA CARLSBERG VIỆT NAM"
                                target="_blank"
                              >
                                CÔNG TY TNHH BIA CARLSBERG VIỆT NAM
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 16 Tr - 28 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Bình Dương</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-co-ban-toan-cau.35A817E8.html"
                              title="Công Ty Cổ Phần Cơ Bản Toàn Cầu"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot6/208616/67x67/165724basic-002.jpg"
                                alt="Công Ty Cổ Phần Cơ Bản Toàn Cầu"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/ky-su-kinh-doanh.35BB2C77.html"
                                title="Kỹ Sư Kinh Doanh"
                              >
                                Kỹ Sư Kinh Doanh
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-co-ban-toan-cau.35A817E8.html"
                                title="Công Ty Cổ Phần Cơ Bản Toàn Cầu"
                                target="_blank"
                              >
                                Công Ty Cổ Phần Cơ Bản Toàn Cầu
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 15 Tr - 30 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-dau-tu-thuong-mai-va-phat-trien-dich-vu-new-gold.35A955FC.html"
                              title="CÔNG TY TNHH ĐẦU TƯ THƯƠNG MẠI VÀ PHÁT TRIỂN DỊCH VỤ NEW GOLD"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot4/290044/67x67/133134logonewgold.png"
                                alt="CÔNG TY TNHH ĐẦU TƯ THƯƠNG MẠI VÀ PHÁT TRIỂN DỊCH VỤ NEW GOLD"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-kinh-doanh.35BB329C.html"
                                title="NHÂN VIÊN KINH DOANH"
                              >
                                NHÂN VIÊN KINH DOANH
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-dau-tu-thuong-mai-va-phat-trien-dich-vu-new-gold.35A955FC.html"
                                title="CÔNG TY TNHH ĐẦU TƯ THƯƠNG MẠI VÀ PHÁT TRIỂN DỊCH VỤ NEW GOLD"
                                target="_blank"
                              >
                                CÔNG TY TNHH ĐẦU TƯ THƯƠNG MẠI VÀ PHÁT TRIỂN
                                DỊCH VỤ NEW GOLD
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 12 Tr - 22 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/tong-cong-ty-chuyen-phat-nhanh-buu-dien.35A7D2A3.html"
                              title="Tổng Công Ty Chuyển Phát Nhanh Bưu Điện"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot3/190883/67x67/145650logo2020.jpg"
                                alt="Tổng Công Ty Chuyển Phát Nhanh Bưu Điện"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/giao-dich-vien-tai-buu-cuc-khach-hang-lon-ems-hai-duong-hung-yen.35BAF481.html"
                                title="Giao dịch viên tại Bưu cục Khách hàng lớn EMS Hải Dương - Hưng Yên"
                              >
                                Giao dịch viên tại Bưu cục Khách hàng lớn EMS
                                Hải Dương - Hưng Yên
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/tong-cong-ty-chuyen-phat-nhanh-buu-dien.35A7D2A3.html"
                                title="Tổng Công Ty Chuyển Phát Nhanh Bưu Điện"
                                target="_blank"
                              >
                                Tổng Công Ty Chuyển Phát Nhanh Bưu Điện
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 10 Tr - 12 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hưng Yên | Hải Dương</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/tong-cong-ty-chuyen-phat-nhanh-buu-dien.35A7D2A3.html"
                              title="Tổng Công Ty Chuyển Phát Nhanh Bưu Điện"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot3/190883/67x67/145650logo2020.jpg"
                                alt="Tổng Công Ty Chuyển Phát Nhanh Bưu Điện"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-kinh-doanh-logistics.35BABB44.html"
                                title="Nhân viên kinh doanh Logistics"
                              >
                                Nhân viên kinh doanh Logistics
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/tong-cong-ty-chuyen-phat-nhanh-buu-dien.35A7D2A3.html"
                                title="Tổng Công Ty Chuyển Phát Nhanh Bưu Điện"
                                target="_blank"
                              >
                                Tổng Công Ty Chuyển Phát Nhanh Bưu Điện
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/tong-cong-ty-chuyen-phat-nhanh-buu-dien.35A7D2A3.html"
                              title="Tổng Công Ty Chuyển Phát Nhanh Bưu Điện"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot3/190883/67x67/145650logo2020.jpg"
                                alt="Tổng Công Ty Chuyển Phát Nhanh Bưu Điện"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-phat-trien-khach-hang-lon.35BABAEB.html"
                                title="Chuyên viên phát triển khách hàng lớn"
                              >
                                Chuyên viên phát triển khách hàng lớn
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/tong-cong-ty-chuyen-phat-nhanh-buu-dien.35A7D2A3.html"
                                title="Tổng Công Ty Chuyển Phát Nhanh Bưu Điện"
                                target="_blank"
                              >
                                Tổng Công Ty Chuyển Phát Nhanh Bưu Điện
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 20 Tr - 25 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tai-chinh-tnhh-mb-shinsei-mcredit.35A78FCD.html"
                              title="Công ty Tài chính TNHH MB SHINSEI (MCREDIT)"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot3/173773/67x67/160149logopng_rgb_digitaluse_onwhitebg.png"
                                alt="Công ty Tài chính TNHH MB SHINSEI (MCREDIT)"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/pho-truong-tro-ly.35BB3552.html"
                                title="Phó Trưởng Trợ Lý"
                              >
                                Phó Trưởng Trợ Lý
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tai-chinh-tnhh-mb-shinsei-mcredit.35A78FCD.html"
                                title="Công ty Tài chính TNHH MB SHINSEI (MCREDIT)"
                                target="_blank"
                              >
                                Công ty Tài chính TNHH MB SHINSEI (MCREDIT)
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/truong-tieu-hoc-trung-hoc-co-so-va-trung-hoc-pho-thong-reigate-grammar-viet-nam.35A8327F.html"
                              title="Trường Tiểu học, Trung học cơ sở và Trung học phổ thông Reigate Grammar Việt Nam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot3/215423/67x67/100900261025654_4902824229742479_6454854133594388188_n.png"
                                alt="Trường Tiểu học, Trung học cơ sở và Trung học phổ thông Reigate Grammar Việt Nam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/hr-executive.35BB3527.html"
                                title="HR Executive"
                              >
                                HR Executive
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/truong-tieu-hoc-trung-hoc-co-so-va-trung-hoc-pho-thong-reigate-grammar-viet-nam.35A8327F.html"
                                title="Trường Tiểu học, Trung học cơ sở và Trung học phổ thông Reigate Grammar Việt Nam"
                                target="_blank"
                              >
                                Trường Tiểu học, Trung học cơ sở và Trung học
                                phổ thông Reigate Grammar Việt Nam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 8 Tr - 10 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-chung-khoan-vndirect.35A72AAC.html"
                              title="Công Ty CP Chứng Khoán VNDIRECT"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot4/147884/67x67/172018vndlogo.png"
                                alt="Công Ty CP Chứng Khoán VNDIRECT"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/ke-toan-cua-hang-homefood.35BB351F.html"
                                title="Kế Toán Cửa Hàng - Homefood"
                              >
                                Kế Toán Cửa Hàng - Homefood
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-chung-khoan-vndirect.35A72AAC.html"
                                title="Công Ty CP Chứng Khoán VNDIRECT"
                                target="_blank"
                              >
                                Công Ty CP Chứng Khoán VNDIRECT
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
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
            <div className="swiper-slide">
              <div className="inner">
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/candylio.35A826C0.html"
                              title="CANDYLIO"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot6/212416/67x67/155731screenshot2018-08-09at2-17-12pm.png"
                                alt="CANDYLIO"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/sales-consultant-chuyen-vien-tu-van-ban-hang.35BB322B.html"
                                title="Sales Consultant - Chuyên Viên Tư Vấn Bán Hàng"
                              >
                                Sales Consultant - Chuyên Viên Tư Vấn Bán Hàng
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/candylio.35A826C0.html"
                                title="CANDYLIO"
                                target="_blank"
                              >
                                CANDYLIO
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 10 Tr - 20 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-phat-trien-giang-vo.35A94079.html"
                              title="CÔNG TY TNHH PHÁT TRIỂN GIẢNG VÕ"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot7/284537/67x67/155130logo_giangvo.jpg"
                                alt="CÔNG TY TNHH PHÁT TRIỂN GIẢNG VÕ"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-kinh-doanh-cho-thue-can-ho.35BB31D2.html"
                                title="Nhân Viên Kinh Doanh Cho Thuê Căn Hộ"
                              >
                                Nhân Viên Kinh Doanh Cho Thuê Căn Hộ
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-phat-trien-giang-vo.35A94079.html"
                                title="CÔNG TY TNHH PHÁT TRIỂN GIẢNG VÕ"
                                target="_blank"
                              >
                                CÔNG TY TNHH PHÁT TRIỂN GIẢNG VÕ
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/heineken-vietnam.35A66A42.html"
                              title="HEINEKEN Vietnam "
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot6/98626/67x67/155027logohnk-vn.png"
                                alt="HEINEKEN Vietnam "
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/heineken-vietnam-key-account-manager-national-key-account-on-trade-hanoi.35BB31C9.html"
                                title="HEINEKEN Vietnam- Key Account Manager - National Key Account On-trade (Hanoi)"
                              >
                                HEINEKEN Vietnam- Key Account Manager - National
                                Key Account On-trade (Hanoi)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/heineken-vietnam.35A66A42.html"
                                title="HEINEKEN Vietnam "
                                target="_blank"
                              >
                                HEINEKEN Vietnam{" "}
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-cung-ung-nhan-luc-va-giai-phap-nhan-su-36.35A8874F.html"
                              title="CÔNG TY TNHH CUNG ỨNG NHÂN LỰC VÀ GIẢI PHÁP NHÂN SỰ 36"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot5/237135/67x67/1740551-1.png"
                                alt="CÔNG TY TNHH CUNG ỨNG NHÂN LỰC VÀ GIẢI PHÁP NHÂN SỰ 36"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/quan-ly-giam-sat-kinh-doanh.35BAE9DA.html"
                                title="Quản lý giám sát kinh doanh"
                              >
                                Quản lý giám sát kinh doanh
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-cung-ung-nhan-luc-va-giai-phap-nhan-su-36.35A8874F.html"
                                title="CÔNG TY TNHH CUNG ỨNG NHÂN LỰC VÀ GIẢI PHÁP NHÂN SỰ 36"
                                target="_blank"
                              >
                                CÔNG TY TNHH CUNG ỨNG NHÂN LỰC VÀ GIẢI PHÁP NHÂN
                                SỰ 36
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Trên 15 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Bình Dương</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-tham-my-quoc-te-linh-anh.35A8F78C.html"
                              title="CÔNG TY TNHH THẨM MỸ QUỐC TẾ LINH ANH"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot8/265868/67x67/172429logolinhanh.jpg"
                                alt="CÔNG TY TNHH THẨM MỸ QUỐC TẾ LINH ANH"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-google-ads.35BB3580.html"
                                title="NHÂN VIÊN GOOGLE ADS"
                              >
                                NHÂN VIÊN GOOGLE ADS
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-tham-my-quoc-te-linh-anh.35A8F78C.html"
                                title="CÔNG TY TNHH THẨM MỸ QUỐC TẾ LINH ANH"
                                target="_blank"
                              >
                                CÔNG TY TNHH THẨM MỸ QUỐC TẾ LINH ANH
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 8 Tr - 15 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-tu-van-dich-vu-bat-dong-san-duc-hung-land.35A8E848.html"
                              title="CÔNG TY TNHH TƯ VẤN DỊCH VỤ BẤT ĐỘNG SẢN ĐỨC HƯNG LAND"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot0/261960/67x67/143007z2917950743525_9a314985a9c714def41e59ea9ffc7d69.jpg"
                                alt="CÔNG TY TNHH TƯ VẤN DỊCH VỤ BẤT ĐỘNG SẢN ĐỨC HƯNG LAND"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/can-05-thuc-tap-sinh-marketing-marketing-intern-co-luong-va-moc.35BB357D.html"
                                title="CẦN 05 THỰC TẬP SINH MARKETING / MARKETING INTERN (CÓ LƯƠNG VÀ MỘC)"
                              >
                                CẦN 05 THỰC TẬP SINH MARKETING / MARKETING
                                INTERN (CÓ LƯƠNG VÀ MỘC)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-tu-van-dich-vu-bat-dong-san-duc-hung-land.35A8E848.html"
                                title="CÔNG TY TNHH TƯ VẤN DỊCH VỤ BẤT ĐỘNG SẢN ĐỨC HƯNG LAND"
                                target="_blank"
                              >
                                CÔNG TY TNHH TƯ VẤN DỊCH VỤ BẤT ĐỘNG SẢN ĐỨC
                                HƯNG LAND
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 1,5 Tr - 1,5 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-xd-kd-nha-dai-phuc.35A62048.html"
                              title="Công Ty Cổ Phần XD & KD Nhà Đại Phúc"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot8/79688/67x67/135416logo.jpg"
                                alt="Công Ty Cổ Phần XD & KD Nhà Đại Phúc"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/pho-phong-hanh-chinh-nhan-su.35BB34E5.html"
                                title="Phó phòng Hành chính nhân sự"
                              >
                                Phó phòng Hành chính nhân sự
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-xd-kd-nha-dai-phuc.35A62048.html"
                                title="Công Ty Cổ Phần XD & KD Nhà Đại Phúc"
                                target="_blank"
                              >
                                Công Ty Cổ Phần XD &amp; KD Nhà Đại Phúc
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 20 Tr - 32 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/mega-lifesciences-vietnam.35A503A2.html"
                              title="Mega Lifesciences (Vietnam)"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employers/6818/67x67/134857picture1.png"
                                alt="Mega Lifesciences (Vietnam)"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-tuyen-dung.35BB3505.html"
                                title="Chuyên viên tuyển dụng"
                              >
                                Chuyên viên tuyển dụng
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/mega-lifesciences-vietnam.35A503A2.html"
                                title="Mega Lifesciences (Vietnam)"
                                target="_blank"
                              >
                                Mega Lifesciences (Vietnam)
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Trên 10 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội | Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/tmf-vietnam-company-limited.35A8FDFF.html"
                              title="TMF Vietnam Company Limited"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot9/267519/67x67/110307tmfgroup-newlogowtagline.jpg"
                                alt="TMF Vietnam Company Limited"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/hn-hcm-hr-and-payroll-trainee.35BB34F8.html"
                                title="[HN/HCM] HR and Payroll Trainee"
                              >
                                [HN/HCM] HR and Payroll Trainee
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/tmf-vietnam-company-limited.35A8FDFF.html"
                                title="TMF Vietnam Company Limited"
                                target="_blank"
                              >
                                TMF Vietnam Company Limited
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 3 Tr - 4 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh | Hà Nội</p>
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
            <div className="swiper-slide">
              <div className="inner">
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/lg-electronics-vietnam.35A59DA9.html"
                              title="LG Electronics Vietnam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot9/46249/67x67/132520logo.png"
                                alt="LG Electronics Vietnam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-kinh-doanh-san-pham-dien-tu-tieu-dung.35BB3197.html"
                                title="Chuyên Viên Kinh Doanh - Sản Phẩm Điện Tử Tiêu Dùng"
                              >
                                Chuyên Viên Kinh Doanh - Sản Phẩm Điện Tử Tiêu
                                Dùng
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/lg-electronics-vietnam.35A59DA9.html"
                                title="LG Electronics Vietnam"
                                target="_blank"
                              >
                                LG Electronics Vietnam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội | Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-thiet-bi-tat-hong.35A75908.html"
                              title="Công Ty TNHH Thiết Bị Tat Hong"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot2/159752/67x67/160831logotathong-002.jpg"
                                alt="Công Ty TNHH Thiết Bị Tat Hong"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/senior-sales-executive-nhan-vien-kinh-doanh-cho-thue-ban-thiet-bi-cau.35BAE3D6.html"
                                title="Senior Sales Executive - Nhân Viên Kinh Doanh Cho Thuê/Bán Thiết Bị Cẩu"
                              >
                                Senior Sales Executive - Nhân Viên Kinh Doanh
                                Cho Thuê/Bán Thiết Bị Cẩu
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-thiet-bi-tat-hong.35A75908.html"
                                title="Công Ty TNHH Thiết Bị Tat Hong"
                                target="_blank"
                              >
                                Công Ty TNHH Thiết Bị Tat Hong
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/american-international-hospital-aih.35A86E08.html"
                              title="American International Hospital (AIH)"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot4/230664/67x67/101525themtieude-4.png"
                                alt="American International Hospital (AIH)"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/admin-phong-kinh-doanh.35BB2C28.html"
                                title="Admin Phòng Kinh doanh"
                              >
                                Admin Phòng Kinh doanh
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/american-international-hospital-aih.35A86E08.html"
                                title="American International Hospital (AIH)"
                                target="_blank"
                              >
                                American International Hospital (AIH)
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 7 Tr - 10 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-thuong-mai-want-want-viet-nam.35A94193.html"
                              title="Công ty TNHH  Thương Mại Want Want Việt Nam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/logo-default.png"
                                alt="Công ty TNHH  Thương Mại Want Want Việt Nam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/trade-marketing-executive.35BB2925.html"
                                title="Trade Marketing Executive"
                              >
                                Trade Marketing Executive
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-thuong-mai-want-want-viet-nam.35A94193.html"
                                title="Công ty TNHH  Thương Mại Want Want Việt Nam"
                                target="_blank"
                              >
                                Công ty TNHH Thương Mại Want Want Việt Nam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-hoa-tue-dang.35A94E56.html"
                              title="Công Ty TNHH Hoa Tuệ Đăng"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot6/288086/67x67/100002eiki-y1920x1024.png"
                                alt="Công Ty TNHH Hoa Tuệ Đăng"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/truong-phong-marketing.35BB3571.html"
                                title="Trưởng Phòng Marketing"
                              >
                                Trưởng Phòng Marketing
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-hoa-tue-dang.35A94E56.html"
                                title="Công Ty TNHH Hoa Tuệ Đăng"
                                target="_blank"
                              >
                                Công Ty TNHH Hoa Tuệ Đăng
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 15 Tr - 20 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-giao-duc-dai-duong.35A6E71C.html"
                              title="Công Ty CP Giáo Dục Đại Dương"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot8/130588/67x67/153940logooceanedu01.png"
                                alt="Công Ty CP Giáo Dục Đại Dương"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-cham-soc-khach-hang-ocean-edu-yen-bai-2.35BB356B.html"
                                title="Chuyên viên Chăm sóc khách hàng  [Ocean Edu Yên Bái 2]"
                              >
                                Chuyên viên Chăm sóc khách hàng [Ocean Edu Yên
                                Bái 2]
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-giao-duc-dai-duong.35A6E71C.html"
                                title="Công Ty CP Giáo Dục Đại Dương"
                                target="_blank"
                              >
                                Công Ty CP Giáo Dục Đại Dương
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 11 Tr - 13 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Yên Bái</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cn-tai-tp-hcm-cong-ty-cp-dau-tu-tm-va-phat-trien-cong-nghe-fsi.35A7E894.html"
                              title="CN tại TP.HCM Công ty CP Đầu Tư TM và Phát Triển Công Nghệ FSI"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot0/196500/67x67/150852logofsi_-01.png"
                                alt="CN tại TP.HCM Công ty CP Đầu Tư TM và Phát Triển Công Nghệ FSI"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/thuc-tap-sinh-le-tan.35BB34EA.html"
                                title="Thực Tập Sinh Lễ Tân"
                              >
                                Thực Tập Sinh Lễ Tân
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cn-tai-tp-hcm-cong-ty-cp-dau-tu-tm-va-phat-trien-cong-nghe-fsi.35A7E894.html"
                                title="CN tại TP.HCM Công ty CP Đầu Tư TM và Phát Triển Công Nghệ FSI"
                                target="_blank"
                              >
                                CN tại TP.HCM Công ty CP Đầu Tư TM và Phát Triển
                                Công Nghệ FSI
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 3 Tr - 4 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dau-tu-vang-phu-quy.35A8604C.html"
                              title="CÔNG TY CỔ PHẦN ĐẦU TƯ VÀNG PHÚ QUÝ"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot8/227148/67x67/100314hnlkalcsqejuwsnnayua.jpg"
                                alt="CÔNG TY CỔ PHẦN ĐẦU TƯ VÀNG PHÚ QUÝ"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-c-b.35BB34C6.html"
                                title="Chuyên Viên C&B"
                              >
                                Chuyên Viên C&amp;B
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dau-tu-vang-phu-quy.35A8604C.html"
                                title="CÔNG TY CỔ PHẦN ĐẦU TƯ VÀNG PHÚ QUÝ"
                                target="_blank"
                              >
                                CÔNG TY CỔ PHẦN ĐẦU TƯ VÀNG PHÚ QUÝ
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 12 Tr - 15 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-mtv-nang-luong-an-viet-phat.35A75F9E.html"
                              title="Công Ty TNHH MTV Năng Lượng An Việt Phát	"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot8/161438/67x67/152942logo.jpg"
                                alt="Công Ty TNHH MTV Năng Lượng An Việt Phát	"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/ke-toan-admin-van-phong-mien-nam.35BB34A8.html"
                                title="Kế toán - Admin Văn Phòng Miền Nam"
                              >
                                Kế toán - Admin Văn Phòng Miền Nam
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-mtv-nang-luong-an-viet-phat.35A75F9E.html"
                                title="Công Ty TNHH MTV Năng Lượng An Việt Phát	"
                                target="_blank"
                              >
                                Công Ty TNHH MTV Năng Lượng An Việt Phát{" "}
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 9,5 Tr - 10 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
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
            <div className="swiper-slide">
              <div className="inner">
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dau-tu-bat-dong-san-thanh-phuong.35A80BF7.html"
                              title="Công Ty Cổ Phần Đầu Tư - Bất Động Sản Thành Phương"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot9/205559/67x67/163739logo.png"
                                alt="Công Ty Cổ Phần Đầu Tư - Bất Động Sản Thành Phương"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/pho-tong-giam-doc-kinh-doanh.35BB30AC.html"
                                title="Phó Tổng Giám đốc Kinh doanh"
                              >
                                Phó Tổng Giám đốc Kinh doanh
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dau-tu-bat-dong-san-thanh-phuong.35A80BF7.html"
                                title="Công Ty Cổ Phần Đầu Tư - Bất Động Sản Thành Phương"
                                target="_blank"
                              >
                                Công Ty Cổ Phần Đầu Tư - Bất Động Sản Thành
                                Phương
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Bình Phước | Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dau-tu-thuong-mai-va-du-lich-co-may.35A955CB.html"
                              title="CÔNG TY CỔ PHẦN ĐẦU TƯ - THƯƠNG MẠI VÀ DU LỊCH CỎ MAY"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot5/289995/67x67/143508logo-1.jpg"
                                alt="CÔNG TY CỔ PHẦN ĐẦU TƯ - THƯƠNG MẠI VÀ DU LỊCH CỎ MAY"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/truong-phong-kinh-doanh.35BB30D2.html"
                                title="Trưởng Phòng Kinh Doanh"
                              >
                                Trưởng Phòng Kinh Doanh
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dau-tu-thuong-mai-va-du-lich-co-may.35A955CB.html"
                                title="CÔNG TY CỔ PHẦN ĐẦU TƯ - THƯƠNG MẠI VÀ DU LỊCH CỎ MAY"
                                target="_blank"
                              >
                                CÔNG TY CỔ PHẦN ĐẦU TƯ - THƯƠNG MẠI VÀ DU LỊCH
                                CỎ MAY
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Cần Thơ | Đồng Tháp</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/jotun-paints-vietnam-company-limited.35A62F32.html"
                              title="Jotun Paints Vietnam Company Limited"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot6/83506/67x67/174210jotun_12483_29072011.gif"
                                alt="Jotun Paints Vietnam Company Limited"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/sales-executive-–-phat-trien-he-thong-dai-ly-son-trang-tri-ha-noi.35BB1E57.html"
                                title="Sales Executive – Phát Triển Hệ Thống Đại Lý Sơn Trang Trí (Hà Nội)"
                              >
                                Sales Executive – Phát Triển Hệ Thống Đại Lý Sơn
                                Trang Trí (Hà Nội)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/jotun-paints-vietnam-company-limited.35A62F32.html"
                                title="Jotun Paints Vietnam Company Limited"
                                target="_blank"
                              >
                                Jotun Paints Vietnam Company Limited
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-giao-duc-dai-duong.35A6E71C.html"
                              title="Công Ty CP Giáo Dục Đại Dương"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot8/130588/67x67/153940logooceanedu01.png"
                                alt="Công Ty CP Giáo Dục Đại Dương"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-cham-soc-khach-hang-ocean-edu-thai-binh.35BB3563.html"
                                title="Chuyên viên Chăm sóc khách hàng  [Ocean Edu Thái Bình]"
                              >
                                Chuyên viên Chăm sóc khách hàng [Ocean Edu Thái
                                Bình]
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-giao-duc-dai-duong.35A6E71C.html"
                                title="Công Ty CP Giáo Dục Đại Dương"
                                target="_blank"
                              >
                                Công Ty CP Giáo Dục Đại Dương
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 11 Tr - 13 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Thái Bình</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-giao-duc-dai-duong.35A6E71C.html"
                              title="Công Ty CP Giáo Dục Đại Dương"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot8/130588/67x67/153940logooceanedu01.png"
                                alt="Công Ty CP Giáo Dục Đại Dương"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-ban-hang-ocean-edu-thai-binh.35BB3562.html"
                                title="Nhân viên bán hàng [Ocean Edu Thái Bình]"
                              >
                                Nhân viên bán hàng [Ocean Edu Thái Bình]
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-giao-duc-dai-duong.35A6E71C.html"
                                title="Công Ty CP Giáo Dục Đại Dương"
                                target="_blank"
                              >
                                Công Ty CP Giáo Dục Đại Dương
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 11 Tr - 13 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Thái Bình</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-giao-duc-dai-duong.35A6E71C.html"
                              title="Công Ty CP Giáo Dục Đại Dương"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot8/130588/67x67/153940logooceanedu01.png"
                                alt="Công Ty CP Giáo Dục Đại Dương"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-telesales-ocean-edu-thai-binh-2.35BB3565.html"
                                title="Nhân viên Telesales  [Ocean Edu Thái Bình 2]"
                              >
                                Nhân viên Telesales [Ocean Edu Thái Bình 2]
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-giao-duc-dai-duong.35A6E71C.html"
                                title="Công Ty CP Giáo Dục Đại Dương"
                                target="_blank"
                              >
                                Công Ty CP Giáo Dục Đại Dương
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 11 Tr - 13 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Thái Bình</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-phat-trien-cong-nghe-ruby.35A95177.html"
                              title="CÔNG TY TNHH PHÁT TRIỂN CÔNG NGHỆ RUBY"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot7/288887/67x67/135754303616232_585221469976439_8538905845861076163_n.png"
                                alt="CÔNG TY TNHH PHÁT TRIỂN CÔNG NGHỆ RUBY"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/tro-ly-thu-ky.35BB34A0.html"
                                title="Trợ lý thư ký"
                              >
                                Trợ lý thư ký
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-phat-trien-cong-nghe-ruby.35A95177.html"
                                title="CÔNG TY TNHH PHÁT TRIỂN CÔNG NGHỆ RUBY"
                                target="_blank"
                              >
                                CÔNG TY TNHH PHÁT TRIỂN CÔNG NGHỆ RUBY
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 15 Tr - 22 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/rgf-hr-agent-vietnam-co-ltd.35A63BED.html"
                              title="RGF HR Agent Vietnam Co., LTD"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot5/86765/67x67/142150rgf.jpg"
                                alt="RGF HR Agent Vietnam Co., LTD"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/84190-sales-insurance.35BB3492.html"
                                title="84190 - Sales - Insurance"
                              >
                                84190 - Sales - Insurance
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/rgf-hr-agent-vietnam-co-ltd.35A63BED.html"
                                title="RGF HR Agent Vietnam Co., LTD"
                                target="_blank"
                              >
                                RGF HR Agent Vietnam Co., LTD
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 25 Tr - 35 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/rgf-hr-agent-vietnam-co-ltd.35A63BED.html"
                              title="RGF HR Agent Vietnam Co., LTD"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot5/86765/67x67/142150rgf.jpg"
                                alt="RGF HR Agent Vietnam Co., LTD"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/84127-admin-cum-assistant-insurance.35BB348E.html"
                                title="84127 - Admin cum Assistant - Insurance"
                              >
                                84127 - Admin cum Assistant - Insurance
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/rgf-hr-agent-vietnam-co-ltd.35A63BED.html"
                                title="RGF HR Agent Vietnam Co., LTD"
                                target="_blank"
                              >
                                RGF HR Agent Vietnam Co., LTD
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 20 Tr - 25 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
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
            <div className="swiper-slide">
              <div className="inner">
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-viettel-cht.35A87FE7.html"
                              title="Công ty TNHH Viettel - CHT"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot9/235239/67x67/101926logo-viettel-idc-mau-1.png"
                                alt="Công ty TNHH Viettel - CHT"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-kinh-doanh-account-manager.35BB313F.html"
                                title="Chuyên viên Kinh doanh (Account Manager)"
                              >
                                Chuyên viên Kinh doanh (Account Manager)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-viettel-cht.35A87FE7.html"
                                title="Công ty TNHH Viettel - CHT"
                                target="_blank"
                              >
                                Công ty TNHH Viettel - CHT
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh | Hà Nội | Đà Nẵng</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/aeonmall-vietnam-co-ltd.35A75E45.html"
                              title="AEONMALL Vietnam Co., Ltd."
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot3/161093/67x67/143232aeonmall_corporation_logo-svg.png"
                                alt="AEONMALL Vietnam Co., Ltd."
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/leasing-executive-hcm-head-office-252.35BB2FDC.html"
                                title="Leasing Executive (HCM Head Office - 252)"
                              >
                                Leasing Executive (HCM Head Office - 252)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/aeonmall-vietnam-co-ltd.35A75E45.html"
                                title="AEONMALL Vietnam Co., Ltd."
                                target="_blank"
                              >
                                AEONMALL Vietnam Co., Ltd.
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 15 Tr - 20 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/esoft.35A85EB3.html"
                              title="Esoft "
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot9/226739/67x67/105335esoft_pos_rgb.png"
                                alt="Esoft "
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/senior-business-development-executive.35BB306A.html"
                                title="Senior Business Development Executive"
                              >
                                Senior Business Development Executive
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/esoft.35A85EB3.html"
                                title="Esoft "
                                target="_blank"
                              >
                                Esoft{" "}
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 22 Tr - 44 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-giao-duc-dai-duong.35A6E71C.html"
                              title="Công Ty CP Giáo Dục Đại Dương"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot8/130588/67x67/153940logooceanedu01.png"
                                alt="Công Ty CP Giáo Dục Đại Dương"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-ban-hang-ocean-edu-thai-binh-2.35BB3568.html"
                                title="Chuyên Viên Bán Hàng [Ocean Edu Thái Bình 2]"
                              >
                                Chuyên Viên Bán Hàng [Ocean Edu Thái Bình 2]
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-giao-duc-dai-duong.35A6E71C.html"
                                title="Công Ty CP Giáo Dục Đại Dương"
                                target="_blank"
                              >
                                Công Ty CP Giáo Dục Đại Dương
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 11 Tr - 13 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Thái Bình</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-giao-duc-dai-duong.35A6E71C.html"
                              title="Công Ty CP Giáo Dục Đại Dương"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot8/130588/67x67/153940logooceanedu01.png"
                                alt="Công Ty CP Giáo Dục Đại Dương"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-tu-van-tuyen-sinh-ocean-edu-thai-binh.35BB3569.html"
                                title="Chuyên Viên Tư Vấn Tuyển Sinh [Ocean Edu Thái Bình]"
                              >
                                Chuyên Viên Tư Vấn Tuyển Sinh [Ocean Edu Thái
                                Bình]
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-giao-duc-dai-duong.35A6E71C.html"
                                title="Công Ty CP Giáo Dục Đại Dương"
                                target="_blank"
                              >
                                Công Ty CP Giáo Dục Đại Dương
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 11 Tr - 13 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Thái Bình</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-giao-duc-dai-duong.35A6E71C.html"
                              title="Công Ty CP Giáo Dục Đại Dương"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot8/130588/67x67/153940logooceanedu01.png"
                                alt="Công Ty CP Giáo Dục Đại Dương"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-tu-van-ocean-edu-thai-binh.35BB3567.html"
                                title="Chuyên Viên Tư Vấn [Ocean Edu Thái Bình]"
                              >
                                Chuyên Viên Tư Vấn [Ocean Edu Thái Bình]
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-giao-duc-dai-duong.35A6E71C.html"
                                title="Công Ty CP Giáo Dục Đại Dương"
                                target="_blank"
                              >
                                Công Ty CP Giáo Dục Đại Dương
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 11 Tr - 13 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Thái Bình</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/tap-doan-y-te-amv.35A6AB8A.html"
                              title="Tập Đoàn Y Tế AMV"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot8/115338/67x67/1024261.jpg"
                                alt="Tập Đoàn Y Tế AMV"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-khoi-ho-tro-ban-hang-sale-admin.35BB348B.html"
                                title="Nhân viên khối Hỗ trợ bán hàng (Sale Admin)"
                              >
                                Nhân viên khối Hỗ trợ bán hàng (Sale Admin)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/tap-doan-y-te-amv.35A6AB8A.html"
                                title="Tập Đoàn Y Tế AMV"
                                target="_blank"
                              >
                                Tập Đoàn Y Tế AMV
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 8 Tr - 10 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-duoc-hau-giang.35A8A2B8.html"
                              title="Công ty Cổ phần Dược Hậu Giang"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot2/244152/67x67/155633duochaugiang_logo-002.jpg"
                                alt="Công ty Cổ phần Dược Hậu Giang"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/phien-dich-vien-ban-tong-giam-doc-board-of-management’s-interpreter.35BB348F.html"
                                title="Phiên Dịch Viên Ban Tổng Giám Đốc / Board Of Management’s  Interpreter"
                              >
                                Phiên Dịch Viên Ban Tổng Giám Đốc / Board Of
                                Management’s Interpreter
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-duoc-hau-giang.35A8A2B8.html"
                                title="Công ty Cổ phần Dược Hậu Giang"
                                target="_blank"
                              >
                                Công ty Cổ phần Dược Hậu Giang
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 18 Tr - 25 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Cần Thơ</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/heligate.35A8EDE5.html"
                              title="Heligate"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot7/263397/67x67/132642heli-logo.jpg"
                                alt="Heligate"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/ke-toan-truong-tu-3-nam-kinh-nghiem-lam-tu-thu-2-den-thu-6.35BB345B.html"
                                title="Kế Toán Trưởng - Từ 3 Năm Kinh Nghiệm (Làm Từ Thứ 2 Đến Thứ 6)"
                              >
                                Kế Toán Trưởng - Từ 3 Năm Kinh Nghiệm (Làm Từ
                                Thứ 2 Đến Thứ 6)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/heligate.35A8EDE5.html"
                                title="Heligate"
                                target="_blank"
                              >
                                Heligate
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 15 Tr - 20 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
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
            <div className="swiper-slide">
              <div className="inner">
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-mytour-viet-nam.35A7C755.html"
                              title="Công ty TNHH Mytour Việt Nam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot9/187989/67x67/132601logocb.png"
                                alt="Công ty TNHH Mytour Việt Nam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/sales-manager.35BB30B3.html"
                                title="Sales Manager"
                              >
                                Sales Manager
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-mytour-viet-nam.35A7C755.html"
                                title="Công ty TNHH Mytour Việt Nam"
                                target="_blank"
                              >
                                Công ty TNHH Mytour Việt Nam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 33 Tr - 44 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-happy-smart-furnishings-viet-nam.35A93EC2.html"
                              title="CÔNG TY TNHH HAPPY SMART FURNISHINGS (VIỆT NAM)"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot8/284098/67x67/150016logocongty-002.jpg"
                                alt="CÔNG TY TNHH HAPPY SMART FURNISHINGS (VIỆT NAM)"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/国际销售招聘-senior-international-sales.35BB30A7.html"
                                title="国际销售招聘 / Senior International Sales"
                              >
                                国际销售招聘 / Senior International Sales
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-happy-smart-furnishings-viet-nam.35A93EC2.html"
                                title="CÔNG TY TNHH HAPPY SMART FURNISHINGS (VIỆT NAM)"
                                target="_blank"
                              >
                                CÔNG TY TNHH HAPPY SMART FURNISHINGS (VIỆT NAM)
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 22 Tr - 44 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Bình Dương</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-canifa.35A66CA5.html"
                              title="Công ty Cổ phần CANIFA"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot7/99237/67x67/142131logocanifa07-2019.jpg"
                                alt="Công ty Cổ phần CANIFA"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/dai-dien-kinh-doanh-nhan-vien-kinh-doanh-kenh-ban-buon.35BB3070.html"
                                title="Đại diện Kinh doanh - Nhân viên Kinh doanh kênh bán buôn"
                              >
                                Đại diện Kinh doanh - Nhân viên Kinh doanh kênh
                                bán buôn
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-canifa.35A66CA5.html"
                                title="Công ty Cổ phần CANIFA"
                                target="_blank"
                              >
                                Công ty Cổ phần CANIFA
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-dr-homie-viet-nam.35A94C5D.html"
                              title="CÔNG TY TNHH DR.HOMIE VIỆT NAM"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot1/287581/67x67/101746z3845458212810_0c58a0319ea9ab9573be7e651257d275.jpg"
                                alt="CÔNG TY TNHH DR.HOMIE VIỆT NAM"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/content-marketing.35BAE725.html"
                                title="Content Marketing"
                              >
                                Content Marketing
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-dr-homie-viet-nam.35A94C5D.html"
                                title="CÔNG TY TNHH DR.HOMIE VIỆT NAM"
                                target="_blank"
                              >
                                CÔNG TY TNHH DR.HOMIE VIỆT NAM
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 10 Tr - 17 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-tu-van-suc-khoe-khanh-luong.35A7FC0D.html"
                              title="Công ty Cổ phần Tư vấn Sức Khỏe Khánh Lương"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot5/201485/67x67/105427capture.png"
                                alt="Công ty Cổ phần Tư vấn Sức Khỏe Khánh Lương"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-content.35BAE842.html"
                                title="Nhân viên Content"
                              >
                                Nhân viên Content
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-tu-van-suc-khoe-khanh-luong.35A7FC0D.html"
                                title="Công ty Cổ phần Tư vấn Sức Khỏe Khánh Lương"
                                target="_blank"
                              >
                                Công ty Cổ phần Tư vấn Sức Khỏe Khánh Lương
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 8 Tr - 15 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-tm-an-sinh.35A64082.html"
                              title="Công Ty TNHH TM AN SINH"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot8/87938/67x67/115706logoansrutgon-1.jpg"
                                alt="Công Ty TNHH TM AN SINH"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/ke-toan-thue.35BAE6F1.html"
                                title="Kế toán thuế"
                              >
                                Kế toán thuế
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-tm-an-sinh.35A64082.html"
                                title="Công Ty TNHH TM AN SINH"
                                target="_blank"
                              >
                                Công Ty TNHH TM AN SINH
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 12 Tr - 15 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/lixil-global-manufacturing-vietnam.35A67010.html"
                              title="LIXIL Global Manufacturing Vietnam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot2/100112/67x67/112823lixil_logo_strap_vertical_aw_pantone_w1280.jpg"
                                alt="LIXIL Global Manufacturing Vietnam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-ke-hoach-san-xuat-biet-tieng-nhat.35BB3457.html"
                                title="NHÂN VIÊN KẾ HOẠCH SẢN XUẤT BIẾT TIẾNG NHẬT"
                              >
                                NHÂN VIÊN KẾ HOẠCH SẢN XUẤT BIẾT TIẾNG NHẬT
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/lixil-global-manufacturing-vietnam.35A67010.html"
                                title="LIXIL Global Manufacturing Vietnam"
                                target="_blank"
                              >
                                LIXIL Global Manufacturing Vietnam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 8 Tr - 14 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Đồng Nai</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-thoi-trang-yody.35A867AF.html"
                              title="Công ty Cổ phần Thời Trang YODY"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot9/229039/67x67/153545logongangvangxanhpng.png"
                                alt="Công ty Cổ phần Thời Trang YODY"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/marketing-admin-cum-assistant.35BB3452.html"
                                title="Marketing Admin cum Assistant"
                              >
                                Marketing Admin cum Assistant
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-thoi-trang-yody.35A867AF.html"
                                title="Công ty Cổ phần Thời Trang YODY"
                                target="_blank"
                              >
                                Công ty Cổ phần Thời Trang YODY
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Trên 14 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-che-bien-thuc-pham-olam-viet-nam.35A78F67.html"
                              title="Công ty TNHH Chế Biến Thực Phẩm Olam Việt Nam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot1/173671/67x67/181717ofi_share_logo.png"
                                alt="Công ty TNHH Chế Biến Thực Phẩm Olam Việt Nam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/hr-staff-long-thanh.35BB343C.html"
                                title="HR staff - Long Thành"
                              >
                                HR staff - Long Thành
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-che-bien-thuc-pham-olam-viet-nam.35A78F67.html"
                                title="Công ty TNHH Chế Biến Thực Phẩm Olam Việt Nam"
                                target="_blank"
                              >
                                Công ty TNHH Chế Biến Thực Phẩm Olam Việt Nam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 8 Tr - 10 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Đồng Nai</p>
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
            <div className="swiper-slide">
              <div className="inner">
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/abbott-laboratories.35A4FE0A.html"
                              title="Abbott Laboratories"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot6/5386/67x67/144127a_sig_vert_2c_bk_jpg.jpg"
                                alt="Abbott Laboratories"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/giam-sat-ban-hang-kenh-mt-mt-district-sales-manager.35BB3022.html"
                                title="Giám Sát Bán Hàng Kênh MT (MT District Sales Manager)"
                              >
                                Giám Sát Bán Hàng Kênh MT (MT District Sales
                                Manager)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/abbott-laboratories.35A4FE0A.html"
                                title="Abbott Laboratories"
                                target="_blank"
                              >
                                Abbott Laboratories
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh | Bình Dương | Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/careerbuilder.35A4E9A9.html"
                              title="CareerBuilder"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employers/169/67x67/103457cb.png"
                                alt="CareerBuilder"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/account-manager-ha-noi.35BB2930.html"
                                title="Account Manager (Hà Nội)"
                              >
                                Account Manager (Hà Nội)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/careerbuilder.35A4E9A9.html"
                                title="CareerBuilder"
                                target="_blank"
                              >
                                CareerBuilder
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/chi-nhanh-tong-cong-ty-chuyen-phat-nhanh-buu-dien-cong-ty-co-phan-tai-thanh-pho-ho-chi-minh.35A8887F.html"
                              title="CHI NHÁNH TỔNG CÔNG TY CHUYỂN PHÁT NHANH BƯU ĐIỆN - CÔNG TY CỔ PHẦN TẠI THÀNH PHỐ HỒ CHÍ MINH"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot9/237439/67x67/144912logo.png"
                                alt="CHI NHÁNH TỔNG CÔNG TY CHUYỂN PHÁT NHANH BƯU ĐIỆN - CÔNG TY CỔ PHẦN TẠI THÀNH PHỐ HỒ CHÍ MINH"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-kinh-doanh-sales-tai-ho-chi-minh-tan-binh-t-01-2023.35BB2FC6.html"
                                title="Nhân Viên Kinh Doanh/Sales Tại Hồ Chí Minh (Tân Bình T.01 2023)"
                              >
                                Nhân Viên Kinh Doanh/Sales Tại Hồ Chí Minh (Tân
                                Bình T.01 2023)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/chi-nhanh-tong-cong-ty-chuyen-phat-nhanh-buu-dien-cong-ty-co-phan-tai-thanh-pho-ho-chi-minh.35A8887F.html"
                                title="CHI NHÁNH TỔNG CÔNG TY CHUYỂN PHÁT NHANH BƯU ĐIỆN - CÔNG TY CỔ PHẦN TẠI THÀNH PHỐ HỒ CHÍ MINH"
                                target="_blank"
                              >
                                CHI NHÁNH TỔNG CÔNG TY CHUYỂN PHÁT NHANH BƯU
                                ĐIỆN - CÔNG TY CỔ PHẦN TẠI THÀNH PHỐ HỒ CHÍ MINH
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 6 Tr - 30 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-blueseed.35A7464A.html"
                              title="Công Ty Cổ phần Blueseed"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot4/154954/67x67/15421711111.jpg"
                                alt="Công Ty Cổ phần Blueseed"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/senir-digital-media-planner.35BAE708.html"
                                title="Senir Digital Media Planner"
                              >
                                Senir Digital Media Planner
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-blueseed.35A7464A.html"
                                title="Công Ty Cổ phần Blueseed"
                                target="_blank"
                              >
                                Công Ty Cổ phần Blueseed
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/magna-management-asia-mma.35A83E69.html"
                              title="MAGNA MANAGEMENT ASIA (MMA)"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot3/218473/67x67/161053logomaa-red.png"
                                alt="MAGNA MANAGEMENT ASIA (MMA)"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/project-costing-supervisor.35BAE8DC.html"
                                title="Project Costing Supervisor"
                              >
                                Project Costing Supervisor
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/magna-management-asia-mma.35A83E69.html"
                                title="MAGNA MANAGEMENT ASIA (MMA)"
                                target="_blank"
                              >
                                MAGNA MANAGEMENT ASIA (MMA)
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dai-thuan.35A7496D.html"
                              title="CÔNG TY CỔ PHẦN ĐẠI THUẬN"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/logo-default.png"
                                alt="CÔNG TY CỔ PHẦN ĐẠI THUẬN"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/marketing-project-manager.35BAE899.html"
                                title="Marketing Project Manager"
                              >
                                Marketing Project Manager
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dai-thuan.35A7496D.html"
                                title="CÔNG TY CỔ PHẦN ĐẠI THUẬN"
                                target="_blank"
                              >
                                CÔNG TY CỔ PHẦN ĐẠI THUẬN
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/indochina-international-education-development-corporation.35A6E46E.html"
                              title="Indochina International Education Development Corporation"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot2/129902/67x67/81224logo-iedg-03.jpg"
                                alt="Indochina International Education Development Corporation"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/talent-acquisition-specialist-chuyen-vien-tuyen-dung.35BB3436.html"
                                title="Talent Acquisition Specialist / Chuyên Viên Tuyển Dụng"
                              >
                                Talent Acquisition Specialist / Chuyên Viên
                                Tuyển Dụng
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/indochina-international-education-development-corporation.35A6E46E.html"
                                title="Indochina International Education Development Corporation"
                                target="_blank"
                              >
                                Indochina International Education Development
                                Corporation
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-chung-khoan-vps.35A71AE2.html"
                              title="Công Ty CP Chứng Khoán VPS"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/logo-default.png"
                                alt="Công Ty CP Chứng Khoán VPS"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/thu-ky-ban-tong-giam-doc.35BAE69B.html"
                                title="Thư Ký Ban Tổng Giám Đốc"
                              >
                                Thư Ký Ban Tổng Giám Đốc
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-chung-khoan-vps.35A71AE2.html"
                                title="Công Ty CP Chứng Khoán VPS"
                                target="_blank"
                              >
                                Công Ty CP Chứng Khoán VPS
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/xp-power-vietnam.35A61A99.html"
                              title="XP Power  Vietnam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employers/78233/67x67/112640xp_logo_black_web.jpg"
                                alt="XP Power  Vietnam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/eco-transition-specialist-engineering-change-order-1-year-contract.35BB13B5.html"
                                title="ECO & Transition Specialist (Engineering Change Order) - 1 year contract"
                              >
                                ECO &amp; Transition Specialist (Engineering
                                Change Order) - 1 year contract
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/xp-power-vietnam.35A61A99.html"
                                title="XP Power  Vietnam"
                                target="_blank"
                              >
                                XP Power Vietnam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Bình Dương</p>
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
            <div className="swiper-slide">
              <div className="inner">
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-tap-doan-hoa-phat.35A8CFD7.html"
                              title="CÔNG TY CỔ PHẦN TẬP ĐOÀN HÒA PHÁT"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot3/255703/67x67/104342logo-1.png"
                                alt="CÔNG TY CỔ PHẦN TẬP ĐOÀN HÒA PHÁT"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/quan-ly-du-an-chuyen-doi-so.35BAE1AF.html"
                                title="Quản Lý Dự Án Chuyển Đổi Số"
                              >
                                Quản Lý Dự Án Chuyển Đổi Số
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-tap-doan-hoa-phat.35A8CFD7.html"
                                title="CÔNG TY CỔ PHẦN TẬP ĐOÀN HÒA PHÁT"
                                target="_blank"
                              >
                                CÔNG TY CỔ PHẦN TẬP ĐOÀN HÒA PHÁT
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/akati-wood-vietnam-co-ltd.35A5B0F8.html"
                              title="Akati Wood (Vietnam) Co. Ltd"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employers/51192/67x67/93739aaaaaaaaaa.jpg"
                                alt="Akati Wood (Vietnam) Co. Ltd"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/sales-executive-–-furniture-material-division.35BAE1BD.html"
                                title="Sales Executive – Furniture Material Division"
                              >
                                Sales Executive – Furniture Material Division
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/akati-wood-vietnam-co-ltd.35A5B0F8.html"
                                title="Akati Wood (Vietnam) Co. Ltd"
                                target="_blank"
                              >
                                Akati Wood (Vietnam) Co. Ltd
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 8 Tr - 12 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Bình Dương</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-tap-doan-tan-long.35A83EB7.html"
                              title="Công Ty CP Tập Đoàn Tân Long"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot1/218551/67x67/165345logo.jpg"
                                alt="Công Ty CP Tập Đoàn Tân Long"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-kinh-doanh-khach-hang-doanh-nghiep.35BAE1A3.html"
                                title="NHÂN VIÊN KINH DOANH KHÁCH HÀNG DOANH NGHIỆP"
                              >
                                NHÂN VIÊN KINH DOANH KHÁCH HÀNG DOANH NGHIỆP
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-tap-doan-tan-long.35A83EB7.html"
                                title="Công Ty CP Tập Đoàn Tân Long"
                                target="_blank"
                              >
                                Công Ty CP Tập Đoàn Tân Long
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-cong-nghe-thuong-mai-va-dich-vu-tri-nghia.35A942E7.html"
                              title="Công ty TNHH Công nghệ, Thương mại và Dịch vụ Trí Nghĩa"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot9/285159/67x67/111117logotringhia.jpg"
                                alt="Công ty TNHH Công nghệ, Thương mại và Dịch vụ Trí Nghĩa"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-kinh-doanh.35BAE7CA.html"
                                title="Nhân viên Kinh doanh"
                              >
                                Nhân viên Kinh doanh
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-cong-nghe-thuong-mai-va-dich-vu-tri-nghia.35A942E7.html"
                                title="Công ty TNHH Công nghệ, Thương mại và Dịch vụ Trí Nghĩa"
                                target="_blank"
                              >
                                Công ty TNHH Công nghệ, Thương mại và Dịch vụ
                                Trí Nghĩa
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 20 Tr - 30 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-peroma-viet-nam.35A7F023.html"
                              title="Công Ty TNHH PEROMA Việt Nam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot5/198435/67x67/152427screenshot_1589596905.png"
                                alt="Công Ty TNHH PEROMA Việt Nam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/truong-nhom-marketing-nganh-thuc-pham-my-pham.35BAE883.html"
                                title="TRƯỞNG NHÓM MARKETING ( Ngành Thực Phẩm & Mỹ Phẩm)"
                              >
                                TRƯỞNG NHÓM MARKETING ( Ngành Thực Phẩm &amp; Mỹ
                                Phẩm)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-peroma-viet-nam.35A7F023.html"
                                title="Công Ty TNHH PEROMA Việt Nam"
                                target="_blank"
                              >
                                Công Ty TNHH PEROMA Việt Nam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Long An</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-phat-trien-phu-my-hung.35A78FBA.html"
                              title="Công ty TNHH Phát triển Phú Mỹ Hưng"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot4/173754/67x67/93003phumyhung-logo.jpg"
                                alt="Công ty TNHH Phát triển Phú Mỹ Hưng"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/marketing-officer.35BAE830.html"
                                title="MARKETING OFFICER"
                              >
                                MARKETING OFFICER
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-phat-trien-phu-my-hung.35A78FBA.html"
                                title="Công ty TNHH Phát triển Phú Mỹ Hưng"
                                target="_blank"
                              >
                                Công ty TNHH Phát triển Phú Mỹ Hưng
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-giao-duc-jaxtina.35A86E54.html"
                              title="CÔNG TY CỔ PHẦN GIÁO DỤC JAXTINA"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot0/230740/67x67/1155495f8f7072-b39b-11e7-a188-56c566ee3692.png"
                                alt="CÔNG TY CỔ PHẦN GIÁO DỤC JAXTINA"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-sales-admin.35BB13C1.html"
                                title="Nhân Viên Sales Admin"
                              >
                                Nhân Viên Sales Admin
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-giao-duc-jaxtina.35A86E54.html"
                                title="CÔNG TY CỔ PHẦN GIÁO DỤC JAXTINA"
                                target="_blank"
                              >
                                CÔNG TY CỔ PHẦN GIÁO DỤC JAXTINA
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-nagakawa.35A78CA6.html"
                              title="Công ty CP Nagakawa"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot6/172966/67x67/101455nagakawa-002.png"
                                alt="Công ty CP Nagakawa"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/truong-nhom-tuyen-dung.35BB1300.html"
                                title="Trưởng Nhóm Tuyển Dụng"
                              >
                                Trưởng Nhóm Tuyển Dụng
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-nagakawa.35A78CA6.html"
                                title="Công ty CP Nagakawa"
                                target="_blank"
                              >
                                Công ty CP Nagakawa
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hưng Yên | Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cpdt-ha-tang-kcn-bao-minh.35A8BDE7.html"
                              title="Công ty CPĐT hạ tầng KCN Bảo Minh"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot1/251111/67x67/170857baominhip_logo.png"
                                alt="Công ty CPĐT hạ tầng KCN Bảo Minh"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/hanh-chinh-nhan-su.35BB138E.html"
                                title="Hành Chính Nhân Sự"
                              >
                                Hành Chính Nhân Sự
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cpdt-ha-tang-kcn-bao-minh.35A8BDE7.html"
                                title="Công ty CPĐT hạ tầng KCN Bảo Minh"
                                target="_blank"
                              >
                                Công ty CPĐT hạ tầng KCN Bảo Minh
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Thái Bình</p>
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
            <div className="swiper-slide">
              <div className="inner">
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-rita-vo.35A56516.html"
                              title="Công Ty TNHH Rita Võ"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employers/31766/67x67/140020logo-ritavo-extrabold-fa-1_-_copy_1572405716.png"
                                alt="Công Ty TNHH Rita Võ"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-kinh-doanh-o-to-tai-thu-nhap-len-den-30tr.35BB1036.html"
                                title="NHÂN VIÊN KINH DOANH  Ô TÔ TẢI - THU NHẬP LÊN ĐẾN 30TR"
                              >
                                NHÂN VIÊN KINH DOANH Ô TÔ TẢI - THU NHẬP LÊN ĐẾN
                                30TR
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-rita-vo.35A56516.html"
                                title="Công Ty TNHH Rita Võ"
                                target="_blank"
                              >
                                Công Ty TNHH Rita Võ
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 10 Tr - 30 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-dau-tu-bat-dong-san-le-pham.35A93EE9.html"
                              title="CÔNG TY TNHH ĐẦU TƯ BẤT ĐỘNG SẢN LÊ PHẠM"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot7/284137/67x67/165618lephamreal.png"
                                alt="CÔNG TY TNHH ĐẦU TƯ BẤT ĐỘNG SẢN LÊ PHẠM"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-kinh-doanh-bat-dong-san.35BB2A5E.html"
                                title="NHÂN VIÊN KINH DOANH BẤT ĐỘNG SẢN"
                              >
                                NHÂN VIÊN KINH DOANH BẤT ĐỘNG SẢN
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-dau-tu-bat-dong-san-le-pham.35A93EE9.html"
                                title="CÔNG TY TNHH ĐẦU TƯ BẤT ĐỘNG SẢN LÊ PHẠM"
                                target="_blank"
                              >
                                CÔNG TY TNHH ĐẦU TƯ BẤT ĐỘNG SẢN LÊ PHẠM
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-bao-hiem-nhan-tho-aia-viet-nam.35A7C3DD.html"
                              title="Công ty TNHH Bảo Hiểm Nhân Thọ AIA Việt Nam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot1/187101/67x67/154806logo.png"
                                alt="Công ty TNHH Bảo Hiểm Nhân Thọ AIA Việt Nam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/ha-tinh-chuyen-vien-tu-van-tai-chinh-cap-cao-kenh-hop-tac-ngan-hang-vpbank.35BB1B95.html"
                                title="(Hà Tĩnh) Chuyên Viên Tư Vấn Tài Chính Cấp Cao - Kênh hợp tác Ngân hàng VPBank"
                              >
                                (Hà Tĩnh) Chuyên Viên Tư Vấn Tài Chính Cấp Cao -
                                Kênh hợp tác Ngân hàng VPBank
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-bao-hiem-nhan-tho-aia-viet-nam.35A7C3DD.html"
                                title="Công ty TNHH Bảo Hiểm Nhân Thọ AIA Việt Nam"
                                target="_blank"
                              >
                                Công ty TNHH Bảo Hiểm Nhân Thọ AIA Việt Nam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 12,5 Tr - 25 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Tĩnh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/fpt-telecom-chi-nhanh-cong-ty-co-phan-vien-thong-fpt.35A8CF49.html"
                              title="FPT Telecom - Chi nhánh Công ty Cổ Phần Viễn Thông FPT"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot1/255561/67x67/114116100334240.png"
                                alt="FPT Telecom - Chi nhánh Công ty Cổ Phần Viễn Thông FPT"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/can-bo-kinh-doanh-fpt-telecom-quang-ninh.35BAE882.html"
                                title="Cán bộ kinh doanh - FPT Telecom Quảng Ninh"
                              >
                                Cán bộ kinh doanh - FPT Telecom Quảng Ninh
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/fpt-telecom-chi-nhanh-cong-ty-co-phan-vien-thong-fpt.35A8CF49.html"
                                title="FPT Telecom - Chi nhánh Công ty Cổ Phần Viễn Thông FPT"
                                target="_blank"
                              >
                                FPT Telecom - Chi nhánh Công ty Cổ Phần Viễn
                                Thông FPT
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 7 Tr - 30 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Quảng Ninh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-sakura-beauty-vietnam.35A800CB.html"
                              title="Công Ty TNHH Sakura Beauty Vietnam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot9/202699/67x67/90728logosakura-01.png"
                                alt="Công Ty TNHH Sakura Beauty Vietnam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/video-editor.35BAE765.html"
                                title="Video Editor."
                              >
                                Video Editor.
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-sakura-beauty-vietnam.35A800CB.html"
                                title="Công Ty TNHH Sakura Beauty Vietnam"
                                target="_blank"
                              >
                                Công Ty TNHH Sakura Beauty Vietnam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 8 Tr - 15 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-mtv-che-tac-va-kinh-doanh-trang-suc-pnj.35A83DF2.html"
                              title="CÔNG TY TNHH MTV CHẾ TÁC VÀ KINH DOANH TRANG SỨC PNJ"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot4/218354/67x67/103212logopnjp.jpg"
                                alt="CÔNG TY TNHH MTV CHẾ TÁC VÀ KINH DOANH TRANG SỨC PNJ"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-cao-cap-ke-toan-ifrs.35BAE787.html"
                                title="CHUYÊN VIÊN CAO CẤP - KẾ TOÁN IFRS"
                              >
                                CHUYÊN VIÊN CAO CẤP - KẾ TOÁN IFRS
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-mtv-che-tac-va-kinh-doanh-trang-suc-pnj.35A83DF2.html"
                                title="CÔNG TY TNHH MTV CHẾ TÁC VÀ KINH DOANH TRANG SỨC PNJ"
                                target="_blank"
                              >
                                CÔNG TY TNHH MTV CHẾ TÁC VÀ KINH DOANH TRANG SỨC
                                PNJ
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 25 Tr - 35 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/talentnet-corporation.35A7D3A9.html"
                              title="Talentnet Corporation"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/logo-default.png"
                                alt="Talentnet Corporation"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/grab-hcm-d7-operation-coordinator-for-finance-lending.35BB133A.html"
                                title="GRAB HCM - D7 - Operation Coordinator for Finance Lending"
                              >
                                GRAB HCM - D7 - Operation Coordinator for
                                Finance Lending
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/talentnet-corporation.35A7D3A9.html"
                                title="Talentnet Corporation"
                                target="_blank"
                              >
                                Talentnet Corporation
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 15 Tr - 25 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-zto-vietnam.35A8CB2C.html"
                              title="CÔNG TY TNHH ZTO VIETNAM"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot8/254508/67x67/95439vn_logo.png"
                                alt="CÔNG TY TNHH ZTO VIETNAM"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-cham-soc-khach-hang.35BB1259.html"
                                title="Nhân viên chăm sóc khách hàng"
                              >
                                Nhân viên chăm sóc khách hàng
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-zto-vietnam.35A8CB2C.html"
                                title="CÔNG TY TNHH ZTO VIETNAM"
                                target="_blank"
                              >
                                CÔNG TY TNHH ZTO VIETNAM
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 8 Tr - 10 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-diana-unicharm.35A6E11B.html"
                              title="Công Ty Cổ Phần Diana Unicharm"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot1/129051/67x67/140745logodianaunicharm-2017-english.jpg"
                                alt="Công Ty Cổ Phần Diana Unicharm"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/hr-officer-di-lam-sau-tet.35BB1351.html"
                                title="HR Officer (Đi làm sau Tết)"
                              >
                                HR Officer (Đi làm sau Tết)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-diana-unicharm.35A6E11B.html"
                                title="Công Ty Cổ Phần Diana Unicharm"
                                target="_blank"
                              >
                                Công Ty Cổ Phần Diana Unicharm
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 15 Tr - 25 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
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
            <div className="swiper-slide">
              <div className="inner">
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dau-tu-vang-phu-quy.35A8604C.html"
                              title="CÔNG TY CỔ PHẦN ĐẦU TƯ VÀNG PHÚ QUÝ"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot8/227148/67x67/100314hnlkalcsqejuwsnnayua.jpg"
                                alt="CÔNG TY CỔ PHẦN ĐẦU TƯ VÀNG PHÚ QUÝ"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/tu-van-vien-ban-hang.35BB2B36.html"
                                title="Tư Vấn Viên Bán Hàng"
                              >
                                Tư Vấn Viên Bán Hàng
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dau-tu-vang-phu-quy.35A8604C.html"
                                title="CÔNG TY CỔ PHẦN ĐẦU TƯ VÀNG PHÚ QUÝ"
                                target="_blank"
                              >
                                CÔNG TY CỔ PHẦN ĐẦU TƯ VÀNG PHÚ QUÝ
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 10 Tr - 20 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-tm-dv-sagen-group.35A81B19.html"
                              title="CÔNG TY CỔ PHẦN TM & DV SAGEN GROUP"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot3/209433/67x67/123949logoctysagen.png"
                                alt="CÔNG TY CỔ PHẦN TM & DV SAGEN GROUP"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/key-account-manager-nganh-me-va-be.35BB2A90.html"
                                title="Key Account Manager (ngành Mẹ và bé)"
                              >
                                Key Account Manager (ngành Mẹ và bé)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-tm-dv-sagen-group.35A81B19.html"
                                title="CÔNG TY CỔ PHẦN TM & DV SAGEN GROUP"
                                target="_blank"
                              >
                                CÔNG TY CỔ PHẦN TM &amp; DV SAGEN GROUP
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 25 Tr - 35 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/pcb-graphtech-viet-nam.35A82EAB.html"
                              title="PCB GraphTech Việt Nam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot3/214443/67x67/105604capture.jpg"
                                alt="PCB GraphTech Việt Nam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/sales-executive-software-solutions-b2b.35BADF93.html"
                                title="Sales Executive - Software Solutions (B2B)"
                              >
                                Sales Executive - Software Solutions (B2B)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/pcb-graphtech-viet-nam.35A82EAB.html"
                                title="PCB GraphTech Việt Nam"
                                target="_blank"
                              >
                                PCB GraphTech Việt Nam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-tap-doan-tima.35A82BF9.html"
                              title="Công ty Cổ phần Tập đoàn TIMA"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot3/213753/67x67/1721390001.jpg"
                                alt="Công ty Cổ phần Tập đoàn TIMA"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-phat-trien-thuong-hieu-tuyen-dung-luong-15tr-20tr.35BAE74F.html"
                                title="CHUYÊN VIÊN PHÁT TRIỂN THƯƠNG HIỆU TUYỂN DỤNG - LƯƠNG 15TR - 20TR"
                              >
                                CHUYÊN VIÊN PHÁT TRIỂN THƯƠNG HIỆU TUYỂN DỤNG -
                                LƯƠNG 15TR - 20TR
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-tap-doan-tima.35A82BF9.html"
                                title="Công ty Cổ phần Tập đoàn TIMA"
                                target="_blank"
                              >
                                Công ty Cổ phần Tập đoàn TIMA
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 15 Tr - 20 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-quoc-te-nevada.35A8207D.html"
                              title="CÔNG TY TNHH QUỐC TẾ NEVADA"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot3/210813/67x67/92316logoneva.png"
                                alt="CÔNG TY TNHH QUỐC TẾ NEVADA"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/hn-nhan-vien-hoc-viec-zalo-ads-tham-my-vien-ko-yeu-cau-kinh-nghiem.35BAE78F.html"
                                title="[HN] Nhân Viên Học Việc Zalo Ads - Thẩm Mỹ Viện (Ko Yêu Cầu Kinh Nghiệm)"
                              >
                                [HN] Nhân Viên Học Việc Zalo Ads - Thẩm Mỹ Viện
                                (Ko Yêu Cầu Kinh Nghiệm)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-quoc-te-nevada.35A8207D.html"
                                title="CÔNG TY TNHH QUỐC TẾ NEVADA"
                                target="_blank"
                              >
                                CÔNG TY TNHH QUỐC TẾ NEVADA
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 5,5 Tr - 6 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/sunhouse-mien-nam.35A63105.html"
                              title=" SUNHOUSE MIỀN NAM"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot3/83973/67x67/133737logocty.png"
                                alt=" SUNHOUSE MIỀN NAM"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-kinh-doanh-kenh-gt.35BAE753.html"
                                title="Nhân viên kinh doanh - Kênh GT"
                              >
                                Nhân viên kinh doanh - Kênh GT
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/sunhouse-mien-nam.35A63105.html"
                                title=" SUNHOUSE MIỀN NAM"
                                target="_blank"
                              >
                                {" "}
                                SUNHOUSE MIỀN NAM
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 14 Tr - 20 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Gia Lai</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/classic-fine-foods.35A515DF.html"
                              title="Classic Fine Foods "
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employers/11487/67x67/160819cfftag_cfftagcmyk.jpg"
                                alt="Classic Fine Foods "
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/customer-service-officer.35BB12FE.html"
                                title="CUSTOMER SERVICE OFFICER"
                              >
                                CUSTOMER SERVICE OFFICER
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/classic-fine-foods.35A515DF.html"
                                title="Classic Fine Foods "
                                target="_blank"
                              >
                                Classic Fine Foods{" "}
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-thuong-mai-viet-le.35A8C5A7.html"
                              title="CÔNG TY TNHH THƯƠNG MẠI VIỆT LÊ"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot5/253095/67x67/171959z3283365032249_03ddebdacc2eae8e7a10f93ada19e518.jpg"
                                alt="CÔNG TY TNHH THƯƠNG MẠI VIỆT LÊ"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-kho-quy-chi-nhanh-hcm.35BB1318.html"
                                title="Nhân viên Kho- Quỹ Chi nhánh HCM"
                              >
                                Nhân viên Kho- Quỹ Chi nhánh HCM
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-thuong-mai-viet-le.35A8C5A7.html"
                                title="CÔNG TY TNHH THƯƠNG MẠI VIỆT LÊ"
                                target="_blank"
                              >
                                CÔNG TY TNHH THƯƠNG MẠI VIỆT LÊ
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 8 Tr - 10 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dv-cn-tin-hoc-hpt.35A6336C.html"
                              title="Công Ty Cổ Phần DV CN Tin Học HPT"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot8/84588/67x67/104616hpt_13041_2011_08_26.gif"
                                alt="Công Ty Cổ Phần DV CN Tin Học HPT"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-tuyen-dung.35BB12C2.html"
                                title="Chuyên Viên Tuyển Dụng"
                              >
                                Chuyên Viên Tuyển Dụng
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dv-cn-tin-hoc-hpt.35A6336C.html"
                                title="Công Ty Cổ Phần DV CN Tin Học HPT"
                                target="_blank"
                              >
                                Công Ty Cổ Phần DV CN Tin Học HPT
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
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
            <div className="swiper-slide">
              <div className="inner">
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/openasia-group.35A64B5E.html"
                              title="Openasia Group"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot8/90718/67x67/140845openasia.png"
                                alt="Openasia Group"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/tam-son-hcm-sales-staff-nhan-vien-ban-hang-thoi-trang-my-pham-trang-suc-cao-cap.35BADFAE.html"
                                title="[TAM SON] HCM - Sales Staff (Nhân Viên Bán Hàng Thời Trang, Mỹ Phẩm, Trang Sức Cao Cấp)"
                              >
                                [TAM SON] HCM - Sales Staff (Nhân Viên Bán Hàng
                                Thời Trang, Mỹ Phẩm, Trang Sức Cao Cấp)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/openasia-group.35A64B5E.html"
                                title="Openasia Group"
                                target="_blank"
                              >
                                Openasia Group
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-xnk-hoa-chat-thiet-bi-kim-nguu.35A89032.html"
                              title="Công Ty CP XNK Hóa Chất & Thiết Bị Kim Ngưu"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot0/239410/67x67/95400logo_vietchem.png"
                                alt="Công Ty CP XNK Hóa Chất & Thiết Bị Kim Ngưu"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-kinh-doanh-van-tai.35BADF5A.html"
                                title="Nhân viên kinh doanh vận tải"
                              >
                                Nhân viên kinh doanh vận tải
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-xnk-hoa-chat-thiet-bi-kim-nguu.35A89032.html"
                                title="Công Ty CP XNK Hóa Chất & Thiết Bị Kim Ngưu"
                                target="_blank"
                              >
                                Công Ty CP XNK Hóa Chất &amp; Thiết Bị Kim Ngưu
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 10 Tr - 12 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hưng Yên</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/heineken-vietnam.35A66A42.html"
                              title="HEINEKEN Vietnam "
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot6/98626/67x67/155027logohnk-vn.png"
                                alt="HEINEKEN Vietnam "
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/dai-dien-tieu-thu-sales-representatives-khu-vuc-ha-noi-on-trade.35BADF10.html"
                                title="Đại diện tiêu thụ (Sales Representatives)- Khu vực Hà Nội  (On Trade)"
                              >
                                Đại diện tiêu thụ (Sales Representatives)- Khu
                                vực Hà Nội (On Trade)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/heineken-vietnam.35A66A42.html"
                                title="HEINEKEN Vietnam "
                                target="_blank"
                              >
                                HEINEKEN Vietnam{" "}
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-vintage-collection.35A91D9A.html"
                              title="CÔNG TY TNHH VINTAGE COLLECTION"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot0/275610/67x67/110310logo-004.jpg"
                                alt="CÔNG TY TNHH VINTAGE COLLECTION"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/digital-and-marketing-executive.35BAE75C.html"
                                title="Digital And Marketing Executive"
                              >
                                Digital And Marketing Executive
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-vintage-collection.35A91D9A.html"
                                title="CÔNG TY TNHH VINTAGE COLLECTION"
                                target="_blank"
                              >
                                CÔNG TY TNHH VINTAGE COLLECTION
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/ngan-hang-tmcp-viet-a.35A50067.html"
                              title="Ngân Hàng TMCP  Việt Á "
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot1/5991/67x67/163548logochinhthuc.jpg"
                                alt="Ngân Hàng TMCP  Việt Á "
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-quan-he-cong-chung-hoi-so-ha-dong.35BAE8FA.html"
                                title="Chuyên viên Quan hệ công chúng (Hội sở Hà Đông)"
                              >
                                Chuyên viên Quan hệ công chúng (Hội sở Hà Đông)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/ngan-hang-tmcp-viet-a.35A50067.html"
                                title="Ngân Hàng TMCP  Việt Á "
                                target="_blank"
                              >
                                Ngân Hàng TMCP Việt Á{" "}
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-trong-dong-viet-nam.35A7CBBF.html"
                              title="CÔNG TY TNHH TRỐNG ĐỒNG VIỆT NAM"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot9/189119/67x67/91039logo.png"
                                alt="CÔNG TY TNHH TRỐNG ĐỒNG VIỆT NAM"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-kinh-doanh-tu-van-tiec-khong-phai-tim-kiem-khach-hang-khong-ap-kpi.35BAE863.html"
                                title="Nhân viên Kinh doanh tư vấn tiệc, không phải tìm kiếm khách hàng,Không áp KPI"
                              >
                                Nhân viên Kinh doanh tư vấn tiệc, không phải tìm
                                kiếm khách hàng,Không áp KPI
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-trong-dong-viet-nam.35A7CBBF.html"
                                title="CÔNG TY TNHH TRỐNG ĐỒNG VIỆT NAM"
                                target="_blank"
                              >
                                CÔNG TY TNHH TRỐNG ĐỒNG VIỆT NAM
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 8 Tr - 12 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Nam Định</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/tap-doan-brg-–-cong-ty-cp.35A6BF4B.html"
                              title="TẬP ĐOÀN BRG – CÔNG TY CP"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot5/120395/67x67/104438logo_brggroup.png"
                                alt="TẬP ĐOÀN BRG – CÔNG TY CP"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/truong-phong-nhan-su-mang-gon-da-nang.35BB13E9.html"
                                title="Trưởng phòng Nhân sự (Mảng Gôn - Đà Nẵng)"
                              >
                                Trưởng phòng Nhân sự (Mảng Gôn - Đà Nẵng)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/tap-doan-brg-–-cong-ty-cp.35A6BF4B.html"
                                title="TẬP ĐOÀN BRG – CÔNG TY CP"
                                target="_blank"
                              >
                                TẬP ĐOÀN BRG – CÔNG TY CP
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Đà Nẵng</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-reeracoen-viet-nam.35A7932C.html"
                              title="Công Ty TNHH Reeracoen Việt Nam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot6/174636/67x67/121614reeracoenlogonobackground.png"
                                alt="Công Ty TNHH Reeracoen Việt Nam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/my-phuoc-3-binh-duong-back-office-manager-n2-21795.35BB1339.html"
                                title="[Mỹ Phước 3, Bình Dương] Back office Manager(N2) (21795)"
                              >
                                [Mỹ Phước 3, Bình Dương] Back office Manager(N2)
                                (21795)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-reeracoen-viet-nam.35A7932C.html"
                                title="Công Ty TNHH Reeracoen Việt Nam"
                                target="_blank"
                              >
                                Công Ty TNHH Reeracoen Việt Nam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 23 Tr - 30 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Bình Dương</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-gamuda-land-hcmc.35A7A766.html"
                              title="Công ty Cổ phần Gamuda Land (HCMC)"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot4/179814/67x67/181747logo.png"
                                alt="Công ty Cổ phần Gamuda Land (HCMC)"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/senior-land-liaison-authority-executive.35BB13CA.html"
                                title="Senior Land, Liaison & Authority Executive"
                              >
                                Senior Land, Liaison &amp; Authority Executive
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-gamuda-land-hcmc.35A7A766.html"
                                title="Công ty Cổ phần Gamuda Land (HCMC)"
                                target="_blank"
                              >
                                Công ty Cổ phần Gamuda Land (HCMC)
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
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
            <div className="swiper-slide">
              <div className="inner">
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-rita-vo.35A56516.html"
                              title="Công Ty TNHH Rita Võ"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employers/31766/67x67/140020logo-ritavo-extrabold-fa-1_-_copy_1572405716.png"
                                alt="Công Ty TNHH Rita Võ"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/thanh-hoa-nhan-vien-tu-van-noi-that-cao-cap.35BB0F31.html"
                                title="[Thanh Hóa] Nhân viên tư vấn Nội thất cao cấp"
                              >
                                [Thanh Hóa] Nhân viên tư vấn Nội thất cao cấp
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-rita-vo.35A56516.html"
                                title="Công Ty TNHH Rita Võ"
                                target="_blank"
                              >
                                Công Ty TNHH Rita Võ
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 10 Tr - 20 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Thanh Hóa</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-phat-trien-cong-nghe-ruby.35A95177.html"
                              title="CÔNG TY TNHH PHÁT TRIỂN CÔNG NGHỆ RUBY"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot7/288887/67x67/135754303616232_585221469976439_8538905845861076163_n.png"
                                alt="CÔNG TY TNHH PHÁT TRIỂN CÔNG NGHỆ RUBY"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-chuyen-vien-ke-toan-ke-toan-truong.35BB1A2F.html"
                                title="Nhân viên / Chuyên viên Kế Toán (Kế toán trưởng )"
                              >
                                Nhân viên / Chuyên viên Kế Toán (Kế toán trưởng
                                )
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-phat-trien-cong-nghe-ruby.35A95177.html"
                                title="CÔNG TY TNHH PHÁT TRIỂN CÔNG NGHỆ RUBY"
                                target="_blank"
                              >
                                CÔNG TY TNHH PHÁT TRIỂN CÔNG NGHỆ RUBY
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 10 Tr - 15 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-bao-hiem-nhan-tho-aia-viet-nam.35A7C3DD.html"
                              title="Công ty TNHH Bảo Hiểm Nhân Thọ AIA Việt Nam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot1/187101/67x67/154806logo.png"
                                alt="Công ty TNHH Bảo Hiểm Nhân Thọ AIA Việt Nam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-tu-van-tai-chinh-bao-hiem-kenh-ngan-hang-vpbank-khu-vuc-tp-hcm.35BB22C2.html"
                                title="Chuyên Viên Tư Vấn Tài Chính Bảo Hiểm - Kênh Ngân Hàng VPBank [Khu Vực TP.HCM]"
                              >
                                Chuyên Viên Tư Vấn Tài Chính Bảo Hiểm - Kênh
                                Ngân Hàng VPBank [Khu Vực TP.HCM]
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-bao-hiem-nhan-tho-aia-viet-nam.35A7C3DD.html"
                                title="Công ty TNHH Bảo Hiểm Nhân Thọ AIA Việt Nam"
                                target="_blank"
                              >
                                Công ty TNHH Bảo Hiểm Nhân Thọ AIA Việt Nam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 12 Tr - 20 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-san-xuat-thuong-mai-dich-vu-da-nu-hoang.35A7C253.html"
                              title="CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI DỊCH VỤ ĐÁ NỮ HOÀNG"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot7/186707/67x67/111544a.png"
                                alt="CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI DỊCH VỤ ĐÁ NỮ HOÀNG"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-content-seo.35BAE884.html"
                                title="NHÂN VIÊN CONTENT SEO"
                              >
                                NHÂN VIÊN CONTENT SEO
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-san-xuat-thuong-mai-dich-vu-da-nu-hoang.35A7C253.html"
                                title="CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI DỊCH VỤ ĐÁ NỮ HOÀNG"
                                target="_blank"
                              >
                                CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI DỊCH VỤ ĐÁ NỮ
                                HOÀNG
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 8 Tr - 12 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-mediastep-software-viet-nam.35A8DDF9.html"
                              title="CÔNG TY TNHH MEDIASTEP SOFTWARE VIỆT NAM"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot1/259321/67x67/90719image001.png"
                                alt="CÔNG TY TNHH MEDIASTEP SOFTWARE VIỆT NAM"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/telesales-phan-mem-thu-nhap-10m.35BAE8E1.html"
                                title="Telesales PHẦN MÊM ( Thu nhập > 10M)"
                              >
                                Telesales PHẦN MÊM ( Thu nhập &gt; 10M)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-mediastep-software-viet-nam.35A8DDF9.html"
                                title="CÔNG TY TNHH MEDIASTEP SOFTWARE VIỆT NAM"
                                target="_blank"
                              >
                                CÔNG TY TNHH MEDIASTEP SOFTWARE VIỆT NAM
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 10 Tr - 40 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh | Đà Nẵng | Cần Thơ</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cn-cong-ty-tnhh-dv-tm-mesa.35A6FED0.html"
                              title="CN Công Ty TNHH DV & TM MESA"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot6/136656/67x67/150647logomesa-02-002.png"
                                alt="CN Công Ty TNHH DV & TM MESA"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-tiep-thi-thi-truong-tai-long-an.35BAE8DF.html"
                                title="Nhân Viên Tiếp Thị Thị Trường tại Long An"
                              >
                                Nhân Viên Tiếp Thị Thị Trường tại Long An
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cn-cong-ty-tnhh-dv-tm-mesa.35A6FED0.html"
                                title="CN Công Ty TNHH DV & TM MESA"
                                target="_blank"
                              >
                                CN Công Ty TNHH DV &amp; TM MESA
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 10 Tr - 18 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Long An</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-phat-trien-xay-dung-viet-nam-kien-hung.35A8B81A.html"
                              title="Công ty TNHH Phát triển xây dựng Việt Nam Kiến Hưng"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot6/249626/67x67/132208105409492_105374384564947_8313291022785879192_n.jpg"
                                alt="Công ty TNHH Phát triển xây dựng Việt Nam Kiến Hưng"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/tro-ly-giam-doc-du-an-biet-tieng-trung.35BB125B.html"
                                title="Trợ lý giám đốc dự án biết tiếng Trung"
                              >
                                Trợ lý giám đốc dự án biết tiếng Trung
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-phat-trien-xay-dung-viet-nam-kien-hung.35A8B81A.html"
                                title="Công ty TNHH Phát triển xây dựng Việt Nam Kiến Hưng"
                                target="_blank"
                              >
                                Công ty TNHH Phát triển xây dựng Việt Nam Kiến
                                Hưng
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 9 Tr - 12 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Bắc Ninh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/careerbuilder-s-client.35A90091.html"
                              title="CareerBuilder's Client"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/logo-default.png"
                                alt="CareerBuilder's Client"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/hr-admin-staff-quan-1-hcm.35BB126E.html"
                                title="HR-Admin Staff - quận 1 HCM"
                              >
                                HR-Admin Staff - quận 1 HCM
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/careerbuilder-s-client.35A90091.html"
                                title="CareerBuilder's Client"
                                target="_blank"
                              >
                                CareerBuilder's Client
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Lên đến 32 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-thang-may-otis-viet-nam.35A7D397.html"
                              title="Công Ty TNHH Thang Máy OTIS Việt Nam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot7/191127/67x67/133218logo.gif"
                                alt="Công Ty TNHH Thang Máy OTIS Việt Nam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/hotline-operator-cum-warehouse-keeper.35BB33C5.html"
                                title="Hotline Operator cum Warehouse Keeper"
                              >
                                Hotline Operator cum Warehouse Keeper
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-thang-may-otis-viet-nam.35A7D397.html"
                                title="Công Ty TNHH Thang Máy OTIS Việt Nam"
                                target="_blank"
                              >
                                Công Ty TNHH Thang Máy OTIS Việt Nam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
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
            <div className="swiper-slide">
              <div className="inner">
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-bao-hiem-nhan-tho-aia-viet-nam.35A7C3DD.html"
                              title="Công ty TNHH Bảo Hiểm Nhân Thọ AIA Việt Nam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot1/187101/67x67/154806logo.png"
                                alt="Công ty TNHH Bảo Hiểm Nhân Thọ AIA Việt Nam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/trang-bang-tay-ninh-chuyen-vien-tu-van-tai-chinh-bao-hiem-kenh-ngan-hang-ban-viet.35BB22C8.html"
                                title="[Trảng Bàng - Tây Ninh] Chuyên Viên Tư Vấn Tài Chính Bảo Hiểm - Kênh Ngân Hàng Bản Việt"
                              >
                                [Trảng Bàng - Tây Ninh] Chuyên Viên Tư Vấn Tài
                                Chính Bảo Hiểm - Kênh Ngân Hàng Bản Việt
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-bao-hiem-nhan-tho-aia-viet-nam.35A7C3DD.html"
                                title="Công ty TNHH Bảo Hiểm Nhân Thọ AIA Việt Nam"
                                target="_blank"
                              >
                                Công ty TNHH Bảo Hiểm Nhân Thọ AIA Việt Nam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 8 Tr - 20 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Tây Ninh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-coex-vina.35A95547.html"
                              title="CÔNG TY TNHH COEX VINA"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot3/289863/67x67/174640299202009_380683317579657_1322954410812826639_n.png"
                                alt="CÔNG TY TNHH COEX VINA"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-kinh-doanh-khach-hang-nuoc-ngoai.35BB2A13.html"
                                title="Chuyên Viên Kinh Doanh  - Khách Hàng Nước Ngoài"
                              >
                                Chuyên Viên Kinh Doanh - Khách Hàng Nước Ngoài
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-coex-vina.35A95547.html"
                                title="CÔNG TY TNHH COEX VINA"
                                target="_blank"
                              >
                                CÔNG TY TNHH COEX VINA
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 13,2 Tr - 18,7 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-pernod-ricard-viet-nam.35A68EC1.html"
                              title="Công Ty TNHH Pernod Ricard Việt Nam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot9/107969/67x67/180744logoprvn.jpg"
                                alt="Công Ty TNHH Pernod Ricard Việt Nam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-kinh-doanh-ruou-kenh-horeca.35BB294A.html"
                                title="Nhân viên kinh doanh rượu - Kênh Horeca"
                              >
                                Nhân viên kinh doanh rượu - Kênh Horeca
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-tnhh-pernod-ricard-viet-nam.35A68EC1.html"
                                title="Công Ty TNHH Pernod Ricard Việt Nam"
                                target="_blank"
                              >
                                Công Ty TNHH Pernod Ricard Việt Nam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 20 Tr - 25 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Lâm Đồng</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/fpt-telecom-chi-nhanh-cong-ty-co-phan-vien-thong-fpt.35A8CF49.html"
                              title="FPT Telecom - Chi nhánh Công ty Cổ Phần Viễn Thông FPT"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot1/255561/67x67/114116100334240.png"
                                alt="FPT Telecom - Chi nhánh Công ty Cổ Phần Viễn Thông FPT"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-phat-trien-kenh-phan-phoi-dai-ly-binh-dinh.35BAE8B1.html"
                                title="NHÂN VIÊN PHÁT TRIỂN KÊNH PHÂN PHỐI ĐẠI LÝ (BÌNH ĐỊNH)"
                              >
                                NHÂN VIÊN PHÁT TRIỂN KÊNH PHÂN PHỐI ĐẠI LÝ (BÌNH
                                ĐỊNH)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/fpt-telecom-chi-nhanh-cong-ty-co-phan-vien-thong-fpt.35A8CF49.html"
                                title="FPT Telecom - Chi nhánh Công ty Cổ Phần Viễn Thông FPT"
                                target="_blank"
                              >
                                FPT Telecom - Chi nhánh Công ty Cổ Phần Viễn
                                Thông FPT
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 10 Tr - 20 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Bình Định</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-greenfeed-viet-nam.35A56979.html"
                              title="Công Ty Cổ Phần GreenFeed Việt Nam"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employers/32889/67x67/142444output-onlinepngtools.png"
                                alt="Công Ty Cổ Phần GreenFeed Việt Nam"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/digital-partnership-specialist.35BAE8DD.html"
                                title="Digital & Partnership Specialist"
                              >
                                Digital &amp; Partnership Specialist
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-greenfeed-viet-nam.35A56979.html"
                                title="Công Ty Cổ Phần GreenFeed Việt Nam"
                                target="_blank"
                              >
                                Công Ty Cổ Phần GreenFeed Việt Nam
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: Cạnh Tranh
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dich-vu-va-thuong-mai-dien-tu-quoc-te-ebis.35A94CFF.html"
                              title="Công Ty Cổ phần Dịch vụ và Thương mại điện tử Quốc tế EBIS"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot3/287743/67x67/94604logocty.jpg"
                                alt="Công Ty Cổ phần Dịch vụ và Thương mại điện tử Quốc tế EBIS"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/chuyen-vien-kinh-doanh-mang-dich-vu-thuong-mai-dien-tu.35BAE8A2.html"
                                title="Chuyên viên kinh doanh ( Mảng dịch vụ Thương mại điện tử)"
                              >
                                Chuyên viên kinh doanh ( Mảng dịch vụ Thương mại
                                điện tử)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-dich-vu-va-thuong-mai-dien-tu-quoc-te-ebis.35A94CFF.html"
                                title="Công Ty Cổ phần Dịch vụ và Thương mại điện tử Quốc tế EBIS"
                                target="_blank"
                              >
                                Công Ty Cổ phần Dịch vụ và Thương mại điện tử
                                Quốc tế EBIS
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 8 Tr - 15 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-list-job">
                  <div className="item">
                    <div className="list-job">
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-vgems.35A8CB58.html"
                              title="Công ty Cổ Phần VGEMS"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot2/254552/67x67/153529logoxuong-1.png"
                                alt="Công ty Cổ Phần VGEMS"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-ke-toan-noi-bo.35BB20D1.html"
                                title="Nhân Viên Kế Toán Nội Bộ"
                              >
                                Nhân Viên Kế Toán Nội Bộ
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-co-phan-vgems.35A8CB58.html"
                                title="Công ty Cổ Phần VGEMS"
                                target="_blank"
                              >
                                Công ty Cổ Phần VGEMS
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 9 Tr - 12 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-tap-doan-cong-nghe-quang-ich.35A88C6B.html"
                              title="Công Ty CP Tập đoàn Công nghệ Quảng Ích"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://images.careerbuilder.vn/employer_folders/lot3/238443/67x67/91519logo-quang-ich.png"
                                alt="Công Ty CP Tập đoàn Công nghệ Quảng Ích"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/nhan-vien-tu-van-cham-soc-khach-hang-tai-hn-k-ap-doanh-so.35BB202D.html"
                                title="Nhân viên tư vấn chăm sóc khách hàng tại HN (K áp doanh số)"
                              >
                                Nhân viên tư vấn chăm sóc khách hàng tại HN (K
                                áp doanh số)
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/cong-ty-cp-tap-doan-cong-nghe-quang-ich.35A88C6B.html"
                                title="Công Ty CP Tập đoàn Công nghệ Quảng Ích"
                                target="_blank"
                              >
                                Công Ty CP Tập đoàn Công nghệ Quảng Ích
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 10 Tr - 15 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hà Nội</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="job-item">
                        <div className="figure">
                          <div className="image">
                            <a
                              target="_blank"
                              href="https://careerbuilder.vn/vi/nha-tuyen-dung/knl-company-limited.35A87251.html"
                              title="KNL COMPANY LIMITED"
                            >
                              <img
                                src="../kiemviecv32/images/graphics/blank.gif"
                                className="swiper-lazy"
                                data-src="https://static.careerbuilder.vn/themes/kiemviecv32/images/graphics/logo-default.png"
                                alt="KNL COMPANY LIMITED"
                              />
                            </a>
                          </div>
                          <div className="figcaption">
                            <div className="title">
                              {" "}
                              <a
                                target="_blank"
                                href="https://careerbuilder.vn/vi/tim-viec-lam/legal-admin.35BB20B0.html"
                                title="Legal Admin"
                              >
                                Legal Admin
                              </a>
                            </div>
                            <div className="caption">
                              <a
                                className="company-name"
                                href="https://careerbuilder.vn/vi/nha-tuyen-dung/knl-company-limited.35A87251.html"
                                title="KNL COMPANY LIMITED"
                                target="_blank"
                              >
                                KNL COMPANY LIMITED
                              </a>
                              <p className="salary">
                                <em className="fa fa-usd" />
                                Lương: 7 Tr - 8 Tr VND
                              </p>
                              <div className="location">
                                <em className="mdi mdi-map-marker" />
                                <p>Hồ Chí Minh</p>
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
        <div className="swiper-bottom">
          <div className="swiper-navigation">
            <div className="swiper-prev">
              <span className="mdi mdi-chevron-left" />
            </div>
            <div className="main-pagination">
              <div className="swiper-pagination" />
            </div>
            <div className="swiper-next">
              <span className="mdi mdi-chevron-right" />
            </div>
          </div>
          <div className="view-more">
            <a href="https://careerbuilder.vn/viec-lam/tat-ca-viec-lam-vi.html">
              Xem việc làm mới cập nhật
              <span className="mdi mdi-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="career-key cb-section">
    <div className="container">
      <div className="cb-title cb-title-center">
        <h2>Ngành Nghề Trọng Điểm</h2>
      </div>
      <div className="career-key-slide">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="item">
                <div className="inner">
                  <div className="box-icon">
                    <img src="images/png/2.png" />
                  </div>
                  <div className="box-desc">
                    <h3>
                      <a
                        href="https://careerbuilder.vn/viec-lam/ke-toan-kiem-toan-c2-vi.html"
                        title="Kế toán / Kiểm toán"
                      >
                        Kế toán / Kiểm toán
                      </a>
                    </h3>
                    <span>(1.910 việc làm khác)</span>
                  </div>
                </div>
                <a
                  href="https://careerbuilder.vn/viec-lam/ke-toan-kiem-toan-c2-vi.html"
                  title="Kế toán / Kiểm toán"
                  className="link"
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="item">
                <div className="inner">
                  <div className="box-icon">
                    <img src="images/png/22.png" />
                  </div>
                  <div className="box-desc">
                    <h3>
                      <a
                        href="https://careerbuilder.vn/viec-lam/nhan-su-c22-vi.html"
                        title="Nhân sự"
                      >
                        Nhân sự
                      </a>
                    </h3>
                    <span>(855 việc làm khác)</span>
                  </div>
                </div>
                <a
                  href="https://careerbuilder.vn/viec-lam/nhan-su-c22-vi.html"
                  title="Nhân sự"
                  className="link"
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="item">
                <div className="inner">
                  <div className="box-icon">
                    <img src="images/png/8.png" />
                  </div>
                  <div className="box-desc">
                    <h3>
                      <a
                        href="https://careerbuilder.vn/viec-lam/xay-dung-c8-vi.html"
                        title="Xây dựng"
                      >
                        Xây dựng
                      </a>
                    </h3>
                    <span>(975 việc làm khác)</span>
                  </div>
                </div>
                <a
                  href="https://careerbuilder.vn/viec-lam/xay-dung-c8-vi.html"
                  title="Xây dựng"
                  className="link"
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="item">
                <div className="inner">
                  <div className="box-icon">
                    <img src="images/png/59.png" />
                  </div>
                  <div className="box-desc">
                    <h3>
                      <a
                        href="https://careerbuilder.vn/viec-lam/tai-chinh-dau-tu-c59-vi.html"
                        title="Tài chính / Đầu tư"
                      >
                        Tài chính / Đầu tư
                      </a>
                    </h3>
                    <span>(2.211 việc làm khác)</span>
                  </div>
                </div>
                <a
                  href="https://careerbuilder.vn/viec-lam/tai-chinh-dau-tu-c59-vi.html"
                  title="Tài chính / Đầu tư"
                  className="link"
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="item">
                <div className="inner">
                  <div className="box-icon">
                    <img src="images/png/30.png" />
                  </div>
                  <div className="box-desc">
                    <h3>
                      <a
                        href="https://careerbuilder.vn/viec-lam/ban-le-ban-si-c30-vi.html"
                        title="Bán lẻ / Bán sỉ"
                      >
                        Bán lẻ / Bán sỉ
                      </a>
                    </h3>
                    <span>(1.861 việc làm khác)</span>
                  </div>
                </div>
                <a
                  href="https://careerbuilder.vn/viec-lam/ban-le-ban-si-c30-vi.html"
                  title="Bán lẻ / Bán sỉ"
                  className="link"
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="item">
                <div className="inner">
                  <div className="box-icon">
                    <img src="images/png/19.png" />
                  </div>
                  <div className="box-desc">
                    <h3>
                      <a
                        href="https://careerbuilder.vn/viec-lam/ngan-hang-c19-vi.html"
                        title="Ngân hàng"
                      >
                        Ngân hàng
                      </a>
                    </h3>
                    <span>(2.544 việc làm khác)</span>
                  </div>
                </div>
                <a
                  href="https://careerbuilder.vn/viec-lam/ngan-hang-c19-vi.html"
                  title="Ngân hàng"
                  className="link"
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="item">
                <div className="inner">
                  <div className="box-icon">
                    <img src="images/png/12.png" />
                  </div>
                  <div className="box-desc">
                    <h3>
                      <a
                        href="https://careerbuilder.vn/viec-lam/dich-vu-khach-hang-c12-vi.html"
                        title="Dịch vụ khách hàng"
                      >
                        Dịch vụ khách hàng
                      </a>
                    </h3>
                    <span>(1.655 việc làm khác)</span>
                  </div>
                </div>
                <a
                  href="https://careerbuilder.vn/viec-lam/dich-vu-khach-hang-c12-vi.html"
                  title="Dịch vụ khách hàng"
                  className="link"
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="item">
                <div className="inner">
                  <div className="box-icon">
                    <img src="images/png/28.png" />
                  </div>
                  <div className="box-desc">
                    <h3>
                      <a
                        href="https://careerbuilder.vn/viec-lam/bat-dong-san-c28-vi.html"
                        title="Bất động sản"
                      >
                        Bất động sản
                      </a>
                    </h3>
                    <span>(884 việc làm khác)</span>
                  </div>
                </div>
                <a
                  href="https://careerbuilder.vn/viec-lam/bat-dong-san-c28-vi.html"
                  title="Bất động sản"
                  className="link"
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="item">
                <div className="inner">
                  <div className="box-icon">
                    <img src="images/png/48.png" />
                  </div>
                  <div className="box-desc">
                    <h3>
                      <a
                        href="https://careerbuilder.vn/viec-lam/dien-dien-tu-dien-lanh-c48-vi.html"
                        title="Điện / Điện tử / Điện lạnh"
                      >
                        Điện / Điện tử / Điện lạnh
                      </a>
                    </h3>
                    <span>(1.184 việc làm khác)</span>
                  </div>
                </div>
                <a
                  href="https://careerbuilder.vn/viec-lam/dien-dien-tu-dien-lanh-c48-vi.html"
                  title="Điện / Điện tử / Điện lạnh"
                  className="link"
                />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="item">
                <div className="inner">
                  <div className="box-icon">
                    <img src="images/png/25.png" />
                  </div>
                  <div className="box-desc">
                    <h3>
                      <a
                        href="https://careerbuilder.vn/viec-lam/san-xuat-van-hanh-san-xuat-c25-vi.html"
                        title="Sản xuất / Vận hành sản xuất"
                      >
                        Sản xuất / Vận hành sản xuất
                      </a>
                    </h3>
                    <span>(1.008 việc làm khác)</span>
                  </div>
                </div>
                <a
                  href="https://careerbuilder.vn/viec-lam/san-xuat-van-hanh-san-xuat-c25-vi.html"
                  title="Sản xuất / Vận hành sản xuất"
                  className="link"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-navigation">
          <div className="swiper-btn swiper-prev">
            <em className="mdi mdi-chevron-left" />
          </div>
          <div className="swiper-btn swiper-next">
            <em className="mdi mdi-chevron-right" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="talent-network cb-section cb-section-border-bottom">
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-5">
          <div className="title-wrap lazy-bg" data-src="./img/home/bg-2.png">
            <div className="title">
              <div className="quote-left">
                <img src="./img/home/quote1.png" alt="careerbuilder" />
              </div>
              <h2>
                Gia tăng cơ hội nghề nghiệp{" "}
                <span>
                  khi kết nối cùng các công ty hàng đầu tại TalentNetwork
                </span>
              </h2>
              <div className="quote-right">
                <img src="./img/home/quote2.png" alt="careerbuilder" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7">
          <div className="row">
            <div className="col-6 col-sm-4 col-lg-3 col-app-intro">
              <div className="item">
                <div className="image">
                  <a
                    href="https://tuyendung.sonha.com.vn"
                    target="_blank"
                    title="Tập đoàn Sơn Hà"
                    rel="nofollow"
                  >
                    <img
                      className="lazy-bg"
                      data-src="https://images.careerbuilder.vn/logotalent/173x90/logo_sonha_1669705136_1669889619.png"
                      src="../kiemviecv32/images/graphics/blank.gif"
                      alt="Tập đoàn Sơn Hà"
                      title="Tập đoàn Sơn Hà"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-lg-3 col-app-intro">
              <div className="item">
                <div className="image">
                  <a
                    href="https://crccareers.com"
                    target="_blank"
                    title="CRC Sport & Lifestyle"
                    rel="nofollow"
                  >
                    <img
                      className="lazy-bg"
                      data-src="https://images.careerbuilder.vn/logotalent/173x90/logo_03_1651637278_1660619617.jpg"
                      src="../kiemviecv32/images/graphics/blank.gif"
                      alt="CRC Sport & Lifestyle"
                      title="CRC Sport & Lifestyle"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-lg-3 col-app-intro">
              <div className="item">
                <div className="image">
                  <a
                    href="https://career.cc1.vn"
                    target="_blank"
                    title="Tổng công ty xây dựng số 1"
                    rel="nofollow"
                  >
                    <img
                      className="lazy-bg"
                      data-src="https://images.careerbuilder.vn/logotalent/173x90/logo_1659609091.jpg"
                      src="../kiemviecv32/images/graphics/blank.gif"
                      alt="Tổng công ty xây dựng số 1"
                      title="Tổng công ty xây dựng số 1"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-lg-3 col-app-intro">
              <div className="item">
                <div className="image">
                  <a
                    href="https://tuyendung.decofi.vn"
                    target="_blank"
                    title="Decofi"
                    rel="nofollow"
                  >
                    <img
                      className="lazy-bg"
                      data-src="https://images.careerbuilder.vn/logotalent/173x90/logo_03_1656052165_1657780600.jpg"
                      src="../kiemviecv32/images/graphics/blank.gif"
                      alt="Decofi"
                      title="Decofi"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-lg-3 col-app-intro">
              <div className="item">
                <div className="image">
                  <a
                    href="https://tuyendunghoanggia.com"
                    target="_blank"
                    title="Royal Group"
                    rel="nofollow"
                  >
                    <img
                      className="lazy-bg"
                      data-src="https://images.careerbuilder.vn/logotalent/173x90/royal_1656387085.jpg"
                      src="../kiemviecv32/images/graphics/blank.gif"
                      alt="Royal Group"
                      title="Royal Group"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-lg-3 col-app-intro">
              <div className="item">
                <div className="image">
                  <a
                    href="https://nekoglobal.talentnetwork.vn"
                    target="_blank"
                    title="Neko global"
                    rel="nofollow"
                  >
                    <img
                      className="lazy-bg"
                      data-src="https://images.careerbuilder.vn/logotalent/173x90/logo_1652779932.jpg"
                      src="../kiemviecv32/images/graphics/blank.gif"
                      alt="Neko global"
                      title="Neko global"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-lg-3 col-app-intro">
              <div className="item">
                <div className="image">
                  <a
                    href="https://finhay.talentnetwork.vn"
                    target="_blank"
                    title="Finhay"
                    rel="nofollow"
                  >
                    <img
                      className="lazy-bg"
                      data-src="https://images.careerbuilder.vn/logotalent/173x90/logo_finhay_1651804999.png"
                      src="../kiemviecv32/images/graphics/blank.gif"
                      alt="Finhay"
                      title="Finhay"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-lg-3 col-app-intro">
              <div className="item">
                <div className="image">
                  <a
                    href="https://career.vanphu.vn"
                    target="_blank"
                    title="Văn Phú - Invest"
                    rel="nofollow"
                  >
                    <img
                      className="lazy-bg"
                      data-src="https://images.careerbuilder.vn/logotalent/173x90/vanphu_1648778182.png"
                      src="../kiemviecv32/images/graphics/blank.gif"
                      alt="Văn Phú - Invest"
                      title="Văn Phú - Invest"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-lg-3 col-app-intro">
              <div className="item">
                <div className="image">
                  <a
                    href="https://risuntek.talentnetwork.vn"
                    target="_blank"
                    title="RISUNTEK VIỆT NAM"
                    rel="nofollow"
                  >
                    <img
                      className="lazy-bg"
                      data-src="https://images.careerbuilder.vn/logotalent/173x90/resuntek_1648778094.png"
                      src="../kiemviecv32/images/graphics/blank.gif"
                      alt="RISUNTEK VIỆT NAM"
                      title="RISUNTEK VIỆT NAM"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-4 col-lg-3 col-app-intro">
              <div className="item">
                <div className="image">
                  <a
                    href="https://tapdoanhoangminh.talentnetwork.vn"
                    target="_blank"
                    title="Hoàng Minh Group"
                    rel="nofollow"
                  >
                    <img
                      className="lazy-bg"
                      data-src="https://images.careerbuilder.vn/logotalent/173x90/logo_hoangminh_1642759446.png"
                      src="../kiemviecv32/images/graphics/blank.gif"
                      alt="Hoàng Minh Group"
                      title="Hoàng Minh Group"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="view-more">
            <a target="_blank" href="https://careerbuilder.vn/vi/talentnetwork">
              Xem thêm
              <span className="mdi mdi-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="cb-section career-development">
    <div className="container">
      <div className="cb-title cb-title-center">
        <h2>
          <span>Cẩm nang nghề nghiệp</span>
        </h2>
      </div>
      <div className="career-development-slide">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="item bg-self">
                <div className="img">
                  <a
                    target="_blank"
                    href="https://careerbuilder.vn/vi/talentcommunity/hot-2023-stt-hay-khi-dang-anh-dai-dien-cau-like-vui-ma-chat-nhat.35A5223E.html"
                    title="[HOT 2023] STT  hay khi đăng ảnh đại diện câu like vui mà chất nhất"
                  >
                    <img
                      className="swiper-lazy"
                      data-src="https://images.careerbuilder.vn/tintuc/career/20230106/crop/319x319/1672994915_stt-hay-khi-dang-anh-careerbuilder.jpg"
                      src="../kiemviecv32/images/graphics/blank.gif"
                      alt="[HOT 2023] STT  hay khi đăng ảnh đại diện câu like vui mà chất nhất"
                    />
                  </a>
                </div>
                <div className="caption">
                  <p className="category-title">Thư giãn</p>
                  <a
                    target="_blank"
                    className="title"
                    href="https://careerbuilder.vn/vi/talentcommunity/hot-2023-stt-hay-khi-dang-anh-dai-dien-cau-like-vui-ma-chat-nhat.35A5223E.html"
                    title="[HOT 2023] STT  hay khi đăng ảnh đại diện câu like vui mà chất nhất"
                  >
                    [HOT 2023] STT hay khi đăng ảnh đại diện câu like vui mà
                    chất nhất
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="item bg-default">
                <div className="img">
                  <a
                    target="_blank"
                    href="https://careerbuilder.vn/vi/talentcommunity/cdp-la-gi-vai-tro-va-loi-ich-cua-cdp-trong-kinh-doanh-va-marketing.35A52176.html"
                    title="CDP là gì? Vai trò và lợi ích của CDP trong kinh doanh và marketing"
                  >
                    <img
                      className="swiper-lazy"
                      data-src="https://images.careerbuilder.vn/tintuc/career/20221130/crop/319x319/1669796481_cdp-la-gi-careerbuilder.jpg"
                      src="../kiemviecv32/images/graphics/blank.gif"
                      alt="CDP là gì? Vai trò và lợi ích của CDP trong kinh doanh và marketing"
                    />
                  </a>
                </div>
                <div className="caption">
                  <p className="category-title">Wiki Career</p>
                  <a
                    target="_blank"
                    className="title"
                    href="https://careerbuilder.vn/vi/talentcommunity/cdp-la-gi-vai-tro-va-loi-ich-cua-cdp-trong-kinh-doanh-va-marketing.35A52176.html"
                    title="CDP là gì? Vai trò và lợi ích của CDP trong kinh doanh và marketing"
                  >
                    CDP là gì? Vai trò và lợi ích của CDP trong kinh doanh và
                    marketing
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="item bg-default">
                <div className="img">
                  <a
                    target="_blank"
                    href="https://careerbuilder.vn/vi/talentcommunity/business-administration-la-gi-nganh-quan-tri-kinh-doanh-tai-viet-nam.35A5219F.html"
                    title="Business administration là gì? Ngành quản trị kinh doanh tại Việt Nam"
                  >
                    <img
                      className="swiper-lazy"
                      data-src="https://images.careerbuilder.vn/tintuc/career/20221206/crop/319x319/1670310867_business-administration-careerbuilder.jpg"
                      src="../kiemviecv32/images/graphics/blank.gif"
                      alt="Business administration là gì? Ngành quản trị kinh doanh tại Việt Nam"
                    />
                  </a>
                </div>
                <div className="caption">
                  <p className="category-title">Wiki Career</p>
                  <a
                    target="_blank"
                    className="title"
                    href="https://careerbuilder.vn/vi/talentcommunity/business-administration-la-gi-nganh-quan-tri-kinh-doanh-tai-viet-nam.35A5219F.html"
                    title="Business administration là gì? Ngành quản trị kinh doanh tại Việt Nam"
                  >
                    Business administration là gì? Ngành quản trị kinh doanh tại
                    Việt Nam
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="item bg-default">
                <div className="img">
                  <a
                    target="_blank"
                    href="https://careerbuilder.vn/vi/talentcommunity/nhan-vien-sales-la-gi-tong-hop-cac-cong-viec-cua-nhan-vien-sales-chi-tiet-nhat.35A5219E.html"
                    title="Nhân viên sales là gì? Tổng hợp các công việc của nhân viên sales chi tiết nhất"
                  >
                    <img
                      className="swiper-lazy"
                      data-src="https://images.careerbuilder.vn/tintuc/career/20221206/crop/319x319/1670302707_sale-la-gi-careerbuilder.jpg"
                      src="../kiemviecv32/images/graphics/blank.gif"
                      alt="Nhân viên sales là gì? Tổng hợp các công việc của nhân viên sales chi tiết nhất"
                    />
                  </a>
                </div>
                <div className="caption">
                  <p className="category-title">Wiki Career</p>
                  <a
                    target="_blank"
                    className="title"
                    href="https://careerbuilder.vn/vi/talentcommunity/nhan-vien-sales-la-gi-tong-hop-cac-cong-viec-cua-nhan-vien-sales-chi-tiet-nhat.35A5219E.html"
                    title="Nhân viên sales là gì? Tổng hợp các công việc của nhân viên sales chi tiết nhất"
                  >
                    Nhân viên sales là gì? Tổng hợp các công việc của nhân viên
                    sales chi tiết nhất
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="item bg-self">
                <div className="img">
                  <a
                    target="_blank"
                    href="https://careerbuilder.vn/vi/talentcommunity/cau-chuc-tet-2023-hay-ngan-gon-va-doc-dao-nhat-dinh-phai-luu-ngay.35A520E7.html"
                    title="Câu chúc Tết 2023 hay, ngắn gọn và độc đáo nhất định phải lưu ngay"
                  >
                    <img
                      className="swiper-lazy"
                      data-src="https://images.careerbuilder.vn/tintuc/career/20221114/crop/319x319/1668419268_cau-chuc-tet-hay-careerbuilder.jpg"
                      src="../kiemviecv32/images/graphics/blank.gif"
                      alt="Câu chúc Tết 2023 hay, ngắn gọn và độc đáo nhất định phải lưu ngay"
                    />
                  </a>
                </div>
                <div className="caption">
                  <p className="category-title">Thư giãn</p>
                  <a
                    target="_blank"
                    className="title"
                    href="https://careerbuilder.vn/vi/talentcommunity/cau-chuc-tet-2023-hay-ngan-gon-va-doc-dao-nhat-dinh-phai-luu-ngay.35A520E7.html"
                    title="Câu chúc Tết 2023 hay, ngắn gọn và độc đáo nhất định phải lưu ngay"
                  >
                    Câu chúc Tết 2023 hay, ngắn gọn và độc đáo nhất định phải
                    lưu ngay
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="item bg-default">
                <div className="img">
                  <a
                    target="_blank"
                    href="https://careerbuilder.vn/vi/talentcommunity/tro-giang-la-gi-quy-dinh-va-nhung-dieu-can-biet-khi-xin-lam-tro-giang.35A5219A.html"
                    title="Trợ giảng là gì? Quy định và những điều cần biết khi xin làm trợ giảng"
                  >
                    <img
                      className="swiper-lazy"
                      data-src="https://images.careerbuilder.vn/tintuc/career/20221206/crop/319x319/1670299480_tro-giang-la-gi-careerbuilder.jpg"
                      src="../kiemviecv32/images/graphics/blank.gif"
                      alt="Trợ giảng là gì? Quy định và những điều cần biết khi xin làm trợ giảng"
                    />
                  </a>
                </div>
                <div className="caption">
                  <p className="category-title">Wiki Career</p>
                  <a
                    target="_blank"
                    className="title"
                    href="https://careerbuilder.vn/vi/talentcommunity/tro-giang-la-gi-quy-dinh-va-nhung-dieu-can-biet-khi-xin-lam-tro-giang.35A5219A.html"
                    title="Trợ giảng là gì? Quy định và những điều cần biết khi xin làm trợ giảng"
                  >
                    Trợ giảng là gì? Quy định và những điều cần biết khi xin làm
                    trợ giảng
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="item bg-default">
                <div className="img">
                  <a
                    target="_blank"
                    href="https://careerbuilder.vn/vi/talentcommunity/quan-tri-vien-la-gi-mo-ta-cong-viec-va-to-chat-can-co-quan-tri-vien.35A52196.html"
                    title="Quản trị viên là gì? Mô tả công việc và tố chất cần có quản trị viên"
                  >
                    <img
                      className="swiper-lazy"
                      data-src="https://images.careerbuilder.vn/tintuc/career/20221205/crop/319x319/1670224272_quan-tri-vien-la-gi-careerbuilder.jpg"
                      src="../kiemviecv32/images/graphics/blank.gif"
                      alt="Quản trị viên là gì? Mô tả công việc và tố chất cần có quản trị viên"
                    />
                  </a>
                </div>
                <div className="caption">
                  <p className="category-title">Wiki Career</p>
                  <a
                    target="_blank"
                    className="title"
                    href="https://careerbuilder.vn/vi/talentcommunity/quan-tri-vien-la-gi-mo-ta-cong-viec-va-to-chat-can-co-quan-tri-vien.35A52196.html"
                    title="Quản trị viên là gì? Mô tả công việc và tố chất cần có quản trị viên"
                  >
                    Quản trị viên là gì? Mô tả công việc và tố chất cần có quản
                    trị viên
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="item bg-default">
                <div className="img">
                  <a
                    target="_blank"
                    href="https://careerbuilder.vn/vi/talentcommunity/civil-engineering-la-gi-trien-vong-cua-nganh-ky-thuat-dan-dung-2023.35A521A8.html"
                    title="Civil Engineering là gì? Triển vọng của ngành kỹ thuật dân dụng 2023"
                  >
                    <img
                      className="swiper-lazy"
                      data-src="https://images.careerbuilder.vn/tintuc/career/20221208/crop/319x319/1670468336_civil-engineering-careerbuilder.jpg"
                      src="../kiemviecv32/images/graphics/blank.gif"
                      alt="Civil Engineering là gì? Triển vọng của ngành kỹ thuật dân dụng 2023"
                    />
                  </a>
                </div>
                <div className="caption">
                  <p className="category-title">Wiki Career</p>
                  <a
                    target="_blank"
                    className="title"
                    href="https://careerbuilder.vn/vi/talentcommunity/civil-engineering-la-gi-trien-vong-cua-nganh-ky-thuat-dan-dung-2023.35A521A8.html"
                    title="Civil Engineering là gì? Triển vọng của ngành kỹ thuật dân dụng 2023"
                  >
                    Civil Engineering là gì? Triển vọng của ngành kỹ thuật dân
                    dụng 2023
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="item bg-default">
                <div className="img">
                  <a
                    target="_blank"
                    href="https://careerbuilder.vn/vi/talentcommunity/assistant-la-gi-tong-hop-10-vi-tri-assistant-hot-ma-ban-tre-nen-thu-suc.35A52198.html"
                    title="Assistant là gì? Tổng hợp 10 vị trí Assistant HOT mà bạn trẻ nên thử sức"
                  >
                    <img
                      className="swiper-lazy"
                      data-src="https://images.careerbuilder.vn/tintuc/career/20221206/crop/319x319/1670297058_assistant-la-gi-careerbuilder.jpg"
                      src="../kiemviecv32/images/graphics/blank.gif"
                      alt="Assistant là gì? Tổng hợp 10 vị trí Assistant HOT mà bạn trẻ nên thử sức"
                    />
                  </a>
                </div>
                <div className="caption">
                  <p className="category-title">Wiki Career</p>
                  <a
                    target="_blank"
                    className="title"
                    href="https://careerbuilder.vn/vi/talentcommunity/assistant-la-gi-tong-hop-10-vi-tri-assistant-hot-ma-ban-tre-nen-thu-suc.35A52198.html"
                    title="Assistant là gì? Tổng hợp 10 vị trí Assistant HOT mà bạn trẻ nên thử sức"
                  >
                    Assistant là gì? Tổng hợp 10 vị trí Assistant HOT mà bạn trẻ
                    nên thử sức
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="item bg-default">
                <div className="img">
                  <a
                    target="_blank"
                    href="https://careerbuilder.vn/vi/talentcommunity/accountant-la-gi-mo-ta-cong-viec-cua-accountant-ky-nang-can-co.35A5214E.html"
                    title="Accountant là gì? Mô tả công việc của accountant, kỹ năng cần có"
                  >
                    <img
                      className="swiper-lazy"
                      data-src="https://images.careerbuilder.vn/tintuc/career/20221128/crop/319x319/1669611176_accountant-la-gi-careerbuilder.jpg"
                      src="../kiemviecv32/images/graphics/blank.gif"
                      alt="Accountant là gì? Mô tả công việc của accountant, kỹ năng cần có"
                    />
                  </a>
                </div>
                <div className="caption">
                  <p className="category-title">Wiki Career</p>
                  <a
                    target="_blank"
                    className="title"
                    href="https://careerbuilder.vn/vi/talentcommunity/accountant-la-gi-mo-ta-cong-viec-cua-accountant-ky-nang-can-co.35A5214E.html"
                    title="Accountant là gì? Mô tả công việc của accountant, kỹ năng cần có"
                  >
                    Accountant là gì? Mô tả công việc của accountant, kỹ năng
                    cần có
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="item bg-default">
                <div className="img">
                  <a
                    target="_blank"
                    href="https://careerbuilder.vn/vi/talentcommunity/bac-si-noi-tru-la-gi-con-duong-de-tro-thanh-mot-bac-si-noi-tru.35A52194.html"
                    title="Bác sĩ nội trú là gì? Con đường để trở thành một bác sĩ nội trú"
                  >
                    <img
                      className="swiper-lazy"
                      data-src="https://images.careerbuilder.vn/tintuc/career/20221205/crop/319x319/1670222754_bac-si-noi-tru-la-gi-careerbuilder.jpg"
                      src="../kiemviecv32/images/graphics/blank.gif"
                      alt="Bác sĩ nội trú là gì? Con đường để trở thành một bác sĩ nội trú"
                    />
                  </a>
                </div>
                <div className="caption">
                  <p className="category-title">Wiki Career</p>
                  <a
                    target="_blank"
                    className="title"
                    href="https://careerbuilder.vn/vi/talentcommunity/bac-si-noi-tru-la-gi-con-duong-de-tro-thanh-mot-bac-si-noi-tru.35A52194.html"
                    title="Bác sĩ nội trú là gì? Con đường để trở thành một bác sĩ nội trú"
                  >
                    Bác sĩ nội trú là gì? Con đường để trở thành một bác sĩ nội
                    trú
                  </a>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="item bg-default">
                <div className="img">
                  <a
                    target="_blank"
                    href="https://careerbuilder.vn/vi/talentcommunity/ke-toan-ngan-hang-la-gi-nhiem-vu-dac-diem-va-muc-luong-cua-ke-toan-ngan-hang.35A52200.html"
                    title="Kế toán ngân hàng là gì? Nhiệm vụ, đặc điểm và mức lương của kế toán ngân hàng"
                  >
                    <img
                      className="swiper-lazy"
                      data-src="https://images.careerbuilder.vn/tintuc/career/20221221/crop/319x319/1671613775_ke-toan-ngan-hang-careerbuilder.jpg"
                      src="../kiemviecv32/images/graphics/blank.gif"
                      alt="Kế toán ngân hàng là gì? Nhiệm vụ, đặc điểm và mức lương của kế toán ngân hàng"
                    />
                  </a>
                </div>
                <div className="caption">
                  <p className="category-title">Wiki Career</p>
                  <a
                    target="_blank"
                    className="title"
                    href="https://careerbuilder.vn/vi/talentcommunity/ke-toan-ngan-hang-la-gi-nhiem-vu-dac-diem-va-muc-luong-cua-ke-toan-ngan-hang.35A52200.html"
                    title="Kế toán ngân hàng là gì? Nhiệm vụ, đặc điểm và mức lương của kế toán ngân hàng"
                  >
                    Kế toán ngân hàng là gì? Nhiệm vụ, đặc điểm và mức lương của
                    kế toán ngân hàng
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper-prev">
          <span className="lnr lnr-chevron-left" />
        </div>
        <div className="swiper-next">
          <span className="lnr lnr-chevron-right" />
        </div>
      </div>
      <div className="view-more">
        <a target="_blank" href="https://careerbuilder.vn/vi/talentcommunity">
          Xem thêm
          <span className="mdi mdi-arrow-right" />
        </a>
      </div>
    </div>
  </section>
  <section
    className="post-a-job lazy-bg"
    data-src="https://images.careerbuilder.vn/content/Product/bg-3_3.jpg"
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="text">
            <span>Dành cho nhà tuyển dụng</span>
            <h3>Bạn có vị trí cần đăng tuyển?</h3>
            <p>
              Chúng tôi có những giải pháp tối ưu phù hợp với
              <br /> nhiều loại hình công ty và tiêu chuẩn riêng
            </p>
          </div>
          <div className="post-a-job-btn">
            <a
              className="btn-gradient"
              href="https://careerbuilder.vn/vi/employers/postjobs"
              target="_blank"
            >
              Đăng tin Tuyển dụng
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="back-drop" />
</>


    </>
  );
};

export default Home;
