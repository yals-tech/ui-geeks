import React from 'react';
import Code from '../../../../shared/code/code';
import { CodeLanguageTypes } from '../../../../shared/code/code.types';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import Space from '../../../../shared/space/space';
import { B, BI, I, IU, NewLine } from '../../../../shared/util/util';

const JSClosuresInLoop = () => {
  return (
    <>
      <Heading as='h4'>Problem Creating Closures in Loop</Heading>

      <Para>
        Prior to the introduction of the <B>let</B> keyword, a common problem
        with closures occurred when closures were created inside a loop. Let's
        try to explore the problem and then understand the possible solutions.
      </Para>

      <Code language={CodeLanguageTypes.HTML}>
        {`<!-- HTML required for the example -->
<p id="help">Helpful notes will appear here<p>
<p>Email: <input type="text" id="email" name="email" /> <p>
<p>Name: <input type="text” id="name" name="name" /> <p>
<p>Age: <input type="text" id="age" name="age" /> <p>
`}
      </Code>

      <Code>
        {`function getElement(id) { return document.getElementById(id); }
function showHelp(help) { getElement("help").textContent = help; } 

var helpText = [
  { id: "email", help : "Your email address" },
  { id: "name", help : "Your name" },
  { id: "age", help : "Your age" },
];

function setupHelp() {
  for(var i = 0; i< helpText.length; i++) {
      var item  = helpText[i];
      getElement(item.id).onfocus = function() { 
            showHelp(item.help);
      }
  }
}

setupHelp();
`}
      </Code>

      <NewLine />
      <Para>
        When the code runs, we'll see that no matter what field we <I>focus</I>
        <Space />
        on, the help text of your <B>"age"</B> is displayed. The reason for this
        is that the functions assigned to <I>onfocus</I> are <BI>closures</BI>,
        they consist of the function definition and the captured lexical
        environment from the <I>setupHelp()</I> <Space />
        function's scope. <BI>Three closures</BI> have been created by the loop,
        but each of them share the same lexical environment, which has a
        variable with changing values (<I>"item"</I>).
      </Para>

      <Para>
        Because the variable <B>"item"</B> is declared with <BI>var</BI>, it has
        <Space />
        <I>function scope</I>. The value of <B>"item.help"</B> is determined
        when the <I>onfocus</I> callbacks are executed. But, since the loop has
        already run its course by that time, the <B>"item"</B> variable (shared
        by all closures) has been left pointing to the last entry in the
        <BI>helpText</BI> array. Therefore, it will always display the
        <B>last</B> help text.
      </Para>

      <Heading as='h4'>Solutions to the Above Problem</Heading>
      <Para>
        Let's see possible solutions with and without ES6's <BI>let</BI>{' '}
        keyword.
      </Para>

      <Para>
        <IU>Solution 1:</IU>
        <Para>
          By creating more closures, in particular, by using a
          <BI>function factory</BI>.
        </Para>

        <Code>
          {`function makeHelpCallback(help) {
  return function() { showHelp(help); }
}
`}
        </Code>

        <Para>
          The <BI>makeHelpCallback()</BI> function creates a new{' '}
          <I>lexical environment</I> for each callback, in which <BI>"help"</BI>{' '}
          refers to the corresponding item from the <BI>helpText</BI> array.
        </Para>

        <Code>
          {`// Rewriting setupHelp to include the solution
function setupHelp() {
  for(var i = 0; i < helpText.length; i++) {
    var item  = helpText[i];
    getElement(item.id).onfocus = makeHelpCallback(item.help);
  }
}
`}
        </Code>
      </Para>
      <NewLine />
      <Para>
        <IU>Solution 2:</IU>
        <Para>
          By using <I>anonymous closures</I> with the help of <B>IIFE</B>
          <Space /> (Immediately Invoked Function Expression).
        </Para>

        <Code>
          {`// Rewriting setupHelp to include the solution
function setupHelp() {
  for(var i = 0; i < helpText.length; i++) {
    (function() {
      var item  = helpText[i];
      getElement(item.id).onfocus = function() {
        showHelp(item.help);
      }
    })();
  }
}
`}
        </Code>
      </Para>

      <NewLine />
      <Para>
        <IU>Solution 3:</IU>
        <Para>
          By using ES6's <BI>let</BI> or <BI>const</BI> keyword. The use of
          <Space />
          <I>let</I>
          <Space />
          or <I>const</I> will create <I>block scope</I>, hence fixing the
          problem.
        </Para>

        <Code>
          {`// Rewriting setupHelp to include the solution
function setupHelp() {
  for(let i = 0; i< helpText.length; i++) {
    let item  = helpText[i];
    getElement(item.id).onfocus = () => {
      showHelp(item.help);
    }
  }
}
`}
        </Code>
      </Para>
    </>
  );
};

export default JSClosuresInLoop;
