import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, IU } from '../../../shared/util/util';

const JSTDZ = () => {
  return (
    <>
      <Heading as='h2'>Temporal Dead Zone (TDZ)</Heading>
      <Para>
        A variable declared with <BI>let</BI> or <BI>const</BI> is said to be in
        <BI>"temporal dead zone"</BI> or <BI>TDZ</BI>, from the start of the
        block until code execution reaches the line where the variable is
        <Space /> <I>declared</I> and <I>initialized</I>.
      </Para>

      <Para>
        While inside the <BI>TDZ</BI>, the variable has not been initialized
        with a value and an attempt to access it will result in
        <B>ReferenceError</B>. This differs from <BI>var</BI> variables, which
        will return a value of <BI>undefined</BI>, if they are accessed before
        they are declared.
      </Para>

      <Para>
        <IU>Example 1:</IU>
        <Code>
          {`{
  // TDZ starts at the beginning of the scope
  console.log(varVariable);   // undefined
  console.log(typeof varVariable);  // undefined
  console.log(letVariable);   // ReferenceError
  console.log(typeof letVariable);    // ReferenceError

  var varVariable = 10;
  let letVariable = 20;
  // TDZ ends at the end of the scope
}
`}
        </Code>
      </Para>

      <Para>
        The term <B>"temporal"</B> is used because the zone depends on the order
        of <I>execution (time)</I>, rather than the order in which the code is
        <Space /> <I>written (position)</I>.
      </Para>
    </>
  );
};

export default JSTDZ;
