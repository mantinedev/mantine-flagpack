import React from 'react';
import {
  Box,
  BoxProps,
  StylesApiProps,
  factory,
  ElementProps,
  useProps,
  useStyles,
  createVarsResolver,
  Factory,
  MantineColor,
  getThemeColor,
} from '@mantine/core';
import classes from './TestComponent.module.css';

export type TestComponentStylesNames = 'root';
export type TestComponentCssVariables = {
  root: '--test-component-color';
};

export interface TestComponentProps
  extends BoxProps,
    StylesApiProps<TestComponentFactory>,
    ElementProps<'div'> {
  /** Label displayed inside the component, `'Test component'` by default */
  label?: React.ReactNode;

  /** Controls `background-color` of the root element, key of `theme.colors` or any valid CSS color, `theme.primaryColor` by default */
  color?: MantineColor;
}

export type TestComponentFactory = Factory<{
  props: TestComponentProps;
  ref: HTMLDivElement;
  stylesNames: TestComponentStylesNames;
  vars: TestComponentCssVariables;
}>;

const defaultProps: Partial<TestComponentProps> = {
  label: 'Test component',
};

const varsResolver = createVarsResolver<TestComponentFactory>((theme, { color }) => ({
  root: {
    '--test-component-color': getThemeColor(color, theme),
  },
}));

export const TestComponent = factory<TestComponentFactory>((_props, ref) => {
  const props = useProps('TestComponent', defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, label, ...others } = props;

  const getStyles = useStyles<TestComponentFactory>({
    name: 'TestComponent',
    classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver,
  });

  return (
    <Box ref={ref} {...getStyles('root')} {...others}>
      {label}
    </Box>
  );
});

TestComponent.displayName = 'TestComponent';
