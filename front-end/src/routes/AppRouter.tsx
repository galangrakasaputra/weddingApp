import { BrowserRouter, Routes, Route } from "react-router";
import ScrollToTop from "../components/ScrollTop";
import Navbar from "../components/Navbar";

import Home from "../pages/Home";
import Templates from "../pages/Templates";
import TemplateDetail from "../pages/TemplateDetail";
import TemplatePreview from "../pages/TemplatePreview";

function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/templates/:id" element={<TemplateDetail />} />
        <Route path="/preview/:id" element={<TemplatePreview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;