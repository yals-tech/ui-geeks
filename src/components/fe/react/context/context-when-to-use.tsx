import React from 'react';
import Code from '../../../shared/code/code';
import { CodeLanguageTypes } from '../../../shared/code/code.types';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, IU } from '../../../shared/util/util';

const ReactContextWhenToUse = () => {
  return (
    <>
      <Heading as='h2'>When to use Context</Heading>
      <Para>
        Context is designed to share data that can be considered <B>"global"</B>
        <Space /> for a tree of React components, such as the <Space />
        <I>current user</I>, <I>theme</I>, or <I>preferred language</I>. By
        using context, we can avoid passing props to intermediate elements of
        the child tree.
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

      <Para>
        In the above code, <B>LoginButton</B> component will render below
        elements on the <B>mount</B> of the component.
        <Code language={CodeLanguageTypes.HTML}>
          {`<span>Username: Default User</span>
<button>Login</button>
`}
        </Code>
      </Para>

      <Para>
        But once a user clicks on <BI>toggleButton</BI> in the <B>Home</B>
        <Space /> component, the <B>Home</B> component will be <Space />
        <I>re-rendered</I>, because the value of the context will change. Now
        the <B>LoginButton</B> component will render the below elements.
        <Code language={CodeLanguageTypes.HTML}>
          {`<span>Username: Home User</span>
<button>Logout</button>`}
        </Code>
      </Para>
    </>
  );
};

export default ReactContextWhenToUse;
