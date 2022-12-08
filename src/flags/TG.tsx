import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function TGFlag({ radius, sx, ...others }: FlagProps) {
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
        <mask id="mantine-6py6dcz7v" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-6py6dcz7v)">
          <path
            fill="#5eaa22"
            fillRule="nonzero"
            stroke="#f7fcff"
            strokeWidth="2"
            d="M33-1v26H-1V-1z"
          />
          <path fill="#feca00" d="M0 6h32v4H0zm0 8h32v4H0z" />
          <path fill="#f50101" d="M0 0h16v14H0z" />
          <path
            fill="#f7fcff"
            d="M8.25 10.144l-3.72 2.302 1.445-3.864L3 5.979h3.648L8.25 2.13l1.223 3.85h3.604l-2.532 2.603 1.246 3.674z"
          />
        </g>
      </svg>
    </Box>
  );
}
