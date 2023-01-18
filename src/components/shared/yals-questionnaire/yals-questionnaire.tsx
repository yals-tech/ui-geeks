import classNames from 'classnames';
import React, { memo, useEffect, useState } from 'react';
import { AppPrefix } from '../../../util/app-constants';
import ChevronLeft from '../../icons/chevron-left';
import ChevronRight from '../../icons/chevron-right';
import Heading from '../heading/heading';
import { B, I, NewLine } from '../util/util';
import YalsButton from '../yals-button/yals-button';
import {
  YALSButtonVariantTypes,
  YALSSizeTypes
} from '../yals-button/yals-button.types';
import { YALSCheckRadioTypes } from '../yals-check-radio/yals-check-radio.types';
import YalsFlex from '../yals-flex/yals-flex';
import {
  FlexAlignItemsTypes,
  FlexJustifyContentTypes
} from '../yals-flex/yals-flex.types';
import YALSQuestion from '../yals-question/yals-question';
import {
  QuestionIDType,
  YALSQuestionType
} from '../yals-question/yals-question.types';
import './yals-questionnaire.scss';
import {
  IQuestionnaireProps,
  IQuestionnarieQuestionProps
} from './yals-questionnaire.types';

const RenderQuestion = (props: IQuestionnarieQuestionProps) => {
  const {
    questions,
    currentQuestionIndex,
    handleAnswer,
    preSelected,
    showDefaultAnswer
  } = props;
  const ques = questions[currentQuestionIndex];
  return (
    <YALSQuestion
      key={ques.id}
      questionId={ques.id}
      question={ques.question}
      options={ques.options}
      type={ques.type}
      name={`${ques.name}_${currentQuestionIndex}`}
      onChange={handleAnswer}
      preSelected={preSelected}
      showDefaultAnswer={showDefaultAnswer}
    />
  );
};

