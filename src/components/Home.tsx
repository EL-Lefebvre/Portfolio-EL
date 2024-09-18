import React from "react";
import { Box, Typography } from "@mui/material";
import "./Home.css";

const Home = () => {
  return (
    <Box className="pageContainer">
      <Box className="staticSection">
        <Typography variant="h4">Elodie Lefebvre</Typography>
        <Typography variant="body1">Frontend Developer </Typography>
      </Box>

      <Box className="scrollableSection">
        <Typography variant="h4">Right Scrollable Content</Typography>
        {[...Array(80)].map((_, index) => (
          <Typography key={index} variant="body1">
            Project #{index + 1}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default Home;
