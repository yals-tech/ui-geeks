import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import { BI, I } from '../../../shared/util/util';

const JSTypeConversion = () => {
  return (
    <>
      <Heading as='h2'>Data type Conversion</Heading>

      <Para>
        JavaScript is a <BI>dynamically typed</BI> language, which means we
        don't have to specify the datatype of a variable on declaration. The
        data types are automatically converted <I>as-needed</I> during the
        script execution.
      </Para>

      <Code>
        {`let a  = 10;
a = "JavaScript";
// The type of "a" is automatically converted from number to string.
`}
      </Code>
    </>
  );
};

export default JSTypeConversion;
