import classNames from 'classnames';
import React, { memo } from 'react';
import Alert from 'react-bootstrap/esm/Alert';
import { AppPrefix } from '../../../util/app-constants';
import './note.scss';

const Note = (props: any) => {
  const { children, noteText = 'Note', variant = 'primary' } = props;

  const noteClasses = classNames({
    [`${AppPrefix}-note`]: true
  });

  return (
    <div className={noteClasses}>
      <div className='note-text'>{noteText}</div>
      <Alert key={variant} variant={variant}>
        {children}
      </Alert>
    </div>
  );
};

export default memo(Note);
