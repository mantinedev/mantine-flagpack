import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function GNFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <mask id="mantine-n46ca0177" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-n46ca0177)">
          <path fill="#fbcd17" d="M10 0h12v24H10z" />
          <path fill="#0b9e7a" d="M22 0h10v24H22z" />
          <path fill="#e11c1b" d="M0 0h10v24H0z" />
        </g>
      </svg>
    </Box>
  );
}
