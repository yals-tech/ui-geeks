"use strict";(self.webpackChunkui_geeks_in_web=self.webpackChunkui_geeks_in_web||[]).push([[7083],{87083:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var l=n(67294),a=n(74214),r=n(87398),c=n(68947),u=n(12050),m=n(9167),o=[{label:l.createElement(l.Fragment,null,l.createElement(m.BI,null,"Array()"),", ",l.createElement(m.BI,null,"Error()")," and ",l.createElement(m.BI,null,"Function()")," behave the same way, when called as a",l.createElement(m.I,null," function")," or ",l.createElement(m.I,null,"constructor"),".")},{label:l.createElement(l.Fragment,null,l.createElement(m.BI,null,"Boolean()"),", ",l.createElement(m.BI,null,"Number()")," and ",l.createElement(m.BI,null,"String()")," ",l.createElement(u.Z,null),l.createElement(m.I,null,"coerce")," their arguments to the respective ",l.createElement(m.I,null,"primitive type"),l.createElement(u.Z,null)," when called as a ",l.createElement(m.I,null,"function"),", but returns ",l.createElement(u.Z,null),l.createElement(m.I,null,"wrapper objects")," when ",l.createElement(m.I,null,"constructed")," with the ",l.createElement(m.BI,null,"new"),l.createElement(u.Z,null)," operator.")}],s=[{label:l.createElement(l.Fragment,null,l.createElement(m.BI,null,"Symbol()")," and ",l.createElement(m.BI,null,"BigInt()")," can only be called without",l.createElement(m.BI,null,"new"),". Attempting to construct then will throw ",l.createElement(m.B,null,"TypeError"),".")},{label:l.createElement(l.Fragment,null,l.createElement(m.BI,null,"Proxy")," and ",l.createElement(m.BI,null,"Map")," can only be constructed with",l.createElement(m.BI,null,"new"),". Attempting to call them as functions will throw a",l.createElement(m.B,null,"TypeError"),".")}];const i=function(){return l.createElement(l.Fragment,null,l.createElement(c.Z,null,"Prior to ES6, which introduced the ",l.createElement(m.BI,null,"class"),", most JavaScript",l.createElement(u.Z,null)," ",l.createElement(m.I,null,"built-ins")," are both ",l.createElement(m.I,null,"callable")," and ",l.createElement(u.Z,null),l.createElement(m.I,null,"constructible"),", although many of them exhibit different behaviors. For example:"),l.createElement(m.GS,{expanded:!0,items:o}),l.createElement(c.Z,null,"But after ES6, language is stricter about which are ",l.createElement(m.I,null,"constructors"),l.createElement(u.Z,null)," and which are ",l.createElement(m.I,null,"functions"),". For example:"),l.createElement(m.GS,{expanded:!0,items:s}),l.createElement(c.Z,null,l.createElement(r.Z,{as:"h4"},'Using "new" with Classes'),l.createElement(c.Z,null,"Classes can only be instantiated with the ",l.createElement(m.BI,null,"new")," operator. Attempting to call a ",l.createElement(m.I,null,"class")," without ",l.createElement(m.I,null,"new")," will throw",l.createElement(m.B,null,"TypeError"),"."),l.createElement(a.Z,null,'class User {\n  constructor(firstName, lastName) {\n    this.firstName = firstName;\n    this.lastName = lastName;\n  }\n\n  showName(){\n  console.log(this.firstName + "-" + this.lastName);\n  }\n}\n\nconst user = new User("JavaScript", "Language");\nuser.showName();  // "JavaScript-Language"')))}},74214:(e,t,n)=>{n.d(t,{Z:()=>N});var l=n(4942),a=n(94184),r=n.n(a),c=n(67294),u=n(17606),m=n(83819),o=n(28949),s=n(93379),i=n.n(s),E=n(7795),h=n.n(E),d=n(90569),w=n.n(d),g=n(3565),b=n.n(g),p=n(19216),I=n.n(p),B=n(44589),Z=n.n(B),f=n(62428),y={};y.styleTagTransform=Z(),y.setAttributes=b(),y.insert=w().bind(null,"head"),y.domAPI=h(),y.insertStyleElement=I(),i()(f.Z,y),f.Z&&f.Z.locals&&f.Z.locals;var v=function(e){var t,n=e.children,a=e.language,s=void 0===a?"typescript":a,i=e.theme,E=e.showLineNumbers,h=void 0!==E&&E,d=e.codeBlock,w=void 0!==d&&d,g=e.highlight,b=e.copyBtn,p=void 0===b||b,I=(0,c.useContext)(o.I),B=r()((t={},(0,l.Z)(t,"".concat(m.HL,"-code"),!0),(0,l.Z)(t,"".concat(m.HL,"-code-no-copy-btn"),!p),t));return c.createElement("div",{className:B,style:{textAlign:"left"}},c.createElement(u.Z1,{text:n,language:s,showLineNumbers:h,theme:function(){switch(i){case"dracula":return u.cL;case"anOldHope":return u.dw;case"github":return u.bW;default:return I.theme===m.bF.DARK_THEME?u.g9:u.dw}}(),wrapLines:!0,codeBlock:w,highlight:g}))};const N=(0,c.memo)(v)},62428:(e,t,n)=>{n.d(t,{Z:()=>u});var l=n(8081),a=n.n(l),r=n(23645),c=n.n(r)()(a());c.push([e.id,".ui-geeks-code{margin-top:1.5rem;margin-bottom:1.5rem}.ui-geeks-code-no-copy-btn button{display:none}\n",""]);const u=c}}]);