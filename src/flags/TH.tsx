import React from 'react';
import { createFlag } from '../create-flag';

export const THFlag = createFlag(
  'TH',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <mask id="mantine-kcxt085ze" fill="#fff">
      <path fillRule="evenodd" d="M0 0h32v24H0z" />
    </mask>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-kcxt085ze)">
      <path fill="#f50101" d="M0 16h32v8H0zM0 0h32v6H0z" />
      <path fill="#3d58db" stroke="#fff" strokeWidth="3" d="M33.5 6.5v11h-35v-11z" />
    </g>
  </svg>
);
