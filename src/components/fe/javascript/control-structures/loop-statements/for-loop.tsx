import React from 'react';
import Code from '../../../../shared/code/code';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import { I } from '../../../../shared/util/util';

const JSForLoop = () => {
  return (
    <>
      <Heading as='h3'>for loop</Heading>
      <Para>
        Similar to <I>while</I> loop, except that initialization, termination
        and update expressions are written in a single line.
      </Para>
      <Code>
        {`for(let num = 1; num <=5; i++) {
  console.log(num);
}`}
      </Code>
    </>
  );
};

export default JSForLoop;
