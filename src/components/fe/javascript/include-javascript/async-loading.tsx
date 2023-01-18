import React from 'react';
import { ImagePaths } from '../../../../util/image-path-constants';

import Code from '../../../shared/code/code';
import { CodeLanguageTypes } from '../../../shared/code/code.types';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { BI, I } from '../../../shared/util/util';
import YALSImage from '../../../shared/yals-image/yals-image';

const JSAsyncScriptLoading = () => {
  return (
    <>
      <Heading as='h2'>async</Heading>
      <Para>
        Scripts loaded using the <BI>async</BI> attribute on <I>{`<script>`}</I>
        <Space />
        will download the script without blocking the page. However, once the
        download is complete, the script will be executed, which blocks the page
        from rendering. There's also no guarantee that scripts will run in any
        specific order. It is best to use <I>async</I> when the scripts in the
        page runs independently.
      </Para>

      <Code language={CodeLanguageTypes.HTML}>
        {`<script async src="script1.js"></script>
<script async src="script2.js"></script>`}
      </Code>

      <Para>Any of the two scripts can be downloaded/executed first.</Para>

      <Para textAlign='center'>
        <YALSImage
          width='95%'
          imagePath={ImagePaths.Asyn_Script_Loading}
          alt='async script loading strategy'
        />
      </Para>
    </>
  );
};

export default JSAsyncScriptLoading;
