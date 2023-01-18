import { IBlogContentType, JS_BLOG_CONTENT } from './javascript-blog-content';

const routePrefix = '/javascript/blogs/';
export const JS_BLOG_LINK: Array<any> = JS_BLOG_CONTENT.map(
  (blg: IBlogContentType) => {
    return {
      link: `${routePrefix}${blg.url}`,
      label: blg.label,
      lastUpdate: '10/20/2022',
      wordCount: 465
    };
  }
);
