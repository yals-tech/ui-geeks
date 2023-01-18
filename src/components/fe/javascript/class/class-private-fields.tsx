import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, IU, NewLine, OrderedList } from '../../../shared/util/util';

const instanceMember = [
  {
    label: 'Can only be accessed inside the class.'
  },
  {
    label: `Can't be inherited`
  }
];

const staticMmeber = [
  {
    label: (
      <>
        Are only accessible on the class itself or in <BI>this</BI>
        <Space /> context of static members.
      </>
    )
  },
  {
    label: `Can't be inherited`
  }
];

const JSClassPrivateField = () => {
  return (
    <>
      <Heading as='h2'>Private Field Declarations</Heading>
      <Para>
        Private class members can be created by using <B>"#"</B> prefix. The
        privacy encapsulation of these class features is enforced by JavaScript
        itself. The <B>#</B> is a part of the member name. Private fields can't
        be neither declared nor deleted inside the constructor. It is a syntax
        error to access private members outside the class. Also private members
        can't be inherited.
      </Para>

      <Para>
        Private instance/prototype members:
        <OrderedList items={instanceMember} />
      </Para>

      <Para>
        Private static members:
        <OrderedList items={staticMmeber} />
      </Para>

      <Para>
        <Code>
          {`class User {
    // "#GROUP" is a private property
    #GROUP = "Student";
    static MINIMUM_AGE = 18;
    constructor(name, age) {
        this.name = name;
        this.age = age;

        delete this.#GROUP;
        this.#privatePropInConstructor = 10;
        /* If we try to delete or declare new private properties 
            inside the constructor, it will throw an error.
        */
    }

    // "#getUserDetail()" is a private method
    #getUserDetail() { return this.name + " - " + this.age; }
    getUserInfo() { return this.#GROUP + ":" + this.#getUserDetail(); }
}
`}
        </Code>

        <Para>
          <IU>Example 1:</IU>
          <Code>{`const usr = new User("John", 25);
usr.getUserInfo();  // "Student: John - 25"
`}</Code>
        </Para>

        <Para>
          <IU>Example 2:</IU>
          <NewLine />
          Below code will throw error:
          <B>
            "SyntaxError: Private field #GROUP must be declared in an enclosing
            class"
          </B>
          , because <I>private members</I> can't be accessed outside the class.
          <Code>{`console.log(User.#GROUP);`}</Code>
        </Para>
      </Para>
    </>
  );
};

export default JSClassPrivateField;
