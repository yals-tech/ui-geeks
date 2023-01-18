import React from 'react';
import Code from '../../../../../shared/code/code';
import { CodeLanguageTypes } from '../../../../../shared/code/code.types';
import Heading from '../../../../../shared/heading/heading';
import Note from '../../../../../shared/note/note';
import Para from '../../../../../shared/para/para';
import Space from '../../../../../shared/space/space';
import { B, IU } from '../../../../../shared/util/util';

const ReactClassGetDerivedStateFromError = () => {
  return (
    <>
      <Heading as='h4'>static getDerivedStateFromError()</Heading>
      <Para>
        It is invoked after an error has been thrown by a <Space />
        <B>descendant component</B>. It received the error that was thrown as a
        parameter and should return a value to update state.
      </Para>

      <Code>{`static getDerivedStateFromError(error)`}</Code>

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

      <Note>
        getDerivedStateFromError() is called during the <B>"render"</B> phase,
        so side-effects are not permitted. For those use cases, use
        <B>componentDidCatch()</B> instead.
      </Note>
    </>
  );
};

export default ReactClassGetDerivedStateFromError;
