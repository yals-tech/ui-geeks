import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Note from '../../../shared/note/note';
import Para from '../../../shared/para/para';
import Word from '../../../shared/word/word';

const JSSymbolType = () => {
  return (
    <>
      <Heading as='h2'>Symbol</Heading>
      <Para>
        A symbol is a unique and immutable primitive value and may be used as
        the key of an object property. Symbol value is always unique.
      </Para>
      <Code>
        {`const obj = { [Symbol("abc")]: "hello" };

Symbol("abc") === Symbol("abc")   // false 
// Because Symbol() will always populate a unique key`}
      </Code>
      <Para>
        <Word bold>Symbol.for():</Word> In contrast to Symbol(), which always
        creates a unique key every time, Symbol.for() will create a new unique,
        if it is not yet created, otherwise, it will read and return an existing
        symbol with the given key from the
        <Word bold>"global Symbol registry"</Word>.
      </Para>

      <Code>
        {`Symbol.for("abc")   // Created a unique key
Symbol.for("abc")   // Returned from global symbol registry`}
      </Code>

      <Para>
        <Word bold>Symbol.keyFor():</Word> This function returns a key for the
        given Symbol.
        <Code>
          {`const sym = Symbol.for("abc")
Symbol.keyFor(sym)    // "abc"`}
        </Code>
      </Para>
      <Note>Symbol.keyFor() do not work with Symbol()</Note>
    </>
  );
};

export default JSSymbolType;
