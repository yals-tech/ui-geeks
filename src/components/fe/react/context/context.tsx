import React from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import { IOrderedListItemType } from '../../../../types/common';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Space from '../../../shared/space/space';
import { B, BI, I } from '../../../shared/util/util';
import YALSPreface from '../../../shared/yals-preface/yals-preface';
import { IDescriptionType } from '../../../shared/yals-preface/yals-preface.types';
import YALSSummary from '../../../shared/yals-summary/yals-summary';
import ReactContextAPI from './context-api/context-api';
import ReactContextIntro from './context-intro';
import ReactContextWhenToUse from './context-when-to-use';

const summaryItems: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        <B>Context</B> is used to pass data through the component tree, without
        passing manually at each level. Fixes the issue of <Space />
        <B>"prop drilling"</B>.
      </>
    )
  },
  {
    label: (
      <>Use context to share data which is global for a given component tree.</>
    )
  },
  {
    label: (
      <>
        The <BI>React.createContext()</BI> method created a <B>Context</B>
        <Space /> object. Multiple components can subscribe to it and will be
        notified on change.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>Context.Provider</BI> component is used to <B>subscribe</B> to
        the <I>Context</I>.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>Class.contextType</BI> property is used in the <Space />
        <I>class component</I> to consume the <I>nearest current value</I>.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>Context.Consumer</BI> is the component that <B>subscribes</B> to
        the <I>Context</I> object. This requires <B>function as a child</B>
        <Space /> which gets the <BI>value</BI> attribute.
      </>
    )
  },
  {
    label: (
      <>
        Issues with Context: On change of value, it will re-render all child
        components below the current component and not the components above
        current component, irrespective of whether they need it or not.
      </>
    )
  }
];

const prefaceList: Array<IDescriptionType> = [
  {
    topic: `What is Context`,
    description: `A way to pass props to any child component in tree, without adding at each level`
  },
  {
    topic: `Prop Drilling`,
    description: `Add prop to every child component in the tree`
  },
  {
    topic: `Context API`,
    description: `APIs to create and consume Context, createContext(), useContext(), etc`
  },
  {
    topic: `Issues using Context`,
    description: `Re-renders child below current component, ignoring shouldComponentUpdate()`
  }
];

const ReactContext = () => {
  useDOMTitle('UI-Geeks: React | Context');

  return (
    <Container>
      <YALSPreface list={prefaceList} />

      <Heading>Context</Heading>
      <ReactContextIntro />
      <ReactContextWhenToUse />
      <ReactContextAPI />
      <YALSSummary items={summaryItems} />
    </Container>
  );
};

export default ReactContext;
