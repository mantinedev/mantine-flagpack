import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function IDFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-82lzscfct" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-j7aiuqo13" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-fdyvja20c" />
          </mask>
          <path id="mantine-fdyvja20c" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-82lzscfct)">
          <use fill="#f7fcff" xlinkHref="#mantine-fdyvja20c" />
          <path fill="#e31d1c" d="M0 0h32v12H0z" mask="url(#mantine-j7aiuqo13)" />
        </g>
      </svg>
    </Box>
  );
}
