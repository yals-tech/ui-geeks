import React from 'react';
import { IOrderedListItemType } from '../../../../types/common';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import { B, BI, I, NewLine, OrderedList } from '../../../shared/util/util';

const JSVariableNamingRules = () => {
  const namingRules: Array<IOrderedListItemType> = [
    {
      label: (
        <>
          Prefer <B>camelCase</B> naming convention. For example:{' '}
          <I>projectName, userPhone</I>, etc.
        </>
      )
    },
    {
      label: (
        <>
          Prefer using <B>underscore(_)</B> for defining multi word names. For
          example:
          <I>customer_Address, inventory_Management_Module</I>, etc.
        </>
      )
    },
    {
      label: (
        <>
          <B>Don't use underscore</B> (_) at the start of the name, because in
          certain JavaScript constructs, it is used to declare global variables.
          For example: <I>_globalUser</I>.
        </>
      )
    },
    {
      label: (
        <>
          Make variable names <B>intuitive</B>, so they describe the data they
          hold.
        </>
      )
    },
    {
      label: (
        <>
          Variable names are <B>case sensitive</B>. For example
          <BI>myVar</BI> is different from <BI>myvar</BI>.
        </>
      )
    },
    {
      label: (
        <>
          Variable names <B>starting with numbers are not allowed</B>. For
          example: <I>9varName</I> would be an invalid name.
        </>
      )
    },
    {
      label: (
        <>
          <B>Reserved</B> keywords should <B>not</B> be used. For example: for
          would be an invalid name.
        </>
      )
    }
  ];

  return (
    <>
      <Heading as='h2'>Variable Naming Rules</Heading>

      <Para>
        Generally, we should stick to just using Latin characters (0-9, a-z,
        A-Z) and the underscore character. There are some rules/conventions to
        be followed by naming a variable instance.
        <NewLine />
        <NewLine />
        <OrderedList unOrdered expanded items={namingRules} />
      </Para>
    </>
  );
};

export default JSVariableNamingRules;
