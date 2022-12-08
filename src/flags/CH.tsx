import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function CHFlag({ radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-19pke3g9f" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-o0swlvo4z" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-4y2o5xdwf" />
          </mask>
          <path id="mantine-4y2o5xdwf" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-19pke3g9f)">
          <use fill="#e31d1c" xlinkHref="#mantine-4y2o5xdwf" />
          <path
            fill="#f1f9ff"
            d="M18 6v4h4v4h-4v4h-4v-4h-4v-4h4V6z"
            mask="url(#mantine-o0swlvo4z)"
          />
        </g>
      </svg>
    </Box>
  );
}
