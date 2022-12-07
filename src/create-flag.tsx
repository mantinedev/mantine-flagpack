import React, { forwardRef } from 'react';
import { DefaultProps, Box, MantineNumberSize, packSx } from '@mantine/core';

export interface FlagProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Flag width */
  size?: React.CSSProperties['width'];

  /** Key of theme.radius or number to set border-radius in px */
  radius?: MantineNumberSize;
}

export function createFlag(name: string, jsx: React.ReactElement) {
  const Flag = forwardRef<HTMLDivElement, FlagProps>(
    ({ size = 40, radius, sx, ...others }, ref) => (
      <Box
        sx={[
          (theme) => ({
            display: 'inline-block',
            overflow: 'hidden',
            background: 'red',
            lineHeight: 1,
            width: size,
            borderRadius: theme.fn.radius(radius),

            '& svg': {
              display: 'block',
            },
          }),
          ...packSx(sx),
        ]}
        ref={ref}
        {...others}
      >
        {jsx}
      </Box>
    )
  );

  Flag.displayName = `${name}Flag`;

  return Flag;
}
