"use strict";(self.webpackChunkui_geeks_in=self.webpackChunkui_geeks_in||[]).push([[5786,9127],{85786:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var l=n(67294),a=n(74214),o=n(87398),r=n(26006),i=n(68947),c=n(9167);const s=function(){return l.createElement(l.Fragment,null,l.createElement(o.Z,{as:"h3"},"Named Export"),l.createElement(i.Z,null,"As the name suggests, ",l.createElement(c.BI,null,"named exports")," are one which have a"," ",l.createElement(c.B,null,"unique name"),". A module can have multiple named exports. While importing, named exports must be referred to by the exact same name (optionally renaming it with ",l.createElement(c.B,null,"as"),"). Named exports should always be enclosed within ","{ }"," brackets."),l.createElement(a.Z,null,'export let myExportedVal = 10;\nexport function myFunc() { console.log("hello");\n'),l.createElement(r.Z,null,l.createElement(c.B,null,"export ","{}")," does not export an empty object. It is a no-op declaration that exports nothing."),l.createElement(o.Z,{as:"h4"},"Named export can be renamed while exporting from the module"),l.createElement(i.Z,null,"The ",l.createElement(c.B,null,"as")," operator can be used to rename the export declaration."),l.createElement(a.Z,null,'const func( ) { console.log("hello");\nexport { func as myFunction };\n'),l.createElement(i.Z,null,"The ",l.createElement(c.I,null,"import")," declaration will have to use ",l.createElement(c.BI,null,"myFunction")," in order to access it."),l.createElement(i.Z,null,"Exported members can also be renamed to something that's not a valid identifier."),l.createElement(a.Z,null,'const func( ) { console.log("hello");\nexport { func as "my-func" };'),l.createElement(i.Z,null,"The ",l.createElement(c.I,null,"import")," declaration will have to use ",l.createElement(c.BI,null,'"my-func"')," in order to access it."),l.createElement(i.Z,null,"The ",l.createElement(c.I,null,"export")," declarations are not subject to",l.createElement(c.B,null,"temporal dead zone")," rules. The ",l.createElement(c.I,null,"export")," declaration can be written, even before declaring the exported members. This would work because the ",l.createElement(c.I,null,"export")," statement is only a declaration, it does not utilize/evaluate the exported member."),l.createElement(a.Z,null,"export { x };\nlet x = 10;\n"),l.createElement(i.Z,null,"The ",l.createElement(c.I,null,"export")," declaration of ",l.createElement(c.B,null,'"x"')," is written even before declaring ",l.createElement(c.B,null,'"x"'),"."))}},74214:(e,t,n)=>{n.d(t,{Z:()=>B});var l=n(4942),a=n(94184),o=n.n(a),r=n(67294),i=n(17606),c=n(83819),s=n(28949),m=n(93379),d=n.n(m),u=n(7795),h=n.n(u),p=n(90569),x=n.n(p),g=n(3565),b=n.n(g),E=n(19216),v=n.n(E),Z=n(44589),f=n.n(Z),y=n(62428),k={};k.styleTagTransform=f(),k.setAttributes=b(),k.insert=x().bind(null,"head"),k.domAPI=h(),k.insertStyleElement=v(),d()(y.Z,k),y.Z&&y.Z.locals&&y.Z.locals;var w=function(e){var t,n=e.children,a=e.language,m=void 0===a?"typescript":a,d=e.theme,u=e.showLineNumbers,h=void 0!==u&&u,p=e.codeBlock,x=void 0!==p&&p,g=e.highlight,b=e.copyBtn,E=void 0===b||b,v=(0,r.useContext)(s.I),Z=o()((t={},(0,l.Z)(t,"".concat(c.HL,"-code"),!0),(0,l.Z)(t,"".concat(c.HL,"-code-no-copy-btn"),!E),t));return r.createElement("div",{className:Z,style:{textAlign:"left"}},r.createElement(i.Z1,{text:n,language:m,showLineNumbers:h,theme:function(){switch(d){case"dracula":return i.cL;case"anOldHope":return i.dw;case"github":return i.bW;default:return v.theme===c.bF.DARK_THEME?i.g9:i.dw}}(),wrapLines:!0,codeBlock:x,highlight:g}))};const B=(0,r.memo)(w)},26006:(e,t,n)=>{n.d(t,{Z:()=>O});var l=n(4942),a=n(94184),o=n.n(a),r=n(67294),i=n(14289),c=n(78146),s=n(67115),m=n(76792),d=n(32209),u=n(41485),h=n(39602),p=n(44680),x=n(85893);const g=(0,h.Z)("h4");g.displayName="DivStyledAsH4";const b=(0,p.Z)("alert-heading",{Component:g}),E=(0,p.Z)("alert-link",{Component:s.Z}),v={variant:"primary",show:!0,transition:d.Z,closeLabel:"Close alert"},Z=r.forwardRef(((e,t)=>{const{bsPrefix:n,show:l,closeLabel:a,closeVariant:r,className:s,children:h,variant:p,onClose:g,dismissible:b,transition:E,...v}=(0,i.Ch)(e,{show:"onClose"}),Z=(0,m.vE)(n,"alert"),f=(0,c.Z)((e=>{g&&g(!1,e)})),y=!0===E?d.Z:E,k=(0,x.jsxs)("div",{role:"alert",...y?void 0:v,ref:t,className:o()(s,Z,p&&`${Z}-${p}`,b&&`${Z}-dismissible`),children:[b&&(0,x.jsx)(u.Z,{onClick:f,"aria-label":a,variant:r}),h]});return y?(0,x.jsx)(y,{unmountOnExit:!0,...v,ref:void 0,in:l,children:k}):l?k:null}));Z.displayName="Alert",Z.defaultProps=v;const f=Object.assign(Z,{Link:E,Heading:b});var y=n(83819),k=n(93379),w=n.n(k),B=n(7795),I=n.n(B),N=n(90569),T=n.n(N),A=n(3565),C=n.n(A),L=n(19216),H=n.n(L),j=n(44589),F=n.n(j),_=n(11137),P={};P.styleTagTransform=F(),P.setAttributes=C(),P.insert=T().bind(null,"head"),P.domAPI=I(),P.insertStyleElement=H(),w()(_.Z,P),_.Z&&_.Z.locals&&_.Z.locals;var z=function(e){var t=e.children,n=e.noteText,a=void 0===n?"Note":n,i=e.variant,c=void 0===i?"primary":i,s=o()((0,l.Z)({},"".concat(y.HL,"-note"),!0));return r.createElement("div",{className:s},r.createElement("div",{className:"note-text"},a),r.createElement(f,{key:c,variant:c},t))};const O=(0,r.memo)(z)},62428:(e,t,n)=>{n.d(t,{Z:()=>i});var l=n(8081),a=n.n(l),o=n(23645),r=n.n(o)()(a());r.push([e.id,".ui-geeks-code{margin-top:1.5rem;margin-bottom:1.5rem}.ui-geeks-code-no-copy-btn button{display:none}\n",""]);const i=r},11137:(e,t,n)=>{n.d(t,{Z:()=>i});var l=n(8081),a=n.n(l),o=n(23645),r=n.n(o)()(a());r.push([e.id,".ui-geeks-note{margin-top:1.2rem;margin-bottom:3rem;font-style:italic}.ui-geeks-note .note-text{font-style:italic;position:relative;font-weight:bold;top:13px;z-index:9;margin-left:15px;background-color:#aba8f1;width:fit-content;padding:2px 10px 2px 10px;border-radius:4px}.theme-dark .ui-geeks-note .note-text{background-color:#464646}.theme-dark .ui-geeks-note .alert-primary{color:#000000;background-color:#d6d6d6;border-color:#393939}\n",""]);const i=r}}]);