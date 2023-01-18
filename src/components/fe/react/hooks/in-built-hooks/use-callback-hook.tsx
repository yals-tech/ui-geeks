import React from 'react';
import Code from '../../../../shared/code/code';
import { CodeLanguageTypes } from '../../../../shared/code/code.types';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import Space from '../../../../shared/space/space';
import { B, BI, I, IU } from '../../../../shared/util/util';

const ReactUseCallbackHook = () => {
  return (
    <>
      <Heading as='h3'>useCallback()</Heading>
      <Para>
        This Hook is used to create a <I>memoized callback</I>, which will
        execute only on the change of the given dependencies.
      </Para>

      <Para>
        <IU>Syntax:</IU>
        <Code language={CodeLanguageTypes.JSX}>
          {`const memoizedCallback = useCallback(() => {
  // expensive expressions
}, [/* dependency list */])`}
        </Code>
      </Para>

      <Para>
        The <BI>useCallback</BI> will return a memoized version of the
        <Space /> <B>callback</B> that only changes if one of the dependencies
        has changed.
      </Para>

      <Para>
        The <BI>useCallback(fn, deps)</BI> is equivalent to
        <Space /> <BI>{`useMemo(() => fn, deps)`}</BI>.
      </Para>

      <Para>
        <IU>Example:</IU>
        <Code language={CodeLanguageTypes.JSX}>
          {`const memoizedCallback = useCallback(() => {
  doSomeExpensive(a, b);
}, [a, b]);
`}
        </Code>
      </Para>

      <Para>
        In the above code, <B>"doSomeExpensive"</B> method will be called on
        change on the given dependencies <B>"a"</B> and <B>"b"</B>.
      </Para>
    </>
  );
};

export default ReactUseCallbackHook;
