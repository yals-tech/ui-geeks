import React from 'react';
import Code from '../../../../shared/code/code';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import { B, I } from '../../../../shared/util/util';

const JSModulesReExport = () => {
  return (
    <>
      <Heading as='h3'>Re-exporting/Aggregation</Heading>
      <Para>
        A module can also export the members which are exported from other
        modules without writing two separate import/export statements. This
        concept is called <I>Re-exporting</I> or <I>Aggregation</I>. The
        <B>from</B> keyword is used with export declaration.
      </Para>

      <Code>{`export { sayHi, sayBye } from "./exportedModule.js";`}</Code>

      <Para>
        We'll have to write two different <I>import/export</I> statements for
        the same purpose, without <I>aggregation</I>.
      </Para>

      <Code>
        {`import { sayHi, sayBye } from "./exportedModule.js";
export { sayHi, sayBye };
`}
      </Code>
    </>
  );
};

export default JSModulesReExport;
