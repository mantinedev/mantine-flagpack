import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function GFFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <mask id="mantine-uuztbksm0" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-uuztbksm0)">
          <rect width="32" height="24" fill="#5eaa22" rx="2" />
          <path fill="#feca00" d="M0 0l32 24H0z" />
          <path
            fill="#e21835"
            d="M15.93 14.406l-3.485 2.418 1.114-4.141L11 10.038l3.465-.143L15.93 5.8l1.466 4.095h3.458l-2.553 2.788 1.279 3.897z"
          />
        </g>
      </svg>
    </Box>
  );
}
