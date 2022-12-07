import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function LUFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-s3nxeoqgp" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-9x34iver2" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-ar3os4ovn" />
          </mask>
          <path id="mantine-ar3os4ovn" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-s3nxeoqgp)">
          <use fill="#f7fcff" xlinkHref="#mantine-ar3os4ovn" />
          <path fill="#f05234" d="M0 0h32v8H0z" mask="url(#mantine-9x34iver2)" />
          <path fill="#2eb7ec" d="M0 16h32v8H0z" mask="url(#mantine-9x34iver2)" />
        </g>
      </svg>
    </Box>
  );
}
