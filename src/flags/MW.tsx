import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function MWFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
          <mask id="mantine-fyj02vtwa" fill="#fff">
            <path fillRule="evenodd" d="M0 0h32v24H0z" />
          </mask>
          <mask id="mantine-zjzcasls4" fill="#fff">
            <use fillRule="evenodd" xlinkHref="#mantine-4ft0tfll8" />
          </mask>
          <path id="mantine-4ft0tfll8" d="M0 0h32v24H0z" />
        </defs>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-fyj02vtwa)">
          <use fill="#e11c1b" xlinkHref="#mantine-4ft0tfll8" />
          <path fill="#272727" d="M0 0h32v10H0z" mask="url(#mantine-zjzcasls4)" />
          <path fill="#5eaa22" d="M0 16h32v8H0z" mask="url(#mantine-zjzcasls4)" />
          <g fill="#e11c1b" mask="url(#mantine-zjzcasls4)">
            <path d="M16.14.6l.448 2.744c.249.01.495.03.738.056l.986-2.626-.108 2.76c.245.047.487.103.724.167l1.486-2.409-.653 2.67c.237.087.469.18.696.282l1.921-2.107-1.16 2.49c.223.124.439.256.648.395l2.276-1.74-1.612 2.226c.2.162.393.33.577.507l2.542-1.327-1.995 1.9c.17.196.33.399.479.608l2.717-.883-2.304 1.524c.055.095.107.192.158.289H22.74c-1.354-1.877-3.829-3.133-6.657-3.133S10.779 6.25 9.425 8.126H7.558c.052-.1.107-.2.164-.298l-2.29-1.515 2.7.878a8.61 8.61 0 01.486-.614L6.633 4.688l2.529 1.32c.185-.177.38-.347.582-.51L8.14 3.281l2.266 1.734a9.32 9.32 0 01.654-.397L9.904 2.137l1.914 2.102c.228-.102.462-.196.7-.282l-.65-2.665 1.482 2.404a10.7 10.7 0 01.728-.167L13.97.774l.985 2.624c.244-.026.49-.045.739-.054zm-.018 5.351c2.264 0 4.278.852 5.561 2.175H10.561c1.283-1.323 3.297-2.175 5.561-2.175z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
