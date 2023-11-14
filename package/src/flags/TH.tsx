import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function THFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <mask id="mantine-5k198dc8h" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-5k198dc8h)">
          <path fill="#f50101" d="M0 16h32v8H0zM0 0h32v6H0z" />
          <path fill="#3d58db" stroke="#fff" strokeWidth="3" d="M33.5 6.5v11h-35v-11z" />
        </g>
      </svg>
    </Box>
  );
}
