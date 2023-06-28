import React from 'react';
import Code from '../../../shared/code/code';
import { CodeLanguageTypes } from '../../../shared/code/code.types';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, IU } from '../../../shared/util/util';

const ReactRenderPropsIntro = () => {
  return (
    <>
      <Heading>Render Props</Heading>
      <Para>
        The term <B>"render prop"</B> refers to a technique for sharing code
        between components using a <I>prop</I> whose value is a <I>function</I>.
        A component with a render prop takes a function that returns a React
        element and calls it instead of implementing its own logic.
      </Para>

      <Para>
        <IU>Example:</IU>
        <Code language={CodeLanguageTypes.JSX}>
          {`const DataSource = (props) =>{
  const [data, setData] = useState({});
  const getData = () => {
    // Can call API here
    setData(()=>  { return { id:1, name : "John"} });
  }
  return <div>{props.render(data)}</div>;
}`}
        </Code>

        <Code language={CodeLanguageTypes.JSX}>
          {`const HomeComponent = () => { 
  return <DataSource render = { 
    data => <div>
        <h1>ID: {data.id}</h1> 
        <h2>Name: {data.name}</h1> 
      </div>
    }
  />
}
`}
        </Code>
      </Para>

      <Para>
        In the above example, the <B>DataSource</B> component will do the data
        manipulation and provide the <BI>data</BI> to the passed <Space />
        <I>prop function</I> <B>"render"</B>. In this way, the <I>state</I> of
        the <B>DataSource</B> component can be reused in any component.
      </Para>

      <Para>
        More concretely, a <B>render prop</B> is a <I>function prop</I> that a
        component uses to know what to render.
      </Para>

      <Para>
        It's important to remember that just because the pattern is called
        <B>"render props"</B> we don't have to use a prop named <B>"render"</B>.
        In fact, <B>any name can be used</B> for defining the <Space />
        <I>render props</I>.
      </Para>
    </>
  );
};

export default ReactRenderPropsIntro;
