import React from 'react';
import { IOrderedListItemType } from '../../../../../types/common';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import { B, I, OrderedList } from '../../../../shared/util/util';

const issuesItems: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        When <B>Provider value prop</B> changes, it will <B>re-render</B> all
        the child components below the current component, irrespective of the
        implementation of <I>shouldComponentUpdate()</I> lifecycle method. This
        may cause performance issues.
      </>
    )
  },
  {
    label: (
      <>
        <B>Provider value prop</B> update has to be made with caution, because
        it will only <B>re-render</B> the child components <B>below</B> the
        current component and not the components <B>above</B> the current
        component in the component tree.
      </>
    )
  }
];

const ReactContextIssues = () => {
  return (
    <>
      <Heading as='h2'>Issues using Context</Heading>
      <Para>
        Although Context is a good fit for sharing data between parent and child
        components in a deeply nested component tree. Still, there are a couple
        of issues with the re-rendering mechanism of Context.
      </Para>

      <Para>Let's learn few of the issues:</Para>

      <OrderedList unOrdered expanded items={issuesItems} />
    </>
  );
};

export default ReactContextIssues;
