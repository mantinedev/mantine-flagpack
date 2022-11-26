import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { TestComponent, TestComponentProps } from '@/extension';

function Wrapper(props: Partial<TestComponentProps>) {
  return <TestComponent color="blue" {...props} />;
}

const codeTemplate = (props: string, children: string) => `
import { TestComponent } from 'mantine-extension-template';

function Demo() {
  return (
    <TestComponent${props}>
      ${children}
    </TestComponent>
  );
}
`;

export const testConfigurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'color', type: 'color', initialValue: 'blue', defaultValue: 'blue' },
    { name: 'children', type: 'string', initialValue: 'test-configurator' },
  ],
};
