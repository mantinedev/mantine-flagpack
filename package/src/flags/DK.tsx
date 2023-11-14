import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function DKFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-6oqxav4xt" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-i75cpl1h0" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-vlobcxr88" />
          </mask>
          <path id="mantine-vlobcxr88" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-6oqxav4xt)">
          <use fill="#c51918" xlinkHref="#mantine-vlobcxr88" />
          <g fill="#f7fcff" mask="url(#mantine-i75cpl1h0)">
            <path d="M10 0h4v10h18v4H14v10h-4V14H0v-4h10z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
