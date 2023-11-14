import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function CWFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-7ojwk5wmj" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-iasxzoube" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-aexm793tk" />
          </mask>
          <path id="mantine-aexm793tk" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-7ojwk5wmj)">
          <use fill="#2e42a5" xlinkHref="#mantine-aexm793tk" />
          <path
            fill="#f7fcff"
            d="M4.254 6.15L2.266 7.198l.96-1.868L2 3.963l1.523-.056L4.254 2l.558 1.907 1.783.056-1.284 1.368.815 1.868zm7.098 4.927l-2.454 1.028.963-2.577L7.726 7.8h2.558l1.068-2.787.816 2.787h2.56l-1.82 1.73.905 2.576z"
            mask="url(#mantine-iasxzoube)"
          />
          <path fill="#f9e813" d="M0 14h32v4H0z" mask="url(#mantine-iasxzoube)" />
        </g>
      </svg>
    </Box>
  );
}
