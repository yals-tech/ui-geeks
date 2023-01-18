import classNames from 'classnames';
import React from 'react';
import Form from 'react-bootstrap/esm/Form';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import { AppPrefix } from '../../../util/app-constants';
import './yals-input.scss';
import { IYALSInputProps } from './yals-input.types';

const YALSInput = (props: IYALSInputProps) => {
  const {
    id,
    value,
    type = 'text',
    label,
    placeHolder,
    icon,
    onChange,
    onKeyUp
  } = props;

  const inputClasses = classNames({
    [`${AppPrefix}-input`]: true
  });

  return (
    <div className={inputClasses}>
      {label && (
        <label className='input-label' htmlFor={id}>
          {label}
        </label>
      )}

      <InputGroup>
        <Form.Control
          id={id}
          type={type}
          placeholder={placeHolder}
          aria-label={id}
          aria-describedby={id}
          onChange={onChange && onChange}
          onKeyUp={onKeyUp && onKeyUp}
          value={value}
          size='sm'
        />

        {icon && <InputGroup.Text id='search-icon'>{icon}</InputGroup.Text>}
      </InputGroup>
    </div>
  );
};

export default YALSInput;
