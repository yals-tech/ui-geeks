import React from 'react';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, NewLine, OrderedList } from '../../../shared/util/util';

const iteratorProp = [
  {
    label: (
      <>
        <B>value</B>
        <NewLine />
        The next value in the iteration sequence.
      </>
    )
  },
  {
    label: (
      <>
        <B>done</B>
        <NewLine />
        This is <BI>true</BI> if the <I>last value</I> in the sequence has
        already been consumed. If value is present with <B>done</B>, it is the
        iterator's <I>return value</I>.
      </>
    )
  }
];
const JSIterators = () => {
  return (
    <>
      <Heading as='h2'>Iterators</Heading>

      <Para>
        An <BI>iterator</BI> is any <I>object</I> which implements the
        <BI>iterator protocol</BI> by having a <BI>next()</BI> method that
        returns an <I>object</I> with two properties:
        <OrderedList expanded items={iteratorProp} />
      </Para>

      <Para>
        Once created, an iterator object can be iterated explicitly by
        repeatedly calling <BI>next()</BI> method. After a terminating value has
        been <B>yielded</B>, additional calls to <BI>next()</BI> should continue
        to
        <BI>{`return { done: true }`}</BI>.
      </Para>

      <Para>
        The most common iterator is the <BI>Array</BI> iterator, which returns
        each value in the associated array in sequence. Iterators can express
        sequences of unlimited size, such as range of integers between 0 and
        <Space /> <I>Infinity</I>.
      </Para>
    </>
  );
};

export default JSIterators;
