import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function COFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-b51nhjx1r" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-sa3o3cfj7" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-0i03tg9ej" />
          </mask>
          <path id="mantine-0i03tg9ej" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-b51nhjx1r)">
          <use fill="#2e42a5" xlinkHref="#mantine-0i03tg9ej" />
          <path fill="#feca00" d="M0 0h32v12H0z" mask="url(#mantine-sa3o3cfj7)" />
          <path fill="#e31d1c" d="M0 18h32v6H0z" mask="url(#mantine-sa3o3cfj7)" />
        </g>
      </svg>
    </Box>
  );
}
