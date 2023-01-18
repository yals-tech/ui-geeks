import React from 'react';
import Code from '../../../shared/code/code';
import { CodeLanguageTypes } from '../../../shared/code/code.types';
import Heading from '../../../shared/heading/heading';
import Note from '../../../shared/note/note';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, IU } from '../../../shared/util/util';

const ReactListKeys = () => {
  return (
    <>
      <Heading as='h2'>Keys</Heading>
      <Para>
        Keys help React identify which items have changed, are added, or are
        removed. Keys should be given to the elements inside the array to give
        the elements a stable identity.
      </Para>

      <Para>
        Let's add a <BI>key</BI> to elements of our last example.
      </Para>

      <Para>
        <IU>Example:</IU>
        <Code language={CodeLanguageTypes.JSX}>
          {`const ListComponent = (props) => {
  const { items } = props;

  const listElements = items.map((names) => {
    return <li key={name}>{name}</li>
  }

  return <ul>{listElements}</ul>
}
`}
        </Code>
      </Para>

      <Para>
        If we do not add an <B>explicit key</B> to list items then React will
        use the
        <B>array indexes</B> as the <I>keys</I>.
      </Para>

      <Note>
        React <B>doesn't</B> recommend using indexes for keys if the <Space />
        <B>order of items may change</B>. This can negatively <Space />
        <B>impact performance</B> and may cause issues with component state.
      </Note>

      <Para>
        <BI>Keys</BI> serve as a hint to React but they don't get passed to our
        components.
      </Para>

      <Para>
        <IU>Example:</IU>
        <Code language={CodeLanguageTypes.JSX}>
          {`const element = items.map((item) =>{
  <ListComponent 
    key={item.id} 
    id={item.id} />
});
`}
        </Code>
      </Para>

      <Para>
        In the above example, <B>ListComponent</B> can read <BI>props.id</BI>,
        but not <BI>props.key</BI>.
      </Para>

      <Heading as='h3'>Keys must only be unique among siblings</Heading>
      <Para>
        Keys used within arrays should be unique among their siblings. However,
        they don't need to be globally unique. We can use the same keys with two
        different arrays.
      </Para>
    </>
  );
};

export default ReactListKeys;
