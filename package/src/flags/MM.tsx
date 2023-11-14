import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function MMFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <mask id="mantine-hdrrt8rdc" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-hdrrt8rdc)">
          <path fill="#e31d1c" d="M0 16h32v8H0z" />
          <path fill="#5eaa22" d="M0 8h32v8H0z" />
          <path fill="#ffd018" d="M0 0h32v8H0z" />
          <path
            fill="#f7fcff"
            d="M16.062 15.975l-5.15 3.275 1.727-5.733-3.674-3.745 5.065-.11 2.241-5.66 2.042 5.734 5.053.088-3.797 3.814 1.773 5.454z"
          />
        </g>
      </svg>
    </Box>
  );
}
