import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;400;700&display=swap');

body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Oswald',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Raleway',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    font-size: calc(10px + 2vmin);
  
  }
  code {
    font-family: 'Oswald', sans-serif;
    font-weight: 400; /* Default weight */
  }
  
  *{
      padding:0;
      font-family: 'Raleway', sans-serif;
  }


`;

export default GlobalStyles;
