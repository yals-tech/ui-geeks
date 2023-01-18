import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { BI, I } from '../../../shared/util/util';

const JSAccessingArrays = () => {
  return (
    <>
      <Heading as='h2'>Accessing Array Items</Heading>
      <Para>
        There are multiple ways of accessing/iterating array items. For example,
        <Space />
        <I>for loop, for…of, while, do-while, Array.forEach, Array.map</I>, etc.
      </Para>

      <Para>
        The <BI>length</BI> property of the array holds the <I>highest/last</I>
        <Space /> index of the array + 1. This isn't necessarily the number of
        items in the array.
      </Para>

      <Code>{`const arrItems = ["cat", "dog"];
arrItems[100] =  "fox";
arrItems.length;
// 101, highest index in the array +1`}</Code>

      <Para>
        Accessing array items using <BI>for loop</BI>.
        <Code>
          {`const arr = ["cat", "dog"]
for(let i = 0;i < arr.length; i++) { 
    console.log(arr[i]); 
}
// Output
"cat"
"dog"`}
        </Code>
      </Para>

      <Para>
        Accessing array items using <BI>Array.map()</BI> method.
        <Code>{`const arr = ["cat", "dog"]
arr.map((itm) => { console.log(itm); });
// Output
"cat"
"dog"`}</Code>
      </Para>
    </>
  );
};

export default JSAccessingArrays;
