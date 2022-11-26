import React from 'react';
import { Container, Title, Text } from '@mantine/core';
import { NpmIcon, GithubIcon } from '@mantine/ds';
import { IconLicense, IconCode } from '@tabler/icons';
import SETTINGS from '../../../settings';
import { LinkItem } from './LinkItem/LinkItem';
import useStyles from './PageHeader.styles';

export function PageHeader() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Title mb="sm" className={classes.title}>
          {SETTINGS.packageName}
        </Title>
        <Text color="dimmed" mb="xl" className={classes.description}>
          {SETTINGS.packageDescription}
        </Text>

        <LinkItem label="Source" icon={<GithubIcon size={14} />} link={SETTINGS.repositoryUrl}>
          View source code
        </LinkItem>

        <LinkItem label="Package" icon={<NpmIcon size={14} />} link={SETTINGS.npmUrl}>
          {SETTINGS.packageName}
        </LinkItem>

        <LinkItem
          label="Contribute"
          icon={<IconCode size={14} stroke={1.5} />}
          link={SETTINGS.contributeLink}
        >
          Contributing guidelines
        </LinkItem>

        <LinkItem
          label="License"
          icon={<IconLicense size={14} stroke={1.5} />}
          link={SETTINGS.licenseLink}
        >
          {SETTINGS.license}
        </LinkItem>
      </Container>
    </div>
  );
}
