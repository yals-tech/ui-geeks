import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { BI, I, IU, NewLine } from '../../../shared/util/util';

const JSClassExpression = () => {
  return (
    <>
      <Heading as='h2'>Class Expression</Heading>
      <Para>Class expressions can be named or unnamed.</Para>

      <IU>Example of named class expression:</IU>

      <Code>{`const User = class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  showName() {
    console.log(this.firstName + “-” + this.lastName);
  }
}
`}</Code>

      <Para>
        <IU>Example of unnamed class expression:</IU>
        <Code>
          {`const User = class {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  showName() {
    console.log(this.firstName + "-" + this.lastName);
  }
}
`}
        </Code>
      </Para>

      <Para>
        Class definition is <BI>not hoisted</BI>, which means <I>class</I> must
        be defined before they are constructed with the <BI>new</BI> operator.
      </Para>

      <Code>
        {`const usr = new User("JavaScript", "Language"); // Reference Error
class User { /*.......... */ }
`}
      </Code>

      <NewLine />
      <Para>
        The body of a class is executed in <BI>strict mode</BI>, therefore, all
        restrictions of <I>strict mode</I> are applicable to the <BI>class</BI>
        <Space /> body.
      </Para>
    </>
  );
};

export default JSClassExpression;
