import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { IOrderedListItemType } from '../../../../types/common';
import Code from '../../../shared/code/code';
import { CodeLanguageTypes } from '../../../shared/code/code.types';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, IU, OrderedList } from '../../../shared/util/util';

const navigateWays: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        <B>{`<Link>`}</B> Component
      </>
    )
  },
  {
    label: (
      <>
        <B>useNavigate()</B> Hook
      </>
    )
  }
];
const ReactRouterNavigation = () => {
  const location = useLocation();
  const [searchParam, setSearchParams] = useSearchParams();

  console.log('searchParam', searchParam.get('id'));
  console.log('searchParam', searchParam.getAll('id'));
  return (
    <>
      <Heading as='h2'>Navigation</Heading>
      <Para>
        When the URL changes, it is called navigation. There are two ways to
        navigate in React Router.
      </Para>
      <OrderedList unOrdered items={navigateWays} />

      <Heading as='h3'>{`<Link>`}</Heading>
      <Para>
        A component used to render a link. It renders a <B>{`<a href>`}</B> tag
        making it <I>web accessible compliant</I>. React Router will prevent the
        browser's default behavior and tell the <BI>history</BI> to push a new
        entry into the <I>history stack</I>. When the user clicks on it, the
        <B>location</B> changes and the new matches will be rendered.
      </Para>

      <IU>Example:</IU>
      <Code
        language={CodeLanguageTypes.JSX}
      >{`<Link to="/home">Home</Link>`}</Code>

      <Heading as='h3'>Relative Link</Heading>
      <Para>
        Relative <I>{`<Link to>`}</I> values (that <Space />
        <B>do not begin with a "/"</B>) are relative to the path of the route
        that rendered them.
      </Para>

      <Heading as='h3'>useNavigate()</Heading>
      <Para>
        This hook returns a <I>function</I> which is used to change the URL
        <Space /> <I>programmatically</I>.
      </Para>

      <IU>Example:</IU>
      <Code language={CodeLanguageTypes.JSX}>{`const navigate = useNavigate();
navigate("/home");`}</Code>

      <Heading as='h3'>Sharing/Accessing URL Data</Heading>
      <Para>
        A route may contain <B>location</B>, <B>state</B>, <Space />
        <B>route parameters</B> and
        <B>query string/search parameters</B>. React Router provides Hooks for
        accessing these values.
      </Para>

      <Heading as='h4'>Adding state to URL</Heading>
      <Para>
        Values added in <B>state</B> are <B>not visible on URL</B>, instead
        these values are <I>hidden</I> that can be accessed <Space />
        <I>programmatically</I>.
      </Para>

      <IU>
        Adding <B>state</B> to URL:
      </IU>
      <Code
        language={CodeLanguageTypes.JSX}
      >{`<Link to="/javascript" state={{ redirectURL : "/home" }} />`}</Code>

      <Code
        language={CodeLanguageTypes.JSX}
      >{`navigate("/javascript", { state : { redirectURL : "/home" } });`}</Code>

      <Heading as='h3'>useLocation()</Heading>
      <Para>
        This Hook returns a <B>location object</B> containing all related
        information for the current route. It contains <I>hash</I>, <I>key</I>,
        <Space /> <I>pathname</I>, <I>search</I> and <I>state</I> attributes of
        the current route.
      </Para>

      <IU>Syntax:</IU>
      <Code
        language={CodeLanguageTypes.JSX}
      >{`const location = useLocation();`}</Code>

      <Para>
        <I>For below link the location object will hold below properties:</I>
      </Para>

      <Code language={CodeLanguageTypes.JSX}>
        {`<Link to="/language?langId=1" 
    state={{ redirectURL : "/home" }}>
Language
</Link>`}
      </Code>

      <Code language={CodeLanguageTypes.JSX}>
        {`location = {
pathname: "/language",
search: "?langId=1",
hash: "",
state:{ redirectURL : "/home" },
key: "default"	
}
`}
      </Code>

      <Heading as='h3'>useParams()</Heading>
      <Para>
        This returns an object containing all the <I>route parameters</I> (if
        any). Route parameters are defined using <B>"/:key"</B> format.
      </Para>

      <IU>Example of route parameters:</IU>
      <Code language={CodeLanguageTypes.JSX}>
        {`<Route path="language/:langId/:topicId" element={<Language />}  />`}
      </Code>

      <IU>Navigation link can be written as follows:</IU>
      <Code language={CodeLanguageTypes.JSX}>
        {`<Link to="/language/1/20">Language</Link>`}
      </Code>

      <Code language={CodeLanguageTypes.JSX}>
        {`const params = useParams();
console.log(params);
// { langId:1, topicId: 20 }
`}
      </Code>

      <Heading as='h3'>useSearchParams()</Heading>
      <Para>
        This hook is used to <B>read and modify</B> the query string parameters
        of the URL. It returns <B>an array of two values</B>: <Space />
        <I>the current location search parameters</I> and a <Space />
        <I>function that may be used to update them</I>.
      </Para>

      <Code language={CodeLanguageTypes.JSX}>
        {`const [searchParams, setSearchParams] = useSearchParams();`}
      </Code>

      <Para>
        <B>searchParams:</B> This contains the query parameter arrtributes. The
        <Space /> <B>{`searchParam.get(<key>)`}</B> function can be used to read
        query parameter value by its key.
      </Para>
      <Code language={CodeLanguageTypes.JSX}>
        {`console.log(searchParam.get('id'));`}
      </Code>

      <Para>
        <B>setSearchParams:</B> This function works like <I>navigate</I>, but
        only for the search portion of the URL.
      </Para>

      <IU>Example of navigation link with search parameters:</IU>
      <Code language={CodeLanguageTypes.JSX}>
        {`<Link to="/language?langId=1&topicId=20">Language</Link>`}
      </Code>

      <Para>
        The component matched with the above URL can read the query parameter
        values.
      </Para>
      <Code language={CodeLanguageTypes.JSX}>
        {`const [searchParams, setSearchParams] = useSearchParams();

const languageId = searchParams.get('langId');
const topicId = searchParams.get('topicId');

console.log(languageId) // 1
console.log(topicId)  // 20
`}
      </Code>
    </>
  );
};

export default ReactRouterNavigation;
