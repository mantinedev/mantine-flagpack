import React from 'react';
import Link from 'next/link';
import { Header as MantineHeader, Group, Tooltip, Container, Anchor } from '@mantine/core';
import {
  MantineLogo,
  DiscordControl,
  GithubControl,
  DirectionControl,
  ColorSchemeControl,
} from '@mantine/ds';
import { useDirection } from '../DirectionProvider/DirectionProvider';
import SETTINGS from '../../../settings';

export function Header() {
  const { dir, toggleDirection } = useDirection();
  return (
    <MantineHeader height={60}>
      <Container sx={{ height: '100%' }}>
        <Group position="apart" sx={{ height: '100%' }} align="center">
          <Link href="/" passHref>
            <Anchor mt={7}>
              <MantineLogo size={32} />
            </Anchor>
          </Link>
          <Tooltip.Group openDelay={600} closeDelay={100}>
            <Group spacing="xs">
              <DiscordControl />
              <GithubControl link={SETTINGS.repositoryUrl} />
              <DirectionControl direction={dir} toggleDirection={toggleDirection} />
              <ColorSchemeControl />
            </Group>
          </Tooltip.Group>
        </Group>
      </Container>
    </MantineHeader>
  );
}
