import React from "react";
import styled from "styled-components";
import { Box, Card, CardContent, Typography } from "@mui/material";
import "./ProjectCard.css";

const ExperienceCard = ({ data }) => {
  return (
    <Card className="ExperienceCard">
      <CardContent className="CardContent">
        <Box className="DateSection">
          <Typography variant="subtitle2">{data.date}</Typography>
        </Box>
        <Box className="DetailsSection">
          <Typography variant="h6">{data.company}</Typography>
          <Typography variant="body1">{data.description}</Typography>
          <Box className="Projects">
            {data.projects.map((project, index) => (
              <Box key={index} className="ProjectDetails">
                <Typography variant="subtitle1">{project.project_name}</Typography>
                <Typography variant="caption">{project.date}</Typography>
                <Typography variant="body2">{project.description}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
