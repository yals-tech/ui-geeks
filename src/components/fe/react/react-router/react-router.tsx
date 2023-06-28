import React from 'react';
import useDOMTitle from '../../../../custom-hooks/use-dom-title';
import { IOrderedListItemType } from '../../../../types/common';
import Container from '../../../shared/container/container';
import Heading from '../../../shared/heading/heading';
import Space from '../../../shared/space/space';
import { B, BI, I } from '../../../shared/util/util';
import YALSPreface from '../../../shared/yals-preface/yals-preface';
import { IDescriptionType } from '../../../shared/yals-preface/yals-preface.types';
import YALSSummary from '../../../shared/yals-summary/yals-summary';
import ReactRouterIntro from './react-router-intro';
import ReactRouterNavigation from './react-router-navigation';
import ReactRouterRoutes from './react-router-routes';

const summaryItems: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        <B>React Router</B> is a routing library to keep the UI in sync with the
        URL.
      </>
    )
  },
  {
    label: (
      <>
        The <B>{`<BrowserRouter>`}</B> uses <I>HTML5 history</I> API.
      </>
    )
  },
  {
    label: (
      <>
        <B>{`<Routes>`}</B> is the parent route for child {`<Route>`}. The
        <Space /> {`<Route>`} accepts <I>route URL</I> as <BI>path</BI> and a
        component to render as <BI>element</BI> prop.
      </>
    )
  },
  {
    label: (
      <>
        The <I>Route config</I> is a tree of route objects that will be ranked
        and matched against the current location.
      </>
    )
  },
  {
    label: (
      <>
        The <B>{`<Outlet>`}</B> component is used to render the matched routes
        element.
      </>
    )
  },
  {
    label: (
      <>
        The <B>Layout Route</B> is used for <B>grouping</B> child routes in
        specific layouts.
      </>
    )
  },
  {
    label: (
      <>
        Not found component can be rendered for <B>path="*"</B>.
      </>
    )
  },
  {
    label: (
      <>
        <B>Index Route</B> is a child route with <B>no path</B>, which would be
        the <B>default child route</B> and is rendered in the <Space />
        <I>
          parent's <Space />
          {`<Outlet>`}
        </I>
        .
      </>
    )
  },
  {
    label: (
      <>
        <B>Descendant Routes</B> are routes with <B>path ending with "/*"</B>,
        is used to <I>split routes in multiple files</I> for implementing module
        level routes.
      </>
    )
  },
  {
    label: (
      <>
        When the URL changes, it is called <B>Navigation</B>. React Router
        provides <BI>{`<Link>`}</BI> and <BI>useNavigate()</BI> for implementing
        navigation.
      </>
    )
  },
  {
    label: (
      <>
        The <BI>useLocation()</BI>, <BI>useParams()</BI> and <Space />
        <BI>useSearchParams()</BI> hooks are used to read url information like
        location, route parameters, query parameters, etc.
      </>
    )
  }
];

const prefaceList: Array<IDescriptionType> = [
  {
    topic: `What is React Router`,
    description: `Routing library, keeps UI in sync with URL`
  },
  {
    topic: `BrowserRouter`,
    description: `Uses HTML5 history API, follows standard URL structure`
  },
  {
    topic: `HashRouter`,
    description: `Uses the hash of the URL, prefixed with # symbol`
  },
  {
    topic: `Routes, Route, RoutesConfig, Outlet`,
    description: `Used to define routes, <Outlet> used to render matched Component`
  },
  {
    topic: `Nested Routes`,
    description: `Create UI with persistent navigation, changing inner section with URL`
  },
  {
    topic: `Index Route`,
    description: `Default child route with no path, renders in parent <Outlet>`
  },
  {
    topic: `Navigation`,
    description: `Changing URL using <Link> or useNavigation()`
  },
  {
    topic: `Sharing Data`,
    description: `Sharing URL data using useLocation(), useParams(), useSearchParams()`
  }
];

const ReactRouterComponents = () => {
  useDOMTitle('UI-Geeks: React | Router');

  return (
    <Container>
      <YALSPreface list={prefaceList} />
      <Heading>React Router</Heading>
      <ReactRouterIntro />
      <ReactRouterRoutes />
      <ReactRouterNavigation />
      <YALSSummary items={summaryItems} />
    </Container>
  );
};

export default ReactRouterComponents;
