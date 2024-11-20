import type { FC, ReactNode } from 'react';

import { DocsLayout } from 'fumadocs-ui/layouts/docs';

import { source } from '@/lib/source';

import { baseOptions } from '@/app/layout.config';

type Props = { children: ReactNode };

const Layout: FC<Props> = ({ children }) => {
  return (
    <DocsLayout tree={source.pageTree} {...baseOptions}>
      {children}
    </DocsLayout>
  );
};

export default Layout;
