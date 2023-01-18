import {
  IBlogContentType,
  JS_CHALLENGE_CONTENT
} from './javascript-challenge-content';

const routePrefix = '/javascript/code-challenges/';
export const JS_CHALLENGE_LINK: Array<any> = JS_CHALLENGE_CONTENT.map(
  (blg: IBlogContentType) => {
    return {
      ...blg,
      link: `${routePrefix}${blg.url}`,
      label: blg.label
    };
  }
);
