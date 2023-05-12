import classNames from 'classnames';
import React, { memo, useContext } from 'react';
import Modal from 'react-bootstrap/esm/Modal';
import { AppPrefix, THEME_CONSTANT } from '../../../util/app-constants';
import { AppContext } from '../../../util/app-context';
import { YALSSizeTypes } from '../yals-button/yals-button.types';
import './yals-modal.scss';
import { IYALSModalProps } from './yals-modal.types';

const YALSModal = (props: IYALSModalProps) => {
  const {
    show,
    fullScreen,
    modalHeader,
    modalContent,
    size = YALSSizeTypes.Small,
    onHide
  } = props;

  const appContext = useContext(AppContext);
  const modalClasses = classNames({
    [`${AppPrefix}-modal`]: true,
    [`theme-${appContext.theme}`]: true
  });

  const isFullScreen = fullScreen ? true : 'false';

  return (
    <Modal
      className={modalClasses}
      show={show}
      fullscreen={isFullScreen}
      onHide={onHide}
      size={size as 'sm'}
    >
      <Modal.Header
        closeButton
        closeVariant={
          appContext.theme === THEME_CONSTANT.DARK_THEME ? 'white' : ''
        }
      >
        <Modal.Title>{modalHeader}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{modalContent}</Modal.Body>
    </Modal>
  );
};

export default memo(YALSModal);
