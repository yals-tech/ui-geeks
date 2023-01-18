import React from 'react';
import Code from '../../../../shared/code/code';
import Heading from '../../../../shared/heading/heading';
import Note from '../../../../shared/note/note';
import Para from '../../../../shared/para/para';
import { B, BI } from '../../../../shared/util/util';

const JSModulesDefaultExport = () => {
  return (
    <>
      <Heading as='h3'>Default Export</Heading>
      <Para>
        There can be only one <BI>default export</BI> per module. They can be
        imported with any name. Default members are imported without curly
        brackets {`{ }`}.
      </Para>

      <Code>
        {`// "./exported-module.js"
export default let x = 10;
export default function greet() { console.log("Hello!"); };`}
      </Code>

      <Note>
        If multiple default exports are written in a module, each default export
        will <B>overwrite</B> the previous one. In the above example,
        <B>"greet()"</B> will be the default exported member.
      </Note>

      <Code>
        {`// "./main-program.js"
import greet from "./exported-module.js";
greet();  // "Hello!"`}
      </Code>

      <Note>
        The export default syntax allows any expression. For example:{' '}
        <B>export default 10 + 20</B>;
      </Note>
    </>
  );
};

export default JSModulesDefaultExport;
