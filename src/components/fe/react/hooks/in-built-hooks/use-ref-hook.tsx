import React from 'react';
import Code from '../../../../shared/code/code';
import { CodeLanguageTypes } from '../../../../shared/code/code.types';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import Space from '../../../../shared/space/space';
import { B, BI, I, IU } from '../../../../shared/util/util';

const ReactUseRefHook = () => {
  return (
    <>
      <Heading as='h3'>useRef()</Heading>
      <Para>
        The <B>useRef</B> returns a mutable <I>ref</I> object whose
        <Space /> <BI>".current"</BI> property is initialized to the passed
        argument <I>(initialValue)</I>. The returned object will persist for the
        full lifetime of the component. This hook is used with <Space />
        <B>uncontrolled components</B>.
      </Para>

      <Para>
        <IU>Example:</IU>
        <Code language={CodeLanguageTypes.JSX}>
          {`const AutoFocusInput = () => {
  const textInput = useRef();
  useEffect(() =>  {
    textInput.current.focusTextInput();
  },[ ]);
  return <input type="text" ref={this.textInput} />
}
`}
        </Code>
      </Para>

      <Para>
        React will assign the <BI>"current"</BI> property with the DOM element
        when the component <I>mounts</I>, and assign it back to <BI>null</BI>
        <Space /> when it <I>unmounts</I>. For <I>class components</I>,
        <Space /> <BI>ref</BI> updates happen before <Space />
        <BI>componentDidMount()</BI> or <BI>componentDidUpdate()</BI> lifecycle
        methods.
      </Para>
    </>
  );
};

export default ReactUseRefHook;
