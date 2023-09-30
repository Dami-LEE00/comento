/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import myPhoto from '../../assets/images/profileImg.jpg';
import { fadeInUp } from '../../assets/animations';

function Home() {
  return (
    <div css={wrapper}>
      {/* Profile Image */}
      <img 
        css={profileImg} 
        src={myPhoto} 
        alt='damilee profile' 
      /> 
      {/* Profile Detail */}
      <div css={profileDetail}>
        <h3 css={title}>안녕하세요! 프론트엔드 개발자를 꿈꾸는 이다미입니다.</h3>
        <div css={desc}>
          <p>
            사용자의 눈높이에 맞춘 다양한 디자인과<br />
            직관적인 인터페이스를 개발하는 것에 큰 흥미를 가지고 있어요.
          </p>
          <p>팀원들과의 협업을 통해 서로의 아이디어를 나누는 것을 중요하게 생각해요.</p>
          <p>
            현대 웹 기술이 빠르게 변화하는 환경에서 새로운 아이디어를 시각화하고,<br />                사용자의 경험을 지속적으로 개선하는 것이 저의 목표입니다!
          </p>
        </div>
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
  gap: 2.5rem;
  max-width: 1280px;
  animation: ${fadeInUp} 0.5s linear;
`;
const profileImg = css`
  width: 30%;
  min-width: 18.75rem;
`;
const profileDetail = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.25rem;
  width: 45%;
`;
const title = css`
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  font-weight: 600;
`;
const desc = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.25rem;

  p {
    line-height: 1.6;
    font-size: 1rem;
  }
`;