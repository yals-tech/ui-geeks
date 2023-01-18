import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import { BI, I, IU } from '../../../shared/util/util';

const JSThisWithStaticMembers = () => {
  return (
    <>
      <Heading as='h3'>
        Binding "this" with prototype and static methods
      </Heading>

      <Para>
        When a <I>static</I> or <I>prototype/instance</I> methods are called
        without a value of <BI>this</BI>, the value of <BI>this</BI> will be
        <BI>undefined</BI> inside the method.
      </Para>

      <Para>
        <IU>Example 1:</IU>
        <Code>
          {`const usr = new User("John", 25);
usr.getUserDetail()	// "John - 25"
`}
        </Code>
      </Para>

      <Para>
        <IU>Example 2:</IU>
        <Para>
          Below code will throw TypeError, because <BI>this</BI> was
          <BI>undefined</BI> in the method.
        </Para>
        <Code>
          {`const getUserInfo = usr.getUserDetail();
getUserInfo();  // "TypeError: Cannot read properties of undefined"
`}
        </Code>
      </Para>
    </>
  );
};

export default JSThisWithStaticMembers;
