import { Fragment } from "react";
import { DefaultLayout } from "~/layouts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import PrivateRoutes from "~/utils/PrivateRoutes.jsx";




const renderPublicRoutes = (routes,userType) => {

    return routes.map(({ layout, component: Page, path }) => {
      
      const layouts = {
        [layout]: layout,
        [null]: Fragment,
        jobSeeker: DefaultLayout.jobSeekerLayout,
        employer: DefaultLayout.employerLayout,
        admin: DefaultLayout.adminLayout,
        default: DefaultLayout.jobSeekerLayout
      };
      const Layout =  layouts[layout] || layouts[userType] || layouts.default;
      return (
        <Route
          key={uuidv4()}
          path={path}
          element={
            <Layout>
              <Page />
            </Layout>
          }
        />
      );
    });
  };
  const renderPrivateRoutes = (routes) => {
    return routes.map((route) => (
      <Route key={uuidv4()} element={<PrivateRoutes />}>
        {renderPublicRoutes([route])}
      </Route>
    ));
  };

  export {renderPublicRoutes,renderPrivateRoutes}