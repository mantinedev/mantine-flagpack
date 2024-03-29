import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function MVFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 12">
        <defs>
          <path id="mantine-b3977uv2a" d="M0 0h16v12H0z" />
          <path id="mantine-j9s269ndu" d="M0 0h10v6H0z" />
        </defs>
        <g fill="none" fillRule="evenodd">
          <mask id="mantine-k4pkunphz" fill="#fff">
            <use xlinkHref="#mantine-b3977uv2a" />
          </mask>
          <g mask="url(#mantine-k4pkunphz)">
            <path fill="#C51918" fillRule="nonzero" d="M0 0h16v11a1 1 0 01-1 1H1a1 1 0 01-1-1V0z" />
            <path fill="#C51918" fillRule="nonzero" d="M0 0h16v12H0z" />
            <path fill="#017A38" stroke="#017A38" d="M12.5 3.5v5h-9v-5z" />
            <g transform="translate(3 3)">
              <mask id="mantine-jvzlw1zcp" fill="#fff">
                <use xlinkHref="#mantine-j9s269ndu" />
              </mask>
              <path
                fill="#F9FAFA"
                fillRule="nonzero"
                d="M5.016 3.231c-.008 1.533 1.199 2.35 1.199 2.35-1.377.162-2.293-1.086-2.293-2.335 0-1.248 1.248-2.28 2.293-2.745 0 0-1.19 1.197-1.199 2.73z"
                mask="url(#mantine-jvzlw1zcp)"
              />
            </g>
          </g>
        </g>
      </svg>
    </Box>
  );
}
