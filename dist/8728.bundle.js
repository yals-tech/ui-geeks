"use strict";(self.webpackChunkui_geeks_in_web=self.webpackChunkui_geeks_in_web||[]).push([[8728,1153,7083],{28728:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var l=n(67294),a=n(74214),r=n(87398),c=n(68947),u=n(12050),m=n(9167),o=n(71153),s=n(87083),i=[{label:l.createElement(l.Fragment,null,"Creates a blank object.",l.createElement(m.cJ,null),"For convenience let's call it the ",l.createElement(m.B,null,"newInstance"),".")},{label:l.createElement(l.Fragment,null,"Points the",l.createElement(m.B,null,"newInstance"),"'s ",l.createElement(m.I,null,"[[Prototype]]")," to the constructor function's",l.createElement(m.BI,null,"prototype")," property.")},{label:l.createElement(l.Fragment,null,"Executes the ",l.createElement(m.I,null,"constructor")," function with given ",l.createElement(m.I,null,"arguments"),", binding ",l.createElement(m.B,null,"newInstance")," as ",l.createElement(m.BI,null,"this")," context.")},{label:l.createElement(l.Fragment,null,"If the constructor function returns a ",l.createElement(m.BI,null,"non-primitive value"),", the returned value becomes the result of the ",l.createElement(m.BI,null,"new")," expression. Otherwise, if the ",l.createElement(m.I,null,"constructor")," function doesn't return anything or returns a ",l.createElement(m.BI,null,"primitive value"),", ",l.createElement(m.B,null,"newInstance")," is returned instead. Normally constructors don't return a value, but they can choose to do so to override the object creation process.")}];l.Fragment,m.B,m.I,m.I,l.Fragment,m.B,u.Z,m.I;const E=function(){return l.createElement(l.Fragment,null,l.createElement(r.Z,{as:"h3"},'The "new" Operator'),l.createElement(c.Z,null,"The ",l.createElement(m.BI,null,"new")," operator creates an instance of a ",l.createElement(m.I,null,"user-defined"),l.createElement(u.Z,null)," object type or of one of the built in object types that has a",l.createElement(m.BI,null,"constructor function"),". For example: The ",l.createElement(m.BI,null,"Date")," object."),l.createElement(c.Z,null,l.createElement(m.IU,null,"Syntax:"),l.createElement(m.cJ,null),"new ",l.createElement(m.BI,null,"constructor"),"[([",l.createElement(m.BI,null,"arguments"),"])]"),l.createElement(c.Z,null,l.createElement(m.B,null,"constructor"),": A class or function that specifies the type of object instance. arguments: A list of values that the constructor will be called with."),l.createElement(c.Z,null,l.createElement(m.B,null,"arguments"),": A list of values that the ",l.createElement(m.BI,null,"constructor")," will be called with."),l.createElement(c.Z,null,l.createElement(r.Z,{as:"h4"},'Using "new" with Functions'),l.createElement(c.Z,null,"When a ",l.createElement(m.I,null,"function")," is called with the ",l.createElement(m.BI,null,"new")," operator, the",l.createElement(u.Z,null)," ",l.createElement(m.I,null,"function")," will be used as a ",l.createElement(m.I,null,"constructor"),". The",l.createElement(m.BI,null,"new")," operator will do following things:"),l.createElement(m.GS,{expanded:!0,items:i})),l.createElement(c.Z,null,l.createElement(m.IU,null,"Example 1:"),l.createElement(a.Z,null,'function User(firstName, lastName) {\n  this.firstName = firstName;\n  this.lastName = lastName;\n  this.showName = function() {\n    console.log(this.firstName + "-" + this.lastName);\n  }\n}\n\nconst user = new User("JavaScript", "Language");\nuser.showName();  // "JavaScript-Language"'),l.createElement(c.Z,null,"Above example prints ",l.createElement(m.I,null,'"JavaScript-Language"'),", because the",l.createElement(m.BI,null,"new")," ",l.createElement(u.Z,null)," operator binds ",l.createElement(m.BI,null,"this")," with the",l.createElement(m.BI,null,"created instance"),".")),l.createElement(c.Z,null,l.createElement(m.IU,null,"Example 2:"),l.createElement(a.Z,null,'function User(firstName, lastName) {\n  this.firstName = firstName;\n  this.lastName = lastName;\n  this.showName = function() {\n    console.log(this.firstName + "-" + this.lastName);\n  }\n  return {a: 5};\n}\n\nconst user = new User("JavaScript", "Language");\nconsole.log(user);  // {a: 5}\nuser.showName();  // "Error usr.showName is not a function"\n'),l.createElement(c.Z,null,"Above example throws ",l.createElement(m.B,null,'"Error"')," while calling",l.createElement(m.BI,null,"user.showName()"),", because the ",l.createElement(m.BI,null,"return"),l.createElement(u.Z,null)," statement ",l.createElement(m.BI,null,"overrides the new response")," with the returned",l.createElement(m.BI,null,"object","{a: 5}")," ","and the returned object does not contain any function named",l.createElement(m.BI,null,'"showName()"'),".")),l.createElement(o.default,null),l.createElement(s.default,null))}},71153:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var l=n(67294),a=n(74214),r=n(87398),c=n(68947),u=n(12050),m=n(9167),o=[{label:l.createElement(l.Fragment,null,"When called ",l.createElement(m.B,null,"with new"),", it returns reference to the",l.createElement(u.Z,null)," ",l.createElement(m.I,null,"constructor")," or ",l.createElement(m.I,null,"function"),".")},{label:l.createElement(l.Fragment,null,"When called ",l.createElement(m.B,null,"without new"),", it returns ",l.createElement(u.Z,null),l.createElement(m.I,null,"undefined"),".")}];const s=function(){return l.createElement(l.Fragment,null,l.createElement(r.Z,{as:"h5"},"new.target"),l.createElement(c.Z,null,"A function can know whether it is invoked with ",l.createElement(m.I,null,"new")," by checking the",l.createElement(m.BI,null,'"new.target"')," property. The ",l.createElement(m.I,null,'"new.target"')," is",l.createElement(m.BI,null,"undefined")," when the function is invoked",l.createElement(m.B,null,"without a new operator"),"."),l.createElement(m.IU,null,"Syntax:"),l.createElement(m.cJ,null),l.createElement(m.BI,null,"new.target"),l.createElement(c.Z,null,l.createElement(m.cJ,null),l.createElement(m.IU,null,"Return Value:"),l.createElement(m.cJ,null),l.createElement(m.GS,{unOrdered:!0,items:o})),l.createElement(c.Z,null,l.createElement(m.IU,null,"Example:"),l.createElement(a.Z,null,'function User(firstName, lastName) {\n  if(!new.target) {\n    throw "User() must be called with new operator";\n  }\n  this.firstName = firstName;\n  this.lastName = lastName;\n  this.showName = function() {\n    console.log(this.firstName + "-" + this.lastName);\n  }\n}'),l.createElement(c.Z,null,l.createElement(m.BI,null,"throw")," is used to throw/return error information."),l.createElement(a.Z,null,'const user = User("JavaScript", "Language");'),l.createElement(c.Z,null,"Above code throws ",l.createElement(m.I,null,"error"),",",l.createElement(m.B,null,'"Error: User() must be called with new operator"'),", because",l.createElement(m.BI,null,"User()")," was called without a ",l.createElement(m.BI,null,"new")," operator."),l.createElement(a.Z,null,'const user1 = User("JavaScript", "Language");\n// "JavaScript-Language"'),l.createElement(c.Z,null,"Above code prints ",l.createElement(m.I,null,'"JavaScript-Language"'),", because",l.createElement(m.BI,null,"User()")," was called with a ",l.createElement(m.BI,null,"new")," operator.")))}},87083:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var l=n(67294),a=n(74214),r=n(87398),c=n(68947),u=n(12050),m=n(9167),o=[{label:l.createElement(l.Fragment,null,l.createElement(m.BI,null,"Array()"),", ",l.createElement(m.BI,null,"Error()")," and ",l.createElement(m.BI,null,"Function()")," behave the same way, when called as a",l.createElement(m.I,null," function")," or ",l.createElement(m.I,null,"constructor"),".")},{label:l.createElement(l.Fragment,null,l.createElement(m.BI,null,"Boolean()"),", ",l.createElement(m.BI,null,"Number()")," and ",l.createElement(m.BI,null,"String()")," ",l.createElement(u.Z,null),l.createElement(m.I,null,"coerce")," their arguments to the respective ",l.createElement(m.I,null,"primitive type"),l.createElement(u.Z,null)," when called as a ",l.createElement(m.I,null,"function"),", but returns ",l.createElement(u.Z,null),l.createElement(m.I,null,"wrapper objects")," when ",l.createElement(m.I,null,"constructed")," with the ",l.createElement(m.BI,null,"new"),l.createElement(u.Z,null)," operator.")}],s=[{label:l.createElement(l.Fragment,null,l.createElement(m.BI,null,"Symbol()")," and ",l.createElement(m.BI,null,"BigInt()")," can only be called without",l.createElement(m.BI,null,"new"),". Attempting to construct then will throw ",l.createElement(m.B,null,"TypeError"),".")},{label:l.createElement(l.Fragment,null,l.createElement(m.BI,null,"Proxy")," and ",l.createElement(m.BI,null,"Map")," can only be constructed with",l.createElement(m.BI,null,"new"),". Attempting to call them as functions will throw a",l.createElement(m.B,null,"TypeError"),".")}];const i=function(){return l.createElement(l.Fragment,null,l.createElement(c.Z,null,"Prior to ES6, which introduced the ",l.createElement(m.BI,null,"class"),", most JavaScript",l.createElement(u.Z,null)," ",l.createElement(m.I,null,"built-ins")," are both ",l.createElement(m.I,null,"callable")," and ",l.createElement(u.Z,null),l.createElement(m.I,null,"constructible"),", although many of them exhibit different behaviors. For example:"),l.createElement(m.GS,{expanded:!0,items:o}),l.createElement(c.Z,null,"But after ES6, language is stricter about which are ",l.createElement(m.I,null,"constructors"),l.createElement(u.Z,null)," and which are ",l.createElement(m.I,null,"functions"),". For example:"),l.createElement(m.GS,{expanded:!0,items:s}),l.createElement(c.Z,null,l.createElement(r.Z,{as:"h4"},'Using "new" with Classes'),l.createElement(c.Z,null,"Classes can only be instantiated with the ",l.createElement(m.BI,null,"new")," operator. Attempting to call a ",l.createElement(m.I,null,"class")," without ",l.createElement(m.I,null,"new")," will throw",l.createElement(m.B,null,"TypeError"),"."),l.createElement(a.Z,null,'class User {\n  constructor(firstName, lastName) {\n    this.firstName = firstName;\n    this.lastName = lastName;\n  }\n\n  showName(){\n  console.log(this.firstName + "-" + this.lastName);\n  }\n}\n\nconst user = new User("JavaScript", "Language");\nuser.showName();  // "JavaScript-Language"')))}},74214:(e,t,n)=>{n.d(t,{Z:()=>y});var l=n(4942),a=n(94184),r=n.n(a),c=n(67294),u=n(17606),m=n(83819),o=n(28949),s=n(93379),i=n.n(s),E=n(7795),h=n.n(E),w=n(90569),d=n.n(w),I=n(3565),g=n.n(I),p=n(19216),f=n.n(p),b=n(44589),B=n.n(b),Z=n(62428),N={};N.styleTagTransform=B(),N.setAttributes=g(),N.insert=d().bind(null,"head"),N.domAPI=h(),N.insertStyleElement=f(),i()(Z.Z,N),Z.Z&&Z.Z.locals&&Z.Z.locals;var v=function(e){var t,n=e.children,a=e.language,s=void 0===a?"typescript":a,i=e.theme,E=e.showLineNumbers,h=void 0!==E&&E,w=e.codeBlock,d=void 0!==w&&w,I=e.highlight,g=e.copyBtn,p=void 0===g||g,f=(0,c.useContext)(o.I),b=r()((t={},(0,l.Z)(t,"".concat(m.HL,"-code"),!0),(0,l.Z)(t,"".concat(m.HL,"-code-no-copy-btn"),!p),t));return c.createElement("div",{className:b,style:{textAlign:"left"}},c.createElement(u.Z1,{text:n,language:s,showLineNumbers:h,theme:function(){switch(i){case"dracula":return u.cL;case"anOldHope":return u.dw;case"github":return u.bW;default:return f.theme===m.bF.DARK_THEME?u.g9:u.dw}}(),wrapLines:!0,codeBlock:d,highlight:I}))};const y=(0,c.memo)(v)},62428:(e,t,n)=>{n.d(t,{Z:()=>u});var l=n(8081),a=n.n(l),r=n(23645),c=n.n(r)()(a());c.push([e.id,".ui-geeks-code{margin-top:1.5rem;margin-bottom:1.5rem}.ui-geeks-code-no-copy-btn button{display:none}\n",""]);const u=c}}]);