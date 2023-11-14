import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function TZFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-surdztohu" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-bo6xkuvpf" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-9b52g3xns" />
          </mask>
          <path id="mantine-9b52g3xns" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-surdztohu)">
          <use fill="#3195f9" xlinkHref="#mantine-9b52g3xns" />
          <path fill="#73be4a" d="M0 0v24L32 0z" mask="url(#mantine-bo6xkuvpf)" />
          <path
            fill="#272727"
            fillRule="nonzero"
            stroke="#ffd018"
            strokeWidth="2.5"
            d="M33.604-4.519L37.213.887-1.127 26.48l-3.61-5.406z"
            mask="url(#mantine-bo6xkuvpf)"
          />
        </g>
      </svg>
    </Box>
  );
}
