import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function LTFlag({ radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-ffu4ygfzi" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-3ngi2m466" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-vkwy3xzbb" />
          </mask>
          <path id="mantine-vkwy3xzbb" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-ffu4ygfzi)">
          <use fill="#55ba07" xlinkHref="#mantine-vkwy3xzbb" />
          <path fill="#feca00" d="M0 0h32v8H0z" mask="url(#mantine-3ngi2m466)" />
          <path fill="#c51918" d="M0 16h32v8H0z" mask="url(#mantine-3ngi2m466)" />
        </g>
      </svg>
    </Box>
  );
}
