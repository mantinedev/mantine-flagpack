import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function CKFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-t3amifftz" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-aajganup2" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-d61rb0rkv" />
          </mask>
          <mask id="mantine-n5pjvupoj" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-tl44pawhf" />
          </mask>
          <path id="mantine-d61rb0rkv" d="M0 0h32v24H0z" />
          <path id="mantine-tl44pawhf" d="M0 0h18v14H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-t3amifftz)">
          <use fill="#2e42a5" xlinkHref="#mantine-d61rb0rkv" />
          <g mask="url(#mantine-aajganup2)">
            <use fill="#2b409a" xlinkHref="#mantine-tl44pawhf" />
            <g mask="url(#mantine-n5pjvupoj)">
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
          <g fill="#fff" mask="url(#mantine-aajganup2)">
            <path d="M24.499 18.797l.33.739h.719l-.564.574.218.905-.702-.509-.726.51.245-.906-.645-.574h.842zm-2.374-1.207l.331.74h.718l-.564.573.218.906-.702-.51-.726.51.245-.906L21 18.33h.843zm4.922-.04l.331.74h.718l-.564.574.218.905-.702-.509-.726.51.245-.906-.645-.574h.843zm-6.188-2.258l.33.74h.719l-.564.573.218.906-.702-.51-.726.51.245-.906-.645-.574h.842zm7.185-.016l.33.739h.719l-.564.574.218.905-.702-.509-.726.51.245-.906-.645-.574h.842zm-6.272-2.335l.331.74h.718l-.564.573.218.906-.702-.509-.726.509.245-.906-.645-.574h.842zm5.433-.046l.33.739h.719l-.564.574.218.905-.702-.508-.726.508.245-.905-.645-.574h.842zm-2.813-1.259l.331.74h.718l-.564.573.218.906-.702-.509-.726.51.245-.907-.645-.573h.842z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
