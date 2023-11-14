import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function PKFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <mask id="mantine-s67tnto9m" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-s67tnto9m)">
          <path fill="#2f8d00" d="M8 0h24v24H8z" />
          <path fill="#f7fcff" d="M0 0h8v24H0z" />
          <path
            fill="#f1f9ff"
            d="M12.656 6.248s-1.782 5.473 1.763 7.848 8.01 1.21 8.01 1.21c-.68 1.471-5.165 4.724-9.845 1.34-4.68-3.383-1.777-10.13.072-10.398zm4.68.446l1.616 1.519 2.174-.996-1.163 2.177 2.184 1.628-2.788-.188-1.417 2.083-.338-2.445-2.502-.446 2.372-1.16z"
          />
        </g>
      </svg>
    </Box>
  );
}
