import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import { B, I } from '../../../shared/util/util';

const JSAnonymousFunctions = () => {
  return (
    <>
      <Heading as='h2'>Anonymous Functions</Heading>

      <Para>
        Anonymous functions are one, which do not have any name. These are also
        known as <B>"lambda functions"</B>. These are usually transient
        functions that are either passed into or returned from another function.
        It allows us to write a function inline with its usage, instead of
        declaring it somewhere else in the code.
      </Para>

      <Para>
        Rest parameters allows a function to accept an indefinite number of
        arguments. This was introduced in <B>ES6</B>.
      </Para>

      <Para>
        <I>Writing the same add() function with the use of rest parameters.</I>
      </Para>
      <Code>
        {`const sayHello = function() {
  console.log("hello");
}
sayHello(); // "hello"`}
      </Code>

      <Code>
        {`let arr = ["cat", "dog", "rabbit"]
arr.map((itm)=>{ console.log(itm); })

//Output:
"cat"
"dog"
"rabbit"`}
      </Code>
    </>
  );
};

export default JSAnonymousFunctions;
