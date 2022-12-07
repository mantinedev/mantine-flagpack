import React from 'react';
import { createFlag } from '../create-flag';

export const SCFlag = createFlag(
  'SC',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <defs>
      <mask id="mantine-46o7mkuhi" fill="#fff">
        <path fillRule="evenodd" d="M0 0h32v24H0z" />
      </mask>
      <mask id="mantine-im8sc6jkc" fill="#fff">
        <use fillRule="evenodd" xlinkHref="#mantine-j28p6cw01" />
      </mask>
      <path id="mantine-j28p6cw01" d="M0 0h32v24H0z" />
    </defs>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-46o7mkuhi)">
      <use fill="#2e42a5" xlinkHref="#mantine-j28p6cw01" />
      <path fill="#ffd018" d="M0 23.997L16.151-2h16.151z" mask="url(#mantine-im8sc6jkc)" />
      <path
        fill="#e31d1c"
        fillRule="nonzero"
        d="M0 23.997l34.463-12.999V-5.103z"
        mask="url(#mantine-im8sc6jkc)"
      />
      <path
        fill="#f7fcff"
        fillRule="nonzero"
        d="M0 23.997l34.463-4.999v-8.101z"
        mask="url(#mantine-im8sc6jkc)"
      />
      <path fill="#5eaa22" d="M0 23.997h34.463v-7.1z" mask="url(#mantine-im8sc6jkc)" />
    </g>
  </svg>
);
