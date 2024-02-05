import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Poppins", sans-serif;
    background-image: url("../assets/bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  ul,
  li {
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button,
  input {
    display: block;
  }

  a {
    text-decoration: none;
    color: #000;
  }
`;
