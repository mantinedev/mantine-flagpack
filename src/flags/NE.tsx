import React from 'react';
import { createFlag } from '../create-flag';

export const NEFlag = createFlag(
  'NE',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <defs>
      <mask id="mantine-x3bgqojjt" fill="#fff">
        <path fillRule="evenodd" d="M0 0h32v24H0z" />
      </mask>
      <mask id="mantine-qa0crnrt1" fill="#fff">
        <use fillRule="evenodd" xlinkHref="#mantine-lrs46amox" />
      </mask>
      <path id="mantine-lrs46amox" d="M0 0h32v24H0z" />
    </defs>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-x3bgqojjt)">
      <use fill="#f7fcff" xlinkHref="#mantine-lrs46amox" />
      <path fill="#fc6500" d="M0 0h32v8H0z" mask="url(#mantine-qa0crnrt1)" />
      <path fill="#5eaa22" d="M0 16h32v8H0z" mask="url(#mantine-qa0crnrt1)" />
      <circle cx="16" cy="12" r="4" fill="#fc6500" mask="url(#mantine-qa0crnrt1)" />
    </g>
  </svg>
);
