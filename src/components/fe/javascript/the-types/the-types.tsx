import React, { memo } from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import { IOrderedListItemType } from '../../../../types/common';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Note from '../../../shared/note/note';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, OrderedList } from '../../../shared/util/util';
import YALSQuestionaire from '../../../shared/yals-questionnaire/yals-questionnaire';
import YALSSummary from '../../../shared/yals-summary/yals-summary';
import { TheTypesQuestions } from '../questionnaires/types-questionnaire';
import JSBigIntType from './big-int-type';
import JSBooleanType from './boolean-type';
import JSNullType from './null-type';
import JSNumberType from './number-type';
import JSStringType from './string-type';
import JSSymbolType from './symbol-type';
import JSUndefinedType from './undefined-type';

const summaryItems: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        There are <B>7</B> primary types in JavaScript.
      </>
    )
  },
  {
    label: (
      <>
        <BI>Number</BI> type can store both integer and floating point numbers.
      </>
    )
  },
  {
    label: (
      <>
        Unary operator <B>"+"</B> can also be used to convert string to number.
      </>
    )
  },
  {
    label: (
      <>
        <BI>NaN</BI> is toxic, operations with NaN will always return NaN.
      </>
    )
  },
  {
    label: (
      <>
        <BI>BigInt</BI> represents integers with arbitrary precision.
      </>
    )
  },
  {
    label: (
      <>
        <BI>Symbol()</BI> always returns a unique value.
      </>
    )
  },
  {
    label: (
      <>
        <I>false, 0, empty string (""), NaN, null</I> and <I>undefined</I> are
        treated as
        <BI>false</BI>.
      </>
    )
  }
];

const dataTypes: Array<IOrderedListItemType> = [
  {
    label: 'Number'
  },
  {
    label: 'BigInt'
  },
  {
    label: 'String'
  },
  {
    label: 'Boolean'
  },
  {
    label: 'Symbol'
  },
  {
    label: 'Object',
    items: [
      {
        label: 'Function'
      },
      {
        label: 'Array'
      },
      {
        label: 'Date'
      },
      {
        label: 'RegExp'
      }
    ]
  },
  {
    label: 'null'
  },
  {
    label: 'undefined'
  }
];

const JSTypes = () => {
  useDOMTitle('UI-Geeks: JavaScript | Data Types');

  return (
    <Container>
      <Heading>Data types</Heading>

      <Para>
        Primarily there are <B>7</B> types in JavaScript:
        <OrderedList
          unOrdered
          items={[
            {
              label: 'Number, BigInt, String, Boolean, Function, Object, Symbol'
            }
          ]}
        />
      </Para>

      <Para>
        But there are couple of other types too available in JavaScript
        <OrderedList
          unOrdered
          items={[{ label: 'undefined, null, Array, Date, RegExp' }]}
        />
      </Para>

      <Para>
        Also <BI>functions</BI> <Space /> are just special type of
        <BI>object</BI> <Space /> (because functions are treated as first-class
        functions). On Summarizing all, the type diagram will look something
        like:
      </Para>

      <Para>
        <OrderedList items={dataTypes} unOrdered />
      </Para>

      <Note>
        There are some built-in <B>Error</B> types as well.
      </Note>

      <Para>Let's learn each type in detail.</Para>

      <JSNumberType />

      <JSStringType />

      <JSBigIntType />

      <JSSymbolType />

      <JSNullType />

      <JSUndefinedType />

      <JSBooleanType />

      <YALSSummary items={summaryItems} />

      <Para>
        <YALSQuestionaire questions={TheTypesQuestions} />
      </Para>
    </Container>
  );
};

export default memo(JSTypes);
