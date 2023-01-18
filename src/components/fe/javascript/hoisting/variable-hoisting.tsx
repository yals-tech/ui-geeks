import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, IU } from '../../../shared/util/util';

const JSVariableHoisting = () => {
  return (
    <>
      <Heading as='h2'>Variable Hoisting</Heading>

      <Para>
        <I>Hoisting</I> also works with <I>variables</I> too, however,
        JavaScript only <BI>hoists declaration</BI> and not the
        <BI>initialization</BI> <Space />
        i.e, the initialization doesn't happen until the associated line of code
        is executed, even if the variable was originally initialized and then
        declared or declared and initialized in the same line. Until that point
        in the execution is reached, the variable has its default value (
        <I>undefined</I> for a variable declared with <BI>var</BI>, otherwise
        <Space /> <I>uninitialized</I>).
      </Para>

      <Para>
        <IU>Example:</IU>
        <Code>
          {`console.log(varVariable); // undefined
var name ="JavaScript";
`}
        </Code>
      </Para>

      <Para>
        If we forget the <BI>declaration</BI> altogether (and only
        <Space /> <I>initialize</I> <Space />
        the value) the variable <BI>isn't hoisted</BI>. Trying to access the
        variable before it is initialized will result in <B>ReferenceError</B>.
      </Para>

      <Para>
        The below statement will throw <B>ReferenceError</B>, because
        <BI>num</BI> was not <I>hoisted</I>.
      </Para>

      <Code>
        {`console.log(num); // ReferenceError
num = 10;
`}
      </Code>
    </>
  );
};

export default JSVariableHoisting;
