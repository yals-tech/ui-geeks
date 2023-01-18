import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Note from '../../../shared/note/note';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, IU, NewLine } from '../../../shared/util/util';

const JSGenerators = () => {
  return (
    <>
      <Heading as='h2'>Generator</Heading>

      <Para>
        The <B>Generator</B> function allows to define an <Space />
        <I>iterative algorithm</I> by writing a single function, whose execution
        is not continuous. Generator functions are written using the
        <BI>function*</BI> <Space /> syntax.
      </Para>

      <Para>
        When called, <I>generator functions</I> do not initially execute their
        code. Instead, they return a special type of <I>iterator</I>, called a
        <B>Generator</B>. When a value is consumed by calling generator's
        <BI>next()</BI> method, the generator function executes until it
        encounters the <BI>yield</BI> keyword.
      </Para>

      <Para>
        <IU>Example:</IU>
        <NewLine />
        <Code>
          {`function* makeRangeIterator(start = 0, end = Infinity, step =1) {
  let iterationCount = 0;
  for(let i = start, i < end; i++) {
    iterationCount++;
    yield i;
    // yield i returns current value of the sequence
  }
  return iterationCount;
  // iterationCount is returned on completion of execution
}`}
        </Code>

        <Code>
          {`const it = makeRangeIterator(1, 10, 2);
let result = it.next();
while(!result.done) {
  console.log(result.value);	// 1  3  5  7  9
  result = it.next();
  // it.next() executes the generator function for next sequence
}

console.log("Iterated over sequence of size: ", result.value);	// 5`}
        </Code>
      </Para>

      <Note>
        It is not possible to know <B>reflectively</B> whether a particular
        object is an <B>iterator</B>. Use <B>Iterables</B> to check it.
      </Note>
    </>
  );
};

export default JSGenerators;
