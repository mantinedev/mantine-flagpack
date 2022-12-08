import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function MZFlag({ radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-fpksjhk64" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-5iaahxxrx" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-guhxzwdru" />
          </mask>
          <mask id="mantine-eqo1pu3ie" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-0b40h44qz" />
          </mask>
          <path id="mantine-guhxzwdru" d="M0 0h32v24H0z" />
          <path id="mantine-0b40h44qz" d="M0 0v24l18-12z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-fpksjhk64)">
          <use fill="#f7fcff" xlinkHref="#mantine-guhxzwdru" />
          <path fill="#feca00" d="M0 0h32v8H0z" mask="url(#mantine-5iaahxxrx)" />
          <path fill="#093" d="M0 16h32v8H0z" mask="url(#mantine-5iaahxxrx)" />
          <path
            fill="#272727"
            stroke="#fff"
            strokeWidth="2"
            d="M-1 7h34v10H-1z"
            mask="url(#mantine-5iaahxxrx)"
          />
          <use fill="#f50100" xlinkHref="#mantine-0b40h44qz" />
          <path
            fill="#feca00"
            d="M8.069 14.353l-3.78 3.05 1.734-4.076-2.978-2.868H6.56L8.003 7l1.532 3.459h3.51l-3.136 2.868 1.57 4.077z"
            mask="url(#mantine-eqo1pu3ie)"
          />
          <g mask="url(#mantine-eqo1pu3ie)">
            <path
              fill="#f7fcff"
              d="M6.156 11.984l-.64 2.14c1.442-.014 2.25.052 2.423.198.522-.326 1.32-.391 2.395-.197l-.858-2.291c-.725-.328-1.237-.403-1.537-.223-.737-.166-1.33-.042-1.783.373z"
            />
            <path
              fill="#000"
              fillRule="nonzero"
              d="M11.564 15.216a.5.5 0 01-.799.602l-4.18-5.551a.5.5 0 01.799-.602z"
            />
            <path
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.974 9.84l-.4-.48"
            />
            <path
              fill="#000"
              d="M5.605 9.363l-1.209 1.935L5 12.345l1.383-2.055.248-.635-.248-.292zm-1.566 5.746l.583.821 4.495-5.319.187.209 1.036-.975 1.656-1.802-1.656 1.354-.536-.149-.5.787H8.8l-3.67 4.087z"
            />
          </g>
        </g>
      </svg>
    </Box>
  );
}
