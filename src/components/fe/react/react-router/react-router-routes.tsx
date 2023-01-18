import React from 'react';
import { IOrderedListItemType } from '../../../../types/common';
import Code from '../../../shared/code/code';
import { CodeLanguageTypes } from '../../../shared/code/code.types';
import Heading from '../../../shared/heading/heading';
import Note from '../../../shared/note/note';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, OrderedList } from '../../../shared/util/util';

const routeConfig: Array<IOrderedListItemType> = [
  {
    label: '/javascript'
  },
  {
    label: '/javascript/blog/:blogId'
  },
  {
    label: '/javascript/history'
  }
];
const ReactRouterRoutes = () => {
  return (
    <>
      <Heading as='h2'>BrowserRouter</Heading>
      <Para>
        This is a <I>{`<Router>`}</I> that uses the <BI>HTML5 history</BI> API (
        <I>pushState</I>, <I>replaceState</I> and <I>postState</I> events) to
        keep the UI in sync with the URL. URLs built with BrowserRouter follow
        the standard URL structure. For example: <I>"/language/React"</I>.
      </Para>

      <Para>
        An alternate to this is <B>{`<HashRouter>`}</B>, that uses the
        <Space /> <B>hash</B> portion of the URL (i.e., <Space />
        <I>window.location.hash</I>).
      </Para>

      <Note>
        <B>Hash history</B> does not support <B>location.key</B> or
        <B>location.state</B>. These were supported in older versions, but it
        had some issues for implementing a couple of edge cases.
      </Note>

      <Para>
        <I>{`<BrowserRouter>`}</I> is the preferred way, but it may require some
        configuration changes to the server, to handle the <Space />
        <B>refresh of the page</B>. On a server, it may be required to configure
        URL routing to <B>by-pass the server-side routing</B> and delegating the
        URL to the react application, so that BrowserRouter can render the
        expected UI.
      </Para>

      <Heading as='h2'>{`<Routes>`}</Heading>
      <Para>This is a parent route with child routes.</Para>

      <Heading as='h2'>{`<Route>`}</Heading>
      <Para>
        A Route Element of the structure <I>{`<Route path element >`}</I>, which
        is used to define a route in the route config.
      </Para>

      <Heading as='h3'>Route Config</Heading>
      <Para>
        This is a tree of <B>route objects</B> that will be ranked and matched
        against the current location to create a branch of <B>route matches</B>.
      </Para>

      <Heading as='h3'>{`<Outlet>`}</Heading>
      <Para>It is a component that renders the matched routes element.</Para>

      <Heading as='h3'>Layout Route</Heading>
      <Para>
        This is a parent route <B>without a path</B>, used exclusively for
        grouping child routes inside a specific layout.
      </Para>
      <Code language={CodeLanguageTypes.JSX}>
        {`<Route element={<Layout />}>
  <Route path="/add" element={<Add />} />
  <Route path="/update" element={<Update />} />
</Route>`}
      </Code>

      <Heading as='h3'>Not Found Route</Heading>
      <Para>
        When no route matches with URL, we can render a not found component
        using the <B>path="*"</B>.
      </Para>
      <Code language={CodeLanguageTypes.JSX}>
        {`<Route path="*" element={<NotFound />} />`}
      </Code>

      <Heading as='h3'>Nested Routes</Heading>
      <Para>
        Routes can be nested inside another Route and their paths will also
        nest. Nested routes are perfect for creating UI that has persistent
        navigation in layout with an inner section that changes with the URL.
      </Para>
      <Code language={CodeLanguageTypes.JSX}>
        {`const App = () => {
  return (
    <Routes>
      <Route path="javascript" element={<JavaScript />}>
        <Route path="blog:blogId" element={<Blog />} />
        <Route path="history" element={<History />} />
      </Route>
    </Routes>
)}`}
      </Code>

      <Para>
        The route config will be defined with below given routes:
        <OrderedList unOrdered items={routeConfig} />
      </Para>

      <Para>
        Observe that <B>"/javascript"</B> is prefixed to both child routes.
      </Para>

      <Code language={CodeLanguageTypes.JSX}>
        {`const JavaScript = () => {
  return (
    <>
      <h1>JavaScript Section</h1>
      <Outlet />
    </>
  )}`}
      </Code>

      <Code language={CodeLanguageTypes.JSX}>
        {`const Blog = () => {
  const { blogId } = useParams();
  return <h2>Blog ID is: {blogId }</h2>;
}`}
      </Code>

      <Code language={CodeLanguageTypes.JSX}>
        {`const History = () => {
  return <h2>JavaScript History</h2>;
}`}
      </Code>

      <Heading as='h3'>Index Route</Heading>
      <Para>
        A child route with <B>no path</B> that renders in the
        <Space />
        <I>
          parent's <Space />
          {`<Outlet>`}
        </I>
        <Space />
        for the parent's URL. Index routes can be thought of as the <Space />
        <B>"default child route"</B>. When a parent route has multiple children,
        but the URL is at the parent's path, the index route will be displayed
        in the <I>{`<Outlet>`}</I>.
      </Para>
      <Code language={CodeLanguageTypes.JSX}>
        {`<Routes>
  <Route path="/" element={<Layout />}>
    <Route index element={<History />} />
    <Route path="blog/:blogId" element={<Blog />} />
    <Route path="history" element={<History />} />
  </Route>
</Routes>
`}
      </Code>

      <Heading as='h3'>Descendant Routes</Heading>
      <Para>
        As we have learnt that routes can be nested, which means we can have
        multiple <B>{`<Routes>`}</B> elements in a <I>component tree</I>. Route
        with <B>path ending with "/*"</B> is called a descendant path, which
        tells React Router to use the given URL as the parent of the descendant
        routes.
      </Para>

      <Para>
        Descendant Routes can be used to split routes in multiple files. This is
        helpful in defining module level routes.
      </Para>
      <Code language={CodeLanguageTypes.JSX}>
        {`const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
      <Route path="javascript/*" element={<JavaScriptRoutes />} />
    </Routes>
)}`}
      </Code>

      <Code language={CodeLanguageTypes.JSX}>
        {`const JavaScriptRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<JavaScript />}>
      <Route path="history" element={<History />} />
    </Routes>
)}`}
      </Code>
    </>
  );
};

export default ReactRouterRoutes;
