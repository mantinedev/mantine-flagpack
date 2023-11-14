import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function NOFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-s9gkbw3vq" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-tgkzuh076" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-u6qf3b42g" />
          </mask>
          <path id="mantine-u6qf3b42g" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-s9gkbw3vq)">
          <use fill="#e31d1c" xlinkHref="#mantine-u6qf3b42g" />
          <g fill="#2e42a5" stroke="#f7fcff" strokeWidth="2" mask="url(#mantine-tgkzuh076)">
            <path d="M15-1V9h18v6H15v10H9V15H-1V9H9V-1z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
