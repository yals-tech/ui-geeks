import React from 'react';
import Code from '../../../../shared/code/code';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import Space from '../../../../shared/space/space';
import { B, BI, I } from '../../../../shared/util/util';

const JSModulesDefaultImport = () => {
  return (
    <>
      <Heading as='h3'>Default import</Heading>
      <Para>
        As the name suggests, this is used to import the <BI>default export</BI>
        <Space />
        members.
        <Space />
        members.
        <Code>{`import greet from "./exportedModule.js";`}</Code>
      </Para>

      <Para>
        Importing a name called <B>default</B> has the same effect as a<Space />
        <I>default import</I>. It is necessary to alias the name because
        <Space />
        <I>default</I> is a reserved word.
        <Code>{`import { default as myDefaultMember } from "./module-1.js";`}</Code>
      </Para>
    </>
  );
};

export default JSModulesDefaultImport;
