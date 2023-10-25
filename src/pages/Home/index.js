/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import React, { useState } from "react";
import BannerCarousel from "../../components/BannerCarousel";
import Best from "../Best";



const Home = () => {

  return (
    <div>
      <BannerCarousel />
      <Best />
    </div>
  )
};

export default Home;

// const wrapper = css`
//   width: 100%;
//   height: calc(100vh - 2.6563rem);
// `;
