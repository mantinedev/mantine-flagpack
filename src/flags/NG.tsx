import React from 'react';
import { createFlag } from '../create-flag';

export const NGFlag = createFlag(
  'NG',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <mask id="mantine-sgrbotpjd" fill="#fff">
      <path fillRule="evenodd" d="M0 0h32v24H0z" />
    </mask>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-sgrbotpjd)">
      <path fill="#f7fcff" d="M0 0h32v24H0z" />
      <path fill="#093" d="M21 0h11v24H21zM0 0h11v24H0z" />
    </g>
  </svg>
);
