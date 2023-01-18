import React, { ChangeEvent, useEffect, useState } from 'react';
import { B } from '../../../shared/util/util';

const JSHomeDemoWordCounter = () => {
  const [text, setText] = useState('JavaScript is a scripting language.');
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = evt.target;
    setText(() => value);
  };

  useEffect(() => {
    const textValue = (text || '').trim();
    const words = !textValue ? 0 : textValue.split(' ').length;
    setWordCount(() => words);
  }, [text]);

  return (
    <>
      <div>
        <textarea
          id='text-input'
          rows={9}
          value={text}
          style={{
            width: '100%',
            padding: '2px 2px 2px 10px',
            fontSize: '12px'
          }}
          onChange={handleTextChange}
        />
      </div>
      Total Words: <B>{wordCount}</B>
    </>
  );
};

export default JSHomeDemoWordCounter;

export const JSHomeDemoWordCounterCode = `const getWordCount = (text) => {
  return (text || '').split(' ').length;
}`;
