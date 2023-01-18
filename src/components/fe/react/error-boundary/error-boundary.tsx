import React from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import { IOrderedListItemType } from '../../../../types/common';
import Code from '../../../shared/code/code';
import { CodeLanguageTypes } from '../../../shared/code/code.types';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Note from '../../../shared/note/note';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, IU, OrderedList } from '../../../shared/util/util';
import YALSSummary from '../../../shared/yals-summary/yals-summary';

const summaryItems: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        <B>Error boundaries</B> are <I>class components</I> that <Space />
        <B>catch JavaScript errors</B>. Errors can be logged and a <Space />
        <B>fallback UI</B> can be displayed.
      </>
    )
  },
  {
    label: (
      <>
        Error boundaries do not catch errors for: <I>Event handlers</I>,
        <Space /> <I>asynchronous code</I>, <I>server side rendering</I> and in
        error boundary itself.
      </>
    )
  },
  {
    label: (
      <>
        A class component becomes an error boundary if it defines
        <BI>getDerivedStateFromError()</BI> or <BI>componentDidCatch()</BI> or
        both.
      </>
    )
  }
];

const notCheckItems: Array<IOrderedListItemType> = [
  {
    label: 'Event Handlers'
  },
  {
    label: 'Asynchronous code (like setTimeout)'
  },
  {
    label: 'Server side rendering'
  },
  {
    label: 'Error thrown in the error boundary itself'
  }
];

const ReactErrorBoundary = () => {
  useDOMTitle('UI-Geeks: React | Error Boundaries');

  return (
    <Container>
      <Heading>Error Boundaries</Heading>
      <Para>
        A JavaScript error in a part of the UI shouldn't break the whole
        application. To solve this problem, React 16 introduced the concept of
        an <B>"error boundary"</B>.
      </Para>

      <Para>
        Error boundaries are React components that <Space />
        <B>catch JavaScript errors</B> anywhere in their child component tree,
        <B>log those errors</B>, and <B>display a fallback UI</B> instead of the
        component tree that crashed. Error boundaries catch errors during
        <Space /> <I>rendering</I>, in <I>lifecycle methods</I>, and in
        <Space />
        <I>constructors</I> of the whole tree below them.
      </Para>

      <Para>
        Error boundaries do NOT catch errors for:
        <OrderedList unOrdered items={notCheckItems} />
      </Para>

      <Para>
        A <B>class component</B> becomes an <B>error boundary</B> if it defines
        either (or both) of the lifecycle methods <Space />
        <BI>static getDerivedStateFromError()</BI> or <Space />
        <BI>componentDidCatch()</BI>. Use <Space />
        <I>static getDerivedStateFromError()</I> to render fallback UI after an
        error and use <I>componentDidCatch()</I> to log error information.
      </Para>

      <Note>
        Only <B>class components</B> can be used as Error Boundary, since
        function components do not have any hook for catching errors.
      </Note>

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
}
`}
        </Code>
      </Para>

      <Para>
        Error Boundary can be used as a regular component wrapping the child
        components.
      </Para>

      <Para>
        <Code language={CodeLanguageTypes.JSX}>
          {`<ErrorBoundary>
    <App />
</ErrorBoundary>`}
        </Code>
      </Para>

      <YALSSummary items={summaryItems} />
    </Container>
  );
};

export default ReactErrorBoundary;
