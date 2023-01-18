import React from 'react';
import Code from '../../../../shared/code/code';
import { CodeLanguageTypes } from '../../../../shared/code/code.types';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import { B, IU } from '../../../../shared/util/util';

const ReactUseMemoHook = () => {
  return (
    <>
      <Heading as='h3'>useMemo()</Heading>
      <Para>
        The <B>useMemo</B> will only recompute the <B>memoized value</B> when
        one of the dependencies has changed. This optimization helps to avoid
        expensive calculations on every render. If no dependency array is
        provided, a new value will be computed on every render.
      </Para>

      <Para>
        <IU>Syntax:</IU>
        <Code language={CodeLanguageTypes.JSX}>
          {`const memoizedValue = useMemo(() => expensiveFunction, [/* dependencies */]);`}
        </Code>
      </Para>

      <Para>
        <IU>Example:</IU>
        <Code language={CodeLanguageTypes.JSX}>
          {`const memoizedValue = useMemo(() => 
  computeExpensiveValue(a, b),
[a, b]);`}
        </Code>
      </Para>
    </>
  );
};

export default ReactUseMemoHook;
