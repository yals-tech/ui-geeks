import React, { memo } from 'react';
import { BOOKS } from '../../../util/app-constants';
import { ImagePaths } from '../../../util/image-path-constants';
import { BookProviderLink } from '../../home/book-provider/book-provider';
import './react-home.scss';

const ReactBooks = () => {
  return (
    <div className='white-box'>
      <div className='book-lover-text'>
        <div className='intro'>
          If reading is your <span className='highlight'>superpower</span>, is
          your <span className='highlight'>therapy</span> or you feel{' '}
          <span className='highlight'>proud to be a book worm</span>.
        </div>
        <div className='explore'>
          Then you may explore below book of{' '}
          <span className='highlight'>React Js</span>.
        </div>
      </div>

      <div className=' language-book-section'>
        <div className='flex-group'>
          <div className='book-desc'>
            This React Js Core Concepts handbook contains the core concepts of
            ReactJs along with React-Router. The book does not try to cover
            every concept of React & React Router, instead it focuses on the
            minimum amount of knowledge required to work as an individual
            contributor.
          </div>

          <div className='flex flex-direction-column flex-grow-1'>
            <div className='flex '>
              <a href={BOOKS.REACT.REACT_NOTION_PRESS.url} target='_blank'>
                <img
                  className='book-cover'
                  src={ImagePaths.JS.BOOK_NOTION}
                  alt='JavaScript book available on notion press.'
                />
              </a>

              <div>
                <div className='flex flex-direction-column'>
                  <div>
                    <div className='book-type'>eBook</div>
                    <BookProviderLink
                      url={BOOKS.REACT.AMAZON_KINDLE.IN.url}
                      price={BOOKS.REACT.AMAZON_KINDLE.IN.price}
                      type='kindle'
                    />
                  </div>
                  <div>
                    <div className='book-type'>Paperback</div>
                    <div className='flex'>
                      <BookProviderLink
                        url={BOOKS.REACT.REACT_NOTION_PRESS.url}
                        price={BOOKS.REACT.REACT_NOTION_PRESS.price}
                        type='notion'
                      />

                      <BookProviderLink
                        url={BOOKS.REACT.AMAZON_PAPERBACK.US.url}
                        price={BOOKS.REACT.AMAZON_PAPERBACK.US.price}
                        type='kindle'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex book-info flex-grow-1'>
            <a href={BOOKS.REACT.AMAZON_KINDLE.IN.url} target='_blank'>
              <img
                className='book-cover'
                src={ImagePaths.REACT.BOOK_KINDLE}
                alt='JavaScript book available on amazon kindle.'
              />
            </a>

            <div>
              <div className='flex flex-gap-2 flex-direction-column'>
                <div>
                  <div className='book-type'>eBook</div>

                  <BookProviderLink
                    url={BOOKS.REACT.AMAZON_KINDLE.IN.url}
                    price={BOOKS.REACT.AMAZON_KINDLE.IN.price}
                    type='kindle'
                  />
                </div>
                <div>
                  <div className='book-type'>Paperback</div>

                  <BookProviderLink
                    url={BOOKS.REACT.AMAZON_PAPERBACK.US.url}
                    price={BOOKS.REACT.AMAZON_PAPERBACK.US.price}
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

export default memo(ReactBooks);
