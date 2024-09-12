import React from "react";
import { Box, CardMedia, CardContent } from "@mui/material";
import SkillsIcon from "./SkillsIcon";

import JsLogo from "../../assets/javascript_logo.png";
import ReactLogo from "../../assets/react_logo.png";
import TsLogo from "../../assets/logo_typescript.png";
import NodeJsLogo from "../../assets/nodejs_logo.svg";
import MuiLogo from "../../assets/mui_logo.png";
import { display } from "@mui/system";

const Skills = () => {
  const skillsList = [JsLogo, ReactLogo, TsLogo, NodeJsLogo, MuiLogo];
  return (
    <Box>
      <Box
        sx={{
          height: "200px",
          display: "flex",

          alignItems: "center",
          justifyContent: "space-evenly",
          backgroundColor: "white",
        }}
      >
        <ul className="tree">
          <li className="first">
            Frontend Basics
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul>
          </li>
          <li>
            Javascript Libraries
            <ul>
              <li>
                React
                <ul>
                  <li>Hooks</li>
                  <li>Redux</li>
                  <li>Context API</li>
                  <li>React Testing Libraries</li>
                </ul>
              </li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul>
          </li>
          <li>
            Backend
            <ul>
              <li>NodeJS</li>
              <li>MongoDB</li>
              <li>Express</li>
            </ul>
          </li>
        </ul>
      </Box>
    </Box>
  );
};

export default Skills;
