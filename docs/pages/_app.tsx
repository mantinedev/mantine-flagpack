import '@mantine/core/styles.css';
import '@mantine/code-highlight/styles.css';
import '@mantine/ds/styles.css';
import 'mantine-extension-template/styles.css';
import React from 'react';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { theme } from '../theme';
import favicon from '../assets/favicon.svg';

export default function App({ Component, pageProps }: any) {
  return (
    <MantineProvider theme={theme}>
      <Head>
        <title>Mantine Template</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link rel="shortcut icon" href={favicon.src} />
      </Head>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
