import React from 'react';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import ReactClassComponentDidMount from './methods/component-did-mount';
import ReactClassConstructor from './methods/constructor-lifecycle';
import ReactClassGetDerivedStateFromProps from './methods/get-derivedstate-from-props';
import ReactClassRenderMethod from './methods/render-method';

const ReactClassMountLifeCycleMethods = () => {
  return (
    <>
      <Heading as='h3'>Mounting LifeCycle Methods</Heading>
      <Para>
        Below are the lifecycle methods which are called in the mounting phase
        of the component.
      </Para>

      <Para>
        <ReactClassConstructor />
        <ReactClassGetDerivedStateFromProps />
        <ReactClassRenderMethod />
        <ReactClassComponentDidMount />
      </Para>
    </>
  );
};

export default ReactClassMountLifeCycleMethods;
