import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function WSFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-zfimmhx7y" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-woqcwpahn" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-5vrfr9q2i" />
          </mask>
          <path id="mantine-5vrfr9q2i" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-zfimmhx7y)">
          <use fill="#c51918" xlinkHref="#mantine-5vrfr9q2i" />
          <g mask="url(#mantine-woqcwpahn)">
            <path fill="#2e42a5" d="M0 0h16v14H0z" />
            <path
              fill="#feffff"
              d="M3.566 7.772l-1.06.64.241-1.249-.882-.934 1.195-.051.506-1.166.505 1.166h1.194l-.881.985.265 1.249zm8 0l-1.06.64.241-1.249-.882-.934 1.195-.051.506-1.166.505 1.166h1.194l-.881.985.265 1.249zm-4.1-3.634l-.998.602.227-1.175-.83-.88 1.125-.047.476-1.098.476 1.098h1.123l-.83.927.25 1.175zm1.08 4.287l-.623.377.142-.735-.52-.55.704-.03.297-.685.298.686h.702l-.518.58.156.734zm-1.137 4.403l-1.497.904.342-1.763-1.247-1.32 1.688-.071.714-1.646.714 1.646h1.684l-1.243 1.39.374 1.764z"
            />
          </g>
        </g>
      </svg>
    </Box>
  );
}
