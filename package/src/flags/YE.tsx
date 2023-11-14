import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function YEFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-b5hqatvx3" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-4xuipg2zz" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-uiq01q7kv" />
          </mask>
          <path id="mantine-uiq01q7kv" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-b5hqatvx3)">
          <use fill="#f7fcff" xlinkHref="#mantine-uiq01q7kv" />
          <path fill="#e31d1c" d="M0 0h32v8H0z" mask="url(#mantine-4xuipg2zz)" />
          <path fill="#272727" d="M0 16h32v8H0z" mask="url(#mantine-4xuipg2zz)" />
        </g>
      </svg>
    </Box>
  );
}
