import React from 'react';
import Code from '../../../../shared/code/code';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import { I } from '../../../../shared/util/util';

const JSWhileLoop = () => {
  return (
    <>
      <Heading as='h3'>while loop</Heading>
      <Para>
        <I>while</I> loop does not have surety, whether it will execute at least
        once or not. Iteration of the statement could be skipped, if the
        termination expression is met on the first iteration.
      </Para>
      <Code>
        {`let num = 1;  // Initialization expression
while (num <= 5) {  // Termination expression
  console.log(num);
  num++;  // Update expression
}
// The above code will print numbers from 1 to 5.
`}
      </Code>
    </>
  );
};

export default JSWhileLoop;
