import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box, IconButton, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box display="flex" alignItems="center" gap="10px">
      <IconButton>
        <Link
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon style={{ color: "black", height: "20px" }} />
        </Link>
      </IconButton>
      <IconButton>
        <Link
          href="https://www.linkedin.com/in/elodie-lefebvre-913481178/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon style={{ color: "black", height: "20px" }} />
        </Link>
      </IconButton>
    </Box>
  );
};

export default Footer;
