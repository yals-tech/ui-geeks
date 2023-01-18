import React, { useEffect, useState } from 'react';
import { TYPER_SPEED } from '../../../util/app-constants';
import { ITextTyperProps } from './text-typer.types';

const TextTyper = (props: ITextTyperProps) => {
  const { words } = props;

  const [typer, setTyper] = useState({
    text: words[0][0],
    index: 0
  });

  const [intervalRef, setIntervalRef] = useState(0);

  const updteTyperText = () => {
    setTyper((prev: any) => {
      let nextIndex = prev.index;
      let nextText = prev.text;

      const currentWord = words[prev.index];

      if (prev.text === currentWord) {
        nextIndex = prev.index === words.length - 1 ? 0 : prev.index + 1;
        nextText = words[nextIndex][0];
      } else {
        let len = prev.text.length;
        nextText = prev.text + currentWord.charAt(len);
      }

      return {
        text: nextText,
        index: nextIndex
      };
    });
  };

  const initializeTyper = () => {
    const timerRef = window.setInterval(() => {
      updteTyperText();
    }, TYPER_SPEED);

    setIntervalRef(timerRef);

    return () => {
      if (intervalRef) {
        window.clearInterval(intervalRef);
      }
    };
  };

  useEffect(() => {
    initializeTyper();
  }, [words]);

  return <>{typer.text}</>;
};

export default TextTyper;
