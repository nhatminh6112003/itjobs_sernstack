import axios from "axios";
import { useEffect, useState } from "react";
import saveAs from "file-saver";
const About = () => {
  // const NODE_APP_BASE_URL=import.meta.env.VITE_NODE_APP_BASE_URL

  const generatePdf = async () => {
    try {
      // Gọi API chuyển đổi HTML thành PDF
      const response = await axios.get(`api/users/downloadCvProfile`, {
        responseType: "blob",
      });
      // Lưu tệp PDF vào máy của người dùng
      saveAs(response.data, "document.pdf");
    } catch (error) {}
  };

  return (
    <>
      {/* <iframe style={{width: '100%', height: '400px'}}src={NODE_APP_BASE_URL+`api/users/viewPdf`} title="W3Schools Free Online Web Tutorials"></iframe> */}

      <button onClick={generatePdf}>CLick</button>
    </>
  );
};

export default About;
