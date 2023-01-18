import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Note from '../../../shared/note/note';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, NewLine, OrderedList } from '../../../shared/util/util';

const JSAccessingObjects = () => {
  return (
    <>
      <Heading as='h2'>Accessing object properties</Heading>
      <Para>
        There are two ways of accessing properties of an object:
        <OrderedList
          unOrdered
          items={[
            {
              label: 'Using Dot Notation'
            },
            {
              label: 'Using Bracket Notation'
            }
          ]}
        />
      </Para>

      <Para>
        <Heading as='h4'>Using Dot Notation</Heading>
        <Para>
          This is considered best practice to access properties by
          <B>"dot notation"</B>, because this can be optimized by the JavaScript
          engine as well as the minifiers for performance benefits.
        </Para>

        <Para>
          <I>
            {`<objectName>`}
            <B>.</B>
            {`<property-key>`}
          </I>
        </Para>

        <Code>{`const obj = { name: "JavaScript", version: 6 };
const version = obj.version;    // 6`}</Code>
      </Para>

      <Para>
        <Heading as='h4'>Using Bracket Notation</Heading>
        <Para>
          The advantage of <B>"bracket notation"</B> is that <B>key</B> values
          can be calculated at run time, since <I>keys</I> are provided as
          <Space /> <I>strings</I>. Another advantage is that
          <BI>reserved keywords</BI> can be used as property <I>keys</I>.
        </Para>

        <Para>
          Although, this has a negative impact on performance, because this
          prevents optimizations that can be applied by JavaScript engine and
          minifiers.
        </Para>

        <Para>
          <I>
            {`<objectName>`}
            <B>[</B>
            {`<property-key>`}
            <B>]</B>
          </I>
        </Para>

        <Code>{`const obj = { name: "JavaScript", version: 6 };
const version = obj["version"]	// 6`}</Code>
      </Para>

      <Note>
        Starting in ECMAScript 5, reserved keywords may be used as
        property/attribute key, without wrapping them in quotes ("").
        <NewLine />
        <NewLine />
        {`const obj = { for : 10 };`}
        <NewLine />
        <B>"for"</B> is a reserved keyword, but now can be used as a property
        key.
      </Note>

      <Note>
        Note: Starting in ECMASCript 2015, object keys can be defined by the
        variable using bracket notation on being created.
        <NewLine />
        <NewLine />
        {`let versionKey = "version_key"`}
        <NewLine />
        {`const obj = { [versionKey] : 6 };`}
      </Note>
    </>
  );
};

export default JSAccessingObjects;
