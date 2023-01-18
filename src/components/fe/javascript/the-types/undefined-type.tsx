import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import Word from '../../../shared/word/word';

const JSUndefinedType = () => {
  return (
    <>
      <Heading as='h2'>undefined</Heading>
      <Para>
        It is a type that indicates an uninitialized variable value, i.e., a
        value hasn't been assigned yet to the variable.
        <Code>
          {`let t;
console.log(t)  // undefined`}
        </Code>
      </Para>

      <Para>
        The{' '}
        <Word bold italic>
          undefined
        </Word>
        <Space />
        value behaves as <Word bold>NaN</Word> in numeric context and as{' '}
        <Word bold>false</Word> in boolean content.
        <Code>
          {`undefined + 10	// NaN
undefined && true   // false
`}
        </Code>
      </Para>
    </>
  );
};

export default JSUndefinedType;
