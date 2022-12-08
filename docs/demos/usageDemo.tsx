import React from 'react';
import { MantineDemo } from '@mantine/ds';
import { Group } from '@mantine/core';
import { ESFlag } from '@/extension';

const code = `
import { Group } from '@mantine/core';
import { ESFlag } from 'mantine-flagpack';

function Demo() {
  return (
    <Group position="center">
      <ESFlag w={100} radius="md" />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <ESFlag style={{ width: 100 }} radius="md" />
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
