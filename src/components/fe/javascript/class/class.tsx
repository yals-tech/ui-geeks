import React, { memo } from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import { IOrderedListItemType } from '../../../../types/common';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, OrderedList } from '../../../shared/util/util';
import YalsQuestionnaire from '../../../shared/yals-questionnaire/yals-questionnaire';
import YALSSummary from '../../../shared/yals-summary/yals-summary';
import { ClassQuestions } from '../questionnaires/class-questionnaire';
import JSClassConstructor from './class-constructor';
import JSClassDeclaration from './class-declaration';
import JSClassExpression from './class-expression';
import JSClassPrivateField from './class-private-fields';
import JSClassInheritance from './inheritance/inheritance';
import JSClassStaticMembers from './static-members';
import JSThisWithStaticMembers from './this-with-static-members';

const summaryItems: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        <B>Classes</B> are templates for <I>objects</I>, encapsulating data and
        methods.
      </>
    )
  },
  {
    label: (
      <>
        Classes can be defined as: <B>Class Declaration</B> and
        <Space /> <B>Class Expression</B>.
      </>
    )
  },
  {
    label: (
      <>
        Class definition is not <B>hoisted</B>. The body of class executes in
        <B>strict mode</B>.
      </>
    )
  },
  {
    label: (
      <>
        <BI>Constructor</BI> is a special method for creating and initializing
        class instances.
      </>
    )
  },
  {
    label: (
      <>
        <B>Static members</B> are called without instantiating class and can't
        be called with <I>class instances</I>.
      </>
    )
  },
  {
    label: (
      <>
        When a <BI>static</BI> or <I>prototype/instance</I> methods are called
        without a value of <BI>this</BI>, the value of <BI>this</BI> will be
        <BI>undefined</BI> inside the method.
      </>
    )
  },
  {
    label: (
      <>
        <B>Private</B> members are creating using the <B>"#"</B> prefix.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>extends</BI> keyword is used to implement <B>inheritance</B>.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>super()</BI> calls the parent constructor with given parameters.
      </>
    )
  },
  {
    label: (
      <>
        <B>Abstract classes</B> or <B>mix-ins</B> are templates for classes,
        used to <BI>extend</BI> a class from multiple parent classes.
      </>
    )
  }
];

const classDefType = [
  {
    label: 'Class Declaration'
  },
  {
    label: 'Class Expression'
  }
];
const JSClass = () => {
  useDOMTitle('UI-Geeks: JavaScript | Class');

  return (
    <Container>
      <Heading>Class</Heading>
      <Para>
        The classes are templates for creating objects. They encapsulate data
        with methods to work on that data. Classes in fact are special
        functions.
      </Para>

      <Para>
        Classes can be defined in two ways:
        <OrderedList items={classDefType} />
      </Para>

      <Para>
        <JSClassDeclaration />
        <JSClassExpression />
        <JSClassConstructor />
        <JSClassStaticMembers />
        <JSThisWithStaticMembers />
        <JSClassPrivateField />
      </Para>

      <Para>
        <JSClassInheritance />
      </Para>

      <YALSSummary items={summaryItems} />

      <Para>
        <YalsQuestionnaire questions={ClassQuestions} />
      </Para>
    </Container>
  );
};

export default memo(JSClass);
