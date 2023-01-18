import React from 'react';
import Code from '../../../../../shared/code/code';
import Heading from '../../../../../shared/heading/heading';
import Note from '../../../../../shared/note/note';
import Para from '../../../../../shared/para/para';
import Space from '../../../../../shared/space/space';
import { B, BI, I, IU, NewLine } from '../../../../../shared/util/util';
const JSValueOfThisDerivedClassContext = () => {
  return (
    <>
      <Heading as='h3'>Value of "this" in Derived Classes</Heading>
      <Para>
        Unlike base class constructors, derived class constructors have no
        initial <I>this</I> binding. Calling <BI>super()</BI> creates <Space />
        <I>this</I> binding within the constructor. The <I>super()</I> call is
        eventually equivalent to:
        <NewLine />
        <BI>this = new Base()</BI>.
      </Para>

      <Para>
        Derived classes must not return before calling <I>super()</I>, unless
        they return an <BI>Object</BI> or have <BI>no constructor</BI>.
        Referring to <BI>this</BI> before calling <I>super()</I> is derived
        class will throw an error.
      </Para>

      <Para>
        <IU>Example 1:</IU>
        <Para>
          Below exmaple will work because the <I>derived class</I> does not have
          a<I>constructor</I>.
        </Para>
        <Code>
          {`class Base { }
class GoodDerived extends Base { }
new GoodDerived();
`}
        </Code>
      </Para>

      <Para>
        <IU>Example 2:</IU>
        <Para>
          Below exmaple will work because because the <I>derived class</I>
          <BI>constructor returns an object</BI>, therefore, <BI>this</BI> will
          be initialized with
          <B>{`{ a: 5 }`}</B>.
        </Para>
        <Code>
          {`class AlsoGoodDerived extends Base { 
  constructor() { return { a : 5 }; }
}
new AlsoGoodDerived();
`}
        </Code>
      </Para>

      <Para>
        <IU>Example 2:</IU>
        <Para>
          Below exmaple throws error, because <I>derived class</I> has
          <BI>constructor</BI>, but neither it called <BI>super()</BI>, nor it
          returned an <BI>object</BI>.
        </Para>
        <Code>
          {`class BadDerived extends Base { 
  constructor() { } 	
}
new BadDerived();
`}
        </Code>
      </Para>

      <Note>
        Classes are always <B>strict</B> mode code, therefore calling methods
        with an <B>undefined this</B>, will throw an error.
      </Note>
    </>
  );
};

export default JSValueOfThisDerivedClassContext;
