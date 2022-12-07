import React from 'react';
import { createFlag } from '../create-flag';

export const MUFlag = createFlag(
  'MU',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <defs>
      <mask id="mantine-he67utc8k" fill="#fff">
        <path fillRule="evenodd" d="M0 0h32v24H0z" />
      </mask>
      <mask id="mantine-rl2afidrf" fill="#fff">
        <use fillRule="evenodd" xlinkHref="#mantine-jht06zw80" />
      </mask>
      <path id="mantine-jht06zw80" d="M0 0h32v24H0z" />
    </defs>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-he67utc8k)">
      <use fill="#579d20" xlinkHref="#mantine-jht06zw80" />
      <path fill="#feca00" d="M0 12h32v6H0z" mask="url(#mantine-rl2afidrf)" />
      <path fill="#3d58db" d="M0 6h32v6H0z" mask="url(#mantine-rl2afidrf)" />
      <path fill="#e11c1b" d="M0 0h32v6H0z" mask="url(#mantine-rl2afidrf)" />
    </g>
  </svg>
);
