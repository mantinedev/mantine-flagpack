import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function SVFlag({ radius, sx, ...others }: FlagProps) {
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
        <defs>
          <mask id="mantine-na84i1v4k" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-b5xxh1rpk" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-cygr1bx2n" />
          </mask>
          <path id="mantine-cygr1bx2n" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-na84i1v4k)">
          <use fill="#f7fcff" xlinkHref="#mantine-cygr1bx2n" />
          <path fill="#3d58db" d="M0 0h32v8H0zm0 16h32v8H0z" mask="url(#mantine-b5xxh1rpk)" />
          <g mask="url(#mantine-b5xxh1rpk)">
            <g transform="translate(10 6)">
              <circle cx="5.784" cy="5.858" r="3.642" stroke="#e8aa00" />
              <path
                fill="#1e601b"
                d="M3.81 3.662c-.634 1.045-.952 1.927-.952 2.644 0 1.076 1.14 2.429 2.934 2.429 1.75 0 3.008-1.045 3.046-2.429a3.11 3.11 0 00-.942-2.369c.37 1.329.462 2.262.278 2.8-.278.807-1.175 1.784-2.382 1.66-1.207-.125-2.353-1.61-2.353-2.09 0-.32.124-1.202.372-2.645z"
              />
              <path stroke="#188396" d="M4.16 6.328h3.208" />
              <path stroke="#e8aa00" d="M4.459 5.806h2.76M5.833 4.355L7.05 6.41H4.593z" />
            </g>
          </g>
        </g>
      </svg>
    </Box>
  );
}
