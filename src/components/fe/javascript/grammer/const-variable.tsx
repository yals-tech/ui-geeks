import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import { BI, I, NewLine } from '../../../shared/util/util';
import Word from '../../../shared/word/word';

const JSConstVariable = () => {
  return (
    <>
      <Heading as='h3'>const</Heading>
      <Para>
        This is used to declare variables whose values are never intended to
        change. It is also available from the block it is declared within.
        <NewLine />
        <NewLine />
        <Word italic>
          Syntax: <BI>const </BI>
          &lt;variable-name&gt;=&lt;optional-assignment&gt;;
        </Word>
        <Code>
          {`const PI = 3.14;
          
PI = 4; // Error
// Because constant variable can't be changed.         
`}
        </Code>
      </Para>
      <Para>
        Properties of <BI>Object</BI> and
        <Word bold>elements of an Array</Word> are not <I>protected</I>, even
        declaring with <BI>const</BI> keyword.
        <NewLine />
        <Code>
          {`// Constant Object declaration
const obj = { a : 10 };
obj.a = 20;
console.log(obj);		// { a : 20 }

// Constant Array declaration
const arr = [1, 2, 5];
arr.push(10);
console.log(arr);		// [1, 2, 5, 10]
`}
        </Code>
      </Para>
    </>
  );
};

export default JSConstVariable;
