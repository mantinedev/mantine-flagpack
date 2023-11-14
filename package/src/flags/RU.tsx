import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function RUFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-uy1guev1v" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-0igxospvw" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-5gedszndl" />
          </mask>
          <path id="mantine-5gedszndl" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-uy1guev1v)">
          <use fill="#3d58db" xlinkHref="#mantine-5gedszndl" />
          <path fill="#f7fcff" d="M0 0h32v8H0z" mask="url(#mantine-0igxospvw)" />
          <path fill="#c51918" d="M0 16h32v8H0z" mask="url(#mantine-0igxospvw)" />
        </g>
      </svg>
    </Box>
  );
}