const YALSQuestionaire = (props: IQuestionnaireProps) => {
  const { questions } = props;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [submitResponse, setSubmitResponse] = useState<any>({});
  const [answers, setAnswers] = useState<any>({});
  const [showDefaultAnswer, setShowDefaultAnswer] = useState<number>(0);

  const questionnaireClasses = classNames({
    [`${AppPrefix}-questionaire`]: true
  });

  const handleSubmitresponse = (questionId: QuestionIDType, value: number) => {
    setSubmitResponse((prev: any) => {
      return {
        ...prev,
        [questionId]: value
      };
    });
  };

  const resetIncorrectAttempt = () => {
    const ques = questions[currentQuestionIndex];
    ques.incorrectAttempt = 0;
  };

  const handleAnswer = (
    questionId: QuestionIDType,
    selectedOption: QuestionIDType | Array<QuestionIDType>
  ) => {
    handleSubmitresponse(questionId, -1);
    setShowDefaultAnswer(() => 0);

    resetIncorrectAttempt();

    setAnswers((prev: any) => {
      return { ...prev, [questionId]: selectedOption };
    });
  };

  const onPrevClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev: number) => prev - 1);
      resetIncorrectAttempt();
    }
  };

  const onNextClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev: number) => prev + 1);
      resetIncorrectAttempt();
    }
  };

  const onSubmitCurrent = () => {
    const ques = questions[currentQuestionIndex];
    handleSubmitresponse(ques.id, -1);

    if (!answers[ques.id]) {
      handleSubmitresponse(ques.id, 0);

      return;
    }

    let isCorrectAnswer = false;
    switch (ques.type) {
      case YALSCheckRadioTypes.Radio:
        isCorrectAnswer = answers[ques.id] == ques.answer;
        break;

      case YALSCheckRadioTypes.Checkbox:
        isCorrectAnswer =
          answers[ques.id].sort().join(',') === ques.answer.sort().join(',');
        break;
    }

    if (!isCorrectAnswer) {
      ques.incorrectAttempt = (ques.incorrectAttempt || 0) + 1;
    }

    handleSubmitresponse(ques.id, isCorrectAnswer ? 1 : 2);
  };

  const showCorrectAnswer = () => {
    const ques = questions[currentQuestionIndex];
    setAnswers((prev: any) => {
      return { ...prev, [ques.id]: ques.answer };
    });

    handleSubmitresponse(ques.id, 1);
    setShowDefaultAnswer((prev: number) => prev + 1);
  };

  const getAnswer = () => {
    const ques = questions[currentQuestionIndex];
    let answer = '';

    switch (ques.type) {
      case YALSCheckRadioTypes.Radio:
        const radioAnswer = ques.options.find(
          (itm: YALSQuestionType) => itm.id === ques.answer
        );

        if (radioAnswer) {
          answer = radioAnswer.label;
        }
        break;

      case YALSCheckRadioTypes.Checkbox:
        const ans = ques.options.filter(
          (itm: YALSQuestionType) => ques.answer.indexOf(itm.id) > -1
        );

        if (ans.length > 0) {
          answer = ans.map((an: YALSQuestionType) => an.label).join(', ');
        }
        break;
    }

    return (
      <div className='correct-answer'>
        <I>That's correct, answer is</I>: <B>{answer}</B>
      </div>
    );
  };

  useEffect(() => {
    return () => {
      questions.map((ques: any) => {
        ques.incorrectAttempt = 0;
        ques.options.map((opt: any) => {
          opt.isChecked = null;
        });
      });
    };
  }, []);

  return (
    <div className={questionnaireClasses}>
      <Heading as='h4'>Test yourself.</Heading>

      <YalsFlex
        justifyContent={FlexJustifyContentTypes.SpaceBetween}
        alignItems={FlexAlignItemsTypes.Center}
      >
        <Heading as='h6'>
          Question {currentQuestionIndex + 1} of {questions.length}
        </Heading>

        <div className='action-button'>
          <div className='prev-next-btns'>
            <YalsButton
              disabled={currentQuestionIndex <= 0}
              onClick={onPrevClick}
              variant={YALSButtonVariantTypes.Primary}
              size={YALSSizeTypes.Small}
              className='btn-prev'
            >
              <ChevronLeft fillColor='white' /> Prev
            </YalsButton>

            <YalsButton
              disabled={currentQuestionIndex === questions.length - 1}
              variant={YALSButtonVariantTypes.Primary}
              size={YALSSizeTypes.Small}
              onClick={onNextClick}
              className='btn-next'
            >
              Next <ChevronRight fillColor='white' />
            </YalsButton>
          </div>
        </div>
      </YalsFlex>

      <RenderQuestion
        questions={questions}
        currentQuestionIndex={currentQuestionIndex}
        handleAnswer={handleAnswer}
        preSelected={answers}
        showDefaultAnswer={showDefaultAnswer}
      />

      <div className='action-button'>
        <YalsFlex
          justifyContent={FlexJustifyContentTypes.Left}
          alignItems={FlexAlignItemsTypes.Center}
        >
          <YalsButton
            onClick={onSubmitCurrent}
            variant={YALSButtonVariantTypes.Success}
            size={YALSSizeTypes.Small}
          >
            Verify
          </YalsButton>

          {questions[currentQuestionIndex].incorrectAttempt > 3 && (
            <YalsButton
              onClick={showCorrectAnswer}
              variant={YALSButtonVariantTypes.Info}
              size={YALSSizeTypes.Small}
              className='show-correct-answer'
            >
              See Answer
            </YalsButton>
          )}

          {submitResponse[questions[currentQuestionIndex].id] == 1 && (
            <div className='correct-answer'>
              <I>That's correct!</I>
            </div>
          )}

          {submitResponse[questions[currentQuestionIndex].id] == 2 && (
            <div className='wrong-answer'>Incorrect answer!</div>
          )}

          {submitResponse[questions[currentQuestionIndex].id] == 0 && (
            <span className='no-option-selected'>No Answer Selected</span>
          )}
        </YalsFlex>
      </div>

      {submitResponse[questions[currentQuestionIndex].id] == 1 &&
        questions[currentQuestionIndex].explanation && (
          <div className='explanation'>
            <B>Explanation:</B>
            <NewLine />
            {questions[currentQuestionIndex].explanation}
          </div>
        )}
    </div>
  );
};

export default memo(YALSQuestionaire);
