import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function COFlag({ radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-kp4dcz1g1" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-jz7kxzg25" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-ck84xoslp" />
          </mask>
          <path id="mantine-ck84xoslp" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-kp4dcz1g1)">
          <use fill="#2e42a5" xlinkHref="#mantine-ck84xoslp" />
          <path fill="#feca00" d="M0 0h32v12H0z" mask="url(#mantine-jz7kxzg25)" />
          <path fill="#e31d1c" d="M0 18h32v6H0z" mask="url(#mantine-jz7kxzg25)" />
        </g>
      </svg>
    </Box>
  );
}
