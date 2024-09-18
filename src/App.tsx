import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { Link, animateScroll as scroll } from "react-scroll";
import Skills from "./components/skillsSection/Skills";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <Wrapper>
      <Router>
        {/* <Sidebar /> */}
        <Switch>
          {/* <Route exact path="/skills">
              <Skills />
            </Route>
            <Route  exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route> */}
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <GlobalStyles />
      </Router>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
// const Main = styled.div`
//   height: 120vh;
// `;
export default App;
