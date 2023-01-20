import React,{  Suspense } from "react";
import Header from "~/layouts/Components/clients/Header";
import {cx} from "./ClientStyles";
const ClientStyles= React.lazy(() => import("./ClientStyles"));
// import Footer from "~/layouts/Components/clients/Footer";
const Footer = React.lazy(() => import("~/layouts/Components/clients/Footer"));
export const clientLayout = ({ children }) => {
  return (
 <>
 <ClientStyles>
 <Header /> 
 {/*React.cloneElement(children,{cx}) nhận vào 2 tham số tham số thứ nhất là element cần sao chép tham số thứ 2 là props là object {cx} sẽ được truyền cho các children  */}
      <main>{React.cloneElement(children,{cx})}</main>
      <Suspense fallback={<div>....loading</div>}>
        <Footer />
      </Suspense>
 </ClientStyles>
 </>
  );
};
