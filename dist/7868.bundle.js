"use strict";(self.webpackChunkui_geeks_in=self.webpackChunkui_geeks_in||[]).push([[7868,9127],{7868:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var o=n(67294),a=n(74214),l=n(87398),r=n(26006),i=n(68947),s=n(33470);const c=function(){return o.createElement(o.Fragment,null,o.createElement(l.Z,{as:"h2"},"Symbol"),o.createElement(i.Z,null,"A symbol is a unique and immutable primitive value and may be used as the key of an object property. Symbol value is always unique."),o.createElement(a.Z,null,'const obj = { [Symbol("abc")]: "hello" };\n\nSymbol("abc") === Symbol("abc")   // false \n// Because Symbol() will always populate a unique key'),o.createElement(i.Z,null,o.createElement(s.Z,{bold:!0},"Symbol.for():")," In contrast to Symbol(), which always creates a unique key every time, Symbol.for() will create a new unique, if it is not yet created, otherwise, it will read and return an existing symbol with the given key from the",o.createElement(s.Z,{bold:!0},'"global Symbol registry"'),"."),o.createElement(a.Z,null,'Symbol.for("abc")   // Created a unique key\nSymbol.for("abc")   // Returned from global symbol registry'),o.createElement(i.Z,null,o.createElement(s.Z,{bold:!0},"Symbol.keyFor():")," This function returns a key for the given Symbol.",o.createElement(a.Z,null,'const sym = Symbol.for("abc")\nSymbol.keyFor(sym)    // "abc"')),o.createElement(r.Z,null,"Symbol.keyFor() do not work with Symbol()"))}},74214:(e,t,n)=>{n.d(t,{Z:()=>S});var o=n(4942),a=n(94184),l=n.n(a),r=n(67294),i=n(17606),s=n(83819),c=n(28949),m=n(93379),d=n.n(m),u=n(7795),b=n.n(u),y=n(90569),h=n.n(y),g=n(3565),p=n.n(g),v=n(19216),f=n.n(v),Z=n(44589),k=n.n(Z),w=n(62428),E={};E.styleTagTransform=k(),E.setAttributes=p(),E.insert=h().bind(null,"head"),E.domAPI=b(),E.insertStyleElement=f(),d()(w.Z,E),w.Z&&w.Z.locals&&w.Z.locals;var x=function(e){var t,n=e.children,a=e.language,m=void 0===a?"typescript":a,d=e.theme,u=e.showLineNumbers,b=void 0!==u&&u,y=e.codeBlock,h=void 0!==y&&y,g=e.highlight,p=e.copyBtn,v=void 0===p||p,f=(0,r.useContext)(c.I),Z=l()((t={},(0,o.Z)(t,"".concat(s.HL,"-code"),!0),(0,o.Z)(t,"".concat(s.HL,"-code-no-copy-btn"),!v),t));return r.createElement("div",{className:Z,style:{textAlign:"left"}},r.createElement(i.Z1,{text:n,language:m,showLineNumbers:b,theme:function(){switch(d){case"dracula":return i.cL;case"anOldHope":return i.dw;case"github":return i.bW;default:return f.theme===s.bF.DARK_THEME?i.g9:i.dw}}(),wrapLines:!0,codeBlock:h,highlight:g}))};const S=(0,r.memo)(x)},26006:(e,t,n)=>{n.d(t,{Z:()=>P});var o=n(4942),a=n(94184),l=n.n(a),r=n(67294),i=n(14289),s=n(78146),c=n(67115),m=n(76792),d=n(32209),u=n(41485),b=n(39602),y=n(44680),h=n(85893);const g=(0,b.Z)("h4");g.displayName="DivStyledAsH4";const p=(0,y.Z)("alert-heading",{Component:g}),v=(0,y.Z)("alert-link",{Component:c.Z}),f={variant:"primary",show:!0,transition:d.Z,closeLabel:"Close alert"},Z=r.forwardRef(((e,t)=>{const{bsPrefix:n,show:o,closeLabel:a,closeVariant:r,className:c,children:b,variant:y,onClose:g,dismissible:p,transition:v,...f}=(0,i.Ch)(e,{show:"onClose"}),Z=(0,m.vE)(n,"alert"),k=(0,s.Z)((e=>{g&&g(!1,e)})),w=!0===v?d.Z:v,E=(0,h.jsxs)("div",{role:"alert",...w?void 0:f,ref:t,className:l()(c,Z,y&&`${Z}-${y}`,p&&`${Z}-dismissible`),children:[p&&(0,h.jsx)(u.Z,{onClick:k,"aria-label":a,variant:r}),b]});return w?(0,h.jsx)(w,{unmountOnExit:!0,...f,ref:void 0,in:o,children:E}):o?E:null}));Z.displayName="Alert",Z.defaultProps=f;const k=Object.assign(Z,{Link:v,Heading:p});var w=n(83819),E=n(93379),x=n.n(E),S=n(7795),C=n.n(S),L=n(90569),N=n.n(L),A=n(3565),H=n.n(A),T=n(19216),j=n.n(T),q=n(44589),F=n.n(q),_=n(11137),B={};B.styleTagTransform=F(),B.setAttributes=H(),B.insert=N().bind(null,"head"),B.domAPI=C(),B.insertStyleElement=j(),x()(_.Z,B),_.Z&&_.Z.locals&&_.Z.locals;var I=function(e){var t=e.children,n=e.noteText,a=void 0===n?"Note":n,i=e.variant,s=void 0===i?"primary":i,c=l()((0,o.Z)({},"".concat(w.HL,"-note"),!0));return r.createElement("div",{className:c},r.createElement("div",{className:"note-text"},a),r.createElement(k,{key:s,variant:s},t))};const P=(0,r.memo)(I)},62428:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(8081),a=n.n(o),l=n(23645),r=n.n(l)()(a());r.push([e.id,".ui-geeks-code{margin-top:1.5rem;margin-bottom:1.5rem}.ui-geeks-code-no-copy-btn button{display:none}\n",""]);const i=r},11137:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(8081),a=n.n(o),l=n(23645),r=n.n(l)()(a());r.push([e.id,".ui-geeks-note{margin-top:1.2rem;margin-bottom:3rem;font-style:italic}.ui-geeks-note .note-text{font-style:italic;position:relative;font-weight:bold;top:13px;z-index:9;margin-left:15px;background-color:#aba8f1;width:fit-content;padding:2px 10px 2px 10px;border-radius:4px}.theme-dark .ui-geeks-note .note-text{background-color:#464646}.theme-dark .ui-geeks-note .alert-primary{color:#000000;background-color:#d6d6d6;border-color:#393939}\n",""]);const i=r}}]);