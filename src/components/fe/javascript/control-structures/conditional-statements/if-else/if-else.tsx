import React from 'react';
import Code from '../../../../../shared/code/code';
import Heading from '../../../../../shared/heading/heading';
import Para from '../../../../../shared/para/para';
import { IU } from '../../../../../shared/util/util';

const JSIfElse = () => {
  return (
    <>
      <Heading as='h3'>if-else</Heading>
      <Para>
        This is used to check conditions and execute either true block or false
        block statements.
      </Para>

      <Code>
        {`let num = 5;
if(num % 2 === 0) {
  console.log("Number is Even");
}
else {
  console.log("Number is Odd");
}`}
      </Code>

      <Para>
        <IU>If-else can be nested.</IU>
      </Para>

      <Code>
        {`let num = 5;
if(num % 2 === 0) {
  console.log("Number is Even");
}
else if(num < 2) {
  console.log("Odd, less than 2");
}
else {
  console.log("Odd, greater than 2");
}`}
      </Code>
    </>
  );
};

export default JSIfElse;
