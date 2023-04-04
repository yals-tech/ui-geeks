"use strict";(self.webpackChunkui_geeks_in=self.webpackChunkui_geeks_in||[]).push([[19,9127],{92509:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=n(67294),l=n(74214),a=n(91573),o=n(87398),i=n(26006),s=n(68947),c=n(12050),d=n(9167);const u=function(){return r.createElement(r.Fragment,null,r.createElement(o.Z,{as:"h4"},"shouldComponentUpdate()"),r.createElement(s.Z,null,"This method is used to ",r.createElement(d.B,null,"skip the re-rendering")," of the component. This method should ",r.createElement(d.BI,null,"return a boolean value"),". If it returns",r.createElement(c.Z,null)," ",r.createElement(d.BI,null,"false"),", then ",r.createElement(d.B,null,"UNSAFE_componentWillUpdate()"),",",r.createElement(c.Z,null)," ",r.createElement(d.B,null,"render()")," and ",r.createElement(d.B,null,"componentDidUpdate()")," methods are not invoked."),r.createElement(l.Z,{language:a.r.JSX},"shouldComponentUpdate(nextProps, nextState)"),r.createElement(s.Z,null,"The default behavior is to re-render on every change in ",r.createElement(d.I,null,"state")," or",r.createElement(c.Z,null)," ",r.createElement(d.I,null,"props"),". We can use this method to let React know if the output is not affected by the current change in state or props. React prefers to rely on default behavior in the majority of the cases."),r.createElement(s.Z,null,"It is invoked ",r.createElement(d.B,null,"before rendering")," when ",r.createElement(d.B,null,"new")," ",r.createElement(d.I,null,"props")," or",r.createElement(c.Z,null)," ",r.createElement(d.I,null,"state")," are being received. Defaults to true. This method is not called for the ",r.createElement(d.I,null,"initial render")," or when ",r.createElement(d.I,null,"forceUpdate()"),r.createElement(c.Z,null)," is used."),r.createElement(i.Z,null,"Returning ",r.createElement(d.B,null,"false")," does not prevent child components from re-rendering when ",r.createElement(d.B,null,"their")," state changes."))}},74214:(e,t,n)=>{n.d(t,{Z:()=>B});var r=n(4942),l=n(94184),a=n.n(l),o=n(67294),i=n(17606),s=n(83819),c=n(28949),d=n(93379),u=n.n(d),m=n(7795),h=n.n(m),p=n(90569),g=n.n(p),v=n(3565),E=n.n(v),f=n(19216),b=n.n(f),Z=n(44589),k=n.n(Z),y=n(62428),x={};x.styleTagTransform=k(),x.setAttributes=E(),x.insert=g().bind(null,"head"),x.domAPI=h(),x.insertStyleElement=b(),u()(y.Z,x),y.Z&&y.Z.locals&&y.Z.locals;var w=function(e){var t,n=e.children,l=e.language,d=void 0===l?"typescript":l,u=e.theme,m=e.showLineNumbers,h=void 0!==m&&m,p=e.codeBlock,g=void 0!==p&&p,v=e.highlight,E=e.copyBtn,f=void 0===E||E,b=(0,o.useContext)(c.I),Z=a()((t={},(0,r.Z)(t,"".concat(s.HL,"-code"),!0),(0,r.Z)(t,"".concat(s.HL,"-code-no-copy-btn"),!f),t));return o.createElement("div",{className:Z,style:{textAlign:"left"}},o.createElement(i.Z1,{text:n,language:d,showLineNumbers:h,theme:function(){switch(u){case"dracula":return i.cL;case"anOldHope":return i.dw;case"github":return i.bW;default:return b.theme===s.bF.DARK_THEME?i.g9:i.dw}}(),wrapLines:!0,codeBlock:g,highlight:v}))};const B=(0,o.memo)(w)},91573:(e,t,n)=>{n.d(t,{r:()=>r});var r={JavaScript:"javascript",TypeScript:"typescript",HTML:"html",CSS:"css",JSX:"jsx"}},26006:(e,t,n)=>{n.d(t,{Z:()=>R});var r=n(4942),l=n(94184),a=n.n(l),o=n(67294),i=n(14289),s=n(78146),c=n(67115),d=n(76792),u=n(32209),m=n(41485),h=n(39602),p=n(44680),g=n(85893);const v=(0,h.Z)("h4");v.displayName="DivStyledAsH4";const E=(0,p.Z)("alert-heading",{Component:v}),f=(0,p.Z)("alert-link",{Component:c.Z}),b={variant:"primary",show:!0,transition:u.Z,closeLabel:"Close alert"},Z=o.forwardRef(((e,t)=>{const{bsPrefix:n,show:r,closeLabel:l,closeVariant:o,className:c,children:h,variant:p,onClose:v,dismissible:E,transition:f,...b}=(0,i.Ch)(e,{show:"onClose"}),Z=(0,d.vE)(n,"alert"),k=(0,s.Z)((e=>{v&&v(!1,e)})),y=!0===f?u.Z:f,x=(0,g.jsxs)("div",{role:"alert",...y?void 0:b,ref:t,className:a()(c,Z,p&&`${Z}-${p}`,E&&`${Z}-dismissible`),children:[E&&(0,g.jsx)(m.Z,{onClick:k,"aria-label":l,variant:o}),h]});return y?(0,g.jsx)(y,{unmountOnExit:!0,...b,ref:void 0,in:r,children:x}):r?x:null}));Z.displayName="Alert",Z.defaultProps=b;const k=Object.assign(Z,{Link:f,Heading:E});var y=n(83819),x=n(93379),w=n.n(x),B=n(7795),C=n.n(B),I=n(90569),T=n.n(I),L=n(3565),N=n.n(L),S=n(19216),A=n.n(S),H=n(44589),j=n.n(H),U=n(11137),_={};_.styleTagTransform=j(),_.setAttributes=N(),_.insert=T().bind(null,"head"),_.domAPI=C(),_.insertStyleElement=A(),w()(U.Z,_),U.Z&&U.Z.locals&&U.Z.locals;var P=function(e){var t=e.children,n=e.noteText,l=void 0===n?"Note":n,i=e.variant,s=void 0===i?"primary":i,c=a()((0,r.Z)({},"".concat(y.HL,"-note"),!0));return o.createElement("div",{className:c},o.createElement("div",{className:"note-text"},l),o.createElement(k,{key:s,variant:s},t))};const R=(0,o.memo)(P)},62428:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(8081),l=n.n(r),a=n(23645),o=n.n(a)()(l());o.push([e.id,".ui-geeks-code{margin-top:1.5rem;margin-bottom:1.5rem}.ui-geeks-code-no-copy-btn button{display:none}\n",""]);const i=o},11137:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(8081),l=n.n(r),a=n(23645),o=n.n(a)()(l());o.push([e.id,".ui-geeks-note{margin-top:1.2rem;margin-bottom:3rem;font-style:italic}.ui-geeks-note .note-text{font-style:italic;position:relative;font-weight:bold;top:13px;z-index:9;margin-left:15px;background-color:#aba8f1;width:fit-content;padding:2px 10px 2px 10px;border-radius:4px}.theme-dark .ui-geeks-note .note-text{background-color:#464646}.theme-dark .ui-geeks-note .alert-primary{color:#000000;background-color:#d6d6d6;border-color:#393939}\n",""]);const i=o}}]);