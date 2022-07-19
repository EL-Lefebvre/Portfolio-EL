import React from "react";

import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import { Box } from "@mui/material";
import logo from '../assets/main_logo_1.png'
const SideBar = () => {
  return (
    <Wrapper>

      <Box
        component="img"
        sx={{
          height: 50,
          width: 50,
paddingLeft: 10,
        }}
        alt="main logo"
        src={logo}
      />
 
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
  height: 30vh;
width: 90vw;

  position: fixed;
  z-index:10;
display:flex;
justify-content: space-between;
align-items: center;
  
`;
const Main = styled.div`
  display: flex;
  justify-content: space-between;
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
  color: #ffde59;
  height: 10vh;
  padding-left: 15px;
  border-radius: 20px;
font-weight: bolder;
  &:hover {
    text-decoration-color: #ffde59;
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
