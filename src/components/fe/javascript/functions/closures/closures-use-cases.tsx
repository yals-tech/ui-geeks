import React from 'react';
import Code from '../../../../shared/code/code';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import Space from '../../../../shared/space/space';
import { B, BI, I, NewLine, OrderedList } from '../../../../shared/util/util';

const example1PublicMember = [
  {
    label: (
      <>
        <B>increment()</B> function
      </>
    )
  },
  {
    label: (
      <>
        <B>decrement()</B> function
      </>
    )
  },
  {
    label: (
      <>
        <B>value()</B> function
      </>
    )
  }
];

const example1PrivateMember = [
  {
    label: (
      <>
        <B>privateCtr</B> variable
      </>
    )
  },
  {
    label: (
      <>
        <B>changeBy()</B> function
      </>
    )
  }
];

const JSFunctionClosureUseCases = () => {
  return (
    <>
      <Para>
        One of the main use cases for closures is creating
        <BI>private methods/properties</BI> in functions.
      </Para>

      <Heading as='h2'>
        Creating Private Methods/Properties using Closures
      </Heading>

      <Para>
        JavaScript, prior to <I>classes</I>, didn't have a native way of
        declaring private methods, but it was possible to emulate private
        methods using closures.
      </Para>

      <Para>Let's try to understand with the help of an example:</Para>

      <Code>
        {`const makeCounter = function() {
    // private members
    let privateCtr = 0;
    function changeBy(val) { privateCtr += val; }
    // public members, returned from here
    return {
        increment() { changeBy(1); },
        decrement() { changeBy(-1); },
        value() { return privateCtr; }
  }
}

const counter = makeCounter();
counter.value();    // 0
counter.increment();
counter.value();    // 1
counter.decrement();
counter.value();    // 1`}
      </Code>
      <NewLine />

      <Para>
        The lexical environment contains two private members:
        <OrderedList items={example1PrivateMember} />
      </Para>

      <Para>
        The private members can't be accessed from outside the{' '}
        <I>makeCounter()</I> <Space />
        function. Instead, public members should be used to access the private
        members.
      </Para>

      <Para>
        Below are the public functions returned from <I>makeCounter()</I>:
        <OrderedList items={example1PublicMember} />
      </Para>

      <Para>
        Above public functions are closures that share the same lexical
        environment.
      </Para>
    </>
  );
};

export default JSFunctionClosureUseCases;
