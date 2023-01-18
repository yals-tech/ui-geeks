import React from 'react';
import Code from '../../../../shared/code/code';
import Note from '../../../../shared/note/note';
import Para from '../../../../shared/para/para';
import Space from '../../../../shared/space/space';
import { B, BI, I, Indent, IU, NewLine } from '../../../../shared/util/util';

const JSArrowFunctionsIntro = () => {
  return (
    <>
      <Para>
        In <I>arrow functions</I>, <BI>this</BI> retains the value of the
        enclosing lexical context's <BI>this</BI>. In global code, <BI>this</BI>
        <Space />
        will be set to <B>global</B> object.
      </Para>

      <Para>
        An arrow function expression is a compact alternative to a traditional
        function expression, but is limited and can't be used in all situations.
      </Para>

      <Para>
        <IU>Syntax:</IU>
        <NewLine />
        <B>(arguments)</B>
        <B>{` => {`}</B>
        <NewLine />
        <Indent>// statements</Indent>
        <NewLine />
        {`}`}
      </Para>

      <Para>
        <B>arguments:</B> Similar to traditional function, it is a list of input
        parameters passed to the function.
      </Para>

      <Para>
        Operator <B>{`=>`}</B> is also called <BI>Fat Arrow</BI> operator.
      </Para>

      <Para>
        <IU>Return value:</IU>
        <NewLine />
        An arrow function returns the created function expression.
      </Para>

      <Code>
        {`const sum = (num1, num2) => { 
  return num1 + num2;
}
sum(2, 5) // 7
`}
      </Code>

      <Para>
        Below examples show how <BI>this</BI> refers to the lexical{' '}
        <BI>context's this</BI>.
        <Code>
          {`var a = 100;
const obj = { 
  a:10, 
  show: () => { console.log(this.a); }
};
obj.show()  // 100
`}
        </Code>
        <Para>
          Above code prints <B>100</B>, because lexical context is the
          <BI>global object</BI>, which has a variable named <B>"a"</B> with
          value <B>100</B>.
        </Para>
      </Para>

      <Para>
        But, if we use a traditional function, <BI>this</BI> will refer to the
        given object <B>"obj"</B>.
        <Code>
          {`var a = 100;
const obj = {
  a:10,
  show: function()  { console.log(this.a); }
};
obj.show()  // 10
`}
        </Code>
        <Para>
          Above code prints <B>10</B>, because <BI>this</BI> refers to the given
          object <B>"obj"</B>.
        </Para>
      </Para>
      <Note>
        If <B>thisArg</B> is passed to <B>call()</B>, <B>bind()</B> or
        <B>apply()</B> on invocation of an arrow function, it will be
        <B>ignored</B>. We can still <B>prepend arguments</B> to the method, but
        the first argument <B>(thisArg)</B> should be set to <B>null</B>.
      </Note>
    </>
  );
};

export default JSArrowFunctionsIntro;
