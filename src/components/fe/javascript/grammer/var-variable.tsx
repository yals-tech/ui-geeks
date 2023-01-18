import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { BI, NewLine } from '../../../shared/util/util';
import Word from '../../../shared/word/word';

const JSVarVariable = () => {
  return (
    <>
      <Heading as='h3'>var</Heading>
      <Para>
        It was the traditional (older) way of declaring variables, therefore, it
        doesn't have restrictions of block-level. Variables declared with the
        <BI>var</BI> keyword have <BI>function/global level scope</BI>
        <Space />
        and therefore are accessible through the function it is declared within.
        <NewLine />
        <NewLine />
        <Word italic>
          Syntax: <BI>var </BI>
          &lt;variable-name&gt;=&lt;optional-assignment&gt;;
        </Word>
        <Code>
          {`var name;   // uninitialized variable, default value is undefined.
var name = "JavaScript";`}
        </Code>
      </Para>
      <Para>
        <Word bold>Scope of var</Word>
        <Code>
          {`// myVar is visible here
for(var myVar=1; myVar < 5; myVar ++) {
	// myVar is visible here
}
// myVar is visible here
// It is available outside the block, because it has function/global level scope.
`}
        </Code>
      </Para>
    </>
  );
};

export default JSVarVariable;
