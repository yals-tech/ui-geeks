import React from 'react';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import ReactUseContextHook from './in-built-hooks/use-context-hook';
import ReactUseEffectHook from './in-built-hooks/use-effect-hook';
import ReactUseStateHook from './in-built-hooks/use-state-hook';

const ReactBasicHooks = () => {
  return (
    <>
      <Heading as='h2'>Basic Hooks</Heading>
      <Para>Below is the list of commonly used built-in Hooks.</Para>
      <ReactUseStateHook />
      <ReactUseEffectHook />
      <ReactUseContextHook />
    </>
  );
};

export default ReactBasicHooks;
