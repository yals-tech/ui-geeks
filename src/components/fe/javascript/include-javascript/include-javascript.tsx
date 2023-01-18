import React, { memo } from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import { IOrderedListItemType, TextAlignTypes } from '../../../../types/common';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Note from '../../../shared/note/note';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, Indent, NewLine, ScriptTag } from '../../../shared/util/util';
import Word from '../../../shared/word/word';
import YALSQuestionaire from '../../../shared/yals-questionnaire/yals-questionnaire';
import YALSSummary from '../../../shared/yals-summary/yals-summary';
import { IncludeScriptQuestions } from '../questionnaires/include-script-questionnaire';
import JSAsyncScriptLoading from './async-loading';
import JSDeferScriptLoading from './defer-loading';
import JSScriptLoadingIntro from './script-loading-intro';
const summaryItems: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        <B>{`<script>`}</B> tags is used for adding JavaScript code to webpage.
      </>
    )
  },
  {
    label: <>HTML on the page is loaded in the order in which they appear.</>
  },
  {
    label: (
      <>
        In <B>"Default Script Loading"</B> strategy, HTML parsing is paused
        during the period of script download and execution.
      </>
    )
  },
  {
    label: (
      <>
        With the <BI>async</BI> attribute, the script is downloaded without
        blocking the page.
      </>
    )
  },
  {
    label: (
      <>
        Scripts with <BI>async</BI> attributes can be downloaded/executed in any
        order.
      </>
    )
  },
  {
    label: (
      <>
        With the <BI>defer</BI> attribute, scripts will not be executed, until
        everything is loaded.
      </>
    )
  },
  {
    label: (
      <>
        Scripts with <BI>defer</BI> attributes will execute in the given order.
      </>
    )
  }
];

const JSInclude = () => {
  useDOMTitle('UI-Geeks: JavaScript | How To Include Code');

  return (
    <Container>
      <Heading>How to include JavaScript code in webpage</Heading>
      <Para>
        <Word bold>
          <ScriptTag />
        </Word>
        tag is used for adding JavaScript code to a webpage. There are two ways
        of adding code via <ScriptTag /> tag.
      </Para>

      <Para>
        <ol>
          <li>
            Inline Script: In this, JavaScript code is written as the content of
            the script tag.
            <NewLine />
            <Word italic>
              <ScriptTag />
            </Word>
            <NewLine />
            <span style={{ marginLeft: '25px' }}>
              console.log("JavaScript code from inline script");
            </span>
            <Para>
              <ScriptTag closing />
            </Para>
          </li>

          <li>
            External Script: In this, a file(.js), containing the code is linked
            to the webpage via the
            <Word bold italic>
              "src"
            </Word>
            <Space />
            attribute of the script tag.
            <Para textAlign={TextAlignTypes.Left}>
              <Word italic>
                <ScriptTag>
                  <Word bold>src='path-to-external-javascript-file'</Word>
                </ScriptTag>
                <ScriptTag closing />
              </Word>
            </Para>
          </li>
        </ol>
      </Para>

      <Note>
        If we write internal and external script in a single &lt;script&gt; tag,
        in this case, inline script will be ignored. For example:
        <NewLine />
        <NewLine />
        <ScriptTag>
          <Word bold>src='path-to-external-javascript-file'</Word>
        </ScriptTag>
        <NewLine />
        <Indent>
          console.log("I will not be executed, will be ignored.");
        </Indent>
        <NewLine />
        <ScriptTag closing />
      </Note>

      <Heading as='h2'>Script Loading Strategies</Heading>

      <Para>
        <JSScriptLoadingIntro />
        <JSAsyncScriptLoading />
        <JSDeferScriptLoading />
      </Para>

      <Para>
        The <BI>async</BI> and <BI>defer</BI> both instruct the browser to
        download the scripts in a separate thread, while the rest of the page is
        loading, so the page loading is not blocked.
      </Para>

      <Note>
        An old-fashioned solution was to put all <B>{`<script>`}</B> tags at the
        <B>bottom of the {`<body>`}</B> tag, so that it would load after all
        HTML has been parsed. The problem with this solution is that
        loading/parsing for the script is completely blocked until the HTML has
        been loaded. On larger sites with lots of JavaScript files, this can
        cause a <B>major performance issue</B>.
      </Note>

      <YALSSummary items={summaryItems} />

      <Para>
        <YALSQuestionaire questions={IncludeScriptQuestions} />
      </Para>
    </Container>
  );
};

export default memo(JSInclude);
