import React, { Fragment } from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, IU, NewLine } from '../../../shared/util/util';
import YALSBadge from '../../../shared/yals-badge/yals-badge';
import { YALSButtonVariantTypes } from '../../../shared/yals-button/yals-button.types';
import YALSTable from '../../../shared/yals-table/yals.table';

const operatorTHList = [
  {
    column: 'operatorType',
    label: 'Operator type'
  },
  {
    column: 'operator',
    label: 'Individual operators'
  }
];

const operatorTDList = [
  {
    operatorType: 'member',
    operator: (
      <>
        {['.', '[]'].map((itm: string) => (
          <Fragment key={itm}>
            <YALSBadge content={itm} bg={YALSButtonVariantTypes.Secondary} />
            <Space />
          </Fragment>
        ))}
      </>
    )
  },

  {
    operatorType: 'call/create instance',
    operator: (
      <>
        {['( )', 'new'].map((itm: string) => (
          <Fragment key={itm}>
            <YALSBadge content={itm} bg={YALSButtonVariantTypes.Secondary} />
            <Space />
          </Fragment>
        ))}
      </>
    )
  },
  {
    operatorType: 'negation/increment',
    operator: (
      <>
        {['!', '~', '-', '+', '++', '--', 'typeof', 'void', 'delete'].map(
          (itm: string) => (
            <Fragment key={itm}>
              <YALSBadge content={itm} bg={YALSButtonVariantTypes.Secondary} />
              <Space />
            </Fragment>
          )
        )}
      </>
    )
  },
  {
    operatorType: 'multiply/divide',
    operator: (
      <>
        {['*', '/', '%'].map((itm: string) => (
          <Fragment key={itm}>
            <YALSBadge content={itm} bg={YALSButtonVariantTypes.Secondary} />
            <Space />
          </Fragment>
        ))}
      </>
    )
  },
  {
    operatorType: 'addition/subtraction',
    operator: (
      <>
        {['+', '-'].map((itm: string) => (
          <Fragment key={itm}>
            <YALSBadge content={itm} bg={YALSButtonVariantTypes.Secondary} />
            <Space />
          </Fragment>
        ))}
      </>
    )
  },
  {
    operatorType: 'bitwise shift',
    operator: (
      <>
        {['<<', '>>', '>>>>'].map((itm: string) => (
          <Fragment key={itm}>
            <YALSBadge content={itm} bg={YALSButtonVariantTypes.Secondary} />
            <Space />
          </Fragment>
        ))}
      </>
    )
  },
  {
    operatorType: 'relational',
    operator: (
      <>
        {['<', '<=', '>', '>=', 'in', 'instanceof'].map((itm: string) => (
          <Fragment key={itm}>
            <YALSBadge content={itm} bg={YALSButtonVariantTypes.Secondary} />
            <Space />
          </Fragment>
        ))}
      </>
    )
  },
  {
    operatorType: 'equality',
    operator: (
      <>
        {['==', '!=', '===', '!=='].map((itm: string) => (
          <Fragment key={itm}>
            <YALSBadge content={itm} bg={YALSButtonVariantTypes.Secondary} />
            <Space />
          </Fragment>
        ))}
      </>
    )
  },
  {
    operatorType: 'bitwise-and',
    operator: (
      <>
        <YALSBadge content={'&'} bg={YALSButtonVariantTypes.Secondary} />
        <Space />
      </>
    )
  },
  {
    operatorType: 'bitwise-xor',
    operator: (
      <>
        <YALSBadge content={'^'} bg={YALSButtonVariantTypes.Secondary} />
        <Space />
      </>
    )
  },
  {
    operatorType: 'bitwise-or',
    operator: (
      <>
        <YALSBadge content={'|'} bg={YALSButtonVariantTypes.Secondary} />
        <Space />
      </>
    )
  },
  {
    operatorType: 'logical-and',
    operator: (
      <>
        <YALSBadge content={'&&'} bg={YALSButtonVariantTypes.Secondary} />
        <Space />
      </>
    )
  },
  {
    operatorType: 'logical-or',
    operator: (
      <>
        <YALSBadge content={'||'} bg={YALSButtonVariantTypes.Secondary} />
        <Space />
      </>
    )
  },
  {
    operatorType: 'conditional',
    operator: (
      <>
        <YALSBadge content={'? :'} bg={YALSButtonVariantTypes.Secondary} />
        <Space />
      </>
    )
  },
  {
    operatorType: 'assignment',
    operator: (
      <>
        {[
          '=',
          '+=',
          '-=',
          '*=',
          '/=',
          '%=',
          '<<=',
          '>>>=',
          '&=',
          '^=',
          '|=',
          '&&=',
          '||=',
          '??='
        ].map((itm: string) => (
          <React.Fragment key={itm}>
            <YALSBadge content={itm} bg={YALSButtonVariantTypes.Secondary} />
            <Space />
          </React.Fragment>
        ))}
      </>
    )
  },
  {
    operatorType: 'comma',
    operator: (
      <>
        <YALSBadge content={','} bg={YALSButtonVariantTypes.Secondary} />
        <Space />
      </>
    )
  }
];

const JSOperatorPrecedence = () => {
  return (
    <>
      <Heading as='h3'>Operator Precedence</Heading>
      <Para>
        Some operators are applied before others, when calculating the result,
        this is called <BI>operator precedence</BI>. The operator precedence in
        JavaScript is the same as was taught in math. The calculation is always
        evaluated from <BI>left to right</BI>.
      </Para>

      <Para>
        <B>Operator Precedence Table</B>
        <NewLine />
        <NewLine />
        <YALSTable thList={operatorTHList} tdList={operatorTDList}></YALSTable>
      </Para>

      <Para>
        <IU>Evaluate below expression:</IU>
        <NewLine />
        50 + 10 / 8 + 2
        <NewLine />
        <B>Step 1:</B> 50 + <IU>10 / 8</IU> + 2
        <NewLine />
        <B>Step 2:</B> <IU>50 + 1.25</IU> + 2
        <NewLine />
        <B>Step 3:</B> <IU>51.25 + 2</IU>
        <NewLine />
        <B>Result:</B> 53.25
      </Para>

      <Code>{`50 + 10 / 8 + 2   // 53.25`}</Code>
    </>
  );
};

export default JSOperatorPrecedence;
