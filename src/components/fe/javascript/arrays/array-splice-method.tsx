import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import { B, I, NewLine } from '../../../shared/util/util';

const JSArraySpliceMethod = () => {
  return (
    <>
      <Heading as='h4'>splice()</Heading>
      <Para>
        Modifies the existing Array by deleting a section and replacing it with
        more items.
      </Para>

      <Para>
        <I>Syntax:</I>
        <NewLine />
        splice(start, numberOfItemsToRemove, itemToAdd);
      </Para>

      <Para>
        <B>start:</B> Zero based index of the starting items for the
        deletion/replacement.
      </Para>
      <Para>
        <B>numberOfItemsToRemove:</B> Number of elements to be removed.
      </Para>
      <Para>
        <B>itemToAdd:</B> <I>optional</I> item to be added after the start
        index.
      </Para>

      <Code>
        {`let arr = ["cat", "dog", "lion", "fox", "tiger"]
arr.splice(2, 0, "rabbit")  
// ["cat", "dog", "rabbit", "lion", "fox", "tiger"]
// Starting from index 2, remove 0 (zero) items and add "rabbit" after start index 2.
`}
      </Code>

      <Code>
        {`let arr = ["cat", "dog", "lion", "fox", "tiger"]
arr.splice(2, 2, "turtle") 
//  ["cat", "dog", "rabbit", "lion", "fox", "tiger"]
// Starting from index 2, remove 2 items and add "turtle" after start index 2.
`}
      </Code>
    </>
  );
};

export default JSArraySpliceMethod;
