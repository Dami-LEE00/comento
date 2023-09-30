/** @jsxImportSource @emotion/react */

import { css, keyframes } from '@emotion/react';
import { blink } from '../../assets/animations';

function Nav({ tabs, setCurrentTab }) {
  
  return (
    <div css={wrapper}>
      <ul css={navBar}>
        {tabs.map((tab) => (
          <li
            key={tab.menu}
            onClick={() => setCurrentTab(tab.menu)}
          >
            {tab.menu}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Nav;

const wrapper = css`
  margin: 0;
  padding: 0.625rem 0;
  background-color: #ddd;
`;
const navBar = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  li {
    cursor: pointer;
    font-weight: 600;
    &:hover {
      animation: ${blink} 0.35s ease-in-out;
    }
  }
`;