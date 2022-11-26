const remarkSlug = require('remark-slug');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkSlug],
    providerImportSource: '@mdx-js/react',
  },
});

module.exports = withMDX({
  reactStrictMode: false,
  swcMinify: true,
  basePath: process.env.NODE_ENV === 'production' ? '/mantine-extension-template' : undefined,
  experimental: {
    externalDir: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
});
