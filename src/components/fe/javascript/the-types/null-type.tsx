import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import { NewLine } from '../../../shared/util/util';
import Word from '../../../shared/word/word';

const JSNullType = () => {
  return (
    <>
      <Heading as='h2'>null</Heading>
      <Para>
        It is a type that indicates a deliberate non-value and it is only
        accessible through the null keyword.
        <NewLine />
        <NewLine />
        <Word italic>let t = null;</Word>
      </Para>

      <Para>
        The null value behaves as <Word bold>0 (Zero)</Word> in numeric context
        and as <Word bold>false</Word> in boolean context.
        <Code>
          {`null * 10    // 0
null && true    // false`}
        </Code>
      </Para>
    </>
  );
};

export default JSNullType;
