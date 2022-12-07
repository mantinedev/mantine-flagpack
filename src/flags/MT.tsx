import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function MTFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
          <path id="mantine-kno8jr97v" d="M0 0h32v24H0z" />
          <path id="mantine-i0ruf48or" d="M0 0h16v24H0z" />
          <mask id="mantine-xvs9yzfb7" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-kno8jr97v" />
          </mask>
          <mask id="mantine-3zgrsjmyt" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-i0ruf48or" />
          </mask>
        </defs>
        <g fill="none" fillRule="evenodd">
          <use fill="#f7fcff" xlinkHref="#mantine-kno8jr97v" />
          <path
            fill="#a0a0a0"
            stroke="#feca00"
            d="M6.5 4.5h3l.001 2.902L13.5 8.495V11.5h-3.172c.051.412-.4.746-.827.457V15.5h-3v-3.506a.506.506 0 01-.766-.493H2.5V8.5h3.415c-.23-.313-.227-.64-.073-.843z"
            mask="url(#mantine-xvs9yzfb7)"
          />
          <g mask="url(#mantine-xvs9yzfb7)">
            <g transform="translate(16)">
              <use fill="#e31d1c" xlinkHref="#mantine-i0ruf48or" />
              <path fill="#fff" d="M-16 0h12v24h-12z" mask="url(#mantine-3zgrsjmyt)" />
            </g>
          </g>
        </g>
      </svg>
    </Box>
  );
}
