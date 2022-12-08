import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function DZFlag({ radius, sx, ...others }: FlagProps) {
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
        <mask id="mantine-gdbg7b9ej" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-gdbg7b9ej)">
          <path fill="#f7fcff" d="M16 0h16v24H16z" />
          <path fill="#36a400" d="M0 0h16v24H0z" />
          <path
            fill="red"
            d="M15.523 6.018c2.226 0 4.373 1.884 5.163 2.66l.153.153c.107.11.165.175.165.175S18.1 7.533 16 7.902c-2.1.368-3.012 2.317-3.012 3.907s.552 3.726 3.012 4.189c2.311.434 4.552-1.569 4.815-1.813l.026-.024s-1.758 3.757-5.318 3.757-5.482-2.422-5.482-6.11 2.678-5.79 5.482-5.79zm2.506 2.753l1.004 1.77 1.703.003-1.662 1.265 1.087 2.049-2.062-1.152-1.823 1.1.613-2.014-1.751-1.248 1.798.013z"
          />
        </g>
      </svg>
    </Box>
  );
}
