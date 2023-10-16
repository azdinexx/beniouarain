import Featured from '@/components/featured';
import Description from '@/components/landing/description';
import Intro from '@/components/landing/intro';
import React from 'react';
import { Locomotive } from './locomotive';
import { BrowserView, MobileOnlyView } from 'react-device-detect';
function Page() {
  return (
    <main>
      <BrowserView>
        <Locomotive>
          <Intro />
          <Description />
          <Featured />
        </Locomotive>
      </BrowserView>
      <MobileOnlyView>mobile</MobileOnlyView>
    </main>
  );
}

export default Page;
