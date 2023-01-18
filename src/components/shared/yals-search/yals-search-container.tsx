import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import Form from 'react-bootstrap/esm/Form';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { AppPrefix } from '../../../util/app-constants';
import { JSLINK } from '../../fe/javascript/js-link-tree';
import { REACT_LINK } from '../../fe/react/react-link-tree';
import SearchIcon from '../../icons/search-icon';
import Heading from '../heading/heading';
import Para from '../para/para';
import YalsButton from '../yals-button/yals-button';
import { YALSButtonVariantTypes } from '../yals-button/yals-button.types';
import YalsFlex from '../yals-flex/yals-flex';
import { FlexJustifyContentTypes } from '../yals-flex/yals-flex.types';
import { IYALSSearDataType } from './yals-search.types';

const MIN_LENGTH = 2;

const searchData: Array<IYALSSearDataType> = [
  {
    language: 'JavaScript',
    data: JSLINK
  },
  {
    language: 'React',
    data: REACT_LINK
  }
];

const YALSSearchContainer = (props: any) => {
  const { onClose } = props;

  const navigate = useNavigate();
  let inputRef = useRef(null);

  const [searchResult, setSearchResult] = useState<Array<any>>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchClasses = classNames({
    [`${AppPrefix}-search-container`]: true
  });

  const handleSearchTerm = (
    searchValue: string,
    currentData: Array<any>,
    language: string
  ) => {
    let result: Array<any> = [];
    currentData.forEach((itm: any) => {
      itm.tags &&
        itm.tags.forEach((tag: any) => {
          if (tag.toLowerCase().indexOf(searchValue) > -1) {
            const existingResItemIndex = result.findIndex(
              (itm1: any) => itm.link === itm1.link
            );
            if (existingResItemIndex === -1) {
              result.push({ ...itm, matchingElement: [tag] });
            } else {
              result[existingResItemIndex].matchingElement.push(tag);
            }
          }
        });
    });

    if (result.length > 0) {
      return {
        language,
        result
      };
    }

    return null;
  };

  const onHandleChange = (evt: any) => {
    const { value } = evt.target;
    setSearchTerm(() => value);
    if (!value || (value || '').toString().length < MIN_LENGTH) {
      setSearchResult(() => []);
      return;
    }

    const searchTerm = (value || '').toLowerCase();

    let result: Array<any> = [];
    searchData.map((search: IYALSSearDataType) => {
      const res = handleSearchTerm(searchTerm, search.data, search.language);
      if (res) {
        result.push({ ...res });
      }
    });

    setSearchResult(() => result);
  };

  const clearSearchResult = () => {
    setSearchTerm(() => '');
    setSearchResult(() => []);
    focusElement();
  };

  const onHandleLinkClick = (itm: any) => {
    onClose();
    if (itm) {
      navigate(itm.link);
    }
  };

  const focusElement = () => {
    if (inputRef && inputRef.current) {
      const elm = ReactDOM.findDOMNode(inputRef.current) as HTMLInputElement;
      elm && elm.focus();
    }
  };
  useEffect(() => {
    focusElement();
  }, []);

  return (
    <div className={searchClasses}>
      <InputGroup className={`${AppPrefix}-search-input`}>
        <Form.Control
          placeholder='search...'
          aria-label='search content'
          aria-describedby='search-icon'
          onChange={onHandleChange}
          // onKeyUp={onHandleKeyUp}
          value={searchTerm}
          ref={inputRef}
        />
        <InputGroup.Text id='search-icon'>
          <SearchIcon fillColor='white' />
        </InputGroup.Text>
      </InputGroup>

      <div className='search-result-wrapper'>
        {searchResult.map((res: any) => {
          return (
            <Para key={res.language}>
              <Heading as='h4'>{res.language}</Heading>
              <YalsFlex
                justifyContent={FlexJustifyContentTypes.SpaceAround}
                className='topic-list'
              >
                {res.result.map((menu: any) => {
                  return (
                    <div className='insight' key={menu.label}>
                      <YalsButton
                        key={menu.link}
                        onClick={onHandleLinkClick.bind(this, menu)}
                        variant={YALSButtonVariantTypes.Clear}
                      >
                        <div className='insight-value'>{menu.label}</div>
                        <div className='matching-term'>
                          {menu.matchingElement.join(', ')}
                        </div>
                      </YalsButton>
                    </div>
                  );
                })}
              </YalsFlex>
            </Para>
          );
        })}

        {searchTerm &&
          (searchTerm || '').toString().length > MIN_LENGTH &&
          searchResult.length === 0 && (
            <div className='no-result-found'>
              <div className='msg'>
                No Result Found,
                <YalsButton
                  variant={YALSButtonVariantTypes.Link}
                  onClick={clearSearchResult}
                >
                  try clearing search query.
                </YalsButton>
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default YALSSearchContainer;
