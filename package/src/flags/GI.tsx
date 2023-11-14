import cx from 'clsx';
import React from 'react';
import { Box, getRadius, rem } from '@mantine/core';
import type { FlagProps } from '../types';
import classes from '../flagpack.module.css';

export function GIFlag({ radius, className, size, ...others }: FlagProps) {
  return (
    <Box
      className={cx(classes.flag, className)}
      __vars={{ '--flag-radius': getRadius(radius), '--flag-size': rem(size) }}
      {...others}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 24">
        <mask id="mantine-bssd611yc" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd">
          <path fill="#f7fcff" d="M0 0h32v24H0z" mask="url(#mantine-bssd611yc)" />
          <g mask="url(#mantine-bssd611yc)">
            <path fill="#c51918" d="M0 16h32v6a2 2 0 01-2 2H2a2 2 0 01-2-2z" />
            <path
              fill="#db000b"
              d="M17.389 5l-.001 4.615h.945V6.846h3.778v2.769H24v.923h-.944v4.616H24v.923H7v-.923h.944v-4.616H7v-.923h1.888V6.846h3.779l-.001 2.769h.945V5z"
            />
            <path
              fill="#272727"
              d="M10.654 7.77a.82.82 0 01.82.82V9.8h-1.64V8.59a.82.82 0 01.82-.82zm9.444 0a.82.82 0 01.82.82V9.8h-1.64V8.59a.82.82 0 01.82-.82zm-9.444 4.615c.6 0 1.086.486 1.086 1.086v1.867H9.567v-1.867c0-.6.487-1.086 1.087-1.086zm9.444 0c.6 0 1.086.486 1.086 1.086v1.867h-2.172v-1.867c0-.6.486-1.086 1.086-1.086zm-4.812-.137c.769 0 1.392.623 1.392 1.392v2.67h-2.783v-2.67c0-.77.623-1.392 1.391-1.392zm.09-5.402a.82.82 0 01.82.82V9.8h-1.64V7.666a.82.82 0 01.82-.82z"
            />
            <path
              fill="#de1a23"
              d="M7 8.692h1v1H7zM9.5 6v1h-1V6zm4 0v1h-1V6zm-1.75 0v1h-1.5V6zm7.75 0v1h-1V6zm4 0v1h-1V6zm-1.75 0v1h-1.5V6zM14.3 4v1h-1V4zm1.5 0v1h-1V4zm1.5 0v1h-1V4zm1.5 0v1h-1V4zM24 9h1v1h-1z"
            />
            <g fill="#e8aa00">
              <path
                fillRule="nonzero"
                d="M15.95 16.133l-.887.595.982.467.843-.551zm2.885.433l-2.713 1.774-3.076-1.464 2.894-1.664z"
              />
              <path d="M14.158 20.893h1.474V22v-.374h-.916V22h-.558z" />
              <path d="M15.498 18h1.25v4h-1.25z" />
            </g>
          </g>
        </g>
      </svg>
    </Box>
  );
}
