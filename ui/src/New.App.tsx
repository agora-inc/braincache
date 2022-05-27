import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import IndexPage from "./Pages/IndexPage";
import HomePage from "./Pages/HomePage";
import NoPage from "./Pages/404Page";
import ExpertLandingPage from "./Pages/ExpertLandingPage";
import CompanyLandingPage from "./Pages/CompanyLandingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />}>
          <Route index element={<HomePage />} />
          <Route path="experts" element={<ExpertLandingPage />} />
          <Route path="companies" element={<CompanyLandingPage />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;