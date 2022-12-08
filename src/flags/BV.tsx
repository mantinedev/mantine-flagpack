import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function BVFlag({ radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-5h3oamlzf" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-ehpwgb4mt" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-gjntf7o3b" />
          </mask>
          <path id="mantine-gjntf7o3b" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-5h3oamlzf)">
          <use fill="#e31d1c" xlinkHref="#mantine-gjntf7o3b" />
          <g fill="#2e42a5" stroke="#f7fcff" strokeWidth="2" mask="url(#mantine-ehpwgb4mt)">
            <path d="M15-1V9h18v6H15v10H9V15H-1V9H9V-1z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
