import React from 'react';
import Code from '../../../../../shared/code/code';
import Heading from '../../../../../shared/heading/heading';
import Para from '../../../../../shared/para/para';
import Space from '../../../../../shared/space/space';
import {
  B,
  BI,
  I,
  IU,
  NewLine,
  OrderedList
} from '../../../../../shared/util/util';
import JSNewTarget from './new-target';
import JSNewWithClass from './new-with-class';

const newWithFunction = [
  {
    label: (
      <>
        Creates a blank object.
        <NewLine />
        For convenience let's call it the <B>newInstance</B>.
      </>
    )
  },
  {
    label: (
      <>
        Points the
        <B>newInstance</B>'s <I>[[Prototype]]</I> to the constructor function's
        <BI>prototype</BI> property.
      </>
    )
  },
  {
    label: (
      <>
        Executes the <I>constructor</I> function with given <I>arguments</I>,
        binding <B>newInstance</B> as <BI>this</BI> context.
      </>
    )
  },
  {
    label: (
      <>
        If the constructor function returns a <BI>non-primitive value</BI>, the
        returned value becomes the result of the <BI>new</BI> expression.
        Otherwise, if the <I>constructor</I> function doesn't return anything or
        returns a <BI>primitive value</BI>, <B>newInstance</B> is returned
        instead. Normally constructors don't return a value, but they can choose
        to do so to override the object creation process.
      </>
    )
  }
];

const newTargetList = [
  {
    label: (
      <>
        When called <B>with new</B>, it returns reference to the
        <I>constructor</I> or <I>function</I>.
      </>
    )
  },
  {
    label: (
      <>
        When called <B>without new</B>, it returns <Space />
        <I>undefined</I>.
      </>
    )
  }
];

const JSNewOperator = () => {
  return (
    <>
      <Heading as='h3'>The "new" Operator</Heading>
      <Para>
        The <BI>new</BI> operator creates an instance of a <I>user-defined</I>
        <Space /> object type or of one of the built in object types that has a
        <BI>constructor function</BI>. For example: The <BI>Date</BI> object.
      </Para>

      <Para>
        <IU>Syntax:</IU>
        <NewLine />
        {`new `}
        <BI>constructor</BI>
        {`[([`}
        <BI>arguments</BI>
        {`])]`}
      </Para>

      <Para>
        <B>constructor</B>: A class or function that specifies the type of
        object instance. arguments: A list of values that the constructor will
        be called with.
      </Para>

      <Para>
        <B>arguments</B>: A list of values that the <BI>constructor</BI> will be
        called with.
      </Para>

      <Para>
        <Heading as='h4'>Using "new" with Functions</Heading>
        <Para>
          When a <I>function</I> is called with the <BI>new</BI> operator, the
          <Space /> <I>function</I> will be used as a <I>constructor</I>. The
          <BI>new</BI> operator will do following things:
        </Para>

        <OrderedList expanded items={newWithFunction} />
      </Para>

      <Para>
        <IU>Example 1:</IU>
        <Code>{`function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.showName = function() {
    console.log(this.firstName + "-" + this.lastName);
  }
}

const user = new User("JavaScript", "Language");
user.showName();  // "JavaScript-Language"`}</Code>

        <Para>
          Above example prints <I>"JavaScript-Language"</I>, because the
          <BI>new</BI> <Space /> operator binds <BI>this</BI> with the
          <BI>created instance</BI>.
        </Para>
      </Para>

      <Para>
        <IU>Example 2:</IU>
        <Code>{`function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.showName = function() {
    console.log(this.firstName + "-" + this.lastName);
  }
  return {a: 5};
}

const user = new User("JavaScript", "Language");
console.log(user);  // {a: 5}
user.showName();  // "Error usr.showName is not a function"
`}</Code>

        <Para>
          Above example throws <B>"Error"</B> while calling
          <BI>{`user.showName()`}</BI>, because the <BI>return</BI>
          <Space /> statement <BI>overrides the new response</BI> with the
          returned
          <BI>
            object
            {`{a: 5}`}
          </BI>{' '}
          and the returned object does not contain any function named
          <BI>"showName()"</BI>.
        </Para>
      </Para>

      <JSNewTarget />

      <JSNewWithClass />
    </>
  );
};

export default JSNewOperator;
