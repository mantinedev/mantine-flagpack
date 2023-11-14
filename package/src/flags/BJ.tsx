import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function BJFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <mask id="mantine-mzsqzgps3" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-mzsqzgps3)">
          <path fill="#dd2c2b" d="M0 0h32v24H0z" />
          <path fill="#feca00" d="M0 0h32v14H0z" />
          <path fill="#5eaa22" d="M0 0h14v24H0z" />
        </g>
      </svg>
    </Box>
  );
}
