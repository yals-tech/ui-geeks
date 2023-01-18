import React from 'react';
import Code from '../../../../shared/code/code';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import Space from '../../../../shared/space/space';
import { B, I, NewLine } from '../../../../shared/util/util';

const JSUnaryNotOperator = () => {
  return (
    <Para>
      <Heading as='h3'>Logical NOT (!) Operator</Heading>
      Returns <B>false</B> in expression can be converted to <I>true</I>,
      otherwise return
      <B>true</B>.
      <NewLine />
      <NewLine />
      <I>Syntax:</I> <Space />
      <B>!expression</B>
      <Code>
        {`!true	// false
!false	// true
!"JS" // false`}
      </Code>
      In short, it <B>inverses</B> the <I>truthy/falsy</I> value, i.e., inverses
      <Space /> <I>true</I> to <Space /> <I>false</I> and vise-versa.
    </Para>
  );
};

export default JSUnaryNotOperator;
