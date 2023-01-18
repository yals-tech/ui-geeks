import React from 'react';
import Para from '../../../shared/para/para';
import { OrderedList } from '../../../shared/util/util';

const JSFunctionsIntro = () => {
  return (
    <>
      <Para>
        Functions are one of the core components of JavaScript. They are used to
        define a group of statements, so that they can be reused multiple times.
        They help reduce code size by encapsulating reusable code. Functions
        make code more readable/manageable by breaking code in logical blocks.
      </Para>

      <Para>
        There are two ways of creating a function:
        <OrderedList
          items={[
            {
              label: 'Function declaration'
            },
            {
              label: 'Function expression'
            }
          ]}
        />
      </Para>
    </>
  );
};

export default JSFunctionsIntro;
