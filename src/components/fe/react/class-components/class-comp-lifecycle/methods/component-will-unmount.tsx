import React from 'react';
import Heading from '../../../../../shared/heading/heading';
import Para from '../../../../../shared/para/para';
import Space from '../../../../../shared/space/space';
import { B } from '../../../../../shared/util/util';

const ReactClassComponentWillUnmount = () => {
  return (
    <>
      <Heading as='h4'>componentWillUnmount()</Heading>
      <Para>
        It is invoked immediately before a component is <B>unmounted</B> and
        <Space /> <B>destroyed</B>. This method is used to perform <Space />
        <B>cleanup tasks</B> like, invalidating timers, canceling network calls
        or for unsubscribing from the subscriptions.
      </Para>

      <Para>
        Once a component is unmounted, it will never be mounted again. We should
        not call setState() in componentWillUnmount() because the component will
        never be re-rendered.
      </Para>
    </>
  );
};

export default ReactClassComponentWillUnmount;
