import React from "react";
import { Box, CardMedia, CardContent } from "@mui/material";
import SkillsIcon from "./SkillsIcon";

import jsLogo from "../skillsSection/javascript_logo.png";
import reactLogo from "../skillsSection/react_logo.png";
import tsLogo from "../skillsSection/logo_typescript.png";
import mongoDbLogo from "../skillsSection/mongoDB_logo.png";
import nodeJsLogo from "../skillsSection/nodejs_logo.png";
import muiLogo from "../skillsSection/mui_logo.png";

const Skills = () => {
  const skillsList = [
    jsLogo,
    reactLogo,
    tsLogo,
    mongoDbLogo,
    nodeJsLogo,
    muiLogo,
  ];
  return (
    <Box>
      {skillsList.map((skillIcon): any => (
        <SkillsIcon src={skillIcon} />
      ))}
    </Box>
  );
};

export default Skills;
