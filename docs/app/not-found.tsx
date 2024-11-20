import type { NextPage } from 'next';
import { redirect } from 'next/navigation';

const NotFoundPage: NextPage = () => {
  return redirect('/docs');
};

export default NotFoundPage;
