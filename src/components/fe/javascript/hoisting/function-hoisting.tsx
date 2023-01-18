import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, IU, NewLine } from '../../../shared/util/util';

const JSFunctionHoisting = () => {
  return (
    <>
      <Heading as='h2'>Function Hoisting</Heading>

      <Para>
        Hoisting allows <I>functions</I> to be safely used in code before they
        are <I>declared</I>. <BI>Function declarations</BI> are <I>hoisted</I>,
        but <Space /> <BI>function expressions</BI> <Space /> are not <Space />
        <I>hoisted</I>.
      </Para>

      <Para>
        <IU>Example 1:</IU>
        <NewLine />
        <BI>Function declarations</BI> are hoisted.
        <Code>
          {`greet();  // "Function declarations are hoisted"
function greet() {
  console.log("Function declarations are hoisted"); 
}
`}
        </Code>
      </Para>

      <Para>
        <IU>Example 2:</IU>
        <NewLine />
        <BI>Function expressions</BI> are not hoisted. Below code throws
        <B>ReferenceError</B>, on accessing <BI>greet()</BI> before it is
        declared, because <I>function expressions</I> are not hoisted.
        <Code>
          {`greet();  // ReferenceError
const greet = () => {
  console.log("Function expressions are NOT hoisted");
}
`}
        </Code>
      </Para>
    </>
  );
};

export default JSFunctionHoisting;
