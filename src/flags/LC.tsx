import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function LCFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
        <mask id="mantine-mtecv8b52" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-mtecv8b52)">
          <path fill="#7ccff5" d="M0 0h32v24H0z" />
          <path fill="#f7fcff" d="M16 4l8 16H8z" />
          <path fill="#272727" d="M16 8l7 12H9z" />
          <path fill="#feca00" d="M16 14l8 6H8z" />
        </g>
      </svg>
    </Box>
  );
}
