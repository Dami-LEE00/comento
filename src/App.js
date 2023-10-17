/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/QnaList";
import QnaList from "./pages/QnaList";
import QnaDetail from "./pages/QnaDetail";

function App() {
  return (
    <div css={wrapper}>
      <Routes>
        <Route path="/" element={<QnaList />} />
        <Route path="/qna/:id" element={<QnaList />} />
      </Routes>
    </div>
  );
}

export default App;

const wrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1.25rem 2.5rem;
`;