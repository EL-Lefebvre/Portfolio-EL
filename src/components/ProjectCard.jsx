import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styled from "styled-components";
import { Box, Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import "./ProjectCard.css";
import projectsData from "../data/projects.json"; 

const ProjectCard = ({data}) => {
  const navigate = useNavigate(); 



  return (
    <Card
      className="CardContainer"
      onClick={() => navigate(data.link)}
      style={{ cursor: "pointer" }}
    >

      <CardContent>
      <Box className="cardHeader">
      <Typography>{data.name}</Typography>

      <Typography variant="body1" className="cardDescription">{data.description}</Typography>
       
      <Stack direction="row" spacing={1} className="chipContainer">
            {data.languagesUsed.map((language) => (
              <Chip key={language} label={language.used} variant="outlined" />
            ))}
          </Stack>
          </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
