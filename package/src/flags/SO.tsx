import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function SOFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <mask id="mantine-geg79bv8b" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-geg79bv8b)">
          <path fill="#56c6f5" d="M0 0h32v24H0z" />
          <path
            fill="#f7fcff"
            d="M16.179 14.717l-3.764 2.394 1.262-4.19-2.684-2.737 3.7-.08 1.638-4.137 1.493 4.19 3.692.065-2.775 2.788 1.296 3.985z"
          />
        </g>
      </svg>
    </Box>
  );
}
