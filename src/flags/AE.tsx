import React from 'react';
import { createFlag } from '../create-flag';

export const AEFlag = createFlag(
  'AE',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <defs>
      <path id="mantine-w32vkrr15" d="M0 0h32v24H0z" />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="mantine-upvb9muhz" fill="#fff">
        <use xlinkHref="#mantine-w32vkrr15" />
      </mask>
      <g mask="url(#mantine-upvb9muhz)">
        <path fill="#F7FCFF" d="M0 0h32v24H0z" />
        <path fill="#5EAA22" d="M0 0h32v8H0z" />
        <path fill="#272727" d="M0 16h32v8H0z" />
        <path fill="#E31D1C" d="M0 0h10v24H0z" />
      </g>
    </g>
  </svg>
);
