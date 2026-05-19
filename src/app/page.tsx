import { Metadata } from 'next';
import { homeMetadata } from './metadata';
import Home from './HomeClient';

export const metadata: Metadata = {
  ...homeMetadata,
  title: {
    absolute: homeMetadata.title as string,
  },
};

export default Home;
