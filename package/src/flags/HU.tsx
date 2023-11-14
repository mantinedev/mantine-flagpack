import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function HUFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-10k58qjuq" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-zz7g2fmts" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-upj56hvdw" />
          </mask>
          <path id="mantine-upj56hvdw" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-10k58qjuq)">
          <use fill="#f7fcff" xlinkHref="#mantine-upj56hvdw" />
          <path fill="#f14423" d="M0 0h32v8H0z" mask="url(#mantine-zz7g2fmts)" />
          <path fill="#5eaa22" d="M0 16h32v8H0z" mask="url(#mantine-zz7g2fmts)" />
        </g>
      </svg>
    </Box>
  );
}
