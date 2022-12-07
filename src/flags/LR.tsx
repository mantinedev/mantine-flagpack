import React from 'react';
import { createFlag } from '../create-flag';

export const LRFlag = createFlag(
  'LR',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <mask id="mantine-ibqc7yq54" fill="#fff">
      <path fillRule="evenodd" d="M0 0h32v24H0z" />
    </mask>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-ibqc7yq54)">
      <path fill="#f7fcff" d="M0 0h32v24H0z" />
      <path
        fill="#e31d1c"
        d="M.027 5.5h32v3h-32zM0 0h32v3H0zm-.059 11h32v3h-32zm.171 5.4h32v3h-32zm-.011 5.1h32v3h-32z"
      />
      <path fill="#3d58db" d="M0 0h16v14H0z" />
      <path
        fill="#f7fcff"
        d="M8.132 9.213l-2.92 2.026.933-3.47L4 5.552l2.904-.12L8.132 2l1.229 3.432h2.899l-2.14 2.337 1.072 3.266z"
      />
    </g>
  </svg>
);
