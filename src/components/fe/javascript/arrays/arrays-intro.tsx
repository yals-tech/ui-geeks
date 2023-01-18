import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, OrderedList } from '../../../shared/util/util';

const JSArraysIntro = () => {
  return (
    <>
      <Para>
        Arrays in JavaScript are actually a special type of object. Similar to
        <Space /> <I>Object</I>, <I>Arrays</I> are also a way to group
        similar/meaningful data together.
      </Para>

      <Para>
        Array items are stored on consecutive locations with a
        <BI>zero based index</BI>, i.e, the first item of the array is stored at
        index <B>0 (zero)</B> and last element at <B>length -1 </B>
        index.
      </Para>

      <Para>
        There are two ways of creating an array:
        <OrderedList
          unOrdered
          items={[
            {
              label: 'Using Array constructor method'
            },
            {
              label: 'Using Array literal syntax'
            }
          ]}
        />
      </Para>

      <Para>
        <Heading as='h4'>Using Array constructor method</Heading>
        <I>{`new Array(<list-of-initial-values>)`}</I>
        <Code>{`const arr = new Array("JavaScript", 6);
// ["JavaScript", 6]`}</Code>
      </Para>

      <Para>
        <Heading as='h4'>Using array literal syntax</Heading>
        <Code>{`const arr = ["JavaScript", 6];
// ["JavaScript", 6]`}</Code>
      </Para>
    </>
  );
};

export default JSArraysIntro;
