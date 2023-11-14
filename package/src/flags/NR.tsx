import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function NRFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-1uteubda3" fill="#fff">
            <rect width="32" height="24" fillRule="evenodd" rx="2" />
          </mask>
          <mask id="mantine-5ar9cem11" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-n5c2n7c3c" />
          </mask>
          <path id="mantine-n5c2n7c3c" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-1uteubda3)">
          <use fill="#2e42a5" xlinkHref="#mantine-n5c2n7c3c" />
          <path fill="#feca00" d="M0 8h32v4H0z" mask="url(#mantine-5ar9cem11)" />
          <g fill="#f7fcff" mask="url(#mantine-5ar9cem11)">
            <path d="M8.83 19.58l-1.545 2.005-.072-2.53-2.428.714 1.43-2.09-2.385-.85 2.384-.85-1.43-2.088 2.43.714.07-2.53L8.83 14.08l1.545-2.006.071 2.53 2.429-.713-1.43 2.089 2.385.85-2.385.85 1.43 2.089-2.429-.715-.071 2.53z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
