import Featured from '@/components/featured';
import Description from '@/components/landing/description';
import Intro from '@/components/landing/intro';
import React from 'react';
import { Locomotive } from './locomotive';
import { isMobile } from 'react-device-detect';
function Page() {
  return (
    <main>
      {!isMobile ? (
        <Locomotive>
          <Intro />
          <Description />
          <Featured />
        </Locomotive>
      ) : (
        <div>hello</div>
      )}
    </main>
  );
}

export default Page;
