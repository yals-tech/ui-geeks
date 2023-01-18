import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Note from '../../../shared/note/note';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, IU, NewLine, OrderedList } from '../../../shared/util/util';

const strictChanges = [
  {
    label: (
      <>
        Changes some silently ignored <I>errors</I> to be thrown, i.e,
        <Space /> <I>errors</I> which are ignored in <I>non-strict mode</I> will
        throw errors in <I>strict mode</I>.
      </>
    )
  },
  {
    label: (
      <>
        Fixes mistakes that make it difficult for JavaScript engines to perform
        optimizations, i.e, strict mode code can sometimes be made to run faster
        than non-strict mode code.
      </>
    )
  },
  {
    label: (
      <>
        Prohibits some syntax likely to be defined in future versions of
        <Space /> <I>ECMAScript</I>.
      </>
    )
  }
];
const JSStrictModeIntro = () => {
  return (
    <>
      <Para>
        JavaScript's <BI>strict mode</BI>, introduced in ES5, is a way to
        <BI>opt in</BI> to a restricted variant of JavaScript. The <Space />
        <I>strict mode</I> isn't just a subset, it intentionally has different
        semantics from normal code. The <I>strict mode</I> and <Space />
        <I>non-strict mode</I> code can co-exist.
      </Para>

      <Para>
        Strict mode make several changes to normal JavaScript semantics:
        <OrderedList unOrdered expanded items={strictChanges} />
      </Para>

      <Heading as='h2'>Invoking strict mode</Heading>
      <Para>
        <BI>Strict mode</BI> may be applied to <B>entire scripts</B> or to
        <B>individual functions</B>. It doesn't apply to <I>block statements</I>
        <Space /> enclosed in {`{ }`}, attempting to apply <I>strict mode</I> to
        <Space /> <I>block statements</I> <Space /> will do nothing.
      </Para>

      <Para>
        The <BI>eval()</BI> code, <BI>Function</BI> code,
        <BI>event handle attributes</BI>, strings passed to
        <BI>setTimeout()</BI> and related functions are considered as
        <B>entire scripts</B>, therefore, invoking strict mode in them works as
        expected.
      </Para>

      <Para>
        <IU>Syntax:</IU>
        <NewLine />
        <BI>"use strict"</BI>
        <NewLine />
        <I>
          Put the statement <B>"use strict"</B> as the first statement to make
          the <B>entire script</B> or <B>function</B> run in
          <B>strict mode</B>.
        </I>
      </Para>

      <Para>
        <IU>Example:</IU>
        <Code>{`"use strict";
const name = "JavaScript, is in strict mode";
`}</Code>
      </Para>

      <Note>
        In strict mode, starting with ES2015, functions inside blocks are scoped
        to that block.
        <B>
          Prior to ES2015, block-level functions were forbidden in strict mode
        </B>
        .
      </Note>
    </>
  );
};

export default JSStrictModeIntro;
