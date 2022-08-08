import Header from "components/templates/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "pages/Home";
import Search from "pages/Search";
import styled from "@emotion/styled";

export default function AppRouter() {
  return (
    <Router>
      <StickyTop>
        <Header />
      </StickyTop>
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

const StickyTop = styled.header`
  position: sticky;
  top: 0px;
  left: 0px;
`;
