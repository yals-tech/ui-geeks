import React from 'react';
import Code from '../../../shared/code/code';
import { CodeLanguageTypes } from '../../../shared/code/code.types';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, IU } from '../../../shared/util/util';

const ReactListsIntro = () => {
  return (
    <>
      <Para>
        Since JSX embraces JavaScript expressions, we can use JavaScript
        constructs like for <I>loop, map(), forEach()</I> or any other <Space />
        <I>iterable entity</I> of JavaScript to render a list of React
        elements/components.
      </Para>

      <Para>
        <IU>Example:</IU>
        <Code language={CodeLanguageTypes.JSX}>
          {`const ListComponent = (props) => {
  const { items } = props;
	
  const listElements = items.map((names) => {
    return <li>{name}</li>
  }

  return <ul>{listElements}</ul>
}

const element = <ListComponent items={["React", "Controlled Component"]} />
`}
        </Code>
      </Para>

      <Para>
        In the above example, <BI>map()</BI> method is used to build the list of
        <Space /> <B>{`<li>`}</B> elements. Above code will render below output:
        <ul>
          <li>React</li>
          <li>Controlled Component</li>
        </ul>
      </Para>
    </>
  );
};

export default ReactListsIntro;
