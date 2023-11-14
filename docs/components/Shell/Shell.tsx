import React from 'react';
import cx from 'clsx';
import { AppShell, Container, RemoveScroll, Group } from '@mantine/core';
import { ColorSchemeControl, HeaderControls, MantineLogo } from '@mantine/ds';
import { PACKAGE_DATA } from '../../data';
import classes from './Shell.module.css';

interface ShellProps {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header className={RemoveScroll.classNames.zeroRight}>
        <Container size="lg" px="md" className={classes.inner}>
          <a
            href="https://mantine.dev/"
            target="_blank"
            className={cx('mantine-focus-auto', classes.logo)}
            rel="noreferrer"
          >
            <MantineLogo size={30} />
          </a>

          <HeaderControls
            visibleFrom="sm"
            githubLink={PACKAGE_DATA.repositoryUrl}
            withDirectionToggle={false}
            withSearch={false}
          />

          <Group hiddenFrom="sm">
            <ColorSchemeControl />
          </Group>
        </Container>
      </AppShell.Header>
      <AppShell.Main>
        <div className={classes.main}>{children}</div>
      </AppShell.Main>
    </AppShell>
  );
}
