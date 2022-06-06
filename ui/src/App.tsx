import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCoffee,
  faAddressCard,
  faEnvelope,
  faSitemap,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";

import { ResponsiveProvider } from "./contexts/ResponsiveContext";

import IndexPage from "./Pages/IndexPage";
import HomePage from "./Pages/HomePage";
import NoPage from "./Pages/404Page";
import ExpertLandingPage from "./Pages/ExpertLandingPage";
import CompanyLandingPage from "./Pages/CompanyLandingPage";

library.add(faCoffee, faAddressCard, faEnvelope, faSitemap, faCoins);

const App = () => {
  return (
    <ResponsiveProvider>
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
    </ResponsiveProvider>
  );
};

export default App;
