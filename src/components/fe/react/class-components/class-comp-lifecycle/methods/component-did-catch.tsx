import React from 'react';
import Code from '../../../../../shared/code/code';
import { CodeLanguageTypes } from '../../../../../shared/code/code.types';
import Heading from '../../../../../shared/heading/heading';
import Para from '../../../../../shared/para/para';
import Space from '../../../../../shared/space/space';
import { B, BI, I, IU } from '../../../../../shared/util/util';

const ReactClassComponentDidCatch = () => {
  return (
    <>
      <Heading as='h4'>componentDidCatch()</Heading>
      <Para>
        It is invoked after an error has been thrown by a descendant component.
      </Para>

      <Code>{`componentDidCatch(error, info)`}</Code>

      <Para>
        <B>error</B>: Error thrown from the component.
      </Para>

      <Para>
        <B>info</B>: An object with a <BI>componentStack</BI> key containing
        information about which component threw the error.
      </Para>

      <Para>
        It is called during the <B>"commit"</B> phase, so <I>side-effects</I>
        <Space /> are permitted. It should be used for things like logging the
        errors.
      </Para>

      <Para>
        <IU>Example:</IU>
        <Code language={CodeLanguageTypes.JSX}>
          {`class ErrorBoundary extends React.Component {
  constructor(props) { 
    super(props);
    this.state = { hasError : false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError : true };
  }

  componentDidCatch(error, info) {
    // Example "componentStack"
    // in ComponentThatThrows (created by App)
    // in ErrorBoundary (created by App)
    // in div (created by App)
    // in App
    logError(info.componentStack);
  }

  render() {
    if(this.state.hasError) {
      // Render any fallback UI for error handling
      return <h1>Something went wrong.</h1>
    }

    return this.props.children;
  }
}`}
        </Code>
      </Para>

      <Para>
        <B>Production</B> and <B>development</B> builds of React slightly differ
        in the way <I>componentDidCatch()</I> handles errors.
      </Para>

      <Para>
        On <B>development</B>, the errors will <BI>bubble up</BI> to the
        <Space /> <BI>window</BI>, this means that any <BI>window.onerror</BI>
        <Space /> or <BI>window.addEventListener("error", callback)</BI> will
        intercept the errors that have been caught by <I>componentDidCatch()</I>
        .
      </Para>

      <Para>
        On <B>production</B>, the errors will <BI>not bubble up</BI>, which
        means any ancestor error handler will only receive errors <Space />
        <BI>not explicitly caught</BI> by componentDidCatch().
      </Para>
    </>
  );
};

export default ReactClassComponentDidCatch;
