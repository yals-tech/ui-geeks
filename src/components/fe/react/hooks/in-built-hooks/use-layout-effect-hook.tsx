import React from 'react';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import Space from '../../../../shared/space/space';
import { B, BI, I } from '../../../../shared/util/util';

const ReactUseLayoutEffectHook = () => {
  return (
    <>
      <Heading as='h3'>useLayoutEffect()</Heading>
      <Para>
        This Hook is identical to <BI>useEffect</BI>, but it fires
        <Space /> <B>synchronously</B> after all DOM mutations. Use this Hook to
        read layout from the DOM and synchronously re-render. Updates scheduled
        inside <I>useLayoutEffect</I> will be flushed synchronously, before the
        browser has a chance to paint.
      </Para>

      <Para>
        Prefer the standard <I>useEffect</I> when possible to avoid blocking
        visual updates.
      </Para>
    </>
  );
};

export default ReactUseLayoutEffectHook;
