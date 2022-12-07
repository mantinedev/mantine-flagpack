import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function AZFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-nr7we41yx" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-4temq5bq3" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-t1mfq6gzu" />
          </mask>
          <path id="mantine-t1mfq6gzu" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-nr7we41yx)">
          <use fill="#af0100" xlinkHref="#mantine-t1mfq6gzu" />
          <path fill="#3ca5d9" d="M0 0h32v8H0z" mask="url(#mantine-4temq5bq3)" />
          <path fill="#73be4a" d="M0 16h32v8H0z" mask="url(#mantine-4temq5bq3)" />
          <g fill="#f7fcff" mask="url(#mantine-4temq5bq3)">
            <path d="M16.997 7.793c1.165-.003 2.587.634 2.995 1.541 0 0-1.536-.635-3.017-.3-1.482.334-2.338 1.511-2.35 2.966-.015 1.554 1.168 2.713 2.515 3.024 1.347.31 2.79-.55 2.79-.55-.174.482-1.01 1.615-2.772 1.62-2.197.006-4.693-1.485-4.67-4.108.023-2.53 2.338-4.187 4.509-4.193zm2.196 2.01l.47 1.352 1.432.03-1.14.865.414 1.37-1.176-.817-1.175.818.415-1.371-1.142-.865 1.432-.03z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
