/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div css={wrapper}>
      <Routes>
        <Route />
      </Routes>
    </div>
  );
}

export default App;

const wrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;