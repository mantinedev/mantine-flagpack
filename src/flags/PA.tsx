import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function PAFlag({ radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-yw54auovo" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-ivttv28t6" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-t32xsnyyt" />
          </mask>
          <path id="mantine-t32xsnyyt" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-yw54auovo)">
          <use fill="#f7fcff" xlinkHref="#mantine-t32xsnyyt" />
          <path
            fill="#e31d1c"
            d="M16 0h16v12H16zm7.02 19.15l-2.302 1.424.894-2.391-1.957-1.811h2.374l.992-2.587.757 2.587h2.377l-1.713 1.81.839 2.392z"
            mask="url(#mantine-ivttv28t6)"
          />
          <path
            fill="#2e42a5"
            d="M9.02 8.365L6.719 9.79l.894-2.392-1.957-1.81H8.03L9.021 3l.757 2.587h2.377l-1.713 1.81.839 2.393zM0 12h16v12H0z"
            mask="url(#mantine-ivttv28t6)"
          />
        </g>
      </svg>
    </Box>
  );
}
