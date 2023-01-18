import React from 'react';
import Para from '../../../shared/para/para';
import { NewLine } from '../../../shared/util/util';

const JSHomeDemoArrayMethods = () => {
  const numArr = [1, 3, 6, 11, 16, 20];

  const logArray = (arr: any) => {
    return JSON.stringify(arr, null, ' ');
  };

  const filterEvenNumbers = () => {
    return logArray(numArr.filter((num: number) => num % 2 === 0));
  };

  const sumOfOddNumbers = () => {
    const sum = numArr.reduce(
      (total: number, num: number) => (total += num % 2 === 0 ? num : 0)
    );

    return sum;
  };

  const sort = () => {
    return logArray(numArr.sort((a: number, b: number) => a - b));
  };

  const reverse = () => {
    return logArray(numArr.reverse());
  };

  const length = () => {
    return logArray(numArr.length);
  };

  const unshift = () => {
    const arr = [1, 3, 6, 11, 16, 20];
    arr.unshift(50);
    return logArray(arr);
  };

  const slice = () => {
    let arr = [1, 3, 6, 11, 16, 20];
    arr = arr.slice(1, 4);
    return logArray(arr);
  };

  return (
    <>
      <div>
        <Para>
          <NewLine />

          <div className='result-item'>
            <span className='key-label'>Original Array:</span>
            <span className='key-value'>{logArray(numArr)}</span>
          </div>

          <div className='result-item'>
            <span className='key-label'>Length of array:</span>
            <span className='key-value'>{length()}</span>
          </div>

          <div className='result-item'>
            <span className='key-label'>Sort numbers:</span>
            <span className='key-value'>{sort()}</span>
          </div>

          <div className='result-item'>
            <span className='key-label'>Reverse array elements:</span>
            <span className='key-value'>{reverse()}</span>
          </div>

          <div className='result-item'>
            <span className='key-label'>Filter even numbers:</span>
            <span className='key-value'>{filterEvenNumbers()}</span>
          </div>

          <div className='result-item'>
            <span className='key-label'>Sum of odd numbers:</span>
            <span className='key-value'>{sumOfOddNumbers()}</span>
          </div>

          <div className='result-item'>
            <span className='key-label'>Sub-array from 1 to 4 index:</span>
            <span className='key-value'>{slice()}</span>
          </div>

          <div className='result-item'>
            <span className='key-label'>Add item at start:</span>
            <span className='key-value'>{unshift()}</span>
          </div>
        </Para>
      </div>
    </>
  );
};

export default JSHomeDemoArrayMethods;

export const JSHomeDemoArrayMethodsCode = `const numArr = [1, 3, 6, 11, 16, 20];
const filterEvenNumbers = () => {
  console.log(numArr.filter(num => num % 2 === 0));
};

const sumOfOddNumbers = () => {
  const sum = numArr.reduce(
    (total, num) => (total += num % 2 === 0 ? num : 0)
  );

  console.log(sum);
};

const sort = () => {
  console.log(numArr.sort((a, b) => a - b));
};

const unshift = () => {
  const arr = [1, 3, 6, 11, 16, 20];
  arr.unshift(50);
  console.log(arr);
};

const slice = () => {
  let arr = [1, 3, 6, 11, 16, 20];
  arr = arr.slice(1, 4);
  console.log(arr);
};

const reverse = () => {
  console.log(numArr.reverse());
};

const length = () => {
  console.log(numArr.length);
};
`;
