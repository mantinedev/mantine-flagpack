import React from 'react';
import { createFlag } from '../create-flag';

export const PWFlag = createFlag(
  'PW',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <defs>
      <mask id="mantine-cim0hf8kt" fill="#fff">
        <path fillRule="evenodd" d="M0 0h32v24H0z" />
      </mask>
      <mask id="mantine-o6rvvmrj0" fill="#fff">
        <use fillRule="evenodd" xlinkHref="#mantine-rimkkofpt" />
      </mask>
      <path id="mantine-rimkkofpt" d="M0 0h32v24H0z" />
    </defs>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-cim0hf8kt)">
      <use fill="#61c6f0" xlinkHref="#mantine-rimkkofpt" />
      <circle cx="11.5" cy="11.5" r="6.5" fill="#fbcd17" mask="url(#mantine-o6rvvmrj0)" />
    </g>
  </svg>
);
