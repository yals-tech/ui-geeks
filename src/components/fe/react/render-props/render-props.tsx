import React from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import { IOrderedListItemType } from '../../../../types/common';
import Container from '../../../shared/container/container';
import { B, I } from '../../../shared/util/util';
import YALSSummary from '../../../shared/yals-summary/yals-summary';
import ReactRenderPropsIntro from './render-props-intro';

const summaryItems: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        <B>Render props</B> is a technique to <I>share code</I> between
        components using a <I>prop</I> which is a <I>function</I>.
      </>
    )
  },
  {
    label: (
      <>
        It is not required to name the prop as <B>"render"</B>, instead any
        valid names could be used.
      </>
    )
  }
];

const ReactRenderProps = () => {
  useDOMTitle('UI-Geeks: React | Render Props');
  return (
    <Container>
      <ReactRenderPropsIntro />
      <YALSSummary items={summaryItems} />
    </Container>
  );
};

export default ReactRenderProps;
