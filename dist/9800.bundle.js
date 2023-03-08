"use strict";(self.webpackChunkui_geeks_in_web=self.webpackChunkui_geeks_in_web||[]).push([[9800],{99800:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var l=n(67294),a=n(74214),i=n(87398),r=n(68947),c=n(12050),o=n(9167);const u=function(){return l.createElement(l.Fragment,null,l.createElement(i.Z,{as:"h2"},"Variable Hoisting"),l.createElement(r.Z,null,l.createElement(o.I,null,"Hoisting")," also works with ",l.createElement(o.I,null,"variables")," too, however, JavaScript only ",l.createElement(o.BI,null,"hoists declaration")," and not the",l.createElement(o.BI,null,"initialization")," ",l.createElement(c.Z,null),"i.e, the initialization doesn't happen until the associated line of code is executed, even if the variable was originally initialized and then declared or declared and initialized in the same line. Until that point in the execution is reached, the variable has its default value (",l.createElement(o.I,null,"undefined")," for a variable declared with ",l.createElement(o.BI,null,"var"),", otherwise",l.createElement(c.Z,null)," ",l.createElement(o.I,null,"uninitialized"),")."),l.createElement(r.Z,null,l.createElement(o.IU,null,"Example:"),l.createElement(a.Z,null,'console.log(varVariable); // undefined\nvar name ="JavaScript";\n')),l.createElement(r.Z,null,"If we forget the ",l.createElement(o.BI,null,"declaration")," altogether (and only",l.createElement(c.Z,null)," ",l.createElement(o.I,null,"initialize")," ",l.createElement(c.Z,null),"the value) the variable ",l.createElement(o.BI,null,"isn't hoisted"),". Trying to access the variable before it is initialized will result in ",l.createElement(o.B,null,"ReferenceError"),"."),l.createElement(r.Z,null,"The below statement will throw ",l.createElement(o.B,null,"ReferenceError"),", because",l.createElement(o.BI,null,"num")," was not ",l.createElement(o.I,null,"hoisted"),"."),l.createElement(a.Z,null,"console.log(num); // ReferenceError\nnum = 10;\n"))}},74214:(e,t,n)=>{n.d(t,{Z:()=>B});var l=n(4942),a=n(94184),i=n.n(a),r=n(67294),c=n(17606),o=n(83819),u=n(28949),s=n(93379),d=n.n(s),m=n(7795),h=n.n(m),E=n(90569),g=n.n(E),b=n(3565),v=n.n(b),w=n(19216),f=n.n(w),Z=n(44589),p=n.n(Z),I=n(62428),y={};y.styleTagTransform=p(),y.setAttributes=v(),y.insert=g().bind(null,"head"),y.domAPI=h(),y.insertStyleElement=f(),d()(I.Z,y),I.Z&&I.Z.locals&&I.Z.locals;var k=function(e){var t,n=e.children,a=e.language,s=void 0===a?"typescript":a,d=e.theme,m=e.showLineNumbers,h=void 0!==m&&m,E=e.codeBlock,g=void 0!==E&&E,b=e.highlight,v=e.copyBtn,w=void 0===v||v,f=(0,r.useContext)(u.I),Z=i()((t={},(0,l.Z)(t,"".concat(o.HL,"-code"),!0),(0,l.Z)(t,"".concat(o.HL,"-code-no-copy-btn"),!w),t));return r.createElement("div",{className:Z,style:{textAlign:"left"}},r.createElement(c.Z1,{text:n,language:s,showLineNumbers:h,theme:function(){switch(d){case"dracula":return c.cL;case"anOldHope":return c.dw;case"github":return c.bW;default:return f.theme===o.bF.DARK_THEME?c.g9:c.dw}}(),wrapLines:!0,codeBlock:g,highlight:b}))};const B=(0,r.memo)(k)},62428:(e,t,n)=>{n.d(t,{Z:()=>c});var l=n(8081),a=n.n(l),i=n(23645),r=n.n(i)()(a());r.push([e.id,".ui-geeks-code{margin-top:1.5rem;margin-bottom:1.5rem}.ui-geeks-code-no-copy-btn button{display:none}\n",""]);const c=r}}]);