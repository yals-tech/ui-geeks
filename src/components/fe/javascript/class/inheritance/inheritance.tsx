import React from 'react';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import JSClassInheritanceIntro from './inheritance-intro';
import JSClassInheritanceMixIns from './min-ins';

const JSClassInheritance = () => {
  return (
    <>
      <Heading as='h2'>Inheritance</Heading>
      <Para>
        <JSClassInheritanceIntro />
        <JSClassInheritanceMixIns />
      </Para>
    </>
  );
};

export default JSClassInheritance;
