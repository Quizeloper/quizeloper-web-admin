import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: #ffffff;
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
    font-weight: 400;
    width: 100vw;
    height: 100vh;
  }

  input,
  input:focus,
  input:active,
  textarea,
  text-area:focus,
  text-area:active,
  button,
  button:focus,
  button:active {
    box-shadow: none; 
    outline: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a,
  button {
    cursor: pointer;
  }

  img {
    display: block;
  }
`;

export default GlobalStyle;
