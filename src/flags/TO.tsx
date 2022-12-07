import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function TOFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-3z4ms2hko" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-glg73cjb2" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-i3ad1v8c9" />
          </mask>
          <path id="mantine-i3ad1v8c9" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-3z4ms2hko)">
          <use fill="#e31d1c" xlinkHref="#mantine-i3ad1v8c9" />
          <path fill="#f7fcff" d="M0 0h18v16H0z" mask="url(#mantine-glg73cjb2)" />
          <path fill="#e31d1c" d="M12 2v4h4v4h-4v4H8v-4H4V6h4V2z" mask="url(#mantine-glg73cjb2)" />
        </g>
      </svg>
    </Box>
  );
}
