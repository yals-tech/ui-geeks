"use strict";(self.webpackChunkui_geeks_in_web=self.webpackChunkui_geeks_in_web||[]).push([[9948,4691,4441,8744,5107,6984,9127],{4691:(e,t,l)=>{l.r(t),l.d(t,{default:()=>c});var n=l(67294),r=l(74214),a=l(87398),o=l(68947),m=l(12050),i=l(9167);const c=function(){return n.createElement(n.Fragment,null,n.createElement(a.Z,{as:"h3"},"Default import"),n.createElement(o.Z,null,"As the name suggests, this is used to import the ",n.createElement(i.BI,null,"default export"),n.createElement(m.Z,null),"members.",n.createElement(m.Z,null),"members.",n.createElement(r.Z,null,'import greet from "./exportedModule.js";')),n.createElement(o.Z,null,"Importing a name called ",n.createElement(i.B,null,"default")," has the same effect as a",n.createElement(m.Z,null),n.createElement(i.I,null,"default import"),". It is necessary to alias the name because",n.createElement(m.Z,null),n.createElement(i.I,null,"default")," is a reserved word.",n.createElement(r.Z,null,'import { default as myDefaultMember } from "./module-1.js";')))}},74441:(e,t,l)=>{l.r(t),l.d(t,{default:()=>i});var n=l(67294),r=l(68947),a=l(12050),o=l(9167),m=[{label:"Named import"},{label:"Default import"},{label:"Namespace import"},{label:"Side-effect import"}];const i=function(){return n.createElement(n.Fragment,null,n.createElement(r.Z,null,"The ",n.createElement(o.I,null,"import")," declaration is used to import members which are exported from other modules. The imported members are ",n.createElement(o.I,null,"read-only"),n.createElement(a.Z,null),"with",n.createElement(a.Z,null),n.createElement(o.I,null,"live bindings"),", because the importing module cannot modify them, they are only updated by the source module which exported them."),n.createElement(r.Z,null,"In order to use the ",n.createElement(o.I,null,"import")," declaration, the file must be interpreted by the runtime as a ",n.createElement(o.I,null,"module"),". In HTML, this is done by adding the",n.createElement(o.BI,null,'type="module"')," attribute to the ",n.createElement(o.B,null,"<script>")," tag. There is also a function-like ",n.createElement(o.I,null,"dynamic import()"),", which does not require scripts of ",n.createElement(o.BI,null,'type="module"')," attribute."),n.createElement(r.Z,null,"There are four forms of import declaration:",n.createElement(o.GS,{unOrdered:!0,items:m})))}},49948:(e,t,l)=>{l.r(t),l.d(t,{default:()=>s});var n=l(67294),r=l(87398),a=l(68947),o=l(4691),m=l(74441),i=l(8744),c=l(15107),u=l(66984);const s=function(){return n.createElement(n.Fragment,null,n.createElement(r.Z,{as:"h2"},"import Statement"),n.createElement(a.Z,null,n.createElement(m.default,null),n.createElement(i.default,null),n.createElement(o.default,null),n.createElement(c.default,null),n.createElement(u.default,null)))}},8744:(e,t,l)=>{l.r(t),l.d(t,{default:()=>c});var n=l(67294),r=l(74214),a=l(87398),o=l(68947),m=l(12050),i=l(9167);const c=function(){return n.createElement(n.Fragment,null,n.createElement(a.Z,{as:"h3"},"Named import"),n.createElement(o.Z,null,"As the name suggests, this is used to import the ",n.createElement(i.BI,null,"named export"),n.createElement(m.Z,null),"members.",n.createElement(r.Z,null,'import { sayHi, sayBye } from "./exportedModule.js";')))}},15107:(e,t,l)=>{l.r(t),l.d(t,{default:()=>s});var n=l(67294),r=l(74214),a=l(87398),o=l(26006),m=l(68947),i=l(12050),c=l(9167),u=l(33470);const s=function(){return n.createElement(n.Fragment,null,n.createElement(a.Z,{as:"h3"},"Namespace import"),n.createElement(m.Z,null,"Namespace import, inserts a given module into the current scope, containing all the exports from the module. All keys are ",n.createElement(i.Z,null),n.createElement(c.I,null,"enumerable")," in lexicographic order, with the",n.createElement(c.BI,null,"default export")," available as a key called",n.createElement(c.B,null,"default"),"."),n.createElement(r.Z,null,'import * as myModule from "./exportedModule.js";\nmyModule.greet(); // "Hello!"\n'),n.createElement(m.Z,null,n.createElement(c.BI,null,'"myModule"')," is a ",n.createElement(c.BI,null,"sealed")," object with a ",n.createElement(c.I,null,"null"),n.createElement(c.BI,null,"prototype"),"."),n.createElement(m.Z,null,"It is also possible to specify a ",n.createElement(c.I,null,"default import")," with the",n.createElement(i.Z,null),n.createElement(c.I,null,"namespace")," or",n.createElement(i.Z,null),n.createElement(c.I,null,"named import"),". In such cases, the ",n.createElement(c.I,null,"default import")," has to be declared before ",n.createElement(c.I,null,"namespace/named import"),"."),n.createElement(u.Z,{bold:!0,underline:!0},"Example of ",n.createElement(c.I,null,"default import")," with ",n.createElement(c.I,null,"namespace import"),"."),n.createElement(r.Z,null,'import defaultMember, * as myModule from "./exported-module.js";'),n.createElement(c.cJ,null),n.createElement(u.Z,{bold:!0,underline:!0},"Example of ",n.createElement(c.I,null,"default import")," with ",n.createElement(c.I,null,"named import"),"."),n.createElement(r.Z,null,'import defaultMember, { myExportedVal, myFunc } from "./exported-module.js";'),n.createElement(o.Z,null,"JavaScript do not have ",n.createElement(c.B,null,"wild-card import"),', like, import * from "exported-module.js", similar to wild-card export like export * from "module.js". The reason is the high possibility of name conflicts.'))}},66984:(e,t,l)=>{l.r(t),l.d(t,{default:()=>c});var n=l(67294),r=l(74214),a=l(87398),o=l(68947),m=l(12050),i=l(9167);const c=function(){return n.createElement(n.Fragment,null,n.createElement(a.Z,{as:"h3"},"Side-effect import"),n.createElement(o.Z,null,"This does not import anything from the module, instead the module is imported for ",n.createElement(i.I,null,"side-effects"),". As a ",n.createElement(i.I,null,"side-effect"),", this import declaration executes the imported module's code. This is often used for",n.createElement(m.Z,null),n.createElement(i.I,null,"polyfills"),", which mutate the global variables."),n.createElement(o.Z,null,n.createElement(i.IU,null,"Syntax:"),n.createElement(i.cJ,null),n.createElement(i.I,null,'import "<path-of-the-module>";')),n.createElement(r.Z,null,'import "./module.js";'))}},74214:(e,t,l)=>{l.d(t,{Z:()=>k});var n=l(4942),r=l(94184),a=l.n(r),o=l(67294),m=l(17606),i=l(83819),c=l(28949),u=l(93379),s=l.n(u),d=l(7795),p=l.n(d),h=l(90569),E=l.n(h),f=l(3565),b=l.n(f),Z=l(19216),g=l.n(Z),y=l(44589),v=l.n(y),I=l(62428),x={};x.styleTagTransform=v(),x.setAttributes=b(),x.insert=E().bind(null,"head"),x.domAPI=p(),x.insertStyleElement=g(),s()(I.Z,x),I.Z&&I.Z.locals&&I.Z.locals;var w=function(e){var t,l=e.children,r=e.language,u=void 0===r?"typescript":r,s=e.theme,d=e.showLineNumbers,p=void 0!==d&&d,h=e.codeBlock,E=void 0!==h&&h,f=e.highlight,b=e.copyBtn,Z=void 0===b||b,g=(0,o.useContext)(c.I),y=a()((t={},(0,n.Z)(t,"".concat(i.HL,"-code"),!0),(0,n.Z)(t,"".concat(i.HL,"-code-no-copy-btn"),!Z),t));return o.createElement("div",{className:y,style:{textAlign:"left"}},o.createElement(m.Z1,{text:l,language:u,showLineNumbers:p,theme:function(){switch(s){case"dracula":return m.cL;case"anOldHope":return m.dw;case"github":return m.bW;default:return g.theme===i.bF.DARK_THEME?m.g9:m.dw}}(),wrapLines:!0,codeBlock:E,highlight:f}))};const k=(0,o.memo)(w)},26006:(e,t,l)=>{l.d(t,{Z:()=>D});var n=l(4942),r=l(94184),a=l.n(r),o=l(67294),m=l(14289),i=l(78146),c=l(67115),u=l(76792),s=l(32209),d=l(41485),p=l(39602),h=l(44680),E=l(85893);const f=(0,p.Z)("h4");f.displayName="DivStyledAsH4";const b=(0,h.Z)("alert-heading",{Component:f}),Z=(0,h.Z)("alert-link",{Component:c.Z}),g={variant:"primary",show:!0,transition:s.Z,closeLabel:"Close alert"},y=o.forwardRef(((e,t)=>{const{bsPrefix:l,show:n,closeLabel:r,closeVariant:o,className:c,children:p,variant:h,onClose:f,dismissible:b,transition:Z,...g}=(0,m.Ch)(e,{show:"onClose"}),y=(0,u.vE)(l,"alert"),v=(0,i.Z)((e=>{f&&f(!1,e)})),I=!0===Z?s.Z:Z,x=(0,E.jsxs)("div",{role:"alert",...I?void 0:g,ref:t,className:a()(c,y,h&&`${y}-${h}`,b&&`${y}-dismissible`),children:[b&&(0,E.jsx)(d.Z,{onClick:v,"aria-label":r,variant:o}),p]});return I?(0,E.jsx)(I,{unmountOnExit:!0,...g,ref:void 0,in:n,children:x}):n?x:null}));y.displayName="Alert",y.defaultProps=g;const v=Object.assign(y,{Link:Z,Heading:b});var I=l(83819),x=l(93379),w=l.n(x),k=l(7795),B=l.n(k),N=l(90569),j=l.n(N),T=l(3565),A=l.n(T),M=l(19216),L=l.n(M),C=l(44589),H=l.n(C),S=l(11137),F={};F.styleTagTransform=H(),F.setAttributes=A(),F.insert=j().bind(null,"head"),F.domAPI=B(),F.insertStyleElement=L(),w()(S.Z,F),S.Z&&S.Z.locals&&S.Z.locals;var _=function(e){var t=e.children,l=e.noteText,r=void 0===l?"Note":l,m=e.variant,i=void 0===m?"primary":m,c=a()((0,n.Z)({},"".concat(I.HL,"-note"),!0));return o.createElement("div",{className:c},o.createElement("div",{className:"note-text"},r),o.createElement(v,{key:i,variant:i},t))};const D=(0,o.memo)(_)},62428:(e,t,l)=>{l.d(t,{Z:()=>m});var n=l(8081),r=l.n(n),a=l(23645),o=l.n(a)()(r());o.push([e.id,".ui-geeks-code{margin-top:1.5rem;margin-bottom:1.5rem}.ui-geeks-code-no-copy-btn button{display:none}\n",""]);const m=o},11137:(e,t,l)=>{l.d(t,{Z:()=>m});var n=l(8081),r=l.n(n),a=l(23645),o=l.n(a)()(r());o.push([e.id,".ui-geeks-note{margin-top:1.2rem;margin-bottom:3rem;font-style:italic}.ui-geeks-note .note-text{font-style:italic;position:relative;font-weight:bold;top:13px;z-index:9;margin-left:15px;background-color:#aba8f1;width:fit-content;padding:2px 10px 2px 10px;border-radius:4px}.theme-dark .ui-geeks-note .note-text{background-color:#464646}.theme-dark .ui-geeks-note .alert-primary{color:#000000;background-color:#d6d6d6;border-color:#393939}\n",""]);const m=o}}]);