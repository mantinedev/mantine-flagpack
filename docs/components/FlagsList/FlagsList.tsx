import React from 'react';
import { countries } from 'country-data';
import { IconSearch } from '@tabler/icons-react';
import {
  Highlight,
  SimpleGrid,
  Text,
  TextInput,
  keys,
  Code,
  Tooltip,
  Stack,
  CopyButton,
} from '@mantine/core';
import { useInputState } from '@mantine/hooks';
import * as Flags from 'mantine-flagpack';

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
        <Stack gap={5}>
          <CopyButton value={item.flag}>
            {({ copy, copied }) => (
              <Tooltip
                label={copied ? 'Copied' : 'Copy flag code'}
                color={copied ? 'teal.9' : undefined}
                c={copied ? 'white' : undefined}
              >
                <Code fz="xs" ta="center" style={{ cursor: 'pointer' }} onClick={copy}>
                  {item.flag}
                </Code>
              </Tooltip>
            )}
          </CopyButton>
          <Highlight fz="xs" ta="center" highlight={searchQuery}>
            {item.country}
          </Highlight>
        </Stack>
      </div>
    ));

  return (
    <>
      <TextInput
        placeholder="Search flags"
        size="lg"
        radius="md"
        leftSection={<IconSearch size={22} stroke={1.5} />}
        value={query}
        onChange={setQuery}
      />
      {items.length > 0 ? (
        <SimpleGrid mt="xl" cols={{ base: 2, sm: 3, md: 5 }}>
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
