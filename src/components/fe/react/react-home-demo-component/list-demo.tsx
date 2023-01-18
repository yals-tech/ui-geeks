import React from 'react';
import Space from '../../../shared/space/space';
import { B, I } from '../../../shared/util/util';

const ReactDemoList = () => {
  const numArr = Array.from(Array(10).keys());
  return (
    <>
      {numArr.map((num: number) => {
        return (
          <div>
            <I>Number</I> <Space /> <B>{num}</B> is <Space />
            <B>{num % 2 === 0 ? 'Even' : 'Odd'}</B>
          </div>
        );
      })}
    </>
  );
};

export default ReactDemoList;

export const ReactDemoListCode = `const ReactListDemo = () => {
  const numArr = Array.from(Array(10).keys());
  return (
    <>
      {numArr.map((num: number) => {
        return <div>
          <i>Number</i> <b>{num}</b> is 
          <b>{num % 2 === 0 ? 'Even' : 'Odd'}</b>
        </div>
      })}
    </>
  );
};
`;
