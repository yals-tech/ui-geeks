import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, IU, OrderedList } from '../../../shared/util/util';

const protoList = [
  {
    label: (
      <>
        By using <B>Objet.setPrototypeOf()</B>
      </>
    )
  },
  {
    label: (
      <>
        By using <B>Object.create()</B>
      </>
    )
  },
  {
    label: (
      <>
        By creating <B>class</B>
      </>
    )
  }
];

const protoSearch = [
  {
    label: (
      <>
        It searched for <I>"version"</I> in its <BI>own properties</BI> of
        <BI>"obj"</BI>, <B>Not found.</B>
      </>
    )
  },
  {
    label: (
      <>
        Then, it searches the <I>prototype chain</I> and finds the
        <Space />
        <I>"version"</I> in the
        <BI>__proto__</BI> <I>object</I> and returns <B>"6"</B>.
      </>
    )
  }
];

const traceList = [
  {
    label: (
      <>
        Searches <I>"year"</I> in <I>obj's</I> own properties, <B>Not Found.</B>
      </>
    )
  },
  {
    label: (
      <>
        Searches <I>"year"</I> in <I>obj's prototype chain</I> object,
        <B>Not Found.</B>
      </>
    )
  },
  {
    label: <BI>End of prototype chain reached.</BI>
  },
  {
    label: (
      <>
        Returns <BI>undefined.</BI>
      </>
    )
  }
];
const JSInheritingProperties = () => {
  return (
    <>
      <Heading as='h2'>Inheriting Properties</Heading>
      <Para>
        JavaScript <I>objects</I> are dynamic <B>"bags"</B> of properties, which
        are referred to as their <B>own properties</B>. When we try to access a
        property of an <I>object</I>, the property will not just be searched on
        the <I>object</I> but will also be searched on <I>prototype chain</I>,
        until either property is found or end of <I>prototype chain</I> is
        reached.
      </Para>

      <Code>{`const obj = {
  name: "JavaScript",
  __proto__: {
      version: 6
  }
}`}</Code>

      <Para>
        <Heading as='h5'>__proto__</Heading> It is one of the ways to
        <B>set the prototype of an object</B>. There are other ways to set the
        prototype:
        <OrderedList unOrdered items={protoList} />
      </Para>

      <Para>
        <IU>Example 1:</IU>
        <Code>{`console.log(obj.name) // "JavaScript"`}</Code>
      </Para>

      <Para>
        <IU>Example 2:</IU>
        <Code>{`console.log(obj.version)  // 6`}</Code>
        <Para>
          The reason for <B>"6"</B> being printed as <B>"obj.version"</B> is the
          <BI>recursive search</BI> in the <BI>obj</BI> and the <Space />
          <I>prototype chain</I>.
          <OrderedList items={protoSearch} />
        </Para>
      </Para>

      <Para>
        <IU>Example 3:</IU>
        <Para>Now, let's try to access a non-existing property.</Para>
        <Code>{`console.log(obj.year);  // undefined`}</Code>
        <Para>
          The reason for <BI>undefined</BI>, can be traced with the below steps:
          <OrderedList items={traceList} />
        </Para>
      </Para>

      <Para>
        <IU>Example 4:</IU>
        <Para>
          Let's see how properties/methods can be inherited using <Space />
          <I>__proto__</I>.
        </Para>
        <Code>{`const parent = {
  label: "Parent Label",
  show() { console.log(this.label); }
}

const child = { __proto__: parent };`}</Code>

        <Para>
          In below code, when <I>parent.show()</I> is called, <BI>this</BI>
          <Space />
          refers to the <Space /> <I>parent</I> object.
          <Code>{`parent.show();  // "Parent Label"`}</Code>
        </Para>

        <Para>
          In below code, when <I>child.show()</I> is called, <BI>this</BI>
          <Space /> refers to the <Space /> <I>child</I> object. The property
          <BI>"label"</BI> is <I>inherited</I> from the <BI>"parent"</BI>
          object.
          <Code>{`child.show(); // "Parent Label"`}</Code>
        </Para>

        <Para>
          Below code <BI>shadows</BI> the <I>"label"</I> property on the
          <Space /> <I>parent</I> by adding <I>"label"</I> property to the
          <Space /> <I>own properties</I> of the <I>child</I> object.
          <Code>{`child.label = "Child Label";
child.show(); // "Child Label"`}</Code>
        </Para>
      </Para>
    </>
  );
};

export default JSInheritingProperties;
