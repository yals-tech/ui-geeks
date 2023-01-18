import React from 'react';
import { IOrderedListItemType } from '../../../../types/common';
import Code from '../../../shared/code/code';
import { CodeLanguageTypes } from '../../../shared/code/code.types';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, OrderedList } from '../../../shared/util/util';

const eventDiff: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        React events are named using <B>camelCase</B>, rather than <Space />
        <B>lowercase</B>.
      </>
    )
  },
  {
    label: (
      <>
        With JSX, we pass a function as the <B>event handler</B>, rather than{' '}
        <B>string</B>.
      </>
    )
  }
];
const ReactFormHandlingEvents = () => {
  return (
    <>
      <Heading as='h2'>Handling Events</Heading>
      <Para>
        Handling events with React elements is very similar to handling events
        on DOM elements.
      </Para>

      <Para>
        There are some syntax differences:
        <OrderedList unOrdered items={eventDiff} />
      </Para>

      <Para>
        <B>For Example, in the HTML:</B>
        <Code
          language={CodeLanguageTypes.JSX}
        >{`<button onclick="handleClick()">Click</button>`}</Code>
      </Para>

      <Para>
        <B>In React, same is written as:</B>
        <Code
          language={CodeLanguageTypes.JSX}
        >{`<button onClick={handleClick}>Click</button>`}</Code>
      </Para>

      <Para>
        Another difference is that we cannot <B>return false</B> to <Space />
        <I>prevent default behavior</I> in React. We must call <Space />
        <BI>preventDefault()</BI> explicitly.
      </Para>

      <Para>
        <B>For Example, in the HTML:</B>
        <Code language={CodeLanguageTypes.JSX}>{`<form onsubmit="return false">
  <button type="submit">Submit</button>
</form>
`}</Code>
      </Para>

      <Para>
        <B>In React, same is written as:</B>
        <Code language={CodeLanguageTypes.JSX}>{`const Form = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
  }
          
  return <form onSubmit={handleSubmit}>
    <button type="submit">Submit</button>
  </form>
}
`}</Code>
      </Para>

      <Heading as='h3'>Synthetic Event</Heading>
      <Para>
        React defines <B>synthetic events</B> according to the <BI>W3C spec</BI>
        , so we don't need to worry about <B>cross-browser compatibility</B>.
        React events do not work exactly the same as native events.
      </Para>
    </>
  );
};

export default ReactFormHandlingEvents;
