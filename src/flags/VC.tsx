import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function VCFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
        <mask id="mantine-1nvprehp1" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-1nvprehp1)">
          <path fill="#ffdc17" d="M8 0h16v24H8z" />
          <path fill="#5fbf2b" d="M24 0h8v24h-8z" />
          <path fill="#2e42a5" d="M0 0h8v24H0z" />
          <path
            fill="#5fbf2b"
            d="M16.12 10.605l2.803 4.384L16.12 19.5l-3.277-4.512.397-.531.371-.497 2.305-3.082.09-.12.114-.154zM19.726 5.6l3.04 4.463-3.04 4.305-3.04-4.305 3.04-4.463zm-7.449.079l2.803 4.384-3.04 4.226L9 10.063l.397-.531.371-.497 2.304-3.082.09-.12.115-.154z"
          />
        </g>
      </svg>
    </Box>
  );
}
