import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Home from "./components/Home";
import Skills from "./components/skillsSection/Skills";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import SideBar from "./components/Sidebar";
function App() {
  return (
    <Router>
      <GlobalStyles />
      <Wrapper>
        <SideBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

const Wrapper = styled.div`
  width: 100%;
  backgroundcolor: "blue";
`;

export default App;
