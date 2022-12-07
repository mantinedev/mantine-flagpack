import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function KNFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-7qt01ro7o" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-cb57ue653" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-2706hmapm" />
          </mask>
          <path
            id="mantine-2706hmapm"
            d="M5 18c.997 0 5-3.582 5-8S5.997 2 5 2s-5 3.582-5 8 4.003 8 5 8z"
          />
        </defs>
        <g fill="none" fillRule="evenodd">
          <g mask="url(#mantine-7qt01ro7o)">
            <path fill="#272727" d="M0 0h32v8H0z" />
            <path fill="#4e8b1d" d="M0 16h32v8H0z" />
            <path
              fill="#e31d1c"
              fillRule="nonzero"
              stroke="#f7fcff"
              strokeWidth="2"
              d="M-1 7h34v10H-1z"
            />
          </g>
          <g transform="translate(11 2)">
            <path
              fill="#fff"
              fillRule="nonzero"
              d="M8.02 1.929c.19-.39.702-.816 1.534-1.278a.1.1 0 01.139.131L1.062 18.48l-.45-.22 7.609-15.6c-.345-.056-.412-.3-.201-.731z"
            />
            <path
              fill="#fff"
              fillRule="nonzero"
              d="M1.971 1.929c.21.431.144.675-.2.731l7.607 15.6-.449.219L.298.782A.1.1 0 01.436.651c.833.462 1.345.888 1.535 1.278z"
            />
            <use fill="#e31d1c" xlinkHref="#mantine-2706hmapm" />
            <g fillRule="nonzero">
              <circle cx="-4.5" cy="10" r="7" fill="#272727" mask="url(#mantine-cb57ue653)" />
              <circle cx="14.5" cy="10" r="7" fill="#272727" mask="url(#mantine-cb57ue653)" />
              <path
                fill="#f7fcff"
                d="M6 14.5c0 1.693-.343 3.105-.8 3.43v-6.86c.457.325.8 1.737.8 3.43zm-1.3-3.34v6.68c-.406-.446-.7-1.772-.7-3.34s.294-2.894.7-3.34zM6 5.5c0 1.693-.343 3.105-.8 3.43V2.07c.457.325.8 1.737.8 3.43zM4.7 2.16v6.68C4.294 8.394 4 7.068 4 5.5s.294-2.894.7-3.34z"
                mask="url(#mantine-cb57ue653)"
              />
              <circle
                cx="5"
                cy="10"
                r="1"
                fill="#f7fcff"
                mask="url(#mantine-cb57ue653)"
                transform="matrix(1 0 0 -1 0 20)"
              />
            </g>
          </g>
        </g>
      </svg>
    </Box>
  );
}
