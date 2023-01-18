import React from 'react';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import { B, BI, I, OrderedList } from '../../../shared/util/util';

const ReactLifeCyclePhases = () => {
  return (
    <>
      <Heading as='h2'>Phases of a component</Heading>
      <Para>
        Every component goes through three phases:
        <OrderedList
          items={[
            { label: 'Mounting' },
            { label: 'Updating' },
            { label: 'Unmounting' }
          ]}
        />
      </Para>

      <Heading as='h3'>Mounting Phase</Heading>
      <Para>
        Mounting is the phase where the component is created and inserted into
        the DOM.
      </Para>

      <Heading as='h3'>Updating Phase</Heading>
      <Para>
        An update can be caused by changes to <BI>props</BI> or <BI>state</BI>.
        Whenever the value of <I>props</I> or <I>state</I> is changed, React
        <B>re-renders</B> the component to reflect updated values on the UI. The
        lifecycle methods of the update phase are called on every update.
      </Para>

      <Heading as='h3'>Unmounting Phase</Heading>
      <Para>
        Unmounting is the phase where a component is removed from the DOM.
        Components go out of scope and the lifecycle method of unmounting phase
        can be used to perform <B>cleanup activities</B>.
      </Para>
    </>
  );
};

export default ReactLifeCyclePhases;
