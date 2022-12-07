import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function CUFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-37d4hq2c0" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-sucqeju6t" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-kbgrjp606" />
          </mask>
          <mask id="mantine-i74uwepux" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-sk4wlel39" />
          </mask>
          <path id="mantine-kbgrjp606" d="M0 0h32v24H0z" />
          <path id="mantine-sk4wlel39" d="M0 0v24l18-12z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-37d4hq2c0)">
          <use fill="#3d58db" xlinkHref="#mantine-kbgrjp606" />
          <path
            fill="#3d58db"
            stroke="#f7fcff"
            strokeWidth="4"
            d="M-2 8h36v8H-2z"
            mask="url(#mantine-sucqeju6t)"
          />
          <use fill="#e31d1c" xlinkHref="#mantine-sk4wlel39" />
          <g fill="#f7fcff" mask="url(#mantine-i74uwepux)">
            <path d="M6.688 14.217l-3.672 1.938 1.788-3.894-2.278-2.08 2.812-.104 1.35-3.52 1.03 3.52h2.808l-1.872 2.184 1.489 3.894z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
