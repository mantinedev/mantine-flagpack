import React, { useState } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import {
  MantineProvider,
  ColorScheme,
  ColorSchemeProvider,
  createEmotionCache,
} from '@mantine/core';
import { useToggle } from '@mantine/hooks';
import rtlPlugin from 'stylis-plugin-rtl';
import { Shell } from '../components/Shell/Shell';
import { MdxProvider } from '../components/MdxProvider/MdxProvider';
import { DirectionProvider } from '../components/DirectionProvider/DirectionProvider';
import SETTINGS from '../../settings';

const rtlCache = createEmotionCache({
  key: 'mantine-rtl',
  prepend: true,
  stylisPlugins: [rtlPlugin],
});

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);
  const [dir, toggleDirection] = useToggle<'ltr' | 'rtl'>(['ltr', 'rtl']);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
  };

  return (
    <DirectionProvider dir={dir} toggleDirection={() => toggleDirection()}>
      <Head>
        <title>{SETTINGS.pageTitle}</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          theme={{ colorScheme, dir }}
          withGlobalStyles
          withNormalizeCSS
          emotionCache={dir === 'rtl' ? rtlCache : undefined}
        >
          <div dir={dir}>
            <Shell>
              <MdxProvider>
                <Component {...pageProps} />
              </MdxProvider>
            </Shell>
          </div>
        </MantineProvider>
      </ColorSchemeProvider>
    </DirectionProvider>
  );
}
