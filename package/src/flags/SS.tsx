import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function SSFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <mask id="mantine-zbb7wup07" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-zbb7wup07)">
          <path fill="#f7fcff" d="M0 0h32v24H0z" />
          <path fill="#272727" d="M0 0h32v8H0z" />
          <path fill="#4e8b1d" d="M0 16h32v8H0z" />
          <path
            fill="#e31d1c"
            fillRule="nonzero"
            stroke="#f7fcff"
            strokeWidth="2"
            d="M-1 7h34v10H-1z"
          />
          <path fill="#3d58db" d="M0 0l20 12L0 24z" />
          <path
            fill="#feca00"
            d="M6.648 14.409l-2.02 2.1-.21-2.986-2.576-1.586 2.686-.843.439-2.958 1.86 2.342 2.712-.727-1.402 2.776L9.5 15.203z"
          />
        </g>
      </svg>
    </Box>
  );
}
