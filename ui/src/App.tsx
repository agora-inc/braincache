import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Academics } from "./pages/Academics";
import { Companies } from "./pages/Companies";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/academics" element={<Academics />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/" element={<Navigate to="/companies" replace={true} />} />
      </Routes>
    </Router>
  );
};

export default App;
