import React, { memo } from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import { IOrderedListItemType } from '../../../../types/common';
import Code from '../../../shared/code/code';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, Indent, IU, NewLine } from '../../../shared/util/util';
import YalsQuestionnaire from '../../../shared/yals-questionnaire/yals-questionnaire';
import YALSSummary from '../../../shared/yals-summary/yals-summary';
import { ExceptionHandlingQuestions } from '../questionnaires/exception-questionnaire';

const summaryItems: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        The <BI>try</BI>, <BI>catch</BI> and <BI>finally</BI> statements are
        used to handle <I>runtime exceptions</I>.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>throw</BI> statement specifies the value to be thrown, can be
        any valid value like <I>number, string, object</I>, etc.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>finally</BI> block contains statements to be executed after
        <Space /> <BI>try</BI> and <BI>catch</BI> block executes. If a value is
        returned from the finally block, it becomes the return value of the
        entire <I>try...catch…finally</I> block.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>Error()</BI> constructor throws more succinct messages. Contains
        <BI>"name"</BI>, <BI>"message"</BI>, <BI>"cause"</BI>, etc with error
        details.
      </>
    )
  }
];

const JSExceptionHandling = () => {
  useDOMTitle('UI-Geeks: JavaScript | Exception Handling');

  return (
    <Container>
      <Heading>Exception Handling</Heading>

      <Para>
        Code <I>exceptions</I> can be thrown using the <BI>throw</BI> statement
        and can be handled using <BI>try…catch…finally</BI> statements.
      </Para>

      <Para>
        <Heading as='h2'>throw</Heading>

        <Para>
          A <BI>throw statement</BI> specifies the value to be thrown. Any value
          can be thrown like numbers, strings, objects or any other valid
          <Space /> <I>literal</I>.
        </Para>

        <Para>
          <IU>Syntax:</IU>
          <NewLine />
          <Para>
            <B>throw</B> {`<value-to-throw>`}
          </Para>
        </Para>

        <Para>
          <IU>Example:</IU>
          <NewLine />
          <Para>
            <B>throw</B> "Error occurred in processing!"
          </Para>
        </Para>
      </Para>

      <Para>
        <Heading as='h2'>try block</Heading>

        <Para>
          The <BI>try</BI> block contains one or more statements which may{' '}
          <I>throw any error</I>.
        </Para>

        <Para>
          <IU>Syntax:</IU>
          <NewLine />
          <Para>
            <B>try</B> {`{`}
            <NewLine />
            <Indent>// statements</Indent>
            <NewLine />
            {`}`}
          </Para>
        </Para>
      </Para>

      <Para>
        <Heading as='h2'>catch block</Heading>

        <Para>
          The <BI>catch</BI> block contains statements that specify what to do
          if an <I>exception</I> is thrown from the <BI>try block</BI>.
        </Para>
      </Para>

      <Para>
        <Heading as='h2'>finally block</Heading>

        <Para>
          The <BI>finally</BI> block contains statements to be executed after
          the <BI>try</BI> and <BI>catch</BI> block executes. The <I>finally</I>
          <Space /> block will execute whether or not an exception is thrown.
        </Para>

        <Code>{`try {
  throw "Error thrown";
}
catch(e) {
  console.log(e); // "Error thrown"
}
finally {
  console.log("Finally block executed");
}
`}</Code>

        <Para>
          If the <I>finally</I> block returns a value, this value becomes the
          return value of the entire <I>try..catch..finally</I> block,
          overriding values returned from <I>try</I> or <I>catch</I> block, if
          any. Often used to perform cleanup tasks like closing connections,
          unsubscribing, etc.
        </Para>
      </Para>

      <Para>
        <IU>Example:</IU>
        <Para>
          In below example, value returned from <BI>catch</BI> block will be
          ignored, because <BI>finally</BI> block also returns a value.
        </Para>
        <Code>{`try {
  throw "Error thrown";
}
catch(e) {
  console.log(e); // "Error thrown"
  return false; // Return value will be ignored
}
finally {
  console.log("Finally block executed");
  return true;
}
`}</Code>
      </Para>

      <Para>
        <Heading as='h3'>Error() constructor</Heading>
        <Para>
          The <BI>Error()</BI> constructor can be used for throwing errors.
          Error thrown using <I>Error()</I> constructor contains many
          <Space /> <I>properties</I>, out of which we will use <BI>name</BI>
          <Space /> and <BI>message</BI> properties to get more refined error
          messages. The <BI>name</BI> property provides the general class of
          <B>Error</B>, while <BI>message</BI> provides a more succinct message.
        </Para>

        <Code>
          {`try {
  throw new Error("Error thrown");
}
catch(e) {
  console.log(e);
  // { name: "Error", message: "Error thrown"}
}
finally {
  console.log("Finally block executed");
}
`}
        </Code>
      </Para>

      <YALSSummary items={summaryItems} />

      <Para>
        <YalsQuestionnaire questions={ExceptionHandlingQuestions} />
      </Para>
    </Container>
  );
};

export default memo(JSExceptionHandling);
