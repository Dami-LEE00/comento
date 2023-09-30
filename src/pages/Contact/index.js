/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { fadeInUp } from '../../assets/animations';

function Contact() {
  return (
    <div css={wrapper}>
      {/* Description */}
      <div css={desc}>
        <p>항상 개발에 대한 열정을 가지고 배우며 성장하고 있어요 :)</p>
        <p>새로운 기술과 아이디어를 공유하며 다양한 프로젝트에 참여하고 싶습니다.</p>
      </div>
      {/* Info_Email */}
      <a
        css={email}
        href='mailto:dxmxxii@gmail.com'
      >
        dxmxxii@gmail.com
      </a>
      {/* Info_Phone_Github */}
      <div css={addInfo}>
        <div css={addInfoBox}>
          <span>PHONE</span>
          <a href='tel:010-7773-0540'>010.7773.0540</a>
        </div>
        <div css={addInfoBox}>
          <span>GITHUB</span>
          <a 
            href='https://github.com/Dami-LEE00' 
            target='_blank'
            rel='noreferrer noopener'
          >
            Dami-LEE00
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact;

const wrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  animation: ${fadeInUp} 0.5s linear;
`;
const desc = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  p {
    color: #999;
  }
`;
const email = css`
  display: inline-block;
  text-decoration: none;
  font-size: 6rem;
  font-weight: 300;
  color: #000;
  transition: 0.3s;

  &:hover {
    color: royalblue;
  }
`;
const addInfo = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.625rem;
`;
const addInfoBox = css`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.125rem;
  span {
    display: inline-block;
    width: 5rem;
    margin-right: 1.25rem;
    border-right: 0.125rem solid royalblue;
  }
  a {
    color: #000;
    transition: 0.3s;
    &:hover {
      color: #999;
    }
  }
`;