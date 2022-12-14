import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function JMFlag({ radius, sx, ...others }: FlagProps) {
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
        <mask id="mantine-h0ia5v6qn" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-h0ia5v6qn)">
          <path fill="#093" d="M0 0h32v24H0z" />
          <g fill="#272727" stroke="#feca00" strokeWidth="2.7">
            <path d="M-2.35-2.865L15.658 12-2.35 26.865z" />
            <path d="M34.35-2.784L15.6 12l18.75 14.784z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
