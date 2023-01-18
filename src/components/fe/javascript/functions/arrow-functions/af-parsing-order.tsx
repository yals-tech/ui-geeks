import React from 'react';
import Code from '../../../../shared/code/code';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import Space from '../../../../shared/space/space';
import { B, BI, NewLine } from '../../../../shared/util/util';
import Word from '../../../../shared/word/word';

const JSArrowFunctionsParsingOrder = () => {
  return (
    <>
      <Heading as='h4'>Parsing Order</Heading>
      <Para>
        Although the <BI>fat arrow</BI> {`(=>)`} in an arrow function is not an
        <BI>operator</BI>, arrow functions have special parsing rules that
        interact differently with <BI>operator precedence</BI> compared to
        traditional functions.
      </Para>
      <Code>
        {`let defaultFunc;
defaultFunc = defaultFunc || () => { };
// SyntaxError: invalid arrow function arguments
`}
      </Code>
      <Para>
        The <B>SyntaxError</B> is because {`=>`} has a lower precedence than
        other operators.
      </Para>

      <Para>
        <Word bold underline>
          Correct way
        </Word>
        <Space />
        would be:
        <NewLine />
        Parentheses are necessary to avoid
        <Word bold underline>
          defaultFunc || ()
        </Word>
        <Space />
        being parsed as the arguments of the arrow function.
        <Code>
          {`let defaultFunc;
defaultFunc = defaultFunc || (() => { });
`}
        </Code>
      </Para>
    </>
  );
};

export default JSArrowFunctionsParsingOrder;
