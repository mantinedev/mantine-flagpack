import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function JOFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-wm6gwjal4" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-6sdngq75e" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-tl6i1v8fy" />
          </mask>
          <mask id="mantine-yd0j7h9xc" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-wug4gsjga" />
          </mask>
          <path id="mantine-tl6i1v8fy" d="M0 0h32v24H0z" />
          <path id="mantine-wug4gsjga" d="M0 0v24l20-12z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-wm6gwjal4)">
          <use fill="#f7fcff" xlinkHref="#mantine-tl6i1v8fy" />
          <path fill="#272727" d="M0 0h32v8H0z" mask="url(#mantine-6sdngq75e)" />
          <path fill="#093" d="M0 16h32v8H0z" mask="url(#mantine-6sdngq75e)" />
          <use fill="#e31d1c" xlinkHref="#mantine-wug4gsjga" />
          <path
            fill="#f7fcff"
            d="M9.002 13.87L7.132 15l.426-2.204L6 11.146l2.11-.088L9.001 9l.892 2.058H12l-1.554 1.738.468 2.204z"
            mask="url(#mantine-yd0j7h9xc)"
          />
        </g>
      </svg>
    </Box>
  );
}
