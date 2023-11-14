import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function SRFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <mask id="mantine-0tbkgcvb0" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-0tbkgcvb0)">
          <path fill="#4e8b1d" d="M0 16h32v8H0zM0 0h32v6H0z" />
          <path fill="#af0100" stroke="#fff" strokeWidth="3" d="M33.5 6.5v11h-35v-11z" />
          <path
            fill="#feca00"
            d="M16.002 14.494L13.508 16l.57-2.938-2.078-2.2 2.812-.118L16.002 8l1.19 2.744H20l-2.072 2.318.624 2.938z"
          />
        </g>
      </svg>
    </Box>
  );
}
