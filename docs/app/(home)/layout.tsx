import type { FC, ReactNode } from 'react';

import { HomeLayout } from 'fumadocs-ui/layouts/home';

import { baseOptions } from '@/app/layout.config';

type Props = { children: ReactNode };

const Layout: FC<Props> = ({ children }) => {
  return <HomeLayout {...baseOptions}>{children}</HomeLayout>;
};

export default Layout;
