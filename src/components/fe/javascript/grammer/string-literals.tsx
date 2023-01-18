import React from 'react';
import Code from '../../../shared/code/code';
import Heading from '../../../shared/heading/heading';
import Note from '../../../shared/note/note';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, NewLine } from '../../../shared/util/util';

const JSStringLiterals = () => {
  return (
    <>
      <Heading as='h3'>String Literals</Heading>
      <Para>
        A string literal is zero or more characters enclosed in single (') or
        double (") quotes. All the <BI>String</BI> object methods can be called
        on a string literal. JavaScript automatically converts the
        <I>string literal</I> to a temporary <BI>String</BI> object.
      </Para>
      <Code>
        {`// Examples:
const str = "JavaScript Literal";

console.log("JavaScript".length); // 10
// length is a property of the String object,
// which can be called on string literal.
`}
      </Code>

      <Heading as='h4'>Template Literals</Heading>
      <Para>
        These are string values enclosed by the <BI>back-tick (`)</BI>
        <Space /> character instead of double or single quotes. Also known as
        <Space /> <B>string interpolation</B>. They provide syntactic sugar for
        constructing strings. <B>{`\${ }`}</B> construct is used to add
        dynamic/variable value to the string literal.
      </Para>

      <Code>
        {`// Example 1:
// Multi line string values can be created.
const multiLineStr = \`I am a multiline
string\`; 


// Example 2:
const name  = "John";
const str = \`My name is: \${name}.\`;

// \${} construct is used to add dynamic/variable value to the string literal.
console.log(str); // "My name is: John."
`}
      </Code>

      <Heading as='h4'>Tagged Templates</Heading>
      <Para>
        These are a compact syntax for specifying a template literal along with
        a call to a <B>"tag" function</B> for <B>parsing</B>. A tagged template
        is just a more succinct and semantic way to invoke a function that
        processes a string with a set of relevant values.
      </Para>

      <Code>
        {`const formatArgument = (arg) => {
  if(Array.isArray(arg)) {
    return arg.map((itm) => \`# \${itm}\`)
              .join('\\n');
  }

  if(typeof arg === "object") {
    return JSON.stringify(arg);
  }
  return arg;
}

const printStr = (segments, ...args) => {
  let msg = segments[0];
  segments.slice(1).forEach((segment, index) => {
    msg += formatArgument(args[index]) + segment;
  });
  console.log(msg);
}`}
      </Code>

      <Para>
        <BI>segments:</BI> This holds the list of <B>fixed text</B> of the
        string literal.
        <NewLine />
        <BI>Args:</BI> Holds the list of <B>dynamic values</B> of the string
        literal.
        <NewLine />
        For any valid template literal, there will always be <B>
          N args
        </B> and <B>(N+1) string segments</B>.
      </Para>

      <Code>
        {`const todos = ["JavaScript", "ReactJs", "Angular"];
const progress = { js: 90, react: 60, angular: 20};

printStr\`I am learning:\\n\${todos}\nAnd my progress is: \${progress}\`

// Output:
I am learning:
# JS
# ReactJs
# Angular
And my progress is: { "js" : 90, "react": 60, "angular": 20 }
        `}
      </Code>

      <Note>
        <B>console.log()</B> uses similar string interpolation.
        <NewLine />
        console.log("Learning %o with %o percent progress", "JS", 50);
        <NewLine />
        // "Learning 'JS' with 50 percent progress”
      </Note>
    </>
  );
};

export default JSStringLiterals;
