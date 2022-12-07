import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function SRFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
        <mask id="mantine-it7pgeu40" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-it7pgeu40)">
          <path fill="#4e8b1d" d="M0 16h32v8H0zM0 0h32v6H0z" />
          <path fill="#af0100" stroke="#fff" strokeWidth="3" d="M33.5 6.5v11h-35v-11z" />
          <path
            fill="#feca00"
            d="M16.002 14.494L13.508 16l.57-2.938-2.078-2.2 2.812-.118L16.002 8l1.19 2.744H20l-2.072 2.318.624 2.938z"
          />
        </g>
      </svg>
    </Box>
  );
}
