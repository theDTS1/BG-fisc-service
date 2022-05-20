import React from "react";
import { BrowserRouter as Router, Route, Navigate, Routes } from "react-router-dom";

import MainNavigation from "./components/sharedComponents/Navigation/MainNavigation";


import CompanyDetails from "./pages/CompanyDetails";
import Dash from "./pages/Dash";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route exact path='/' element={<Dash />} />
          <Route exact path='/companyDetails' element={<CompanyDetails />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
