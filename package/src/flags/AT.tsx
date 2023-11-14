import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function ATFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-0pbd2nhem" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-nn3zfce47" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-0v07qysgh" />
          </mask>
          <path id="mantine-0v07qysgh" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-0pbd2nhem)">
          <use fill="#f7fcff" xlinkHref="#mantine-0v07qysgh" />
          <path fill="#c51918" d="M0 0h32v8H0zm0 16h32v8H0z" mask="url(#mantine-nn3zfce47)" />
        </g>
      </svg>
    </Box>
  );
}
