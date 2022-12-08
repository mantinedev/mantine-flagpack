import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function MYFlag({ radius, sx, ...others }: FlagProps) {
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
        <mask id="mantine-5qd19uqce" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-5qd19uqce)">
          <path fill="#f7fcff" d="M0 0h32v24H0z" />
          <path
            fill="#e31d1c"
            d="M.027 5h32v2.9h-32zm0 5.2h32v2.9h-32zm.085 5h32v2.5h-32zm0 5h32v2.7h-32zM0 0h32v2.5H0z"
          />
          <path fill="#3d58db" d="M0 0h16v12H0z" />
          <path
            fill="#feca00"
            d="M3.594 6.202c0 1.376.648 2.678 1.967 2.678 1.978 0 2.363-.422 3.286-1.004.219.49-.518 2.588-3.313 2.588C3.297 10.42 1.49 8.623 1.49 6.202c0-2.778 2.044-4.279 3.987-4.262 1.716 0 3.536.974 3.48 2.216-.808-.79-1.686-.79-3.147-.79-1.462 0-2.216 1.46-2.216 2.836z"
          />
          <path
            fill="#feca00"
            d="M11 7.3l-.927 1.353.045-1.64-1.545.55 1-1.3L8 5.8l1.573-.464-1-1.3 1.545.55-.045-1.64L11 4.3l.927-1.353-.045 1.64 1.545-.55-1 1.3L14 5.8l-1.573.464 1 1.3-1.545-.55.045 1.64z"
          />
        </g>
      </svg>
    </Box>
  );
}
