import React from 'react';
import Code from '../../../../shared/code/code';
import Heading from '../../../../shared/heading/heading';
import Note from '../../../../shared/note/note';
import Para from '../../../../shared/para/para';
import Space from '../../../../shared/space/space';
import { B, BI, I } from '../../../../shared/util/util';

const JSUnaryDeleteOperator = () => {
  return (
    <>
      <Heading as='h3'>delete Operator</Heading>
      <Para>
        The <BI>delete</BI> operator deletes an object's property, but can't
        delete the entire object. Returns <B>true</B>, if delete operation was
        successful, otherwise returns <B>false</B>.
      </Para>

      <Code>
        {`const obj = { name: "JavaScript", version: 6 };
delete obj.version;   // true
console.log(obj.version);   // undefined`}
      </Code>

      <Para>
        The delete operator can't delete <I>non-configurable</I> or{' '}
        <I>system defined</I> properties.
        <Code>{`delete Math.PI    // false`}</Code>
      </Para>

      <Heading as='h4'>Deleting array elements</Heading>
      <Para>
        The <I>delete</I> operator should not be used for deleting array
        elements. It is possible to delete any array elements, although it is
        regarded as <B>bad practice</B>, because it does not actually delete the
        element (it just sets the element as <I>undefined</I>) and therefore,
        <Space /> <I>length</I> property is not re-calculated.
      </Para>

      <Code>{`const arr = [1, 5, 10, 20, 40]
delete arr[2]   // true
console.log(arr)    // [1, 5, undefined, 20, 40]`}</Code>

      <Note>
        To manipulate arrays, array methods like <B>splice()</B> should be used.
      </Note>
    </>
  );
};

export default JSUnaryDeleteOperator;
