import React from 'react';
import Code from '../../../../shared/code/code';
import Heading from '../../../../shared/heading/heading';
import Note from '../../../../shared/note/note';
import Para from '../../../../shared/para/para';
import { B, BI, I } from '../../../../shared/util/util';

const JSModulesNamedExport = () => {
  return (
    <>
      <Heading as='h3'>Named Export</Heading>
      <Para>
        As the name suggests, <BI>named exports</BI> are one which have a{' '}
        <B>unique name</B>. A module can have multiple named exports. While
        importing, named exports must be referred to by the exact same name
        (optionally renaming it with <B>as</B>). Named exports should always be
        enclosed within {`{ }`} brackets.
      </Para>

      <Code>
        {`export let myExportedVal = 10;
export function myFunc() { console.log("hello");
`}
      </Code>

      <Note>
        <B>export {`{}`}</B> does not export an empty object. It is a no-op
        declaration that exports nothing.
      </Note>

      <Heading as='h4'>
        Named export can be renamed while exporting from the module
      </Heading>
      <Para>
        The <B>as</B> operator can be used to rename the export declaration.
      </Para>
      <Code>
        {`const func( ) { console.log("hello");
export { func as myFunction };
`}
      </Code>
      <Para>
        The <I>import</I> declaration will have to use <BI>myFunction</BI> in
        order to access it.
      </Para>

      <Para>
        Exported members can also be renamed to something that's not a valid
        identifier.
      </Para>
      <Code>
        {`const func( ) { console.log("hello");
export { func as "my-func" };`}
      </Code>
      <Para>
        The <I>import</I> declaration will have to use <BI>"my-func"</BI> in
        order to access it.
      </Para>
      <Para>
        The <I>export</I> declarations are not subject to
        <B>temporal dead zone</B> rules. The <I>export</I> declaration can be
        written, even before declaring the exported members. This would work
        because the <I>export</I> statement is only a declaration, it does not
        utilize/evaluate the exported member.
      </Para>

      <Code>
        {`export { x };
let x = 10;
`}
      </Code>
      <Para>
        The <I>export</I> declaration of <B>"x"</B> is written even before
        declaring <B>"x"</B>.
      </Para>
    </>
  );
};

export default JSModulesNamedExport;
