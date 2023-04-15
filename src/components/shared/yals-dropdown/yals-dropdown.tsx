import classNames from 'classnames';
import React from 'react';
import Form from 'react-bootstrap/esm/Form';
import { AppPrefix } from '../../../util/app-constants';
import './yals-dropdown.scss';
import {
  IYALSDropdownItemType,
  IYALSDropdownProps
} from './yals-dropdown.types';

const YALSDropdown = (props: IYALSDropdownProps) => {
  const { options, id, value, label, placeHolder, icon, onChange } = props;

  const inputClasses = classNames({
    [`${AppPrefix}-dropdown`]: true
  });

  return (
    <div className={inputClasses}>
      {label && (
        <label className='input-label' htmlFor={id}>
          {label}
        </label>
      )}

      <Form.Select
        size='sm'
        id={id}
        placeholder={placeHolder}
        aria-label={id}
        aria-describedby={id}
        onChange={onChange && onChange}
        value={value}
      >
        {options.map((opt: IYALSDropdownItemType) => (
          <option key={opt.text}>{opt.text}</option>
        ))}
      </Form.Select>
    </div>
  );
};

export default YALSDropdown;
