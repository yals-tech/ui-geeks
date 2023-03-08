"use strict";(self.webpackChunkui_geeks_in_web=self.webpackChunkui_geeks_in_web||[]).push([[1437,9301,2386,9230,7307,8101,6750,9252,3147,9127],{9301:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var l=n(67294),r=n(74214),a=n(87398),o=n(26006),c=n(68947),u=n(12050),s=n(9167);const i=function(){return l.createElement(l.Fragment,null,l.createElement(a.Z,{as:"h3"},"delete Operator"),l.createElement(c.Z,null,"The ",l.createElement(s.BI,null,"delete")," operator deletes an object's property, but can't delete the entire object. Returns ",l.createElement(s.B,null,"true"),", if delete operation was successful, otherwise returns ",l.createElement(s.B,null,"false"),"."),l.createElement(r.Z,null,'const obj = { name: "JavaScript", version: 6 };\ndelete obj.version;   // true\nconsole.log(obj.version);   // undefined'),l.createElement(c.Z,null,"The delete operator can't delete ",l.createElement(s.I,null,"non-configurable")," or"," ",l.createElement(s.I,null,"system defined")," properties.",l.createElement(r.Z,null,"delete Math.PI    // false")),l.createElement(a.Z,{as:"h4"},"Deleting array elements"),l.createElement(c.Z,null,"The ",l.createElement(s.I,null,"delete")," operator should not be used for deleting array elements. It is possible to delete any array elements, although it is regarded as ",l.createElement(s.B,null,"bad practice"),", because it does not actually delete the element (it just sets the element as ",l.createElement(s.I,null,"undefined"),") and therefore,",l.createElement(u.Z,null)," ",l.createElement(s.I,null,"length")," property is not re-calculated."),l.createElement(r.Z,null,"const arr = [1, 5, 10, 20, 40]\ndelete arr[2]   // true\nconsole.log(arr)    // [1, 5, undefined, 20, 40]"),l.createElement(o.Z,null,"To manipulate arrays, array methods like ",l.createElement(s.B,null,"splice()")," should be used."))}},82386:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var l=n(67294),r=n(74214),a=n(87398),o=n(68947),c=n(9167);const u=function(){return l.createElement(l.Fragment,null,l.createElement(a.Z,{as:"h3"},"in Operator"),l.createElement(o.Z,null,"The ",l.createElement(c.I,null,"in")," operator returns ",l.createElement(c.BI,null,"true"),", if given property is in the specified object."),l.createElement(c.I,null,"Syntax:"),l.createElement(c.cJ,null),l.createElement(o.Z,null,"propertyName",l.createElement(c.B,null,"in")," object"),l.createElement(r.Z,null,'const obj = { name: "JavaScript", version: 6 }\nconsole.log(name in obj)  // true\nconsole.log(arr in obj) // false'),l.createElement(o.Z,null,"The ",l.createElement(c.I,null,"in")," operator also works with ",l.createElement(c.B,null,"Arrays"),", but it returns"," ",l.createElement(c.BI,null,"true"),", if a given ",l.createElement(c.B,null,"index")," is found in the array."),l.createElement(r.Z,null,'const arr = ["A", "B", "C"]\nconsole.log(0 in arr)   // true\nconsole.log(5 in arr)   // false\nconsole.log("B" in arr)   // false'))}},29230:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var l=n(67294),r=n(74214),a=n(87398),o=n(68947),c=n(12050),u=n(9167);const s=function(){return l.createElement(l.Fragment,null,l.createElement(a.Z,{as:"h3"},"instanceof Operator"),l.createElement(o.Z,null,"The ",l.createElement(u.I,null,"instanceof")," operator returns ",l.createElement(u.B,null,"true"),", if the given object is of the given object type."),l.createElement(u.I,null,"Syntax:"),l.createElement(u.cJ,null),l.createElement(o.Z,null,"objectName ",l.createElement(c.Z,null)," ",l.createElement(u.B,null,"instanceOf")," ",l.createElement(c.Z,null)," objectType"),l.createElement(r.Z,null,"const day = new Date()\nconsole.log(day instanceof Date)    // true"))}},17307:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var l=n(67294),r=n(74214),a=n(87398),o=n(68947),c=n(9167),u=n(4247),s=n(43354);const i=function(){return l.createElement(l.Fragment,null,l.createElement(a.Z,{as:"h3"},"typeof Operator"),l.createElement(o.Z,null,"This returns a string indicating the type of the operand. Parentheses around ",l.createElement(c.I,null,"typeof")," are optional."),l.createElement(c.I,null,"Syntax:"),l.createElement(c.cJ,null),l.createElement(u.Z,{justifyContent:s.xu.SpaceBetween,width:"400px"},l.createElement(o.Z,null,l.createElement(c.B,null,"typeof")," operand"),l.createElement(o.Z,null,l.createElement(c.IU,null,"OR")),l.createElement(o.Z,null,l.createElement(c.B,null,"typeof"),"(operand)")),l.createElement(r.Z,null,'const show = () => { console.log("Hello"); }\ntypeof show   // "function"\n\nconst name= "JavaScript";\ntypeof name   // "string"\n\nconst arr = [1, 5];\ntypeof(arr)   // "object"'))}},88101:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var l=n(67294),r=n(74214),a=n(87398),o=n(68947),c=n(12050),u=n(9167);const s=function(){return l.createElement(o.Z,null,l.createElement(a.Z,{as:"h3"},"Logical NOT (!) Operator"),"Returns ",l.createElement(u.B,null,"false")," in expression can be converted to ",l.createElement(u.I,null,"true"),", otherwise return",l.createElement(u.B,null,"true"),".",l.createElement(u.cJ,null),l.createElement(u.cJ,null),l.createElement(u.I,null,"Syntax:")," ",l.createElement(c.Z,null),l.createElement(u.B,null,"!expression"),l.createElement(r.Z,null,'!true\t// false\n!false\t// true\n!"JS" // false'),"In short, it ",l.createElement(u.B,null,"inverses")," the ",l.createElement(u.I,null,"truthy/falsy")," value, i.e., inverses",l.createElement(c.Z,null)," ",l.createElement(u.I,null,"true")," to ",l.createElement(c.Z,null)," ",l.createElement(u.I,null,"false")," and vise-versa.")}},46750:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var l=n(67294),r=n(74214),a=n(68947),o=n(9167);const c=function(){return l.createElement(l.Fragment,null,l.createElement(a.Z,null,"A unary operator requires a single operand, either before or after the operator."),l.createElement(a.Z,null,l.createElement(o.BI,null,"operator")," ",l.createElement(o.I,null,"operand"),l.createElement(o.cJ,null),l.createElement(a.Z,null,"This form is called ",l.createElement(o.B,null,"prefix")," unary operator.")),l.createElement(r.Z,null,"let x = 10;\n++x;    // 11"),l.createElement(o.cJ,null),l.createElement(a.Z,null,l.createElement(o.I,null,"operand")," ",l.createElement(o.BI,null,"operator"),l.createElement(o.cJ,null),l.createElement(a.Z,null,"This form is called ",l.createElement(o.B,null,"postfix")," unary operator.")),l.createElement(r.Z,null,"let x = 10;\nx++;    // 11"))}},71437:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var l=n(67294),r=n(87398),a=n(9301),o=n(82386),c=n(29230),u=n(17307),s=n(88101),i=n(46750),m=n(39252),d=n(43147);const E=function(){return l.createElement(l.Fragment,null,l.createElement(r.Z,{as:"h2"},"Unary Operators"),l.createElement(i.default,null),l.createElement(s.default,null),l.createElement(m.default,null),l.createElement(a.default,null),l.createElement(u.default,null),l.createElement(d.default,null),l.createElement(o.default,null),l.createElement(c.default,null))}},39252:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var l=n(67294),r=n(74214),a=n(87398),o=n(26006),c=n(68947),u=n(9167);const s=function(){return l.createElement(l.Fragment,null,l.createElement(a.Z,{as:"h3"},'Unary operator "+"'),"This operator can also be used to convert strings to numbers.",l.createElement(r.Z,null,'+ "42"  // 42\n+ "010" // 10\n+ "0x10"  // 16'),l.createElement(c.Z,null,"The + operator can also be used for ",l.createElement(u.B,null,"string concatenation"),"."),l.createElement(r.Z,null,'"Hello" + " JavaScript" // "Hello JavaScript"'),l.createElement(o.Z,null,"If we add a string to a number (or other value), everything is converted into string first.",l.createElement(r.Z,null,'"3" + 4 + 5       // "345"\n3 + 4 + "5"     // "75"'),"Adding an empty string to something is a useful way of converting it to string."))}},43147:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var l=n(67294),r=n(74214),a=n(87398),o=n(68947),c=n(9167),u=n(4247),s=n(43354);const i=function(){return l.createElement(l.Fragment,null,l.createElement(a.Z,{as:"h3"},"void Operator"),l.createElement(o.Z,null,"This operator specifies an expression to be evaluated without returning a value."),l.createElement(c.I,null,"Syntax:"),l.createElement(c.cJ,null),l.createElement(u.Z,{justifyContent:s.xu.SpaceBetween,width:"400px"},l.createElement(o.Z,null,l.createElement(c.B,null,"void")," expression"),l.createElement(o.Z,null,l.createElement(c.IU,null,"OR")),l.createElement(o.Z,null,l.createElement(c.B,null,"void"),"(expression)")),l.createElement(r.Z,null,"const res = void 3 + 5\nconsole.log(res)    // undefined"))}},74214:(e,t,n)=>{n.d(t,{Z:()=>w});var l=n(4942),r=n(94184),a=n.n(r),o=n(67294),c=n(17606),u=n(83819),s=n(28949),i=n(93379),m=n.n(i),d=n(7795),E=n.n(d),p=n(90569),f=n.n(p),h=n(3565),Z=n.n(h),g=n(19216),v=n.n(g),b=n(44589),y=n.n(b),x=n(62428),I={};I.styleTagTransform=y(),I.setAttributes=Z(),I.insert=f().bind(null,"head"),I.domAPI=E(),I.insertStyleElement=v(),m()(x.Z,I),x.Z&&x.Z.locals&&x.Z.locals;var B=function(e){var t,n=e.children,r=e.language,i=void 0===r?"typescript":r,m=e.theme,d=e.showLineNumbers,E=void 0!==d&&d,p=e.codeBlock,f=void 0!==p&&p,h=e.highlight,Z=e.copyBtn,g=void 0===Z||Z,v=(0,o.useContext)(s.I),b=a()((t={},(0,l.Z)(t,"".concat(u.HL,"-code"),!0),(0,l.Z)(t,"".concat(u.HL,"-code-no-copy-btn"),!g),t));return o.createElement("div",{className:b,style:{textAlign:"left"}},o.createElement(c.Z1,{text:n,language:i,showLineNumbers:E,theme:function(){switch(m){case"dracula":return c.cL;case"anOldHope":return c.dw;case"github":return c.bW;default:return v.theme===u.bF.DARK_THEME?c.g9:c.dw}}(),wrapLines:!0,codeBlock:f,highlight:h}))};const w=(0,o.memo)(B)},26006:(e,t,n)=>{n.d(t,{Z:()=>_});var l=n(4942),r=n(94184),a=n.n(r),o=n(67294),c=n(14289),u=n(78146),s=n(67115),i=n(76792),m=n(32209),d=n(41485),E=n(39602),p=n(44680),f=n(85893);const h=(0,E.Z)("h4");h.displayName="DivStyledAsH4";const Z=(0,p.Z)("alert-heading",{Component:h}),g=(0,p.Z)("alert-link",{Component:s.Z}),v={variant:"primary",show:!0,transition:m.Z,closeLabel:"Close alert"},b=o.forwardRef(((e,t)=>{const{bsPrefix:n,show:l,closeLabel:r,closeVariant:o,className:s,children:E,variant:p,onClose:h,dismissible:Z,transition:g,...v}=(0,c.Ch)(e,{show:"onClose"}),b=(0,i.vE)(n,"alert"),y=(0,u.Z)((e=>{h&&h(!1,e)})),x=!0===g?m.Z:g,I=(0,f.jsxs)("div",{role:"alert",...x?void 0:v,ref:t,className:a()(s,b,p&&`${b}-${p}`,Z&&`${b}-dismissible`),children:[Z&&(0,f.jsx)(d.Z,{onClick:y,"aria-label":r,variant:o}),E]});return x?(0,f.jsx)(x,{unmountOnExit:!0,...v,ref:void 0,in:l,children:I}):l?I:null}));b.displayName="Alert",b.defaultProps=v;const y=Object.assign(b,{Link:g,Heading:Z});var x=n(83819),I=n(93379),B=n.n(I),w=n(7795),k=n.n(w),j=n(90569),T=n.n(j),S=n(3565),J=n.n(S),O=n(19216),C=n.n(O),N=n(44589),A=n.n(N),L=n(11137),H={};H.styleTagTransform=A(),H.setAttributes=J(),H.insert=T().bind(null,"head"),H.domAPI=k(),H.insertStyleElement=C(),B()(L.Z,H),L.Z&&L.Z.locals&&L.Z.locals;var F=function(e){var t=e.children,n=e.noteText,r=void 0===n?"Note":n,c=e.variant,u=void 0===c?"primary":c,s=a()((0,l.Z)({},"".concat(x.HL,"-note"),!0));return o.createElement("div",{className:s},o.createElement("div",{className:"note-text"},r),o.createElement(y,{key:u,variant:u},t))};const _=(0,o.memo)(F)},62428:(e,t,n)=>{n.d(t,{Z:()=>c});var l=n(8081),r=n.n(l),a=n(23645),o=n.n(a)()(r());o.push([e.id,".ui-geeks-code{margin-top:1.5rem;margin-bottom:1.5rem}.ui-geeks-code-no-copy-btn button{display:none}\n",""]);const c=o},11137:(e,t,n)=>{n.d(t,{Z:()=>c});var l=n(8081),r=n.n(l),a=n(23645),o=n.n(a)()(r());o.push([e.id,".ui-geeks-note{margin-top:1.2rem;margin-bottom:3rem;font-style:italic}.ui-geeks-note .note-text{font-style:italic;position:relative;font-weight:bold;top:13px;z-index:9;margin-left:15px;background-color:#aba8f1;width:fit-content;padding:2px 10px 2px 10px;border-radius:4px}.theme-dark .ui-geeks-note .note-text{background-color:#464646}.theme-dark .ui-geeks-note .alert-primary{color:#000000;background-color:#d6d6d6;border-color:#393939}\n",""]);const c=o}}]);