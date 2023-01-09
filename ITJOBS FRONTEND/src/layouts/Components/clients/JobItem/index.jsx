import React from 'react'

const JobItem = () => {
  return (
    <div className="job-item">
    <div className="figure">
      <div className="image">
        <a
          target="_blank"
          href="https://careerbuilder.vn/vi/nha-tuyen-dung/indo-trans-logistics.35A63E79.html"
          title="Indo Trans Logistics"
        >
          <img
            src="https://images.careerbuilder.vn/employer_folders/lot7/87417/67x67/13452210999_2011_11_23.gif"
            className="swiper-lazy swiper-lazy-loaded"
            alt="Indo Trans Logistics"
          />
        </a>
      </div>
      <div className="figcaption">
        <div className="title">
          <a
            target="_blank"
            href="https://careerbuilder.vn/vi/tim-viec-lam/infor-wms-specialist-implement-warehouse-management-solution.35BAEADF.html"
            title="Infor WMS Specialist (Implement Warehouse Management Solution)"
          >
            Infor WMS Specialist (Implement Warehouse Management Solution)
          </a>
        </div>
        <div className="caption">
          <a
            className="company-name"
            href="https://careerbuilder.vn/vi/nha-tuyen-dung/indo-trans-logistics.35A63E79.html"
            title="Indo Trans Logistics"
            target="_blank"
          >
            Indo Trans Logistics
          </a>
          <p className="salary">
            <em className="fa fa-usd" />
            Lương: Cạnh Tranh
          </p>
          <div className="location">
            <em className="mdi mdi-map-marker" />
            <p> Hồ Chí Minh</p>
          </div>
        </div>
      </div>
      <div className="top-icon">
        {" "}
        <span className="top">Top</span>{" "}
      </div>
    </div>
  </div>
  )
}

export default JobItem