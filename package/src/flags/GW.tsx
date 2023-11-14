import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function GWFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <mask id="mantine-abbxam239" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-abbxam239)">
          <path fill="#fbcd17" d="M16 0h16v12H16z" />
          <path fill="#0b9e7a" d="M16 12h16v12H16z" />
          <path fill="#e11c1b" d="M0 0h16v24H0z" />
          <path
            fill="#1d1d1d"
            d="M8.93 14.606l-3.485 2.418 1.114-4.141L4 10.238l3.465-.143L8.93 6l1.466 4.095h3.458l-2.553 2.788 1.279 3.897z"
          />
        </g>
      </svg>
    </Box>
  );
}
