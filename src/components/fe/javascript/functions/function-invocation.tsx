import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Note from '../../../shared/note/note';
import Para from '../../../shared/para/para';
import { B, BI, I, NewLine } from '../../../shared/util/util';

const JSFunctionsInvocation = () => {
  return (
    <>
      <Heading as='h2'>Function Invocation/Calling</Heading>

      <Para>
        <I>Syntax:</I>
        <NewLine />
        <BI>functionName(parameters);</BI>
      </Para>

      <Para>
        <B>functionName</B>: Name of the function to be called.
        <NewLine />
        <B>parameters</B>: Parameters are assigned from left to right.
      </Para>

      <Code>
        {`const result = add(2,5)
console.log(result) // 7
`}
      </Code>

      <Para>
        The function <B>"add()"</B> is called with parameters <B>2</B> and{' '}
        <B>5</B>. Since parameters are assigned from <I>left to right</I>,
        therefore, 2 is assigned to parameters
        <B>"a"</B> and 5 assigned to <B>"b"</B>. Function <BI>returns</BI> sum
        of both the values and result is assigned a value of <B>7</B>.
      </Para>

      <Note>
        We can pass more parameters than the function is expecting, all extra
        parameters are ignored.
        <NewLine />
        add(2, 5, 10); // <B>10 will be ignored</B>
      </Note>
    </>
  );
};

export default JSFunctionsInvocation;
