import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function ATFlag({ radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-sur0h8bap" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-rf23e294f" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-wxi43f661" />
          </mask>
          <path id="mantine-wxi43f661" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-sur0h8bap)">
          <use fill="#f7fcff" xlinkHref="#mantine-wxi43f661" />
          <path fill="#c51918" d="M0 0h32v8H0zm0 16h32v8H0z" mask="url(#mantine-rf23e294f)" />
        </g>
      </svg>
    </Box>
  );
}
