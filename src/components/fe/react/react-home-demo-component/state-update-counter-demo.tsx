import React, { useState } from 'react';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, I } from '../../../shared/util/util';
import YalsButton from '../../../shared/yals-button/yals-button';
import { YALSButtonVariantTypes } from '../../../shared/yals-button/yals-button.types';
import YalsFlex from '../../../shared/yals-flex/yals-flex';
import { FlexJustifyContentTypes } from '../../../shared/yals-flex/yals-flex.types';

const ReactHomeCounterDemo = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(() => counter + 1);
  };

  const decrement = () => {
    setCounter(() => counter - 1);
  };

  return (
    <>
      <Para>
        <B>Updating State Values</B>
      </Para>

      <YalsFlex justifyContent={FlexJustifyContentTypes.SpaceBetween}>
        <YalsButton
          variant={YALSButtonVariantTypes.Secondary}
          onClick={decrement}
        >
          Decrement
        </YalsButton>

        <div>
          <B>Counter:</B>
          <Space />
          <I>{counter}</I>
        </div>

        <YalsButton variant={YALSButtonVariantTypes.Dark} onClick={increment}>
          Increment
        </YalsButton>
      </YalsFlex>
    </>
  );
};

export default ReactHomeCounterDemo;

export const ReactHomeCounterDemoCode = `const ReactStateUpdateDemo = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(() => counter + 1);
  };

  const decrement = () => {
    setCounter(() => counter - 1);
  };

  return (
    <>
      <h6>Updating State Values</h6>
      <button onClick={increment}>Increment</button>
      <span><i>Counter</i>: </span>
      <span><b>{counter}</b></span>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};
`;
