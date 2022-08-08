import Header from "components/templates/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "@emotion/styled";

import Home from "pages/Home";
import Search from "pages/Search";

const StickyTop = styled.header`
  position: sticky;
  top: 0px;
  left: 0px;
`;

const AppRouter = () => (
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

export default AppRouter;
