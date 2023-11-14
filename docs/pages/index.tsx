import React from 'react';
import { Shell } from '../components/Shell';
import { PageHeader } from '../components/PageHeader';
import { DocsTabs } from '../components/DocsTabs';
import { PACKAGE_DATA } from '../data';
import { STYLES_API_DATA } from '../styles-api';
import docgen from '../docgen.json';
import Docs from '../docs.mdx';

export default function HomePage() {
  return (
    <Shell>
      <PageHeader data={PACKAGE_DATA} />
      <DocsTabs
        docgen={docgen}
        componentsProps={['TestComponent']}
        componentsStyles={['TestComponent']}
        stylesApiData={STYLES_API_DATA}
      >
        <Docs />
      </DocsTabs>
    </Shell>
  );
}
