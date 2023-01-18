import { IMenuItem } from '../../../shared/navigation-menu/navigation-menu.types';
import { IBlogContentType, JS_BLOG_CONTENT } from './javascript-blog-content';

const routePrefix = '/javascript/blogs/';
export const JS_BLOG_MENU_ITEMS: Array<IMenuItem> = JS_BLOG_CONTENT.map(
  (blg: IBlogContentType) => {
    return {
      url: `${routePrefix}${blg.url}`,
      label: blg.label
    };
  }
);

export const JS_FIRST_BLOG = JS_BLOG_MENU_ITEMS[0];
