import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function TTFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 24">
        <mask
          id="mantine-zfj208x1d"
          style={{ maskType: 'alpha' }}
          width="32"
          height="24"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <path fill="#fff" d="M0 0h32v24H0z" />
        </mask>
        <g mask="url(#mantine-zfj208x1d)">
          <path fill="#E31D1C" fillRule="evenodd" d="M0 0v24h32V0H0z" clipRule="evenodd" />
          <mask
            id="mantine-q7kiql45a"
            style={{ maskType: 'alpha' }}
            width="32"
            height="24"
            x="0"
            y="0"
            maskUnits="userSpaceOnUse"
          >
            <path fill="#fff" fillRule="evenodd" d="M0 0v24h32V0H0z" clipRule="evenodd" />
          </mask>
          <g mask="url(#mantine-q7kiql45a)">
            <path
              fill="#272727"
              stroke="#F7FCFF"
              strokeWidth="1.5"
              d="M29.56 29.496l-.543.444-.48-.512L-1.807-2.971l-.548-.585.62-.508 3.097-2.532.543-.444.48.512L32.727 25.87l.549.586-.621.508-3.096 2.532z"
            />
          </g>
        </g>
      </svg>
    </Box>
  );
}
