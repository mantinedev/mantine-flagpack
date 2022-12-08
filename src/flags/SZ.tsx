import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function SZFlag({ radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-7s5wdv4hq" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-vnp308aod" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-p6g6wojty" />
          </mask>
          <path
            id="mantine-p6g6wojty"
            d="M.039 6.053C1.933 2.066 4.235.073 6.944.073s5.043 1.993 7.001 5.98c-2.39 3.934-4.708 5.901-6.953 5.901S2.43 9.987.04 6.053z"
          />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-7s5wdv4hq)">
          <path fill="#3d58db" d="M0 0h32v24H0z" />
          <path fill="#c51918" stroke="#ffd018" strokeWidth="2" d="M33 5v14H-1V5z" />
          <path
            fill="#ffd018"
            fillRule="nonzero"
            d="M7.15 9.331c-.12 0-.218-.271-.218-.606 0-.334.097-.605.217-.605H24.56c.12 0 .217.27.217.605 0 .335-.097.606-.217.606z"
          />
          <path fill="#f7fcff" d="M24.095 8.602l1.011-1.29 1.79 1.29-1.79 1.324z" />
          <path
            fill="#ffd018"
            fillRule="nonzero"
            d="M7.15 13.331c-.12 0-.218-.271-.218-.606 0-.334.097-.605.217-.605H24.56c.12 0 .217.27.217.605 0 .335-.097.606-.217.606z"
          />
          <path fill="#f7fcff" d="M24.095 12.602l1.011-1.29 1.79 1.29-1.79 1.324z" />
          <path
            fill="#ffd018"
            fillRule="nonzero"
            d="M4.346 15.822c-.161 0-.292-.308-.292-.688s.13-.688.292-.688H27.69c.16 0 .29.308.29.688s-.13.688-.29.688z"
          />
          <g transform="translate(8.778 6)">
            <use fill="#f7fcff" xlinkHref="#mantine-p6g6wojty" />
            <path
              fill="#272727"
              d="M7.146-.32c-.618.75-.824 1.484-.618 2.2.309 1.074 1.03.96 1.03 1.907s-.334 1.91 0 1.91c.332 0 .447.652.143 1.095-.304.442-.573.456-.555 1.176.018.72 1.592 1.427.83 1.427s-1.768.74-1.448.74c.32 0 1.992.577 1.992 1.334v1.362H-.207V-.319z"
              mask="url(#mantine-vnp308aod)"
            />
            <path
              fill="#f7fcff"
              d="M3.04 6.462V8.23h-.434V6.46zm1.282 0V8.23h-.434V6.46zm-.64 0V8.23h-.435V6.46zm1.28 0V8.23H4.53V6.46zm.642 0V8.23h-.435V6.46zm.64 0V8.23H5.81V6.46zM3.041 3.923v1.77h-.435v-1.77zm1.281 0v1.77h-.434v-1.77zm-.64 0v1.77h-.435v-1.77zm1.28 0v1.77H4.53v-1.77zm.642 0v1.77h-.435v-1.77zm.64 0v1.77H5.81v-1.77z"
              mask="url(#mantine-vnp308aod)"
            />
            <path
              fill="#272727"
              d="M8.2 6.462V8.23h-.435V6.46zm1.28 0V8.23h-.434V6.46zm-.64 0V8.23h-.435V6.46zm1.281 0V8.23h-.434V6.46zm.641 0V8.23h-.434V6.46zm.64 0V8.23h-.434V6.46zM8.2 3.923v1.77h-.434v-1.77zm1.282 0v1.77h-.435v-1.77zm-.641 0v1.77h-.435v-1.77zm1.281 0v1.77h-.434v-1.77zm.641 0v1.77h-.434v-1.77zm.64 0v1.77h-.434v-1.77z"
              mask="url(#mantine-vnp308aod)"
            />
            <path
              fill="#3d58db"
              d="M4.821 1.004c-.632.08-1.183 1.603-1.183 1.994 0 .262.093.262.279 0 .17.65.255 1.058.255 1.225s.109.06.326-.32c.421.414.632.811.632 1.19s.118.184.355-.588h.168v-.603l.264.32v-.56c.12.232.18.232.18 0V2.647h.317C5.774 1.498 5.243.95 4.821 1.004z"
              mask="url(#mantine-vnp308aod)"
              transform="rotate(-10 5.026 3.14)"
            />
          </g>
          <path
            fill="#3d58db"
            d="M26.088 13.696c-.632.08-1.183 1.603-1.183 1.995 0 .26.093.26.279 0 .17.65.255 1.057.255 1.224 0 .167.109.06.326-.32.421.414.632.812.632 1.191s.118.183.355-.589h.168v-.602l.264.32v-.56c.12.23.18.23.18 0v-1.016h.317c-.64-1.149-1.171-1.696-1.593-1.643zm-20.495-.231c.632.08 1.183 1.603 1.183 1.995 0 .261-.093.261-.278 0-.171.65-.256 1.058-.256 1.224 0 .167-.109.06-.326-.32-.421.415-.632.812-.632 1.191s-.118.184-.355-.588h-.168v-.603l-.264.32v-.56c-.12.231-.18.231-.18 0v-1.015H4c.64-1.15 1.172-1.697 1.593-1.644z"
          />
        </g>
      </svg>
    </Box>
  );
}
