import React from 'react';
import useQTextScroll from '../../../custom-hooks/use-qtext-scroll';
import { BOOKS } from '../../../util/app-constants';
import { ImagePaths } from '../../../util/image-path-constants';
import { BookProviderLink } from '../../home/book-provider/book-provider';

const JSBooks = () => {
  useQTextScroll();
  return (
    <div className='book-box'>
      <div className='book-lover-text'>
        <div className='intro'>
          If reading is your <span className='highlight'>superpower</span>, is
          your <span className='highlight'>therapy</span> or you feel{' '}
          <span className='highlight'>proud to be a book worm</span>.
        </div>
        <div className='explore'>
          Then you may explore below book of{' '}
          <span className='highlight'>JavaScript</span>.
        </div>
      </div>

      <div className='language-book-section'>
        <div className='flex-group flex-justify-center'>
          <div className='book-desc'>
            This JavaScript Core Concepts handbook contains the core concepts of
            JavaScript. The book does not try to cover every concept of
            JavaScript/ECMAScript, instead it focuses on the minimum amount of
            knowledge required to work as an individual contributor.
          </div>

          <div className='flex book-info'>
            <a href={BOOKS.JAVASCRIPT.AMAZON_KINDLE.IN.url} target='_blank'>
              <img
                className='book-cover'
                src={ImagePaths.JS.BOOK_KINDLE}
                alt='JavaScript book available on amazon kindle.'
              />
            </a>

            <div>
              <div className='flex flex-gap-2 flex-direction-column'>
                <div>
                  <div className='book-type'>eBook</div>
                  <BookProviderLink
                    url={BOOKS.JAVASCRIPT.AMAZON_KINDLE.IN.url}
                    price={BOOKS.JAVASCRIPT.AMAZON_KINDLE.IN.price}
                    type='kindle'
                  />
                </div>
                <div>
                  <div className='book-type'>Paperback</div>

                  <BookProviderLink
                    url={BOOKS.JAVASCRIPT.AMAZON_PAPERBACK.US.url}
                    price={BOOKS.JAVASCRIPT.AMAZON_PAPERBACK.US.price}
                    type='kindle'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JSBooks;
