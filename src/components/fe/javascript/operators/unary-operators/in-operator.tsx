import React from 'react';
import Code from '../../../../shared/code/code';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import { B, BI, I, NewLine } from '../../../../shared/util/util';

const JSUnaryInOperator = () => {
  return (
    <>
      <Heading as='h3'>in Operator</Heading>
      <Para>
        The <I>in</I> operator returns <BI>true</BI>, if given property is in
        the specified object.
      </Para>
      <I>Syntax:</I>
      <NewLine />
      <Para>
        propertyName
        <B>in</B> object
      </Para>

      <Code>
        {`const obj = { name: "JavaScript", version: 6 }
console.log(name in obj)  // true
console.log(arr in obj) // false`}
      </Code>

      <Para>
        The <I>in</I> operator also works with <B>Arrays</B>, but it returns{' '}
        <BI>true</BI>, if a given <B>index</B> is found in the array.
      </Para>

      <Code>
        {`const arr = ["A", "B", "C"]
console.log(0 in arr)   // true
console.log(5 in arr)   // false
console.log("B" in arr)   // false`}
      </Code>
    </>
  );
};

export default JSUnaryInOperator;
