import React from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import Para from '../../../shared/para/para';
import { B, I, NewLine, OrderedList } from '../../../shared/util/util';

const JSControlStructuresIntro = () => {
  useDOMTitle('UI-Geeks: JavaScript | Operators');

  return (
    <>
      <Para>
        JavaScript provides many control structures to control the flow of
        execution. Control structures can be divided in two types of statements:
        <NewLine />
        <NewLine />
        <OrderedList
          expanded
          items={[
            {
              label: (
                <>
                  <B>Condition Statements</B>
                  <NewLine />
                  <I>if-else, switch-case, ternary operator (?:)</I>
                </>
              )
            },
            {
              label: (
                <>
                  <B>Looping/Iteration Statements</B>
                  <NewLine />
                  <I>while, do-while, for, for…of, for…in</I>
                </>
              )
            }
          ]}
        />
      </Para>
    </>
  );
};

export default JSControlStructuresIntro;
