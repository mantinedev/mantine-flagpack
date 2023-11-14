import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function VNFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-qqd8t23eg" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-1akwgr4jq" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-c2rrng98f" />
          </mask>
          <path id="mantine-c2rrng98f" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-qqd8t23eg)">
          <path fill="#f7fcff" d="M0 0h32v24H0z" />
          <use fill="#e31d1c" xlinkHref="#mantine-c2rrng98f" />
          <g fill="#ffd221" mask="url(#mantine-1akwgr4jq)">
            <path d="M16.062 15.98l-5.151 3.275 1.728-5.733-3.674-3.746 5.065-.11 2.24-5.66 2.043 5.734 5.053.089-3.797 3.814 1.773 5.454z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
