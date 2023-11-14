import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function LCFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <mask id="mantine-11yhtannh" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-11yhtannh)">
          <path fill="#7ccff5" d="M0 0h32v24H0z" />
          <path fill="#f7fcff" d="M16 4l8 16H8z" />
          <path fill="#272727" d="M16 8l7 12H9z" />
          <path fill="#feca00" d="M16 14l8 6H8z" />
        </g>
      </svg>
    </Box>
  );
}
