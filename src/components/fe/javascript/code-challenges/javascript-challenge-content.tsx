import React, { lazy, ReactNode } from 'react';
import JSChallengeAVeryBigSum from './challenge-components/a-very-big-sum';
const JSChallengeDiagonalDifference = lazy(
  () => import('./challenge-components/diagonal-difference')
);

export interface IBlogContentType {
  id: number;
  label: string;
  url: string;
  content: ReactNode | string;
  lastUpdate: string;
  wordCount: number;
}

export interface IBlogMenuType {
  label: string;
  link: string;
}

export const JS_CHALLENGE_CONTENT: Array<IBlogContentType> = [
  {
    id: 1,
    label: 'Diagonal Difference',
    url: 'diagonal-difference',
    content: <JSChallengeDiagonalDifference />,
    lastUpdate: '10/20/2022',
    wordCount: 245
  },
  {
    id: 2,
    label: 'A Very Big Sum',
    url: 'a-very-big-sum',
    content: <JSChallengeAVeryBigSum />,
    lastUpdate: '10/20/2022',
    wordCount: 125
  }
];
