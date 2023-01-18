import React from 'react';
import Note from '../../../shared/note/note';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { BI, OrderedList } from '../../../shared/util/util';
import Word from '../../../shared/word/word';

const JSGrammerIntro = () => {
  return (
    <>
      <Para>
        JavaScript is <BI>case-sensitive</BI> <Space />
        and uses the <BI>Unicode</BI> <Space /> characters set. In JavaScript,
        instructions are called <Word bold>statements</Word> and are separated
        by <Word bold>semicolon (;)</Word>. A semicolon is not necessary after a
        statement, if it is written on its own line. But if more than one
        statement is written in a line, then they must be separated by
        semicolon.
      </Para>

      <Note>
        It is considered best practice to always write a semicolon after a
        statement. This practice reduces the chances of errors in the code.
      </Note>

      <Note>
        ECMAScript also has rules of <BI>Automatic Semicolon Insertion(ASI)</BI>
        . Some JavaScript statements must be terminated with semicolon and are
        therefore affected by ASI. Few cases where ASI is executed:
        <OrderedList
          unOrdered
          items={[
            {
              label: (
                <>
                  Variable declaration using <BI>let, const, var</BI>.
                </>
              )
            },
            {
              label: (
                <>
                  Module declaration using <BI>import, export</BI>.
                </>
              )
            },
            {
              label: 'Expression statement.'
            },
            {
              label: (
                <>
                  <BI>debugger, continue, break, throw, return</BI>.
                </>
              )
            }
          ]}
        />
      </Note>

      <Para>
        The source code of JavaScript is scanned from
        <BI>left</BI> <Space /> to <BI>right</BI>, and is converted into a
        sequence of input elements which are <BI>tokens</BI>,
        <BI>control characters</BI>,<BI>line terminators</BI>,<BI>comments</BI>
        <Space /> or <BI>whitespaces</BI> <Space />
        (Spaces, tabs and new line characters are considered as whitespace).
      </Para>
    </>
  );
};

export default JSGrammerIntro;
