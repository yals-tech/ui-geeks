import React from 'react';
import Heading from '../../../shared/heading/heading';
import Note from '../../../shared/note/note';
import Para from '../../../shared/para/para';
import { NewLine } from '../../../shared/util/util';
import Word from '../../../shared/word/word';

const JSBigIntType = () => {
  return (
    <>
      <Heading as='h2'>BigInt</Heading>

      <Para>
        It can represent integers with arbitrary precision. With BigInts we can
        store and manipulate large integers, even beyond the safe Integer limit
        for Numbers. A BigInt is created by appending <Word bold>'n'</Word> to
        the end of an integer or by calling the <Word bold>constructor</Word>.
      </Para>

      <Para>
        <Word italic>
          12345699924n
          <NewLine />
          BigInt(12345699924)
        </Word>
      </Para>

      <Note>
        <Word italic>BigInt</Word> cannot be operated on interchangeably with
        the Number. A <Word bold>TypeError</Word> will be thrown on such
        operations.
      </Note>
    </>
  );
};

export default JSBigIntType;
