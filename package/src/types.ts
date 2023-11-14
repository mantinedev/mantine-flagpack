import type { BoxProps, ElementProps, MantineRadius } from '@mantine/core';

export interface FlagProps extends BoxProps, ElementProps<'div'> {
  /** Controls `width` of the flag */
  size?: React.CSSProperties['width'];

  /** Key of `theme.radius` or any valid CSS value to set `border-radius`, `theme.defaultRadius` by default */
  radius?: MantineRadius;
}
