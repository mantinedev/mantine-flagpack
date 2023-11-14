import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function TOFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-yj9bjc5sc" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-rsm48rbq4" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-5ajabpwml" />
          </mask>
          <path id="mantine-5ajabpwml" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-yj9bjc5sc)">
          <use fill="#e31d1c" xlinkHref="#mantine-5ajabpwml" />
          <path fill="#f7fcff" d="M0 0h18v16H0z" mask="url(#mantine-rsm48rbq4)" />
          <path fill="#e31d1c" d="M12 2v4h4v4h-4v4H8v-4H4V6h4V2z" mask="url(#mantine-rsm48rbq4)" />
        </g>
      </svg>
    </Box>
  );
}
