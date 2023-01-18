import React from 'react';
import Code from '../../../../shared/code/code';
import Heading from '../../../../shared/heading/heading';
import Note from '../../../../shared/note/note';
import Para from '../../../../shared/para/para';
import Space from '../../../../shared/space/space';
import { B, BI, I, NewLine } from '../../../../shared/util/util';
import Word from '../../../../shared/word/word';

const JSModulesNamespaceImport = () => {
  return (
    <>
      <Heading as='h3'>Namespace import</Heading>
      <Para>
        Namespace import, inserts a given module into the current scope,
        containing all the exports from the module. All keys are <Space />
        <I>enumerable</I> in lexicographic order, with the
        <BI>default export</BI> available as a key called
        <B>default</B>.
      </Para>
      <Code>
        {`import * as myModule from "./exportedModule.js";
myModule.greet(); // "Hello!"
`}
      </Code>
      <Para>
        <BI>"myModule"</BI> is a <BI>sealed</BI> object with a <I>null</I>
        <BI>prototype</BI>.
      </Para>

      <Para>
        It is also possible to specify a <I>default import</I> with the
        <Space />
        <I>namespace</I> or
        <Space />
        <I>named import</I>. In such cases, the <I>default import</I> has to be
        declared before <I>namespace/named import</I>.
      </Para>

      <Word bold underline>
        Example of <I>default import</I> with <I>namespace import</I>.
      </Word>
      <Code>
        {`import defaultMember, * as myModule from "./exported-module.js";`}
      </Code>

      <NewLine />
      <Word bold underline>
        Example of <I>default import</I> with <I>named import</I>.
      </Word>
      <Code>
        {`import defaultMember, { myExportedVal, myFunc } from "./exported-module.js";`}
      </Code>

      <Note>
        JavaScript do not have <B>wild-card import</B>, like, import * from
        "exported-module.js", similar to wild-card export like export * from
        "module.js". The reason is the high possibility of name conflicts.
      </Note>
    </>
  );
};

export default JSModulesNamespaceImport;
