import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function SYFlag({ radius, sx, ...others }: FlagProps) {
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
        <mask id="mantine-mscbmq0j2" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-mscbmq0j2)">
          <path fill="#f7fcff" d="M0 0h32v24H0z" />
          <path
            fill="#409100"
            d="M9.001 13.247L7.754 14l.285-1.47L7 11.432l1.406-.06L9.001 10l.595 1.372H11L9.964 12.53l.312 1.47zm14 0L21.754 14l.285-1.47L21 11.432l1.406-.06.595-1.371.595 1.372H25l-1.036 1.159.312 1.469z"
          />
          <path fill="#e31d1c" d="M0 0h32v8H0z" />
          <path fill="#272727" d="M0 16h32v8H0z" />
        </g>
      </svg>
    </Box>
  );
}
