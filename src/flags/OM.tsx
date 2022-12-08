import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function OMFlag({ radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-5x56rkfe2" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-8uiv8y7wi" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-c9rjs0g3k" />
          </mask>
          <path id="mantine-c9rjs0g3k" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-5x56rkfe2)">
          <use fill="#f50101" xlinkHref="#mantine-c9rjs0g3k" />
          <path fill="#f7fcff" d="M0 0h32v8H0z" mask="url(#mantine-8uiv8y7wi)" />
          <path fill="#5eaa22" d="M0 16h32v8H0z" mask="url(#mantine-8uiv8y7wi)" />
          <path fill="#f50101" d="M0 0h12v24H0z" mask="url(#mantine-8uiv8y7wi)" />
          <g fill="#f7fcff" mask="url(#mantine-8uiv8y7wi)">
            <path d="M10.7 1.948a.087.087 0 01.08.093l-.032.378A10.15 10.15 0 019.65 6.077h2.099c.048 0 .087.039.087.087V7.49a.087.087 0 01-.087.087H9.64a.087.087 0 01-.087-.087v-.696h-.266a.595.595 0 01-.2.247 12.615 12.615 0 01-.999 1.328c1.285 1.38 2.635 2.542 4.05 3.484a.087.087 0 01-.068.157c-1.818-.434-3.4-1.224-4.747-2.37-.264.292-.628.442-1.09.45-1.287.937-2.783 1.59-4.489 1.959a.087.087 0 01-.077-.15l.284-.255 1.92-1.735c-.922-.179-1.658-.526-1.658-1.183 0-.786 1.158-1.051 3.475-.797a13.013 13.013 0 01-.572-.779l.035.002a.598.598 0 01-.55-.357l-.265-.001v.696a.087.087 0 01-.087.087H2.14a.087.087 0 01-.087-.087V6.164c0-.048.04-.087.087-.087h2.11c.048 0 .087.039.087.087v.032l.196.001a11.047 11.047 0 01-1.268-3.711l-.052-.397a.087.087 0 01.161-.053c.646 1.146 1.523 2.428 2.63 3.848l.1-.816c.365-.088.547-.28.547-.572v-.917l-.901-.745L6.94 2l1.131.834-.823.745v.917c.303.278.503.469.598.572l.002.922c1.183-1.499 2.106-2.831 2.77-3.998a.087.087 0 01.08-.044zM5.15 6.077c-.27 0-.49.217-.49.484s.22.484.49.484.49-.217.49-.484a.487.487 0 00-.49-.484zm3.587 0c-.27 0-.49.217-.49.484s.22.484.49.484.49-.217.49-.484a.487.487 0 00-.49-.484z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
