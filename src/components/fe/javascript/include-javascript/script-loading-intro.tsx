import React from 'react';
import { ImagePaths } from '../../../../util/image-path-constants';

import Code from '../../../shared/code/code';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, IU, NewLine, OrderedList } from '../../../shared/util/util';
import YALSImage from '../../../shared/yals-image/yals-image';

const browserActivities = [
  {
    label: (
      <>
        <B>HTML</B>
        <NewLine />
        Parses the HTML content to be rendered on the page
      </>
    )
  },
  {
    label: (
      <>
        <B>JavaScript</B>
        <NewLine />
        Downloads the script file and executes the code. HTML parsing is stopped
        for this duration of download + execute, blocking the page for any user
        interaction. HTML parsing resumes once JavaScript has completed its
        execution.
      </>
    )
  }
];

const strategyType = [
  {
    label: (
      <>
        <BI>async</BI> attribute
      </>
    )
  },
  {
    label: (
      <>
        <BI>defer</BI> attribute
      </>
    )
  }
];

const JSScriptLoadingIntro = () => {
  return (
    <>
      <Para>
        All the HTML on a page is loaded in the order in which it appears. This
        behavior could create problems, when JavaScript is used to manipulate
        the DOM elements. Let's discuss a problem statement, in order to
        understand it better.
      </Para>

      <Para>
        <B>Problem Statement:</B> <Space />
        If we use JavaScript to manipulate elements on the page, code will not
        work, if JavaScript is executed before the HTML is loaded.
      </Para>

      <Para>
        <B>Solution to the problem:</B>
        <NewLine />
        <NewLine />
        <IU>For Inline Scripts:</IU> <Space />
        The <B>DOMContentLoaded</B> event can be used to wait until all HTML
        elements are loaded.
      </Para>

      <Code>
        {`document.addEventListener("DOMContentLoaded", () => {
    // These statements will be executed once all HTML is loaded
});`}
      </Code>

      <Para>
        <IU>For External Scripts:</IU>
        <Space />
        Before exploring the solutions, lets understand how external script
        affects the loading of the web page. Assuming our webpage just has HTML
        and external script files (not considering css, font, etc).
      </Para>

      <Para>
        Browsers performs below activities:
        <OrderedList unOrdered expanded items={browserActivities} />
      </Para>

      <Para textAlign='center'>
        <YALSImage
          width='95%'
          imagePath={ImagePaths.Script_Loading}
          alt='default script loading strategy'
        />
      </Para>

      <Para>
        There are two ways to avoid blocking of page:
        <OrderedList unOrdered items={strategyType} />
      </Para>
    </>
  );
};

export default JSScriptLoadingIntro;
