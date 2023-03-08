"use strict";(self.webpackChunkui_geeks_in_web=self.webpackChunkui_geeks_in_web||[]).push([[5042,6949],{55042:(e,t,l)=>{l.r(t),l.d(t,{default:()=>s});var n=l(67294),a=l(74214),r=l(87398),c=l(68947),o=l(9167),u=l(76949);const s=function(){return n.createElement(n.Fragment,null,n.createElement(r.Z,{as:"h3"},"Class Properties"),n.createElement(u.default,null),n.createElement(r.Z,{as:"h4"},"displayName"),n.createElement(c.Z,null,"The ",n.createElement(o.BI,null,"displayName")," string is used in debugging messages. Usually, we don't need to set it explicitly because it's inferred from the name of the function or class component."),n.createElement(c.Z,null,n.createElement(o.IU,null,"Example:"),n.createElement(a.Z,null,'Welcome.displayName = "Welcome Component";')))}},76949:(e,t,l)=>{l.r(t),l.d(t,{default:()=>m});var n=l(67294),a=l(74214),r=l(91573),c=l(87398),o=l(68947),u=l(12050),s=l(9167);const m=function(){return n.createElement(n.Fragment,null,n.createElement(c.Z,{as:"h4"},"defaultProps"),n.createElement(o.Z,null,"It can be defined as a property on the component class itself, to set the ",n.createElement(s.I,null,"default props")," for the class. This is used for ",n.createElement(u.Z,null),n.createElement(s.BI,null,"undefined")," props, but not for ",n.createElement(s.BI,null,"null")," props."),n.createElement(o.Z,null,n.createElement(s.IU,null,"Example:"),n.createElement(a.Z,{language:r.r.JSX},'Welcome.defaultProps = {\n  userName : "John"\n}')),n.createElement(o.Z,null,n.createElement(a.Z,{language:r.r.JSX},"const element = <Welcome />;"),"Above will render ",n.createElement(s.B,null,'"Hello, John"'),", because we didn't pass the value of ",n.createElement(s.BI,null,"userName")," at the time of calling component, therefore it will read the value from ",n.createElement(s.BI,null,"defaultProps"),"."),n.createElement(o.Z,null,"The ",n.createElement(s.I,null,"defaultProps")," do not work for ",n.createElement(s.BI,null,"null")," values."),n.createElement(o.Z,null,n.createElement(s.IU,null,"Example:"),n.createElement(a.Z,{language:r.r.JSX},"const element = <Welcome userName={null} />;"),"Above will render ",n.createElement(s.B,null,'"Hello, "'),", because we passed the value of",n.createElement(u.Z,null)," ",n.createElement(s.BI,null,"userName")," as ",n.createElement(s.BI,null,"null")," at the time of calling component, therefore it will ",n.createElement(s.B,null,"ignore")," the value of ",n.createElement(u.Z,null),n.createElement(s.BI,null,"defaultProps"),"."))}},74214:(e,t,l)=>{l.d(t,{Z:()=>k});var n=l(4942),a=l(94184),r=l.n(a),c=l(67294),o=l(17606),u=l(83819),s=l(28949),m=l(93379),i=l.n(m),d=l(7795),p=l.n(d),E=l(90569),h=l.n(E),f=l(3565),g=l.n(f),Z=l(19216),b=l.n(Z),v=l(44589),w=l.n(v),I=l(62428),y={};y.styleTagTransform=w(),y.setAttributes=g(),y.insert=h().bind(null,"head"),y.domAPI=p(),y.insertStyleElement=b(),i()(I.Z,y),I.Z&&I.Z.locals&&I.Z.locals;var B=function(e){var t,l=e.children,a=e.language,m=void 0===a?"typescript":a,i=e.theme,d=e.showLineNumbers,p=void 0!==d&&d,E=e.codeBlock,h=void 0!==E&&E,f=e.highlight,g=e.copyBtn,Z=void 0===g||g,b=(0,c.useContext)(s.I),v=r()((t={},(0,n.Z)(t,"".concat(u.HL,"-code"),!0),(0,n.Z)(t,"".concat(u.HL,"-code-no-copy-btn"),!Z),t));return c.createElement("div",{className:v,style:{textAlign:"left"}},c.createElement(o.Z1,{text:l,language:m,showLineNumbers:p,theme:function(){switch(i){case"dracula":return o.cL;case"anOldHope":return o.dw;case"github":return o.bW;default:return b.theme===u.bF.DARK_THEME?o.g9:o.dw}}(),wrapLines:!0,codeBlock:h,highlight:f}))};const k=(0,c.memo)(B)},91573:(e,t,l)=>{l.d(t,{r:()=>n});var n={JavaScript:"javascript",TypeScript:"typescript",HTML:"html",CSS:"css",JSX:"jsx"}},62428:(e,t,l)=>{l.d(t,{Z:()=>o});var n=l(8081),a=l.n(n),r=l(23645),c=l.n(r)()(a());c.push([e.id,".ui-geeks-code{margin-top:1.5rem;margin-bottom:1.5rem}.ui-geeks-code-no-copy-btn button{display:none}\n",""]);const o=c}}]);