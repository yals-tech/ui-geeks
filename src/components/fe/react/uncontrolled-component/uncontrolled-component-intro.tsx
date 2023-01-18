import React from 'react';
import { IOrderedListItemType } from '../../../../types/common';
import Code from '../../../shared/code/code';
import { CodeLanguageTypes } from '../../../shared/code/code.types';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, IU } from '../../../shared/util/util';

const whenToUse: Array<IOrderedListItemType> = [
  {
    label: 'Managing focus, text selection, or media playback.'
  },
  {
    label: 'Integrating with third-party DOM libraries.'
  }
];
const ReactUnControlledComponentIntro = () => {
  return (
    <>
      <Heading as='h2'>Uncontrolled Components</Heading>
      <Para>
        Components whose values are not controlled by React, instead are
        controlled by DOM itself are called <B>"uncontrolled components"</B>.
        For example, an <I>{`<input type="file" />`}</I> is always an
        uncontrolled component because its value can only be set by a user, and
        not programmatically.
      </Para>

      <Para>
        To write an uncontrolled component, instead of writing an event handler
        for every state update, we can <B>use a ref</B> to get form values from
        the DOM. <BI>Refs</BI> are used to access DOM nodes or React elements in
        uncontrolled components. React prefers to avoid using <BI>refs</BI> for
        anything that can be done declaratively.
      </Para>

      <Para>
        <IU>Example 1:</IU>
        <Space /> Using ref in <B>class components.</B>
      </Para>
      <Para>
        Below code focuses the <I>{`<input />`}</I> element on mount.
      </Para>
      <Para>
        <Code language={CodeLanguageTypes.JSX}>
          {`class AutoFocusInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }
	
  componentDidMount() {
    this.textInput.current.focusTextInput();
  }

  render() {
    return <input type=”text” ref={this.textInput} />
  }
}`}
        </Code>
      </Para>

      <Para>
        <IU>Example 2:</IU>
        <Space /> Using ref in <B>function components.</B>
      </Para>

      <Para>
        <Code language={CodeLanguageTypes.JSX}>
          {`const AutoFocusInput = () => {
  const textInput = useRef();
  useEffect(() =>  {
    textInput.current.focusTextInput();
  },[ ]);
  return <input type=”text” ref={this.textInput} />
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

export default ReactUnControlledComponentIntro;
