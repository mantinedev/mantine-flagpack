import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function CVFlag({ radius, sx, ...others }: FlagProps) {
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
          <path id="mantine-kb86d0dzk" d="M0 0h32v24H0z" />
          <path
            id="mantine-us60r56uu"
            d="M10.52 20.04l.332.74h.718l-.564.574.218.905-.702-.508-.726.508.245-.905-.645-.574h.842zm3-1.6l.332.74h.718l-.564.574.218.905-.702-.508-.726.508.245-.905-.645-.574h.842zm-6 0l.332.74h.718l-.564.574.218.905-.702-.508-.726.508.245-.905-.645-.574h.842zm8.4-2.4l.332.74h.718l-.564.574.218.905-.702-.508-.726.508.245-.905-.645-.574h.842zm-10.8 0l.332.74h.718l-.564.574.218.905-.702-.508-.726.508.245-.905-.645-.574h.842zm10.8-4l.332.74h.718l-.564.574.218.905-.702-.508-.726.508.245-.905-.645-.574h.842zm-10.8 0l.332.74h.718l-.564.574.218.905-.702-.508-.726.508.245-.905-.645-.574h.842zm8.4-2.4l.332.74h.718l-.564.574.218.905-.702-.508-.726.508.245-.905-.645-.574h.842zm-6 0l.332.74h.718l-.564.574.218.905-.702-.508-.726.508.245-.905-.645-.574h.842zm3-1.6l.332.74h.718l-.564.574.218.905-.702-.508-.726.508.245-.905-.645-.574h.842z"
          />
          <mask id="mantine-hxx9zu57b" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-5667w4xvw" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-kb86d0dzk" />
          </mask>
          <filter id="mantine-fa10u3ary" width="192.5%" height="184.4%" x="-46.2%" y="-42.2%">
            <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2" />
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0"
            />
          </filter>
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-hxx9zu57b)">
          <use fill="#4141db" xlinkHref="#mantine-kb86d0dzk" />
          <path
            fill="#f90000"
            stroke="#f7fcff"
            strokeWidth="2"
            d="M-1 13h34v4H-1z"
            mask="url(#mantine-5667w4xvw)"
          />
          <g mask="url(#mantine-5667w4xvw)">
            <use fill="#000" filter="url(#mantine-fa10u3ary)" xlinkHref="#mantine-us60r56uu" />
            <use fill="#ffde00" xlinkHref="#mantine-us60r56uu" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
