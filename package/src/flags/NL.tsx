import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function NLFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-92tow84xv" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-v222asx91" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-lkcsb2z21" />
          </mask>
          <path id="mantine-lkcsb2z21" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-92tow84xv)">
          <use fill="#f7fcff" xlinkHref="#mantine-lkcsb2z21" />
          <path fill="#e31d1c" d="M0 0h32v8H0z" mask="url(#mantine-v222asx91)" />
          <path fill="#3d58db" d="M0 16h32v8H0z" mask="url(#mantine-v222asx91)" />
        </g>
      </svg>
    </Box>
  );
}
