import React from 'react';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import { BI, NewLine } from '../../../../shared/util/util';
import YALSTable from '../../../../shared/yals-table/yals.table';

const operatorTHList = [
  {
    column: 'operator',
    label: 'Operator',
    width: '100px'
  },
  {
    column: 'description',
    label: 'Description'
  },
  {
    column: 'example',
    label: 'Example'
  }
];

const operatorTDList = [
  {
    operator: '<',
    description: `Less Than`,
    example: `2 < 5`
  },
  {
    operator: '>',
    description: `Greater Than`,
    example: `5 > 2`
  },
  {
    operator: '<=',
    description: `Less Than Equal To`,
    example: `2 <= 2`
  },
  {
    operator: '>=',
    description: `Greater Than Equal To`,
    example: `5 >= 2`
  }
];

const JSBinaryRelationOperators = () => {
  return (
    <>
      <Para>
        <Heading as='h3'>Relational Operators</Heading>
        Used for comparing two values. It compares the two operands and returns
        a boolean value, based on whether comparison is <BI>true</BI> or{' '}
        <BI>false</BI>.
        <NewLine />
        <NewLine />
        <YALSTable thList={operatorTHList} tdList={operatorTDList}></YALSTable>
      </Para>
    </>
  );
};

export default JSBinaryRelationOperators;
