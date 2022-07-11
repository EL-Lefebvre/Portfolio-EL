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
          height: '200px',
          display: "flex",

          alignItems: "center",
          justifyContent: "space-evenly",
          backgroundColor: '#122620',
        }}
      >
        {skillsList.map((skillIcon): any => (
          <Box
            sx={{
              width: "150px",
              height: "150px",
              backgroundColor: "white",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={skillIcon} style={{ width: "100px", height: "100px" }} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
