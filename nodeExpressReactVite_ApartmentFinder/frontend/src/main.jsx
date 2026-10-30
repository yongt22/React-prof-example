
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import IndexPage from "./components/pages/IndexPage.jsx";
import AboutPage from "./components/pages/AboutPage.jsx";
import BaseTemplate from "./components/pages/BaseTemplate.jsx";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StrictMode>
    <BrowserRouter>
      <BaseTemplate>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BaseTemplate>
    </BrowserRouter>
  </StrictMode>
);
