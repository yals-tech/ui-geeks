import React from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import { IOrderedListItemType } from '../../../../types/common';
import Code from '../../../shared/code/code';
import { CodeLanguageTypes } from '../../../shared/code/code.types';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, IU } from '../../../shared/util/util';
import YALSSummary from '../../../shared/yals-summary/yals-summary';

const summaryItems: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        <B>Fragments</B> are used to <B>return multiple elements</B> from a
        component.
      </>
    )
  },
  {
    label: <>Groups elements without adding extra DOM nodes.</>
  },
  {
    label: (
      <>
        Fixes the <B>"wrapper hell"</B> and invalid re-structuring of code.
      </>
    )
  }
];

const ReactFragments = () => {
  useDOMTitle('UI-Geeks: React | Fragments');
  return (
    <Container>
      <Heading>Fragments</Heading>
      <Para>
        <B>Fragments</B> are used to <B>return multiple elements</B> from a
        component. By definition React components can only return just one React
        Element.
      </Para>

      <Para>
        One way to group a list of children could be to wrap all childrens
        inside <BI>{`<div>`}</BI> element, but this will unnecessarily
        <Space /> <B>add extra</B> <Space /> <I>{`<div>`}</I> to the DOM as well
        , which may result in a problem known as <B>"wrapper hell"</B>. Along
        with the "wrapper hell" problem, it will also result in change of
        structure of DOM nodes, which may result in making the HTML invalid.
      </Para>

      <Para>
        Fragments solves the above problems by grouping a list of children
        <B>without adding extra</B> nodes to DOM.
      </Para>

      <Para>
        <IU>Syntax:</IU>
        <Code language={CodeLanguageTypes.JSX}>{`<React.Fragment>
    <Child1 />
    <Child2 />
    …………………………
    <ChildN />
</React.Fragment>
`}</Code>
      </Para>

      <Para>There is a shorter syntax too:</Para>
      <Para>
        <IU>Syntax:</IU>
        <Code language={CodeLanguageTypes.JSX}>{`<>
    <Child1 />
    <Child2 />
    …………………………
    <ChildN />
</>
`}</Code>
      </Para>

      <Para>
        <IU>Example:</IU>
        <Code language={CodeLanguageTypes.JSX}>{`const FragmentDemo = () => {
  return <>
      <span>Username: John</span>
      <span>Age: 25</span>
  </>
}`}</Code>
      </Para>

      <YALSSummary items={summaryItems} />
    </Container>
  );
};

export default ReactFragments;
