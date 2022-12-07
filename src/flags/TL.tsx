import React from 'react';
import { createFlag } from '../create-flag';

export const TLFlag = createFlag(
  'TL',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <mask id="mantine-y8x9e0ct7" fill="#fff">
      <path fillRule="evenodd" d="M0 0h32v24H0z" />
    </mask>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-y8x9e0ct7)">
      <path
        fill="#e31d1c"
        fillRule="nonzero"
        stroke="#f7fcff"
        strokeWidth="2"
        d="M33-1v26H-1V-1z"
      />
      <path fill="#feca00" d="M0 0l24 12L0 24z" />
      <path fill="#272727" d="M0 0l16 12L0 24z" />
      <path
        fill="#f7fcff"
        d="M6.648 14.409l-2.02 2.1-.21-2.986-2.576-1.586 2.686-.843.439-2.958 1.86 2.342 2.712-.727-1.402 2.776L9.5 15.203z"
      />
    </g>
  </svg>
);
