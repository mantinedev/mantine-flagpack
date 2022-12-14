import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function EEFlag({ radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-i10fwjw89" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-15quo007o" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-p2l2bam3t" />
          </mask>
          <path id="mantine-p2l2bam3t" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-i10fwjw89)">
          <use fill="#f7fcff" xlinkHref="#mantine-p2l2bam3t" />
          <path fill="#40a8ff" d="M0 0h32v8H0z" mask="url(#mantine-15quo007o)" />
          <path fill="#272727" d="M0 8h32v8H0z" mask="url(#mantine-15quo007o)" />
        </g>
      </svg>
    </Box>
  );
}
