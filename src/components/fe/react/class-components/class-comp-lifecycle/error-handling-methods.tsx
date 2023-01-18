import React from 'react';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import ReactClassComponentDidCatch from './methods/component-did-catch';
import ReactClassGetDerivedStateFromError from './methods/get-derived-state-from-error';

const ReactClassErrorHandlingMethods = () => {
  return (
    <>
      <Heading as='h3'>Error Handling Methods</Heading>
      <Para>
        These methods are called when there is an error during rendering, in a
        lifecycle method, or in the constructor of any child component.
      </Para>

      <Para>
        <ReactClassGetDerivedStateFromError />
        <ReactClassComponentDidCatch />
      </Para>
    </>
  );
};

export default ReactClassErrorHandlingMethods;
