import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function AEFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <path id="mantine-cpjwmojav" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd">
          <mask id="mantine-9nwgtse72" fill="#fff">
            <use xlinkHref="#mantine-cpjwmojav" />
          </mask>
          <g mask="url(#mantine-9nwgtse72)">
            <path fill="#F7FCFF" d="M0 0h32v24H0z" />
            <path fill="#5EAA22" d="M0 0h32v8H0z" />
            <path fill="#272727" d="M0 16h32v8H0z" />
            <path fill="#E31D1C" d="M0 0h10v24H0z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
