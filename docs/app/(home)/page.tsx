import type { NextPage } from 'next';
import { redirect } from 'next/navigation';

const HomePage: NextPage = () => {
  return redirect('/docs');
};

export default HomePage;
