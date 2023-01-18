import React, { memo } from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I } from '../../../shared/util/util';
import YALSQuestionaire from '../../../shared/yals-questionnaire/yals-questionnaire';
import YALSSummary from '../../../shared/yals-summary/yals-summary';
import { JS_SUMMARY } from '../js-summary-list';
import { IntroductionQuestions } from '../questionnaires/introduction-questionnaire';

const JSIntroduction = () => {
  useDOMTitle('UI-Geeks: JavaScript | Introduction');

  return (
    <Container>
      <Heading>Introduction</Heading>
      <Para>
        JavaScript (JS) is a light-weight,
        <B>interpreted</B> <Space /> or <B>just-in-time compiled</B> programming
        language with <Space /> <B>first-class functions</B>. It is
        <B>prototype-based</B>,<B> multi-paradigm</B>,<B>single threaded</B>,
        <B> dynamic language</B>, supporting <Space /> <B>object-oriented</B>,
        <B> imperative</B> and <Space /> <B>declarative</B> styles.
      </Para>
      <Para>
        Let's learn about all the buzz-words given in JavaScript definition.
      </Para>

      <Heading as='h2'>Interpreted or Just-in-time Compiled</Heading>
      <Para>
        There has always been a confusion related to the execution behavior of
        JavaScript. The debate is between Interpreted and Compiled. To know the
        answer, let's understand both terminologies.
      </Para>

      <Para>
        <B>Interpreted Language: </B> In an interpreted language, the code is
        run from top to bottom and the result of running the code is immediately
        returned. The interpreter reads and executes one line at a time. The
        interpreter stops the execution on error, which means, if interpreter
        fails on a statement at line number 10, further lines of code are not
        executed.
      </Para>

      <Para>
        In the context of the browser, we don't have to transform the code into
        any other form before the browser runs it. The code is received in its
        plain-text format and processed directly from that.
      </Para>

      <Para>
        <B>Compiled Language: </B> Compiled language scans the entire code and
        transforms (compiles) it into another form, before they are executed by
        the computer. The program is executed from a binary format, which was
        generated from the original source code (in plain-text format).
      </Para>

      <Para>
        <B>Just-in-time Compilation: </B> Modern JavaScript interpreters use a
        technique called <I>just-in-time compilation</I> to improve performance.
        In this technique, JavaScript source code gets compiled into binary
        format, so that it can run quickly.
      </Para>

      <Para>
        <I>
          Now returning back to the original question, whether JavaScript is
          interpreted or compiled language?
        </I>
      </Para>

      <Para>
        The answer is, JavaScript is an
        <B>interpreted language</B>, because although modern interpreters use
        JIT, still all this compilation is handled at run time, rather than
        ahead of time.
      </Para>

      <Heading as='h2'>First Class Functions</Heading>

      <Para>
        A programming language is said to have
        <B>first-class functions</B>, when functions are treated as other data
        types. For example: they can be stored in a variable, they can be passed
        as an argument to another function, can be extended, etc. JavaScript
        treats functions as first class citizens.
      </Para>

      <Heading as='h2'>Prototype-based</Heading>
      <Para>
        Prototype based programming is a style of object oriented programming in
        which classes are not explicitly defined, rather derived by adding
        properties and methods to an empty object. In simple words, this type of
        style treats an object as the <BI>prototype</BI> or the template for the
        creation of another object.
      </Para>

      <Heading as='h2'>Multi-paradigm</Heading>
      <Para>
        JavaScript supports multiple programming paradigms like imperative,
        declarative, object-oriented, functional programming, therefore,
        JavaScript is said to be a multi-paradigm language.
      </Para>

      <Heading as='h2'>Single Threaded</Heading>
      <Para>
        JavaScript has a single thread, which is used to execute the code.
        Because of this single thread, JavaScript is synchronous in nature.
        Although modern browsers has concepts like <I>Call Stack</I>,{' '}
        <I>Memory Heap</I>, <I>Event-loop</I>, which helps it perform
        asynchronous tasks.
      </Para>

      <Heading as='h2'>Dynamic Language</Heading>
      <Para>
        Dynamic language is one, in which operations which are normally done at
        compile time, can be done at run time. Operations like Adding
        properties/methods to an object, changing class/object prototype.
        Because JavaScript allows such operations, therefore, it is known as
        Dynamic Language.
      </Para>

      <Heading as='h2'>Object-oriented</Heading>
      <Para>
        Object-oriented programming paradigm consists of classes/objects holding
        the data and respective methods that can be taken on the data. Because
        JavaScript has the concept of class/objects and implements inheritance
        and various other concepts of object-oriented language, therefore it is
        known to support object-oriented programming style.
      </Para>

      <Heading as='h2'>Imperative</Heading>
      <Para>
        Imperative Programming language is a language where instructions for
        computers are written in step-by-step manner. This explicitly describes
        the order of execution to achieve the end result. Imperative language
        describes <B>"How"</B> of the desired output.
      </Para>
      <Para>
        Because JavaScript statements can be written to describe the steps to
        get the desired result, therefore, it is known to be imperative in
        nature. For example, a <I>for-loop</I> can be written to iterate and
        print each item of an array.
      </Para>

      <Heading as='h2'>Declarative</Heading>
      <Para>
        Declarative programming language is one, in which programs describe
        their desired results without explicitly listing steps that must be
        performed. The codes of such languages are very abstract in nature.
        Functional and Logical programming languages are examples of declarative
        programming style. Declarative languages describe
        <B>"WHAT"</B> of the desired output.
      </Para>

      <Para>
        Because JavaScript implements functional programming style, therefore,
        it is known to be declarative in nature. For example, the <I>sort()</I>
        <Space /> method of Array can be called to sort all the items of the
        array, we do not need to write down the steps to sort the array.
      </Para>

      <YALSSummary items={JS_SUMMARY.INTRODUCTION} />

      <Para>
        <YALSQuestionaire questions={IntroductionQuestions} />
      </Para>
    </Container>
  );
};

export default memo(JSIntroduction);
