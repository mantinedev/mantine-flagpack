import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function AMFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-1lb55ec5o" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-297l9dg7i" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-ulf9t7ed8" />
          </mask>
          <path id="mantine-ulf9t7ed8" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-1lb55ec5o)">
          <use fill="#2e42a5" xlinkHref="#mantine-ulf9t7ed8" />
          <path fill="#e31d1c" d="M0 0h32v8H0z" mask="url(#mantine-297l9dg7i)" />
          <path fill="#feca00" d="M0 16h32v8H0z" mask="url(#mantine-297l9dg7i)" />
        </g>
      </svg>
    </Box>
  );
}
