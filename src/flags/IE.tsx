import React from 'react';
import { createFlag } from '../create-flag';

export const IEFlag = createFlag(
  'IE',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <mask id="mantine-s1u2gi5un" fill="#fff">
      <path fillRule="evenodd" d="M0 0h32v24H0z" />
    </mask>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-s1u2gi5un)">
      <path fill="#ff8c1a" d="M22 0h10v24H22z" />
      <path fill="#5eaa22" d="M0 0h12v24H0z" />
      <path fill="#f7fcff" d="M10 0h12v24H10z" />
    </g>
  </svg>
);
