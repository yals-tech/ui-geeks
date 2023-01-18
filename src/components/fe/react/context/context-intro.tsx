import React from 'react';
import Code from '../../../shared/code/code';
import { CodeLanguageTypes } from '../../../shared/code/code.types';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, I, IU } from '../../../shared/util/util';

const ReactContextIntro = () => {
  return (
    <>
      <Para>
        Context provides a way to pass data through the <I>component tree</I>
        <Space /> without having to pass <I>props</I> down manually at every
        level.
      </Para>

      <Para>
        In React application, data is passed <B>top-down</B> (parent to child
        component) via props, but this approach can lead to a concept called
        <B>"prop drilling"</B>, where we have to add <I>prop</I> to every child
        component in the tree, whether or not that child component needs that
        <Space /> <I>prop</I>. This continuous drilling is required to send the
        props to the desired component in the tree.
      </Para>

      <Para>
        <IU>Example:</IU>
        <Code language={CodeLanguageTypes.JSX}>
          {`const PropDrill = () => {
  const userName = "John";
  return <FirstComponent name = {userName} />
}

const FirstComponent = (props) => {
  const { name } = props;
  // This do not use "name", but still we have to pass
  // in order to pass the value to next child in tree
  return <SecondComponent name = {name} />
}

const SecondComponent = (props) => {
  // This component needs "name" prop to display
  const { name } = props;
  return <div>Username is: {name}</div>
}`}
        </Code>
      </Para>
    </>
  );
};

export default ReactContextIntro;
