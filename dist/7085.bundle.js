"use strict";(self.webpackChunkui_geeks_in=self.webpackChunkui_geeks_in||[]).push([[7085],{67085:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var l=n(67294),r=n(74214),o=n(91573),a=n(87398),c=n(68947),u=n(12050),s=n(9167);const i=function(){return l.createElement(l.Fragment,null,l.createElement(a.Z,{as:"h3"},"useContext()"),l.createElement(c.Z,null,"This hook is used to access ",l.createElement(s.B,null,"Context")," values inside the function component."),l.createElement(c.Z,null,l.createElement(s.IU,null,"Syntax:"),l.createElement(r.Z,{language:o.r.JSX},"const value = useContext(ContextObject)")),l.createElement(c.Z,null,l.createElement(s.B,null,"ContextObject"),": It is the React Context object, returned from",l.createElement(s.I,null,"React.createContext()")," method."),l.createElement(c.Z,null,"The ",l.createElement(s.I,null,"useContext()")," Hook accepts a context object ",l.createElement(u.Z,null),l.createElement(s.B,null,'"ContextObject"')," and returns the current context ",l.createElement(s.B,null,"value")," for that context. The current context value is determined by the ",l.createElement(u.Z,null),l.createElement(s.BI,null,"value prop")," of the nearest ",l.createElement(s.B,null,"<ContextObject.Provider>"),l.createElement(u.Z,null)," above the calling component in the tree."),l.createElement(c.Z,null,"When the nearest ",l.createElement(s.B,null,"<ContextObject.Provider>")," updates the",l.createElement(u.Z,null)," ",l.createElement(s.BI,null,"value"),", this Hook will trigger a re-render with the latest context value."),l.createElement(c.Z,null,l.createElement(s.IU,null,"Example:"),l.createElement(r.Z,{language:o.r.JSX},'const user = { name : "Default User", authenticated: false };\nconst UserContext = React.createContext(user);'),l.createElement(r.Z,{language:o.r.JSX},'const LoginButton = () => { \n  const userInfo = useContext(UserContext);\n  return <div>\n    <span>Username: {userInfo.name}</span>\n    <button>{userInfo.authenticated  ? "Logout" : "Login"}</button>\n  </div>\n}'),l.createElement(r.Z,{language:o.r.JSX},'const Home = () => { \n  const [userInfo, setUserInfo]  = useState(null) ;\t\n  const toggleLogin = () => { \n    setUserInfo(()=> {\n      return { name : "Home User", authenticated: true } \n    });\n  }\n\n  return <UserContext.Provider value={userInfo }>\n    <LoginButton />\n    <button onClick={toggleLogin}>Toggle Login</button>\n  </UserContext.Provider>\n}')))}},74214:(e,t,n)=>{n.d(t,{Z:()=>L});var l=n(4942),r=n(94184),o=n.n(r),a=n(67294),c=n(17606),u=n(83819),s=n(28949),i=n(93379),m=n.n(i),d=n(7795),g=n.n(d),h=n(90569),E=n.n(h),p=n(3565),v=n.n(p),x=n(19216),b=n.n(x),Z=n(44589),f=n.n(Z),C=n(62428),I={};I.styleTagTransform=f(),I.setAttributes=v(),I.insert=E().bind(null,"head"),I.domAPI=g(),I.insertStyleElement=b(),m()(C.Z,I),C.Z&&C.Z.locals&&C.Z.locals;var k=function(e){var t,n=e.children,r=e.language,i=void 0===r?"typescript":r,m=e.theme,d=e.showLineNumbers,g=void 0!==d&&d,h=e.codeBlock,E=void 0!==h&&h,p=e.highlight,v=e.copyBtn,x=void 0===v||v,b=(0,a.useContext)(s.I),Z=o()((t={},(0,l.Z)(t,"".concat(u.HL,"-code"),!0),(0,l.Z)(t,"".concat(u.HL,"-code-no-copy-btn"),!x),t));return a.createElement("div",{className:Z,style:{textAlign:"left"}},a.createElement(c.Z1,{text:n,language:i,showLineNumbers:g,theme:function(){switch(m){case"dracula":return c.cL;case"anOldHope":return c.dw;case"github":return c.bW;default:return b.theme===u.bF.DARK_THEME?c.g9:c.dw}}(),wrapLines:!0,codeBlock:E,highlight:p}))};const L=(0,a.memo)(k)},91573:(e,t,n)=>{n.d(t,{r:()=>l});var l={JavaScript:"javascript",TypeScript:"typescript",HTML:"html",CSS:"css",JSX:"jsx"}},62428:(e,t,n)=>{n.d(t,{Z:()=>c});var l=n(8081),r=n.n(l),o=n(23645),a=n.n(o)()(r());a.push([e.id,".ui-geeks-code{margin-top:1.5rem;margin-bottom:1.5rem}.ui-geeks-code-no-copy-btn button{display:none}\n",""]);const c=a}}]);