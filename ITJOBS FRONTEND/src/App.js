import React from "react";

import { BrowserRouter as Router, Routes } from "react-router-dom";
import {  Suspense } from "react";
import { 
  clientsPublicRoutes, 
  clientsPrivateRoutes , 
  employerPublicRoutes,
  employerPrivateRoutes } 
  from "./routes";
import Loading from "./components/Loading";
import { renderPublicRoutes,renderPrivateRoutes } from "./utils/renderRoutes";
function App() {

  return (
     <div className="App">
    <Suspense fallback={<Loading />}>
    <Router>
          <Routes>
            {/* Clients */}
              {renderPublicRoutes(clientsPublicRoutes, 'client')}
              {renderPrivateRoutes(clientsPrivateRoutes, 'client')}   
              {/* Employers */}
              {renderPublicRoutes(employerPublicRoutes, 'employer')}
              {renderPrivateRoutes(employerPrivateRoutes, 'employer')}   
            {/* Admin */}

          </Routes>
      </Router>
    </Suspense>
        </div>
  );
}

export default App;
