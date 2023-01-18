import React from 'react';
import Code from '../../../shared/code/code';
import { CodeLanguageTypes } from '../../../shared/code/code.types';
import Heading from '../../../shared/heading/heading';
import Note from '../../../shared/note/note';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, IU } from '../../../shared/util/util';

const ReactStateAddToFunction = () => {
  return (
    <>
      <Heading as='h2'>Adding State</Heading>
      <Heading as='h3'>useState()</Heading>
      <Para>
        With the introduction of <BI>Hooks</BI>, <I>function components</I> can
        also have <I>state</I>. The <BI>useState</BI> is the <I>hook</I> used to
        add <I>state</I> to the <I>function component</I>.
      </Para>

      <Note>
        A hook is a special function that lets us <B>"hook into"</B> React
        features. For example: <B>useState()</B> is a Hook that adds state to
        function components.
      </Note>

      <Para>
        <IU>Syntax:</IU>
        <Code>
          {`const [stateValue, updateFunction] = useState(initialValue);`}
        </Code>
      </Para>

      <Para>
        <B>useState</B>: This is the Hook used to add state to a function
        component. It returns a <B>pair</B> - an array with two items. The first
        item is the current value and second is a function that updates it.
      </Para>

      <Para>
        <B>stateValue</B>: It is the first value of the pair of values returned
        from the <I>useState()</I> function. This is the name of the state
        variable. In contrast to the class state, the state of a function can be
        any valid type. For example, it can be numbers, strings, arrays, etc.
      </Para>

      <Para>
        <B>updateFunction</B>: This is the second value of the pair of values
        returned from the <I>useState()</I> function. This function is
        equivalent to <I>setState()</I> of the class component and used to
        update the respective state variable.
      </Para>

      <Para>
        <B>initialValue</B>: It is the initial value of the state variable. The
        initial value is only assigned once, on the mount of the component and
        is ignored on further update events.
      </Para>

      <Para>
        Let's build our Counter component using the <B>function component</B>
        <Space /> and <B>useState()</B> hook.
      </Para>

      <Code language={CodeLanguageTypes.JSX}>
        {`const Counter = (props) => {
  const [counter, setCounter]	 = useState(0);
  const incrementCounter = () => {
    setCounter((prevState) => prevState + 1);
  }
  return <div>
    <span>Counter Value: {counter}</span>
    <button onClick={incrementCounter}>Increment</button>
  </div>
}`}
      </Code>

      <Para>
        Above code is much simpler as compared to the <I>class component</I>
        <Space /> equivalent.
      </Para>
    </>
  );
};

export default ReactStateAddToFunction;
