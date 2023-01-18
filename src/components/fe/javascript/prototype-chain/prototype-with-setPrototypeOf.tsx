import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, IU, NewLine, OrderedList } from '../../../shared/util/util';

const pros = [
  {
    label: (
      <>
        Allows the <I>dynamic manipulation</I> and can even <Space />
        <I>force a prototype</I> on a<B>prototype-less</B> object created using
        <Space /> <I>Object.create(null)</I>.
      </>
    )
  }
];

const cons = [
  {
    label: (
      <>
        <BI>Ill performing</BI>, setting prototypes dynamically disrupts the
        optimization process.
      </>
    )
  },
  {
    label: (
      <>
        Might cause some JavaScript Engines to <BI>recompile</BI> the code for
        <Space /> <I>de-optimization</I>.
      </>
    )
  }
];

const JSPrototypeWithSetPrototypeOf = () => {
  return (
    <>
      <Heading as='h2'>Object.setPrototypeOf()</Heading>
      <Para>
        This method can be used to set the <I>[[Prototype]]</I> of the
        <Space /> <I>constructor.prototype</I>.
      </Para>

      <Para>
        <IU>Syntax:</IU>
        <NewLine />
        <B>
          {`Object.`}
          setPrototypeOf
        </B>
        {`(<destination-prototype>, <source-prototype>)`}
      </Para>

      <Para>
        <IU>Example</IU>

        <Code>{`function BaseClass { /*....*/ };
function DerivedClass { /*....*/ };
Object.setPrototypeOf(DerivedClass.prototype, BaseClass.prototype);
`}</Code>

        <Para>
          Above code sets the <I>BaseClass prototype</I> to <Space />
          <I>DerivedClass prototype</I>. This is equivalent to <BI>extends</BI>
          <Space /> of <BI>class</BI>.
        </Para>
      </Para>

      <Para>
        <IU>
          Pros of using <B>Object.setPrototypeOf()</B>
        </IU>
        <OrderedList unOrdered items={pros} />
      </Para>

      <Para>
        <IU>
          Cons of using <B>Object.setPrototypeOf()</B>
        </IU>
        <OrderedList unOrdered items={cons} />
      </Para>
    </>
  );
};

export default JSPrototypeWithSetPrototypeOf;
