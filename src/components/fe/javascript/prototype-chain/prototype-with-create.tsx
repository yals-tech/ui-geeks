import React from 'react';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, IU, NewLine, OrderedList } from '../../../shared/util/util';

const pros = [
  {
    label: (
      <>
        Allows <B>directly setting</B> <I>[[Prototype]]</I> of an object at the
        creation time, which permits the runtime to further optimize.
      </>
    )
  },
  {
    label: (
      <>
        Allows creation of objects without a prototype, using
        <BI>Object.create(null)</BI>.
      </>
    )
  }
];

const cons = [
  {
    label: (
      <>
        It can slow down object initialization, which
        <B>may cause performance</B> <Space />
        issues.
      </>
    )
  }
];

const JSPrototypeWithCreate = () => {
  return (
    <>
      <Heading as='h2'>Object.create()</Heading>
      <Para>
        This method <BI>reassigns</BI> the <I>prototype</I> property, and for
        this reason it is considered as <B>bad practice</B>.
      </Para>

      <Para>
        <IU>Syntax:</IU>
        <NewLine />
        DerivedClass.prototype =
        <B>
          {`Object.`}
          create
        </B>
        (BaseClass.prototype);
      </Para>

      <Para>
        <IU>
          Pros of using <BI>Object.create()</BI>
        </IU>
        <OrderedList unOrdered items={pros} />
      </Para>

      <Para>
        <IU>
          Cons of using <BI>Object.create()</BI>
        </IU>
        <OrderedList unOrdered items={cons} />
      </Para>
    </>
  );
};

export default JSPrototypeWithCreate;
