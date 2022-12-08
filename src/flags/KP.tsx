import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function KPFlag({ radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-ai0h71icz" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-5mv9901k9" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-xfc4tbfbh" />
          </mask>
          <path id="mantine-xfc4tbfbh" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-ai0h71icz)">
          <use fill="#3d58db" xlinkHref="#mantine-xfc4tbfbh" />
          <path
            fill="#c51918"
            stroke="#f7fcff"
            strokeWidth="2"
            d="M-1 5h34v14H-1z"
            mask="url(#mantine-5mv9901k9)"
          />
          <g mask="url(#mantine-5mv9901k9)">
            <g transform="translate(5 7)">
              <circle cx="5" cy="5" r="5" fill="#f7fcff" />
              <path
                fill="#c51918"
                d="M4.995 6.87L2.28 8.76l.958-3.167-2.637-2 3.309-.067L4.995.4l1.087 3.126 3.308.067-2.637 2 .958 3.167z"
              />
            </g>
          </g>
        </g>
      </svg>
    </Box>
  );
}
