import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment, Suspense } from "react";
import { publicRoutes, privateRoutes } from "./routes";
import PrivateRoutes from "~/utils/PrivateRoutes.jsx";
import { DefaultLayout } from "./layouts";
import Loading from "./components/Loading";
import { v4 as uuidv4 } from 'uuid';

function App() {
  return (
     <div className="App">
    <Suspense fallback={<Loading />}>
    <Router>
          <Routes>
            {publicRoutes.map((route) => {
              const Page = route.component;
              let Layout = DefaultLayout.clientLayout;
              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }

              return (
                <Route
                  key={uuidv4()}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
            {privateRoutes.map((route, index) => {
              const Page = route.component;
              let Layout = DefaultLayout.clientLayout;
              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }

              return (
                <Route 
                key={uuidv4()} 
                element={<PrivateRoutes />}>
                  <Route
                    key={uuidv4()}
                    path={route.path}
                    element={
                      <Layout>
                        <Page />
                      </Layout>
                    }
                  />
                </Route>
              );
            })}
          </Routes>
      </Router>
    </Suspense>
        </div>
  );
}

export default App;
