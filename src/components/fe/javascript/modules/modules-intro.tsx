import React from 'react';
import Para from '../../../shared/para/para';

const JSModulesIntro = () => {
  return (
    <>
      <Para>
        JavaScript programs started off with small usage, primarily to add
        interactivity to web pages. But, now we have complete web applications
        written in JavaScript. An application would need a gigantic size of code
        to be written and then loading that gigantic code will impact the
        performance, impacting the user experience. Therefore some mechanism was
        required for splitting JavaScript programs into separate modules that
        can be imported when needed.
      </Para>

      <Para>
        Node.js has had this ability for a long time and there are a number of
        JavaScript libraries and frameworks that enable module usage. For
        example: CommonJs, RequireJs, Webpack, etc.
      </Para>

      <Para>
        Modern browsers have started supporting module functionality natively,
        which means, browsers can optimize loading of modules, making it more
        efficient than having to use a library/framework to do all the required
        stuff. Use of native JavaScript modules is dependent on the import and
        export statement.
      </Para>
    </>
  );
};

export default JSModulesIntro;
