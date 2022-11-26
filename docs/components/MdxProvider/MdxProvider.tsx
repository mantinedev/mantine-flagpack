import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Code, Box } from '@mantine/core';
import { Demo } from '@mantine/ds';
import { h } from './MdxTitle/MdxTitle';
import { MdxLink } from './MdxLink/MdxLink';
import { MdxPrism } from './MdxPrism/MdxPrism';

export const components: React.ComponentProps<typeof MDXProvider>['components'] = {
  Demo,
  h1: h(1),
  h2: h(2),
  h3: h(3),
  h4: h(4),
  h5: h(5),
  h6: h(6),
  a: MdxLink,
  pre: MdxPrism,
  inlineCode: (props) => <Code {...props} />,
  p: (props: any) => <Box component="p" {...props} sx={{ lineHeight: 1.55 }} />,
  ul: (props: any) => <Box component="ul" {...props} mt="md" mb="xs" sx={{ lineHeight: 1.65 }} />,
  li: (props: any) => <Box component="li" {...props} mt={4} />,
};

export function MdxProvider({ children }: { children: React.ReactNode }) {
  return <MDXProvider components={components}>{children}</MDXProvider>;
}
