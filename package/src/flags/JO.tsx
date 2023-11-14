import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function JOFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-rptegc54z" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-gzxn7i1k9" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-athvymsna" />
          </mask>
          <mask id="mantine-ihbhkbvi1" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-3zud7qf0c" />
          </mask>
          <path id="mantine-athvymsna" d="M0 0h32v24H0z" />
          <path id="mantine-3zud7qf0c" d="M0 0v24l20-12z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-rptegc54z)">
          <use fill="#f7fcff" xlinkHref="#mantine-athvymsna" />
          <path fill="#272727" d="M0 0h32v8H0z" mask="url(#mantine-gzxn7i1k9)" />
          <path fill="#093" d="M0 16h32v8H0z" mask="url(#mantine-gzxn7i1k9)" />
          <use fill="#e31d1c" xlinkHref="#mantine-3zud7qf0c" />
          <path
            fill="#f7fcff"
            d="M9.002 13.87L7.132 15l.426-2.204L6 11.146l2.11-.088L9.001 9l.892 2.058H12l-1.554 1.738.468 2.204z"
            mask="url(#mantine-ihbhkbvi1)"
          />
        </g>
      </svg>
    </Box>
  );
}
