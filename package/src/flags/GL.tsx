import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function GLFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-1zgwm4z53" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-5ymztv8x2" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-ztxu7hois" />
          </mask>
          <mask id="mantine-e2jfo9lj8" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-ag6moqug6" />
          </mask>
          <path id="mantine-ztxu7hois" d="M0 0h32v12H0z" />
          <path id="mantine-ag6moqug6" d="M0 0h32v12H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-1zgwm4z53)">
          <g transform="translate(0 12)">
            <use fill="#c51918" xlinkHref="#mantine-ztxu7hois" />
            <circle cx="12" r="8" fill="#f7fcff" mask="url(#mantine-5ymztv8x2)" />
          </g>
          <use fill="#f7fcff" xlinkHref="#mantine-ag6moqug6" />
          <circle cx="12" cy="12" r="8" fill="#c51918" mask="url(#mantine-e2jfo9lj8)" />
        </g>
      </svg>
    </Box>
  );
}
