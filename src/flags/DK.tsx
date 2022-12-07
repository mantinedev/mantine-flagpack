import React from 'react';
import { createFlag } from '../create-flag';

export const DKFlag = createFlag(
  'DK',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <defs>
      <mask id="mantine-3bewqy1h4" fill="#fff">
        <path fillRule="evenodd" d="M0 0h32v24H0z" />
      </mask>
      <mask id="mantine-67kreohw2" fill="#fff">
        <use fillRule="evenodd" xlinkHref="#mantine-rn0oms1ou" />
      </mask>
      <path id="mantine-rn0oms1ou" d="M0 0h32v24H0z" />
    </defs>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-3bewqy1h4)">
      <use fill="#c51918" xlinkHref="#mantine-rn0oms1ou" />
      <g fill="#f7fcff" mask="url(#mantine-67kreohw2)">
        <path d="M10 0h4v10h18v4H14v10h-4V14H0v-4h10z" />
      </g>
    </g>
  </svg>
);
