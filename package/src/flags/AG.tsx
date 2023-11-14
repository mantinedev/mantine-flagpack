import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function AGFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <mask id="mantine-6vske7nm4" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-6vske7nm4)">
          <path fill="#1b1b1b" d="M0 0h32v24H0z" />
          <path
            fill="#f9d313"
            d="M16 14l-2.003 3.8.05-4.196-3.658 2.65 2.093-3.76-4.59.977 3.72-2.58L7 10l4.613-.89L7.89 6.529l4.59.977-2.092-3.76 3.659 2.65-.05-4.195L16 6l2.003-3.8-.05 4.196 3.658-2.65-2.093 3.76 4.59-.977-3.72 2.58L25 10l-4.613.89 3.722 2.581-4.59-.977 2.092 3.76-3.659-2.65.05 4.195z"
          />
          <path fill="#f1f9ff" d="M6 14h20v10H6z" />
          <path fill="#4a80e8" d="M2 10h28v4H2z" />
          <path fill="#e31d1c" d="M0 6l16 18L32 6v18H0z" />
        </g>
      </svg>
    </Box>
  );
}
