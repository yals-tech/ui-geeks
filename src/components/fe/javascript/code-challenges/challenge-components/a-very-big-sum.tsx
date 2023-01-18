import React from 'react';
import Code from '../../../../shared/code/code';
import Container from '../../../../shared/container/container';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import { B, I, IU, NewLine, OrderedList } from '../../../../shared/util/util';

const JSChallengeAVeryBigSum = () => {
  return (
    <Container>
      <Heading as='h1'>A Very Big Sum</Heading>

      <Para>
        In this challenge, you are required to calculate and print the sum of
        the elements in an array, keeping in mind that some of those integers
        may be quite large.
        <NewLine />
        <NewLine />
        <B>Function Description</B>
        <NewLine />
        Complete the aVeryBigSum function in the editor below. It must return
        the sum of all array elements.
        <NewLine />
        <NewLine />
        <I>aVeryBigSum</I> has the following parameter(s):
        <OrderedList
          unOrdered
          items={[
            {
              label: 'int ar[n]: an array of integers.'
            }
          ]}
        />
        <Para>
          <B>Return</B>
          <OrderedList
            unOrdered
            items={[
              {
                label: 'long: the sum of all array elements'
              }
            ]}
          />
        </Para>
        <Para>
          <B>Input Format</B>
          <NewLine />
          The first line of the input consists of an integer .
          <NewLine />
          The next line contains space-separated integers contained in the
          array.
        </Para>
        <Para>
          <B>Output Format</B>
          <NewLine />
          Return the integer sum of the elements in the array.
        </Para>
        <Para>
          <B>Constraints</B>
          <NewLine />
          {`1 <= n <= 10`}
          <NewLine />
          {`1 <= ar[i] <= 10`}
          <sup>10</sup>
        </Para>
        <NewLine />
        <B>Sample Input</B>
        <NewLine />
        5
        <NewLine />
        <span>{`[1000000001, 1000000002, 1000000003, 1000000004, 1000000005]`}</span>
        <NewLine />
        <Para>
          <NewLine />
          <B>Output</B>
          <NewLine />
          5000000015
        </Para>
      </Para>

      <Para>
        <IU>Code:</IU>
        <Code>
          {`function aVeryBigSum(ar) {
  return ar.reduce((prevVal, val) => BigInt(prevVal) + BigInt(val));
}`}
        </Code>
      </Para>

      <Para>
        <Code>
          {`const val = aVeryBigSum([
  1000000001, 1000000002, 1000000003, 1000000004, 1000000005
]);

console.log(val); //5000000015
`}
        </Code>
      </Para>
    </Container>
  );
};

export default JSChallengeAVeryBigSum;
