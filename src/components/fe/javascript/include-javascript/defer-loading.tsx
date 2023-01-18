import React from 'react';
import { ImagePaths } from '../../../../util/image-path-constants';

import Code from '../../../shared/code/code';
import { CodeLanguageTypes } from '../../../shared/code/code.types';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import { BI, I } from '../../../shared/util/util';
import YALSImage from '../../../shared/yals-image/yals-image';

const JSDeferScriptLoading = () => {
  return (
    <>
      <Heading as='h2'>defer</Heading>
      <Para>
        Scripts loaded with the <BI>defer</BI> attribute will load in the order
        they appear on page. They won't run until page content has all loaded,
        which is useful if scripts depend either on the DOM or to each other.
      </Para>

      <Code language={CodeLanguageTypes.HTML}>
        {`<script defer src="script1.js"></script>
<script defer src="script2.js"></script>`}
      </Code>

      <Para>
        <I>Script1</I> will be downloaded/executed first.
      </Para>

      <Para textAlign='center'>
        <YALSImage
          width='95%'
          imagePath={ImagePaths.Defer_Script_Loading}
          alt='defer script loading strategy'
        />
      </Para>
    </>
  );
};

export default JSDeferScriptLoading;
