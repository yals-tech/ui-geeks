import React from 'react';
import Heading from '../../../shared/heading/heading';
import Note from '../../../shared/note/note';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, BI, I, IU, NewLine, OrderedList } from '../../../shared/util/util';

const ReactCRA = () => {
  return (
    <>
      <Heading as='h2'>Create React App</Heading>
      <Para>
        It is the best way to create a new single page application in React. It
        uses <BI>Babel</BI> and <BI>Webpack</BI> under the hood.
      </Para>

      <Para>
        <B>Pre-requisites</B>
        <OrderedList
          items={[
            {
              label: 'NodeJs >= 14.0.0'
            },
            {
              label: 'npm >= 5.6'
            }
          ]}
        />
      </Para>

      <Para>
        <IU>Syntax:</IU>
        <NewLine />
        <B>npx create-react-app</B> {`<app-name>`}
        <NewLine />
        <B>npx</B> is a package runner tool that comes with the npm 5.2+
        version.
      </Para>

      <Para>
        <IU>Example:</IU>
        <NewLine />
        npm <B>create-react-app</B> <I>my-app</I>
      </Para>

      <Para>
        Then navigate to the application directory and run command <Space />
        <BI>npm start</BI>.
      </Para>

      <Para>
        cd my-app
        <NewLine />
        npm start
      </Para>

      <Para>
        <B>For creating production build</B>, run the below command:
        <NewLine />
        <BI>npm run build</BI>
        <NewLine />
        Above command will create an optimized build of your app in the
        <Space /> <BI>build</BI> folder.
      </Para>

      <Note>
        There are various other ways of creating a react application. More
        details can be found <Space />
        <a
          href='https://reactjs.org/docs/create-a-new-react-app.html'
          target='_blank'
        >
          here
        </a>
        .
      </Note>
    </>
  );
};

export default ReactCRA;
