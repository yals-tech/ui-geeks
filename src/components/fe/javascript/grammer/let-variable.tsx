import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import { BI, NewLine } from '../../../shared/util/util';
import Word from '../../../shared/word/word';

const JSLetVariable = () => {
  return (
    <>
      <Heading as='h3'>let</Heading>
      <Para>
        This allows us to declare block-level variables. The declared variable
        is available from the block it is enclosed within. In JavaScript, a
        block is the body within {} braces.
        <NewLine />
        <NewLine />
        <Word italic>
          Syntax: <BI>let</BI>
          &lt;variable-name&gt;=&lt;optional-assignment&gt;;{' '}
        </Word>
        <Code>
          {`let name = "JavaScript"; 
let unInitializedVariable; `}
        </Code>
        <Word bold>Scope of let</Word>
        <Code>
          {`// letVar is not visible here
for(let letVar=1; letVar < 5; letVar ++) {
	// letVar is visible here, it is only available within the block
	// it is enclosed within. Here block is the for loop.
}
// letVar is not visible here`}
        </Code>
      </Para>
    </>
  );
};

export default JSLetVariable;
