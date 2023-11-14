import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function QAFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <mask id="mantine-4x2vqh65e" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-4x2vqh65e)">
          <path fill="#b61c49" d="M0 0h32v24H0z" />
          <path
            fill="#f7fcff"
            d="M0 0h6.8L12 2 6.8 4 12 6 6.8 8l5.2 2-5.2 2 5.2 2-5.2 2 5.2 2-5.2 2 5.2 2-5.2 2H0z"
          />
        </g>
      </svg>
    </Box>
  );
}
