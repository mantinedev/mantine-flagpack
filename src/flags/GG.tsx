import React from 'react';
import { createFlag } from '../create-flag';

export const GGFlag = createFlag(
  'GG',
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
    <defs>
      <mask id="mantine-gi5cs8ahq" fill="#fff">
        <path fillRule="evenodd" d="M0 0h32v24H0z" />
      </mask>
      <mask id="mantine-9hptx7b6u" fill="#fff">
        <use fillRule="evenodd" xlinkHref="#mantine-5regxrjmi" />
      </mask>
      <path id="mantine-5regxrjmi" d="M0 0h32v24H0z" />
    </defs>
    <g fill="none" fillRule="evenodd" mask="url(#mantine-gi5cs8ahq)">
      <use fill="#f7fcff" xlinkHref="#mantine-5regxrjmi" />
      <g mask="url(#mantine-9hptx7b6u)">
        <path fill="#e31d1c" d="M12 0h8v8h12v8H20v8h-8v-8H0V8h12z" />
        <path
          fill="#feca00"
          d="M18.966 3.046l-.957 1.76L18 4.804V10h7.106v-.057l1.76-.998v5.96L25.201 14H18v5.046h.009l.957 1.76h-5.96L14 19.048V14H6.769l-1.663.906v-5.96l1.76.997-.001.057H14V4.801l-.994-1.755z"
        />
      </g>
    </g>
  </svg>
);
