import React from 'react';
import Code from '../../../../shared/code/code';
import { CodeLanguageTypes } from '../../../../shared/code/code.types';
import Heading from '../../../../shared/heading/heading';
import Para from '../../../../shared/para/para';
import Space from '../../../../shared/space/space';
import { B, BI, I, IU } from '../../../../shared/util/util';

const ReactUseContextHook = () => {
  return (
    <>
      <Heading as='h3'>useContext()</Heading>
      <Para>
        This hook is used to access <B>Context</B> values inside the function
        component.
      </Para>

      <Para>
        <IU>Syntax:</IU>
        <Code language={CodeLanguageTypes.JSX}>
          {`const value = useContext(ContextObject)`}
        </Code>
      </Para>

      <Para>
        <B>ContextObject</B>: It is the React Context object, returned from
        <I>React.createContext()</I> method.
      </Para>

      <Para>
        The <I>useContext()</I> Hook accepts a context object <Space />
        <B>"ContextObject"</B> and returns the current context <B>value</B> for
        that context. The current context value is determined by the <Space />
        <BI>value prop</BI> of the nearest <B>{`<ContextObject.Provider>`}</B>
        <Space /> above the calling component in the tree.
      </Para>

      <Para>
        When the nearest <B>{`<ContextObject.Provider>`}</B> updates the
        <Space /> <BI>value</BI>, this Hook will trigger a re-render with the
        latest context value.
      </Para>

      <Para>
        <IU>Example:</IU>
        <Code language={CodeLanguageTypes.JSX}>
          {`const user = { name : "Default User", authenticated: false };
const UserContext = React.createContext(user);`}
        </Code>

        <Code language={CodeLanguageTypes.JSX}>
          {`const LoginButton = () => { 
  const userInfo = useContext(UserContext);
  return <div>
    <span>Username: {userInfo.name}</span>
    <button>{userInfo.authenticated  ? "Logout" : "Login"}</button>
  </div>
}`}
        </Code>

        <Code language={CodeLanguageTypes.JSX}>
          {`const Home = () => { 
  const [userInfo, setUserInfo]  = useState(null) ;	
  const toggleLogin = () => { 
    setUserInfo(()=> {
      return { name : "Home User", authenticated: true } 
    });
  }

  return <UserContext.Provider value={userInfo }>
    <LoginButton />
    <button onClick={toggleLogin}>Toggle Login</button>
  </UserContext.Provider>
}`}
        </Code>
      </Para>
    </>
  );
};

export default ReactUseContextHook;
