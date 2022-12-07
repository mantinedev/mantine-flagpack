import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function MNFlag({ size = 40, radius, sx, ...others }: FlagProps) {
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
        <mask id="mantine-h5i99ix1t" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-h5i99ix1t)">
          <path fill="#4c67e8" d="M10 0h12v24H10z" />
          <path fill="#c51918" d="M22 0h10v24H22zM0 0h12v24H0z" />
          <path
            fill="#f8d000"
            d="M7.9 18.932L5.954 20 4.23 18.932zm-4.13-7.528v8.572H2v-8.572zm6.23 0v8.572H8.23v-8.572zM7.846 17.89v.67H4.231v-.67zm-1.77-3.95c1.02 0 1.847.8 1.847 1.788s-.826 1.789-1.846 1.789-1.846-.8-1.846-1.789.826-1.789 1.846-1.789zm1.77-1.044v.67H4.231v-.67zm.053-1.416l-1.944 1.068-1.724-1.068zm.144-2.263c-.198 1.245-.91 1.868-2.137 1.868-1.227 0-1.861-.623-1.903-1.868.475.763 1.149 1.144 2.02 1.144.872 0 1.545-.381 2.02-1.144zM6.038 7.23c.829 0 1.5.651 1.5 1.454s-.671 1.453-1.5 1.453c-.828 0-1.5-.65-1.5-1.453s.672-1.454 1.5-1.454zM6.03 4.32l.02.042c.047.08.13.156.25.279.238.244-.04 1.257.166 1.257.137 0 .2-.306.19-.919l.346.919c.017.658-.312.987-.987.987-.676 0-.97-.329-.88-.987l.48-1.038v1.038c0 .133.182-.134.182-.455 0-.214.073-.482.218-.802l.013-.25z"
          />
          <g fill="#c51918">
            <path
              fillRule="nonzero"
              d="M6.359 13.972l.082-.367c.413.451.6.704.511 1.118-.098.461-.617.975-1.218 1.399-.365.256-.588.949-.407 1.169l-.173.314c-.403-.49-.08-1.417.476-1.808.51-.36.867-.737.93-1.033.04-.194.116-.445-.201-.792z"
            />
            <circle cx="6.5" cy="16.5" r="1" />
            <path d="M5.376 15.65a.5.5 0 100-1 .5.5 0 000 1z" />
          </g>
        </g>
      </svg>
    </Box>
  );
}
