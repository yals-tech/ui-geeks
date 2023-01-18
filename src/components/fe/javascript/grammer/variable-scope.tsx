import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I } from '../../../shared/util/util';

const JSVariableScope = () => {
  return (
    <>
      <Heading as='h2'>Variable Scope</Heading>

      <Para>
        When a variable is declared <I>outside of function</I>, it is called a
        <B>global variable</B>, because it is available to any other code in the
        current document. When a variable is declared <I>inside a function</I>,
        it is called a<B>local variable</B>, because it is available only within
        that function. <BI>let</BI>
        <Space />
        and <BI>const</BI> declarations are <B>scoped to the block</B> that they
        are declared within.
      </Para>

      <Code>
        {`let globalVariable = 10;
anotherGlobalVariable = 20;

function demoVariableScope() {
  let localVariable = 50;
  for(let blockVariable = 1; blockVariable <  5 ; blockVariable++) {
      console.log(blockVariable);
   }   
  console.log(blockVariable); // Not available here
}

console.log(globalVariable ); // Available here
console.log(localVariable); // Not available here`}
      </Code>
    </>
  );
};

export default JSVariableScope;
