import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function WSFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-b99hv0pv9" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-5csqgjcru" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-9azw7pafh" />
          </mask>
          <path id="mantine-9azw7pafh" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-b99hv0pv9)">
          <use fill="#c51918" xlinkHref="#mantine-9azw7pafh" />
          <g mask="url(#mantine-5csqgjcru)">
            <path fill="#2e42a5" d="M0 0h16v14H0z" />
            <path
              fill="#feffff"
              d="M3.566 7.772l-1.06.64.241-1.249-.882-.934 1.195-.051.506-1.166.505 1.166h1.194l-.881.985.265 1.249zm8 0l-1.06.64.241-1.249-.882-.934 1.195-.051.506-1.166.505 1.166h1.194l-.881.985.265 1.249zm-4.1-3.634l-.998.602.227-1.175-.83-.88 1.125-.047.476-1.098.476 1.098h1.123l-.83.927.25 1.175zm1.08 4.287l-.623.377.142-.735-.52-.55.704-.03.297-.685.298.686h.702l-.518.58.156.734zm-1.137 4.403l-1.497.904.342-1.763-1.247-1.32 1.688-.071.714-1.646.714 1.646h1.684l-1.243 1.39.374 1.764z"
            />
          </g>
        </g>
      </svg>
    </Box>
  );
}
