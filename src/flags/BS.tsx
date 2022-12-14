import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function BSFlag({ radius, sx, ...others }: FlagProps) {
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
        <mask id="mantine-4rtihn13y" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-4rtihn13y)">
          <path fill="#feca00" d="M0 0h32v24H0z" />
          <path fill="#3cb1cf" d="M0 0h32v8H0zm0 16h32v8H0z" />
          <path fill="#272727" d="M0 0l16 12L0 24z" />
        </g>
      </svg>
    </Box>
  );
}
