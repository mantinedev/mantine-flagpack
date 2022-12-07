import React from 'react';
import { createFlag } from '../create-flag';

export const JPFlag = createFlag(
  'JP',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <defs>
      <mask id="mantine-hthynlpor" fill="#fff">
        <path fillRule="evenodd" d="M0 0h32v24H0z" />
      </mask>
      <mask id="mantine-vl58sxai6" fill="#fff">
        <use fillRule="evenodd" xlinkHref="#mantine-lih4fn0g4" />
      </mask>
      <path id="mantine-lih4fn0g4" d="M0 0h32v24H0z" />
    </defs>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-hthynlpor)">
      <use fill="#f7fcff" xlinkHref="#mantine-lih4fn0g4" />
      <circle cx="16" cy="12" r="7.5" fill="#e31d1c" mask="url(#mantine-vl58sxai6)" />
    </g>
  </svg>
);
