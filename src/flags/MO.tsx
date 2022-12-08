import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function MOFlag({ radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-go834ivuu" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-vapc3swn6" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-g45nu96iu" />
          </mask>
          <mask id="mantine-gu5stfo0i" fill="#fff">
            <circle cx="8" cy="8" r="8" fillRule="evenodd" />
          </mask>
          <path id="mantine-g45nu96iu" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-go834ivuu)">
          <use fill="#1c9975" xlinkHref="#mantine-g45nu96iu" />
          <g fill="#feca00" mask="url(#mantine-vapc3swn6)">
            <path d="M16.022 6.854l-1.634.986.373-1.925-1.361-1.44 1.842-.078.78-1.797.779 1.797h1.839l-1.357 1.518.408 1.925zm-4.639.73l-1.01.61.23-1.19-.841-.89 1.139-.048.482-1.112.482 1.112h1.137l-.84.938.253 1.19zm9.198 0l-1.01.61.23-1.19-.841-.89 1.14-.048.481-1.112.482 1.112H22.2l-.84.938.253 1.19zM8.766 9.61l-.81.49.185-.955-.675-.715.914-.038.386-.892.387.892h.913l-.674.753.203.955zm14.794 0l-.81.49.185-.955-.675-.715.914-.038.387-.892.387.892h.912l-.673.753.202.955z" />
          </g>
          <g fill="#f7fcff" mask="url(#mantine-vapc3swn6)">
            <path
              d="M4.68 15.064h6.64v1.072H4.68zM1.957 13.46h12.766v.983H1.957z"
              mask="url(#mantine-gu5stfo0i)"
              transform="translate(8 6)"
            />
            <path
              fillRule="nonzero"
              d="M4.62 13.02H.716v-1h3.897c1.38-.019 2.39-.413 3.063-1.172l.335-.378.375.34c.899.815 1.797 1.21 2.705 1.21h4.305v1H11.09c-1.043 0-2.05-.392-3.014-1.16-.854.756-2.012 1.14-3.457 1.16z"
              mask="url(#mantine-gu5stfo0i)"
              transform="translate(8 6)"
            />
            <path d="M16.035 7.608c1.187 1.041 1.78 2.376 1.78 4.004 0 .33-.024.649-.073.956.377-1.097.357-2.276-.061-3.548l.646-.213c.531 1.613.481 3.119-.15 4.502 1.073-.838 2.356-1.34 3.839-1.504l.074.677c-.33.037-.65.091-.957.164.903.003 1.794.241 2.67.715-.648 1.44-1.751 2.397-3.308 2.873a5.705 5.705 0 01-1.652.262c.349.101.703.152 1.065.152 1.13 0 2.181-.462 3.165-1.4l.47.492c-1.105 1.054-2.321 1.589-3.635 1.589-1.049 0-2.369-.605-3.436-1.419a5.572 5.572 0 01-.356-.199 7.14 7.14 0 01.033-.062.513.513 0 01-.042-.033 6.176 6.176 0 01-.355.249l.134-.125c-1.11 1.055-2.329 1.589-3.643 1.589-1.314 0-2.53-.535-3.636-1.59l.47-.492c.985.939 2.036 1.401 3.166 1.401a5.916 5.916 0 01-.332-.047c-1.58-.27-2.78-1.32-3.595-3.152a7.063 7.063 0 014.915-.036 7.52 7.52 0 00-2.851-.93l.075-.678a8.212 8.212 0 013.308 1.13c-.481-1.28-.48-2.66.004-4.128l.647.213c-.454 1.378-.44 2.646.042 3.82a5.7 5.7 0 01-.13-1.228c0-1.544.57-2.879 1.709-4.004z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
