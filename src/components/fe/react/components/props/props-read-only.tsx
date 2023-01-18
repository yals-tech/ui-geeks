import React from 'react';
import Code from '../../../../shared/code/code';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import Space from '../../../../shared/space/space';
import { B, BI, I, IU } from '../../../../shared/util/util';

const ReactPropsReadOnly = () => {
  return (
    <>
      <Heading as='h3'>Props are Read-Only</Heading>
      <Para>
        Whether we declare a component as class or function, it must never
        modify its own <I>props</I>. All React components must act like
        <Space /> <BI>pure functions</BI> with respect to their props.
      </Para>

      <Heading as='h4'>What are pure functions?</Heading>
      <Para>
        Functions which do not modify the value of their inputs are called
        <Space /> <BI>"pure"</BI> functions.
      </Para>

      <Para>
        <IU>Example:</IU>
        <Code>{`function sum(a, b) {
  return a + b;
}
`}</Code>
      </Para>

      <Para>
        Above function <B>"sum"</B> is a pure function, because it did not
        modify the input values, which assures that this function will always
        return the same result for the same inputs.
      </Para>

      <Para>
        In contrast to this, <BI>"impure" functions</BI> are ones which modify
        the values of their inputs.
      </Para>

      <Para>
        <IU>Example:</IU>
        <Code>{`function changeUserAge(user) {
  user.age += 10;
  return user;
}`}</Code>
      </Para>

      <Para>
        Above function <B>"changeUserAge"</B> is an impure function, since it
        modifies the input value <B>"user"</B>.
      </Para>
    </>
  );
};

export default ReactPropsReadOnly;
