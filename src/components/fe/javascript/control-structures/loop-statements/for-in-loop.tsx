import React from 'react';
import Code from '../../../../shared/code/code';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import { I } from '../../../../shared/util/util';

const JSForInLoop = () => {
  return (
    <>
      <Heading as='h3'>for...in loop</Heading>
      <Para>
        Used for iterating over all enumerable properties of an object with
        valid keys (ignoring properties with <I>Symbol()</I> keys), including
        inherited enumerable properties.
      </Para>
      <Code>
        {`const obj = { "a" : 10, "b" : 20, "c" : 30 };
for(const itm in obj) {
  console.log(\`\${itm} : \${obj[itm]}\`);
}

// Output:
"a : 10"
"b : 20"
"c : 30"
`}
      </Code>
    </>
  );
};

export default JSForInLoop;
