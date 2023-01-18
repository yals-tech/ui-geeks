import { ReactNode } from 'react';
import { YALSCheckRadioType } from '../yals-check-radio/yals-check-radio.types';
export type QuestionIDType = string | number;

export interface YALSQuestionType {
  label: string | ReactNode;
  id: QuestionIDType;
}

export interface IYALSQuestionProps {
  question: string | ReactNode;
  questionId: QuestionIDType;

  options: Array<YALSQuestionType>;
  type: YALSCheckRadioType;
  name?: string;
  preSelected?: QuestionIDType | Array<QuestionIDType> | any;
  showDefaultAnswer?: number;
  onChange: (
    questionId: string | number,
    selectedOptionId: QuestionIDType | Array<QuestionIDType>
  ) => void;
}
