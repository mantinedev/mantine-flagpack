import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function MCFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-5yj2nvhfp" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-meuhuxffh" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-w131avpyg" />
          </mask>
          <path id="mantine-w131avpyg" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-5yj2nvhfp)">
          <use fill="#f7fcff" xlinkHref="#mantine-w131avpyg" />
          <path fill="#c51918" d="M0 0h32v12H0z" mask="url(#mantine-meuhuxffh)" />
        </g>
      </svg>
    </Box>
  );
}
