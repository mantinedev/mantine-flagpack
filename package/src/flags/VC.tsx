import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function VCFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <mask id="mantine-clwm6p5ul" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-clwm6p5ul)">
          <path fill="#ffdc17" d="M8 0h16v24H8z" />
          <path fill="#5fbf2b" d="M24 0h8v24h-8z" />
          <path fill="#2e42a5" d="M0 0h8v24H0z" />
          <path
            fill="#5fbf2b"
            d="M16.12 10.605l2.803 4.384L16.12 19.5l-3.277-4.512.397-.531.371-.497 2.305-3.082.09-.12.114-.154zM19.726 5.6l3.04 4.463-3.04 4.305-3.04-4.305 3.04-4.463zm-7.449.079l2.803 4.384-3.04 4.226L9 10.063l.397-.531.371-.497 2.304-3.082.09-.12.115-.154z"
          />
        </g>
      </svg>
    </Box>
  );
}
