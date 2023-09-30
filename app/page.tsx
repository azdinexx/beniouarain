import Featured from '@/components/featured';
import Description from '@/components/landing/description';
import Intro from '@/components/landing/intro';
import React from 'react';

function Page() {
  return (
    <main>
      <Intro />
      <Description />
      <Featured />
    </main>
  );
}

export default Page;
