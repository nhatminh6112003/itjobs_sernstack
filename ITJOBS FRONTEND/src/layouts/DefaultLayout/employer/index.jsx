import React, { useState, useEffect, lazy, Suspense } from "react";

import Header from "~/layouts/Components/employer/Header";
import EmployerStyles,{cx} from "./EmployerStyles";
// import styles from "./employer.module.css";
const Footer = React.lazy(() => import("~/layouts/Components/employer/Footer"));
export const employerLayout = ({ children}) => {
    return (
      <EmployerStyles>
         <Header />
         <main>{React.cloneElement(children,{cx})}</main>
        <Suspense fallback={<div>....loading</div>}>
        <Footer />
      </Suspense>
      </EmployerStyles>
    );
  };
  