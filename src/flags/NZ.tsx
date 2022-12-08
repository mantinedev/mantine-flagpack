import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function NZFlag({ radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-uxwrlu4t8" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-6j39t82f9" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-6qbq979q9" />
          </mask>
          <mask id="mantine-6metv6yz4" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-6nu7qvdmz" />
          </mask>
          <path id="mantine-6qbq979q9" d="M0 0h32v24H0z" />
          <path id="mantine-6nu7qvdmz" d="M0 0h18v14H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-uxwrlu4t8)">
          <use fill="#2e42a5" xlinkHref="#mantine-6qbq979q9" />
          <g mask="url(#mantine-6j39t82f9)">
            <use fill="#2b409a" xlinkHref="#mantine-6nu7qvdmz" />
            <g mask="url(#mantine-6metv6yz4)">
              <g fillRule="nonzero">
                <path
                  fill="#f7fcff"
                  d="M-2.004 13l3.96 1.737L18.09 1.889l2.09-2.582-4.236-.58-6.58 5.536-5.297 3.73z"
                />
                <path fill="#f50100" d="M-1.462 14.217l2.018 1.008L19.429-.933h-2.833z" />
                <path
                  fill="#f7fcff"
                  d="M20.004 13l-3.96 1.737L-.09 1.889-2.18-.693l4.236-.58 6.58 5.536 5.297 3.73z"
                />
                <path
                  fill="#f50100"
                  d="M19.87 13.873l-2.019 1.008-8.036-6.917-2.383-.773L-2.38-.684H.453l9.807 7.688 2.605.926z"
                />
              </g>
              <path
                fill="#f50100"
                stroke="#f7fcff"
                strokeWidth="1.5"
                d="M10.735-.75v6h8.015v3.5h-8.016v6h-3.5v-6H-.75v-3.5h7.984v-6z"
              />
            </g>
          </g>
          <g fill="#f50100" stroke="#f7fcff" strokeWidth=".4" mask="url(#mantine-6j39t82f9)">
            <path d="M24.853 16l.882 1.786 1.971.287-1.426 1.39.337 1.964-1.764-.927-1.763.927.337-1.963L22 18.073l1.971-.287zM21.2 10.4l.68 1.377 1.52.221-1.1 1.073.26 1.514-1.36-.715-1.36.715.26-1.514-1.1-1.073 1.52-.22zm6.998 0l.679 1.376 1.518.22-1.099 1.072.26 1.512-1.358-.714-1.359.714.26-1.512L26 11.997l1.518-.221zM25.2 4.8l.68 1.377 1.52.221-1.1 1.073.26 1.514-1.36-.715-1.36.715.26-1.514L23 6.398l1.52-.22z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
