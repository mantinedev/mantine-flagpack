import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function BWFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-drp37im9n" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-scxfwuset" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-d6qnp227k" />
          </mask>
          <path id="mantine-d6qnp227k" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-drp37im9n)">
          <use fill="#42addf" xlinkHref="#mantine-d6qnp227k" />
          <path fill="#58a5ff" d="M0 0h32v8H0z" mask="url(#mantine-scxfwuset)" />
          <path
            fill="#272727"
            stroke="#f7fcff"
            strokeWidth="2"
            d="M-1 9h34v6H-1z"
            mask="url(#mantine-scxfwuset)"
          />
        </g>
      </svg>
    </Box>
  );
}
