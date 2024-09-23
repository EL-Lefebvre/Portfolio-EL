import React from "react";
import { Box } from "@mui/material";
import "./Home.css";
import About from "./About";
import ExperienceCard from "./ExperienceCard";
import experienceData from "../data/experience.json"; 
import ProjectCard from "./ProjectCard";
import projectsData from "../data/projects.json"; 

const Home = () => {
  return (
    <Box className="scrollableSection">
      <About />
      <ExperienceCard data={experienceData}/>
      <ProjectCard data={projectsData} />
    </Box>
  );
};

export default Home;
