import React from "react";

import { BrowserRouter as Router, Routes } from "react-router-dom";
import {  Suspense } from "react";
import { 
  jobSeekerPublicRoutes, 
jobSeekerPrivateRoutes,
  employerPublicRoutes,
  employerPrivateRoutes } 
  from "./routes";
import Loading from "./components/ui/Loading";
import { renderPublicRoutes,renderPrivateRoutes } from "./utils/renderRoutes";
function App() {

  return (
     <div className="App">
    <Suspense fallback={<Loading />}>
    <Router>
          <Routes>
            {/* Clients */}
              {renderPublicRoutes(jobSeekerPublicRoutes, 'jobSeeker')}
              {renderPrivateRoutes(jobSeekerPrivateRoutes, 'jobSeeker')}   
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
