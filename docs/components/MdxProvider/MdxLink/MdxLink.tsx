import React from 'react';
import Link from 'next/link';
import { Anchor } from '@mantine/core';

export function MdxLink({ href, children }: { href?: string; children?: React.ReactNode }) {
  if (!href) {
    return null;
  }

  if (!href.startsWith('http') && href.trim().length > 0) {
    return (
      <Link href={href} passHref>
        <Anchor>{children}</Anchor>
      </Link>
    );
  }

  return (
    <Anchor component="a" variant="link" href={href}>
      {children}
    </Anchor>
  );
}
