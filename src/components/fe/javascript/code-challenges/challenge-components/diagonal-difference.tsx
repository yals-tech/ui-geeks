import React from 'react';
import Code from '../../../../shared/code/code';
import Container from '../../../../shared/container/container';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import {
  B,
  BI,
  I,
  Indent,
  IU,
  NewLine,
  OrderedList
} from '../../../../shared/util/util';

const JSChallengeDiagonalDifference = () => {
  return (
    <Container>
      <Heading as='h1'>Get Diagonal Difference</Heading>

      <Para>
        Given a square matrix, calculate the absolute difference between the
        sums of its diagonals.
      </Para>
      <Para>For example, the square matrix is shown below:</Para>

      <Para>
        1<Indent />
        2<Indent />
        3
        <NewLine />
        4<Indent />5<Indent />6
        <NewLine />9<Indent />8<Indent />9
      </Para>

      <Para>
        The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal
        = 3 + 9 = 17. Their absolute difference is |15 - 17| = 2.
        <Para>
          <NewLine />
          <B>Function description</B>

          <Para>Complete the function in the editor below.</Para>
        </Para>
        diagonalDifference takes the following parameter:
        <NewLine />
        <OrderedList
          unOrdered
          items={[
            {
              label: 'int arr[n][m]: an array of integers'
            }
          ]}
        />
        <NewLine />
        <B>Return</B>
        <OrderedList
          unOrdered
          items={[
            {
              label: 'int: the absolute diagonal difference'
            }
          ]}
        />
        <NewLine />
        <B>Input Format</B>
        <NewLine />
        The first line contains a single integer, <BI>n</BI>, the number of rows
        and columns in the square matrix <I>arr</I>. Each of the next lines
        describes a row, <I>arr[i]</I>, and consists of <I>n</I> space-separated
        integers <I>{`arr[i][j]`}</I>.
        <NewLine />
        <B>Constraints</B>
        <OrderedList
          unOrdered
          items={[
            {
              label: '-100 <= arr[i][j] <= 100'
            }
          ]}
        />
        <NewLine />
        <B>Output Format</B>
        <NewLine />
        Return the absolute difference between the sums of the matrix's two
        diagonals as a single integer.
        <NewLine />
        <NewLine />
        <Para>
          <B>Sample Input</B>
          <NewLine />
          3
          <NewLine />
          <NewLine />
          8
          <Indent />2<Indent />4
          <NewLine />
          4<Indent />
          5<Indent />6
          <NewLine />
          2
          <Indent />8<Indent />
          -12
          <NewLine />
          <NewLine />
          <B>Sample Output</B>
          <NewLine />
          <B>10</B>
        </Para>
      </Para>

      <Para>
        <IU>Code:</IU>
        <Code>
          {`function diagonalDifference(arr) {
  const arrSize = arr.length;
  let primaryDiagonalSum = 0;
  let secondaryDiagonalSum = 0;

  for (let i = 0; i <= arrSize; i++) {
    const arrItem = arr[i];
    for (let j = 0; j < arrSize; j++) {
      if (i === j) {
        primaryDiagonalSum += arrItem[j];
      }

      if (j === arrSize - 1 - i) {
        secondaryDiagonalSum += arrItem[j];
      }
    }
  }

  return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
}
`}
        </Code>
      </Para>

      <Para>
        <Code>
          {`const val = diagonalDifference([
  [8, 2, 4],
  [4, 5, 6],
  [2, 8, -12]
]);

console.log(val); // 10
`}
        </Code>
      </Para>
    </Container>
  );
};

export default JSChallengeDiagonalDifference;
