import React from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import { IOrderedListItemType } from '../../../../types/common';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import { B, I } from '../../../shared/util/util';
import YALSSummary from '../../../shared/yals-summary/yals-summary';
import ReactListExample from './list-example';
import ReactListKeys from './list-keys';
import ReactListsIntro from './lists-intro';

const summaryItems: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        <B>Iterables</B> entities like <I>map(), forEach()</I>, etc. are used to
        render lists of react elements.
      </>
    )
  },
  {
    label: (
      <>
        <B>Keys</B> are added to give items a stable entity. It helps React to
        identify the changed elements.
      </>
    )
  },
  {
    label: (
      <>
        React doesn't recommend using <B>indexes</B> for keys.
      </>
    )
  },
  {
    label: (
      <>
        Keys must only be <B>unique among the siblings</B> and not globally.
      </>
    )
  }
];

const ReactLists = () => {
  useDOMTitle('UI-Geeks: React | Lists');

  return (
    <Container>
      <Heading>Lists</Heading>
      <ReactListsIntro />
      <ReactListKeys />
      <ReactListExample />
      <YALSSummary items={summaryItems} />
    </Container>
  );
};

export default ReactLists;
