import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function GHFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <mask id="mantine-zyncjz0dg" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-zyncjz0dg)">
          <path fill="#5eaa22" d="M0 16h32v8H0z" />
          <path fill="#feca00" d="M0 8h32v8H0z" />
          <path fill="#e11c1b" d="M0 0h32v8H0z" />
          <path
            fill="#1d1d1d"
            d="M16.075 14.49l-3.485 2.418 1.114-4.14-2.56-2.646 3.466-.143 1.465-4.095 1.466 4.095h3.46l-2.554 2.788 1.279 3.897z"
            opacity=".9"
          />
        </g>
      </svg>
    </Box>
  );
}
