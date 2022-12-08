import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function NPFlag({ radius, sx, ...others }: FlagProps) {
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 12">
        <defs>
          <path id="mantine-0a8tjqkdh" d="M0 0v12h11L6 6h5z" />
          <path id="mantine-07d51c7vb" d="M0 0v12h11L6 6h5z" />
          <path id="mantine-5ylcdva1s" d="M0 0v12h11L6 6h5z" />
        </defs>
        <g fill="none" fillRule="evenodd">
          <path fill="#FFF" fillRule="nonzero" d="M0 0h16v12H0z" />
          <path fill="#DD0C39" stroke="#4857A1" d="M.5.842L9.04 5.5H4.931l5 6H.5z" />
          <g>
            <mask id="mantine-ci6wy580g" fill="#fff">
              <use xlinkHref="#mantine-0a8tjqkdh" />
            </mask>
            <path
              fill="#F7FCFF"
              fillRule="nonzero"
              d="M2.915 10.005l-.613.795-.028-1.003-.963.283.567-.828-.946-.337.946-.337-.567-.828.963.283.028-1.004.613.796.612-.796.029 1.004.963-.283-.567.828.945.337-.945.337.567.828-.963-.283-.029 1.003z"
              mask="url(#mantine-ci6wy580g)"
            />
          </g>
          <g>
            <mask id="mantine-mj7er9w9j" fill="#fff">
              <use xlinkHref="#mantine-07d51c7vb" />
            </mask>
            <path
              fill="#F7FCFF"
              fillRule="nonzero"
              d="M2.9 4.07l-.32.415-.015-.524-.503.148.296-.433-.493-.176.493-.176-.296-.433.503.148.015-.524.32.416.32-.416.015.524.503-.148-.296.433.493.176-.493.176.296.433-.503-.148-.015.524z"
              mask="url(#mantine-mj7er9w9j)"
            />
          </g>
          <g>
            <mask id="mantine-i0ku1xyo8" fill="#fff">
              <use xlinkHref="#mantine-5ylcdva1s" />
            </mask>
            <path
              fill="#F9FAFA"
              fillRule="nonzero"
              d="M2.773 3.953C2.768 5.066 3.4 5.66 3.4 5.66c-.72.117-1.2-.79-1.2-1.696 0-.907.653-1.456 1.2-1.794 0 0-.623.67-.627 1.783z"
              mask="url(#mantine-i0ku1xyo8)"
              transform="rotate(-90 2.8 3.92)"
            />
          </g>
        </g>
      </svg>
    </Box>
  );
}
