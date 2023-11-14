import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function BGFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-6aj3wstar" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-x9exix5kc" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-wgdcf6ws1" />
          </mask>
          <path id="mantine-wgdcf6ws1" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-6aj3wstar)">
          <use fill="#5eaa22" xlinkHref="#mantine-wgdcf6ws1" />
          <path fill="#f7fcff" d="M0 0h32v8H0z" mask="url(#mantine-x9exix5kc)" />
          <path fill="#e22c18" d="M0 16h32v8H0z" mask="url(#mantine-x9exix5kc)" />
        </g>
      </svg>
    </Box>
  );
}
