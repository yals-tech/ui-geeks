import React, { memo } from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import { IOrderedListItemType } from '../../../../types/common';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I } from '../../../shared/util/util';
import YALSQuestionaire from '../../../shared/yals-questionnaire/yals-questionnaire';
import YALSSummary from '../../../shared/yals-summary/yals-summary';
import { OperatorQuestions } from '../questionnaires/operator-questionnaire';
import JSBinaryOperators from './binary-operators/binary-operators';
import JSOperatorPrecedence from './operator-precedence';
import JSTernaryOperator from './ternary-operator';
import JSUnaryOperators from './unary-operators/unary-operators';

const summaryItems: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        JavaScript has <B>Unary</B>, <B>Binary</B> and <B>Ternary</B> operators.
      </>
    )
  },
  {
    label: (
      <>
        All <B>Binary</B> operators are <B>infix</B> expressions, where the
        <B>operator</B> is placed between <B>two operands</B>.
      </>
    )
  },
  {
    label: (
      <>
        Binary operators can be categorized under: <Space />
        <I>Arithmetic, Relational, Equality, Assignment, Logical</I> and
        <Space /> <I>Bitwise</I> operators.
      </>
    )
  },
  {
    label: (
      <>
        <B>Type Coercion</B> is automatic/implicit conversion of value from one
        type to another.
      </>
    )
  },
  {
    label: (
      <>
        <B>Strict Equality/InEquality</B> operators check operands without
        <Space /> <I>type-coercion</I>.
      </>
    )
  },
  {
    label: (
      <>
        <B>Logical AND</B> <I>({`&&`})</I> operator with <B>non-boolean</B>
        <Space /> values, returns <Space /> <BI>operand1</BI> if it can be
        converted to <BI>false</BI>, otherwise returns <BI>operand2</BI>.
      </>
    )
  },
  {
    label: (
      <>
        <B>Logical OR</B> (<I>||</I>) operator with <B>non-boolean</B> values,
        returns <BI>operand1</BI>, if it can be converted to <BI>true</BI>,
        otherwise returns <BI>operand2</BI>.
      </>
    )
  },
  {
    label: (
      <>
        <B>Short-circuit</B> can be used for conditional evaluation.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>delete</BI> operator deletes object property, but can't delete
        the entire object or <I>non-configurable</I> object.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>typeof</BI> operator returns a string indicating the <B>type</B>
        <Space /> of operand.
      </>
    )
  },
  {
    label: (
      <>
        The <B>ternary operator</B> takes three operands.
      </>
    )
  },
  {
    label: (
      <>
        JavaScript also provides <BI>void, in, instanceOf</BI> operators.
      </>
    )
  },
  {
    label: (
      <>
        Calculations are always evaluated from <B>left to right</B> under
        defined <B>operator precedence</B>.
      </>
    )
  }
];

const JSOperators = () => {
  useDOMTitle('UI-Geeks: JavaScript | Operators');

  return (
    <Container>
      <Heading>Operators</Heading>

      <Para>
        JavaScript has a rich set of operators, which can be used to perform
        operations on given values. JavaScript has both <B>binary</B> and
        <B>unary</B> <Space /> operators, and one special ternary operator.
      </Para>

      <JSBinaryOperators />
      <JSUnaryOperators />
      <JSTernaryOperator />
      <JSOperatorPrecedence />

      <YALSSummary items={summaryItems} />

      <Para>
        <YALSQuestionaire questions={OperatorQuestions} />
      </Para>
    </Container>
  );
};

export default memo(JSOperators);
