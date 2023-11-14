import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function FOFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-jz9kwv8a2" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-ie3xul95z" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-68uc6d1mc" />
          </mask>
          <path id="mantine-68uc6d1mc" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-jz9kwv8a2)">
          <use fill="#f7fcff" xlinkHref="#mantine-68uc6d1mc" />
          <g fill="#f50100" stroke="#2e42a5" strokeWidth="2" mask="url(#mantine-ie3xul95z)">
            <path d="M15-1V9h18v6H15v10H9V15H-1V9H9V-1z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
