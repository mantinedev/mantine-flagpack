import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function GWFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
        <mask id="mantine-lsv0g9oug" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-lsv0g9oug)">
          <path fill="#fbcd17" d="M16 0h16v12H16z" />
          <path fill="#0b9e7a" d="M16 12h16v12H16z" />
          <path fill="#e11c1b" d="M0 0h16v24H0z" />
          <path
            fill="#1d1d1d"
            d="M8.93 14.606l-3.485 2.418 1.114-4.141L4 10.238l3.465-.143L8.93 6l1.466 4.095h3.458l-2.553 2.788 1.279 3.897z"
          />
        </g>
      </svg>
    </Box>
  );
}
