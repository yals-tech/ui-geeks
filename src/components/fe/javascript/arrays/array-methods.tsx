import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import { B, I } from '../../../shared/util/util';
import JSArraySliceMethod from './array-slice-method';
import JSArraySpliceMethod from './array-splice-method';

const JSArrayMethods = () => {
  return (
    <>
      <Heading as='h3'>Array Methods</Heading>
      <Para>Let's learn about a few of the methods of the Array.</Para>

      <Heading as='h4'>toString()</Heading>
      <Para>
        Returns a string with the toString() of each element separated by
        commas.
      </Para>

      <Code>{`let arr = ["cat", "dog"]
arr.toString()   // "cat, dog"
`}</Code>

      <Para>
        <Heading as='h4'>concat()</Heading>
        <Para>Return a new array with the given items added on to it.</Para>

        <Code>{`let arr = ["cat", "dog"]
arr.concat("fox", "tiger")
// ["cat", "dog", "fox", "tiger"]`}</Code>
      </Para>

      <Para>
        <Heading as='h4'>join(separator)</Heading>
        <Para>
          Converts the array to a string, with values delimited by the given{' '}
          <B>"separator"</B>.
        </Para>

        <Code>{`let arr = ["cat", "dog", "fox"]
arr.join("#")    // "cat#dog#fox"`}</Code>
      </Para>

      <Para>
        <Heading as='h4'>pop()</Heading>
        <Para>Removes and returns the last item.</Para>

        <Code>{`let arr = ["cat", "dog", "fox"]
const lastItem = arr.pop()
console.log(lastItem)	// "fox"
console.log(arr)	// ["cat", "dog"]
`}</Code>
      </Para>

      <Para>
        <Heading as='h4'>push()</Heading>
        <Para>Appends items to the end of the array.</Para>

        <Code>{`let arr = ["cat", "dog"]
arr.push("lion", "elephant")
console.log(arr)  // ["cat", "dog", "lion", "elephant"]
`}</Code>
      </Para>

      <Para>
        <Heading as='h4'>unshift()</Heading>
        <Para>Prepends items to the start of the array.</Para>

        <Code>{`let arr = ["cat", "dog"]
arr.unshift("rat")
console.log(arr)  // ["rat", "cat", "dog"]
`}</Code>
      </Para>

      <Para>
        <Heading as='h4'>shift()</Heading>
        <Para>Removes and returns the first item of the array.</Para>

        <Code>{`let arr = ["cat", "dog", "lion"]
const firstElement = arr.shift()
console.log(firstElement) // "cat"
console.log(arr); // ["dog", "lion"]
`}</Code>
      </Para>

      <Para>
        <JSArraySliceMethod />
      </Para>

      <Para>
        <JSArraySpliceMethod />
      </Para>

      <Para>
        <Heading as='h4'>sort()</Heading>
        <Para>
          Sorts the given array. This takes an <I>optional</I> comparison
          function.
        </Para>

        <Code>{`let arr = ["cat", "dog", "lion", "fox", "tiger"]
arr.sort(); //  ["cat", "dog", "fox", "lion", "tiger"]
`}</Code>
      </Para>

      <Para>
        <Heading as='h4'>reverse()</Heading>
        <Para>Reverses the order of items of the array.</Para>

        <Code>{`let arr = ["cat", "dog", "lion", "fox", "tiger"]
arr.reverse();
// ["tiger", "fox", "lion", "dog", "cat"]
`}</Code>
      </Para>
    </>
  );
};

export default JSArrayMethods;
