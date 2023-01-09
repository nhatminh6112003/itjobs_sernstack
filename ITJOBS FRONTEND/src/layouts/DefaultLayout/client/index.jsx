import React, { useState, useEffect, lazy, Suspense } from "react";
import Header from "~/layouts/Components/clients/Header";
import ClientStyles from "./ClientStyles";
// import Footer from "~/layouts/Components/clients/Footer";
const Footer = React.lazy(() => import("~/layouts/Components/clients/Footer"));
export const clientLayout = ({ children }) => {
  return (
    <ClientStyles>
      <Header />
      <main>{children}</main>
      <Suspense fallback={<div>....loading</div>}>
        <Footer />
      </Suspense>
    </ClientStyles>
  );
};
