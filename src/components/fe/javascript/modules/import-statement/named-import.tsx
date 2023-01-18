import React from 'react';
import Code from '../../../../shared/code/code';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import Space from '../../../../shared/space/space';
import { BI } from '../../../../shared/util/util';

const JSModulesNamedImport = () => {
  return (
    <>
      <Heading as='h3'>Named import</Heading>
      <Para>
        As the name suggests, this is used to import the <BI>named export</BI>
        <Space />
        members.
        <Code>{`import { sayHi, sayBye } from "./exportedModule.js";`}</Code>
      </Para>
    </>
  );
};

export default JSModulesNamedImport;
