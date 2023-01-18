import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, I, NewLine } from '../../../shared/util/util';

const JSArraySliceMethod = () => {
  return (
    <>
      <Heading as='h4'>slice()</Heading>
      <Para>
        Returns a sub-array of the array. <I>slice()</I> method returns a
        <Space /> <I>shallow copy</I> <Space />
        of the portion of an array into a new array, selected from
        <B>"start"</B> index to <B>"end"</B> index ("end" index not included).
        The array will not be modified.
      </Para>

      <Para>
        <I>Syntax:</I>
        <NewLine />
        slice();
        <NewLine />
        slice(<B>start</B>);
        <NewLine />
        slice(<B>start, end</B>);
      </Para>

      <Para>
        <B>start:</B> Zero based index of the starting items for the extraction.
      </Para>
      <Code>
        {`let arr = ["cat", "dog", "lion", "fox", "tiger"];
arr.slice(2)  // ["lion", "fox", "tiger"]
// Extracting all elements from index 2 to end of the array.
`}
      </Code>

      <Para>
        A negative index can be used, indicating an offset from the end of the
        array.
      </Para>
      <Code>
        {`let arr = ["cat", "dog", "lion", "fox", "tiger", "elephant"];
arr.slice(-1);  // ["elephant"]
// Extracting one element from the end of the array,
// i.e., extracting the last item of the array.`}
      </Code>

      <Para>
        If <B>start</B> is undefined, slice starts from index 0.
      </Para>
      <Code>
        {`let arr = ["cat", "dog", "lion", "fox", "tiger", "elephant"];
arr.slice();  // ["cat", "dog", "lion", "fox", "tiger", "elephant"]`}
      </Code>

      <Para>
        If <B>start</B> is greater than the index range of the array, an empty
        array is returned.
      </Para>
      <Code>
        {`let arr = ["cat", "dog", "lion", "fox", "tiger", "elephant"];
arr.slice(10);  // [ ]`}
      </Code>

      <NewLine />
      <Para>
        <B>end:</B> Index of the first element to exclude from the returned
        array. <I>slice()</I> extracts up to but not including the <B>"end"</B>
        <Space /> index.
      </Para>
      <Code>
        {`let arr = ["cat", "dog", "lion", "fox", "tiger"];
arr.slice(1, 4) // ["dog", "lion", "fox"]
// Extracts elements from index 1 up to index 3 (end index - 1).`}
      </Code>

      <Para>
        A negative index can be used, indicating an offset from the end of the
        array.
      </Para>
      <Code>
        {`let arr = ["cat", "dog", "lion", "fox", "tiger"];
arr.slice(1, -2)  // ["dog", "lion"]
// Extracting from start index 1 to excluding the last 2 elements from the end.`}
      </Code>

      <Para>
        If <B>end</B> is omitted, <I>slice()</I> extracts through end of the
        array, i.e., <I>arr.length</I>.
      </Para>
      <Code>
        {`let arr = ["cat", "dog", "lion", "fox", "tiger"];
arr.slice(2)  // ["lion", "fox", "tiger"]
// Extracting from start index 2 to end of the array.`}
      </Code>

      <Para>
        If the <B>end</B> is greater than the length of the array,
        <I>slice()</I> extracts through the end of the array i.e., end becomes
        the length of the array.
      </Para>
      <Code>
        {`let arr = ["cat", "dog", "lion", "fox", "tiger"];
arr.slice(2, 10)  // ["lion", "fox", "tiger"]
`}
      </Code>
    </>
  );
};

export default JSArraySliceMethod;
