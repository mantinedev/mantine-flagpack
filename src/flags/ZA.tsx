import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function ZAFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
        <mask id="mantine-8iucy7wyy" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-8iucy7wyy)">
          <path fill="#f7fcff" d="M0 0h32v24H0z" />
          <path fill="#e31d1c" d="M0 0h32v8H0z" />
          <path fill="#3d58db" d="M0 16h32v8H0z" />
          <g strokeWidth="2">
            <path fill="#5eaa22" stroke="#f7fcff" d="M-1-4.045L15.772 9H33v6H15.772L-1 28.045z" />
            <path fill="#272727" stroke="#feca00" d="M-1 4l10.667 8L-1 20z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
