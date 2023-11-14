import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function MKFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-iouqaxwyq" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-qa09brj4d" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-n7wgo4d5k" />
          </mask>
          <path id="mantine-n7wgo4d5k" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-iouqaxwyq)">
          <use fill="#f50100" xlinkHref="#mantine-n7wgo4d5k" />
          <g fill="#ffd018">
            <path
              d="M18 14.024l14 5.952v4.084h-3.255zM14 14L3.255 24.035H0v-4.084zm2-2l3 12h-6zm16-3v6l-12-3zM0 9l12 3-12 3zm19-9l-3 12-3-12zm13-.018v4.084l-14 5.952L28.745-.018zM3.255-.042L14 9.993 0 4.042V-.042z"
              mask="url(#mantine-qa09brj4d)"
            />
            <circle
              cx="16"
              cy="12"
              r="5"
              stroke="#f50100"
              strokeWidth="2"
              mask="url(#mantine-qa09brj4d)"
            />
          </g>
        </g>
      </svg>
    </Box>
  );
}
