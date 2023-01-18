import React, { useState } from 'react';
import Para from '../../../shared/para/para';
import { NewLine } from '../../../shared/util/util';
import YALSInput from '../../../shared/yals-input/yals-input';

const JSHomeDemoStringMethods = () => {
  const [inputValue, setInputValue] = useState('JavaScript language');

  const printReverse = () => inputValue.split('').reverse().join('');
  const getLength = () => inputValue.length;
  const numberOfWords = () => inputValue.split(' ').length;
  const getLowerCaseValue = () => inputValue.toLowerCase();
  const getUpperCaseValue = () => inputValue.toUpperCase();
  const substr = (startIndex: number, endIndex: number) =>
    inputValue.substring(startIndex, endIndex);

  const titleCase = () =>
    inputValue.replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
    );

  const onHandleValueChange = (evt: any) => {
    const { value } = evt.target;
    setInputValue(() => value);
  };

  return (
    <>
      <YALSInput
        id='string_value'
        placeHolder='Enter string value...'
        value={inputValue}
        onChange={onHandleValueChange}
      />

      <div>
        {inputValue && (
          <Para>
            <NewLine />
            <div className='result-item'>
              <span className='key-label'>Length:</span>
              <span className='key-value'>{getLength()}</span>
            </div>

            <div className='result-item'>
              <span className='key-label'>Words:</span>
              <span className='key-value'>{numberOfWords()}</span>
            </div>

            <div className='result-item'>
              <span className='key-label'>UpperCase Value:</span>
              <span className='key-value'>{getUpperCaseValue()}</span>
            </div>

            <div className='result-item'>
              <span className='key-label'>lowercase Value:</span>
              <span className='key-value'>{getLowerCaseValue()}</span>
            </div>

            <div className='result-item'>
              <span className='key-label'>Title Case Value:</span>
              <span className='key-value'>{titleCase()}</span>
            </div>

            <div className='result-item'>
              <span className='key-label'>Reverse:</span>
              <span className='key-value'>{printReverse()}</span>
            </div>

            <div className='result-item'>
              <span className='key-label'>Substring:</span>
              <span className='key-value'>{substr(2, 10)}</span>
            </div>
          </Para>
        )}
      </div>
    </>
  );
};

export default JSHomeDemoStringMethods;

export const JSHomeDemoStringMethodsCode = `const getLength = inputValue => 
  inputValue.length;

const numberOfWords = inputValue => 
  inputValue.split(' ').length;

const getLowerCaseValue = inputValue => 
  inputValue.toLowerCase();

const getUpperCaseValue = inputValue => 
  inputValue.toUpperCase();

const titleCase = inputValue =>
  inputValue.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
  );

const substr = (inputValue, startIndex, endIndex) =>
  inputValue.substring(startIndex, endIndex);

const printReverse = inputValue => inputValue.split('')
  .reverse().join('');
`;
