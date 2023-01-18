import React from 'react';
import Heading from '../../../../../shared/heading/heading';
import Note from '../../../../../shared/note/note';
import Para from '../../../../../shared/para/para';
import Space from '../../../../../shared/space/space';
import { B } from '../../../../../shared/util/util';

const ReactClassComponentDidMount = () => {
  return (
    <>
      <Heading as='h4'>componentDidMount()</Heading>
      <Para>
        It is invoked immediately after a component is mounted.
        <Space /> <B>Initialization</B> that <B>requires DOM nodes</B> should be
        written here, for example, setting tooltips where we need DOM nodes
        before rendering to get its placement . It is also a good place to
        <Space /> <B>make API calls</B> or <B>set up any subscriptions</B>.
      </Para>

      <Note>
        We may call <B>setState()</B> immediately in <B>componentDidMount()</B>.
        It will trigger an extra rendering, but it will happen before the
        browser updates the screen. This guarantees that even though the
        render() will be called twice, the user won't see the intermediate
        state. Use this pattern with caution because it often causes performance
        issues.
      </Note>
    </>
  );
};

export default ReactClassComponentDidMount;
