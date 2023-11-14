import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function ZAFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <mask id="mantine-3mmfkfmbc" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-3mmfkfmbc)">
          <path fill="#f7fcff" d="M0 0h32v24H0z" />
          <path fill="#e31d1c" d="M0 0h32v8H0z" />
          <path fill="#3d58db" d="M0 16h32v8H0z" />
          <g strokeWidth="2">
            <path fill="#5eaa22" stroke="#f7fcff" d="M-1-4.045L15.772 9H33v6H15.772L-1 28.045z" />
            <path fill="#272727" stroke="#feca00" d="M-1 4l10.667 8L-1 20z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
