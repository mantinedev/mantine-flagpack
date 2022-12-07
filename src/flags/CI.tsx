import React from 'react';
import { createFlag } from '../create-flag';

export const CIFlag = createFlag(
  'CI',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <mask id="mantine-mubgju7bo" fill="#fff">
      <path fillRule="evenodd" d="M0 0h32v24H0z" />
    </mask>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-mubgju7bo)">
      <path fill="#67bd38" d="M22 0h10v24H22z" />
      <path fill="#e47e00" d="M0 0h10v24H0z" />
      <path fill="#f7fcff" d="M10 0h12v24H10z" />
    </g>
  </svg>
);
