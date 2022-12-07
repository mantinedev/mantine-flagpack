import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function VNFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-svjnhcmgb" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-l7y792wga" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-jbb931flv" />
          </mask>
          <path id="mantine-jbb931flv" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-svjnhcmgb)">
          <path fill="#f7fcff" d="M0 0h32v24H0z" />
          <use fill="#e31d1c" xlinkHref="#mantine-jbb931flv" />
          <g fill="#ffd221" mask="url(#mantine-l7y792wga)">
            <path d="M16.062 15.98l-5.151 3.275 1.728-5.733-3.674-3.746 5.065-.11 2.24-5.66 2.043 5.734 5.053.089-3.797 3.814 1.773 5.454z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
