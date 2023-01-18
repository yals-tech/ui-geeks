import React from 'react';
import Code from '../../../../shared/code/code';
import { CodeLanguageTypes } from '../../../../shared/code/code.types';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import { BI, IU } from '../../../../shared/util/util';

const ReactUseImperativeHandleHook = () => {
  return (
    <>
      <Heading as='h3'>useImperativeHandle()</Heading>
      <Para>
        This Hook customizes the instance value that is exposed to parent
        components when using ref. The useImperativeHandle should be used with
        forwardRef.
      </Para>

      <Para>
        <IU>Syntax:</IU>
        <Code language={CodeLanguageTypes.JSX}>
          {`useImperativeHandle(ref, createHandle, [deps])`}
        </Code>
      </Para>

      <Para>
        <IU>Example:</IU>
        <Code language={CodeLanguageTypes.JSX}>
          {`const CustomInput = (props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => { inputRef.current.focus(); }
  }));

  return <input ref={inputRef} />;
}

CustomInput = forwardRef(CustomInput);
`}
        </Code>
      </Para>

      <Para>
        In above code, a parent component that renders
        <BI>{`<CustomInput ref={inputRef} />`}</BI> would be able to call
        <BI>inputRef.current.focus()</BI>.
      </Para>
    </>
  );
};

export default ReactUseImperativeHandleHook;
