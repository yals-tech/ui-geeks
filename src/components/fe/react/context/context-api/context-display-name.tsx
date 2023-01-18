import React from 'react';
import Code from '../../../../shared/code/code';
import { CodeLanguageTypes } from '../../../../shared/code/code.types';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import { I, IU } from '../../../../shared/util/util';

const ReactContextDisplayName = () => {
  return (
    <>
      <Heading as='h3'>Context.displayName</Heading>
      <Para>
        Context object accepts a <I>displayName</I> string property. React
        DevTools uses this name to determine what to display for the context.
        This is used in <I>rare-cases</I>.
      </Para>

      <Para>
        <IU>Example:</IU>
        <Code language={CodeLanguageTypes.JSX}>
          {`const user = { name : "Default User" };
const UserContext = React.createContext(user);
UserContext.displayName = "UserContextAliasName";

<UserContext.Provider>
// "UserContextAliasName.Provider" in DevTools

<UserContext.Consumer>
// "UserContextAliasName.Consumer" in DevTools
`}
        </Code>
      </Para>
    </>
  );
};

export default ReactContextDisplayName;
