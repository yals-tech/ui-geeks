import React from 'react';
import { IOrderedListItemType } from '../../../../types/common';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import { OrderedList } from '../../../shared/util/util';

const whenToUse: Array<IOrderedListItemType> = [
  {
    label: 'Managing focus, text selection, or media playback.'
  },
  {
    label: 'Integrating with third-party DOM libraries.'
  }
];
const ReactUnControlledWhenToUseComponent = () => {
  return (
    <>
      <Heading as='h3'>When to use Uncontrolled Components</Heading>
      <Para>
        Since an uncontrolled component keeps the source of truth in the DOM, it
        is sometimes easier to integrate React and non-React code when using
        uncontrolled components. It can be slightly less code if we want to be
        quick and dirty. Otherwise, we should use controlled components.
      </Para>

      <OrderedList unOrdered items={whenToUse} />
    </>
  );
};

export default ReactUnControlledWhenToUseComponent;
