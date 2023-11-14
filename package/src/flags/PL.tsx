import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function PLFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-lqzbnhx49" fill="#fff">
            <rect width="32" height="24" fillRule="evenodd" rx="2" />
          </mask>
          <mask id="mantine-y6pwnjndv" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-15lwj4e9w" />
          </mask>
          <path id="mantine-15lwj4e9w" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-lqzbnhx49)">
          <use fill="#f7fcff" xlinkHref="#mantine-15lwj4e9w" />
          <path fill="#c51918" d="M0 12h32v12H0z" mask="url(#mantine-y6pwnjndv)" />
        </g>
      </svg>
    </Box>
  );
}
