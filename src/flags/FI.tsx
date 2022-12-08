import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function FIFlag({ radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-2djqht8mv" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-za8c6wq8v" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-mkyk3grzl" />
          </mask>
          <path id="mantine-mkyk3grzl" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-2djqht8mv)">
          <use fill="#f7fcff" xlinkHref="#mantine-mkyk3grzl" />
          <g fill="#2e42a5" stroke="#2e42a5" strokeWidth="2" mask="url(#mantine-za8c6wq8v)">
            <path d="M13.818 1v9.323H33v4H13.818V25h-4V14.323H-1v-4H9.818V1z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
