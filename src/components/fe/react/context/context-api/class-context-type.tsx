import React from 'react';
import Code from '../../../../shared/code/code';
import { CodeLanguageTypes } from '../../../../shared/code/code.types';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import Space from '../../../../shared/space/space';
import { B, BI, I, IU } from '../../../../shared/util/util';

const ReactClassContextType = () => {
  return (
    <>
      <Heading as='h3'>Class.contextType</Heading>
      <Para>
        The <BI>contextType</BI> property can be used to assign a
        <Space /> <B>Context object</B> created by <I>React.createContext()</I>.
        Using this property lets us consume the nearest <I>current value</I>
        <Space /> using <BI>"this.context"</BI>.
      </Para>

      <Para>
        <IU>Syntax:</IU>
        <Code language={CodeLanguageTypes.JSX}>
          {`MyComponent.contextType = ContextObject;`}
        </Code>
      </Para>

      <Para>
        <IU>Example:</IU>

        <Code language={CodeLanguageTypes.JSX}>
          {`const user = { name : "Default User" };
const UserContext = React.createContext(user);

class MyComponent extends React.Component {
  render() {
    const value = this.context;
    return <div>{value.name}</div>
  }
}

MyComponent.contextType = UserContext;`}
        </Code>
      </Para>
    </>
  );
};

export default ReactClassContextType;
