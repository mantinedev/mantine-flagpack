import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function CDFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-aozide5ca" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-f1fic4hbd" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-nus2kwy6w" />
          </mask>
          <path id="mantine-nus2kwy6w" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-aozide5ca)">
          <use fill="#3195f9" xlinkHref="#mantine-nus2kwy6w" />
          <path
            fill="#e31d1c"
            fillRule="nonzero"
            stroke="#feca00"
            strokeWidth="2.5"
            d="M33.604-4.519L37.213.887-1.127 26.48l-3.61-5.406z"
            mask="url(#mantine-f1fic4hbd)"
          />
          <g fill="#feca00" mask="url(#mantine-f1fic4hbd)">
            <path d="M4.93 8.606l-3.485 2.418 1.114-4.141L0 4.238l3.465-.143L4.93 0l1.466 4.095h3.458L7.302 6.883l1.279 3.897z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
