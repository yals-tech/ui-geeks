import React from 'react';
import Code from '../../../../shared/code/code';
import { CodeLanguageTypes } from '../../../../shared/code/code.types';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import Space from '../../../../shared/space/space';
import { B, BI, I, IU } from '../../../../shared/util/util';

const ReactUseReducerHook = () => {
  return (
    <>
      <Heading as='h3'>useReducer()</Heading>
      <Para>
        This Hooks is an alternative to <I>useState</I> Hook. It is usually
        preferable over <I>useState</I> when we have complex state logic that
        involves multiple sub-values or when the next state depends on the
        previous one. useReducer also optimizes the performance of the
        component.
      </Para>

      <Para>
        <IU>Syntax:</IU>
        <Code language={CodeLanguageTypes.JSX}>
          {`const [state, dispatch] = useReducer(reducer, intialArg, init);`}
        </Code>
      </Para>

      <Para>
        <B>state</B>: This variable holds the current value of the state.
      </Para>

      <Para>
        <B>dispatch</B>: This method is used to trigger a change to the state
        value.
      </Para>

      <Para>
        <B>reducer</B>: This is a method of type <Space />
        <BI>{`(state, action) => newState`}</BI>. It accepts <B>"action"</B>
        <Space /> from <B>dispatch</B>, uses the <BI>current state</BI> to
        compute <BI>newState</BI> and returns the newState.
      </Para>

      <Para>
        <B>intialArg</B>: It is the initial value of the state.
      </Para>

      <Para>
        <B>init</B>: This is an <I>optional function</I>, used for <Space />
        <I>lazy initialization</I> of the <I>state</I>. If provided, the initial
        state will be set to <BI>init(initialArg)</BI>. It lets us extract the
        logic for calculating the initial state outside the reducer.
      </Para>

      <Para>
        <IU>Example:</IU>
        <Code language={CodeLanguageTypes.JSX}>
          {`const init = (initialCount) => {
  return { count: initialCount };
}`}
        </Code>

        <Code language={CodeLanguageTypes.JSX}>
          {`const reducer(state, action) {
  switch(action.type) {
    case "increment": return { count : state.count + 1 };
    case "decrement": return { count : state.count - 1 };
    case "reset": return init(action.payload);
    default: throw new Error();
  }
}`}
        </Code>
      </Para>

      <Code language={CodeLanguageTypes.JSX}>
        {`const Counter = (props) => {
  const { initialCount } = props;
  const [state, dispatch] = useReducer(reducer, initialCount, init);

  const handleReset = () => {
    dispatch({ type: "reset", payload: initialCount });
  }
  const handleIncrement = () => { dispatch({ type: "increment" }); 	}
  const handleDecrement = () => { dispatch({ type: "decrement" }); }

  return <>
    Count: {state.count}
    <button onClick={handleReset}>Reset</button>
    <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
  </>
}`}
      </Code>
    </>
  );
};

export default ReactUseReducerHook;
