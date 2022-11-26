import React from 'react';
import { Table, Text, useMantineTheme } from '@mantine/core';
import data from '../../docgen.json';

const PROPS_DATA = data as Record<string, any>;

interface PropsTableProps {
  component: string;
}

export function PropsTable({ component }: PropsTableProps) {
  const theme = useMantineTheme();

  if (!PROPS_DATA[component]) {
    return null;
  }

  const rows = Object.keys(PROPS_DATA[component].props).map((propKey) => {
    const prop = PROPS_DATA[component].props[propKey];

    return (
      <tr key={propKey}>
        <td style={{ whiteSpace: 'nowrap' }}>
          <Text component="span" size="sm">
            {prop.name}
          </Text>

          {prop.required && (
            <Text component="sup" color="red" size="xs">
              {' '}
              *
            </Text>
          )}
        </td>
        <td style={{ verticalAlign: 'middle' }}>
          <Text
            color={theme.colorScheme === 'dark' ? 'red' : 'indigo'}
            size="xs"
            weight={500}
            sx={{ fontFamily: 'Menlo, Monaco, Lucida Console, monospace' }}
          >
            {prop.type.name}
          </Text>
        </td>
        <td>
          <Text component="span" size="sm">
            {prop.description}
          </Text>
        </td>
      </tr>
    );
  });

  if (rows.length === 0) {
    return (
      <Text color="dimmed" mb="xl">
        Nothing found
      </Text>
    );
  }

  return (
    <div style={{ overflowX: 'auto' }}>
      <div style={{ minWidth: 500 }}>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </div>
    </div>
  );
}
