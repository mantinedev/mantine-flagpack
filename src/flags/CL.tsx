import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function CLFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
        <mask id="mantine-an6yzgadq" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-an6yzgadq)">
          <path fill="#3d58db" d="M0 0h14v14H0z" />
          <path fill="#f7fcff" d="M14-2h18v16H14z" />
          <path fill="#e31d1c" d="M0 14h32v10H0z" />
          <path
            fill="#f7fcff"
            d="M7.014 9.783l-3.803 2.272L5.088 8.19 1.764 5.68 5.6 5.639 7.05 2.21l.93 3.43 3.632.017L8.851 8.11l1.434 3.944z"
          />
        </g>
      </svg>
    </Box>
  );
}
