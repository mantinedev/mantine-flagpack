import React from 'react';
import { MantineDemo } from '@mantine/ds';

const code = `
import { TestComponent } from 'mantine-extension-template';

function Demo() {
  return (
    <div>
      <div>Test component Demo:</div>
      <TestComponent />
    </div>
  );
}
`;

function Demo() {
  return (
    <div>
      <div>Test component Demo:</div>
      Test demo
    </div>
  );
}

export const testDemo: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
