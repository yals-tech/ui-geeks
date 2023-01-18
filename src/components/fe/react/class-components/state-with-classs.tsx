import React from 'react';
import Code from '../../../shared/code/code';
import { CodeLanguageTypes } from '../../../shared/code/code.types';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, IU, NewLine } from '../../../shared/util/util';

const ReactStateAddToClass = () => {
  return (
    <>
      <Heading as='h3'>Adding State To Class Component</Heading>
      <Para>
        The <BI>"this.state"</BI> variable holds the <I>state values</I>. Let's
        try to understand the state with an example. Below <B>Counter</B>
        <Space /> component is a class component which uses the <Space />
        <I>state variable</I> to <B>"preserve"</B> values between multiple
        renders. The <BI>this.state</BI> should always be an <I>object</I>.
      </Para>

      <Code language={CodeLanguageTypes.JSX}>
        {`class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter : 0 };
  }
	
  incrementCounter = () => {
    this.setState((state) => ({ counter: state.counter + 1 });
  }

  render() {
    return <div>
      <span>Counter Value: {counter}</span>
      <button onClick={this.incrementCounter}>Increment</button>
    </div>
  }
}`}
      </Code>

      <Para>
        <B>{`onClick={this.incrementCounter}`}</B>
        <NewLine />
        This adds the <BI>"click"</BI> event to the button here. The method
        <Space /> <I>"this.incrementCounter()"</I> will be called once the user
        clicks the button.
      </Para>

      <Para>
        <B>super()</B>: It is required to pass <BI>"props"</BI> to the <Space />
        <I>base class</I> constructor (i.e, constructor of React.Component). The
        <BI>super()</BI> call initializes the <BI>"this"</BI> of our component.
      </Para>

      <Para>
        <B>{`this.state = { }`}</B>
        <NewLine />
        Above statement initializes the <I>state</I> of the component. <Space />
        <B>Constructor</B> is the only place where we can <BI>initialize</BI>
        <Space /> the state, all other places should only update the <Space />
        <I>state</I> <Space /> values.
      </Para>

      <Para>
        <B>{`this.setState()`}</B>
        <NewLine />
        Any <B>update</B> to the state value should be made by <Space />
        <BI>this.setState()</BI> method. This method updates the value of state
        and <BI>triggers</BI> a <BI>re-render</BI> for the component.
      </Para>

      <Para>
        The state updates may be <B>batched</B> by React for <Space />
        <B>performance benefits</B>, which means it is not guaranteed the next
        state update will get the updated state values. But often there are
        use-cases where we need updated value before calling <I>setState()</I>.
        To support this, <BI>this.setState()</BI> has <B>multiple</B> syntaxes.
      </Para>

      <Para>
        Let's learn about multiple syntaxes of <I>this.setState()</I> method.
      </Para>

      <Para>
        <IU>Syntax 1:</IU>
        <Code>{`this.setState({ counter : this.state.counter + 1  });`}</Code>
        This is a simpler syntax for updating the state value. But <Space />
        <BI>do not guarantee</BI> the updated state value.
      </Para>

      <Para>
        <IU>Syntax 2:</IU>
        <Code>{`this.setState((state, props) => { 
  counter :  state.counter + props.counter + 1
});`}</Code>
        This uses a <BI>function syntax</BI> and provides the last updated value
        of <BI>state</BI> and <BI>props</BI> as input to the <I>setState()</I>
        <Space /> call.
      </Para>

      <Para>
        <IU>Syntax 3:</IU>
        <Para>
          There could be use-case, where we need to call other
          methods/statements after the state has been updated. For such
          use-cases, <I>setState()</I> has an <B>optional second argument</B>,
          which is a <B>"callback"</B> method. This "callback" is called once
          the state update is completed.
        </Para>
        <Code
          language={CodeLanguageTypes.JSX}
        >{`this.setState((state, props) => { 
  counter :  state.counter + props.counter + 1
  }, () => {
    // callback method
    // This block will be executed, after the state update
});`}</Code>

        <Para>
          When we call <I>setState()</I>, React <B>merges</B> the object we
          provide into the current state. The merging is <B>shallow</B>, which
          means it will only update the given value, leaving other state values
          intact.
        </Para>

        <IU>Example:</IU>
        <Para>
          Let's say our component has <B>2 state variables</B>, and when we
          update one variable, it will not affect the other variable and
          vice-versa.
        </Para>

        <Code language={CodeLanguageTypes.JSX}>
          {`this.state = {
  counter : 0,
  name : ""
}
this.setState({ counter : this.state.counter + 1 });`}
        </Code>

        <Para>
          Above statement will increment the value of <B>"counter"</B> but leave
          the value of <B>"name"</B> intact.
        </Para>

        <Para>
          Similarly, the below statement will only update the <B>"name"</B>.
          <Code
            language={CodeLanguageTypes.JSX}
          >{`this.setState({ name : "React do shallow merging." })`}</Code>
        </Para>
      </Para>
    </>
  );
};

export default ReactStateAddToClass;
