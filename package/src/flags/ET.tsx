import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function ETFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-bi4g7m4hd" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-bpbdupeqd" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-05wf5h1v3" />
          </mask>
          <path id="mantine-05wf5h1v3" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-bi4g7m4hd)">
          <use fill="#feca00" xlinkHref="#mantine-05wf5h1v3" />
          <path fill="#5eaa22" d="M0 0h32v8H0z" mask="url(#mantine-bpbdupeqd)" />
          <path fill="#e31d1c" d="M0 16h32v8H0z" mask="url(#mantine-bpbdupeqd)" />
          <g mask="url(#mantine-bpbdupeqd)">
            <g transform="translate(10 6)">
              <circle cx="6" cy="6" r="6" fill="#2b77b8" />
              <path
                stroke="#feca00"
                strokeWidth="1.5"
                d="M6 8l-2.762.927.86-2.309-1.874-2.236h2.6L6 2l1.176 2.382h2.657l-1.93 2.236.684 2.309z"
              />
              <path
                stroke="#2b77b8"
                d="M5.696 6.034l-2.085 4.36M5.368 5.48h-4m4.753 1.358l3.91 1.804M6.967 5.874l2.83-3.098"
              />
            </g>
          </g>
        </g>
      </svg>
    </Box>
  );
}
