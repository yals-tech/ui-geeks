import React from 'react';
import Code from '../../../../shared/code/code';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import { B, BI } from '../../../../shared/util/util';

const JSBinaryAssignmentOperators = () => {
  return (
    <>
      <Para>
        <Heading as='h3'>Assignment Operators</Heading>
        Assignment operator assigns a value to left operand based on the value
        of the right operand, in short, it assigns right hand operand value to
        left hand side operand.
      </Para>

      <Code>{`let x = 10`}</Code>

      <Para>
        There are also <BI>compound assignment</BI> operators that are shorthand
        for linear assignment operators.
      </Para>

      <Code>
        {`x += 10
//This is equivalent to, x  = x + 10;
`}
      </Code>

      <Para>
        Similarly we have other compound assignment operators,
        <B>-=, *=, /=, %=, **=</B>
      </Para>
      <Code>
        {`x -= 10    // x = x - 10
x *= 10    // x = x * 10
x /= 10    // x = x / 10
x %= 10    // x = x % 10
x **= 10    // x = x ** 10
`}
      </Code>
    </>
  );
};

export default JSBinaryAssignmentOperators;
