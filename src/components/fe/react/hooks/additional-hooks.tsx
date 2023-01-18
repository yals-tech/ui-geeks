import React from 'react';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import ReactUseCallbackHook from './in-built-hooks/use-callback-hook';
import ReactUseImperativeHandleHook from './in-built-hooks/use-imperative-handle-hook';
import ReactUseLayoutEffectHook from './in-built-hooks/use-layout-effect-hook';
import ReactUseMemoHook from './in-built-hooks/use-memo-hook';
import ReactUseReducerHook from './in-built-hooks/use-reducer-hook';
import ReactUseRefHook from './in-built-hooks/use-ref-hook';

const ReactAdditionalHooks = () => {
  return (
    <>
      <Heading as='h2'>Additional Hooks</Heading>
      <Para>
        The following Hooks are either variants of the basic ones or only needed
        for specific edge cases.
      </Para>

      <ReactUseReducerHook />
      <ReactUseCallbackHook />
      <ReactUseMemoHook />
      <ReactUseRefHook />
      <ReactUseImperativeHandleHook />
      <ReactUseLayoutEffectHook />
    </>
  );
};

export default ReactAdditionalHooks;
