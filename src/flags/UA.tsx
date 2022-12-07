import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function UAFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-1pjut3c6h" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-vgi4wmcv0" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-n6ipe5gpc" />
          </mask>
          <path id="mantine-n6ipe5gpc" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-1pjut3c6h)">
          <use fill="#3195f9" xlinkHref="#mantine-n6ipe5gpc" />
          <path fill="#feca00" d="M0 12h32v12H0z" mask="url(#mantine-vgi4wmcv0)" />
        </g>
      </svg>
    </Box>
  );
}
