import React from 'react';
import { AppShell } from '@mantine/core';
import { Header } from './Header';
import { Footer } from './Footer';

interface ShellProps {
  children: React.ReactNode;
}

export function Shell({ children }: ShellProps) {
  return (
    <AppShell
      header={<Header />}
      footer={<Footer />}
      padding={0}
      sx={{
        main: {
          minHeight: 'calc(100vh - 140px)',
        },
      }}
    >
      {children}
    </AppShell>
  );
}
