import { QuestionIDType } from '../yals-question/yals-question.types';

export interface IQuestionnarieQuestionProps {
  questions: Array<any>;
  currentQuestionIndex: number;
  handleAnswer: (
    questionId: QuestionIDType,
    selectedOption: QuestionIDType | Array<QuestionIDType>
  ) => void;
  preSelected: QuestionIDType;
  isSubmitted?: number;
  showDefaultAnswer?: number;
}
export interface IQuestionnaireProps {
  questions: Array<any>;
  fullPage?: boolean;
}

export interface IQuestionnaireTopicType {
  id: number;
  label: string;
  questions: Array<any>;
}
export interface IQuestionnaireListType {
  id: number;
  label: string;
  topics: Array<IQuestionnaireTopicType>;
}
