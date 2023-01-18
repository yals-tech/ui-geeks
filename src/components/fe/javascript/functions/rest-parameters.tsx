import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Note from '../../../shared/note/note';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I } from '../../../shared/util/util';

const JSFunctionRestArgument = () => {
  return (
    <>
      <Heading as='h2'>Rest Parameters</Heading>

      <Para>
        Using <BI>arguments</BI> <I>object</I> is pretty useful, but it does
        seem a little <Space /> <I>verbose</I>, because by looking at the
        function <I>declaration/expression</I>, we can't predict whether the
        function expects any <I>argument</I> or not. To make functions more
        readable, we can replace <BI>arguments</BI> with{' '}
        <B>"rest parameters"</B>.
      </Para>

      <Para>
        Rest parameters allows a function to accept an indefinite number of
        arguments. This was introduced in <B>ES6</B>.
      </Para>

      <Para>
        <I>Writing the same add() function with the use of rest parameters.</I>
      </Para>
      <Code>
        {`function add(...args) {
  let sum = 0;
  for(const itm of args) { sum += itm; }
    return sum;
}

const result = add(1, 2, 5, 10);  // 18`}
      </Code>

      <Note>
        It is important to note that wherever the rest parameters are placed in
        function declaration, it will store all arguments <B>after</B> its
        declaration, but <B>not before</B>.
        <Code>
          {`function add(firstValue, …args) {}
add(1, 2, 5, 10)`}
        </Code>
        <B>1</B> will be assigned to the <B>"firstValue"</B> parameter, while
        <B>2</B>, <B>5</B>
        <Space />
        and <B>10</B> will be assigned to the rest parameter <B>"args"</B>.
      </Note>
    </>
  );
};

export default JSFunctionRestArgument;
