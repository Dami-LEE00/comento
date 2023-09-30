/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

function Home() {
  return (
    <div css={wrapper}>
      <h1>Home</h1>
      <div>
        <span>로그인 완료</span>
        <h3>환영합니다 😊</h3>
      </div>
    </div>
  )
}

export default Home;

const wrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;