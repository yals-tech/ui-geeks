import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, I, NewLine } from '../../../shared/util/util';

const JSTernaryOperator = () => {
  return (
    <>
      <Heading as='h3'>Ternary (?:) Operator</Heading>
      <Para>
        It is the only JavaScript operator that takes <B>three operands</B>.
      </Para>
      <I>Syntax:</I>
      <NewLine />
      operand1 ? operand2 : operand3
      <Para>
        <B>Better written as:</B>
        <Space /> condition ? operand1 : operand2
        <NewLine />
        If the condition is <I>true</I>, <B>operand1</B> is returned, otherwise{' '}
        <B>operand2</B> is returned.
      </Para>
      <Code>
        {`let num = 10
const msg = num % 2 === 0 ? "Even" : "Odd"
// "Even" is assigned to the msg variable, since the condition evaluates true.`}
      </Code>
    </>
  );
};

export default JSTernaryOperator;
