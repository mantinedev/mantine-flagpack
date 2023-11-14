import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function PSFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <mask id="mantine-utgjlbalb" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-utgjlbalb)">
          <path fill="#f7fcff" d="M0 0h32v24H0z" />
          <path fill="#5eaa22" d="M0 0h32v8H0z" />
          <path fill="#272727" d="M0 16h32v8H0z" />
          <path fill="#e31d1c" d="M0 2l16 10L0 22z" />
        </g>
      </svg>
    </Box>
  );
}
