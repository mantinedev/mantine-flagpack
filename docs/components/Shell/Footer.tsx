import React from 'react';
import { Footer as MantineFooter, Container, Group, Anchor, Text } from '@mantine/core';
import Link from 'next/link';
import { MantineLogo } from '@mantine/ds';
import SETTINGS from '../../../settings';

export function Footer() {
  return (
    <MantineFooter height={60} mt={80} sx={{ position: 'static' }}>
      <Container sx={{ height: '100%' }}>
        <Group position="apart" sx={{ height: '100%' }}>
          <Link href="/" passHref>
            <Anchor mt={7}>
              <MantineLogo size={32} />
            </Anchor>
          </Link>

          <Text size="xs">
            Built by <Anchor href={SETTINGS.authorUrl}>{SETTINGS.author}</Anchor>
          </Text>
        </Group>
      </Container>
    </MantineFooter>
  );
}
