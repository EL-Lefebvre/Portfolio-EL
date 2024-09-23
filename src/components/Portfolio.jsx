import React from "react";
import styled from "styled-components";
import "../data/projects.json";
const Portfolio = () => {
  return (
    <Wrapper>
      <Main>
        <h2>Projects</h2>
        <List>
          <List>Weartek (E-commerce)</List>
          <List>Twitter Clone</List>
          <List>Weartek (E-commerce)</List>
          <List>
            <a href="https://nyan-kat-attack.netlify.app/">Nyan Cat</a>
          </List>
        </List>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;

  justify-content: center;
  padding-top: 200px;
`;
const Main = styled.div``;
const List = styled.ul``;
const Item = styled.li``;
export default Portfolio;
