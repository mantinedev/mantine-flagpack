import React from 'react';
import { createFlag } from '../create-flag';

export const BWFlag = createFlag(
  'BW',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <defs>
      <mask id="mantine-cjh0hmm4l" fill="#fff">
        <path fillRule="evenodd" d="M0 0h32v24H0z" />
      </mask>
      <mask id="mantine-funk53oys" fill="#fff">
        <use fillRule="evenodd" xlinkHref="#mantine-u5eg4u5ff" />
      </mask>
      <path id="mantine-u5eg4u5ff" d="M0 0h32v24H0z" />
    </defs>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-cjh0hmm4l)">
      <use fill="#42addf" xlinkHref="#mantine-u5eg4u5ff" />
      <path fill="#58a5ff" d="M0 0h32v8H0z" mask="url(#mantine-funk53oys)" />
      <path
        fill="#272727"
        stroke="#f7fcff"
        strokeWidth="2"
        d="M-1 9h34v6H-1z"
        mask="url(#mantine-funk53oys)"
      />
    </g>
  </svg>
);
