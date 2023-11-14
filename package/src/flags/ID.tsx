import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function IDFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-sehganved" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-yytr89ujs" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-wjo1nf1ls" />
          </mask>
          <path id="mantine-wjo1nf1ls" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-sehganved)">
          <use fill="#f7fcff" xlinkHref="#mantine-wjo1nf1ls" />
          <path fill="#e31d1c" d="M0 0h32v12H0z" mask="url(#mantine-yytr89ujs)" />
        </g>
      </svg>
    </Box>
  );
}
