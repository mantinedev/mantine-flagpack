import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function ISFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-kn36ni5o9" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-k2rpgi743" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-t8g0lquak" />
          </mask>
          <path id="mantine-t8g0lquak" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-kn36ni5o9)">
          <use fill="#0061c1" xlinkHref="#mantine-t8g0lquak" />
          <g fill="#d21034" stroke="#f1f9ff" strokeWidth="2" mask="url(#mantine-k2rpgi743)">
            <path d="M15-1V9h18v6H15v10H9V15H-1V9H9V-1z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
