import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Note from '../../../shared/note/note';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import Word from '../../../shared/word/word';

const JSComments = () => {
  return (
    <>
      <Heading as='h2'>Comments</Heading>

      <Para>
        Comments should be added to improve code readability by explaining the
        purpose of code. Comments behave like whitespaces and are discarded
        during script execution.
      </Para>

      <Heading as='h3'>Single Line Comment</Heading>
      <Para>
        Single line comments start with <Word bold>//</Word> character. As the
        name suggests, comments can't be spread in multiple lines, it has to be
        contained within a single line.
      </Para>

      <Code>
        {`// I am a single line comment, contained within single line
// Although, there can be multiple single line comments in a file`}
      </Code>

      <Heading as='h3'>Multi Line Comment</Heading>
      <Para>
        Sometimes it is required to write a more elaborated explanation, which
        spreads in multi line, multi line comment could be used for these cases.
        Multi line comment start with <Word bold>/*</Word> and should end with
        <Word bold>*/</Word> characters.
      </Para>

      <Code>
        {`/*
I am a multi line comment,
and can be use to write an 
elaborated comment.
*/
`}
      </Code>

      <Note>
        Note: There's a third type of comment syntax written at the start of
        some JavaScript files, which looks like
        <Word bold>#!/usr/bin/env node</Word>. This is called
        <Word bold>HashBang Comment</Word>
        <Space />
        syntax, and is a special comment used to specify the path to a
        particular JavaScript engine that should execute the script.
      </Note>
    </>
  );
};

export default JSComments;
