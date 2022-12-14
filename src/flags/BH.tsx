import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function BHFlag({ radius, sx, ...others }: FlagProps) {
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
        <mask id="mantine-y9nj828c5" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-y9nj828c5)">
          <path fill="#e31d1c" d="M0 0h32v24H0z" />
          <path
            fill="#f7fcff"
            d="M0 0h6.8L12 2 6.8 4 12 6 6.8 8l5.2 2-5.2 2 5.2 2-5.2 2 5.2 2-5.2 2 5.2 2-5.2 2H0z"
          />
        </g>
      </svg>
    </Box>
  );
}
