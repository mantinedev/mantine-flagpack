import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function SSFlag({ radius, sx, ...others }: FlagProps) {
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
        <mask id="mantine-5lxmwvyhn" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-5lxmwvyhn)">
          <path fill="#f7fcff" d="M0 0h32v24H0z" />
          <path fill="#272727" d="M0 0h32v8H0z" />
          <path fill="#4e8b1d" d="M0 16h32v8H0z" />
          <path
            fill="#e31d1c"
            fillRule="nonzero"
            stroke="#f7fcff"
            strokeWidth="2"
            d="M-1 7h34v10H-1z"
          />
          <path fill="#3d58db" d="M0 0l20 12L0 24z" />
          <path
            fill="#feca00"
            d="M6.648 14.409l-2.02 2.1-.21-2.986-2.576-1.586 2.686-.843.439-2.958 1.86 2.342 2.712-.727-1.402 2.776L9.5 15.203z"
          />
        </g>
      </svg>
    </Box>
  );
}
