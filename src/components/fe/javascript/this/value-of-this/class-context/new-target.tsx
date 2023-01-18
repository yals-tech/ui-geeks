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

const newTargetList = [
  {
    label: (
      <>
        When called <B>with new</B>, it returns reference to the
        <Space /> <I>constructor</I> or <I>function</I>.
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

const JSNewTarget = () => {
  return (
    <>
      <Heading as='h5'>new.target</Heading>
      <Para>
        A function can know whether it is invoked with <I>new</I> by checking
        the
        <BI>"new.target"</BI> property. The <I>"new.target"</I> is
        <BI>undefined</BI> when the function is invoked
        <B>without a new operator</B>.
      </Para>

      <IU>Syntax:</IU>
      <NewLine />
      <BI>new.target</BI>

      <Para>
        <NewLine />
        <IU>Return Value:</IU>
        <NewLine />
        <OrderedList unOrdered items={newTargetList} />
      </Para>

      <Para>
        <IU>Example:</IU>
        <Code>{`function User(firstName, lastName) {
  if(!new.target) {
    throw "User() must be called with new operator";
  }
  this.firstName = firstName;
  this.lastName = lastName;
  this.showName = function() {
    console.log(this.firstName + "-" + this.lastName);
  }
}`}</Code>

        <Para>
          <BI>throw</BI> is used to throw/return error information.
        </Para>

        <Code>{`const user = User("JavaScript", "Language");`}</Code>
        <Para>
          Above code throws <I>error</I>,
          <B>"Error: User() must be called with new operator"</B>, because
          <BI>User()</BI> was called without a <BI>new</BI> operator.
        </Para>

        <Code>{`const user1 = User("JavaScript", "Language");
// "JavaScript-Language"`}</Code>
        <Para>
          Above code prints <I>"JavaScript-Language"</I>, because
          <BI>User()</BI> was called with a <BI>new</BI> operator.
        </Para>
      </Para>
    </>
  );
};

export default JSNewTarget;
