import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, IU, NewLine } from '../../../shared/util/util';

const JSIterables = () => {
  return (
    <>
      <Heading as='h2'>Iterables</Heading>

      <Para>
        An <I>object</I> is <BI>iterable</BI>, if it defines its iteration
        behavior. In order to be <I>iterable</I>, an <I>object</I> must
        implement the <BI>@@iterator</BI> method. This means that the
        <Space /> <I>object</I> must have a property with a
        <BI>Symbol.iterator</BI> <I>key</I>. It may be possible to iterate over
        an iterable more than once or only once.
      </Para>

      <Para>
        <BI>Iterables</BI> which can iterate <B>only once</B> (such as <Space />
        <I>Generators</I>) return <BI>this</BI> from their <BI>@@iterator</BI>
        <Space /> method, whereas <BI>iterables</BI> which can be iterated
        <B>many times</B> must return a <BI>new iterator</BI> on each invocation
        of <BI>@@iterator</BI>.
      </Para>

      <Para>
        <IU>Example 1:</IU>
        <NewLine />
        Implementing an <I>iterable</I> which can iterate <B>only once</B>.
      </Para>
      <Para>
        <Para>
          In below code, statement <BI>{`it[Symbol.iterator]() === it`}</BI>
          <Space /> returned <B>true</B>, i.e., <I>@@iterator</I> method is
          returning itself, which shows this iterate only once.
        </Para>
        <Code>
          {`function* makeIterator() {
  yield 1;
  yield 2;
}
const it = makeIterator();

for(const itm of it) { console.log(itm); }
// Output:
// 1
// 2
it[Symbol.iterator]() === it;  // true
`}
        </Code>
        <Para>
          Also, If we try to replicate the
          <BI>for…of loop</BI>, it will not print in the console again, proving
          that it only iterates once.
        </Para>

        <Code>
          {`const it = makeIterator();
for(const itm of it) { console.log(itm); }
// Output:
// 1
// 2

for(const itm of it) { console.log(itm); }
// Not output on console
`}
        </Code>
      </Para>

      <Para>
        <IU>Example 2:</IU>
        <NewLine />
        Implementing an <I>iterable</I> which can iterate <B>many times</B>.
        <Code>
          {`function* makeIterator() {
  yield 1;
  yield 2;
}

const it = makeIterator();
it[Symbol.iterator] = function*() {
  yield 1;
  yield 2;
}

for(const itm of it) { 	console.log(itm); }
// Output:
// 1
// 2

for(const itm of it) { 	console.log(itm); }
// Output:
// 1
// 2
`}
        </Code>
        <Para>
          In above code, both <BI>for…of</BI> loop printed numbers on the
          console, proving that it can iterate many times.
        </Para>
      </Para>

      <Para>
        <B>next()</B>: The <I>next()</I> method also accepts a parameter value,
        which can be used to modify the internal state of the generator. A value
        passed to <I>next()</I> will be received by <BI>yield</BI>. A value
        passed to the <B>first invocation</B> of <I>next()</I> is always
        ignored.
      </Para>

      <Para>
        <IU>Exmaple:</IU>
        <Code>
          {`function* fibonacci() {
  let current = 0;
  let next = 1;
  while(true) {
    const reset = yield current;
    // Value passed to next() will be read here by yield current.

    [current, next] = [next, next + current];
    if(reset) {
      current = 0;
      next = 1;
    }
  }	
}

const sequence = fibonacci();
sequence.next()
console.log(sequence.next().value);  // 1
sequence.next()
console.log(sequence.next().value);  // 2
sequence.next()
console.log(sequence.next().value);  // 5
sequence.next(true);  // Resetting here
console.log(sequence.next().value);  // 1
`}
        </Code>
      </Para>

      <Para>
        <B>return()</B> : Generators have a <BI>return(value)</BI>
        <Space /> method that returns the given value and finishes the generator
        itself, and allows the generator to perform any cleanup tasks when
        combined with <BI>try…finally block</BI>. If the <BI>yield</BI>
        <Space /> expression is wrapped in a <I>try…finally</I> block, the
        control flow doesn't exit the <I>function body</I>, but proceeds to the
        <I>finally</I> block instead.
      </Para>
      <Para>
        <IU>Example:</IU>
        <NewLine />
        <Code>
          {`function* generatorFunc() {
  yield 1;
  yield 2;
}

const g = generatorFunc();
g.next(); // { value: 1, dne: false }

g.return("return value"); // { value: "return value", done: true }
// Finishes the generator and returns the value passed to return() method.
`}
        </Code>
        <Para>
          Below code finishes the generator and returns the value passed to
          return() method.
          <Code>
            {`g.return("return value");
// { value: "return value", done: true }`}
          </Code>
        </Para>
        <Para>
          Because generator was terminated by <BI>g.return("return value")</BI>
          <Space /> statement. Now, if we call <I>next()</I> methods, we'll get{' '}
          <I>value</I> as <BI>undefined</BI>.
        </Para>
        <Code>{`g.next();	
// { value: undefined, done: true }`}</Code>
      </Para>
    </>
  );
};

export default JSIterables;
