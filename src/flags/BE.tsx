import React from 'react';
import { createFlag } from '../create-flag';

export const BEFlag = createFlag(
  'BE',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <mask id="mantine-v1rlfvdmt" fill="#fff">
      <path fillRule="evenodd" d="M0 0h32v24H0z" />
    </mask>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-v1rlfvdmt)">
      <path fill="#feca00" d="M10 0h11v24H10z" />
      <path fill="#e31d1c" d="M21 0h11v24H21z" />
      <path fill="#1d1d1d" d="M0 0h11v24H0z" />
    </g>
  </svg>
);
