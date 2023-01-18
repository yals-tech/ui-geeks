import React from 'react';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import { BI, OrderedList } from '../../../shared/util/util';
import JSConstVariable from './const-variable';
import JSLetVariable from './let-variable';
import JSLiterals from './literals';
import JSTypeConversion from './type-conversion';
import JSVarVariable from './var-variable';
import JSVariableHoisting from './variable-hoisting';
import JSVariableScope from './variable-scope';
import JSVariableEvaluation from './variables-evaluation';
import JSVariableNamingRules from './variables-naming-rules';

const JSVariables = () => {
  return (
    <>
      <Heading as='h2'>Variables</Heading>

      <Para>
        Variables are used as symbolic names for values. The names of variables
        are called <BI>identifiers</BI>. New variables in JavaScript are
        declared using one of the below keywords:
        <OrderedList
          unOrdered
          items={[
            {
              label: 'let'
            },
            {
              label: 'const'
            },
            {
              label: 'var'
            }
          ]}
        />
      </Para>

      <JSLetVariable />

      <JSConstVariable />

      <JSVarVariable />

      <JSVariableNamingRules />

      <JSVariableEvaluation />

      <JSVariableScope />

      <JSVariableHoisting />

      <JSTypeConversion />

      <JSLiterals />
    </>
  );
};

export default JSVariables;
