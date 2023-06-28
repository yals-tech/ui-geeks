import React from 'react';
import Code from '../../../shared/code/code';
import { CodeLanguageTypes } from '../../../shared/code/code.types';
import Heading from '../../../shared/heading/heading';
import Note from '../../../shared/note/note';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, IU } from '../../../shared/util/util';

const ReactControlledComponentIntro = () => {
  return (
    <>
      <Heading as='h2'>Controlled Components</Heading>

      <Para>
        A component is <B>"controlled"</B> when the information in it is driven
        by the <I>props</I> rather than its own local <I>state</I>. This lets
        the parent component fully specify the child component's behavior.
        Controlled components are flexible to use, but require parent components
        to fully configure them via <I>props</I>.
      </Para>

      <Para>
        For every <I>state value</I>, we will choose the component that
        <Space /> <B>owns</B> it. This principle is also known as having a
        <B>"single source of truth"</B>. It doesn't mean that all
        <Space /> <I>state values</I> live in one component, but that for each
        <I>state</I>, there is a component that owns it.
      </Para>

      <Para>
        Instead of duplicating the shared <I>state</I> between components,
        <Space /> <BI>lift it up</BI> to their common shared parent, and
        <Space /> <I>pass it down</I> to the children that need it.
      </Para>

      <Para>
        Controlled components are a bit faster, because of less <I>state</I>
        <Space /> management and are easier to debug because the state is
        controlled by the parent component.
      </Para>

      <Heading as='h3'>Creating Controlled Form Element</Heading>
      <Para>
        HTML form elements work a bit differently from other DOM elements in
        React, because form elements naturally keep some internal state. In
        React, <B>mutable state</B> is typically kept in the <I>state</I>
        <Space /> property of the components and updated by React. In such a
        case, React state is the <B>"single source of truth"</B>.
      </Para>

      <Para>
        An <I>input form element</I> whose value is controlled by React can be
        called a <B>"controlled component"</B>. With a controlled component, the
        input's value is always driven by the React <I>state</I>. Controlled
        components accept input props and update them by calling the change
        handlers.
      </Para>

      <Para>
        In HTML, form elements such as <I>{`<input>, <select>, <textarea>`}</I>
        <Space /> typically maintain their own state and update it based on user
        input.
      </Para>

      <Para>
        <IU>Example:</IU>
        <Code language={CodeLanguageTypes.JSX}>
          {`const CustomForm = () => {
  const [name, setName] = useState("");
  const [experience, setHasExperience] = useState("no");
	
  const handleChange = (evt) => {
    setName(() => evt.target.value);
  }

  const handleExpChange = (evt) => {
    setHasExperience(() => evt.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("Name: ", name);
    console.log("React Experience: ", experience);
  }

  return <form onSubmit={handleSubmit}>
    <label>Name: 
      <input type=”text” value={name} onChange={handleChange} />
    <label>

    <label>Have React Experience: 
      <select value={experience} onChange={handleExpChange}>
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>
    <label>

    <button type="submit">Submit</button>
  </form>
}
`}
        </Code>
      </Para>

      <Note>
        We can pass an array into the value attribute, allowing us to select
        multiple options in a {`<select>`} tag.
        <Code language={CodeLanguageTypes.JSX}>
          {`<select multiple={true} value={["a", "c"]}>
  <option value="a">A</option>
  <option value="b">B</option>
  <option value="c">C</option>
  <option value="d">D</option>
</select>`}
        </Code>
      </Note>
    </>
  );
};

export default ReactControlledComponentIntro;
