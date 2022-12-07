import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function TFFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-ti7zx87yv" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-1pym83oga" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-lhcyowhbl" />
          </mask>
          <mask id="mantine-q9lc2vywn" fill="#fff">
            <path fillRule="evenodd" d="M0 0h12v10H0z" />
          </mask>
          <path id="mantine-lhcyowhbl" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-ti7zx87yv)">
          <use fill="#2e42a5" xlinkHref="#mantine-lhcyowhbl" />
          <g fill="#f7fcff" mask="url(#mantine-1pym83oga)">
            <path d="M22.8 17.49l.332 1.013 1.013.022-.807.648.293 1.027-.831-.613-.831.613.293-1.027-.807-.648 1.013-.022zm3.11-2.396l.333 1.013 1.012.022-.807.648.293 1.026-.83-.612-.832.612.294-1.026-.807-.648 1.012-.022zm-6.22 0l.332 1.013 1.012.022-.807.648.294 1.026-.831-.612-.831.612.293-1.026-.807-.648 1.012-.022zM26.837 6.2l-.784 1.504h-2.442v.808h1.872l-.762 1.4h-1.11v2.797l1.827-2.879 2.365 4.095h-.966l-.337-.449h-2.14l-1.506 2.781v.154l-.042-.078-.04.078-.001-.154-1.504-2.78h-2.14l-.338.448h-.966l2.364-4.095 1.828 2.88V7.703h-2.442L18.789 6.2zm-1.351 5.31l-.526.807h.995zm-5.346 0l-.469.807h.995l-.526-.807zm-2.995-3.607l.332 1.014 1.012.022-.807.648.294 1.026-.831-.612-.831.612.293-1.026-.807-.648 1.012-.022zm11.31 0l.333 1.014 1.012.022-.807.648.293 1.026-.83-.612-.832.612.294-1.026-.807-.648 1.012-.022z" />
          </g>
          <g mask="url(#mantine-1pym83oga)">
            <path stroke="#fff" d="M-.5-.5h13v11h-13z" />
            <path fill="#f50100" d="M8 0h4v10H8z" mask="url(#mantine-q9lc2vywn)" />
            <path fill="#2e42a5" d="M0 0h4v10H0z" mask="url(#mantine-q9lc2vywn)" />
            <path fill="#f7fcff" d="M4 0h4v10H4z" mask="url(#mantine-q9lc2vywn)" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
