"use strict";(self.webpackChunkui_geeks_in_web=self.webpackChunkui_geeks_in_web||[]).push([[1059,9127,5201,1975],{41059:(e,n,t)=>{t.r(n),t.d(n,{default:()=>i});var r=t(67294),l=t(87398),a=t(68947),o=t(45201),c=t(11975);const i=function(){return r.createElement(r.Fragment,null,r.createElement(l.Z,{as:"h3"},"Error Handling Methods"),r.createElement(a.Z,null,"These methods are called when there is an error during rendering, in a lifecycle method, or in the constructor of any child component."),r.createElement(a.Z,null,r.createElement(c.default,null),r.createElement(o.default,null)))}},45201:(e,n,t)=>{t.r(n),t.d(n,{default:()=>d});var r=t(67294),l=t(74214),a=t(91573),o=t(87398),c=t(68947),i=t(12050),s=t(9167);const d=function(){return r.createElement(r.Fragment,null,r.createElement(o.Z,{as:"h4"},"componentDidCatch()"),r.createElement(c.Z,null,"It is invoked after an error has been thrown by a descendant component."),r.createElement(l.Z,null,"componentDidCatch(error, info)"),r.createElement(c.Z,null,r.createElement(s.B,null,"error"),": Error thrown from the component."),r.createElement(c.Z,null,r.createElement(s.B,null,"info"),": An object with a ",r.createElement(s.BI,null,"componentStack")," key containing information about which component threw the error."),r.createElement(c.Z,null,"It is called during the ",r.createElement(s.B,null,'"commit"')," phase, so ",r.createElement(s.I,null,"side-effects"),r.createElement(i.Z,null)," are permitted. It should be used for things like logging the errors."),r.createElement(c.Z,null,r.createElement(s.IU,null,"Example:"),r.createElement(l.Z,{language:a.r.JSX},'class ErrorBoundary extends React.Component {\n  constructor(props) { \n    super(props);\n    this.state = { hasError : false };\n  }\n\n  static getDerivedStateFromError(error) {\n    // Update state so the next render will show the fallback UI\n    return { hasError : true };\n  }\n\n  componentDidCatch(error, info) {\n    // Example "componentStack"\n    // in ComponentThatThrows (created by App)\n    // in ErrorBoundary (created by App)\n    // in div (created by App)\n    // in App\n    logError(info.componentStack);\n  }\n\n  render() {\n    if(this.state.hasError) {\n      // Render any fallback UI for error handling\n      return <h1>Something went wrong.</h1>\n    }\n\n    return this.props.children;\n  }\n}')),r.createElement(c.Z,null,r.createElement(s.B,null,"Production")," and ",r.createElement(s.B,null,"development")," builds of React slightly differ in the way ",r.createElement(s.I,null,"componentDidCatch()")," handles errors."),r.createElement(c.Z,null,"On ",r.createElement(s.B,null,"development"),", the errors will ",r.createElement(s.BI,null,"bubble up")," to the",r.createElement(i.Z,null)," ",r.createElement(s.BI,null,"window"),", this means that any ",r.createElement(s.BI,null,"window.onerror"),r.createElement(i.Z,null)," or ",r.createElement(s.BI,null,'window.addEventListener("error", callback)')," will intercept the errors that have been caught by ",r.createElement(s.I,null,"componentDidCatch()"),"."),r.createElement(c.Z,null,"On ",r.createElement(s.B,null,"production"),", the errors will ",r.createElement(s.BI,null,"not bubble up"),", which means any ancestor error handler will only receive errors ",r.createElement(i.Z,null),r.createElement(s.BI,null,"not explicitly caught")," by componentDidCatch()."))}},11975:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});var r=t(67294),l=t(74214),a=t(91573),o=t(87398),c=t(26006),i=t(68947),s=t(12050),d=t(9167);const m=function(){return r.createElement(r.Fragment,null,r.createElement(o.Z,{as:"h4"},"static getDerivedStateFromError()"),r.createElement(i.Z,null,"It is invoked after an error has been thrown by a ",r.createElement(s.Z,null),r.createElement(d.B,null,"descendant component"),". It received the error that was thrown as a parameter and should return a value to update state."),r.createElement(l.Z,null,"static getDerivedStateFromError(error)"),r.createElement(i.Z,null,r.createElement(d.IU,null,"Example:"),r.createElement(l.Z,{language:a.r.JSX},"class ErrorBoundary extends React.Component {\n  constructor(props) { \n    super(props);\n    this.state = { hasError : false };\n  }\n\n  static getDerivedStateFromError(error) {\n    // Update state so the next render will show the fallback UI\n    return { hasError : true };\n  }\n\n  render() {\n    if(this.state.hasError) {\n      // Render any fallback UI for error handling\n      return <h1>Something went wrong.</h1>\n    }\n\n    return this.props.children;\n  }\n}")),r.createElement(c.Z,null,"getDerivedStateFromError() is called during the ",r.createElement(d.B,null,'"render"')," phase, so side-effects are not permitted. For those use cases, use",r.createElement(d.B,null,"componentDidCatch()")," instead."))}},74214:(e,n,t)=>{t.d(n,{Z:()=>I});var r=t(4942),l=t(94184),a=t.n(l),o=t(67294),c=t(17606),i=t(83819),s=t(28949),d=t(93379),m=t.n(d),u=t(7795),h=t.n(u),p=t(90569),E=t.n(p),g=t(3565),b=t.n(g),f=t(19216),v=t.n(f),Z=t(44589),w=t.n(Z),y=t(62428),k={};k.styleTagTransform=w(),k.setAttributes=b(),k.insert=E().bind(null,"head"),k.domAPI=h(),k.insertStyleElement=v(),m()(y.Z,k),y.Z&&y.Z.locals&&y.Z.locals;var x=function(e){var n,t=e.children,l=e.language,d=void 0===l?"typescript":l,m=e.theme,u=e.showLineNumbers,h=void 0!==u&&u,p=e.codeBlock,E=void 0!==p&&p,g=e.highlight,b=e.copyBtn,f=void 0===b||b,v=(0,o.useContext)(s.I),Z=a()((n={},(0,r.Z)(n,"".concat(i.HL,"-code"),!0),(0,r.Z)(n,"".concat(i.HL,"-code-no-copy-btn"),!f),n));return o.createElement("div",{className:Z,style:{textAlign:"left"}},o.createElement(c.Z1,{text:t,language:d,showLineNumbers:h,theme:function(){switch(m){case"dracula":return c.cL;case"anOldHope":return c.dw;case"github":return c.bW;default:return v.theme===i.bF.DARK_THEME?c.g9:c.dw}}(),wrapLines:!0,codeBlock:E,highlight:g}))};const I=(0,o.memo)(x)},91573:(e,n,t)=>{t.d(n,{r:()=>r});var r={JavaScript:"javascript",TypeScript:"typescript",HTML:"html",CSS:"css",JSX:"jsx"}},26006:(e,n,t)=>{t.d(n,{Z:()=>R});var r=t(4942),l=t(94184),a=t.n(l),o=t(67294),c=t(14289),i=t(78146),s=t(67115),d=t(76792),m=t(32209),u=t(41485),h=t(39602),p=t(44680),E=t(85893);const g=(0,h.Z)("h4");g.displayName="DivStyledAsH4";const b=(0,p.Z)("alert-heading",{Component:g}),f=(0,p.Z)("alert-link",{Component:s.Z}),v={variant:"primary",show:!0,transition:m.Z,closeLabel:"Close alert"},Z=o.forwardRef(((e,n)=>{const{bsPrefix:t,show:r,closeLabel:l,closeVariant:o,className:s,children:h,variant:p,onClose:g,dismissible:b,transition:f,...v}=(0,c.Ch)(e,{show:"onClose"}),Z=(0,d.vE)(t,"alert"),w=(0,i.Z)((e=>{g&&g(!1,e)})),y=!0===f?m.Z:f,k=(0,E.jsxs)("div",{role:"alert",...y?void 0:v,ref:n,className:a()(s,Z,p&&`${Z}-${p}`,b&&`${Z}-dismissible`),children:[b&&(0,E.jsx)(u.Z,{onClick:w,"aria-label":l,variant:o}),h]});return y?(0,E.jsx)(y,{unmountOnExit:!0,...v,ref:void 0,in:r,children:k}):r?k:null}));Z.displayName="Alert",Z.defaultProps=v;const w=Object.assign(Z,{Link:f,Heading:b});var y=t(83819),k=t(93379),x=t.n(k),I=t(7795),B=t.n(I),C=t(90569),S=t.n(C),D=t(3565),A=t.n(D),L=t(19216),T=t.n(L),F=t(44589),N=t.n(F),H=t(11137),U={};U.styleTagTransform=N(),U.setAttributes=A(),U.insert=S().bind(null,"head"),U.domAPI=B(),U.insertStyleElement=T(),x()(H.Z,U),H.Z&&H.Z.locals&&H.Z.locals;var j=function(e){var n=e.children,t=e.noteText,l=void 0===t?"Note":t,c=e.variant,i=void 0===c?"primary":c,s=a()((0,r.Z)({},"".concat(y.HL,"-note"),!0));return o.createElement("div",{className:s},o.createElement("div",{className:"note-text"},l),o.createElement(w,{key:i,variant:i},n))};const R=(0,o.memo)(j)},62428:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(8081),l=t.n(r),a=t(23645),o=t.n(a)()(l());o.push([e.id,".ui-geeks-code{margin-top:1.5rem;margin-bottom:1.5rem}.ui-geeks-code-no-copy-btn button{display:none}\n",""]);const c=o},11137:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(8081),l=t.n(r),a=t(23645),o=t.n(a)()(l());o.push([e.id,".ui-geeks-note{margin-top:1.2rem;margin-bottom:3rem;font-style:italic}.ui-geeks-note .note-text{font-style:italic;position:relative;font-weight:bold;top:13px;z-index:9;margin-left:15px;background-color:#aba8f1;width:fit-content;padding:2px 10px 2px 10px;border-radius:4px}.theme-dark .ui-geeks-note .note-text{background-color:#464646}.theme-dark .ui-geeks-note .alert-primary{color:#000000;background-color:#d6d6d6;border-color:#393939}\n",""]);const c=o}}]);