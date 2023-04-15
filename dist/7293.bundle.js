"use strict";(self.webpackChunkui_geeks_in_web=self.webpackChunkui_geeks_in_web||[]).push([[7293,9430,4156,297,9127],{19430:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var l=n(67294),r=n(74214),a=n(87398),o=n(26006),i=n(68947),c=n(12050),u=n(9167);const m=function(){return l.createElement(l.Fragment,null,l.createElement(a.Z,{as:"h2"},"Generator"),l.createElement(i.Z,null,"The ",l.createElement(u.B,null,"Generator")," function allows to define an ",l.createElement(c.Z,null),l.createElement(u.I,null,"iterative algorithm")," by writing a single function, whose execution is not continuous. Generator functions are written using the",l.createElement(u.BI,null,"function*")," ",l.createElement(c.Z,null)," syntax."),l.createElement(i.Z,null,"When called, ",l.createElement(u.I,null,"generator functions")," do not initially execute their code. Instead, they return a special type of ",l.createElement(u.I,null,"iterator"),", called a",l.createElement(u.B,null,"Generator"),". When a value is consumed by calling generator's",l.createElement(u.BI,null,"next()")," method, the generator function executes until it encounters the ",l.createElement(u.BI,null,"yield")," keyword."),l.createElement(i.Z,null,l.createElement(u.IU,null,"Example:"),l.createElement(u.cJ,null),l.createElement(r.Z,null,"function* makeRangeIterator(start = 0, end = Infinity, step =1) {\n  let iterationCount = 0;\n  for(let i = start, i < end; i++) {\n    iterationCount++;\n    yield i;\n    // yield i returns current value of the sequence\n  }\n  return iterationCount;\n  // iterationCount is returned on completion of execution\n}"),l.createElement(r.Z,null,'const it = makeRangeIterator(1, 10, 2);\nlet result = it.next();\nwhile(!result.done) {\n  console.log(result.value);\t// 1  3  5  7  9\n  result = it.next();\n  // it.next() executes the generator function for next sequence\n}\n\nconsole.log("Iterated over sequence of size: ", result.value);\t// 5')),l.createElement(o.Z,null,"It is not possible to know ",l.createElement(u.B,null,"reflectively")," whether a particular object is an ",l.createElement(u.B,null,"iterator"),". Use ",l.createElement(u.B,null,"Iterables")," to check it."))}},84156:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var l=n(67294),r=n(74214),a=n(87398),o=n(68947),i=n(12050),c=n(9167);const u=function(){return l.createElement(l.Fragment,null,l.createElement(a.Z,{as:"h2"},"Iterables"),l.createElement(o.Z,null,"An ",l.createElement(c.I,null,"object")," is ",l.createElement(c.BI,null,"iterable"),", if it defines its iteration behavior. In order to be ",l.createElement(c.I,null,"iterable"),", an ",l.createElement(c.I,null,"object")," must implement the ",l.createElement(c.BI,null,"@@iterator")," method. This means that the",l.createElement(i.Z,null)," ",l.createElement(c.I,null,"object")," must have a property with a",l.createElement(c.BI,null,"Symbol.iterator")," ",l.createElement(c.I,null,"key"),". It may be possible to iterate over an iterable more than once or only once."),l.createElement(o.Z,null,l.createElement(c.BI,null,"Iterables")," which can iterate ",l.createElement(c.B,null,"only once")," (such as ",l.createElement(i.Z,null),l.createElement(c.I,null,"Generators"),") return ",l.createElement(c.BI,null,"this")," from their ",l.createElement(c.BI,null,"@@iterator"),l.createElement(i.Z,null)," method, whereas ",l.createElement(c.BI,null,"iterables")," which can be iterated",l.createElement(c.B,null,"many times")," must return a ",l.createElement(c.BI,null,"new iterator")," on each invocation of ",l.createElement(c.BI,null,"@@iterator"),"."),l.createElement(o.Z,null,l.createElement(c.IU,null,"Example 1:"),l.createElement(c.cJ,null),"Implementing an ",l.createElement(c.I,null,"iterable")," which can iterate ",l.createElement(c.B,null,"only once"),"."),l.createElement(o.Z,null,l.createElement(o.Z,null,"In below code, statement ",l.createElement(c.BI,null,"it[Symbol.iterator]() === it"),l.createElement(i.Z,null)," returned ",l.createElement(c.B,null,"true"),", i.e., ",l.createElement(c.I,null,"@@iterator")," method is returning itself, which shows this iterate only once."),l.createElement(r.Z,null,"function* makeIterator() {\n  yield 1;\n  yield 2;\n}\nconst it = makeIterator();\n\nfor(const itm of it) { console.log(itm); }\n// Output:\n// 1\n// 2\nit[Symbol.iterator]() === it;  // true\n"),l.createElement(o.Z,null,"Also, If we try to replicate the",l.createElement(c.BI,null,"for…of loop"),", it will not print in the console again, proving that it only iterates once."),l.createElement(r.Z,null,"const it = makeIterator();\nfor(const itm of it) { console.log(itm); }\n// Output:\n// 1\n// 2\n\nfor(const itm of it) { console.log(itm); }\n// Not output on console\n")),l.createElement(o.Z,null,l.createElement(c.IU,null,"Example 2:"),l.createElement(c.cJ,null),"Implementing an ",l.createElement(c.I,null,"iterable")," which can iterate ",l.createElement(c.B,null,"many times"),".",l.createElement(r.Z,null,"function* makeIterator() {\n  yield 1;\n  yield 2;\n}\n\nconst it = makeIterator();\nit[Symbol.iterator] = function*() {\n  yield 1;\n  yield 2;\n}\n\nfor(const itm of it) { \tconsole.log(itm); }\n// Output:\n// 1\n// 2\n\nfor(const itm of it) { \tconsole.log(itm); }\n// Output:\n// 1\n// 2\n"),l.createElement(o.Z,null,"In above code, both ",l.createElement(c.BI,null,"for…of")," loop printed numbers on the console, proving that it can iterate many times.")),l.createElement(o.Z,null,l.createElement(c.B,null,"next()"),": The ",l.createElement(c.I,null,"next()")," method also accepts a parameter value, which can be used to modify the internal state of the generator. A value passed to ",l.createElement(c.I,null,"next()")," will be received by ",l.createElement(c.BI,null,"yield"),". A value passed to the ",l.createElement(c.B,null,"first invocation")," of ",l.createElement(c.I,null,"next()")," is always ignored."),l.createElement(o.Z,null,l.createElement(c.IU,null,"Exmaple:"),l.createElement(r.Z,null,"function* fibonacci() {\n  let current = 0;\n  let next = 1;\n  while(true) {\n    const reset = yield current;\n    // Value passed to next() will be read here by yield current.\n\n    [current, next] = [next, next + current];\n    if(reset) {\n      current = 0;\n      next = 1;\n    }\n  }\t\n}\n\nconst sequence = fibonacci();\nsequence.next()\nconsole.log(sequence.next().value);  // 1\nsequence.next()\nconsole.log(sequence.next().value);  // 2\nsequence.next()\nconsole.log(sequence.next().value);  // 5\nsequence.next(true);  // Resetting here\nconsole.log(sequence.next().value);  // 1\n")),l.createElement(o.Z,null,l.createElement(c.B,null,"return()")," : Generators have a ",l.createElement(c.BI,null,"return(value)"),l.createElement(i.Z,null)," method that returns the given value and finishes the generator itself, and allows the generator to perform any cleanup tasks when combined with ",l.createElement(c.BI,null,"try…finally block"),". If the ",l.createElement(c.BI,null,"yield"),l.createElement(i.Z,null)," expression is wrapped in a ",l.createElement(c.I,null,"try…finally")," block, the control flow doesn't exit the ",l.createElement(c.I,null,"function body"),", but proceeds to the",l.createElement(c.I,null,"finally")," block instead."),l.createElement(o.Z,null,l.createElement(c.IU,null,"Example:"),l.createElement(c.cJ,null),l.createElement(r.Z,null,'function* generatorFunc() {\n  yield 1;\n  yield 2;\n}\n\nconst g = generatorFunc();\ng.next(); // { value: 1, dne: false }\n\ng.return("return value"); // { value: "return value", done: true }\n// Finishes the generator and returns the value passed to return() method.\n'),l.createElement(o.Z,null,"Below code finishes the generator and returns the value passed to return() method.",l.createElement(r.Z,null,'g.return("return value");\n// { value: "return value", done: true }')),l.createElement(o.Z,null,"Because generator was terminated by ",l.createElement(c.BI,null,'g.return("return value")'),l.createElement(i.Z,null)," statement. Now, if we call ",l.createElement(c.I,null,"next()")," methods, we'll get"," ",l.createElement(c.I,null,"value")," as ",l.createElement(c.BI,null,"undefined"),"."),l.createElement(r.Z,null,"g.next();\t\n// { value: undefined, done: true }")))}},27293:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var l=n(67294),r=n(9231),a=n(59044),o=n(87398),i=n(68947),c=n(12050),u=n(9167),m=n(63333),s=n(49997),d=n(91124),E=n(19430),h=n(84156),b=n(30297),f=[{label:l.createElement(l.Fragment,null,l.createElement(u.B,null,"Iterators")," and ",l.createElement(u.B,null,"Generators")," bring the concept of ",l.createElement(c.Z,null),l.createElement(u.I,null,"iteration")," and provide a mechanism for customizing behavior of",l.createElement(c.Z,null)," ",l.createElement(u.I,null,"for...of")," loop.")},{label:l.createElement(l.Fragment,null,"The ",l.createElement(u.B,null,"iterator")," object implements ",l.createElement(u.B,null,"iterator protocols")," by having ",l.createElement(u.BI,null,"next()")," methods. Returns an ",l.createElement(u.I,null,"object")," with ",l.createElement(c.Z,null),l.createElement(u.BI,null,"value")," and ",l.createElement(u.BI,null,"done")," attributes.")},{label:l.createElement(l.Fragment,null,"The ",l.createElement(u.B,null,"Generator")," function defines an ",l.createElement(u.I,null,"iterative algorithm"),", whose execution is not continuous. Generator functions use ",l.createElement(c.Z,null),l.createElement(u.BI,null,"function*")," syntax.")},{label:l.createElement(l.Fragment,null,"The ",l.createElement(u.I,null,"generator function")," executes until it encounters the ",l.createElement(c.Z,null),l.createElement(u.BI,null,"yield")," keyword.")},{label:l.createElement(l.Fragment,null,"An object is ",l.createElement(u.B,null,"iterable"),", if it defines ",l.createElement(u.I,null,"iteration behavior")," by implementing the ",l.createElement(u.BI,null,"@@iterator")," method.")},{label:l.createElement(l.Fragment,null,"Iterables which ",l.createElement(u.B,null,"execute once"),", return ",l.createElement(u.BI,null,"this")," from",l.createElement(u.BI,null,"@@iterator"),", while one which iterates ",l.createElement(u.B,null,"multiple times"),l.createElement(c.Z,null)," return ",l.createElement(u.B,null,"new iterator")," from ",l.createElement(u.BI,null,"@@iterator")," method.")},{label:l.createElement(l.Fragment,null,"The ",l.createElement(u.BI,null,"next()")," method's ",l.createElement(u.I,null,"optional parameter")," is used to modify internal state.")},{label:l.createElement(l.Fragment,null,"The ",l.createElement(u.BI,null,"return()")," method is used to return a ",l.createElement(u.I,null,"value")," and",l.createElement(u.B,null,"terminate")," the generator.")}],I=function(){return(0,r.Z)("UI-Geeks: JavaScript | Iterators and Generators"),l.createElement(a.Z,null,l.createElement(o.Z,null,"Iterators and Generators"),l.createElement(i.Z,null,l.createElement(u.BI,null,"Iterators")," and ",l.createElement(u.BI,null,"generators")," bring the concept of",l.createElement(c.Z,null)," ",l.createElement(u.I,null,"iteration")," directly into core language and provide a mechanism for customizing the behavior of ",l.createElement(u.I,null,"for…of")," loop."),l.createElement(i.Z,null,l.createElement(b.default,null),l.createElement(E.default,null),l.createElement(h.default,null)),l.createElement(s.Z,{items:f}),l.createElement(i.Z,null,l.createElement(m.Z,{questions:d.IteratorQuestions})))};const g=(0,l.memo)(I)},30297:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var l=n(67294),r=n(87398),a=n(68947),o=n(12050),i=n(9167),c=[{label:l.createElement(l.Fragment,null,l.createElement(i.B,null,"value"),l.createElement(i.cJ,null),"The next value in the iteration sequence.")},{label:l.createElement(l.Fragment,null,l.createElement(i.B,null,"done"),l.createElement(i.cJ,null),"This is ",l.createElement(i.BI,null,"true")," if the ",l.createElement(i.I,null,"last value")," in the sequence has already been consumed. If value is present with ",l.createElement(i.B,null,"done"),", it is the iterator's ",l.createElement(i.I,null,"return value"),".")}];const u=function(){return l.createElement(l.Fragment,null,l.createElement(r.Z,{as:"h2"},"Iterators"),l.createElement(a.Z,null,"An ",l.createElement(i.BI,null,"iterator")," is any ",l.createElement(i.I,null,"object")," which implements the",l.createElement(i.BI,null,"iterator protocol")," by having a ",l.createElement(i.BI,null,"next()")," method that returns an ",l.createElement(i.I,null,"object")," with two properties:",l.createElement(i.GS,{expanded:!0,items:c})),l.createElement(a.Z,null,"Once created, an iterator object can be iterated explicitly by repeatedly calling ",l.createElement(i.BI,null,"next()")," method. After a terminating value has been ",l.createElement(i.B,null,"yielded"),", additional calls to ",l.createElement(i.BI,null,"next()")," should continue to",l.createElement(i.BI,null,"return { done: true }"),"."),l.createElement(a.Z,null,"The most common iterator is the ",l.createElement(i.BI,null,"Array")," iterator, which returns each value in the associated array in sequence. Iterators can express sequences of unlimited size, such as range of integers between 0 and",l.createElement(o.Z,null)," ",l.createElement(i.I,null,"Infinity"),"."))}},91124:(e,t,n)=>{n.r(t),n.d(t,{IteratorQuestions:()=>o});var l=n(67294),r=n(83819),a=n(53232),o=[{id:1,question:l.createElement(l.Fragment,null,"Iterators and Generators bring the concept of ",r.Fb,"."),options:[{label:"Iteration",id:1},{label:"Objects",id:2},{label:"String",id:3},{label:"Numbers",id:4}],type:a.M.Radio,name:"it_1",answer:1},{id:2,question:l.createElement(l.Fragment,null,"The next() method that returns an object with two properties:"),options:[{label:"value",id:1},{label:"data",id:2},{label:"done",id:3},{label:"status",id:4}],type:a.M.Checkbox,name:"it_2",answer:[1,3]},{id:3,question:l.createElement(l.Fragment,null,"Generator functions are written using the ",r.Fb," syntax."),options:[{label:"function",id:1},{label:"function*",id:2},{label:"class",id:3},{label:"object",id:4}],type:a.M.Radio,name:"it_3",answer:2},{id:4,question:l.createElement(l.Fragment,null,"An Iterable object must implement the ",r.Fb," method."),options:[{label:"next()",id:1},{label:"return()",id:2},{label:"@@iterator",id:3},{label:r.r,id:4}],type:a.M.Radio,name:"it_4",answer:3},{id:5,question:l.createElement(l.Fragment,null,"The ",r.Fb," method is used to return a value and terminate the generator."),options:[{label:"return()",id:1},{label:"next()",id:2},{label:"done()",id:3},{label:"iterator()",id:4}],type:a.M.Radio,name:"it_5",answer:1}]},74214:(e,t,n)=>{n.d(t,{Z:()=>w});var l=n(4942),r=n(94184),a=n.n(r),o=n(67294),i=n(17606),c=n(83819),u=n(28949),m=n(93379),s=n.n(m),d=n(7795),E=n.n(d),h=n(90569),b=n.n(h),f=n(3565),I=n.n(f),g=n(19216),p=n.n(g),y=n(44589),v=n.n(y),Z=n(62428),x={};x.styleTagTransform=v(),x.setAttributes=I(),x.insert=b().bind(null,"head"),x.domAPI=E(),x.insertStyleElement=p(),s()(Z.Z,x),Z.Z&&Z.Z.locals&&Z.Z.locals;var B=function(e){var t,n=e.children,r=e.language,m=void 0===r?"typescript":r,s=e.theme,d=e.showLineNumbers,E=void 0!==d&&d,h=e.codeBlock,b=void 0!==h&&h,f=e.highlight,I=e.copyBtn,g=void 0===I||I,p=(0,o.useContext)(u.I),y=a()((t={},(0,l.Z)(t,"".concat(c.HL,"-code"),!0),(0,l.Z)(t,"".concat(c.HL,"-code-no-copy-btn"),!g),t));return o.createElement("div",{className:y,style:{textAlign:"left"}},o.createElement(i.Z1,{text:n,language:m,showLineNumbers:E,theme:function(){switch(s){case"dracula":return i.cL;case"anOldHope":return i.dw;case"github":return i.bW;default:return p.theme===c.bF.DARK_THEME?i.g9:i.dw}}(),wrapLines:!0,codeBlock:b,highlight:f}))};const w=(0,o.memo)(B)},26006:(e,t,n)=>{n.d(t,{Z:()=>S});var l=n(4942),r=n(94184),a=n.n(r),o=n(67294),i=n(14289),c=n(78146),u=n(67115),m=n(76792),s=n(32209),d=n(41485),E=n(39602),h=n(44680),b=n(85893);const f=(0,E.Z)("h4");f.displayName="DivStyledAsH4";const I=(0,h.Z)("alert-heading",{Component:f}),g=(0,h.Z)("alert-link",{Component:u.Z}),p={variant:"primary",show:!0,transition:s.Z,closeLabel:"Close alert"},y=o.forwardRef(((e,t)=>{const{bsPrefix:n,show:l,closeLabel:r,closeVariant:o,className:u,children:E,variant:h,onClose:f,dismissible:I,transition:g,...p}=(0,i.Ch)(e,{show:"onClose"}),y=(0,m.vE)(n,"alert"),v=(0,c.Z)((e=>{f&&f(!1,e)})),Z=!0===g?s.Z:g,x=(0,b.jsxs)("div",{role:"alert",...Z?void 0:p,ref:t,className:a()(u,y,h&&`${y}-${h}`,I&&`${y}-dismissible`),children:[I&&(0,b.jsx)(d.Z,{onClick:v,"aria-label":r,variant:o}),E]});return Z?(0,b.jsx)(Z,{unmountOnExit:!0,...p,ref:void 0,in:l,children:x}):l?x:null}));y.displayName="Alert",y.defaultProps=p;const v=Object.assign(y,{Link:g,Heading:I});var Z=n(83819),x=n(93379),B=n.n(x),w=n(7795),k=n.n(w),F=n(90569),q=n.n(F),T=n(3565),j=n.n(T),A=n(19216),C=n.n(A),G=n(44589),N=n.n(G),_=n(11137),L={};L.styleTagTransform=N(),L.setAttributes=j(),L.insert=q().bind(null,"head"),L.domAPI=k(),L.insertStyleElement=C(),B()(_.Z,L),_.Z&&_.Z.locals&&_.Z.locals;var R=function(e){var t=e.children,n=e.noteText,r=void 0===n?"Note":n,i=e.variant,c=void 0===i?"primary":i,u=a()((0,l.Z)({},"".concat(Z.HL,"-note"),!0));return o.createElement("div",{className:u},o.createElement("div",{className:"note-text"},r),o.createElement(v,{key:c,variant:c},t))};const S=(0,o.memo)(R)},62428:(e,t,n)=>{n.d(t,{Z:()=>i});var l=n(8081),r=n.n(l),a=n(23645),o=n.n(a)()(r());o.push([e.id,".ui-geeks-code{margin-top:1.5rem;margin-bottom:1.5rem}.ui-geeks-code-no-copy-btn button{display:none}\n",""]);const i=o},11137:(e,t,n)=>{n.d(t,{Z:()=>i});var l=n(8081),r=n.n(l),a=n(23645),o=n.n(a)()(r());o.push([e.id,".ui-geeks-note{margin-top:1.2rem;margin-bottom:3rem;font-style:italic}.ui-geeks-note .note-text{font-style:italic;position:relative;font-weight:bold;top:13px;z-index:9;margin-left:15px;background-color:#aba8f1;width:fit-content;padding:2px 10px 2px 10px;border-radius:4px}.theme-dark .ui-geeks-note .note-text{background-color:#464646}.theme-dark .ui-geeks-note .alert-primary{color:#000000;background-color:#d6d6d6;border-color:#393939}\n",""]);const i=o}}]);