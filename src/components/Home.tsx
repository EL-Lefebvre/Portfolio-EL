import styled, { keyframes } from "styled-components";
import Background from "../assets/background-3.jpg";
import Box from '@mui/material/Box'
import Skills from "./skillsSection/Skills"
const Home = () => {
  return (
    <Box>


      <Main>
        <TitleDiv>
          <h1>Elodie Lefebvre</h1>
        </TitleDiv>
        <SubContainer>
          <h2>Frontend Developer</h2>
        </SubContainer>
      </Main>
<Box> 
Frontend Developer with over a year of experience, with some backend knowledge as well. I am an ambitious, self-starting, self-reliant yet open-minded developer who enjoys the challenge of building projects, finding creative solutions and pushing myself to deliver the best possible product in an efficient way.

<Skills />

</Box>
    </Box>
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
