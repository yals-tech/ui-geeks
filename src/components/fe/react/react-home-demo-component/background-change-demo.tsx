import React, { useState } from 'react';
import { NewLine } from '../../../shared/util/util';
import YalsButton from '../../../shared/yals-button/yals-button';
import { YALSButtonVariantTypes } from '../../../shared/yals-button/yals-button.types';
import YalsFlex from '../../../shared/yals-flex/yals-flex';
import {
  FlexDirectionTypes,
  FlexJustifyContentTypes
} from '../../../shared/yals-flex/yals-flex.types';

const ReactHomeDemoBackgroundChange = () => {
  const [backgroundColor, setBackgroundColor] = useState('#c0c0c0');

  const changeColor = (color: string) => {
    setBackgroundColor(() => color);
  };

  return (
    <>
      <NewLine />
      <YalsFlex
        justifyContent={FlexJustifyContentTypes.SpaceBetween}
        flexDirection={FlexDirectionTypes.Column}
        height='100%'
      >
        <div>
          <div
            key={`background-${backgroundColor}`}
            style={{
              backgroundColor: backgroundColor,
              height: '120px',
              width: '100%'
            }}
          />
        </div>

        <div style={{ height: '35px', marginTop: '20px' }}>
          <YalsFlex justifyContent={FlexJustifyContentTypes.SpaceAround}>
            <YalsButton
              variant={YALSButtonVariantTypes.Danger}
              onClick={changeColor.bind(this, 'red')}
            >
              Red
            </YalsButton>

            <YalsButton
              variant={YALSButtonVariantTypes.Success}
              onClick={changeColor.bind(this, 'green')}
            >
              Green
            </YalsButton>

            <YalsButton
              variant={YALSButtonVariantTypes.Secondary}
              onClick={changeColor.bind(this, 'gray')}
            >
              Gray
            </YalsButton>

            <YalsButton
              variant={YALSButtonVariantTypes.Warning}
              onClick={changeColor.bind(this, '#ffc107')}
            >
              Yellow
            </YalsButton>
          </YalsFlex>
        </div>
      </YalsFlex>
    </>
  );
};

export default ReactHomeDemoBackgroundChange;

export const ReactHomeDemoBackgroundChangeCode = `const ReactBackgroundChange = () => {
  const [backgroundColor, setBackgroundColor] = useState('white');
  const changeColor = (color: string) => {
    setBackgroundColor(() => color);
  };

  return (
    <>
      <div
        key={\`background-\${backgroundColor}\`}
        style={{
          backgroundColor: backgroundColor,
          height: '120px',
          width: '100%'
        }}
      />

      <div style={{ 
          height: '35px', 
          marginTop: '20px'
        }}>
        <button 
          onClick={changeColor.bind(this, 'red')}>
          Red
        </button>
        <button 
          onClick={changeColor.bind(this, 'green')}>
          Green
        </button>
        <button 
          onClick={changeColor.bind(this, 'gray')}>
          Gray
        </button>
        <button 
          onClick={changeColor.bind(this, '#ffc107')}>
          Yellow
        </button>
      </div>
    </>
  );
};
`;
