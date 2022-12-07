import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function CZFlag({ size = 40, radius, sx, ...others }: FlagProps) {
  return (
    <Box
      sx={[
        (theme) => ({
          display: 'inline-block',
          overflow: 'hidden',
          lineHeight: 1,
          width: size,
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
          <mask id="mantine-4rg51cz61" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-nlmfnya7a" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-86gr9709a" />
          </mask>
          <path id="mantine-86gr9709a" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-4rg51cz61)">
          <use fill="#e31d1c" xlinkHref="#mantine-86gr9709a" />
          <path fill="#f7fcff" d="M0-2h32v14H0z" mask="url(#mantine-nlmfnya7a)" />
          <path fill="#3d58db" d="M0 0v24l18-12z" />
        </g>
      </svg>
    </Box>
  );
}
