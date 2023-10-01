/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

export const wrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
`;

export const formWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .625rem;
`;

export const inputWrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  label {
    display: inline-block;
    width: 10rem;
    cursor: pointer;
  }
  input {
    width: 15rem;
    padding: .3125rem .625rem;
  }
`;

export const btnWrapper = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1.25rem;
  width: 100%;
  margin-top: 1.25rem;
  button {
    width: 100%;
    padding: .625rem 0;
  }
`;