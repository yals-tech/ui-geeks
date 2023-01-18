import React from 'react';
import Heading from '../../../../../shared/heading/heading';
import Para from '../../../../../shared/para/para';
import JSValueOfThisClassContextIntro from './class-context-intro';
import JSValueOfThisDerivedClassContext from './derived-class-context';
import JSNewOperator from './new-operator';
import JSThisInEventListener from './this-in-event';
const JSValueOfThisInClassContext = () => {
  return (
    <>
      <Heading as='h3'>Value of "this" in the Class Context</Heading>
      <Para>
        <JSValueOfThisClassContextIntro />
        <JSValueOfThisDerivedClassContext />
        <JSNewOperator />
        <JSThisInEventListener />
      </Para>
    </>
  );
};

export default JSValueOfThisInClassContext;
