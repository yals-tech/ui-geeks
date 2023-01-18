import React from 'react';
import Code from '../../../../../shared/code/code';
import { CodeLanguageTypes } from '../../../../../shared/code/code.types';
import Heading from '../../../../../shared/heading/heading';
import Note from '../../../../../shared/note/note';
import Para from '../../../../../shared/para/para';
import Space from '../../../../../shared/space/space';
import { B, BI, I } from '../../../../../shared/util/util';

const ReactClassShouldComponentUpdate = () => {
  return (
    <>
      <Heading as='h4'>shouldComponentUpdate()</Heading>
      <Para>
        This method is used to <B>skip the re-rendering</B> of the component.
        This method should <BI>return a boolean value</BI>. If it returns
        <Space /> <BI>false</BI>, then <B>UNSAFE_componentWillUpdate()</B>,
        <Space /> <B>render()</B> and <B>componentDidUpdate()</B> methods are
        not invoked.
      </Para>

      <Code
        language={CodeLanguageTypes.JSX}
      >{`shouldComponentUpdate(nextProps, nextState)`}</Code>

      <Para>
        The default behavior is to re-render on every change in <I>state</I> or
        <Space /> <I>props</I>. We can use this method to let React know if the
        output is not affected by the current change in state or props. React
        prefers to rely on default behavior in the majority of the cases.
      </Para>

      <Para>
        It is invoked <B>before rendering</B> when <B>new</B> <I>props</I> or
        <Space /> <I>state</I> are being received. Defaults to true. This method
        is not called for the <I>initial render</I> or when <I>forceUpdate()</I>
        <Space /> is used.
      </Para>

      <Note>
        Returning <B>false</B> does not prevent child components from
        re-rendering when <B>their</B> state changes.
      </Note>
    </>
  );
};

export default ReactClassShouldComponentUpdate;
