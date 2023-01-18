import React, { useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Para from '../../../shared/para/para';
import { B, NewLine } from '../../../shared/util/util';
import YALSInput from '../../../shared/yals-input/yals-input';

const ReactHomeDemoStateUpdate = () => {
  const [inputValue, setInputValue] = useState({
    language: 'React',
    version: 16
  });

  const onHandleChange = (evt: any) => {
    const { value, id } = evt.target;

    setInputValue((prev: any) => {
      return {
        ...prev,
        [id]: value
      };
    });
  };

  return (
    <>
      <Para>
        <B>Controlled Component State Update</B>
      </Para>

      <Row>
        <Col xs={6} md={6} sm={6} className='pe-2'>
          <YALSInput
            id='language'
            placeHolder='Enter value...'
            value={inputValue.language}
            label='Enter Language'
            onChange={onHandleChange}
          />
        </Col>

        <Col xs={6} md={6} sm={6}>
          <YALSInput
            id='version'
            placeHolder='Enter version...'
            value={inputValue.version}
            label='Enter Version'
            type='number'
            onChange={onHandleChange}
          />
        </Col>
      </Row>

      <NewLine />

      <B>Form Values:</B>
      <NewLine />
      <span className='text-sm'>{JSON.stringify(inputValue, null, ' ')}</span>
      <NewLine />
    </>
  );
};

export default ReactHomeDemoStateUpdate;

export const ReactHomeDemoStateUpdateCode = `const ReactStateUpdateDemo = () => {
  const [inputValue, setInputValue] = useState({
    language: 'React',
    version: 16
  });

  const onHandleChange = (evt: any) => {
    const { value, id } = evt.target;
    setInputValue((prev: any) => {
      return {
        ...prev,
        [id]: value
      };
    });
  };

  return (
    <>
      <h6>Controlled Component State Update</h6>
      <label>Enter Language</label>
      <input  
        id='language'
        placeHolder='Enter value...'
        value={inputValue.language}
        onChange={onHandleChange}
      />

      <label>Enter Version</label>
      <input  
        id='version'
        placeHolder='Enter version...'
        value={inputValue.version}
        type='number'
        onChange={onHandleChange}
      />
      
      <i>Form Values: </i>
      <span>
        <b>
          {JSON.stringify(inputValue, null, ' ')}
        </b>
      </span>
    </>
  );
};
`;
