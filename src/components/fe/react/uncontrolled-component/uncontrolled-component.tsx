import React from 'react';
import { IOrderedListItemType } from '../../../../types/common';
import Space from '../../../shared/space/space';
import { B, BI, I } from '../../../shared/util/util';
import YALSPreface from '../../../shared/yals-preface/yals-preface';
import { IDescriptionType } from '../../../shared/yals-preface/yals-preface.types';
import YALSSummary from '../../../shared/yals-summary/yals-summary';
import ReactUnControlledComponentIntro from './uncontrolled-component-intro';
import ReactUnControlledWhenToUseComponent from './uncontrolled-when-to-use';

const summaryItems: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        In Uncontrolled components, value is controlled by <B>DOM</B> and not by
        <Space /> <I>React</I>.
      </>
    )
  },
  {
    label: (
      <>
        <B>Refs</B> are used to access DOM nodes or React elements.
      </>
    )
  },
  {
    label: (
      <>
        React will assign the <BI>"current"</BI> property with the <Space />
        <B>DOM element</B> on <I>mount</I> and set it back to <BI>null</BI> on
        <Space /> <I>unmount</I>.
      </>
    )
  },
  {
    label: (
      <>
        Should be used for managing focus, text selection, integration with
        third-party libraries, etc.
      </>
    )
  }
];

const prefaceList: Array<IDescriptionType> = [
  {
    topic: `Uncontrolled Component`,
    description: `Value is controlled by DOM, refs used to access DOM`
  },
  {
    topic: `Default Values`,
    description: `Initial value of element in uncontrolled component`
  },
  {
    topic: `When to use Uncontrolled Component`,
    description: `Managing DOM nodes, integrating with third-party libraries`
  },
  {
    topic: `Handling Events`,
    description: `Synthetic camelCase event handler functions`
  }
];

const ReactUnControlledComponent = () => {
  return (
    <>
      <YALSPreface list={prefaceList} />
      <ReactUnControlledComponentIntro />
      <ReactUnControlledWhenToUseComponent />
      <YALSSummary items={summaryItems} />
    </>
  );
};

export default ReactUnControlledComponent;
