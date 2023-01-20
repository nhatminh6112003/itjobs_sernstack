import React from "react";

import config from "~/config/config.routes";

const Home = React.lazy(() => import("~/pages/clients/Home"));
const About = React.lazy(() => import("~/pages/clients/About"));
const Detail = React.lazy(() => import("~/pages/clients/Detail"));
const Cart = React.lazy(() => import("~/pages/clients/Cart"));
const Product = React.lazy(() => import("~/pages/clients/Product"));
const Login = React.lazy(() => import("~/pages/clients/Login"));
const Register = React.lazy(() => import("~/pages/clients/Register"));
const AllJob = React.lazy(() => import("~/pages/clients/AllJob"));
const Dashboard = React.lazy(() => import("~/pages/clients/Dashboard"));
const MyProfile = React.lazy(() => import("~/pages/clients/MyProfile"));


const ErrorPage = React.lazy(() => import("~/components/ErrorPage"));

const clientsPublicRoutes = [
  { path: config.clientsRoutes.home, component: Home },
  { path: config.clientsRoutes.about, component: About },
  { path: config.clientsRoutes.detail, component: Detail },
  { path: config.clientsRoutes.product, component: Product },
  { path: config.clientsRoutes.allJob, component: AllJob },
  { path: config.clientsRoutes.login, component: Login },

  { path: config.clientsRoutes.register, component: Register },
];

const clientsPrivateRoutes = [
  { path: config.clientsRoutes.cart, component: Cart },
  { path: config.clientsRoutes.dashboard, component: Dashboard },
  { path: config.clientsRoutes.myProfile, component: MyProfile },


];
export { clientsPublicRoutes, clientsPrivateRoutes };
