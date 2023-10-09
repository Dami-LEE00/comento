// /** @jsxImportSource @emotion/react */

// import { css } from "@emotion/react";
// import { Routes, Route } from 'react-router-dom';
// import Home from "./pages/Home";
// import SignUp from "./pages/SignUp";
// import SignIn from "./pages/SignIn";

// function App() {
//   return (
//     <div css={wrapper}>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/signin" element={<SignIn />} />
//       </Routes>
//     </div>
//   )
// }

// export default App;

// const wrapper = css`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: flex-start;
//   padding-top: 2.5rem;
// `;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

export default function App() { 
  return (
    // Router 설정 및 컴포넌트 라우팅
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
};
