import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function AWFlag({ radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-d8biiysvl" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-yepqhm8kr" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-ph3zwr517" />
          </mask>
          <path id="mantine-ph3zwr517" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-d8biiysvl)">
          <use fill="#5ba3da" xlinkHref="#mantine-ph3zwr517" />
          <g mask="url(#mantine-yepqhm8kr)">
            <path
              fill="red"
              stroke="#f7fcff"
              strokeWidth=".35"
              d="M5.773 7.96l-4.38-.925 4.434-.878 1.283-4.59L8.122 6.12l3.96.92-3.914.92-1.129 3.743z"
            />
            <path fill="#fad615" d="M32 18v2H0v-2zm0-4v2H0v-2z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
