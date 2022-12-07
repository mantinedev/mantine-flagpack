import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function ILFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-wv24pwdxe" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-6tglx85jf" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-h571ag5kd" />
          </mask>
          <path id="mantine-h571ag5kd" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-wv24pwdxe)">
          <use fill="#f7fcff" xlinkHref="#mantine-h571ag5kd" />
          <g fill="#3d58db">
            <path d="M0 3h32v3H0zm0 15h32v3H0z" mask="url(#mantine-6tglx85jf)" />
            <path
              fillRule="nonzero"
              d="M13.02 13.93h6.133l-3.046-5.47zm7.738 1.009h-9.377l4.735-8.319z"
              mask="url(#mantine-6tglx85jf)"
            />
            <path
              fillRule="nonzero"
              d="M13.051 16.188h5.994l-2.936-5.482zm7.63.973h-9.417l4.872-8.085z"
              mask="url(#mantine-6tglx85jf)"
              transform="matrix(1 0 0 -1 0 26.238)"
            />
          </g>
        </g>
      </svg>
    </Box>
  );
}
