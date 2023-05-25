import classNames from 'classnames';
import React, { memo, useEffect, useState } from 'react';
import useDeviceType from '../../custom-hooks/use-device-type';
import { AppPrefix, DeviceType } from '../../util/app-constants';
import BookmarkIcon from '../icons/bookmark-icon';
import IconInstagram from '../icons/icon-instagram';
import YalsButton from '../shared/yals-button/yals-button';
import { YALSButtonVariantTypes } from '../shared/yals-button/yals-button.types';
import YALSDropdown from '../shared/yals-dropdown/yals-dropdown';
import YalsFlex from '../shared/yals-flex/yals-flex';
import { FlexJustifyContentTypes } from '../shared/yals-flex/yals-flex.types';
import QuotesData from './quotes.json';
import './quotes.scss';

interface IQuote {
  i: string | number;
  t: string;
  g: string;
  isFav?: boolean;
}
const FAVS = 'FAV';
const LanguageComponent = () => {
  const deviceType = useDeviceType();

  const GENRE_LIST = QuotesData.genres;
  const QuotesList = QuotesData.list;

  const [qt, setQT] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [quotesList, setQuotesList] = useState<Array<IQuote>>(QuotesList);
  const [favoriteList, setFavoriteList] = useState<Array<number | string>>([]);
  const [swipeVal, setSwipeVal] = useState(0);

  let xDown: any = null;
  let yDown: any = null;

  const quoteCls = classNames({
    [`${AppPrefix}-quote`]: true
  });

  const isMobile = [DeviceType.Mobile, DeviceType.Tablet].includes(deviceType);

  const genreOptions = GENRE_LIST.map((itm: any) => {
    return {
      text: `${itm.label} (${itm.count})`,
      value: itm.id
    };
  });

  genreOptions.unshift({
    text: 'All',
    value: null
  });

  const getTouches = (evt: any) => {
    return evt.touches || evt.originalEvent.touches;
  };

  const handleTouchStart = (evt: any) => {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  };

  function handleTouchMove(evt: any) {
    if (!xDown || !yDown) {
      return;
    }

    const xUp = evt.touches[0].clientX;
    const yUp = evt.touches[0].clientY;
    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 1) {
        /* right swipe - PREV */
        updateIndexFromSwipe(Math.random());
      } else {
        /* left swipe - NEXT */
        updateIndexFromSwipe(Math.random() * -1);
      }

      xDown = null;
      yDown = null;
    }
  }

  const renderContent = (title: string) => {
    const lines = title.split('~');
    return lines.map((ln: any, index: number) => {
      return (
        <div className='text' key={`ln-${index}`}>
          {ln}!
        </div>
      );
    });
  };

  const updateIndex = (incrementCtr: number) => {
    if (incrementCtr === -1) {
      setCurrentIndex((prev: number) => {
        return prev > 0 ? prev - 1 : 0;
      });
    }

    if (incrementCtr === 1) {
      const len = quotesList.length - 1;

      setCurrentIndex((prev: number) => {
        return prev >= len ? len : prev + 1;
      });
    }
  };

  const getFavs = (): Array<any> => {
    const list = localStorage.getItem(FAVS) || '[]';
    return JSON.parse(list);
  };

  const updateFavItems = () => {
    const favList = getFavs();
    quotesList.map((q: IQuote) => {
      q.isFav = favList.includes(q.i);
    });

    setFavoriteList(() => favList);
  };

  const showFavorites = () => {
    const lst = getFavs();
    const filteredList = QuotesList.filter((q: IQuote) => {
      return lst.includes(q.i);
    });

    filteredList.map((itm: IQuote) => (itm.isFav = true));
    setQuotesList(() => filteredList);
    setCurrentIndex(() => 0);
    setSelectedGenre(() => FAVS);
    setQT(() => filteredList[0]);
  };

  const manageBoomark = (qtObj: IQuote) => {
    const lst = getFavs();
    const itmIndex = lst.findIndex((itm) => itm == qtObj.i);
    let isBookmarked = true;
    if (itmIndex === -1) {
      lst.push(qtObj.i);
    } else {
      lst.splice(itmIndex, 1);
      isBookmarked = false;
    }

    localStorage.setItem(FAVS, JSON.stringify(lst));

    const qtItm = quotesList.find((q: IQuote) => q.i === qtObj.i);
    if (qtItm) {
      qtItm.isFav = isBookmarked;
      setQuotesList(() => quotesList);
    }

    setQT((prev: IQuote) => {
      return { ...prev, isFav: isBookmarked };
    });

    setFavoriteList(() => lst);
  };

  const filterQuotes = (genre: any) => {
    if (!genre) {
      setSelectedGenre(() => null);
      setQuotesList(() => QuotesList);
      setCurrentIndex(() => 0);
      setQT(() => QuotesList[0]);
      return;
    }

    if (genre === FAVS) {
      showFavorites();
      return;
    }

    setSelectedGenre(() => genre.id);
    const filteredList = QuotesList.filter((itm) => itm.g == genre.id);

    if (filteredList.length > 0) {
      setQuotesList(() => filteredList);
      setCurrentIndex(() => 0);
      setQT(() => filteredList[0]);
    }
  };

  const handleGenreDropdownChnage = (evt: any) => {
    let { value } = evt.target;
    value = (value.split('(')[0] || '').trim();
    const genreObj = GENRE_LIST.find((itm: any) => itm.label == value);
    filterQuotes(genreObj);
  };

  const RenderFavFilterButton = () => {
    return (
      <YalsButton
        variant={
          selectedGenre === FAVS
            ? YALSButtonVariantTypes.Danger
            : YALSButtonVariantTypes.Secondary
        }
        onClick={() => filterQuotes(FAVS)}
        disabled={favoriteList.length === 0}
      >
        Favorites ({favoriteList.length})
      </YalsButton>
    );
  };

  const updateIndexFromSwipe = (val: number) => {
    setSwipeVal(() => val);
  };

  useEffect(() => {
    updateIndex(swipeVal > 0 ? 1 : -1);
  }, [swipeVal]);

  useEffect(() => {
    updateFavItems();

    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);

    return () => {
      document.removeEventListener('touchstart', handleTouchStart, false);
      document.removeEventListener('touchmove', handleTouchMove, false);
    };
  }, []);

  useEffect(() => {
    if (quotesList.length > 0) {
      const qtItm: IQuote = quotesList[currentIndex] || quotesList[0];
      setQT(() => qtItm);
    }
  }, [currentIndex]);

  if (!qt) {
    return null;
  }

  return (
    <div className={quoteCls}>
      <div className='quote-genre-box'>
        {!isMobile && (
          <>
            <YalsButton
              variant={
                selectedGenre === null
                  ? YALSButtonVariantTypes.Danger
                  : YALSButtonVariantTypes.Secondary
              }
              onClick={() => filterQuotes(null)}
            >
              All
            </YalsButton>

            {GENRE_LIST.map((itm: any) => {
              return (
                <YalsButton
                  variant={
                    selectedGenre === itm.id
                      ? YALSButtonVariantTypes.Danger
                      : YALSButtonVariantTypes.Secondary
                  }
                  onClick={() => filterQuotes(itm)}
                >
                  {itm.label} ({itm.count})
                </YalsButton>
              );
            })}

            <RenderFavFilterButton />
          </>
        )}

        {isMobile && (
          <div className='mob-filter'>
            <div className='genre-dd bg-secondary'>
              <YALSDropdown
                label='Select Genre'
                id='genre_dd'
                onChange={handleGenreDropdownChnage}
                options={genreOptions}
              ></YALSDropdown>
            </div>

            <div className='mob-fav-btn'>
              <RenderFavFilterButton />
            </div>
          </div>
        )}
      </div>

      <div key={`quote_${qt.i}`} className='qt-box'>
        <div className='qt-content'>
          {renderContent(qt.t)}

          <div className='qt-image'>
            <img
              src='images/shayari.jpg'
              height='50'
              width='50'
              alt='shayari'
            />
          </div>

          <div className='insta-qr'>
            <div className='insta-value'>
              <YalsButton
                noHighlight
                className='icon-instagram'
                ariaLabel='Instagram Home Page'
              >
                <IconInstagram fillColor='#bc2a8d' width={20} height={20} />
                <span className='insta-label'>@shayari.book.hindi</span>
              </YalsButton>
            </div>
          </div>
        </div>

        <YalsFlex
          justifyContent={FlexJustifyContentTypes.SpaceBetween}
          className='nav-btn'
        >
          <YalsButton
            variant={YALSButtonVariantTypes.Secondary}
            size={'sm'}
            id='prev_btn'
            disabled={currentIndex === 0}
            onClick={() => updateIndex(-1)}
          >
            Prev
          </YalsButton>

          <div className='total-quotes bg-light text-dark'>
            {currentIndex + 1} of {quotesList.length}
          </div>

          <YalsButton
            size={'sm'}
            id='next_btn'
            variant={YALSButtonVariantTypes.Dark}
            disabled={currentIndex >= quotesList.length}
            onClick={() => updateIndex(1)}
          >
            Next
          </YalsButton>

          <YalsButton
            size={'sm'}
            id='next_btn'
            variant={YALSButtonVariantTypes.Dark}
            onClick={() => manageBoomark(qt)}
          >
            <BookmarkIcon
              key={`${qt.i}_${qt.isFav}`}
              fillColor={qt.isFav ? 'yellow' : 'grey'}
            />
          </YalsButton>
        </YalsFlex>
      </div>
    </div>
  );
};

export default memo(LanguageComponent);
