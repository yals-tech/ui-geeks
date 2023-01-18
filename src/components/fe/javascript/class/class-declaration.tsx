import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';

const JSClassDeclaration = () => {
  return (
    <>
      <Heading as='h2'>Class Declaration</Heading>
      <Code>{`class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  showName() {
    console.log(this.firstName + "-" + this.lastName);
  }
}
`}</Code>
    </>
  );
};

export default JSClassDeclaration;
