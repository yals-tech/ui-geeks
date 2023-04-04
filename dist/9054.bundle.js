"use strict";(self.webpackChunkui_geeks_in=self.webpackChunkui_geeks_in||[]).push([[9054,9127],{89054:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var a=n(67294),r=n(74214),l=n(87398),o=n(26006),i=n(68947),s=n(12050),c=n(9167);const m=function(){return a.createElement(a.Fragment,null,a.createElement(l.Z,{as:"h2"},"Accessing object properties"),a.createElement(i.Z,null,"There are two ways of accessing properties of an object:",a.createElement(c.GS,{unOrdered:!0,items:[{label:"Using Dot Notation"},{label:"Using Bracket Notation"}]})),a.createElement(i.Z,null,a.createElement(l.Z,{as:"h4"},"Using Dot Notation"),a.createElement(i.Z,null,"This is considered best practice to access properties by",a.createElement(c.B,null,'"dot notation"'),", because this can be optimized by the JavaScript engine as well as the minifiers for performance benefits."),a.createElement(i.Z,null,a.createElement(c.I,null,"<objectName>",a.createElement(c.B,null,"."),"<property-key>")),a.createElement(r.Z,null,'const obj = { name: "JavaScript", version: 6 };\nconst version = obj.version;    // 6')),a.createElement(i.Z,null,a.createElement(l.Z,{as:"h4"},"Using Bracket Notation"),a.createElement(i.Z,null,"The advantage of ",a.createElement(c.B,null,'"bracket notation"')," is that ",a.createElement(c.B,null,"key")," values can be calculated at run time, since ",a.createElement(c.I,null,"keys")," are provided as",a.createElement(s.Z,null)," ",a.createElement(c.I,null,"strings"),". Another advantage is that",a.createElement(c.BI,null,"reserved keywords")," can be used as property ",a.createElement(c.I,null,"keys"),"."),a.createElement(i.Z,null,"Although, this has a negative impact on performance, because this prevents optimizations that can be applied by JavaScript engine and minifiers."),a.createElement(i.Z,null,a.createElement(c.I,null,"<objectName>",a.createElement(c.B,null,"["),"<property-key>",a.createElement(c.B,null,"]"))),a.createElement(r.Z,null,'const obj = { name: "JavaScript", version: 6 };\nconst version = obj["version"]\t// 6')),a.createElement(o.Z,null,'Starting in ECMAScript 5, reserved keywords may be used as property/attribute key, without wrapping them in quotes ("").',a.createElement(c.cJ,null),a.createElement(c.cJ,null),"const obj = { for : 10 };",a.createElement(c.cJ,null),a.createElement(c.B,null,'"for"')," is a reserved keyword, but now can be used as a property key."),a.createElement(o.Z,null,"Note: Starting in ECMASCript 2015, object keys can be defined by the variable using bracket notation on being created.",a.createElement(c.cJ,null),a.createElement(c.cJ,null),'let versionKey = "version_key"',a.createElement(c.cJ,null),"const obj = { [versionKey] : 6 };"))}},74214:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(4942),r=n(94184),l=n.n(r),o=n(67294),i=n(17606),s=n(83819),c=n(28949),m=n(93379),u=n.n(m),d=n(7795),p=n.n(d),b=n(90569),h=n.n(b),g=n(3565),v=n.n(g),E=n(19216),y=n.n(E),Z=n(44589),k=n.n(Z),f=n(62428),w={};w.styleTagTransform=k(),w.setAttributes=v(),w.insert=h().bind(null,"head"),w.domAPI=p(),w.insertStyleElement=y(),u()(f.Z,w),f.Z&&f.Z.locals&&f.Z.locals;var x=function(e){var t,n=e.children,r=e.language,m=void 0===r?"typescript":r,u=e.theme,d=e.showLineNumbers,p=void 0!==d&&d,b=e.codeBlock,h=void 0!==b&&b,g=e.highlight,v=e.copyBtn,E=void 0===v||v,y=(0,o.useContext)(c.I),Z=l()((t={},(0,a.Z)(t,"".concat(s.HL,"-code"),!0),(0,a.Z)(t,"".concat(s.HL,"-code-no-copy-btn"),!E),t));return o.createElement("div",{className:Z,style:{textAlign:"left"}},o.createElement(i.Z1,{text:n,language:m,showLineNumbers:p,theme:function(){switch(u){case"dracula":return i.cL;case"anOldHope":return i.dw;case"github":return i.bW;default:return y.theme===s.bF.DARK_THEME?i.g9:i.dw}}(),wrapLines:!0,codeBlock:h,highlight:g}))};const N=(0,o.memo)(x)},26006:(e,t,n)=>{n.d(t,{Z:()=>O});var a=n(4942),r=n(94184),l=n.n(r),o=n(67294),i=n(14289),s=n(78146),c=n(67115),m=n(76792),u=n(32209),d=n(41485),p=n(39602),b=n(44680),h=n(85893);const g=(0,p.Z)("h4");g.displayName="DivStyledAsH4";const v=(0,b.Z)("alert-heading",{Component:g}),E=(0,b.Z)("alert-link",{Component:c.Z}),y={variant:"primary",show:!0,transition:u.Z,closeLabel:"Close alert"},Z=o.forwardRef(((e,t)=>{const{bsPrefix:n,show:a,closeLabel:r,closeVariant:o,className:c,children:p,variant:b,onClose:g,dismissible:v,transition:E,...y}=(0,i.Ch)(e,{show:"onClose"}),Z=(0,m.vE)(n,"alert"),k=(0,s.Z)((e=>{g&&g(!1,e)})),f=!0===E?u.Z:E,w=(0,h.jsxs)("div",{role:"alert",...f?void 0:y,ref:t,className:l()(c,Z,b&&`${Z}-${b}`,v&&`${Z}-dismissible`),children:[v&&(0,h.jsx)(d.Z,{onClick:k,"aria-label":r,variant:o}),p]});return f?(0,h.jsx)(f,{unmountOnExit:!0,...y,ref:void 0,in:a,children:w}):a?w:null}));Z.displayName="Alert",Z.defaultProps=y;const k=Object.assign(Z,{Link:E,Heading:v});var f=n(83819),w=n(93379),x=n.n(w),N=n(7795),j=n.n(N),A=n(90569),B=n.n(A),C=n(3565),S=n.n(C),J=n(19216),L=n.n(J),I=n(44589),T=n.n(I),H=n(11137),_={};_.styleTagTransform=T(),_.setAttributes=S(),_.insert=B().bind(null,"head"),_.domAPI=j(),_.insertStyleElement=L(),x()(H.Z,_),H.Z&&H.Z.locals&&H.Z.locals;var D=function(e){var t=e.children,n=e.noteText,r=void 0===n?"Note":n,i=e.variant,s=void 0===i?"primary":i,c=l()((0,a.Z)({},"".concat(f.HL,"-note"),!0));return o.createElement("div",{className:c},o.createElement("div",{className:"note-text"},r),o.createElement(k,{key:s,variant:s},t))};const O=(0,o.memo)(D)},62428:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(8081),r=n.n(a),l=n(23645),o=n.n(l)()(r());o.push([e.id,".ui-geeks-code{margin-top:1.5rem;margin-bottom:1.5rem}.ui-geeks-code-no-copy-btn button{display:none}\n",""]);const i=o},11137:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(8081),r=n.n(a),l=n(23645),o=n.n(l)()(r());o.push([e.id,".ui-geeks-note{margin-top:1.2rem;margin-bottom:3rem;font-style:italic}.ui-geeks-note .note-text{font-style:italic;position:relative;font-weight:bold;top:13px;z-index:9;margin-left:15px;background-color:#aba8f1;width:fit-content;padding:2px 10px 2px 10px;border-radius:4px}.theme-dark .ui-geeks-note .note-text{background-color:#464646}.theme-dark .ui-geeks-note .alert-primary{color:#000000;background-color:#d6d6d6;border-color:#393939}\n",""]);const i=o}}]);