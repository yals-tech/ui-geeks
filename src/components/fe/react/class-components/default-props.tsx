import React from 'react';
import Code from '../../../shared/code/code';
import { CodeLanguageTypes } from '../../../shared/code/code.types';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, IU } from '../../../shared/util/util';

const ReactDefaultProps = () => {
  return (
    <>
      <Heading as='h4'>defaultProps</Heading>
      <Para>
        It can be defined as a property on the component class itself, to set
        the <I>default props</I> for the class. This is used for <Space />
        <BI>undefined</BI> props, but not for <BI>null</BI> props.
      </Para>

      <Para>
        <IU>Example:</IU>
        <Code language={CodeLanguageTypes.JSX}>
          {`Welcome.defaultProps = {
  userName : "John"
}`}
        </Code>
      </Para>

      <Para>
        <Code language={CodeLanguageTypes.JSX}>
          {`const element = <Welcome />;`}
        </Code>
        Above will render <B>"Hello, John"</B>, because we didn't pass the value
        of <BI>userName</BI> at the time of calling component, therefore it will
        read the value from <BI>defaultProps</BI>.
      </Para>

      <Para>
        The <I>defaultProps</I> do not work for <BI>null</BI> values.
      </Para>
      <Para>
        <IU>Example:</IU>
        <Code language={CodeLanguageTypes.JSX}>
          {`const element = <Welcome userName={null} />;`}
        </Code>
        Above will render <B>"Hello, "</B>, because we passed the value of
        <Space /> <BI>userName</BI> as <BI>null</BI> at the time of calling
        component, therefore it will <B>ignore</B> the value of <Space />
        <BI>defaultProps</BI>.
      </Para>
    </>
  );
};

export default ReactDefaultProps;
