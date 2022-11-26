import React from 'react';
import { Container } from '@mantine/core';
import { PageHeader } from '../components/PageHeader/PageHeader';
import HomePageContent from '../mdx/home-page.mdx';

export default function HomePage() {
  return (
    <div>
      <PageHeader />

      <Container>
        <HomePageContent />
      </Container>
    </div>
  );
}
