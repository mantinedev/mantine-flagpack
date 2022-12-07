import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function DJFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-vegb3xlfn" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-bgnu8r3l9" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-4c5nht0cq" />
          </mask>
          <mask id="mantine-t32o6rwsl" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-q4u9xx52v" />
          </mask>
          <path id="mantine-4c5nht0cq" d="M0 0h32v24H0z" />
          <path id="mantine-q4u9xx52v" d="M0 0v24l18-12z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-vegb3xlfn)">
          <use fill="#73be4a" xlinkHref="#mantine-4c5nht0cq" />
          <path fill="#69f" d="M0-2h32v14H0z" mask="url(#mantine-bgnu8r3l9)" />
          <use fill="#fff" xlinkHref="#mantine-q4u9xx52v" />
          <path
            fill="#e31d1c"
            d="M7.002 14.07l-1.87 1.13.426-2.204L4 11.347l2.11-.09.892-2.057.892 2.058H10l-1.554 1.738.468 2.204z"
            mask="url(#mantine-t32o6rwsl)"
          />
        </g>
      </svg>
    </Box>
  );
}
