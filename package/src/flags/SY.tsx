import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function SYFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <mask id="mantine-1f5kluckz" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-1f5kluckz)">
          <path fill="#f7fcff" d="M0 0h32v24H0z" />
          <path
            fill="#409100"
            d="M9.001 13.247L7.754 14l.285-1.47L7 11.432l1.406-.06L9.001 10l.595 1.372H11L9.964 12.53l.312 1.47zm14 0L21.754 14l.285-1.47L21 11.432l1.406-.06.595-1.371.595 1.372H25l-1.036 1.159.312 1.469z"
          />
          <path fill="#e31d1c" d="M0 0h32v8H0z" />
          <path fill="#272727" d="M0 16h32v8H0z" />
        </g>
      </svg>
    </Box>
  );
}
