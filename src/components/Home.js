import React from "react";
import styled, { keyframes } from "styled-components";
import Background from "../assets/background-3.jpg";
import mountainsClip from '../assets/mountains.mp4'
const Home = () => {
  return (
    <>
      <MainClip className='videoTag' autoPlay loop muted>
    <source src={mountainsClip} type='video/mp4' />
</MainClip>

      <Main>
        <TitleDiv>
          <h1>Elodie Lefebvre</h1>
        </TitleDiv>
        <SubContainer>
          <h2>Full Stack Developer</h2>
        </SubContainer>
      </Main>

    </>
  );
};
const fade = keyframes`{
    from{
  
      opacity: 0;

    }
    to{
  
        opacity: 1;

      }
   }`;
const Wrapper = styled.div`

max-width:100;
  display: flex;
  justify-content: center;
  align-items: center;

`;
const Main = styled.div`

  z-index: 3;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
padding-top:200px;
  max-width: 100vw;
  animation: ${fade} 1s ease-in;
  @media (min-width: 200px) and (max-width:700px){
    width:98vw;

      }
`;
const MainClip = styled.video`
width:100vw;
height:100vh;
object-fit: cover;
position: fixed;
left: 0;
right:0;
top:0;
bottom:0;
z-index: -1;
`
const TitleDiv = styled.div`
letter-spacing: 10px;
font-size: 25px;

`;

const SubContainer = styled.div`

  font-weight: bolder;
  animation: ${fade} 3s ease-in;
`;

export default Home;
