import React from 'react';
import { IOrderedListItemType } from '../../../../types/common';
import Code from '../../../shared/code/code';
import { CodeLanguageTypes } from '../../../shared/code/code.types';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, OrderedList } from '../../../shared/util/util';
import ReactFormAddEventHandlers from './adding-events-handlers';

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
        We can add event handlers and pass them as a <I>prop</I> to the JSX.
        Event handlers are the <I>functions</I> that will be triggered in
        response to interactions like button click, hover, etc.
      </Para>

      <Para>
        Handling events with React elements is very similar to handling events
        on DOM elements, with some syntax differences:
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
        React defines synthetic events according to the <I>W3C</I> spec, so we
        don't need to worry about cross-browser compatibility.
      </Para>

      <Para>
        React events do not work exactly the same as native events. Some React
        events do not map directly to the browser's native event. For example,
        in <I>onMouseLeave</I>, <I>e.nativeEvent</I> will point to a <Space />
        <I>mouseout</I> <Space />
        event.
      </Para>

      <ReactFormAddEventHandlers />
    </>
  );
};

export default ReactFormHandlingEvents;
