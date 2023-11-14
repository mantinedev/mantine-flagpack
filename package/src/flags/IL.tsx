import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function ILFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-ddbddxl56" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-5ytm8zebx" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-cnv4a6eox" />
          </mask>
          <path id="mantine-cnv4a6eox" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-ddbddxl56)">
          <use fill="#f7fcff" xlinkHref="#mantine-cnv4a6eox" />
          <g fill="#3d58db">
            <path d="M0 3h32v3H0zm0 15h32v3H0z" mask="url(#mantine-5ytm8zebx)" />
            <path
              fillRule="nonzero"
              d="M13.02 13.93h6.133l-3.046-5.47zm7.738 1.009h-9.377l4.735-8.319z"
              mask="url(#mantine-5ytm8zebx)"
            />
            <path
              fillRule="nonzero"
              d="M13.051 16.188h5.994l-2.936-5.482zm7.63.973h-9.417l4.872-8.085z"
              mask="url(#mantine-5ytm8zebx)"
              transform="matrix(1 0 0 -1 0 26.238)"
            />
          </g>
        </g>
      </svg>
    </Box>
  );
}
