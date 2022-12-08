import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function TNFlag({ radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-d6ufhspts" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-73dcnc201" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-qg85ws2eo" />
          </mask>
          <path id="mantine-qg85ws2eo" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-d6ufhspts)">
          <use fill="#e31d1c" xlinkHref="#mantine-qg85ws2eo" />
          <circle cx="16" cy="12" r="8" fill="#f7fcff" mask="url(#mantine-73dcnc201)" />
          <path
            fill="#e31d1c"
            d="M17.503 6.227s-4.238 1.175-4.317 5.701c-.079 4.526 4.117 5.75 4.117 5.75-1.614.685-6.84-.381-6.746-5.796.095-5.414 5.214-6.36 6.946-5.655zm-.307 2.712l1.296 1.679 1.923-.61-1.012 1.897 1.602 1.355-2.253-.2-1.397 1.611-.039-2.106-2.234-.825 2.105-.727z"
            mask="url(#mantine-73dcnc201)"
            transform="rotate(-1 15.78 11.943)"
          />
        </g>
      </svg>
    </Box>
  );
}
