import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { TestComponent } from 'mantine-extension-template';

const code = `
import { TestComponent } from 'mantine-extension-template';

function Demo() {
  return <TestComponent{{props}} />;
}
`;

function Wrapper(props: any) {
  return <TestComponent {...props} />;
}

export const configurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code,
  centered: true,
  controls: [
    { type: 'color', prop: 'color', initialValue: 'blue', libraryValue: null },
    { type: 'string', prop: 'label', initialValue: 'test-component', libraryValue: '__' },
  ],
};
