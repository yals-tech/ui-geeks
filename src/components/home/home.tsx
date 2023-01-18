import classNames from 'classnames';
import React, { memo } from 'react';
import { AppPrefix } from '../../util/app-constants';
import { ImagePaths } from '../../util/image-path-constants';
import JSHomeDemoComponent from '../fe/javascript/js-home-demo-component/js-home-demo-component';
import { JS_PRIMARY_ROUTES } from '../fe/javascript/js-menu-items';
import ReactHomeDemoComponent from '../fe/react/react-home-demo-component/react-home-demo-component';
import { REACT_PRIMARY_ROUTES } from '../fe/react/react-menu-items';
import HomeIntro from './home-intro/home-intro';
import './home.scss';
import LanguageComponent from './language-component/language-component';

const JSContentList = [
  {
    content: (
      <>
        <span className='large-quote'>&#10077;</span>JavaScript is
        Interpreted/JIT compiled.<span className='large-quote'>&#10078;</span>
      </>
    )
  },
  {
    content: (
      <>
        <span className='large-quote'>&#10077;</span>With NodeJs, JavaScript can
        run on non-browser environments.
        <span className='large-quote'>&#10078;</span>
      </>
    )
  },
  {
    content: (
      <>
        <span className='large-quote'>&#10077;</span>Functions are treated as
        first-class citizens.<span className='large-quote'>&#10078;</span>
      </>
    )
  },
  {
    content: (
      <>
        <span className='large-quote'>&#10077;</span>It was created by Brenden
        Eich at NetScape in 1995.<span className='large-quote'>&#10078;</span>
      </>
    )
  },
  {
    content: (
      <>
        <span className='large-quote'>&#10077;</span>Primarily there are 7 types
        in JavaScript.<span className='large-quote'>&#10078;</span>
      </>
    )
  },
  {
    content: (
      <>
        <span className='large-quote'>&#10077;</span>functions are just special
        type of object.<span className='large-quote'>&#10078;</span>
      </>
    )
  },
  {
    content: (
      <>
        <span className='large-quote'>&#10077;</span>Objects are a way of
        grouping similar/meaningful data together.
        <span className='large-quote'>&#10078;</span>
      </>
    )
  },
  {
    content: (
      <>
        <span className='large-quote'>&#10077;</span>Array.unshift() function
        prepends items to the start of the array.
        <span className='large-quote'>&#10078;</span>
      </>
    )
  }
];

const ReactContentList = [
  {
    content: (
      <>
        <span className='large-quote'>&#10077;</span>React is a JavaScript
        library for building user interfaces.
        <span className='large-quote'>&#10078;</span>
      </>
    )
  },
  {
    content: (
      <>
        <span className='large-quote'>&#10077;</span>Components let you split
        the UI into independent, reusable pieces.
        <span className='large-quote'>&#10078;</span>
      </>
    )
  },
  {
    content: (
      <>
        <span className='large-quote'>&#10077;</span>User-Defined Components
        Must Be Capitalized.<span className='large-quote'>&#10078;</span>
      </>
    )
  },
  {
    content: (
      <>
        <span className='large-quote'>&#10077;</span>A higher-order component is
        a function that takes a component and returns a new component.
        <span className='large-quote'>&#10078;</span>
      </>
    )
  }
];

const AngularContentList = [
  {
    content: 'Components are the main building block for Angular applications.'
  },
  {
    content: `Angular uses the browser's built-in Shadow DOM API to enclose the component's view inside a ShadowRoot`
  },
  {
    content:
      '@Input() and @Output() decorators are used to share data between parent and child component.'
  },
  {
    content:
      'In Angular, a template is a blueprint for a fragment of a user interface (UI).'
  },
  {
    content: `Angular's Change Detection algorithm is responsible for keeping the view and the model in sync.`
  }
];

const Home = () => {
  const homeClasses = classNames({
    [`${AppPrefix}-home`]: true
  });

  return (
    <>
      <div className={homeClasses}>
        <HomeIntro />

        <LanguageComponent
          title='JavaScript'
          tag='Web Development Language'
          contentList={JSContentList}
          imagePath={ImagePaths.JS.ICON}
          homePagePath='/javascript/home'
          theme='yellow'
          demoComponent={<JSHomeDemoComponent />}
          demoLink={JS_PRIMARY_ROUTES.DEMO}
        />

        <LanguageComponent
          title='React'
          tag='Build reusable interfaces'
          contentList={ReactContentList}
          imagePath={ImagePaths.REACT.ICON}
          homePagePath='/react/home'
          theme='lightGreen'
          demoComponent={<ReactHomeDemoComponent />}
          demoLink={REACT_PRIMARY_ROUTES.DEMO}
        />

        {/* <LanguageComponent
          title='Angular'
          tag={`The modern web developer's platform`}
          contentList={AngularContentList}
          imagePath={ImagePaths.Angular}
          homePagePath='/javascript/introduction'
          theme='red'
        /> */}
      </div>
    </>
  );
};

export default memo(Home);
