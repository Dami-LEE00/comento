import { css, keyframes } from '@emotion/react';

export const blink = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(2.5rem);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;