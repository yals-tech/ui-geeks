import React from 'react';
import Code from '../../../../../shared/code/code';
import Heading from '../../../../../shared/heading/heading';
import Para from '../../../../../shared/para/para';
import Space from '../../../../../shared/space/space';
import { B, BI, I } from '../../../../../shared/util/util';

const ReactClassGetDerivedStateFromProps = () => {
  return (
    <>
      <Heading as='h4'>static getDerivedStateFromProps()</Heading>
      <Para>
        It is invoked right before calling the <I>render()</I> method, both on
        the <B>initial mount</B> and on <B>subsequent updates</B>. It should
        <BI>return an object</BI> to update the <I>state</I>, or <BI>null</BI>
        <Space /> to update nothing.
      </Para>

      <Code>{`static getDerivedStateFromProps(props, state)`}</Code>

      <Para>
        This method exists for <I>rare use cases</I>, where the <BI>state</BI>
        <Space /> depends on changes in <BI>props</BI>. This method doesn't have
        access to the component instance. It is fired on every render,
        regardless of the cause.
      </Para>
    </>
  );
};

export default ReactClassGetDerivedStateFromProps;
