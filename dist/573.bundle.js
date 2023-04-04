"use strict";(self.webpackChunkui_geeks_in=self.webpackChunkui_geeks_in||[]).push([[573,9127,5815,8157,7672,8566],{10573:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var l=n(67294),r=n(87398),a=n(68947),o=n(15815),c=n(68157),s=n(77672),i=n(18566);const u=function(){return l.createElement(l.Fragment,null,l.createElement(r.Z,{as:"h3"},"Mounting LifeCycle Methods"),l.createElement(a.Z,null,"Below are the lifecycle methods which are called in the mounting phase of the component."),l.createElement(a.Z,null,l.createElement(c.default,null),l.createElement(s.default,null),l.createElement(i.default,null),l.createElement(o.default,null)))}},15815:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var l=n(67294),r=n(87398),a=n(26006),o=n(68947),c=n(12050),s=n(9167);const i=function(){return l.createElement(l.Fragment,null,l.createElement(r.Z,{as:"h4"},"componentDidMount()"),l.createElement(o.Z,null,"It is invoked immediately after a component is mounted.",l.createElement(c.Z,null)," ",l.createElement(s.B,null,"Initialization")," that ",l.createElement(s.B,null,"requires DOM nodes")," should be written here, for example, setting tooltips where we need DOM nodes before rendering to get its placement . It is also a good place to",l.createElement(c.Z,null)," ",l.createElement(s.B,null,"make API calls")," or ",l.createElement(s.B,null,"set up any subscriptions"),"."),l.createElement(a.Z,null,"We may call ",l.createElement(s.B,null,"setState()")," immediately in ",l.createElement(s.B,null,"componentDidMount()"),". It will trigger an extra rendering, but it will happen before the browser updates the screen. This guarantees that even though the render() will be called twice, the user won't see the intermediate state. Use this pattern with caution because it often causes performance issues."))}},68157:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var l=n(67294),r=n(87398),a=n(26006),o=n(68947),c=n(12050),s=n(9167),i=[{label:l.createElement(l.Fragment,null,"Initializing ",l.createElement(s.B,null,"local state")," by assigning an object to this.state.")},{label:l.createElement(l.Fragment,null,"Binding ",l.createElement(s.B,null,"event handler")," methods to an instance.")}];const u=function(){return l.createElement(l.Fragment,null,l.createElement(r.Z,{as:"h4"},"constructor()"),l.createElement(o.Z,null,"The constructor for a React component is called before it is mounted. When implementing the constructor, we should call ",l.createElement(s.BI,null,"super(props)"),l.createElement(c.Z,null)," before any other statement. Otherwise, ",l.createElement(s.BI,null,'"this.props"'),l.createElement(c.Z,null)," will be ",l.createElement(s.BI,null,"undefined")," in the ",l.createElement(s.I,null,"constructor"),". Avoid introducing any ",l.createElement(s.I,null,"side-effects")," or ",l.createElement(s.I,null,"subscriptions")," in the constructor."),l.createElement(o.Z,null,"In React, ",l.createElement(s.I,null,"constructors")," are only used for two purposes:",l.createElement(s.GS,{unOrdered:!0,items:i})),l.createElement(o.Z,null,"The ",l.createElement(s.I,null,"constructor")," is the only place where we should assign",l.createElement(s.BI,null,"this.state")," directly. In all other places, we should use",l.createElement(c.Z,null)," ",l.createElement(s.I,null,"this.setState()"),"."),l.createElement(a.Z,null,"constructor is ",l.createElement(s.B,null,"optional"),". If we neither initialize state nor bind methods, then we don't need to implement a constructor."))}},77672:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var l=n(67294),r=n(74214),a=n(87398),o=n(68947),c=n(12050),s=n(9167);const i=function(){return l.createElement(l.Fragment,null,l.createElement(a.Z,{as:"h4"},"static getDerivedStateFromProps()"),l.createElement(o.Z,null,"It is invoked right before calling the ",l.createElement(s.I,null,"render()")," method, both on the ",l.createElement(s.B,null,"initial mount")," and on ",l.createElement(s.B,null,"subsequent updates"),". It should",l.createElement(s.BI,null,"return an object")," to update the ",l.createElement(s.I,null,"state"),", or ",l.createElement(s.BI,null,"null"),l.createElement(c.Z,null)," to update nothing."),l.createElement(r.Z,null,"static getDerivedStateFromProps(props, state)"),l.createElement(o.Z,null,"This method exists for ",l.createElement(s.I,null,"rare use cases"),", where the ",l.createElement(s.BI,null,"state"),l.createElement(c.Z,null)," depends on changes in ",l.createElement(s.BI,null,"props"),". This method doesn't have access to the component instance. It is fired on every render, regardless of the cause."))}},18566:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var l=n(67294),r=n(87398),a=n(26006),o=n(68947),c=n(12050),s=n(9167),i=[{label:l.createElement(l.Fragment,null,l.createElement(s.B,null,"React elements"),l.createElement(s.cJ,null),"Any valid JSX element.")},{label:l.createElement(l.Fragment,null,l.createElement(s.B,null,"Array and fragments"),l.createElement(s.cJ,null),"Let us ",l.createElement(s.B,null,"return multiple elements")," from the render. By default",l.createElement(c.Z,null)," ",l.createElement(s.I,null,"render()")," method should return only ",l.createElement(s.B,null,"one element"),", but ",l.createElement(c.Z,null)," ",l.createElement(s.BI,null,"fragments")," can be used to ",l.createElement(s.B,null,"combine/wrap"),l.createElement(c.Z,null)," multiple elements that can be returned from the ",l.createElement(c.Z,null),l.createElement(s.I,null,"render()")," method.")},{label:l.createElement(l.Fragment,null,l.createElement(s.B,null,"Portal"),l.createElement(s.cJ,null),"Portals help render children into a ",l.createElement(s.BI,null,"different DOM subtree"),". Will learn more about portals later.")},{label:l.createElement(l.Fragment,null,l.createElement(s.B,null,"String and numbers"),l.createElement(s.cJ,null),"These are rendered as text nodes in the DOM.")},{label:l.createElement(l.Fragment,null,l.createElement(s.B,null,"Booleans or null"),l.createElement(s.cJ,null),"Renders ",l.createElement(s.B,null,"nothing"),". Most used to implement conditional rendering, for example: ",l.createElement(s.I,null,"isTrue && <Welcome />"),".")}];const u=function(){return l.createElement(l.Fragment,null,l.createElement(r.Z,{as:"h4"},"render()"),l.createElement(o.Z,null,"The render() method is the only ",l.createElement(s.B,null,"required")," method in a ",l.createElement(s.I,null,"class"),l.createElement(c.Z,null)," component. When called, it should examine ",l.createElement(s.BI,null,"this.props"),l.createElement(c.Z,null)," and ",l.createElement(s.BI,null,"this.state")," and return one of the following types:"),l.createElement(s.GS,{unOrdered:!0,expanded:!0,items:i}),l.createElement(o.Z,null,"The ",l.createElement(s.I,null,"render()")," method should be pure, meaning that it ",l.createElement(c.Z,null),l.createElement(s.B,null,"does not modify")," state, it returns the same result each time it's invoked, and it does not directly interact with the browser."),l.createElement(a.Z,null,"render() will not be invoked if ",l.createElement(s.B,null,"shouldComponentUpdate()")," returns false."))}},74214:(e,t,n)=>{n.d(t,{Z:()=>k});var l=n(4942),r=n(94184),a=n.n(r),o=n(67294),c=n(17606),s=n(83819),i=n(28949),u=n(93379),m=n.n(u),d=n(7795),h=n.n(d),E=n(90569),p=n.n(E),g=n(3565),f=n.n(g),b=n(19216),Z=n.n(b),v=n(44589),B=n.n(v),w=n(62428),I={};I.styleTagTransform=B(),I.setAttributes=f(),I.insert=p().bind(null,"head"),I.domAPI=h(),I.insertStyleElement=Z(),m()(w.Z,I),w.Z&&w.Z.locals&&w.Z.locals;var y=function(e){var t,n=e.children,r=e.language,u=void 0===r?"typescript":r,m=e.theme,d=e.showLineNumbers,h=void 0!==d&&d,E=e.codeBlock,p=void 0!==E&&E,g=e.highlight,f=e.copyBtn,b=void 0===f||f,Z=(0,o.useContext)(i.I),v=a()((t={},(0,l.Z)(t,"".concat(s.HL,"-code"),!0),(0,l.Z)(t,"".concat(s.HL,"-code-no-copy-btn"),!b),t));return o.createElement("div",{className:v,style:{textAlign:"left"}},o.createElement(c.Z1,{text:n,language:u,showLineNumbers:h,theme:function(){switch(m){case"dracula":return c.cL;case"anOldHope":return c.dw;case"github":return c.bW;default:return Z.theme===s.bF.DARK_THEME?c.g9:c.dw}}(),wrapLines:!0,codeBlock:p,highlight:g}))};const k=(0,o.memo)(y)},26006:(e,t,n)=>{n.d(t,{Z:()=>H});var l=n(4942),r=n(94184),a=n.n(r),o=n(67294),c=n(14289),s=n(78146),i=n(67115),u=n(76792),m=n(32209),d=n(41485),h=n(39602),E=n(44680),p=n(85893);const g=(0,h.Z)("h4");g.displayName="DivStyledAsH4";const f=(0,E.Z)("alert-heading",{Component:g}),b=(0,E.Z)("alert-link",{Component:i.Z}),Z={variant:"primary",show:!0,transition:m.Z,closeLabel:"Close alert"},v=o.forwardRef(((e,t)=>{const{bsPrefix:n,show:l,closeLabel:r,closeVariant:o,className:i,children:h,variant:E,onClose:g,dismissible:f,transition:b,...Z}=(0,c.Ch)(e,{show:"onClose"}),v=(0,u.vE)(n,"alert"),B=(0,s.Z)((e=>{g&&g(!1,e)})),w=!0===b?m.Z:b,I=(0,p.jsxs)("div",{role:"alert",...w?void 0:Z,ref:t,className:a()(i,v,E&&`${v}-${E}`,f&&`${v}-dismissible`),children:[f&&(0,p.jsx)(d.Z,{onClick:B,"aria-label":r,variant:o}),h]});return w?(0,p.jsx)(w,{unmountOnExit:!0,...Z,ref:void 0,in:l,children:I}):l?I:null}));v.displayName="Alert",v.defaultProps=Z;const B=Object.assign(v,{Link:b,Heading:f});var w=n(83819),I=n(93379),y=n.n(I),k=n(7795),x=n.n(k),F=n(90569),T=n.n(F),A=n(3565),C=n.n(A),L=n(19216),S=n.n(L),D=n(44589),M=n.n(D),N=n(11137),O={};O.styleTagTransform=M(),O.setAttributes=C(),O.insert=T().bind(null,"head"),O.domAPI=x(),O.insertStyleElement=S(),y()(N.Z,O),N.Z&&N.Z.locals&&N.Z.locals;var P=function(e){var t=e.children,n=e.noteText,r=void 0===n?"Note":n,c=e.variant,s=void 0===c?"primary":c,i=a()((0,l.Z)({},"".concat(w.HL,"-note"),!0));return o.createElement("div",{className:i},o.createElement("div",{className:"note-text"},r),o.createElement(B,{key:s,variant:s},t))};const H=(0,o.memo)(P)},62428:(e,t,n)=>{n.d(t,{Z:()=>c});var l=n(8081),r=n.n(l),a=n(23645),o=n.n(a)()(r());o.push([e.id,".ui-geeks-code{margin-top:1.5rem;margin-bottom:1.5rem}.ui-geeks-code-no-copy-btn button{display:none}\n",""]);const c=o},11137:(e,t,n)=>{n.d(t,{Z:()=>c});var l=n(8081),r=n.n(l),a=n(23645),o=n.n(a)()(r());o.push([e.id,".ui-geeks-note{margin-top:1.2rem;margin-bottom:3rem;font-style:italic}.ui-geeks-note .note-text{font-style:italic;position:relative;font-weight:bold;top:13px;z-index:9;margin-left:15px;background-color:#aba8f1;width:fit-content;padding:2px 10px 2px 10px;border-radius:4px}.theme-dark .ui-geeks-note .note-text{background-color:#464646}.theme-dark .ui-geeks-note .alert-primary{color:#000000;background-color:#d6d6d6;border-color:#393939}\n",""]);const c=o}}]);