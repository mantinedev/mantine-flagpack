import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function CMFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <mask id="mantine-f6l3dauwq" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-f6l3dauwq)">
          <path fill="#e11c1b" d="M10 0h12v24H10z" />
          <path
            fill="#feca00"
            d="M16.075 14.49l-3.485 2.418 1.114-4.14-2.56-2.646 3.466-.143 1.465-4.095 1.466 4.095h3.46l-2.554 2.788 1.279 3.897z"
          />
          <path fill="#fbcd17" d="M22 0h10v24H22z" />
          <path fill="#0b9e7a" d="M0 0h10v24H0z" />
        </g>
      </svg>
    </Box>
  );
}
