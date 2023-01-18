import React from 'react';
import Code from '../../../../shared/code/code';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import Space from '../../../../shared/space/space';
import { B, I, NewLine } from '../../../../shared/util/util';

const JSUnaryInstanceOfOperator = () => {
  return (
    <>
      <Heading as='h3'>instanceof Operator</Heading>
      <Para>
        The <I>instanceof</I> operator returns <B>true</B>, if the given object
        is of the given object type.
      </Para>
      <I>Syntax:</I>
      <NewLine />
      <Para>
        objectName <Space /> <B>instanceOf</B> <Space /> objectType
      </Para>

      <Code>
        {`const day = new Date()
console.log(day instanceof Date)    // true`}
      </Code>
    </>
  );
};

export default JSUnaryInstanceOfOperator;
