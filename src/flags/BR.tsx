import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function BRFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-abf7gsqg7" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-qn0j7f7bl" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-xo29aii9b" />
          </mask>
          <mask id="mantine-dp4luzznd" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-3uq5gkmeh" />
          </mask>
          <path id="mantine-xo29aii9b" d="M0 0h32v24H0z" />
          <path id="mantine-qkytqz2lv" d="M15.927 3.704l12.202 8.504L15.76 20.17 3.809 12.043z" />
          <linearGradient id="mantine-wvfct0he4" x1="50%" x2="50%" y1="100%" y2="0%">
            <stop offset="0" stopColor="#ffc600" />
            <stop offset="1" stopColor="#ffde42" />
          </linearGradient>
          <filter id="mantine-m3p0ddq8n" width="76%" height="68.6%" x="11.9%" y="15.4%">
            <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
            <feColorMatrix
              in="shadowOffsetOuter1"
              values="0 0 0 0 0.03137255 0 0 0 0 0.36862746 0 0 0 0 0 0 0 0 0.28 0"
            />
          </filter>
          <circle id="mantine-3uq5gkmeh" cx="16" cy="12.2" r="5" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-abf7gsqg7)">
          <use fill="#093" xlinkHref="#mantine-xo29aii9b" />
          <g mask="url(#mantine-qn0j7f7bl)">
            <use fill="#000" filter="url(#mantine-m3p0ddq8n)" xlinkHref="#mantine-qkytqz2lv" />
            <use fill="#ffd221" xlinkHref="#mantine-qkytqz2lv" />
            <use fill="url(#mantine-wvfct0he4)" xlinkHref="#mantine-qkytqz2lv" />
            <use fill="#2e42a5" xlinkHref="#mantine-3uq5gkmeh" />
            <g fill="#f7fcff">
              <path
                d="M14.38 14.57l-.223.117.042-.248-.18-.176.25-.037.111-.226.112.226.25.037-.181.176.042.248zm2 0l-.223.117.042-.248-.18-.176.25-.037.111-.226.112.226.25.037-.181.176.042.248zm0 1.2l-.223.117.042-.248-.18-.176.25-.037.111-.226.112.226.25.037-.181.176.042.248zm-1-4.2l-.223.117.042-.248-.18-.176.25-.037.111-.226.112.226.25.037-.181.176.042.248zm0 2l-.223.117.042-.248-.18-.176.25-.037.111-.226.112.226.25.037-.181.176.042.248zm-1.4-1l-.223.117.042-.248-.18-.176.25-.037.111-.226.112.226.25.037-.181.176.042.248zm-1.4.8l-.223.117.042-.248-.18-.176.25-.037.111-.226.112.226.25.037-.181.176.042.248zm4.6-3.4l-.223.117.042-.248-.18-.176.25-.037.111-.226.112.226.25.037-.181.176.042.248z"
                mask="url(#mantine-dp4luzznd)"
              />
              <path
                fillRule="nonzero"
                d="M9.925 10.997l.15-1.994c4.798.362 8.585 1.94 11.313 4.745l-1.434 1.395c-2.364-2.433-5.692-3.819-10.03-4.146z"
                mask="url(#mantine-dp4luzznd)"
              />
            </g>
            <path
              fill="#093"
              fillRule="nonzero"
              d="M12.29 10.603l.05-.498c3.094.32 5.747 1.506 7.952 3.552l-.34.366c-2.125-1.972-4.676-3.11-7.663-3.42z"
              mask="url(#mantine-dp4luzznd)"
            />
          </g>
        </g>
      </svg>
    </Box>
  );
}
