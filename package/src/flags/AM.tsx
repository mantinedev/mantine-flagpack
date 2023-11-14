import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function AMFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-wl1h1rb2u" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-srx9asa1e" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-edipibrz4" />
          </mask>
          <path id="mantine-edipibrz4" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-wl1h1rb2u)">
          <use fill="#2e42a5" xlinkHref="#mantine-edipibrz4" />
          <path fill="#e31d1c" d="M0 0h32v8H0z" mask="url(#mantine-srx9asa1e)" />
          <path fill="#feca00" d="M0 16h32v8H0z" mask="url(#mantine-srx9asa1e)" />
        </g>
      </svg>
    </Box>
  );
}
