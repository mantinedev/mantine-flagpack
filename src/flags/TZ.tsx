import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function TZFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-etgzyqtpk" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-ig8k490sb" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-01gn6titx" />
          </mask>
          <path id="mantine-01gn6titx" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-etgzyqtpk)">
          <use fill="#3195f9" xlinkHref="#mantine-01gn6titx" />
          <path fill="#73be4a" d="M0 0v24L32 0z" mask="url(#mantine-ig8k490sb)" />
          <path
            fill="#272727"
            fillRule="nonzero"
            stroke="#ffd018"
            strokeWidth="2.5"
            d="M33.604-4.519L37.213.887-1.127 26.48l-3.61-5.406z"
            mask="url(#mantine-ig8k490sb)"
          />
        </g>
      </svg>
    </Box>
  );
}
