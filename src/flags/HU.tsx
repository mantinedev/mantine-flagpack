import React from 'react';
import { createFlag } from '../create-flag';

export const HUFlag = createFlag(
  'HU',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <defs>
      <mask id="mantine-fm9j9qg9a" fill="#fff">
        <path fillRule="evenodd" d="M0 0h32v24H0z" />
      </mask>
      <mask id="mantine-9eo436m2q" fill="#fff">
        <use fillRule="evenodd" xlinkHref="#mantine-2ugqdyq54" />
      </mask>
      <path id="mantine-2ugqdyq54" d="M0 0h32v24H0z" />
    </defs>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-fm9j9qg9a)">
      <use fill="#f7fcff" xlinkHref="#mantine-2ugqdyq54" />
      <path fill="#f14423" d="M0 0h32v8H0z" mask="url(#mantine-9eo436m2q)" />
      <path fill="#5eaa22" d="M0 16h32v8H0z" mask="url(#mantine-9eo436m2q)" />
    </g>
  </svg>
);
