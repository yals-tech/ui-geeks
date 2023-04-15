"use strict";(self.webpackChunkui_geeks_in_web=self.webpackChunkui_geeks_in_web||[]).push([[5378,7748,3919,9304,7223,9127],{57748:(e,t,l)=>{l.r(t),l.d(t,{default:()=>c});var n=l(67294),r=l(74214),a=l(87398),o=l(68947),s=l(9167);const c=function(){return n.createElement(n.Fragment,null,n.createElement(o.Z,null,n.createElement(a.Z,{as:"h3"},"Assignment Operators"),"Assignment operator assigns a value to left operand based on the value of the right operand, in short, it assigns right hand operand value to left hand side operand."),n.createElement(r.Z,null,"let x = 10"),n.createElement(o.Z,null,"There are also ",n.createElement(s.BI,null,"compound assignment")," operators that are shorthand for linear assignment operators."),n.createElement(r.Z,null,"x += 10\n//This is equivalent to, x  = x + 10;\n"),n.createElement(o.Z,null,"Similarly we have other compound assignment operators,",n.createElement(s.B,null,"-=, *=, /=, %=, **=")),n.createElement(r.Z,null,"x -= 10    // x = x - 10\nx *= 10    // x = x * 10\nx /= 10    // x = x / 10\nx %= 10    // x = x % 10\nx **= 10    // x = x ** 10\n"))}},5378:(e,t,l)=>{l.r(t),l.d(t,{default:()=>d});var n=l(67294),r=l(74214),a=l(87398),o=l(68947),s=l(9167),c=l(57748),u=l(13919),i=l(39304),m=l(17223);const d=function(){return n.createElement(n.Fragment,null,n.createElement(a.Z,{as:"h2"},"Binary Operators"),n.createElement(o.Z,null,"A binary operator requires ",n.createElement(s.B,null,"two operands"),", one before and one after. This form of expression is called an ",n.createElement(s.BI,null,"infix")," binary operator, because the operator is placed in-between two operands. All binary operators in JavaScript are infix."),n.createElement(o.Z,null,n.createElement(s.I,null,"operand1")," ",n.createElement(s.BI,null,"operator")," ",n.createElement(s.I,null,"operand2")),n.createElement(r.Z,null,"// Examples:\n1  + 10\n3 < 5\n10  && 5"),n.createElement(o.Z,null,n.createElement(s.cJ,null),"Binary operators can be divided in given categories:",n.createElement(s.GS,{unOrdered:!0,items:[{label:"Arithmetic operators (+, -, *, /, %, **)"},{label:"Relational/Comparison operators (<, >, <=, >=)"},{label:"Equality operators (==, !=, ===, !==)"},{label:"Assignment operators (=, +=, -=, *=, /=, %=)"},{label:"Binary Logical operators (&&, ||)"},{label:"Binary Bitwise operators (&, |, ^)"}]})),n.createElement(o.Z,null,n.createElement(a.Z,{as:"h3"},"Arithmetic Operators"),"These are normal mathematical operators, which we have learned in school.",n.createElement(r.Z,null,"10 + 50   // 60\n5 * 4   // 20\n20 % 6  // 2 (Modulus operator, returns the remainder)\n2 ** 3  // 8 (Exponential operator)")),n.createElement(m.default,null),n.createElement(u.default,null),n.createElement(c.default,null),n.createElement(i.default,null))}},13919:(e,t,l)=>{l.r(t),l.d(t,{default:()=>u});var n=l(67294),r=l(74214),a=l(87398),o=l(68947),s=l(12050),c=l(9167);const u=function(){return n.createElement(n.Fragment,null,n.createElement(o.Z,null,n.createElement(a.Z,{as:"h3"},"Equality Operators"),"Used to check the equality of the operands, and returns a boolean value, based on whether comparison is ",n.createElement(c.BI,null,"true")," or ",n.createElement(c.BI,null,"false"),"."),n.createElement(a.Z,{as:"h4"},"Type Coercion"),n.createElement(o.Z,null,"The double equality (==) and inequality (!=) operator performs type",n.createElement(c.BI,null,"coercion"),", if it received different types.",n.createElement(c.I,null,"Type Coercion")," is automatic or implicit conversion of values from one data type to another."),n.createElement(o.Z,null,n.createElement(a.Z,{as:"h5"},'Equality "==" Operator'),"Attempts to convert ",n.createElement(c.I,null,"(Type Coercion)")," and compare operands for equality. Returns",n.createElement(c.B,null,"boolean")," value.",n.createElement(r.Z,null,'"1" == 1      // true\n"hello" == "hello"      // true')),n.createElement(a.Z,{as:"h5"},'InEquality "!=" Operator'),"Attempts to convert ",n.createElement(c.I,null,"(Type Coercion)")," and compare operands for inequality. Returns ",n.createElement(c.B,null,"boolean")," value.",n.createElement(c.B,null,"boolean")," value.",n.createElement(r.Z,null,'"1" != 1      // false\n"Hello" != "hello"      // false'),n.createElement(a.Z,{as:"h5"},'Strict Equality "===" Operator'),"Strict equality operator, checks for equality of operands,",n.createElement(c.B,null,"without")," ",n.createElement(s.Z,null)," converting ",n.createElement(c.I,null,"(Type Coercion)")," the values before comparison. This considers operands of different types to be different. Returns",n.createElement(c.B,null,"boolean")," value.",n.createElement(r.Z,null,'"1" === 1    // false\n1 === 1    // true'),n.createElement(o.Z,null,n.createElement(a.Z,{as:"h5"},'Strict InEquality "!==" Operator'),"Strict inequality operator, checks for inequality of operands,",n.createElement(c.B,null,"without")," ",n.createElement(s.Z,null)," converting ",n.createElement(c.I,null,"(Type Coercion)")," the values before comparison. This considers operands of different types to be different. Returns",n.createElement(c.B,null,"boolean")," value.",n.createElement(r.Z,null,'"1" !== 1   // true\n2 !== 2     // false')))}},39304:(e,t,l)=>{l.r(t),l.d(t,{default:()=>d});var n=l(67294),r=l(74214),a=l(87398),o=l(26006),s=l(68947),c=l(12050),u=l(9167),i=function(){return n.createElement(n.Fragment,null,"false && ",n.createElement(u.B,null,"expression"),", is short-circuit evaluated to ",n.createElement(u.BI,null,"false"),". This means the expression will not be evaluated/executed.",n.createElement(r.Z,null,"// Example 1:\nconst val = evt && evt.target && evt.target.value"),n.createElement(s.Z,null,n.createElement(u.BI,null,"expression1")," = evt ",n.createElement(u.cJ,null),n.createElement(u.BI,null,"expression2")," = evt.target ",n.createElement(u.cJ,null),n.createElement(u.BI,null,"expression3")," = evt.target.value ",n.createElement(u.cJ,null),n.createElement(u.cJ,null),n.createElement(u.BI,null,"expression2")," will not be evaluated until",n.createElement(u.BI,null,"expression1")," results ",n.createElement(u.BI,null,"true")," and",n.createElement(u.BI,null,"expression3")," will not be evaluated until",n.createElement(u.BI,null,"expression2")," results ",n.createElement(u.BI,null,"true"),"."),n.createElement(r.Z,null,"// Example 2:\ncallback && callback();"),n.createElement(s.Z,null,n.createElement(u.BI,null,"callback()")," will be executed if it's defined i.e., callback as"," ",n.createElement(u.BI,null,"expression1")," results ",n.createElement(u.B,null,"true"),".",n.createElement(u.cJ,null),n.createElement(u.cJ,null)))},m=function(){return n.createElement(n.Fragment,null,n.createElement(u.B,null,"true")," || expression, is short-circuit evaluated to true.",n.createElement(r.Z,null,'// Example 1:\nconst msg = null;\nconst res = msg || "Default Message";'),n.createElement(s.Z,null,n.createElement(u.BI,null,"expression1")," = msg ",n.createElement(u.cJ,null),n.createElement(u.BI,null,"expression2"),' = "Default Message" ',n.createElement(u.cJ,null),n.createElement(u.cJ,null),n.createElement(s.Z,null,n.createElement(u.B,null,'"Default Message"')," is assigned to the ",n.createElement(u.BI,null,"res")," variable, because ",n.createElement(u.BI,null,"expression1"),n.createElement(c.Z,null),"is not ",n.createElement(u.B,null,"true"),", therefore ",n.createElement(u.BI,null,"expression2")," is returned.")),n.createElement(r.Z,null,'// Example 2:\nconst res = 0 || "Hello";'),n.createElement(s.Z,null,n.createElement(u.B,null,'"Hello"')," is assigned to the res variable, because the Logical OR operator treats ",n.createElement(u.I,null,'0, "", NaN, null, undefined')," as ",n.createElement(u.B,null,"falsy"),n.createElement(c.Z,null),"value, therefore ",n.createElement(u.B,null,"0 (zero)")," was not returned."),n.createElement(s.Z,null,"But what if we want ",n.createElement(u.B,null,"0 (zero)")," to be returned, basically to treat only ",n.createElement(u.I,null,"null")," and ",n.createElement(u.I,null,"undefined")," as ",n.createElement(u.BI,null,"falsy")," value. We can use the",n.createElement(u.B,null,"Nullish Coalescing Operator (??)"),".",n.createElement(r.Z,null,'res = 0 ?? "Hello"    // 0 \nres = null ?? "Hello"   // "Hello"\nres = undefined ?? "Hello"    // "Hello"')))};const d=function(){return n.createElement(n.Fragment,null,n.createElement(s.Z,null,n.createElement(a.Z,{as:"h3"},"Binary Logical Operators"),"Logical operators are typically used with ",n.createElement(u.BI,null,"boolean values"),n.createElement(c.Z,null)," and return a boolean value. However, if they are used with",n.createElement(c.Z,null)," ",n.createElement(u.I,null,"non-boolean")," ",n.createElement(c.Z,null),"values, they may return ",n.createElement(u.B,null,"non-boolean values"),"."),n.createElement(a.Z,{as:"h4"},"Logical AND (&&) operator"),n.createElement(s.Z,null,n.createElement(u.I,null,"operand1")," ",n.createElement(u.BI,null,"&&")," ",n.createElement(u.I,null,"operand2")),n.createElement(s.Z,null,"When used with ",n.createElement(u.B,null,"boolean values"),", returns true if both",n.createElement(c.Z,null)," ",n.createElement(u.I,null,"operands")," are ",n.createElement(u.BI,null,"true"),", otherwise returns",n.createElement(u.BI,null,"false"),"."),n.createElement(r.Z,null,"false && true     // false\ntrue && true      // true"),n.createElement(u.cJ,null),n.createElement(s.Z,null,"When used with ",n.createElement(u.B,null,"non-boolean")," values, returns ",n.createElement(u.I,null,"operand1")," if it can be converted to ",n.createElement(u.I,null,"false"),", otherwise returns ",n.createElement(u.I,null,"operand2"),"."),n.createElement(r.Z,null,'"JS" && "Program"   // "Program"\n// Because first operand "JS" cannot be converted to false\n\nfalse && "Program"    // false\n// Because first operand is false\n\n"Program" && false    // false\n// Because first operand "Program" can\'t be converted to false, \n// hence the second operand is returned. '),n.createElement(o.Z,null,"If any operand is ",n.createElement(u.B,null,"false"),", final result will always be ",n.createElement(u.B,null,"false"),"."),n.createElement(a.Z,{as:"h4"},"Logical OR (||) operator"),n.createElement(s.Z,null,n.createElement(u.I,null,"operand1")," ",n.createElement(u.BI,null,"||")," ",n.createElement(u.I,null,"operand2")),n.createElement(s.Z,null,"When used with ",n.createElement(u.B,null,"boolean values"),", returns ",n.createElement(u.B,null,"true"),", if any operand is ",n.createElement(u.I,null,"true"),", otherwise returns ",n.createElement(u.B,null,"false"),"."),n.createElement(r.Z,null,"true || false     // true"),n.createElement(s.Z,null,"When used with ",n.createElement(u.B,null,"non-boolean values"),", returns ",n.createElement(u.BI,null,"operand1"),", if it can be converted to ",n.createElement(u.BI,null,"true"),", otherwise returns",n.createElement(u.BI,null,"operand2"),"."),n.createElement(r.Z,null,'"JS" || "Program"   // "JS"\n        \nfalse || "Program"    // "Program"\n// Because operand1 can\'t be converted to true, therefore, returned operand2'),n.createElement(a.Z,{as:"h3"},"Short-circuit Evaluation"),n.createElement(s.Z,null,"Because logical operators are evaluated from left to right, they are tested for possible ",n.createElement(u.BI,null,'"short-circuit"')," evaluation using below rules:"),n.createElement(u.GS,{expanded:!0,items:[{label:n.createElement(i,null)},{label:n.createElement(n.Fragment,null,n.createElement(m,null))}]}))}},17223:(e,t,l)=>{l.r(t),l.d(t,{default:()=>i});var n=l(67294),r=l(87398),a=l(68947),o=l(9167),s=l(61740),c=[{column:"operator",label:"Operator",width:"100px"},{column:"description",label:"Description"},{column:"example",label:"Example"}],u=[{operator:"<",description:"Less Than",example:"2 < 5"},{operator:">",description:"Greater Than",example:"5 > 2"},{operator:"<=",description:"Less Than Equal To",example:"2 <= 2"},{operator:">=",description:"Greater Than Equal To",example:"5 >= 2"}];const i=function(){return n.createElement(n.Fragment,null,n.createElement(a.Z,null,n.createElement(r.Z,{as:"h3"},"Relational Operators"),"Used for comparing two values. It compares the two operands and returns a boolean value, based on whether comparison is ",n.createElement(o.BI,null,"true")," or"," ",n.createElement(o.BI,null,"false"),".",n.createElement(o.cJ,null),n.createElement(o.cJ,null),n.createElement(s.Z,{thList:c,tdList:u})))}},74214:(e,t,l)=>{l.d(t,{Z:()=>w});var n=l(4942),r=l(94184),a=l.n(r),o=l(67294),s=l(17606),c=l(83819),u=l(28949),i=l(93379),m=l.n(i),d=l(7795),E=l.n(d),p=l(90569),h=l.n(p),f=l(3565),b=l.n(f),v=l(19216),Z=l.n(v),g=l(44589),y=l.n(g),B=l(62428),x={};x.styleTagTransform=y(),x.setAttributes=b(),x.insert=h().bind(null,"head"),x.domAPI=E(),x.insertStyleElement=Z(),m()(B.Z,x),B.Z&&B.Z.locals&&B.Z.locals;var I=function(e){var t,l=e.children,r=e.language,i=void 0===r?"typescript":r,m=e.theme,d=e.showLineNumbers,E=void 0!==d&&d,p=e.codeBlock,h=void 0!==p&&p,f=e.highlight,b=e.copyBtn,v=void 0===b||b,Z=(0,o.useContext)(u.I),g=a()((t={},(0,n.Z)(t,"".concat(c.HL,"-code"),!0),(0,n.Z)(t,"".concat(c.HL,"-code-no-copy-btn"),!v),t));return o.createElement("div",{className:g,style:{textAlign:"left"}},o.createElement(s.Z1,{text:l,language:i,showLineNumbers:E,theme:function(){switch(m){case"dracula":return s.cL;case"anOldHope":return s.dw;case"github":return s.bW;default:return Z.theme===c.bF.DARK_THEME?s.g9:s.dw}}(),wrapLines:!0,codeBlock:h,highlight:f}))};const w=(0,o.memo)(I)},26006:(e,t,l)=>{l.d(t,{Z:()=>P});var n=l(4942),r=l(94184),a=l.n(r),o=l(67294),s=l(14289),c=l(78146),u=l(67115),i=l(76792),m=l(32209),d=l(41485),E=l(39602),p=l(44680),h=l(85893);const f=(0,E.Z)("h4");f.displayName="DivStyledAsH4";const b=(0,p.Z)("alert-heading",{Component:f}),v=(0,p.Z)("alert-link",{Component:u.Z}),Z={variant:"primary",show:!0,transition:m.Z,closeLabel:"Close alert"},g=o.forwardRef(((e,t)=>{const{bsPrefix:l,show:n,closeLabel:r,closeVariant:o,className:u,children:E,variant:p,onClose:f,dismissible:b,transition:v,...Z}=(0,s.Ch)(e,{show:"onClose"}),g=(0,i.vE)(l,"alert"),y=(0,c.Z)((e=>{f&&f(!1,e)})),B=!0===v?m.Z:v,x=(0,h.jsxs)("div",{role:"alert",...B?void 0:Z,ref:t,className:a()(u,g,p&&`${g}-${p}`,b&&`${g}-dismissible`),children:[b&&(0,h.jsx)(d.Z,{onClick:y,"aria-label":r,variant:o}),E]});return B?(0,h.jsx)(B,{unmountOnExit:!0,...Z,ref:void 0,in:n,children:x}):n?x:null}));g.displayName="Alert",g.defaultProps=Z;const y=Object.assign(g,{Link:v,Heading:b});var B=l(83819),x=l(93379),I=l.n(x),w=l(7795),k=l.n(w),T=l(90569),L=l.n(T),A=l(3565),q=l.n(A),C=l(19216),J=l.n(C),N=l(44589),O=l.n(N),S=l(11137),H={};H.styleTagTransform=O(),H.setAttributes=q(),H.insert=L().bind(null,"head"),H.domAPI=k(),H.insertStyleElement=J(),I()(S.Z,H),S.Z&&S.Z.locals&&S.Z.locals;var $=function(e){var t=e.children,l=e.noteText,r=void 0===l?"Note":l,s=e.variant,c=void 0===s?"primary":s,u=a()((0,n.Z)({},"".concat(B.HL,"-note"),!0));return o.createElement("div",{className:u},o.createElement("div",{className:"note-text"},r),o.createElement(y,{key:c,variant:c},t))};const P=(0,o.memo)($)},61740:(e,t,l)=>{l.d(t,{Z:()=>k});var n=l(4942),r=l(94184),a=l.n(r),o=l(67294),s=l(76792),c=l(85893);const u=o.forwardRef((({bsPrefix:e,className:t,striped:l,bordered:n,borderless:r,hover:o,size:u,variant:i,responsive:m,...d},E)=>{const p=(0,s.vE)(e,"table"),h=a()(t,p,i&&`${p}-${i}`,u&&`${p}-${u}`,l&&`${p}-${"string"==typeof l?`striped-${l}`:"striped"}`,n&&`${p}-bordered`,r&&`${p}-borderless`,o&&`${p}-hover`),f=(0,c.jsx)("table",{...d,className:h,ref:E});if(m){let e=`${p}-responsive`;return"string"==typeof m&&(e=`${e}-${m}`),(0,c.jsx)("div",{className:e,children:f})}return f}));var i=l(83819),m=l(25583),d=l(93379),E=l.n(d),p=l(7795),h=l.n(p),f=l(90569),b=l.n(f),v=l(3565),Z=l.n(v),g=l(19216),y=l.n(g),B=l(44589),x=l.n(B),I=l(31686),w={};w.styleTagTransform=x(),w.setAttributes=Z(),w.insert=b().bind(null,"head"),w.domAPI=h(),w.insertStyleElement=y(),E()(I.Z,w),I.Z&&I.Z.locals&&I.Z.locals;const k=function(e){var t=e.thList,l=e.tdList,r=e.striped,s=void 0===r||r,c=e.bordered,d=void 0===c||c,E=e.hover,p=void 0===E||E,h=e.size,f=void 0===h?m.o.Small:h,b=a()((0,n.Z)({},"".concat(i.HL,"-table"),!0));return o.createElement("div",{className:b},o.createElement(u,{striped:s,bordered:d,hover:p,size:f},o.createElement("thead",null,o.createElement("tr",null,t.map((function(e){return o.createElement("th",{key:e.column,style:{width:e.width||"auto"}},e.label)})))),o.createElement("tbody",null,l.map((function(e,l){return o.createElement("tr",{key:"row-".concat(l)},t.map((function(t){return o.createElement("td",{key:"".concat(t.column,"-").concat(l)},e[t.column])})))})))))}},62428:(e,t,l)=>{l.d(t,{Z:()=>s});var n=l(8081),r=l.n(n),a=l(23645),o=l.n(a)()(r());o.push([e.id,".ui-geeks-code{margin-top:1.5rem;margin-bottom:1.5rem}.ui-geeks-code-no-copy-btn button{display:none}\n",""]);const s=o},11137:(e,t,l)=>{l.d(t,{Z:()=>s});var n=l(8081),r=l.n(n),a=l(23645),o=l.n(a)()(r());o.push([e.id,".ui-geeks-note{margin-top:1.2rem;margin-bottom:3rem;font-style:italic}.ui-geeks-note .note-text{font-style:italic;position:relative;font-weight:bold;top:13px;z-index:9;margin-left:15px;background-color:#aba8f1;width:fit-content;padding:2px 10px 2px 10px;border-radius:4px}.theme-dark .ui-geeks-note .note-text{background-color:#464646}.theme-dark .ui-geeks-note .alert-primary{color:#000000;background-color:#d6d6d6;border-color:#393939}\n",""]);const s=o},31686:(e,t,l)=>{l.d(t,{Z:()=>s});var n=l(8081),r=l.n(n),a=l(23645),o=l.n(a)()(r());o.push([e.id,".theme-dark .ui-geeks-table th,.theme-dark .ui-geeks-table td{color:#dedede !important}.theme-dark .table-hover tr:nth-of-type(odd)>*{background-color:#343434}.theme-dark .table-hover tr:nth-of-type(even)>*{background-color:#262626}\n",""]);const s=o}}]);