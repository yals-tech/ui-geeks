import React from 'react';
import Code from '../../../../shared/code/code';
import { CodeLanguageTypes } from '../../../../shared/code/code.types';
import Heading from '../../../../shared/heading/heading';
import Note from '../../../../shared/note/note';
import Para from '../../../../shared/para/para';
import Space from '../../../../shared/space/space';
import { B, BI, I, IU, NewLine } from '../../../../shared/util/util';

const ReactUseStateHook = () => {
  return (
    <>
      <Heading as='h3'>useState()</Heading>
      <Para>
        This Hooks is used to add <B>state</B> to a function component.It
        returns a <B>pair</B> - an array with two items. The first item
        <Space /> is the <I>current value</I> and second is a <I>function</I>
        <Space /> that updates it.
      </Para>

      <Para>
        <IU>Syntax:</IU>
        <Code language={CodeLanguageTypes.JSX}>
          {`const [stateValue, updateFunction] = useState(initialValue);`}
        </Code>
      </Para>

      <Para>
        <B>stateValue</B>: It is the first value of the pair of values returned
        from the <I>useState()</I> hook. This is the name of the state variable.
        In contrast to the class state, the state of a function can be any valid
        type. For example, it can be numbers, strings, arrays, etc.
      </Para>

      <Para>
        <B>updateFunction</B>: This is the second value of the pair of values
        returned from the <I>useState()</I> hook. This function is equivalent to
        <I>setState()</I> of the class component and used to update the
        respective state variable.
      </Para>

      <Para>
        <B>initialValue</B>: It is the initial value of the state variable. The
        initial value is only assigned once, on the mount of the component and
        is ignored on further update events.
      </Para>

      <Para>
        <IU>Example:</IU>
        <NewLine />
        Let's build our Counter component using the <B>function component</B>
        <Space /> and <B>useState()</B> hook.
      </Para>

      <Code language={CodeLanguageTypes.JSX}>
        {`const Counter = (props) => {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => {
    setCounter((prevState) => prevState + 1);
  }
  return <div>
    <span>Counter Value: {counter}</span>
    <button onClick={incrementCounter}>Increment</button>
  </div>
}`}
      </Code>

      <Heading as='h4'>Functional Updates</Heading>
      <Para>
        If the new state is computed using the previous state value, in such
        cases we can pass a function to the <B>updateFunction</B>. The function
        will receive the previous state, and return an updated state.
      </Para>

      <Para>
        In the above code, we used functional updates.
        <Code language={CodeLanguageTypes.JSX}>
          {`setCounter((prevState) => prevState + 1);`}
        </Code>
      </Para>

      <Para>
        Alternative to <I>functional updates</I> is to pass a <B>value</B> to
        the <B>updateFunction</B>. Because React may batch state updates for
        performance benefits, therefore this syntax may not provide updated
        value.
        <Code language={CodeLanguageTypes.JSX}>
          {`setCounter(counter + 1);`}
        </Code>
      </Para>

      <Heading as='h4'>Lazy Initial State</Heading>
      <Para>
        The <B>initialValue</B> argument is the state used during the initial
        render. In subsequent renders, it is disregarded. If the initial state
        is the result of an expensive computation, we may provide a function
        instead, which will be executed only on the initial render.
      </Para>

      <Code language={CodeLanguageTypes.JSX}>
        {`const [counter, setCounter] = useState(()=>{
  const initialState = expensiveComputation();
  return initialState;
});`}
      </Code>

      <Heading as='h4'>Bailing Out of a State Update</Heading>
      <Para>
        If we update a state Hook to the same value as the current state, React
        will bail out without rendering the children or firing effects. React
        uses the <BI>Object.is comparison algorithm</BI> for comparing values.
      </Para>

      <Heading as='h4'>Batching of State Updates</Heading>
      <Para>
        React may group several state updates into a single re-render to improve
        performance.
      </Para>

      <Para>
        Before React 18, only updates inside React event handlers were batched.
        Starting with <B>React 18</B>, batching is <Space />
        <B>enabled for all updates by default</B>.
      </Para>

      <Note>
        React makes sure that updates from several different user-initiated
        events, like <B>clicking a button twice</B>, are always processed
        separately and <B>do not get batched</B>. This prevents logical
        mistakes.
      </Note>
    </>
  );
};

export default ReactUseStateHook;
