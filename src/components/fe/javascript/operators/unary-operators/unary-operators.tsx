import React from 'react';
import Heading from '../../../../shared/heading/heading';
import JSUnaryDeleteOperator from './delete-operators';
import JSUnaryInOperator from './in-operator';
import JSUnaryInstanceOfOperator from './instanceof-operator';
import JSUnaryTypeOfOperator from './typeof-operator';
import JSUnaryNotOperator from './unary-not-operators';
import JSUnaryOperatorsIntro from './unary-operators-intro';
import JSUnaryPlusOperator from './unary-plus-operators';
import JSUnaryVoidOperator from './void-operator';

const JSUnaryOperators = () => {
  return (
    <>
      <Heading as='h2'>Unary Operators</Heading>
      <JSUnaryOperatorsIntro />
      <JSUnaryNotOperator />
      <JSUnaryPlusOperator />
      <JSUnaryDeleteOperator />
      <JSUnaryTypeOfOperator />
      <JSUnaryVoidOperator />
      <JSUnaryInOperator />
      <JSUnaryInstanceOfOperator />
    </>
  );
};

export default JSUnaryOperators;
