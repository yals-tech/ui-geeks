import React from 'react';
import Code from '../../../../../shared/code/code';
import Heading from '../../../../../shared/heading/heading';
import Note from '../../../../../shared/note/note';
import Para from '../../../../../shared/para/para';
import Space from '../../../../../shared/space/space';
import { B, BI } from '../../../../../shared/util/util';

const ReactClassComponentDidUpdate = () => {
  return (
    <>
      <Heading as='h4'>componentDidUpdate()</Heading>
      <Para>
        It is invoked immediately after updating occurs. This method is not
        called for the initial render.
      </Para>

      <Code>{`componentDidUpdate(prevProps, prevState, snapshot)`}</Code>

      <Para>
        <B>snapshot</B>: If the component implements the
        <BI>getSnapshotBeforeUpdate()</BI> lifecycle, the value it returns will
        be the value of the third parameter <B>"snapshot"</B>, otherwise this
        parameter will be <BI>undefined</BI>.
      </Para>

      <Para>
        This method can be used to operate on the DOM when the component has
        been updated or calling API on change of props.
      </Para>

      <Note>
        We may call setState() immediately in componentDidUpdate() but <Space />
        <B>it must be wrapped in a condition</B> or it will cause an <Space />
        <B>infinite loop</B>.
      </Note>

      <Note>
        componentDidUpdate() will not be invoked if <Space />
        <B>shouldComponentUpdate()</B> returns <B>false</B>.
      </Note>
    </>
  );
};

export default ReactClassComponentDidUpdate;
