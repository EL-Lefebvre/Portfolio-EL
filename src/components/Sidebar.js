import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";

const SideBar = () => {
  return (
    <Wrapper>
      <Main>
        <Navig to="/">Home</Navig>
        <Navig to="/portfolio">Portfolio</Navig>
        <Navig to="/skills">Skills</Navig>
        <Navig to="/contact">Contact</Navig>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 10vh;
  position: absolute;
  width: 100vw;
  position: fixed;
  z-index:10;

`;
const Main = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (min-width: 200px) and (max-width: 700px) {
  }
`;
const Navig = styled(NavLink)`
  display: flex;
  color: black;
  padding-top: 30px;
  text-decoration: none;
  align-items: center;
  font-weight: bolder;
  height: 10vh;
  padding-left: 15px;
  border-radius: 20px;
  &:hover {
    text-decoration: underline;
  }
  @media (min-width: 200px) and (max-width: 700px) {
    height: 3vh;
    padding: 5px;
    border-radius: 0px;
    width: 25vw;
    align-items: center;
    text-decoration: none;
    font-size: 80%;
    justify-content: center;
  }
`;

export default SideBar;
