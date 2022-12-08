import React from 'react';
import { countries } from 'country-data';
import { Highlight, SimpleGrid, Text, TextInput } from '@mantine/core';
import { keys } from '@mantine/utils';
import { useInputState } from '@mantine/hooks';
import * as Flags from '@/extension';

const data = keys(Flags).map((flag) => ({
  country: countries[flag.replace('Flag', '')].name,
  component: Flags[flag],
  flag,
}));

export function FlagsList() {
  const [query, setQuery] = useInputState('');
  const searchQuery = query.trim().toLowerCase();

  const items = data
    .filter(
      (item) =>
        item.country.toLowerCase().includes(searchQuery) ||
        item.flag.toLowerCase().includes(searchQuery)
    )
    .map((item) => (
      <div key={item.country}>
        <item.component w="100%" />
        <Highlight fz="xs" ta="center" highlight={searchQuery}>
          {item.country}
        </Highlight>
      </div>
    ));

  return (
    <>
      <TextInput placeholder="Search flags" value={query} onChange={setQuery} />
      {items.length > 0 ? (
        <SimpleGrid
          mt="xl"
          cols={5}
          breakpoints={[
            { maxWidth: 'md', cols: 3 },
            { maxWidth: 'sm', cols: 2 },
          ]}
        >
          {items}
        </SimpleGrid>
      ) : (
        <Text fz="lg" c="dimmed" mt="xl" ta="center">
          Nothing found...
        </Text>
      )}
    </>
  );
}
