import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function MCFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-x8m8vi0fs" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-ech7ij31b" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-ceu48lpw7" />
          </mask>
          <path id="mantine-ceu48lpw7" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-x8m8vi0fs)">
          <use fill="#f7fcff" xlinkHref="#mantine-ceu48lpw7" />
          <path fill="#c51918" d="M0 0h32v12H0z" mask="url(#mantine-ech7ij31b)" />
        </g>
      </svg>
    </Box>
  );
}
