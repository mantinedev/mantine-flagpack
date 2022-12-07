import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function TTFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-qkshp800t" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-j1xkbp45t" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-dfkgjpm5r" />
          </mask>
          <path id="mantine-dfkgjpm5r" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-qkshp800t)">
          <use fill="#e31d1c" xlinkHref="#mantine-dfkgjpm5r" />
          <path
            fill="#272727"
            fillRule="nonzero"
            stroke="#f7fcff"
            strokeWidth="1.5"
            d="M33.83-2.269l3.056 4.577-39.795 22.86-3.055-4.577z"
            mask="url(#mantine-j1xkbp45t)"
            transform="scale(-1 1) rotate(-17 0 114.9)"
          />
        </g>
      </svg>
    </Box>
  );
}
