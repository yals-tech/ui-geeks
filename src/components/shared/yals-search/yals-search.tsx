import classNames from 'classnames';
import React, { useState } from 'react';
import Form from 'react-bootstrap/esm/Form';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import { AppPrefix } from '../../../util/app-constants';
import SearchIcon from '../../icons/search-icon';
import YalsModal from '../yals-modal/yals-modal';
import YALSSearchContainer from './yals-search-container';
import './yals-search.scss';

const YALSSearch = () => {
  const [showModal, setShowModal] = useState(false);

  const searchClasses = classNames({
    [`${AppPrefix}-search`]: true
  });

  const showSearchModal = () => {
    setShowModal(() => true);
  };

  const closeSearchModal = () => {
    setShowModal(() => false);
  };

  return (
    <>
      <div className={searchClasses} onClick={showSearchModal}>
        <InputGroup className={`${AppPrefix}-search-input`}>
          <Form.Control
            placeholder='search...'
            aria-label='search content'
            aria-describedby='search-icon'
            disabled={true}
          />
          <InputGroup.Text id='search-icon'>
            <SearchIcon fillColor='white' />
          </InputGroup.Text>
        </InputGroup>
      </div>

      {showModal && (
        <YalsModal
          modalHeader='Search'
          show={showModal}
          onHide={closeSearchModal}
          fullScreen={true}
          modalContent={<YALSSearchContainer onClose={closeSearchModal} />}
        ></YalsModal>
      )}
    </>
  );
};

export default YALSSearch;
