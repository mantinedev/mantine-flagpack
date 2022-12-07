import React from 'react';
import { createFlag } from '../create-flag';

export const BFFlag = createFlag(
  'BF',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <defs>
      <mask id="mantine-pa5fe5gvj" fill="#fff">
        <path fillRule="evenodd" d="M0 0h32v24H0z" />
      </mask>
      <mask id="mantine-2s88ow3l2" fill="#fff">
        <use fillRule="evenodd" xlinkHref="#mantine-am5rbmf8r" />
      </mask>
      <path id="mantine-am5rbmf8r" d="M0 0h32v24H0z" />
    </defs>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-pa5fe5gvj)">
      <use fill="#5eaa22" xlinkHref="#mantine-am5rbmf8r" />
      <path fill="#c51918" d="M0 0h32v12H0z" mask="url(#mantine-2s88ow3l2)" />
      <path
        fill="#feca00"
        d="M16.035 15.77l-4.703 3.56 1.505-5.797-4.41-3.53h5.257l2.35-5.145 2.352 5.146h5.257l-4.457 3.534 1.551 5.792z"
        mask="url(#mantine-2s88ow3l2)"
      />
    </g>
  </svg>
);
