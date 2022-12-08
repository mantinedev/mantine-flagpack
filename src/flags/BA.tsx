import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function BAFlag({ radius, sx, ...others }: FlagProps) {
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
        <mask id="mantine-wcjlomsi4" fill="#fff">
          <path fillRule="evenodd" d="M0 0h34v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-wcjlomsi4)">
          <path fill="#2e42a5" d="M0 0h32v24H0z" />
          <path fill="#feca00" d="M9 0h20v24z" />
          <path
            fill="#f7fcff"
            d="M6.108 2.794l-1.176.618.225-1.31-.951-.926L5.52.985l.588-1.191.588 1.19 1.314.192-.95.927.224 1.309zm3.487 4.28l-1.176.618.225-1.31-.951-.926 1.314-.191.588-1.191.588 1.19 1.314.192-.951.927.224 1.309zm3.268 4.164l-1.175.618.224-1.309-.95-.927 1.314-.19.587-1.192.588 1.191 1.315.191-.952.927.225 1.31zm3.202 3.992l-1.175.617.224-1.309-.95-.927 1.314-.19.587-1.192.588 1.191 1.314.191-.95.927.224 1.31zm3.449 4.107l-1.175.618.224-1.31-.95-.926 1.314-.191.587-1.191.588 1.19 1.315.192-.952.927.225 1.309zm3.813 3.974l-1.176.618.225-1.309-.951-.927 1.314-.191.588-1.191.588 1.191 1.314.191-.951.927.224 1.31z"
          />
        </g>
      </svg>
    </Box>
  );
}
