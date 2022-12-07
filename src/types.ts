import type { DefaultProps, MantineNumberSize } from '@mantine/core';

export interface FlagProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Flag width */
  size?: React.CSSProperties['width'];

  /** Key of theme.radius or number to set border-radius in px */
  radius?: MantineNumberSize;
}
