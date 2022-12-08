import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function GYFlag({ radius, sx, ...others }: FlagProps) {
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
        <mask id="mantine-5iq3tab76" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-5iq3tab76)">
          <path fill="#5eaa22" d="M0 0h32v24H0z" />
          <g strokeWidth="2">
            <path fill="#feca00" stroke="#f7fcff" d="M1 1.413L30.995 12 1 22.587z" />
            <path fill="#e11c1b" stroke="#272727" d="M-1 .045L14.371 12-1 23.955z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
