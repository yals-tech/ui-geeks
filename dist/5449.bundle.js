"use strict";(self.webpackChunkui_geeks_in=self.webpackChunkui_geeks_in||[]).push([[5449,9127],{55449:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(67294),l=n(74214),o=n(87398),a=n(26006),i=n(68947),s=n(9167);const c=function(){return r.createElement(r.Fragment,null,r.createElement(o.Z,{as:"h3"},"Default Export"),r.createElement(i.Z,null,"There can be only one ",r.createElement(s.BI,null,"default export")," per module. They can be imported with any name. Default members are imported without curly brackets ","{ }","."),r.createElement(l.Z,null,'// "./exported-module.js"\nexport default let x = 10;\nexport default function greet() { console.log("Hello!"); };'),r.createElement(a.Z,null,"If multiple default exports are written in a module, each default export will ",r.createElement(s.B,null,"overwrite")," the previous one. In the above example,",r.createElement(s.B,null,'"greet()"')," will be the default exported member."),r.createElement(l.Z,null,'// "./main-program.js"\nimport greet from "./exported-module.js";\ngreet();  // "Hello!"'),r.createElement(a.Z,null,"The export default syntax allows any expression. For example:"," ",r.createElement(s.B,null,"export default 10 + 20"),";"))}},74214:(e,t,n)=>{n.d(t,{Z:()=>C});var r=n(4942),l=n(94184),o=n.n(l),a=n(67294),i=n(17606),s=n(83819),c=n(28949),d=n(93379),m=n.n(d),u=n(7795),p=n.n(u),h=n(90569),g=n.n(h),b=n(3565),f=n.n(b),x=n(19216),v=n.n(x),Z=n(44589),y=n.n(Z),k=n(62428),E={};E.styleTagTransform=y(),E.setAttributes=f(),E.insert=g().bind(null,"head"),E.domAPI=p(),E.insertStyleElement=v(),m()(k.Z,E),k.Z&&k.Z.locals&&k.Z.locals;var w=function(e){var t,n=e.children,l=e.language,d=void 0===l?"typescript":l,m=e.theme,u=e.showLineNumbers,p=void 0!==u&&u,h=e.codeBlock,g=void 0!==h&&h,b=e.highlight,f=e.copyBtn,x=void 0===f||f,v=(0,a.useContext)(c.I),Z=o()((t={},(0,r.Z)(t,"".concat(s.HL,"-code"),!0),(0,r.Z)(t,"".concat(s.HL,"-code-no-copy-btn"),!x),t));return a.createElement("div",{className:Z,style:{textAlign:"left"}},a.createElement(i.Z1,{text:n,language:d,showLineNumbers:p,theme:function(){switch(m){case"dracula":return i.cL;case"anOldHope":return i.dw;case"github":return i.bW;default:return v.theme===s.bF.DARK_THEME?i.g9:i.dw}}(),wrapLines:!0,codeBlock:g,highlight:b}))};const C=(0,a.memo)(w)},26006:(e,t,n)=>{n.d(t,{Z:()=>O});var r=n(4942),l=n(94184),o=n.n(l),a=n(67294),i=n(14289),s=n(78146),c=n(67115),d=n(76792),m=n(32209),u=n(41485),p=n(39602),h=n(44680),g=n(85893);const b=(0,p.Z)("h4");b.displayName="DivStyledAsH4";const f=(0,h.Z)("alert-heading",{Component:b}),x=(0,h.Z)("alert-link",{Component:c.Z}),v={variant:"primary",show:!0,transition:m.Z,closeLabel:"Close alert"},Z=a.forwardRef(((e,t)=>{const{bsPrefix:n,show:r,closeLabel:l,closeVariant:a,className:c,children:p,variant:h,onClose:b,dismissible:f,transition:x,...v}=(0,i.Ch)(e,{show:"onClose"}),Z=(0,d.vE)(n,"alert"),y=(0,s.Z)((e=>{b&&b(!1,e)})),k=!0===x?m.Z:x,E=(0,g.jsxs)("div",{role:"alert",...k?void 0:v,ref:t,className:o()(c,Z,h&&`${Z}-${h}`,f&&`${Z}-dismissible`),children:[f&&(0,g.jsx)(u.Z,{onClick:y,"aria-label":l,variant:a}),p]});return k?(0,g.jsx)(k,{unmountOnExit:!0,...v,ref:void 0,in:r,children:E}):r?E:null}));Z.displayName="Alert",Z.defaultProps=v;const y=Object.assign(Z,{Link:x,Heading:f});var k=n(83819),E=n(93379),w=n.n(E),C=n(7795),L=n.n(C),N=n(90569),H=n.n(N),T=n(3565),A=n.n(T),j=n(19216),B=n.n(j),I=n(44589),_=n.n(I),D=n(11137),P={};P.styleTagTransform=_(),P.setAttributes=A(),P.insert=H().bind(null,"head"),P.domAPI=L(),P.insertStyleElement=B(),w()(D.Z,P),D.Z&&D.Z.locals&&D.Z.locals;var F=function(e){var t=e.children,n=e.noteText,l=void 0===n?"Note":n,i=e.variant,s=void 0===i?"primary":i,c=o()((0,r.Z)({},"".concat(k.HL,"-note"),!0));return a.createElement("div",{className:c},a.createElement("div",{className:"note-text"},l),a.createElement(y,{key:s,variant:s},t))};const O=(0,a.memo)(F)},62428:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(8081),l=n.n(r),o=n(23645),a=n.n(o)()(l());a.push([e.id,".ui-geeks-code{margin-top:1.5rem;margin-bottom:1.5rem}.ui-geeks-code-no-copy-btn button{display:none}\n",""]);const i=a},11137:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(8081),l=n.n(r),o=n(23645),a=n.n(o)()(l());a.push([e.id,".ui-geeks-note{margin-top:1.2rem;margin-bottom:3rem;font-style:italic}.ui-geeks-note .note-text{font-style:italic;position:relative;font-weight:bold;top:13px;z-index:9;margin-left:15px;background-color:#aba8f1;width:fit-content;padding:2px 10px 2px 10px;border-radius:4px}.theme-dark .ui-geeks-note .note-text{background-color:#464646}.theme-dark .ui-geeks-note .alert-primary{color:#000000;background-color:#d6d6d6;border-color:#393939}\n",""]);const i=a}}]);