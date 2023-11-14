import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function CLFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <mask id="mantine-y5rgy737s" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-y5rgy737s)">
          <path fill="#3d58db" d="M0 0h14v14H0z" />
          <path fill="#f7fcff" d="M14-2h18v16H14z" />
          <path fill="#e31d1c" d="M0 14h32v10H0z" />
          <path
            fill="#f7fcff"
            d="M7.014 9.783l-3.803 2.272L5.088 8.19 1.764 5.68 5.6 5.639 7.05 2.21l.93 3.43 3.632.017L8.851 8.11l1.434 3.944z"
          />
        </g>
      </svg>
    </Box>
  );
}
