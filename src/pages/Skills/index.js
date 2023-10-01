/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import objectData from '../../objectData.json';
import { fadeInUp } from '../../assets/animations';

function Skills() {
  return (
    <div css={wrapper}>
      <div css={contents}>
        {objectData.map((item) => (
          <div css={logoImg}>
            <img
              src={item.img}
              alt={item.skill}
            />         
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills;

const wrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
  animation: ${fadeInUp} 0.5s linear;
`;
const contents = css`
  margin: 0 14%;
  text-align: center;
`;
const logoImg = css`
  position: relative;
  display: inline-block;
  width: 21%;
  min-width: 9rem;
  margin: 0.625rem;
  padding: 0.625rem;
  img {
    width: 100%;
    transform: scale(0.9);
    transition: 0.25s;
    &:hover {
      transform: scale(1.1);
    }
  }
  `;