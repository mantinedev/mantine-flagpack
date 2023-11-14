import React from 'react';
import { Group, Stack, keys } from '@mantine/core';
import * as flags from './flags';

export default { title: 'Flags' };

export function Usage() {
  const items = keys(flags).map((flag) => {
    const Component = flags[flag];

    return (
      <Group key={flag}>
        <div style={{ width: 80 }}>{flag}</div>
        <Component size={80} />
      </Group>
    );
  });
  return <Stack p={40}>{items}</Stack>;
}
