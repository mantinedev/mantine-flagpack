import React from 'react';
import { createFlag } from '../create-flag';

export const NLFlag = createFlag(
  'NL',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <defs>
      <mask id="mantine-qzpccdpzr" fill="#fff">
        <path fillRule="evenodd" d="M0 0h32v24H0z" />
      </mask>
      <mask id="mantine-v3vwn8o0j" fill="#fff">
        <use fillRule="evenodd" xlinkHref="#mantine-0k4cb63pr" />
      </mask>
      <path id="mantine-0k4cb63pr" d="M0 0h32v24H0z" />
    </defs>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-qzpccdpzr)">
      <use fill="#f7fcff" xlinkHref="#mantine-0k4cb63pr" />
      <path fill="#e31d1c" d="M0 0h32v8H0z" mask="url(#mantine-v3vwn8o0j)" />
      <path fill="#3d58db" d="M0 16h32v8H0z" mask="url(#mantine-v3vwn8o0j)" />
    </g>
  </svg>
);
