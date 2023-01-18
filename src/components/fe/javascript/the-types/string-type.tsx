import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Word from '../../../shared/word/word';

const JSStringType = () => {
  return (
    <>
      <Heading as='h2'>String</Heading>

      <Para>
        Strings in JavaScript are sequences of unicode characters. More
        accurately, they are sequences of UTF-16 code units. Each code unit is
        represented by a 16-bit number. Each unicode character is represented by
        either 1 or 2 code units. Strings are immutable and cannot be modified.
      </Para>

      <Para>
        <Word bold>Properties and Methods of String:</Word>
        <Code>{`"hello".length    // 5
"hello".charAt(1)   // 'e'
"hello, world".replace("world", "Javascript") // "hello, JavaScript"
"hello".toUpperCase() // "HELLO"
"hello".startsWith("s") // false
"hello".endsWith("o") // true
"hello".endsWith("O") // false
"hello".includes("lo") // true
"hello".indexOf("lo") // 3
"hello".repeat(2) // "hellohello"
"hello".split('') // ["h", "e", "l", "l", "o"]
"hello".padStart(10,'*')  // "*****hello"
"hello".padEnd(10,'*')  // "hello*****"

" hello ".trim()  // "hello"
" hello ".trimLeft()  // "hello "
" hello ".trimRight() // " hello"

"hello".substr(1, 2)    // "el"
// Returns 2 characters, starting at index 1

"hello".substring(1, 3)   // "el"
// Returns characters between given indexes
`}</Code>
      </Para>
    </>
  );
};

export default JSStringType;
