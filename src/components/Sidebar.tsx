import React from "react";
import styled, { keyframes } from "styled-components";
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
  background-color: #b68d40;
  
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
  text-decoration: underline 0.05em rgba(0, 0, 0, 0);
  text-underline-offset: 0.2em;
  transition: text-decoration-color 300ms, text-underline-offset 300ms;
  align-items: center;

  height: 10vh;
  padding-left: 15px;
  border-radius: 20px;

  &:hover {
    text-decoration-color: black;
  text-underline-offset: 0.4em;

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
