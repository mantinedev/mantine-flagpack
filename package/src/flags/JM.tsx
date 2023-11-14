import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function JMFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <mask id="mantine-oi8a3ltwz" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-oi8a3ltwz)">
          <path fill="#093" d="M0 0h32v24H0z" />
          <g fill="#272727" stroke="#feca00" strokeWidth="2.7">
            <path d="M-2.35-2.865L15.658 12-2.35 26.865z" />
            <path d="M34.35-2.784L15.6 12l18.75 14.784z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
