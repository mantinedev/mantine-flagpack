import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function DJFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-jixeexw13" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-8q5lb4vos" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-vr5gvzup9" />
          </mask>
          <mask id="mantine-tv9mf9vqq" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-snd955ul7" />
          </mask>
          <path id="mantine-vr5gvzup9" d="M0 0h32v24H0z" />
          <path id="mantine-snd955ul7" d="M0 0v24l18-12z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-jixeexw13)">
          <use fill="#73be4a" xlinkHref="#mantine-vr5gvzup9" />
          <path fill="#69f" d="M0-2h32v14H0z" mask="url(#mantine-8q5lb4vos)" />
          <use fill="#fff" xlinkHref="#mantine-snd955ul7" />
          <path
            fill="#e31d1c"
            d="M7.002 14.07l-1.87 1.13.426-2.204L4 11.347l2.11-.09.892-2.057.892 2.058H10l-1.554 1.738.468 2.204z"
            mask="url(#mantine-tv9mf9vqq)"
          />
        </g>
      </svg>
    </Box>
  );
}
