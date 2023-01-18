import React from 'react';
import { IOrderedListItemType } from '../../../../types/common';
import Space from '../../../shared/space/space';
import { B, I } from '../../../shared/util/util';
import YALSSummary from '../../../shared/yals-summary/yals-summary';
import ReactControlledComponentIntro from './controlled-components-intro';

const summaryItems: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        An input element whose value is controlled by React is called a
        <B>Controlled Component</B>.
      </>
    )
  },
  {
    label: (
      <>
        It accepts <I>input props</I> and updates them by calling the <Space />
        <I>change handlers</I>.
      </>
    )
  }
];

const ReactControlledComponent = () => {
  return (
    <>
      <ReactControlledComponentIntro />
      <YALSSummary items={summaryItems} />
    </>
  );
};

export default ReactControlledComponent;
