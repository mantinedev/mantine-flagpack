import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function MRFlag({ radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-2soimqyug" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-bmtcz9h3m" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-oggjo6579" />
          </mask>
          <path id="mantine-oggjo6579" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-2soimqyug)">
          <use fill="#1c7b4d" xlinkHref="#mantine-oggjo6579" />
          <path fill="#e31d1c" d="M0 0h32v6H0zm0 18h32v6H0z" mask="url(#mantine-bmtcz9h3m)" />
          <g fill="#feca00" mask="url(#mantine-bmtcz9h3m)">
            <path d="M16.242 14.379c5.185.028 6.646-4.314 6.646-4.314-.294 3.715-2.349 6.234-6.646 6.234s-5.875-3.263-6.646-6.518c0 0 1.46 4.569 6.646 4.598z" />
            <path d="M17.637 9.814l.337 1.963-1.763-.927-1.764.927.337-1.963-1.427-1.534h1.972l.882-1.93.881 1.93h1.972z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
