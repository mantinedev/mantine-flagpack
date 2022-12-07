import React from 'react';
import { createFlag } from '../create-flag';

export const KWFlag = createFlag(
  'KW',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <defs>
      <mask id="mantine-dx4e0nwx2" fill="#fff">
        <path fillRule="evenodd" d="M0 0h32v24H0z" />
      </mask>
      <mask id="mantine-9odrgdul5" fill="#fff">
        <use fillRule="evenodd" xlinkHref="#mantine-7febadhz9" />
      </mask>
      <path id="mantine-7febadhz9" d="M0 0h32v24H0z" />
    </defs>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-dx4e0nwx2)">
      <use fill="#f7fcff" xlinkHref="#mantine-7febadhz9" />
      <path fill="#093" d="M0 0h32v8H0z" mask="url(#mantine-9odrgdul5)" />
      <path fill="#e31d1c" d="M0 16h32v8H0z" mask="url(#mantine-9odrgdul5)" />
      <path fill="#272727" d="M0 0v24l12-8V8z" />
    </g>
  </svg>
);
