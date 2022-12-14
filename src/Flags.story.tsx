import React from 'react';
import { Group, Stack } from '@mantine/core';
import { keys } from '@mantine/utils';
import * as flags from './flags';

export default { title: 'Flags' };

export function Usage() {
  const items = keys(flags).map((flag) => {
    const Component = flags[flag];

    return (
      <Group key={flag}>
        <div style={{ width: 80 }}>{flag}</div>
        <Component />
      </Group>
    );
  });
  return <Stack p={40}>{items}</Stack>;
}
