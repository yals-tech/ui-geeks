import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import { BI, I } from '../../../shared/util/util';

const JSInnerFunctions = () => {
  return (
    <>
      <Heading as='h2'>Inner Functions</Heading>

      <Para>
        JavaScript function <I>declarations/expressions</I> are allowed inside
        another function. An important concept of nested functions is that they
        can
        <BI>access variables of the parent function's scope</BI>.
      </Para>

      <Code>
        {`function parentFunc() {
    const a = 1;
    function innerFunc() {
      const b = 4;
      return a + b;
      // variable "a" can be accessed here
    }
  return innerFunc();
}`}
      </Code>

      <Para>
        <BI>Inner/nested</BI> functions help writing more maintainable code. If
        a <I>function</I> relies on one or more functions that are not used to
        any other part of the code, such <I>functions</I> can be nested as
        utility functions inside the <BI>main function</BI>. This keeps the
        number of global functions down, which is always considered as a best
        practice.
      </Para>
    </>
  );
};

export default JSInnerFunctions;
