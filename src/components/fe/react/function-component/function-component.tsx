import React from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import { IOrderedListItemType } from '../../../../types/common';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Space from '../../../shared/space/space';
import { B, BI, I } from '../../../shared/util/util';
import YALSSummary from '../../../shared/yals-summary/yals-summary';
import ReactFunctionComponentLifeCycle from './function-comp-lifecycle/function-lifecycle';
import ReactFunctionComponentIntro from './function-component-intro';
import ReactStateAddToFunction from './state-with-function';

const summaryItems: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        <B>Function components</B> are literally <I>JavaScript functions</I>.
      </>
    )
  },
  {
    label: (
      <>
        A <B>hook</B> is a special function used to hook into React features,
        like <I>state</I> and <I>lifecycle methods</I>.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>useState()</BI> hook is used to add <I>state</I> to the function
        component.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>useEffect()</BI> is used to perform <Space />
        <I>side-effects/lifecycle events</I>. It is equivalent to <Space />
        <I>componentDidMount(), componentDidUpdate()</I> and <Space />
        <I>componentWillUnmount()</I>.
      </>
    )
  }
];

const ReactFunctionComponents = () => {
  useDOMTitle('UI-Geeks: React | Class Component');

  return (
    <Container>
      <Heading>Function Component</Heading>
      <ReactFunctionComponentIntro />
      <ReactStateAddToFunction />
      <ReactFunctionComponentLifeCycle />

      <YALSSummary items={summaryItems} />
    </Container>
  );
};

export default ReactFunctionComponents;
