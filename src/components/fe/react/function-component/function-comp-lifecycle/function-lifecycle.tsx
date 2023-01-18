import React from 'react';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import { B } from '../../../../shared/util/util';
import ReactUseEffectHook from '../../hooks/in-built-hooks/use-effect-hook';

const ReactFunctionComponentLifeCycle = () => {
  return (
    <>
      <Heading as='h2'>Lifecycle Methods</Heading>
      <Para>
        Each component has several <B>"lifecycle methods"</B> that we can
        override to run code at particular times in the process.
        <ReactUseEffectHook />
      </Para>
    </>
  );
};

export default ReactFunctionComponentLifeCycle;
