import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import { BI, IU } from '../../../shared/util/util';
import ReactDefaultProps from './default-props';

const ReactClassComponentProperties = () => {
  return (
    <>
      <Heading as='h3'>Class Properties</Heading>
      <ReactDefaultProps />

      <Heading as='h4'>displayName</Heading>
      <Para>
        The <BI>displayName</BI> string is used in debugging messages. Usually,
        we don't need to set it explicitly because it's inferred from the name
        of the function or class component.
      </Para>

      <Para>
        <IU>Example:</IU>
        <Code>{`Welcome.displayName = "Welcome Component";`}</Code>
      </Para>
    </>
  );
};

export default ReactClassComponentProperties;
