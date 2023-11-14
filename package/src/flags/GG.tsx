import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function GGFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-qwibol55j" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-kiwlwmxod" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-1pksgsccy" />
          </mask>
          <path id="mantine-1pksgsccy" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-qwibol55j)">
          <use fill="#f7fcff" xlinkHref="#mantine-1pksgsccy" />
          <g mask="url(#mantine-kiwlwmxod)">
            <path fill="#e31d1c" d="M12 0h8v8h12v8H20v8h-8v-8H0V8h12z" />
            <path
              fill="#feca00"
              d="M18.966 3.046l-.957 1.76L18 4.804V10h7.106v-.057l1.76-.998v5.96L25.201 14H18v5.046h.009l.957 1.76h-5.96L14 19.048V14H6.769l-1.663.906v-5.96l1.76.997-.001.057H14V4.801l-.994-1.755z"
            />
          </g>
        </g>
      </svg>
    </Box>
  );
}
