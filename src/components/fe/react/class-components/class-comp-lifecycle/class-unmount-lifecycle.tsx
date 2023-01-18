import React from 'react';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import ReactClassComponentWillUnmount from './methods/component-will-unmount';

const ReactClassUnmountLifeCycleMethods = () => {
  return (
    <>
      <Heading as='h3'>Unmounting LifeCycle Method</Heading>
      <Para>
        Below is the lifecycle method which is called in the unmount phase of
        the component.
      </Para>

      <Para>
        <ReactClassComponentWillUnmount />
      </Para>
    </>
  );
};

export default ReactClassUnmountLifeCycleMethods;
