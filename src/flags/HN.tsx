import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function HNFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-pqtt3f3qg" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-agvnt4xpl" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-faay7mzni" />
          </mask>
          <path id="mantine-faay7mzni" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-pqtt3f3qg)">
          <use fill="#f7fcff" xlinkHref="#mantine-faay7mzni" />
          <g fill="#4564f9">
            <path d="M0 0h32v8H0zm0 16h32v8H0z" mask="url(#mantine-agvnt4xpl)" />
            <g mask="url(#mantine-agvnt4xpl)">
              <path d="M16.402 12.67l-.866.448.165-.947-.701-.74h.969l.433-.931.433.93h.97l-.702.74.166.948zm-6.084-2.167l-.866.447.165-.947-.701-.74h.969l.433-.931.433.93h.97l-.702.74.166.948zm0 4.2l-.866.447.165-.947-.701-.74h.969l.433-.931.433.93h.97l-.702.74.166.948zm12-4.2l-.866.447.165-.947-.701-.74h.969l.433-.931.433.93h.97l-.702.74.166.948zm0 4.2l-.866.447.165-.947-.701-.74h.969l.433-.931.433.93h.97l-.702.74.166.948z" />
            </g>
          </g>
        </g>
      </svg>
    </Box>
  );
}
