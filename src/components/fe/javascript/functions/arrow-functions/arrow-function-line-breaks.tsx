import React from 'react';
import Code from '../../../../shared/code/code';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';

const JSArrowFunctionsLineBreaks = () => {
  return (
    <>
      <Heading as='h4'>Line Breaks in Arrow Functions</Heading>
      <Para>
        An arrow function cannot contain a line break between its parameters and
        its arrow.
      </Para>
      <Code>
        {`const user = (name)
	=> "JavaScript";
// This will give SyntaxError: Unexpected token "=>"
`}
      </Code>

      <Para>
        However, line breaks can be added after the arrow or using parentheses.
      </Para>
      <Code>
        {`const user = (name)	=> 
"JavaScript";
// Works fine
`}
      </Code>
    </>
  );
};

export default JSArrowFunctionsLineBreaks;
