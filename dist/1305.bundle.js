"use strict";(self.webpackChunkui_geeks_in=self.webpackChunkui_geeks_in||[]).push([[1305,9127],{21305:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var l=n(67294),a=n(74214),o=n(87398),r=n(26006),i=n(68947),s=n(12050),c=n(9167);const d=function(){return l.createElement(l.Fragment,null,l.createElement(o.Z,{as:"h4"},"componentDidUpdate()"),l.createElement(i.Z,null,"It is invoked immediately after updating occurs. This method is not called for the initial render."),l.createElement(a.Z,null,"componentDidUpdate(prevProps, prevState, snapshot)"),l.createElement(i.Z,null,l.createElement(c.B,null,"snapshot"),": If the component implements the",l.createElement(c.BI,null,"getSnapshotBeforeUpdate()")," lifecycle, the value it returns will be the value of the third parameter ",l.createElement(c.B,null,'"snapshot"'),", otherwise this parameter will be ",l.createElement(c.BI,null,"undefined"),"."),l.createElement(i.Z,null,"This method can be used to operate on the DOM when the component has been updated or calling API on change of props."),l.createElement(r.Z,null,"We may call setState() immediately in componentDidUpdate() but ",l.createElement(s.Z,null),l.createElement(c.B,null,"it must be wrapped in a condition")," or it will cause an ",l.createElement(s.Z,null),l.createElement(c.B,null,"infinite loop"),"."),l.createElement(r.Z,null,"componentDidUpdate() will not be invoked if ",l.createElement(s.Z,null),l.createElement(c.B,null,"shouldComponentUpdate()")," returns ",l.createElement(c.B,null,"false"),"."))}},74214:(e,t,n)=>{n.d(t,{Z:()=>B});var l=n(4942),a=n(94184),o=n.n(a),r=n(67294),i=n(17606),s=n(83819),c=n(28949),d=n(93379),m=n.n(d),u=n(7795),p=n.n(u),h=n(90569),g=n.n(h),b=n(3565),v=n.n(b),f=n(19216),Z=n.n(f),E=n(44589),k=n.n(E),y=n(62428),w={};w.styleTagTransform=k(),w.setAttributes=v(),w.insert=g().bind(null,"head"),w.domAPI=p(),w.insertStyleElement=Z(),m()(y.Z,w),y.Z&&y.Z.locals&&y.Z.locals;var x=function(e){var t,n=e.children,a=e.language,d=void 0===a?"typescript":a,m=e.theme,u=e.showLineNumbers,p=void 0!==u&&u,h=e.codeBlock,g=void 0!==h&&h,b=e.highlight,v=e.copyBtn,f=void 0===v||v,Z=(0,r.useContext)(c.I),E=o()((t={},(0,l.Z)(t,"".concat(s.HL,"-code"),!0),(0,l.Z)(t,"".concat(s.HL,"-code-no-copy-btn"),!f),t));return r.createElement("div",{className:E,style:{textAlign:"left"}},r.createElement(i.Z1,{text:n,language:d,showLineNumbers:p,theme:function(){switch(m){case"dracula":return i.cL;case"anOldHope":return i.dw;case"github":return i.bW;default:return Z.theme===s.bF.DARK_THEME?i.g9:i.dw}}(),wrapLines:!0,codeBlock:g,highlight:b}))};const B=(0,r.memo)(x)},26006:(e,t,n)=>{n.d(t,{Z:()=>j});var l=n(4942),a=n(94184),o=n.n(a),r=n(67294),i=n(14289),s=n(78146),c=n(67115),d=n(76792),m=n(32209),u=n(41485),p=n(39602),h=n(44680),g=n(85893);const b=(0,p.Z)("h4");b.displayName="DivStyledAsH4";const v=(0,h.Z)("alert-heading",{Component:b}),f=(0,h.Z)("alert-link",{Component:c.Z}),Z={variant:"primary",show:!0,transition:m.Z,closeLabel:"Close alert"},E=r.forwardRef(((e,t)=>{const{bsPrefix:n,show:l,closeLabel:a,closeVariant:r,className:c,children:p,variant:h,onClose:b,dismissible:v,transition:f,...Z}=(0,i.Ch)(e,{show:"onClose"}),E=(0,d.vE)(n,"alert"),k=(0,s.Z)((e=>{b&&b(!1,e)})),y=!0===f?m.Z:f,w=(0,g.jsxs)("div",{role:"alert",...y?void 0:Z,ref:t,className:o()(c,E,h&&`${E}-${h}`,v&&`${E}-dismissible`),children:[v&&(0,g.jsx)(u.Z,{onClick:k,"aria-label":a,variant:r}),p]});return y?(0,g.jsx)(y,{unmountOnExit:!0,...Z,ref:void 0,in:l,children:w}):l?w:null}));E.displayName="Alert",E.defaultProps=Z;const k=Object.assign(E,{Link:f,Heading:v});var y=n(83819),w=n(93379),x=n.n(w),B=n(7795),C=n.n(B),L=n(90569),N=n.n(L),A=n(3565),I=n.n(A),T=n(19216),D=n.n(T),H=n(44589),P=n.n(H),S=n(11137),U={};U.styleTagTransform=P(),U.setAttributes=I(),U.insert=N().bind(null,"head"),U.domAPI=C(),U.insertStyleElement=D(),x()(S.Z,U),S.Z&&S.Z.locals&&S.Z.locals;var _=function(e){var t=e.children,n=e.noteText,a=void 0===n?"Note":n,i=e.variant,s=void 0===i?"primary":i,c=o()((0,l.Z)({},"".concat(y.HL,"-note"),!0));return r.createElement("div",{className:c},r.createElement("div",{className:"note-text"},a),r.createElement(k,{key:s,variant:s},t))};const j=(0,r.memo)(_)},62428:(e,t,n)=>{n.d(t,{Z:()=>i});var l=n(8081),a=n.n(l),o=n(23645),r=n.n(o)()(a());r.push([e.id,".ui-geeks-code{margin-top:1.5rem;margin-bottom:1.5rem}.ui-geeks-code-no-copy-btn button{display:none}\n",""]);const i=r},11137:(e,t,n)=>{n.d(t,{Z:()=>i});var l=n(8081),a=n.n(l),o=n(23645),r=n.n(o)()(a());r.push([e.id,".ui-geeks-note{margin-top:1.2rem;margin-bottom:3rem;font-style:italic}.ui-geeks-note .note-text{font-style:italic;position:relative;font-weight:bold;top:13px;z-index:9;margin-left:15px;background-color:#aba8f1;width:fit-content;padding:2px 10px 2px 10px;border-radius:4px}.theme-dark .ui-geeks-note .note-text{background-color:#464646}.theme-dark .ui-geeks-note .alert-primary{color:#000000;background-color:#d6d6d6;border-color:#393939}\n",""]);const i=r}}]);