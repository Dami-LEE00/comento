import { Global, css } from "@emotion/react";

function GlobalStyle() {
  return <Global styles={globalStyle} />;
}

export default GlobalStyle;

const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    background-color: #fff;
    color: #000;
  }
  
  ul,
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;