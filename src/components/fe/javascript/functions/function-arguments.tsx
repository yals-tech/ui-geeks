import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Note from '../../../shared/note/note';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I } from '../../../shared/util/util';

const JSFunctionArgumentKeyword = () => {
  return (
    <>
      <Heading as='h2'>arguments</Heading>

      <Para>
        The <BI>"arguments"</BI> is an Array-like object accessible inside a
        function, that contains the values of the parameters passed to the
        functions. This can be considered as a <I>special object</I> containing
        all <Space /> <I>parameters</I> passed to the function at the time of
        <Space /> <I>calling/invocation</I>.
      </Para>

      <Code>
        {`function add() {
  let sum = 0;
  for(const itm of arguments) { sum += itm; }
    return sum;
 }

const result = add(1, 2, 5, 10)	// 18`}
      </Code>

      <Para>
        <B>"add"</B> function can now accept any number of arguments, the
        keyword
        <BI>arguments</BI> will automatically contain all the parameters passed
        at the time of function <I>call/invocation</I>.
      </Para>

      <Note>
        JavaScript functions are <B>variadic</B>, i.e., they can take any number
        of arguments. Functions are treated as <BI>first-class-citizens</BI>
        0, because they can be used as other values. For example, they can be
        assigned to a variable, they can be passed as parameters to other
        functions, basically we can do all actions, which are applicable to
        other types.
      </Note>
    </>
  );
};

export default JSFunctionArgumentKeyword;
