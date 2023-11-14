import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function CVFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <defs>
          <path id="mantine-y0cl7tvzw" d="M0 0h32v24H0z" />
          <path
            id="mantine-0ymkixx8l"
            d="M10.52 20.04l.332.74h.718l-.564.574.218.905-.702-.508-.726.508.245-.905-.645-.574h.842zm3-1.6l.332.74h.718l-.564.574.218.905-.702-.508-.726.508.245-.905-.645-.574h.842zm-6 0l.332.74h.718l-.564.574.218.905-.702-.508-.726.508.245-.905-.645-.574h.842zm8.4-2.4l.332.74h.718l-.564.574.218.905-.702-.508-.726.508.245-.905-.645-.574h.842zm-10.8 0l.332.74h.718l-.564.574.218.905-.702-.508-.726.508.245-.905-.645-.574h.842zm10.8-4l.332.74h.718l-.564.574.218.905-.702-.508-.726.508.245-.905-.645-.574h.842zm-10.8 0l.332.74h.718l-.564.574.218.905-.702-.508-.726.508.245-.905-.645-.574h.842zm8.4-2.4l.332.74h.718l-.564.574.218.905-.702-.508-.726.508.245-.905-.645-.574h.842zm-6 0l.332.74h.718l-.564.574.218.905-.702-.508-.726.508.245-.905-.645-.574h.842zm3-1.6l.332.74h.718l-.564.574.218.905-.702-.508-.726.508.245-.905-.645-.574h.842z"
          />
          <mask id="mantine-75pfwam19" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-setaoldzj" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-y0cl7tvzw" />
          </mask>
          <filter id="mantine-9e96zdz9f" width="192.5%" height="184.4%" x="-46.2%" y="-42.2%">
            <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
            <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="2" />
            <feColorMatrix
              in="shadowBlurOuter1"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0"
            />
          </filter>
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-75pfwam19)">
          <use fill="#4141db" xlinkHref="#mantine-y0cl7tvzw" />
          <path
            fill="#f90000"
            stroke="#f7fcff"
            strokeWidth="2"
            d="M-1 13h34v4H-1z"
            mask="url(#mantine-setaoldzj)"
          />
          <g mask="url(#mantine-setaoldzj)">
            <use fill="#000" filter="url(#mantine-9e96zdz9f)" xlinkHref="#mantine-0ymkixx8l" />
            <use fill="#ffde00" xlinkHref="#mantine-0ymkixx8l" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
