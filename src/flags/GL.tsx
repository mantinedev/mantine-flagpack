import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function GLFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-b90v74lub" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-a576w75yq" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-rjd6rj2c4" />
          </mask>
          <mask id="mantine-roq3pp46e" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-9ir1hf08n" />
          </mask>
          <path id="mantine-rjd6rj2c4" d="M0 0h32v12H0z" />
          <path id="mantine-9ir1hf08n" d="M0 0h32v12H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-b90v74lub)">
          <g transform="translate(0 12)">
            <use fill="#c51918" xlinkHref="#mantine-rjd6rj2c4" />
            <circle cx="12" r="8" fill="#f7fcff" mask="url(#mantine-a576w75yq)" />
          </g>
          <use fill="#f7fcff" xlinkHref="#mantine-9ir1hf08n" />
          <circle cx="12" cy="12" r="8" fill="#c51918" mask="url(#mantine-roq3pp46e)" />
        </g>
      </svg>
    </Box>
  );
}
