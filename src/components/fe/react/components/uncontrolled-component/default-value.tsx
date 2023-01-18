import React from 'react';
import Code from '../../../../shared/code/code';
import { CodeLanguageTypes } from '../../../../shared/code/code.types';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import Space from '../../../../shared/space/space';
import { B, BI, I } from '../../../../shared/util/util';

const ReactFormDefaultValue = () => {
  return (
    <>
      <Heading as='h2'>Default Values</Heading>
      <Para>
        In the React rendering lifecycle, the <BI>value</BI> attribute on form
        elements will override the value in the DOM. With an <Space />
        <I>uncontrolled component</I>, we often want React to specify the
        <B>initial value</B>, but leave subsequent updates <I>uncontrolled</I>.
        In such cases, we can add <BI>defaultValue</BI> attribute instead of
        <BI>value</BI>. Changing the value of <BI>defaultValue</BI> after a
        component has mounted will not cause any update of the value in the DOM.
      </Para>

      <Para>
        Similarly, <B>checkbox</B>, <B>radio</B> elements have <Space />
        <BI>defaultChecked</BI> attributes.
      </Para>

      <Code language={CodeLanguageTypes.JSX}>
        {`const DefaultValueComponent = () => {
  const textInput = useRef();
  const checkboxInput = useRef();

  useEffect(() =>  {
    textInput.current.focusTextInput();
  },[ ]);

  return <div>
    <input type="text"
      ref={this.textInput}
      defaultValue="Hello" />

    <input type="checkbox"
      ref={this.checkboxInput} 
      defaultChecked={true} />
  </div>
}`}
      </Code>
    </>
  );
};

export default ReactFormDefaultValue;
