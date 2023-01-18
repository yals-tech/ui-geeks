import React from 'react';
import Heading from '../../../../../shared/heading/heading';
import Note from '../../../../../shared/note/note';
import Para from '../../../../../shared/para/para';
import Space from '../../../../../shared/space/space';
import { B, BI, I, OrderedList } from '../../../../../shared/util/util';

const constructorItems = [
  {
    label: (
      <>
        Initializing <B>local state</B> by assigning an object to this.state.
      </>
    )
  },
  {
    label: (
      <>
        Binding <B>event handler</B> methods to an instance.
      </>
    )
  }
];

const ReactClassConstructor = () => {
  return (
    <>
      <Heading as='h4'>constructor()</Heading>
      <Para>
        The constructor for a React component is called before it is mounted.
        When implementing the constructor, we should call <BI>super(props)</BI>
        <Space /> before any other statement. Otherwise, <BI>"this.props"</BI>
        <Space /> will be <BI>undefined</BI> in the <I>constructor</I>. Avoid
        introducing any <I>side-effects</I> or <I>subscriptions</I> in the
        constructor.
      </Para>

      <Para>
        In React, <I>constructors</I> are only used for two purposes:
        <OrderedList unOrdered items={constructorItems} />
      </Para>

      <Para>
        The <I>constructor</I> is the only place where we should assign
        <BI>this.state</BI> directly. In all other places, we should use
        <Space /> <I>this.setState()</I>.
      </Para>

      <Note>
        constructor is <B>optional</B>. If we neither initialize state nor bind
        methods, then we don't need to implement a constructor.
      </Note>
    </>
  );
};

export default ReactClassConstructor;
