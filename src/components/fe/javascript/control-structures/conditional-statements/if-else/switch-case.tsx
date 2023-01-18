import React from 'react';
import Code from '../../../../../shared/code/code';
import Heading from '../../../../../shared/heading/heading';
import Para from '../../../../../shared/para/para';
import Space from '../../../../../shared/space/space';
import { B, I } from '../../../../../shared/util/util';

const JSSwitchCase = () => {
  return (
    <>
      <Heading as='h3'>switch-case</Heading>
      <Para>
        This can be used to check the number or string value against a given set
        of values. In simple words, it matches a given value against a set of
        values.
      </Para>

      <Code>
        {`let day = 2;
let dayName = "";
switch(day) {
    case 1: dayName = "Monday";  break;
    case 2: dayName = "Tuesday";  break;
    case 3: dayName = "Wednesday";  break;
    case 4: dayName = "Thursday";  break;
    case 5: dayName = "Friday";  break;
    case 6: dayName = "Saturday";  break;
    case 7: dayName = "Sunday";  break;
    default: dayName = "Invalid Day";
}
`}
      </Code>
      <Para>
        <B>case</B> statements are matched with the given value (day). Switch
        stops matching on the first match.
      </Para>
      <Para>
        <B>break</B> statement is used to <I>terminate</I> the switch after
        first selection. If we <I>remove break</I> statements from between the
        cases, in that scenario, all cases after the first match will be
        executed. This is because the switch stops checking/matching after the
        first match, so all following cases will be considered a match.
      </Para>
      <Para>
        <B>default</B> <Space />
        statement is used to define the default case, which will be executed, if
        none of the cases match with the given value. The <I>default</I> case is
        optional.
      </Para>
    </>
  );
};

export default JSSwitchCase;
