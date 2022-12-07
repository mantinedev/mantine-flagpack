import React from 'react';
import { createFlag } from '../create-flag';

export const BDFlag = createFlag(
  'BD',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <mask id="mantine-h5sh57iav" fill="#fff">
      <path fillRule="evenodd" d="M0 0h32v24H0z" />
    </mask>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-h5sh57iav)">
      <path fill="#38a17e" d="M0 0h32v24H0z" />
      <circle cx="13" cy="12" r="7" fill="#f72e45" />
    </g>
  </svg>
);
