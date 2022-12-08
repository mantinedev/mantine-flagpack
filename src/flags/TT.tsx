import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function TTFlag({ radius, sx, ...others }: FlagProps) {
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
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 24">
        <mask
          id="mantine-2manjwvfu"
          style={{ maskType: 'alpha' }}
          width="32"
          height="24"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <path fill="#fff" d="M0 0h32v24H0z" />
        </mask>
        <g mask="url(#mantine-2manjwvfu)">
          <path fill="#E31D1C" fillRule="evenodd" d="M0 0v24h32V0H0z" clipRule="evenodd" />
          <mask
            id="mantine-2hoqtw9ba"
            style={{ maskType: 'alpha' }}
            width="32"
            height="24"
            x="0"
            y="0"
            maskUnits="userSpaceOnUse"
          >
            <path fill="#fff" fillRule="evenodd" d="M0 0v24h32V0H0z" clipRule="evenodd" />
          </mask>
          <g mask="url(#mantine-2hoqtw9ba)">
            <path
              fill="#272727"
              stroke="#F7FCFF"
              strokeWidth="1.5"
              d="M29.56 29.496l-.543.444-.48-.512L-1.807-2.971l-.548-.585.62-.508 3.097-2.532.543-.444.48.512L32.727 25.87l.549.586-.621.508-3.096 2.532z"
            />
          </g>
        </g>
      </svg>
    </Box>
  );
}
