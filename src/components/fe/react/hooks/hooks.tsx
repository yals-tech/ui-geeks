import React from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import { IOrderedListItemType } from '../../../../types/common';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Space from '../../../shared/space/space';
import { B, BI, I } from '../../../shared/util/util';
import YALSSummary from '../../../shared/yals-summary/yals-summary';
import ReactAdditionalHooks from './additional-hooks';
import ReactBasicHooks from './basic-hooks';
import ReactHooksIntro from './hooks-intro';

const summaryItems: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        Hooks, added in <B>v16.8</B>, allows adding state and other react
        features in function components. Hooks <B>don't</B> work in <Space />
        <I>class components</I>.
      </>
    )
  },
  {
    label: (
      <>
        <B>Rules of Hooks</B>: Only call at <B>top level</B> and can be called
        from <I>function components</I>.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>useState()</BI> hook allows adding <I>state</I> to function
        components. Returns a <B>pair</B> with <B>current value</B> and an
        <B>update function</B>. State updates may be <B>batched</B> for
        performance benefits.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>useEffect()</BI> is used to perform <Space />
        <I>side-effects/lifecycle events</I>. It is equivalent to
        <I>componentDidMount(), componentDidUpdate()</I> and
        <Space /> <I>componentWillUnmount()</I>.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>useContext()</BI> is used to access <B>Context</B> values inside
        the function component.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>useReducer()</BI> hook, an alternative to <I>useState()</I>,
        used to handle complex state logic. It optimizes performance of the
        component.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>useCallback()</BI> hook is used to create <B>memoized</B>
        <Space /> callbacks, which is called on change of dependencies. The
        <BI>useMemo()</BI> hook can be used as an alternative to this, to
        achieve further performance benefits.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>useRef()</BI> hook is used to handle uncontrolled elements.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>useImperativeHandle()</BI> is used with <I>forwardRef()</I> to
        handle parent <B>ref</B>.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>useLayoutEffect()</BI>, is identical to <I>useEffect</I>, but it
        fires <B>synchronously</B> after DOM updates.
      </>
    )
  }
];

const ReactHooks = () => {
  useDOMTitle('UI-Geeks: React | Hooks');
  return (
    <Container>
      <Heading>Hooks</Heading>
      <ReactHooksIntro />
      <ReactBasicHooks />
      <ReactAdditionalHooks />
      <YALSSummary items={summaryItems} />
    </Container>
  );
};

export default ReactHooks;
