import React from 'react';
import { countries } from 'country-data';
import { SimpleGrid, Text } from '@mantine/core';
import { keys } from '@mantine/utils';
import * as Flags from '@/extension';

const data = keys(Flags).map((flag) => ({
  country: countries[flag.replace('Flag', '')].name,
  component: Flags[flag],
}));

export function FlagsList() {
  const items = data.map((item) => (
    <div key={item.country}>
      <item.component w="100%" />
      <Text fz="xs" ta="center">
        {item.country}
      </Text>
    </div>
  ));

  return (
    <SimpleGrid
      cols={5}
      breakpoints={[
        { maxWidth: 'md', cols: 3 },
        { maxWidth: 'sm', cols: 2 },
      ]}
    >
      {items}
    </SimpleGrid>
  );
}
