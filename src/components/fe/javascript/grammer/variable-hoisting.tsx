import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import { B, BI, NewLine } from '../../../shared/util/util';

const JSVariableHoisting = () => {
  return (
    <>
      <Heading as='h2'>Variable Hoisting</Heading>

      <Para>
        In JavaScript, we can refer to a variable which is declared later,
        without getting an exception/error. This concept is known as
        <B>hoisting</B>. Variables in JavaScript are <B>"hoisted"</B> (or
        <B>"lifted"</B>) to the top of the function or statement. However,
        variables that are hoisted return a value of <BI>undefined</BI>.
      </Para>

      <Code>
        {`// Example 1:
console.log(x === undefined);	// true
var x=10;

// Example 2:
var a = 100;
(function() {
  console.log(a);   // undefined
  var a = 50;
})();
`}
      </Code>
      <NewLine />
      <Para>
        <BI>let</BI> and <BI>const</BI> are hoisted but not initialized.
        Referencing the variable in the block before the declaration results in
        <B>ReferenceError</B>, because the variable is in a
        <B>"temporal dead zone"</B> from the start of the block until the
        declaration is processed.
      </Para>

      <Code>
        {`console.log(x); // ReferenceError
let x = 10;
`}
      </Code>
    </>
  );
};

export default JSVariableHoisting;
