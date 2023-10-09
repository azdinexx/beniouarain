import Featured from '@/components/featured';
import Description from '@/components/landing/description';
import Intro from '@/components/landing/intro';
import React from 'react';
import { Locomotive } from './locomotive';

function Page() {
  return (
    <main>
      <Locomotive>
        <Intro />
        <Description />
        <Featured />
      </Locomotive>
    </main>
  );
}

export default Page;
