import React from 'react';
import Code from '../../../../shared/code/code';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import { B, I } from '../../../../shared/util/util';

const JSDoWhileLoop = () => {
  return (
    <>
      <Heading as='h3'>do-while loop</Heading>
      <Para>
        Similar to <I>while</I> loop, with one difference that it gives the
        surety that the body of loop will execute <B>at least once</B>.
      </Para>
      <Code>
        {`let num = 1;  // Initialization expression
do  {
  console.log(num);
  num++;  // Update expression
} while (num <= 5); // Termination expression`}
      </Code>
    </>
  );
};

export default JSDoWhileLoop;
