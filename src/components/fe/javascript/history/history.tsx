import React, { memo } from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import { IOrderedListItemType } from '../../../../types/common';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Note from '../../../shared/note/note';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I } from '../../../shared/util/util';
import Word from '../../../shared/word/word';
import YALSQuestionaire from '../../../shared/yals-questionnaire/yals-questionnaire';
import YALSSummary from '../../../shared/yals-summary/yals-summary';
import { HistoryQuestions } from '../questionnaires/history-questionnaire';
import JSVersionTimeLine from './version-timeline';

const summaryItems: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        JavaScript is known as a <I>scripting language</I> for the web, but it
        also runs on <I>non-browser</I> environments.
      </>
    )
  },
  {
    label: (
      <>
        It was created by <B>Brenden Eich</B> in 1995, its first <Space />
        <B>ECMAScript</B> version was released in June, 1997.
      </>
    )
  },
  {
    label: (
      <>
        It was originally going to be called <BI>"LiveScript"</BI> but later
        renamed as <BI>"JavaScript"</BI>.
      </>
    )
  }
];

const JSHistory = () => {
  useDOMTitle('UI-Geeks: JavaScript | History');

  return (
    <Container>
      <Heading>History of JavaScript</Heading>
      <Para>
        While it is most well-known as the scripting language for web pages, it
        is also used in many non-browser environments like Node.Js, Apache
        CouchDB, Adobe Acrobat, etc. It was initially created to embed
        executable code in web pages, to make web pages interactive. But soon it
        became powerful enough to build an entire website using JavaScript.
      </Para>

      <Para>
        It was created by Brenden Eich at NetScape in 1995. It was first
        released with Netscape 2 in 1996. Several months later Microsoft
        released JScript and after several months Netscape submitted JavaScript
        to Ecma International, a European standards organization, which resulted
        in the first edition of the ECMAScript standard in 1997. Since then many
        versions of ECMAScript have been released.
      </Para>

      <JSVersionTimeLine />

      <Note>Since ES6, a new version is released every year.</Note>

      <Para>
        JavaScript was originally going to be called
        <Word bold italic>
          "LiveScript"
        </Word>
        , but it was renamed to "JavaScript" because of two reasons.
        <ol>
          <li>
            Many implementation ideas were taken from JAVA & C, like control
            structure, loops, etc.
          </li>
          <li>
            An ill-fated marketing decision that attempted to capitalize on the
            popularity of JAVA.
          </li>
        </ol>
      </Para>

      <Note>
        Both JAVA & JavaScript are registered trademarks of Oracle in the U.S.
        and other countries.
      </Note>

      <YALSSummary items={summaryItems} />

      <Para>
        <YALSQuestionaire questions={HistoryQuestions} />
      </Para>
    </Container>
  );
};

export default memo(JSHistory);
