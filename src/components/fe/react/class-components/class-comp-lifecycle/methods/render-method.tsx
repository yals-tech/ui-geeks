import React from 'react';
import { IOrderedListItemType } from '../../../../../../types/common';
import Heading from '../../../../../shared/heading/heading';
import Note from '../../../../../shared/note/note';
import Para from '../../../../../shared/para/para';
import Space from '../../../../../shared/space/space';
import {
  B,
  BI,
  I,
  NewLine,
  OrderedList
} from '../../../../../shared/util/util';
const renderItems: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        <B>React elements</B>
        <NewLine />
        Any valid JSX element.
      </>
    )
  },
  {
    label: (
      <>
        <B>Array and fragments</B>
        <NewLine />
        Let us <B>return multiple elements</B> from the render. By default
        <Space /> <I>render()</I> method should return only <B>one element</B>,
        but <Space /> <BI>fragments</BI> can be used to <B>combine/wrap</B>
        <Space /> multiple elements that can be returned from the <Space />
        <I>render()</I> method.
      </>
    )
  },
  {
    label: (
      <>
        <B>Portal</B>
        <NewLine />
        Portals help render children into a <BI>different DOM subtree</BI>. Will
        learn more about portals later.
      </>
    )
  },
  {
    label: (
      <>
        <B>String and numbers</B>
        <NewLine />
        These are rendered as text nodes in the DOM.
      </>
    )
  },
  {
    label: (
      <>
        <B>Booleans or null</B>
        <NewLine />
        Renders <B>nothing</B>. Most used to implement conditional rendering,
        for example: <I>{`isTrue && <Welcome />`}</I>.
      </>
    )
  }
];

const ReactClassRenderMethod = () => {
  return (
    <>
      <Heading as='h4'>render()</Heading>
      <Para>
        The render() method is the only <B>required</B> method in a <I>class</I>
        <Space /> component. When called, it should examine <BI>this.props</BI>
        <Space /> and <BI>this.state</BI> and return one of the following types:
      </Para>

      <OrderedList unOrdered expanded items={renderItems} />

      <Para>
        The <I>render()</I> method should be pure, meaning that it <Space />
        <B>does not modify</B> state, it returns the same result each time it's
        invoked, and it does not directly interact with the browser.
      </Para>

      <Note>
        render() will not be invoked if <B>shouldComponentUpdate()</B> returns
        false.
      </Note>
    </>
  );
};

export default ReactClassRenderMethod;
