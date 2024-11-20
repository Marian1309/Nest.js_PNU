import type { FC, ReactNode } from 'react';

import { Inter } from 'next/font/google';

import { RootProvider } from 'fumadocs-ui/provider';
import 'fumadocs-ui/style.css';

import './globals.css';

const inter = Inter({
  subsets: ['latin']
});

type Props = { children: ReactNode };

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh'
        }}
      >
        <RootProvider theme={{ themes: ['dark', 'light'], defaultTheme: 'dark' }}>
          {children}
        </RootProvider>
      </body>
    </html>
  );
};

export default RootLayout;
