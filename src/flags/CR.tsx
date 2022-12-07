import React from 'react';
import { createFlag } from '../create-flag';

export const CRFlag = createFlag(
  'CR',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <defs>
      <mask id="mantine-nbkrnyiw4" fill="#fff">
        <path fillRule="evenodd" d="M0 0h32v24H0z" />
      </mask>
      <mask id="mantine-mdldad9xj" fill="#fff">
        <use fillRule="evenodd" xlinkHref="#mantine-mhk5g1g8u" />
      </mask>
      <path id="mantine-mhk5g1g8u" d="M0 0h32v24H0z" />
    </defs>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-nbkrnyiw4)">
      <use fill="#2e42a5" xlinkHref="#mantine-mhk5g1g8u" />
      <path
        fill="#e31d1c"
        stroke="#f7fcff"
        strokeWidth="4"
        d="M-2 8h36v8H-2z"
        mask="url(#mantine-mdldad9xj)"
      />
    </g>
  </svg>
);
