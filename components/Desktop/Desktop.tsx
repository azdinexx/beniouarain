import React from 'react';
import Intro from '../landing/intro';
import Description from '../landing/description';
import { Locomotive } from '@/app/locomotive';
import Featured from '../featured';

function Desktop() {
  return (
    <Locomotive>
      <Intro />
      <Description />
      <Featured />
    </Locomotive>
  );
}

export default Desktop;
