import React from 'react';
import Intro from '../landing/intro';
import Description from '../landing/description';
import { Locomotive } from '@/app/locomotive';

function Desktop() {
  return (
    <Locomotive>
      <Intro />
      <Description />
    </Locomotive>
  );
}

export default Desktop;
