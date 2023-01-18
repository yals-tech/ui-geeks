import React from 'react';
import Code from '../../../../shared/code/code';
import Heading from '../../../../shared/heading/heading';
import Note from '../../../../shared/note/note';
import Para from '../../../../shared/para/para';
import Space from '../../../../shared/space/space';
import { B, BI, I } from '../../../../shared/util/util';
const JSValueOfThisInGlobalContext = () => {
  return (
    <>
      <Heading as='h3'>Value of "this" in the Global Context</Heading>
      <Para>
        In the global execution context (outside of any function), <I>this</I>
        <Space />
        refers to the <BI>global object</BI>, whether in <I>strict mode</I> or
        not. In the <I>browser</I>, <I>this</I> refers to the <BI>window</BI>
        <Space />
        object.
      </Para>

      <Code>{`console.log(this ==== window);  // true`}</Code>

      <Para>
        The variables defined without the <BI>var</BI>, <BI>let</BI> or
        <BI>const</BI> is by default defined in the <I>global scope</I>.
      </Para>
      <Code>{`a = 100;
console.log(window.a);  // 100
`}</Code>

      <Note>
        <B>globalThis</B> property can be used to get a global object,
        regardless of current context in which code is running. For example,
        whether code is running in the browser or nodejs environment, globalThis
        will return global context.
      </Note>
    </>
  );
};

export default JSValueOfThisInGlobalContext;
