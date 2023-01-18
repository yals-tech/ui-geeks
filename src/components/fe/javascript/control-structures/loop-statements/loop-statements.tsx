import React from 'react';
import useDOMTitle from '../../../../../custom-hooks/use-dom-title';
import Heading from '../../../../shared/heading/heading';
import Note from '../../../../shared/note/note';
import Para from '../../../../shared/para/para';
import { B, BI, OrderedList } from '../../../../shared/util/util';
import JSDoWhileLoop from './do-while-loop';
import JSForInLoop from './for-in-loop';
import JSForLoop from './for-loop';
import JSForOfLoop from './for-of-loop';
import JSWhileLoop from './while-loop';

const loopStatement = [
  {
    label: (
      <>
        <BI>Initialization expression</BI>: Defines the starting point of the
        loop.
      </>
    )
  },
  {
    label: (
      <>
        <BI>Termination expression</BI>: Defines the end point of the loop.
      </>
    )
  },
  {
    label: (
      <>
        <BI>Update expression</BI>: Defined step value for the loop.
      </>
    )
  }
];

const JSLoops = () => {
  useDOMTitle('UI-Geeks: JavaScript | Looping/Iteration Statements');

  return (
    <>
      <Heading as='h2'>Looping/Iteration Statements</Heading>
      <Para>
        Iteration statements are used to iterate or loop a given set of
        statements until termination statement for the loop is reached. All
        loops consists of three expressions:
        <OrderedList items={loopStatement} />
      </Para>

      <Para>
        <JSWhileLoop />
        <JSDoWhileLoop />
        <JSForLoop />
        <JSForOfLoop />
        <JSForInLoop />
      </Para>

      <Note>
        loops can be terminated forcefully using <B>break</B>, <B>throw</B> or
        <B>return</B>.
      </Note>
    </>
  );
};

export default JSLoops;
