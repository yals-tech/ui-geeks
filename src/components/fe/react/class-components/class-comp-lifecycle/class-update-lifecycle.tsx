import React from 'react';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import ReactClassComponentDidUpdate from './methods/component-did-update';
import ReactClassGetDerivedStateFromProps from './methods/get-derivedstate-from-props';
import ReactClassGetSnapshotBeforeUpdate from './methods/get-snapshot-before-update';
import ReactClassRenderMethod from './methods/render-method';
import ReactClassShouldComponentUpdate from './methods/should-component-update';

const ReactClassUpdateLifeCycleMethods = () => {
  return (
    <>
      <Heading as='h3'>Update LifeCycle Methods</Heading>
      <Para>
        Below are the lifecycle methods which are called in the update phase of
        the component.
      </Para>

      <Para>
        <ReactClassGetDerivedStateFromProps />
        <ReactClassShouldComponentUpdate />
        <ReactClassRenderMethod />
        <ReactClassGetSnapshotBeforeUpdate />
        <ReactClassComponentDidUpdate />
      </Para>
    </>
  );
};

export default ReactClassUpdateLifeCycleMethods;
