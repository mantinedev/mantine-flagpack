import React from 'react';
import { createFlag } from '../create-flag';

export const BGFlag = createFlag(
  'BG',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <defs>
      <mask id="mantine-0ukcwspx3" fill="#fff">
        <path fillRule="evenodd" d="M0 0h32v24H0z" />
      </mask>
      <mask id="mantine-f9ykkx5o5" fill="#fff">
        <use fillRule="evenodd" xlinkHref="#mantine-3x9191uvo" />
      </mask>
      <path id="mantine-3x9191uvo" d="M0 0h32v24H0z" />
    </defs>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-0ukcwspx3)">
      <use fill="#5eaa22" xlinkHref="#mantine-3x9191uvo" />
      <path fill="#f7fcff" d="M0 0h32v8H0z" mask="url(#mantine-f9ykkx5o5)" />
      <path fill="#e22c18" d="M0 16h32v8H0z" mask="url(#mantine-f9ykkx5o5)" />
    </g>
  </svg>
);
