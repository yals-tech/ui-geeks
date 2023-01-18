import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import { B, BI, I, IU } from '../../../shared/util/util';

const JSClassHoisting = () => {
  return (
    <>
      <Heading as='h2'>Class Hoisting</Heading>

      <Para>
        Classes defined using a <BI>class declaration</BI> are <I>hoisted</I>,
        which means that JavaScript has a reference to the class. However, class
        is not <I>initialized</I> by default, so any code that uses class before
        its initialization will throw a <B>ReferenceError</B>. On the other
        hand, <BI>class expressions are not hoisted</BI>.
      </Para>

      <Para>
        <IU>Example:</IU>
        <Code>
          {`const user = new User("John");  // ReferenceError

class User{
  constructor(name) { this.name = name; }
  showDetail() { 
    console.log(\`Username: \${this.name}\`); 
  }
}
`}
        </Code>
      </Para>
    </>
  );
};

export default JSClassHoisting;
