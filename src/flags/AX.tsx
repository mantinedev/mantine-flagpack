import React from 'react';
import { createFlag } from '../create-flag';

export const AXFlag = createFlag(
  'AX',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <defs>
      <mask id="mantine-o4ok0rr4x" fill="#fff">
        <path fillRule="evenodd" d="M0 0h32v24H0z" />
      </mask>
      <mask id="mantine-oslp073s5" fill="#fff">
        <use fillRule="evenodd" xlinkHref="#mantine-anfgjyd2v" />
      </mask>
      <path id="mantine-anfgjyd2v" d="M0 0h32v24H0z" />
    </defs>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-o4ok0rr4x)">
      <use fill="#0061c1" xlinkHref="#mantine-anfgjyd2v" />
      <g fill="#d21034" stroke="#ffce00" strokeWidth="2" mask="url(#mantine-oslp073s5)">
        <path d="M15-1V9h18v6H15v10H9V15H-1V9H9V-1z" />
      </g>
    </g>
  </svg>
);
