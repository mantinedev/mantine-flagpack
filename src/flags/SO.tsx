import React from 'react';
import { createFlag } from '../create-flag';

export const SOFlag = createFlag(
  'SO',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <mask id="mantine-rw18bokeu" fill="#fff">
      <path fillRule="evenodd" d="M0 0h32v24H0z" />
    </mask>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-rw18bokeu)">
      <path fill="#56c6f5" d="M0 0h32v24H0z" />
      <path
        fill="#f7fcff"
        d="M16.179 14.717l-3.764 2.394 1.262-4.19-2.684-2.737 3.7-.08 1.638-4.137 1.493 4.19 3.692.065-2.775 2.788 1.296 3.985z"
      />
    </g>
  </svg>
);
