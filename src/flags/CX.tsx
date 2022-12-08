import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function CXFlag({ radius, sx, ...others }: FlagProps) {
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
        <mask id="mantine-x5jj0t63y" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-x5jj0t63y)">
          <path fill="#5eaa22" d="M0 0h32v24H0z" />
          <path fill="#4141db" d="M0 0l32 24H0z" />
          <path
            fill="#fff"
            d="M6 9l-1 .732.134-1.232L4 8l1.134-.5L5 6.268 6 7l1-.732L6.866 7.5 8 8l-1.134.5L7 9.732zm-2 6l-1 .732.134-1.232L2 14l1.134-.5L3 12.268 4 13l1-.732-.134 1.232L6 14l-1.134.5L5 15.732zm4 6l-1 .732.134-1.232L6 20l1.134-.5L7 18.268 8 19l1-.732-.134 1.232L10 20l-1.134.5L9 21.732zm1-9.5l-.5.366.067-.616L8 11l.567-.25-.067-.616.5.366.5-.366-.067.616L10 11l-.567.25.067.616z"
          />
          <path
            fill="#feca00"
            d="M21.561 12.224c-.374-.39 2.99-1.306 3.339-2.488.462-1.029.153-1.862-1.593-2.594s-3.51-2.148-1.481-2.148 2.029.29 2.574 1.143c.545.854 1.723 1.036 1.748 0 0-1.766.167-2.003-1.258-3.538s3.574.63 3.16 3.262c-.412 2.632-.91 1.782-.594 2.224.316.442 2.216-.93 1.979.897-.665 1.051-1.984 2.614-7.874 3.242z"
          />
          <g transform="translate(10 6)">
            <circle cx="6" cy="6" r="5" fill="#feca00" />
            <path
              fill="#548650"
              d="M2.953 4.162c.567-.126 1.343 1.392 2.742.823 1.4-.57 1.692-1.657 2.357-1.26.666.399.753 1.357.31 1.839-.443.481-1.195.595-1.195 1.204s-.147 2.78-.435 2.15c-.861-.699-.336-1.812-1.397-2.15s-1.706-.327-2.489-.184c-.783.142.526-.392.804-.9.565-.543-.956-1.341-.697-1.522z"
            />
          </g>
        </g>
      </svg>
    </Box>
  );
}
