import { IMenuItem } from '../../../shared/navigation-menu/navigation-menu.types';
import {
  IBlogContentType,
  JS_CHALLENGE_CONTENT
} from './javascript-challenge-content';

const routePrefix = '/javascript/code-challenges/';
export const JS_CHALLENGE_MENU_ITEMS: Array<IMenuItem> =
  JS_CHALLENGE_CONTENT.map((blg: IBlogContentType) => {
    return {
      url: `${routePrefix}${blg.url}`,
      label: blg.label
    };
  });

export const JS_FIRST_CHALLENGE = JS_CHALLENGE_MENU_ITEMS[0];
