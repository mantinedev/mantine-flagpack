import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function PRFlag({ radius, sx, ...others }: FlagProps) {
  return (
    <Box
      sx={[
        (theme) => ({
          display: 'inline-block',
          overflow: 'hidden',
          lineHeight: 1,
          borderRadius: theme.fn.radius(radius),

          '& svg': {
            display: 'block',
          },
        }),
        ...packSx(sx),
      ]}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-be8m12hxd" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-moelt7c5e" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-9zq1jkntm" />
          </mask>
          <mask id="mantine-ytea4qou3" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-svuds77kj" />
          </mask>
          <path id="mantine-9zq1jkntm" d="M0 0h32v24H0z" />
          <path id="mantine-svuds77kj" d="M0 0v24l18-12z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-be8m12hxd)">
          <use fill="#ef0000" xlinkHref="#mantine-9zq1jkntm" />
          <path
            fill="#ef0000"
            stroke="#f7fcff"
            strokeWidth="4"
            d="M-2 8h36v8H-2z"
            mask="url(#mantine-moelt7c5e)"
          />
          <use fill="#3d58db" xlinkHref="#mantine-svuds77kj" />
          <g fill="#f7fcff" mask="url(#mantine-ytea4qou3)">
            <path d="M6.688 14.217l-3.672 1.938 1.788-3.894-2.278-2.08 2.812-.104 1.35-3.52 1.03 3.52h2.808l-1.872 2.184 1.489 3.894z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
