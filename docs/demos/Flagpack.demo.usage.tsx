import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { ESFlag } from 'mantine-flagpack';

const code = `
import { ESFlag } from 'mantine-flagpack';

function Demo() {
  return <ESFlag w={100} radius="md" />;
}
`;

function Demo() {
  return <ESFlag w={100} radius="md" />;
}

export const usage: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
};
