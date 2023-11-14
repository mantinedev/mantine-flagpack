import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function UAFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-1t6wtebzg" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-timwia3jf" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-r7vuawn70" />
          </mask>
          <path id="mantine-r7vuawn70" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-1t6wtebzg)">
          <use fill="#3195f9" xlinkHref="#mantine-r7vuawn70" />
          <path fill="#feca00" d="M0 12h32v12H0z" mask="url(#mantine-timwia3jf)" />
        </g>
      </svg>
    </Box>
  );
}
