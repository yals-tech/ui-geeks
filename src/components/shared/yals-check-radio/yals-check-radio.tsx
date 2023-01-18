import classNames from 'classnames';
import React, { memo } from 'react';
import Form from 'react-bootstrap/esm/Form';
import { FormCheckType } from 'react-bootstrap/esm/FormCheck';
import { AppPrefix } from '../../../util/app-constants';
import { IYALSCheckRadioProps } from './yals-check-radio.types';

const YALSCheckRadio = (props: IYALSCheckRadioProps) => {
  const { type, id, name, label, defaultChecked, checked, onChange } = props;

  const checkRadioClasses = classNames({
    [`${AppPrefix}-check-radio`]: true
  });

  return (
    <Form.Check
      className={checkRadioClasses}
      type={type as FormCheckType}
      id={id}
      label={label}
      name={name}
      value={id}
      defaultChecked={defaultChecked}
      onChange={onChange && onChange}
    />
  );
};

export default memo(YALSCheckRadio);
