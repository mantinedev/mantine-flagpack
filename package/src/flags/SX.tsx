import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function SXFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-cdkdxteky" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-ub0ixh3to" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-6z9qh5zz2" />
          </mask>
          <mask id="mantine-vof9od8ga" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-dho2o9ylq" />
          </mask>
          <path id="mantine-6z9qh5zz2" d="M0 0h32v24H0z" />
          <path id="mantine-dho2o9ylq" d="M0-2v28l20-14z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-cdkdxteky)">
          <use fill="#e31d1c" xlinkHref="#mantine-6z9qh5zz2" />
          <path fill="#2e42a5" d="M0 12h32v12H0z" mask="url(#mantine-ub0ixh3to)" />
          <use fill="#f7fcff" xlinkHref="#mantine-dho2o9ylq" />
          <g mask="url(#mantine-vof9od8ga)">
            <g transform="translate(4.021 6)">
              <ellipse cx="4.105" cy="2.094" fill="#fbcd17" rx="2.601" ry="2.094" />
              <path
                fill="#da610a"
                fillRule="nonzero"
                d="M3.97.728c0-.206.15-.343.362-.343h.886l.003.5h-.024l-.15.007a3.78 3.78 0 00-.432.044l.042.033C5.424.855 5.786.855 6.176.926l.088.016c.095.017.16.024.243.024h.115a.385.385 0 01.12.028l.126.153-.122.29-.042.018c-.062.013-.062.013-.074.013-.106.008-.215.016-.351.029-.38.034-.807.085-1.287.155l-.052.065c-.059.043-.096.052-.236.075a9.916 9.916 0 01-.853.092c-.478.02-.336.027-.366-.225-.023-.186-.103-.211.063-.256a1.737 1.737 0 01-.178-.158c-.1-.1-.118-.11-.108-.112a.984.984 0 00-.095.035c-.19.069-.38.086-.654.034-.398-.077-.855.001-1.372.24L.931.99C1.537.71 2.097.613 2.607.71c.183.035.283.026.39-.013A.888.888 0 013.18.64c.19-.032.343.049.545.254.24.243.344.27.356.313a.235.235 0 00-.007-.056.368.368 0 01-.124-.285.398.398 0 01.02-.115V.728zm-.004 1.095a3.95 3.95 0 00-.048.01l.095-.02z"
              />
            </g>
            <path
              fill="#56c6f5"
              stroke="#e31d1c"
              d="M7.925 8.58c1.063-.147 1.74-.166 2.188-.016.385.13.86.118 1.427-.07a9.328 9.328 0 00-.245 2.038c0 .734.143 1.324.284 1.89.111.45.223.884.223 1.382 0 .35-.098.611-.314.778-.284.219-.71.288-1.216.288a4.24 4.24 0 00-2.255.642 4.371 4.371 0 00-2.277-.642c-.506 0-.932-.07-1.216-.288-.216-.167-.315-.428-.315-.778 0-.498.112-.932.224-1.382.14-.566.284-1.156.284-1.89 0-.63-.081-1.31-.245-2.038.567.188 1.042.2 1.427.07.447-.15 1.125-.131 2.026.017z"
            />
            <path
              fill="#f7fcff"
              stroke="#3b3b3b"
              strokeWidth=".25"
              d="M8.013 9.938l.772.686h-.286v.36l1.257.783v1.828h.286v.343h-4v-.342h.228v-1.829l1.2-.749v-.395l-.228.001z"
            />
            <path
              fill="#fbcd17"
              fillRule="nonzero"
              d="M7.952 17.02c1.06 0 1.791-.115 2.168-.313a.505.505 0 01.455-.255c.827.03 1.467-.318 1.97-1.083.543-.827.653-2.002.298-3.543l.9-.207c.406 1.766.273 3.192-.427 4.257-.628.954-1.483 1.464-2.527 1.499-.534.395-1.468.568-2.837.568-1.324 0-2.306-.257-2.936-.803-1.43-.338-2.338-.908-2.695-1.753-.381-.901-.381-2.152-.026-3.764l.901.199c-.317 1.442-.317 2.514-.025 3.205.204.483.796.877 1.8 1.15l.933.2-.044.235c.455.266 1.15.408 2.092.408z"
            />
            <path
              fill="#73be4a"
              fillRule="nonzero"
              d="M5.044 9.827a.5.5 0 01.373-.928l.512.206c.075.03.138.076.188.133a.487.487 0 01.217.01l.516-.158a.5.5 0 01.584.72c.209.351-.11.871-.582.729l-.023-.007-.057.24a.48.48 0 01-.468.386c-.322.256-.904.004-.801-.5l.011-.057a.502.502 0 01-.478-.718l.024-.05zm1.907.188l-.63.364.508.153z"
            />
            <path fill="#fbcd17" d="M6.205 10.476a.5.5 0 100-1 .5.5 0 000 1z" />
            <path
              fill="#f7fcff"
              d="M10.025 8.97c.136 0 .209.366.217 1.099.19.049.368.17.536.361H9.306s.222-.254.517-.35v.148c-.01-.84.056-1.259.202-1.259z"
            />
            <path
              fill="#73be4a"
              fillRule="nonzero"
              d="M2.55 12.569l.247.042c-.2 1.146-.2 1.968-.007 2.458.224.57 1.546 1.336 1.92 1.336v.25c-.47 0-1.888-.82-2.153-1.494-.213-.543-.213-1.405-.007-2.592zm10.831-.06l-.246.041c.18 1.076.14 1.914-.117 2.516-.309.725-1.502 1.649-1.815 1.649v.25c.421 0 1.7-.99 2.045-1.801.278-.652.32-1.537.133-2.655zm-6.988 4.915l.047-.246c.797.153 1.34.23 1.626.23.284 0 .8-.077 1.538-.23l.05.246c-.754.155-1.282.233-1.588.233-.306 0-.861-.077-1.673-.233z"
            />
          </g>
        </g>
      </svg>
    </Box>
  );
}
