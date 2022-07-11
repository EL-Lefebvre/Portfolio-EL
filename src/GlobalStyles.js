import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Raleway',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    font-size: calc(10px + 2vmin);
  
  }
  
  code {
    font-family: source-code-pro, 'Poppins', 
      monospace;
      background-color: '#fdf5df'
  }
  
  *{
      padding:0;
      font-family: 'Raleway', sans-serif;
  }

`;

export default GlobalStyles;
