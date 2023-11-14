import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function BIFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <mask id="mantine-6holjfjfo" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-6holjfjfo)">
          <rect width="32" height="24" fill="#5eaa22" rx="2" />
          <path
            fill="#dd2c2b"
            fillRule="nonzero"
            stroke="#fff"
            strokeWidth="2.5"
            d="M35.75-1.25L18.083 12 35.75 25.25h-39.5L13.915 12-3.75-1.25z"
          />
          <circle cx="16" cy="12" r="6" fill="#fff" />
          <path
            fill="#dd2c2b"
            stroke="#5eaa22"
            strokeWidth=".25"
            d="M15.43 10.387l-1.162.013.592-1-.592-1 1.162.013L16 7.4l.57 1.013 1.162-.013-.592 1 .592 1-1.162-.013L16 11.4zm-2.5 4.1l-1.162.013.592-1-.592-1 1.162.013.57-1.013.57 1.013 1.162-.013-.592 1 .592 1-1.162-.013-.57 1.013zm5 0l-1.162.013.592-1-.592-1 1.162.013.57-1.013.57 1.013 1.162-.013-.592 1 .592 1-1.162-.013-.57 1.013z"
          />
        </g>
      </svg>
    </Box>
  );
}
