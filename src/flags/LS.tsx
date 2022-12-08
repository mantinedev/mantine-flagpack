import React from 'react';
import { Box, packSx } from '@mantine/core';
import type { FlagProps } from '../types';

export function LSFlag({ radius, sx, ...others }: FlagProps) {
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
        <mask id="mantine-pd1kb1k59" fill="#fff">
          <path fillRule="evenodd" d="M0 0h32v24H0z" />
        </mask>
        <g fill="none" fillRule="evenodd" mask="url(#mantine-pd1kb1k59)">
          <path fill="#55ba07" d="M0 16h32v8H0z" />
          <path fill="#f7fcff" d="M0 8h32v8H0z" />
          <path fill="#3d58db" d="M0 0h32v8H0z" />
          <path
            fill="#1d1d1d"
            d="M15.875 7.333c.265 0 .492.165.582.398.818.182 1.412.74 1.412 1.646 0 .659-.314 1.46-.8 2.009l2.434 2.387.6-.198.897 1.36c-1.51.71-3.2 1.065-5.067 1.065s-3.511-.355-4.933-1.065l.763-1.162.616.202 2.258-2.549c-.507-.55-.836-1.374-.836-2.049 0-.938.635-1.502 1.5-1.663a.624.624 0 01.574-.38zm.412 7.72l-.761.25.126.194h1.039zm-1.552.003l-.615.165.1.188.869.08zM17.698 15l-.67.22.13.22.887-.098zm-4.274-.131l-.613.133.093.157.813.16zm5.537-.114l-.566.34.108.165.746-.165zm-2.898-.047h-1.029l.334.39.792-.21zm-2.299-.134l.253.455.555-.17-.154-.203zm3.67.062l-.82.086.244.298.659-.228zm2.494-.155l-.293.29v.162l.503-.162zm-1.262.005l-.678.092.249.305.594-.305zm-6.153-.205l.223.52.553-.15-.11-.21zm7.15-.11l-.598.14.36.343.349-.343zm-5.212-4.789c0 .73.359 1.415.798 1.769V8.24c-.522.141-.798.502-.798 1.141zm2.05-1.128l-.001 2.878c.428-.358.772-1.031.772-1.748 0-.62-.272-.98-.772-1.13z"
          />
        </g>
      </svg>
    </Box>
  );
}
