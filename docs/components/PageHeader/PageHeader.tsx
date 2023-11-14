import React from 'react';
import { Title, Container, Text } from '@mantine/core';
import { GithubIcon, NpmIcon } from '@mantine/ds';
import { IconLicense, IconUserCode, IconEdit } from '@tabler/icons-react';
import type { PackageData } from '../../data';
import { PageHeaderLink } from './PageHeaderLink/PageHeaderLink';
import classes from './PageHeader.module.css';

interface PageHeaderProps {
  data: PackageData;
}

export function PageHeader({ data }: PageHeaderProps) {
  return (
    <header className={classes.root}>
      <Container size="lg">
        <Title className={classes.title}>{data.packageName}</Title>
        <Text className={classes.description}>{data.packageDescription}</Text>

        <div className={classes.links}>
          <PageHeaderLink label="Source" icon={<GithubIcon size={16} />} link={data.repositoryUrl}>
            View source code
          </PageHeaderLink>
          <PageHeaderLink
            label="Package"
            icon={<NpmIcon size={16} />}
            link={`https://npmjs.com/package/${data.packageName}`}
          >
            {data.packageName}
          </PageHeaderLink>
          <PageHeaderLink
            label="Docs"
            icon={<IconEdit size={18} stroke={1.5} />}
            link={data.mdxFileUrl}
          >
            Edit this page
          </PageHeaderLink>
          <PageHeaderLink
            label="Built by"
            icon={<IconUserCode size={18} stroke={1.5} />}
            link={`https://github.com/${data.author.githubUsername}`}
          >
            {data.author.name}{' '}
            <Text span c="dimmed" inherit>
              (@{data.author.githubUsername})
            </Text>
          </PageHeaderLink>
          <PageHeaderLink
            label="License"
            icon={<IconLicense size={18} stroke={1.5} />}
            link={data.licenseUrl}
          >
            MIT
          </PageHeaderLink>
        </div>
      </Container>
    </header>
  );
}
