import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function LUFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-byxgvhbcx" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-xitztnrcy" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-gjy99fcc7" />
          </mask>
          <path id="mantine-gjy99fcc7" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-byxgvhbcx)">
          <use fill="#f7fcff" xlinkHref="#mantine-gjy99fcc7" />
          <path fill="#f05234" d="M0 0h32v8H0z" mask="url(#mantine-xitztnrcy)" />
          <path fill="#2eb7ec" d="M0 16h32v8H0z" mask="url(#mantine-xitztnrcy)" />
        </g>
      </svg>
    </Box>
  );
}
