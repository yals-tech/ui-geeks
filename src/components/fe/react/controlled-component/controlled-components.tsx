import React from 'react';
import { IOrderedListItemType } from '../../../../types/common';
import Space from '../../../shared/space/space';
import { B, I } from '../../../shared/util/util';
import YALSPreface from '../../../shared/yals-preface/yals-preface';
import { IDescriptionType } from '../../../shared/yals-preface/yals-preface.types';
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

const prefaceList: Array<IDescriptionType> = [
  {
    topic: `Controlled Components`,
    description: `Value is controlled by React, accepts input props, update via handlers`
  },
  {
    topic: `Handling Events`,
    description: `Synthetic camelCase event handler functions`
  }
];

const ReactControlledComponent = () => {
  return (
    <>
      <YALSPreface list={prefaceList} />
      <ReactControlledComponentIntro />
      <YALSSummary items={summaryItems} />
    </>
  );
};

export default ReactControlledComponent;
