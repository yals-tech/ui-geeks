import React from 'react';
import Code from '../../../../../shared/code/code';
import Heading from '../../../../../shared/heading/heading';
import Para from '../../../../../shared/para/para';
import Space from '../../../../../shared/space/space';
import { BI } from '../../../../../shared/util/util';

const ReactClassGetSnapshotBeforeUpdate = () => {
  return (
    <>
      <Heading as='h4'>getSnapshotBeforeUpdate()</Heading>
      <Para>
        It is invoked right before the most recently rendered output is
        committed to the DOM. It enables components to capture some information
        from the DOM (like scroll position) before it is potentially changed.
      </Para>

      <Code>{`getSnapshotBeforeUpdate(prevProps, prevState)`}</Code>

      <Para>
        Any value returned from this method will be passed as a parameter to the
        <BI>componentDidUpdate()</BI>. It should return either a <Space />
        <BI>snapshot value</BI> or <BI>null</BI>.
      </Para>
    </>
  );
};

export default ReactClassGetSnapshotBeforeUpdate;
