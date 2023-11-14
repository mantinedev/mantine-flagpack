import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function FMFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-14m5z1381" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-efrdlbk3x" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-ckkovvlvr" />
          </mask>
          <path id="mantine-ckkovvlvr" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-14m5z1381)">
          <use fill="#63b3e1" xlinkHref="#mantine-ckkovvlvr" />
          <g fill="#f7fcff" mask="url(#mantine-efrdlbk3x)">
            <path d="M16 7.3l-1.763.927.336-1.963-1.426-1.391 1.971-.287L16 2.8l.882 1.786 1.971.287-1.426 1.39.336 1.964zm0 12l-1.763.927.336-1.963-1.426-1.391 1.971-.287L16 14.8l.882 1.786 1.971.287-1.426 1.39.336 1.964zm-6.2-5.8l-1.763.927.336-1.963-1.426-1.391 1.971-.287L9.8 9l.882 1.786 1.971.287-1.426 1.39.336 1.964zm12.2 0l-1.763.927.336-1.963-1.426-1.391 1.971-.287L22 9l.882 1.786 1.971.287-1.426 1.39.336 1.964z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
