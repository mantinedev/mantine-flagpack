import React from 'react';
import { createFlag } from '../create-flag';

export const QAFlag = createFlag(
  'QA',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <mask id="mantine-2ukrvmgvl" fill="#fff">
      <path fillRule="evenodd" d="M0 0h32v24H0z" />
    </mask>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-2ukrvmgvl)">
      <path fill="#b61c49" d="M0 0h32v24H0z" />
      <path
        fill="#f7fcff"
        d="M0 0h6.8L12 2 6.8 4 12 6 6.8 8l5.2 2-5.2 2 5.2 2-5.2 2 5.2 2-5.2 2 5.2 2-5.2 2H0z"
      />
    </g>
  </svg>
);
