import classNames from 'classnames';
import React, { memo, useEffect, useState } from 'react';
import { AppPrefix } from '../../../util/app-constants';
import YALSCheckRadio from '../yals-check-radio/yals-check-radio';
import { YALSCheckRadioTypes } from '../yals-check-radio/yals-check-radio.types';
import './yals-question.scss';
import { IYALSQuestionProps } from './yals-question.types';

const YALSQuestion = (props: IYALSQuestionProps) => {
  const {
    question,
    questionId,
    options,
    type,
    name,
    preSelected,
    showDefaultAnswer,
    onChange
  } = props;

  const questionClasses = classNames({
    [`${AppPrefix}-question`]: true
  });

  const [selected, setSelected] = useState<Array<string | number>>([]);
  const [resetState, setResetState] = useState<number>(0);

  const onQuestionSelection = (opt: any, evt: any) => {
    const { id, checked } = evt.target;
    opt.isChecked = checked;
    if (type === YALSCheckRadioTypes.Checkbox) {
      const [optionId, quesId] = id.split('_');

      let currentSelected = [...selected];

      if (!checked) {
        let itemIndex = currentSelected.indexOf(optionId);

        if (itemIndex === -1) {
          itemIndex = currentSelected.indexOf(+optionId);
        }

        if (itemIndex > -1) {
          currentSelected.splice(itemIndex, 1);
        }
      } else {
        currentSelected.push(optionId);
      }

      setSelected(() => currentSelected);
      onChange(quesId, currentSelected);
    }

    if (type === YALSCheckRadioTypes.Radio) {
      const [optionId, quesId] = id.split('_');
      setSelected(() => optionId);
      onChange(quesId, optionId);
    }
  };

  const isChecked = (opt: any): boolean | undefined => {
    return opt.isChecked;
  };

  const getPreSelectedValues = () => {
    if (preSelected) {
      const preSelectedAnswer = preSelected[questionId];
      if (preSelectedAnswer) {
        return preSelectedAnswer;
      }
    }

    return [];
  };
  const setPreSelected = () => {
    // set selected answer on load, primarily on next/prev navigation
    setSelected(() => getPreSelectedValues());
  };

  useEffect(() => {
    setPreSelected();
  }, []);

  useEffect(() => {
    if (showDefaultAnswer && showDefaultAnswer > 0) {
      setPreSelected();
      setResetState((prev: number) => prev + 1);
      const preSelectedAnswer = getPreSelectedValues();

      options.map((opt: any) => {
        opt.isChecked =
          type === YALSCheckRadioTypes.Checkbox
            ? preSelectedAnswer.indexOf(opt.id) > -1
            : preSelectedAnswer == opt.id;
        return opt;
      });
    }
  }, [showDefaultAnswer]);

  return (
    <div className={questionClasses} key={`ques_${questionId}`}>
      <div className='question'>{question}</div>
      <div className='options'>
        {options.map((opt: any) => {
          return (
            <YALSCheckRadio
              key={`${opt.id}_${questionId}_${resetState}`}
              label={opt.label}
              id={`${opt.id}_${questionId}`}
              type={type}
              name={name}
              defaultChecked={isChecked(opt)}
              onChange={onQuestionSelection.bind(this, opt)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default memo(YALSQuestion);
