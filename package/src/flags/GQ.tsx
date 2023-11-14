import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function GQFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-5x6l94q6y" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-o72badpdm" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-mxer9mcc8" />
          </mask>
          <path id="mantine-mxer9mcc8" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd">
          <g mask="url(#mantine-5x6l94q6y)">
            <use fill="#f7fcff" xlinkHref="#mantine-mxer9mcc8" />
            <path fill="#009d00" d="M0 0h32v8H0z" mask="url(#mantine-o72badpdm)" />
            <path fill="#fff" d="M0 8h32v8H0z" mask="url(#mantine-o72badpdm)" />
            <path fill="#f80000" d="M0 16h32v8H0z" mask="url(#mantine-o72badpdm)" />
            <path fill="#0075d5" d="M0 0v24l8-11.848z" />
          </g>
          <path
            stroke="#373737"
            strokeWidth=".1"
            d="M18.95 10.05V13c0 .538-.218 1.026-.571 1.379s-.84.571-1.379.571-1.026-.218-1.379-.571-.571-.84-.571-1.379v-2.95z"
            mask="url(#mantine-5x6l94q6y)"
          />
          <path
            fill="#6f3e1d"
            d="M16.726 11.96c-.134 1.577-.268 2.413-.403 2.508-.201.144.965.215 1.077.108.111-.108-.509-2.035-.296-2.616.143-.388.328-.597.557-.628-.288-.062-.474-.034-.557.082s-.246.089-.492-.082z"
            mask="url(#mantine-5x6l94q6y)"
          />
          <path
            fill="#009d29"
            d="M16.682 11.826h-.155c-.07.274-.185.342-.346.206a.643.643 0 00-.581-.133c.02-.164.154-.279.4-.344.247-.065.423-.362.527-.891.35-.13.63-.062.842.204s.468.343.768.23c.218.124.273.276.164.457-.164.271-.444.47-.688.271-.162-.132-.473-.132-.93 0z"
            mask="url(#mantine-5x6l94q6y)"
          />
        </g>
      </svg>
    </Box>
  );
}
