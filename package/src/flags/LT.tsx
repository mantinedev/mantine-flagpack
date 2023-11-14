import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function LTFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-bauui7xqc" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-d57bhscbd" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-y1l4120oh" />
          </mask>
          <path id="mantine-y1l4120oh" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-bauui7xqc)">
          <use fill="#55ba07" xlinkHref="#mantine-y1l4120oh" />
          <path fill="#feca00" d="M0 0h32v8H0z" mask="url(#mantine-d57bhscbd)" />
          <path fill="#c51918" d="M0 16h32v8H0z" mask="url(#mantine-d57bhscbd)" />
        </g>
      </svg>
    </Box>
  );
}
