import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { OrderedList } from '../../../shared/util/util';
import Word from '../../../shared/word/word';

const JSBooleanType = () => {
  const listItems = [
    {
      label: 'false, 0, empty string (""), NaN, null, undefined becomes false.'
    },
    {
      label: 'All other values become true.'
    }
  ];
  return (
    <>
      <Heading as='h2'>Boolean</Heading>
      <Para>
        JavaScript has a boolean type, with possible values of{' '}
        <Word bold>true</Word> and <Word bold>false</Word>.
        <OrderedList unOrdered items={listItems} />
        <Code>
          {`Boolean("") // false 
Boolean(23) // true`}
        </Code>
        <Para>
          Boolean operations like <Word bold>&&</Word> (Logical AND),
          <Space />
          <Word bold>||</Word>
          <Space /> (Logical OR), <Word bold>!</Word> (Logical NOT) are
          supported.
        </Para>
        <Code>
          {`Boolean(1) && Boolean(false)    // false
Boolean(1) || Boolean(false)    // true
!Boolean(1)   // false
`}
        </Code>
      </Para>
    </>
  );
};

export default JSBooleanType;
