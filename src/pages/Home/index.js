/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

function Home() {
  return (
    <div css={wrapper}>
      <h1 css={title}>Home</h1>
      <div css={descWrapper}>
        <span>로그인 완료</span>
        <h3>💙 환영합니다 💙</h3>
      </div>
    </div>
  )
}

export default Home;

const wrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
`;

const title = css`
  maring: 0;
  padding: 0;
  font-size: 3rem;
  font-weight: 400;
`;

const descWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  span {
    display: inline-block;
    font-size: 1rem;
    font-weight: 400;
    color: #999;
  }
  h3 {
    maring: 0;
    padding: 0;
    font-size: 1.5rem;
    font-weight: 400;
  }
`;