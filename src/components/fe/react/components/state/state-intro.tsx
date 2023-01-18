import React from 'react';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import Space from '../../../../shared/space/space';
import { B, BI, I } from '../../../../shared/util/util';

const ReactStateIntro = () => {
  return (
    <>
      <Heading as='h2'>State</Heading>
      <Para>
        State is a way to <B>"preserve"</B> values between multiple renders.
        <Space /> <I>State</I> is <BI>local</BI> to the component, which means
        the <I>state</I> of a component can't be accessed by another component,
        unless <I>state</I> value is passed as <BI>"prop"</BI> to another
        component.
      </Para>

      <Heading as='h3'>Unidirectional or top-down data flow</Heading>
      <Para>
        Neither parent nor child components can know if a certain component is
        stateful or stateless. This is why the state is often called local or
        encapsulated. It is not accessible to any other component other than the
        one that owns and sets it. A component may choose to pass its state as
        props to its child components.
      </Para>

      <Para>
        This is commonly called a <B>"top-down"</B> or <B>"unidirectional"</B>
        <Space /> data flow. Any state is always owned by some specific
        component, and any data or UI derived from that state can only affect
        components <B>"below" them in the tree</B>.
      </Para>
    </>
  );
};

export default ReactStateIntro;
