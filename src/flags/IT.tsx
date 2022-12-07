import React from 'react';
import { createFlag } from '../create-flag';

export const ITFlag = createFlag(
  'IT',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <mask id="mantine-msmhr5yq5" fill="#fff">
      <path fillRule="evenodd" d="M0 0h32v24H0z" />
    </mask>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-msmhr5yq5)">
      <path fill="#c51918" d="M22 0h10v24H22z" />
      <path fill="#5eaa22" d="M0 0h12v24H0z" />
      <path fill="#fff" d="M10 0h12v24H10z" />
    </g>
  </svg>
);
