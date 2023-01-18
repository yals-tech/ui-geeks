import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import { B, BI, I, OrderedList } from '../../../shared/util/util';

const JSObjectsIntro = () => {
  return (
    <>
      <Para>
        Objects are a way of grouping similar/meaningful data together.
        JavaScript objects are a <B>group of</B> <BI>key-value</BI> <B>pairs</B>
        . The <B>"key"</B> part is a string value, while <B>"value"</B> could be
        any valid JavaScript value.
      </Para>

      <Para>
        There are two ways of creating an object:
        <OrderedList
          unOrdered
          items={[
            {
              label: 'Using Object constructor method'
            },
            {
              label: 'Using object literal syntax'
            }
          ]}
        />
      </Para>

      <Para>
        <Heading as='h4'>Using Object constructor method</Heading>
        <I>{`new Object({<initial values>})`}</I>
        <Code>{`const obj = new Object({ name: "JavaScript", version: 6 });`}</Code>
      </Para>

      <Para>
        <Heading as='h4'>Using object literal syntax</Heading>
        <Code>{`const obj = { name: "JavaScript", version: 6 };`}</Code>
      </Para>
    </>
  );
};

export default JSObjectsIntro;
