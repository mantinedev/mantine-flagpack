import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function KWFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-uj1uysak4" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-rk2ps6bb3" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-5zgk1pidq" />
          </mask>
          <path id="mantine-5zgk1pidq" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-uj1uysak4)">
          <use fill="#f7fcff" xlinkHref="#mantine-5zgk1pidq" />
          <path fill="#093" d="M0 0h32v8H0z" mask="url(#mantine-rk2ps6bb3)" />
          <path fill="#e31d1c" d="M0 16h32v8H0z" mask="url(#mantine-rk2ps6bb3)" />
          <path fill="#272727" d="M0 0v24l12-8V8z" />
        </g>
      </svg>
    </Box>
  );
}
