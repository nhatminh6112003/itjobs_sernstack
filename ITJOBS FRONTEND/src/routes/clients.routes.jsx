import React from "react";

import config from "~/config";
import { DefaultLayout } from "~/layouts";

// import Home from "~/pages/clients/Home";
// import About from "~/pages/clients/About";
// import Detail from "~/pages/clients/Detail";
// import Cart from "~/pages/clients/Cart";
// import Product from "~/pages/clients/Product";
// import Login from "~/pages/clients/Login";
// import ErrorPage from "~/pages/clients/ErrorPage";

const Home = React.lazy(() => import("~/pages/clients/Home"));
const About = React.lazy(() => import("~/pages/clients/About"));
const Detail = React.lazy(() => import("~/pages/clients/Detail"));
const Cart = React.lazy(() => import("~/pages/clients/Cart"));
const Product = React.lazy(() => import("~/pages/clients/Product"));
const Login = React.lazy(() => import("~/pages/clients/Login"));
const ErrorPage = React.lazy(() => import("~/pages/clients/ErrorPage"));

const publicRoutes = [
  { path: config.clientsRoutes.home, component: Home },
  { path: config.clientsRoutes.about, component: About },
  { path: config.clientsRoutes.detail, component: Detail },
  { path: config.clientsRoutes.product, component: Product },
  { path: config.clientsRoutes.login, component: Login },
  { path: config.clientsRoutes.errorPage, component: ErrorPage, layout: null },
];

const privateRoutes = [{ path: config.clientsRoutes.cart, component: Cart }];
export { publicRoutes, privateRoutes };
