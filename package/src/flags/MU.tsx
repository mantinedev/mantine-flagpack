import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function MUFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-k7a8v16ec" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-3fsvtxfei" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-risynkins" />
          </mask>
          <path id="mantine-risynkins" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-k7a8v16ec)">
          <use fill="#579d20" xlinkHref="#mantine-risynkins" />
          <path fill="#feca00" d="M0 12h32v6H0z" mask="url(#mantine-3fsvtxfei)" />
          <path fill="#3d58db" d="M0 6h32v6H0z" mask="url(#mantine-3fsvtxfei)" />
          <path fill="#e11c1b" d="M0 0h32v6H0z" mask="url(#mantine-3fsvtxfei)" />
        </g>
      </svg>
    </Box>
  );
}
