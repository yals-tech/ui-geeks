import React from 'react';
import Code from '../../../../shared/code/code';
import Heading from '../../../../shared/heading/heading';
import Note from '../../../../shared/note/note';
import Para from '../../../../shared/para/para';
import { B } from '../../../../shared/util/util';

const JSUnaryPlusOperator = () => {
  return (
    <>
      <Heading as='h3'>Unary operator "+"</Heading>
      This operator can also be used to convert strings to numbers.
      <Code>
        {`+ "42"  // 42
+ "010" // 10
+ "0x10"  // 16`}
      </Code>
      <Para>
        The + operator can also be used for <B>string concatenation</B>.
      </Para>
      <Code>{`"Hello" + " JavaScript" // "Hello JavaScript"`}</Code>
      <Note>
        If we add a string to a number (or other value), everything is converted
        into string first.
        <Code>
          {`"3" + 4 + 5       // "345"
3 + 4 + "5"     // "75"`}
        </Code>
        Adding an empty string to something is a useful way of converting it to
        string.
      </Note>
    </>
  );
};

export default JSUnaryPlusOperator;
