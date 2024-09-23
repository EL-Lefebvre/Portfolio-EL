import React from "react";
import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import Footer from "./Footer/Footer";

const Sidebar = () => {
  return (
    <Box>
      <Box>
        <Typography variant="h4" className="name">Elodie Lefebvre</Typography>
        <Typography variant="body1" className="title">Frontend Developer</Typography>
        <Typography variant="body2" className="description">
          I build pixel-perfect, engaging, and accessible digital experiences.
        </Typography>
      </Box>
 
        <Footer />
   
    </Box>
  );
};

export default Sidebar;
