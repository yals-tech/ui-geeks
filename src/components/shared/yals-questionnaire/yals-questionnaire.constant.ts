import { IQuestionnaireListType } from './yals-questionnaire.types';

export const LANGUAGE_ID = {
  JavaScript: 1,
  React: 2
};

export const JS_TOPIC_ID = {
  Introduction: 1,
  History: 2,
  Console: 3,
  Grammer: 4,
  Include_Script: 5,
  Type: 6,
  Operator: 7,
  Array: 8
};

export const QuestionnaireList: Array<IQuestionnaireListType> = [
  {
    id: 1,
    label: 'JavaScript',
    topics: [
      {
        id: JS_TOPIC_ID.Introduction,
        label: 'Introduction',
        questions: []
      },
      {
        id: JS_TOPIC_ID.History,
        label: 'History',
        questions: []
      },
      {
        id: JS_TOPIC_ID.Console,
        label: 'Console',
        questions: []
      },
      {
        id: JS_TOPIC_ID.Grammer,
        label: 'Grammer',
        questions: []
      },
      {
        id: JS_TOPIC_ID.Include_Script,
        label: 'Include Script',
        questions: []
      },
      {
        id: JS_TOPIC_ID.Type,
        label: 'Type',
        questions: []
      },
      {
        id: JS_TOPIC_ID.Operator,
        label: 'Operator',
        questions: []
      },
      {
        id: JS_TOPIC_ID.Array,
        label: 'Array',
        questions: []
      }
    ]
  }
];
