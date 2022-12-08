import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function GEFlag({ radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-3yvggxhrb" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-j7xdevwtu" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-kieu1fvti" />
          </mask>
          <path id="mantine-kieu1fvti" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-3yvggxhrb)">
          <use fill="#f7fcff" xlinkHref="#mantine-kieu1fvti" />
          <g fill="#e31d1c">
            <g mask="url(#mantine-j7xdevwtu)">
              <path d="M14 0h4v10h14v4H18v10h-4V14H0v-4h14z" />
            </g>
            <g mask="url(#mantine-j7xdevwtu)">
              <path d="M9.999 17.222L12.2 17v2c-1.468-.092-2.201-.125-2.201-.098 0 .026.067.726.201 2.098h-2l.16-2H6.2v-2l2.16.222L8.2 15h2zm0-12L12.2 5v2c-1.468-.092-2.201-.125-2.201-.098s.067.726.201 2.098h-2l.16-2H6.2V5l2.16.222L8.2 3h2zm14 0L26.2 5v2c-1.468-.092-2.201-.125-2.201-.098s.067.726.201 2.098h-2l.16-2H20.2V5l2.16.222L22.2 3h2zm0 12L26.2 17v2c-1.468-.092-2.201-.125-2.201-.098 0 .026.067.726.201 2.098h-2l.16-2H20.2v-2l2.16.222L22.2 15h2z" />
            </g>
          </g>
        </g>
      </svg>
    </Box>
  );
}
