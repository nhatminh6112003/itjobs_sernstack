import React, { useState, useEffect, lazy, Suspense } from "react";

import Header from "~/layouts/Components/employer/Header";
import EmployerStyles,{cx} from "./EmployerStyles";
// import styles from "./employer.module.css";
import Loading from "~/components/ui/Loading";
const Footer = React.lazy(() => import("~/layouts/Components/employer/Footer"));
export const employerLayout = ({ children}) => {
    return (
      <EmployerStyles>
         <Header />
        <Suspense fallback={<Loading />}>
        <main>{React.cloneElement(children,{cx})}</main>
        <Footer />
      </Suspense>
      </EmployerStyles>
    );
  };
  