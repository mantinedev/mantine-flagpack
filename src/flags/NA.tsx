import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function NAFlag({ radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-abjeg5crn" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-hi2moxycn" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-abvg9r97q" />
          </mask>
          <path id="mantine-abvg9r97q" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-abjeg5crn)">
          <use fill="#093" xlinkHref="#mantine-abvg9r97q" />
          <path fill="#3195f9" d="M0 0v24L32 0z" mask="url(#mantine-hi2moxycn)" />
          <g mask="url(#mantine-hi2moxycn)">
            <path
              fill="#e31d1c"
              fillRule="nonzero"
              stroke="#f7fcff"
              strokeWidth="2"
              d="M32.769-3.617l3.19 6.867L-.48 28.055l-3.842-6.959z"
            />
            <path
              fill="#feca00"
              d="M7.524 1.2l.313 2.045 1.928-.75-.751 1.927 2.045.314L9.445 6.03l1.614 1.294-2.045.313.751 1.928-1.928-.751-.313 2.045L6.23 9.245l-1.294 1.614-.314-2.045-1.928.751.751-1.928L1.4 7.324 3.015 6.03 1.4 4.736l2.045-.314-.75-1.928 1.927.751.314-2.045L6.23 2.815zM6.23 3.53a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm0 .5a2 2 0 110 4 2 2 0 010-4z"
            />
          </g>
        </g>
      </svg>
    </Box>
  );
}
