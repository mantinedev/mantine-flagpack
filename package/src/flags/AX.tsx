import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function AXFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-patosdjqn" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-okpw3fl5m" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-hhhizbvc5" />
          </mask>
          <path id="mantine-hhhizbvc5" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-patosdjqn)">
          <use fill="#0061c1" xlinkHref="#mantine-hhhizbvc5" />
          <g fill="#d21034" stroke="#ffce00" strokeWidth="2" mask="url(#mantine-okpw3fl5m)">
            <path d="M15-1V9h18v6H15v10H9V15H-1V9H9V-1z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
