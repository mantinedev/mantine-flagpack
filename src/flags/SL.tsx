import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function SLFlag({ radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-bpuia4913" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-q0jr2rq3k" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-ld8i16kif" />
          </mask>
          <path id="mantine-ld8i16kif" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-bpuia4913)">
          <use fill="#f7fcff" xlinkHref="#mantine-ld8i16kif" />
          <path fill="#78d843" d="M0 0h32v8H0z" mask="url(#mantine-q0jr2rq3k)" />
          <path fill="#3d58db" d="M0 16h32v8H0z" mask="url(#mantine-q0jr2rq3k)" />
        </g>
      </svg>
    </Box>
  );
}
