import Header from "components/templates/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Search from "../pages/Search";

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
