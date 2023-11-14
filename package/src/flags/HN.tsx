import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function HNFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <mask id="mantine-xa9pzyoz8" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-hhm0vax82" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-6e98i1swx" />
          </mask>
          <path id="mantine-6e98i1swx" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-xa9pzyoz8)">
          <use fill="#f7fcff" xlinkHref="#mantine-6e98i1swx" />
          <g fill="#4564f9">
            <path d="M0 0h32v8H0zm0 16h32v8H0z" mask="url(#mantine-hhm0vax82)" />
            <g mask="url(#mantine-hhm0vax82)">
              <path d="M16.402 12.67l-.866.448.165-.947-.701-.74h.969l.433-.931.433.93h.97l-.702.74.166.948zm-6.084-2.167l-.866.447.165-.947-.701-.74h.969l.433-.931.433.93h.97l-.702.74.166.948zm0 4.2l-.866.447.165-.947-.701-.74h.969l.433-.931.433.93h.97l-.702.74.166.948zm12-4.2l-.866.447.165-.947-.701-.74h.969l.433-.931.433.93h.97l-.702.74.166.948zm0 4.2l-.866.447.165-.947-.701-.74h.969l.433-.931.433.93h.97l-.702.74.166.948z" />
            </g>
          </g>
        </g>
      </svg>
    </Box>
  );
}
