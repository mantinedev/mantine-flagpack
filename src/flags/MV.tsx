import React from 'react';
import { createFlag } from '../create-flag';

export const MVFlag = createFlag(
  'MV',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <mask id="mantine-7tiynj93h" fill="#fff">
      <path fillRule="evenodd" d="M0 0h32v24H0z" />
    </mask>
    <mask id="mantine-wst8mt7mv" fill="#fff">
      <path fillRule="evenodd" d="M6 6h20v12H6z" />
    </mask>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-7tiynj93h)">
      <path fill="#c51918" d="M0 0h32v22a2 2 0 01-2 2H2a2 2 0 01-2-2z" />
      <path fill="#c51918" d="M0 0h32v24H0z" />
      <path stroke="#b6eb9a" strokeOpacity=".238" strokeWidth="2" d="M25 7v10H7V7z" />
      <path
        fill="#f9fafa"
        d="M16.033 12.462c-.017 3.066 2.396 4.7 2.396 4.7-2.753.324-4.586-2.173-4.586-4.67s2.498-4.56 4.586-5.49c0 0-2.379 2.395-2.396 5.46z"
        mask="url(#mantine-wst8mt7mv)"
      />
    </g>
  </svg>
);
