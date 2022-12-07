import React from 'react';
import { createFlag } from '../create-flag';

export const GAFlag = createFlag(
  'GA',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <mask id="mantine-vlcilmv2n" fill="#fff">
      <path fillRule="evenodd" d="M0 0h32v24H0z" />
    </mask>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-vlcilmv2n)">
      <path fill="#40a8ff" d="M0 16h32v8H0z" />
      <path fill="#feca00" d="M0 8h32v8H0z" />
      <path fill="#73be4a" d="M0 0h32v8H0z" />
    </g>
  </svg>
);
