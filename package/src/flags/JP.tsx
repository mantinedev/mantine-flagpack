import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function JPFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-qhbxer7j5" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-2c13v9nwy" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-m7rnaqk4j" />
          </mask>
          <path id="mantine-m7rnaqk4j" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-qhbxer7j5)">
          <use fill="#f7fcff" xlinkHref="#mantine-m7rnaqk4j" />
          <circle cx="16" cy="12" r="7.5" fill="#e31d1c" mask="url(#mantine-2c13v9nwy)" />
        </g>
      </svg>
    </Box>
  );
}
