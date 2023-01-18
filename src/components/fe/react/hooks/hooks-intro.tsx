import React from 'react';
import { IOrderedListItemType } from '../../../../types/common';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, I, OrderedList } from '../../../shared/util/util';

const hookRuleItems: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        Only call Hooks <B>at the top level</B>. Don't call Hooks inside loops,
        conditions or nested functions.
      </>
    )
  },
  {
    label: (
      <>
        Only call Hooks <B>from React function components</B>. Don't call Hooks
        from regular JavaScript functions.
      </>
    )
  }
];

const ReactHooksIntro = () => {
  return (
    <>
      <Para>
        <B>Hooks</B> were added in React <B>v16.8</B>. Hooks lets us use
        <Space /> <I>state</I> and other React features without writing a class
        component. Hooks are functions that let us <B>"hook into"</B> React
        <I>state</I> and <I>lifecycle</I> features from function components.
        Hooks <B>don't work</B> inside class components.
      </Para>

      <Para>
        React provides a few built-in Hooks like <I>useState()</I>, <Space />
        <I>useEffect()</I>, etc. We can also create custom hooks to reuse
        stateful behavior between different components.
      </Para>

      <Heading as='h2'>Rules of Hooks</Heading>
      <Para>
        Hooks are JavaScript functions, but they impose two additional rules:
        <OrderedList unOrdered expanded items={hookRuleItems} />
      </Para>
    </>
  );
};

export default ReactHooksIntro;
