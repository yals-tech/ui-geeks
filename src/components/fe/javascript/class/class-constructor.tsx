import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I } from '../../../shared/util/util';

const JSClassConstructor = () => {
  return (
    <>
      <Heading as='h2'>constructor</Heading>
      <Para>
        The <I>constructor</I> method is a special method for creating and
        initializing an object created with a <I>class</I>. There can be only
        one special method with the name <B>"constructor"</B> in a <I>class</I>.
        A <I>constructor</I> can use <BI>super</BI> <Space /> keyword to call
        the <I>constructor</I> of the <I>base/super</I> class.
      </Para>

      <Code>{`class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
`}</Code>
    </>
  );
};

export default JSClassConstructor;
