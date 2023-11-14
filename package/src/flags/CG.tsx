import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function CGFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <mask id="mantine-wcmrh6bqn" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-wcmrh6bqn)">
          <path fill="#fa1111" d="M32 0v24H0z" />
          <path fill="#07a907" d="M0 24V0h32z" />
          <path fill="#fbcd17" d="M29.492-5.8L-1 23.576l6.052 3.012L34.64-.212z" />
        </g>
      </svg>
    </Box>
  );
}
