import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function LYFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <mask id="mantine-sw7n7o0mr" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-sw7n7o0mr)">
          <path fill="#55ba07" d="M0 18h32v4a2 2 0 01-2 2H2a2 2 0 01-2-2z" />
          <path fill="#1d1d1d" d="M0 6h32v12H0z" />
          <path fill="#e11c1b" d="M2 0h28a2 2 0 012 2v4H0V2a2 2 0 012-2z" />
          <path
            fill="#fff"
            d="M15.477 7.94c1.291 0 2.973.219 3.48 2.216-.606-.736-1.764-1.263-3.178-1.094-1.413.17-2.22 1.719-2.22 3.25-.018 1.446.446 2.383 2.239 2.754 1.792.37 2.299-.651 3.05-1.19-.081.658-.519 2.588-3.314 2.588-2.237-.045-3.994-1.865-3.994-4.285 0-2.779 1.994-4.256 3.937-4.239zm5.01 2.089l.86.972 1.218-.257-.872 1.177.985 1.152-1.458-.3-1.005 1.069.207-1.554-1.483-.58 1.324-.417z"
          />
        </g>
      </svg>
    </Box>
  );
}
