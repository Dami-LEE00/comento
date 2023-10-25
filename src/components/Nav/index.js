/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import React from "react";
import { useNavigate } from 'react-router-dom';



const Nav = ({ tabs, currentTab, setCurrentTab }) => {
  const navigate = useNavigate();

  return (
    <div css={wrapper}>
      <ul css={navBar}>
        {tabs.map((tab) => (
          <li
            key={tab.menu}
            onClick={() => {
              navigate(`/${tab.url}`)
              setCurrentTab(tab.menu)
            }}
            className={currentTab === tab.menu ? 'active' : ''}
          >
            {tab.menu}
          </li>
        ))}
      </ul>
    </div>
  )
};

export default Nav;

const wrapper = css`
  width: 100%;
  /* position: fixed; */
  z-index: 999;
`;

const navBar = css`
  border: 1px solid green;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  padding: .625rem 0;
  border-bottom: .125rem solid #ddd;
  li {
    font-size: 1rem;
    font-weight: 400;
    cursor: pointer;

    &:hover {
      color: #999;
    }
  }
  .active {
    color: purple;
    }
`;