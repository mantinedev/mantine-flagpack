import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function TRFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-jpa5t2g4l" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-0vhipzf6h" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-y05v0e1ld" />
          </mask>
          <path id="mantine-y05v0e1ld" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-jpa5t2g4l)">
          <use fill="#e31d1c" xlinkHref="#mantine-y05v0e1ld" />
          <path
            fill="#f7fcff"
            d="M15.873 4.066c1.852.029 4.093 1.147 4.717 2.694 0 0-2.051-1.23-4.415-.709-2.363.522-3.888 2.574-3.95 5.033-.065 2.626 1.581 4.448 3.713 5.013 2.132.564 4.41-.65 4.41-.65-.29.81-1.65 2.701-4.449 2.657-3.491-.055-7.417-2.65-7.307-7.084.107-4.276 3.832-7.009 7.28-6.954zm5.002 4.08l1.555 1.791 2.233-.708-1.397 1.88 2.045 1.82-2.616-.235-1.62 1.875.086-2.536-2.392-.891 2.147-.746z"
            mask="url(#mantine-0vhipzf6h)"
            transform="rotate(-1 16.95 11.085)"
          />
        </g>
      </svg>
    </Box>
  );
}
