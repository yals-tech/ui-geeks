import React from 'react';
import Code from '../../../../shared/code/code';
import { CodeLanguageTypes } from '../../../../shared/code/code.types';
import Heading from '../../../../shared/heading/heading';
import Note from '../../../../shared/note/note';
import Para from '../../../../shared/para/para';
import Space from '../../../../shared/space/space';
import { B, BI, I, IU, NewLine } from '../../../../shared/util/util';

const ReactUseEffectHook = () => {
  return (
    <>
      <Heading as='h3'>useEffect()</Heading>
      <Para>
        The <BI>useEffect</BI> hook is used to perform <I>side effects</I> in
        <Space /> <I>function components</I>. Side effects can be calling APIs,
        setting up the subscription, setting timers, etc. By using this hook, we
        tell React that our component needs to do something after render. React
        will remember the function and call it later after performing the DOM
        updates. React guarantees the DOM has been updated by the time it runs
        the effects.
      </Para>

      <Note>
        Hooks embrace JavaScript closures to access the function state.
      </Note>

      <Para>
        <IU>Syntax:</IU>
        <Code language={CodeLanguageTypes.JSX}>
          {`useEffect(()= >{
    // body of the side-effects

    // optional return statement
    return () => {
        // Unmount statements
    }
}, <optional-dependencies-array>)
`}
        </Code>
      </Para>

      <Para>
        <B>{`<optional-dependencies-array>`}</B>: This is the optional Array of
        dependencies, which instructs React, when to call this side-effect.
        React observes the changes in values of the dependency array items, and
        will call the side-effect statements, on change of any dependency.
      </Para>

      <Para>
        <B>{`return () => { }`}</B>
        <NewLine />
        <I>{`useEffect()`}</I> can optionally return a function, which will be
        called on component unmount or before running the next effect.
      </Para>

      <Para>
        <IU>Example:</IU>
        <Code>
          {`const Counter = () => {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        document.title = \`Clicked \${counter} times.\`;
        // cleanup activity
        return () => {
            document.title = \`Clicked 0 times.\`;
        }
    });

    const handleButtonClick = () => {
        setCounter((prev) => prev+1);
    }

    return <div>
        <span>You clicked {count} times.</span>
        <button onClick={handleButtonClick}>Click</button>
    </div>
}
`}
        </Code>
      </Para>

      <Para>
        Compared to class component's lifecycle methods, this one hook is
        equivalent to <BI>componentDidMount()</BI>, <Space />
        <BI>componentDidUpdate()</BI> and <BI>componentWillUnmount()</BI>
        <Space /> combined together.
      </Para>

      <Para>
        Let's learn how <BI>useEffect()</BI> can be used as <Space />
        <I>componentDidMount()</I>, <I>componentDidUpdate()</I> and
        <Space /> <I>componentWillUnmount()</I>.
      </Para>

      <Heading as='h5'>As componentDidMount()</Heading>

      <Para>
        Passing <B>empty [] dependency</B> to <I>useEffect()</I> will make it
        equivalent to <B>componentDidMount()</B> and statements will be executed
        only once.
      </Para>

      <Para>
        <IU>Syntax:</IU>
        <Code>{`useEffect(()= >{ },[ ])`}</Code>
      </Para>

      <Para>
        <IU>Example:</IU>
        <Code language={CodeLanguageTypes.JSX}>
          {`const User = () => {
    useEffect(() =>{ 
        document.title = "useEffect() equivalent to componentDidUpdate()";
    }, []);

    return <div>Hello</div>;
}`}
        </Code>
      </Para>

      <Para>
        Above code will call <BI>useEffect()</BI> only once on <B>mount</B>.
      </Para>

      <Heading as='h5'>As componentDidUpdate()</Heading>
      <Para>
        <B>Passing the dependency array</B> to <I>useEffect()</I> will make it
        equivalent to <B>componentDidUpdate()</B> and statements will be
        executed on every update to the dependency items.
      </Para>

      <Para>
        <IU>Syntax:</IU>
        <Code>{`useEffect(()= >{ },[dependency1, dependency2,..., dependencyN])`}</Code>
      </Para>

      <Para>
        <IU>Example:</IU>
        <Code language={CodeLanguageTypes.JSX}>
          {`const User = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [message, setMessage] = useState("");

    useEffect(() =>{ 
        setMessage(() => \`Name: \${name}, age: \${age}\`);
    }, [name, age]);

    return <div>{message}</div>;
}
`}
        </Code>
      </Para>

      <Para>
        Above code will call <BI>useEffect()</BI> on <B>mount</B> as well as
        <Space /> <B>on change</B> in value of <BI>"name"</BI> or <BI>"age"</BI>
        .
      </Para>

      <Heading as='h5'>As componentWillUnmount()</Heading>
      <Para>
        <I>useEffect()</I> optionally returns a <BI>function</BI>, which is
        called before running the <I>useEffect()</I> again. Returning this
        <Space /> <I>function</I> along with <B>empty dependency []</B> will be
        equivalent to <B>componentWillUnmount()</B>.
      </Para>

      <Para>
        <IU>Syntax:</IU>
        <Code>{`useEffect(()= >{
    return () =>{
        // cleanup statements
    }
},[])
`}</Code>
      </Para>

      <Para>
        <IU>Example:</IU>
        <Code language={CodeLanguageTypes.JSX}>
          {`const User = () => {
  useEffect(() =>{ 
    document.title = "useEffect() equivalent to componentDidUpdate()";
    return () => { 
      document.title = “Default title”;
    }
  }, []);

  return <div>Hello</div>;
}`}
        </Code>
      </Para>

      <Note>
        If useEffect() returns a function with some dependency or without any
        dependency, in such cases the returned function (cleanup method) will be
        invoked on every update. This may lead to performance issues, if not
        used wisely.
      </Note>

      <Note>
        Unlike componentDidMount() or componentDidUpdate(), effects scheduled
        with <B>useEffect() don't block the browser from updating the screen</B>
        . This makes the app more responsive. The majority of effects don't need
        to happen synchronously. In uncommon cases where they do (such as
        measuring the layout), there is a separate useLayoutEffect Hook with an
        API identical to useEffect().
      </Note>
    </>
  );
};

export default ReactUseEffectHook;
