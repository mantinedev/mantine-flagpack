import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function AZFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-tcl5j1qqk" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-f9o1bq9he" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-y1t5rf4hv" />
          </mask>
          <path id="mantine-y1t5rf4hv" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-tcl5j1qqk)">
          <use fill="#af0100" xlinkHref="#mantine-y1t5rf4hv" />
          <path fill="#3ca5d9" d="M0 0h32v8H0z" mask="url(#mantine-f9o1bq9he)" />
          <path fill="#73be4a" d="M0 16h32v8H0z" mask="url(#mantine-f9o1bq9he)" />
          <g fill="#f7fcff" mask="url(#mantine-f9o1bq9he)">
            <path d="M16.997 7.793c1.165-.003 2.587.634 2.995 1.541 0 0-1.536-.635-3.017-.3-1.482.334-2.338 1.511-2.35 2.966-.015 1.554 1.168 2.713 2.515 3.024 1.347.31 2.79-.55 2.79-.55-.174.482-1.01 1.615-2.772 1.62-2.197.006-4.693-1.485-4.67-4.108.023-2.53 2.338-4.187 4.509-4.193zm2.196 2.01l.47 1.352 1.432.03-1.14.865.414 1.37-1.176-.817-1.175.818.415-1.371-1.142-.865 1.432-.03z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
