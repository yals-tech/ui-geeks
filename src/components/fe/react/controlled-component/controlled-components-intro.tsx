import React from 'react';
import Code from '../../../shared/code/code';
import { CodeLanguageTypes } from '../../../shared/code/code.types';
import Heading from '../../../shared/heading/heading';
import Note from '../../../shared/note/note';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, I, IU } from '../../../shared/util/util';

const ReactControlledComponentIntro = () => {
  return (
    <>
      <Heading as='h2'>Controlled Components</Heading>
      <Para>
        In HTML, form elements such as <I>{`<input>, <select>, <textarea>`}</I>
        <Space /> typically maintain their own state and update it based on user
        input.
      </Para>

      <Para>
        But, in React, mutable state is typically kept in the state property of
        the components and updated by React. In such a case, React state is the
        <B>"single source of truth"</B>. An input form element whose value is
        controlled by React is called a <B>"controlled component"</B>. With a
        controlled component, the input's value is always driven by the React
        state.
      </Para>

      <Para>
        Controlled components accept <I>input props</I> and update them by
        calling the <I>change handlers</I>.
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
