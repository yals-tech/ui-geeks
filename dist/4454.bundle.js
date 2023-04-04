"use strict";(self.webpackChunkui_geeks_in=self.webpackChunkui_geeks_in||[]).push([[4454,9127,8558,9590,5092],{18558:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var a=n(67294),l=n(74214),r=n(91573),o=n(87398),c=n(68947);const u=function(){return a.createElement(a.Fragment,null,a.createElement(c.Z,null,"React Router is a routing library built on top of React that updates the UI, keeping it in sync with the URL. We'll see the implementation details for version 6."),a.createElement(o.Z,{as:"h2"},"Installation"),a.createElement(c.Z,null,"Run below command to install latest react-router-dom package."),a.createElement(l.Z,{language:r.r.JSX},"npm install react-router-dom@6"))}},69590:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var a=n(70885),l=n(67294),r=n(89250),o=n(79655),c=n(74214),u=n(91573),s=n(87398),i=n(68947),m=n(12050),h=n(9167),d=[{label:l.createElement(l.Fragment,null,l.createElement(h.B,null,"<Link>")," Component")},{label:l.createElement(l.Fragment,null,l.createElement(h.B,null,"useNavigate()")," Hook")}];const E=function(){(0,r.TH)();var e=(0,o.lr)(),t=(0,a.Z)(e,2),n=t[0];return t[1],console.log("searchParam",n.get("id")),console.log("searchParam",n.getAll("id")),l.createElement(l.Fragment,null,l.createElement(s.Z,{as:"h2"},"Navigation"),l.createElement(i.Z,null,"When the URL changes, it is called navigation. There are two ways to navigate in React Router."),l.createElement(h.GS,{unOrdered:!0,items:d}),l.createElement(s.Z,{as:"h3"},"<Link>"),l.createElement(i.Z,null,"A component used to render a link. It renders a ",l.createElement(h.B,null,"<a href>")," tag making it ",l.createElement(h.I,null,"web accessible compliant"),". React Router will prevent the browser's default behavior and tell the ",l.createElement(h.BI,null,"history")," to push a new entry into the ",l.createElement(h.I,null,"history stack"),". When the user clicks on it, the",l.createElement(h.B,null,"location")," changes and the new matches will be rendered."),l.createElement(h.IU,null,"Example:"),l.createElement(c.Z,{language:u.r.JSX},'<Link to="/home">Home</Link>'),l.createElement(s.Z,{as:"h3"},"Relative Link"),l.createElement(i.Z,null,"Relative ",l.createElement(h.I,null,"<Link to>")," values (that ",l.createElement(m.Z,null),l.createElement(h.B,null,'do not begin with a "/"'),") are relative to the path of the route that rendered them."),l.createElement(s.Z,{as:"h3"},"useNavigate()"),l.createElement(i.Z,null,"This hook returns a ",l.createElement(h.I,null,"function")," which is used to change the URL",l.createElement(m.Z,null)," ",l.createElement(h.I,null,"programmatically"),"."),l.createElement(h.IU,null,"Example:"),l.createElement(c.Z,{language:u.r.JSX},'const navigate = useNavigate();\nnavigate("/home");'),l.createElement(s.Z,{as:"h3"},"Sharing/Accessing URL Data"),l.createElement(i.Z,null,"A route may contain ",l.createElement(h.B,null,"location"),", ",l.createElement(h.B,null,"state"),", ",l.createElement(m.Z,null),l.createElement(h.B,null,"route parameters")," and",l.createElement(h.B,null,"query string/search parameters"),". React Router provides Hooks for accessing these values."),l.createElement(s.Z,{as:"h4"},"Adding state to URL"),l.createElement(i.Z,null,"Values added in ",l.createElement(h.B,null,"state")," are ",l.createElement(h.B,null,"not visible on URL"),", instead these values are ",l.createElement(h.I,null,"hidden")," that can be accessed ",l.createElement(m.Z,null),l.createElement(h.I,null,"programmatically"),"."),l.createElement(h.IU,null,"Adding ",l.createElement(h.B,null,"state")," to URL:"),l.createElement(c.Z,{language:u.r.JSX},'<Link to="/javascript" state={{ redirectURL : "/home" }} />'),l.createElement(c.Z,{language:u.r.JSX},'navigate("/javascript", { state : { redirectURL : "/home" } });'),l.createElement(s.Z,{as:"h3"},"useLocation()"),l.createElement(i.Z,null,"This Hook returns a ",l.createElement(h.B,null,"location object")," containing all related information for the current route. It contains ",l.createElement(h.I,null,"hash"),", ",l.createElement(h.I,null,"key"),",",l.createElement(m.Z,null)," ",l.createElement(h.I,null,"pathname"),", ",l.createElement(h.I,null,"search")," and ",l.createElement(h.I,null,"state")," attributes of the current route."),l.createElement(h.IU,null,"Syntax:"),l.createElement(c.Z,{language:u.r.JSX},"const location = useLocation();"),l.createElement(i.Z,null,l.createElement(h.I,null,"For below link the location object will hold below properties:")),l.createElement(c.Z,{language:u.r.JSX},'<Link to="/language?langId=1" \n    state={{ redirectURL : "/home" }}>\nLanguage\n</Link>'),l.createElement(c.Z,{language:u.r.JSX},'location = {\npathname: "/language",\nsearch: "?langId=1",\nhash: "",\nstate:{ redirectURL : "/home" },\nkey: "default"\t\n}\n'),l.createElement(s.Z,{as:"h3"},"useParams()"),l.createElement(i.Z,null,"This returns an object containing all the ",l.createElement(h.I,null,"route parameters")," (if any). Route parameters are defined using ",l.createElement(h.B,null,'"/:key"')," format."),l.createElement(h.IU,null,"Example of route parameters:"),l.createElement(c.Z,{language:u.r.JSX},'<Route path="language/:langId/:topicId" element={<Language />}  />'),l.createElement(h.IU,null,"Navigation link can be written as follows:"),l.createElement(c.Z,{language:u.r.JSX},'<Link to="/language/1/20">Language</Link>'),l.createElement(c.Z,{language:u.r.JSX},"const params = useParams();\nconsole.log(params);\n// { langId:1, topicId: 20 }\n"),l.createElement(s.Z,{as:"h3"},"useSearchParams()"),l.createElement(i.Z,null,"This hook is used to ",l.createElement(h.B,null,"read and modify")," the query string parameters of the URL. It returns ",l.createElement(h.B,null,"an array of two values"),": ",l.createElement(m.Z,null),l.createElement(h.I,null,"the current location search parameters")," and a ",l.createElement(m.Z,null),l.createElement(h.I,null,"function that may be used to update them"),"."),l.createElement(c.Z,{language:u.r.JSX},"const [searchParams, setSearchParams] = useSearchParams();"),l.createElement(i.Z,null,l.createElement(h.B,null,"searchParams:")," This contains the query parameter arrtributes. The",l.createElement(m.Z,null)," ",l.createElement(h.B,null,"searchParam.get(<key>)")," function can be used to read query parameter value by its key."),l.createElement(c.Z,{language:u.r.JSX},"console.log(searchParam.get('id'));"),l.createElement(i.Z,null,l.createElement(h.B,null,"setSearchParams:")," This function works like ",l.createElement(h.I,null,"navigate"),", but only for the search portion of the URL."),l.createElement(h.IU,null,"Example of navigation link with search parameters:"),l.createElement(c.Z,{language:u.r.JSX},'<Link to="/language?langId=1&topicId=20">Language</Link>'),l.createElement(i.Z,null,"The component matched with the above URL can read the query parameter values."),l.createElement(c.Z,{language:u.r.JSX},"const [searchParams, setSearchParams] = useSearchParams();\n\nconst languageId = searchParams.get('langId');\nconst topicId = searchParams.get('topicId');\n\nconsole.log(languageId) // 1\nconsole.log(topicId)  // 20\n"))}},75092:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var a=n(67294),l=n(74214),r=n(91573),o=n(87398),c=n(26006),u=n(68947),s=n(12050),i=n(9167),m=[{label:"/javascript"},{label:"/javascript/blog/:blogId"},{label:"/javascript/history"}];const h=function(){return a.createElement(a.Fragment,null,a.createElement(o.Z,{as:"h2"},"BrowserRouter"),a.createElement(u.Z,null,"This is a ",a.createElement(i.I,null,"<Router>")," that uses the ",a.createElement(i.BI,null,"HTML5 history")," API (",a.createElement(i.I,null,"pushState"),", ",a.createElement(i.I,null,"replaceState")," and ",a.createElement(i.I,null,"postState")," events) to keep the UI in sync with the URL. URLs built with BrowserRouter follow the standard URL structure. For example: ",a.createElement(i.I,null,'"/language/React"'),"."),a.createElement(u.Z,null,"An alternate to this is ",a.createElement(i.B,null,"<HashRouter>"),", that uses the",a.createElement(s.Z,null)," ",a.createElement(i.B,null,"hash")," portion of the URL (i.e., ",a.createElement(s.Z,null),a.createElement(i.I,null,"window.location.hash"),")."),a.createElement(c.Z,null,a.createElement(i.B,null,"Hash history")," does not support ",a.createElement(i.B,null,"location.key")," or",a.createElement(i.B,null,"location.state"),". These were supported in older versions, but it had some issues for implementing a couple of edge cases."),a.createElement(u.Z,null,a.createElement(i.I,null,"<BrowserRouter>")," is the preferred way, but it may require some configuration changes to the server, to handle the ",a.createElement(s.Z,null),a.createElement(i.B,null,"refresh of the page"),". On a server, it may be required to configure URL routing to ",a.createElement(i.B,null,"by-pass the server-side routing")," and delegating the URL to the react application, so that BrowserRouter can render the expected UI."),a.createElement(o.Z,{as:"h2"},"<Routes>"),a.createElement(u.Z,null,"This is a parent route with child routes."),a.createElement(o.Z,{as:"h2"},"<Route>"),a.createElement(u.Z,null,"A Route Element of the structure ",a.createElement(i.I,null,"<Route path element >"),", which is used to define a route in the route config."),a.createElement(o.Z,{as:"h3"},"Route Config"),a.createElement(u.Z,null,"This is a tree of ",a.createElement(i.B,null,"route objects")," that will be ranked and matched against the current location to create a branch of ",a.createElement(i.B,null,"route matches"),"."),a.createElement(o.Z,{as:"h3"},"<Outlet>"),a.createElement(u.Z,null,"It is a component that renders the matched routes element."),a.createElement(o.Z,{as:"h3"},"Layout Route"),a.createElement(u.Z,null,"This is a parent route ",a.createElement(i.B,null,"without a path"),", used exclusively for grouping child routes inside a specific layout."),a.createElement(l.Z,{language:r.r.JSX},'<Route element={<Layout />}>\n  <Route path="/add" element={<Add />} />\n  <Route path="/update" element={<Update />} />\n</Route>'),a.createElement(o.Z,{as:"h3"},"Not Found Route"),a.createElement(u.Z,null,"When no route matches with URL, we can render a not found component using the ",a.createElement(i.B,null,'path="*"'),"."),a.createElement(l.Z,{language:r.r.JSX},'<Route path="*" element={<NotFound />} />'),a.createElement(o.Z,{as:"h3"},"Nested Routes"),a.createElement(u.Z,null,"Routes can be nested inside another Route and their paths will also nest. Nested routes are perfect for creating UI that has persistent navigation in layout with an inner section that changes with the URL."),a.createElement(l.Z,{language:r.r.JSX},'const App = () => {\n  return (\n    <Routes>\n      <Route path="javascript" element={<JavaScript />}>\n        <Route path="blog:blogId" element={<Blog />} />\n        <Route path="history" element={<History />} />\n      </Route>\n    </Routes>\n)}'),a.createElement(u.Z,null,"The route config will be defined with below given routes:",a.createElement(i.GS,{unOrdered:!0,items:m})),a.createElement(u.Z,null,"Observe that ",a.createElement(i.B,null,'"/javascript"')," is prefixed to both child routes."),a.createElement(l.Z,{language:r.r.JSX},"const JavaScript = () => {\n  return (\n    <>\n      <h1>JavaScript Section</h1>\n      <Outlet />\n    </>\n  )}"),a.createElement(l.Z,{language:r.r.JSX},"const Blog = () => {\n  const { blogId } = useParams();\n  return <h2>Blog ID is: {blogId }</h2>;\n}"),a.createElement(l.Z,{language:r.r.JSX},"const History = () => {\n  return <h2>JavaScript History</h2>;\n}"),a.createElement(o.Z,{as:"h3"},"Index Route"),a.createElement(u.Z,null,"A child route with ",a.createElement(i.B,null,"no path")," that renders in the",a.createElement(s.Z,null),a.createElement(i.I,null,"parent's ",a.createElement(s.Z,null),"<Outlet>"),a.createElement(s.Z,null),"for the parent's URL. Index routes can be thought of as the ",a.createElement(s.Z,null),a.createElement(i.B,null,'"default child route"'),". When a parent route has multiple children, but the URL is at the parent's path, the index route will be displayed in the ",a.createElement(i.I,null,"<Outlet>"),"."),a.createElement(l.Z,{language:r.r.JSX},'<Routes>\n  <Route path="/" element={<Layout />}>\n    <Route index element={<History />} />\n    <Route path="blog/:blogId" element={<Blog />} />\n    <Route path="history" element={<History />} />\n  </Route>\n</Routes>\n'),a.createElement(o.Z,{as:"h3"},"Descendant Routes"),a.createElement(u.Z,null,"As we have learnt that routes can be nested, which means we can have multiple ",a.createElement(i.B,null,"<Routes>")," elements in a ",a.createElement(i.I,null,"component tree"),". Route with ",a.createElement(i.B,null,'path ending with "/*"')," is called a descendant path, which tells React Router to use the given URL as the parent of the descendant routes."),a.createElement(u.Z,null,"Descendant Routes can be used to split routes in multiple files. This is helpful in defining module level routes."),a.createElement(l.Z,{language:r.r.JSX},'const AppRoutes = () => {\n  return (\n    <Routes>\n      <Route path="/" element={<Home />}>\n      <Route path="javascript/*" element={<JavaScriptRoutes />} />\n    </Routes>\n)}'),a.createElement(l.Z,{language:r.r.JSX},'const JavaScriptRoutes = () => {\n  return (\n    <Routes>\n      <Route path="/" element={<JavaScript />}>\n      <Route path="history" element={<History />} />\n    </Routes>\n)}'))}},94454:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var a=n(67294),l=n(9231),r=n(59044),o=n(87398),c=n(12050),u=n(9167),s=n(49997),i=n(18558),m=n(69590),h=n(75092),d=[{label:a.createElement(a.Fragment,null,a.createElement(u.B,null,"React Router")," is a routing library to keep the UI in sync with the URL.")},{label:a.createElement(a.Fragment,null,"The ",a.createElement(u.B,null,"<BrowserRouter>")," uses ",a.createElement(u.I,null,"HTML5 history")," API.")},{label:a.createElement(a.Fragment,null,a.createElement(u.B,null,"<Routes>")," is the parent route for child ","<Route>",". The",a.createElement(c.Z,null)," ","<Route>"," accepts ",a.createElement(u.I,null,"route URL")," as ",a.createElement(u.BI,null,"path")," and a component to render as ",a.createElement(u.BI,null,"element")," prop.")},{label:a.createElement(a.Fragment,null,"The ",a.createElement(u.I,null,"Route config")," is a tree of route objects that will be ranked and matched against the current location.")},{label:a.createElement(a.Fragment,null,"The ",a.createElement(u.B,null,"<Outlet>")," component is used to render the matched routes element.")},{label:a.createElement(a.Fragment,null,"The ",a.createElement(u.B,null,"Layout Route")," is used for ",a.createElement(u.B,null,"grouping")," child routes in specific layouts.")},{label:a.createElement(a.Fragment,null,"Not found component can be rendered for ",a.createElement(u.B,null,'path="*"'),".")},{label:a.createElement(a.Fragment,null,a.createElement(u.B,null,"Index Route")," is a child route with ",a.createElement(u.B,null,"no path"),", which would be the ",a.createElement(u.B,null,"default child route")," and is rendered in the ",a.createElement(c.Z,null),a.createElement(u.I,null,"parent's ",a.createElement(c.Z,null),"<Outlet>"),".")},{label:a.createElement(a.Fragment,null,a.createElement(u.B,null,"Descendant Routes")," are routes with ",a.createElement(u.B,null,'path ending with "/*"'),", is used to ",a.createElement(u.I,null,"split routes in multiple files")," for implementing module level routes.")},{label:a.createElement(a.Fragment,null,"When the URL changes, it is called ",a.createElement(u.B,null,"Navigation"),". React Router provides ",a.createElement(u.BI,null,"<Link>")," and ",a.createElement(u.BI,null,"useNavigate()")," for implementing navigation.")},{label:a.createElement(a.Fragment,null,"The ",a.createElement(u.BI,null,"useLocation()"),", ",a.createElement(u.BI,null,"useParams()")," and ",a.createElement(c.Z,null),a.createElement(u.BI,null,"useSearchParams()")," hooks are used to read url information like location, route parameters, query parameters, etc.")}];const E=function(){return(0,l.Z)("UI-Geeks: React | Router"),a.createElement(r.Z,null,a.createElement(o.Z,null,"React Router"),a.createElement(i.default,null),a.createElement(h.default,null),a.createElement(m.default,null),a.createElement(s.Z,{items:d}))}},74214:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(4942),l=n(94184),r=n.n(l),o=n(67294),c=n(17606),u=n(83819),s=n(28949),i=n(93379),m=n.n(i),h=n(7795),d=n.n(h),E=n(90569),g=n.n(E),p=n(3565),Z=n.n(p),R=n(19216),b=n.n(R),f=n(44589),v=n.n(f),I=n(62428),y={};y.styleTagTransform=v(),y.setAttributes=Z(),y.insert=g().bind(null,"head"),y.domAPI=d(),y.insertStyleElement=b(),m()(I.Z,y),I.Z&&I.Z.locals&&I.Z.locals;var w=function(e){var t,n=e.children,l=e.language,i=void 0===l?"typescript":l,m=e.theme,h=e.showLineNumbers,d=void 0!==h&&h,E=e.codeBlock,g=void 0!==E&&E,p=e.highlight,Z=e.copyBtn,R=void 0===Z||Z,b=(0,o.useContext)(s.I),f=r()((t={},(0,a.Z)(t,"".concat(u.HL,"-code"),!0),(0,a.Z)(t,"".concat(u.HL,"-code-no-copy-btn"),!R),t));return o.createElement("div",{className:f,style:{textAlign:"left"}},o.createElement(c.Z1,{text:n,language:i,showLineNumbers:d,theme:function(){switch(m){case"dracula":return c.cL;case"anOldHope":return c.dw;case"github":return c.bW;default:return b.theme===u.bF.DARK_THEME?c.g9:c.dw}}(),wrapLines:!0,codeBlock:g,highlight:p}))};const k=(0,o.memo)(w)},91573:(e,t,n)=>{n.d(t,{r:()=>a});var a={JavaScript:"javascript",TypeScript:"typescript",HTML:"html",CSS:"css",JSX:"jsx"}},59044:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(4942),l=n(94184),r=n.n(l),o=n(67294),c=n(83819),u=n(93379),s=n.n(u),i=n(7795),m=n.n(i),h=n(90569),d=n.n(h),E=n(3565),g=n.n(E),p=n(19216),Z=n.n(p),R=n(44589),b=n.n(R),f=n(94364),v={};v.styleTagTransform=b(),v.setAttributes=g(),v.insert=d().bind(null,"head"),v.domAPI=m(),v.insertStyleElement=Z(),s()(f.Z,v),f.Z&&f.Z.locals&&f.Z.locals;var I=function(e){var t=e.children,n=r()((0,a.Z)({},"".concat(c.HL,"-container"),!0));return o.createElement("div",{className:n},t)};const y=(0,o.memo)(I)},26006:(e,t,n)=>{n.d(t,{Z:()=>F});var a=n(4942),l=n(94184),r=n.n(l),o=n(67294),c=n(14289),u=n(78146),s=n(67115),i=n(76792),m=n(32209),h=n(41485),d=n(39602),E=n(44680),g=n(85893);const p=(0,d.Z)("h4");p.displayName="DivStyledAsH4";const Z=(0,E.Z)("alert-heading",{Component:p}),R=(0,E.Z)("alert-link",{Component:s.Z}),b={variant:"primary",show:!0,transition:m.Z,closeLabel:"Close alert"},f=o.forwardRef(((e,t)=>{const{bsPrefix:n,show:a,closeLabel:l,closeVariant:o,className:s,children:d,variant:E,onClose:p,dismissible:Z,transition:R,...b}=(0,c.Ch)(e,{show:"onClose"}),f=(0,i.vE)(n,"alert"),v=(0,u.Z)((e=>{p&&p(!1,e)})),I=!0===R?m.Z:R,y=(0,g.jsxs)("div",{role:"alert",...I?void 0:b,ref:t,className:r()(s,f,E&&`${f}-${E}`,Z&&`${f}-dismissible`),children:[Z&&(0,g.jsx)(h.Z,{onClick:v,"aria-label":l,variant:o}),d]});return I?(0,g.jsx)(I,{unmountOnExit:!0,...b,ref:void 0,in:a,children:y}):a?y:null}));f.displayName="Alert",f.defaultProps=b;const v=Object.assign(f,{Link:R,Heading:Z});var I=n(83819),y=n(93379),w=n.n(y),k=n(7795),B=n.n(k),L=n(90569),S=n.n(L),U=n(3565),x=n.n(U),T=n(19216),J=n.n(T),P=n(44589),A=n.n(P),H=n(11137),X={};X.styleTagTransform=A(),X.setAttributes=x(),X.insert=S().bind(null,"head"),X.domAPI=B(),X.insertStyleElement=J(),w()(H.Z,X),H.Z&&H.Z.locals&&H.Z.locals;var N=function(e){var t=e.children,n=e.noteText,l=void 0===n?"Note":n,c=e.variant,u=void 0===c?"primary":c,s=r()((0,a.Z)({},"".concat(I.HL,"-note"),!0));return o.createElement("div",{className:s},o.createElement("div",{className:"note-text"},l),o.createElement(v,{key:u,variant:u},t))};const F=(0,o.memo)(N)},49997:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(4942),l=n(94184),r=n.n(l),o=n(67294),c=n(83819),u=n(87398),s=n(9167),i=n(93379),m=n.n(i),h=n(7795),d=n.n(h),E=n(90569),g=n.n(E),p=n(3565),Z=n.n(p),R=n(19216),b=n.n(R),f=n(44589),v=n.n(f),I=n(89166),y={};y.styleTagTransform=v(),y.setAttributes=Z(),y.insert=g().bind(null,"head"),y.domAPI=d(),y.insertStyleElement=b(),m()(I.Z,y),I.Z&&I.Z.locals&&I.Z.locals;const w=function(e){var t=e.label,n=void 0===t?"Summary":t,l=e.items,i=r()((0,a.Z)({},"".concat(c.HL,"-summary"),!0));return o.createElement("div",{className:i},o.createElement(u.Z,{as:"h4"},n),o.createElement(s.GS,{unOrdered:!0,items:l}))}},9231:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294);const l=function(e){(0,a.useEffect)((function(){return document.title=e,function(){document.title="UI Geeks | UI Learning Platform"}}),[])}},62428:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(8081),l=n.n(a),r=n(23645),o=n.n(r)()(l());o.push([e.id,".ui-geeks-code{margin-top:1.5rem;margin-bottom:1.5rem}.ui-geeks-code-no-copy-btn button{display:none}\n",""]);const c=o},94364:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(8081),l=n.n(a),r=n(23645),o=n.n(r)()(l());o.push([e.id,".ui-geeks-container{padding:1rem}\n",""]);const c=o},11137:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(8081),l=n.n(a),r=n(23645),o=n.n(r)()(l());o.push([e.id,".ui-geeks-note{margin-top:1.2rem;margin-bottom:3rem;font-style:italic}.ui-geeks-note .note-text{font-style:italic;position:relative;font-weight:bold;top:13px;z-index:9;margin-left:15px;background-color:#aba8f1;width:fit-content;padding:2px 10px 2px 10px;border-radius:4px}.theme-dark .ui-geeks-note .note-text{background-color:#464646}.theme-dark .ui-geeks-note .alert-primary{color:#000000;background-color:#d6d6d6;border-color:#393939}\n",""]);const c=o},89166:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(8081),l=n.n(a),r=n(23645),o=n.n(r)()(l());o.push([e.id,".ui-geeks-summary{border-top:2px solid #e1e1e1;padding-bottom:10px}.ui-geeks-summary .ui-geeks-heading{margin-top:1rem;margin-bottom:1rem}\n",""]);const c=o}}]);