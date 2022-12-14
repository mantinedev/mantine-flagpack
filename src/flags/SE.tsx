import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function SEFlag({ radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-lklte7uul" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-v69qr9z69" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-s15sxnhle" />
          </mask>
          <path id="mantine-s15sxnhle" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-lklte7uul)">
          <use fill="#3d58db" xlinkHref="#mantine-s15sxnhle" />
          <g fill="#feca00" mask="url(#mantine-v69qr9z69)">
            <path d="M10 0h4v10h18v4H14v10h-4V14H0v-4h10z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
