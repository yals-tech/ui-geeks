import React from 'react';
import Code from '../../../shared/code/code';
import { CodeLanguageTypes } from '../../../shared/code/code.types';
import Heading from '../../../shared/heading/heading';
import Note from '../../../shared/note/note';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I } from '../../../shared/util/util';

const ReactFormAddEventHandlers = () => {
  return (
    <>
      <Heading as='h3'>Adding event handlers</Heading>

      <Para>
        To add an event handler, we will define a function and then pass it as a
        prop to the JSX element.
      </Para>

      <Para>
        By convention, it is common to name event handlers as <B>"handle"</B>
        <Space /> followed by the <I>event name</I>, like <I>handleClick</I>,
        <I>handleMouseEnter</I>, etc and corresponding event props should start
        with <B>"on"</B>, followed by a capital letter like <I>onClick</I>,
        <Space /> <I>onMouseEnter</I>, etc.
      </Para>

      <Para>
        In the below example, we defined an event handler <B>"handleClick"</B>,
        which is passed to the prop <B>"onClick"</B> of the button JSX.
        <Code language={CodeLanguageTypes.JSX}>{`const ButtonComponent = () => {
  const handleClick = () => {
    alert('Login Button Clicked.');
  }
          
  return <button onClick={handleClick}>Login</button>
}
`}</Code>
      </Para>

      <Note>
        Make sure to use appropriate HTML tags for the event handlers. For
        example, to handle clicks, use <Space />
        <B>{`<button onClick={handleClick}></button>`}</B> instead of <Space />
        <B>{`<span onClick={handleClick}></span>`}</B>. Using a real browser
        <Space /> {`<button>`} enables built-in browser behaviors like keyboard
        navigation and other Web Accessibility requirements.
      </Note>

      <Heading as='h3'>Passing Arguments to Event Handlers</Heading>
      <Para>
        By default the event handler receives the <BI>synthetic event</BI>
        <Space /> <I>object</I> as the argument.
      </Para>

      <Para>
        But there could be scenarios where we need to pass additional data to
        the event handler. For example, while displaying a list of components,
        we may need data of the current clicked item.
      </Para>

      <Para>
        We may use the JavaScript <BI>arrow function</BI> or <Space />
        <BI>bind function</BI> to pass additional data.
        <Code language={CodeLanguageTypes.JSX}>{`const ButtonComponent = () => {
  const handleClick = (id, e) => {
    console.log(\`Id: \${id}\`);
  };

  return (
    <>
      {[1, 2, 3].map((id) => {
        return (
          <>
            // Can use either of the below statement
            <button onClick={(e) => handleClick(id, e)}>Item {id}</button>
            <button onClick={handleClick.bind(this, id)}>Item {id}</button>
          </>
        );
      })}
    </>
  );
}
`}</Code>
      </Para>
    </>
  );
};

export default ReactFormAddEventHandlers;
