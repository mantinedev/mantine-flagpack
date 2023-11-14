import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function STFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <mask id="mantine-4gjl6zk44" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-4gjl6zk44)">
          <path fill="#fbcd17" d="M0 0h32v24H0z" />
          <path fill="#73be4a" d="M0 0h32v8H0zm0 16h32v8H0z" />
          <path fill="#c51918" d="M0 0v24l10-12z" />
          <path
            fill="#272727"
            d="M17.002 13.87L15.132 15l.426-2.204L14 11.146l2.11-.088L17.001 9l.892 2.058H20l-1.554 1.738.468 2.204zm8 0L23.132 15l.426-2.204L22 11.146l2.11-.088L25.001 9l.892 2.058H28l-1.554 1.738.468 2.204z"
          />
        </g>
      </svg>
    </Box>
  );
}
