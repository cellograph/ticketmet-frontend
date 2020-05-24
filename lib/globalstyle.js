import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*, *:before, *:after  {
    margin: 0;
    padding: 0;
    box-sizing: border-box
}

html {
    font-size: 10px;
}

body {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    font-family: 'Lato', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.8;
    background: #f6f6f6;
    color: #333;
}

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}


input {
    line-height: 1.8;
    font-size: 1.6rem;
}

a {
    text-decoration: none;
    color: darkgrey;
}

a:hover {
    color: #333;
}

.slider {
    width: 100%;
    height: 50rem;
}

.z-10 {
    z-index: 100;
}

`;

export default GlobalStyle;
