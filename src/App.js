/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />s
      </Routes>
    </div>
  )
}

export default App;