import React from 'react';
import { createFlag } from '../create-flag';

export const BJFlag = createFlag(
  'BJ',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <mask id="mantine-uzkcqw9y8" fill="#fff">
      <path fillRule="evenodd" d="M0 0h32v24H0z" />
    </mask>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-uzkcqw9y8)">
      <path fill="#dd2c2b" d="M0 0h32v24H0z" />
      <path fill="#feca00" d="M0 0h32v14H0z" />
      <path fill="#5eaa22" d="M0 0h14v24H0z" />
    </g>
  </svg>
);
