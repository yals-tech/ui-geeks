"use strict";(self.webpackChunkui_geeks_in_web=self.webpackChunkui_geeks_in_web||[]).push([[3365,2319,2405,1155,3061],{72319:(e,n,t)=>{t.r(n),t.d(n,{ReactHomeDemoBackgroundChangeCode:()=>m,default:()=>d});var o=t(70885),a=t(67294),r=t(9167),l=t(79868),c=t(25583),i=t(4247),u=t(43354),s=void 0;const d=function(){var e=(0,a.useState)("#c0c0c0"),n=(0,o.Z)(e,2),t=n[0],d=n[1],m=function(e){d((function(){return e}))};return a.createElement(a.Fragment,null,a.createElement(r.cJ,null),a.createElement(i.Z,{justifyContent:u.xu.SpaceBetween,flexDirection:u.hj.Column,height:"100%"},a.createElement("div",null,a.createElement("div",{key:"background-".concat(t),style:{backgroundColor:t,height:"120px",width:"100%"}})),a.createElement("div",{style:{height:"35px",marginTop:"20px"}},a.createElement(i.Z,{justifyContent:u.xu.SpaceAround},a.createElement(l.Z,{variant:c.V.Danger,onClick:m.bind(s,"red")},"Red"),a.createElement(l.Z,{variant:c.V.Success,onClick:m.bind(s,"green")},"Green"),a.createElement(l.Z,{variant:c.V.Secondary,onClick:m.bind(s,"gray")},"Gray"),a.createElement(l.Z,{variant:c.V.Warning,onClick:m.bind(s,"#ffc107")},"Yellow")))))};var m="const ReactBackgroundChange = () => {\n  const [backgroundColor, setBackgroundColor] = useState('white');\n  const changeColor = (color: string) => {\n    setBackgroundColor(() => color);\n  };\n\n  return (\n    <>\n      <div\n        key={`background-${backgroundColor}`}\n        style={{\n          backgroundColor: backgroundColor,\n          height: '120px',\n          width: '100%'\n        }}\n      />\n\n      <div style={{ \n          height: '35px', \n          marginTop: '20px'\n        }}>\n        <button \n          onClick={changeColor.bind(this, 'red')}>\n          Red\n        </button>\n        <button \n          onClick={changeColor.bind(this, 'green')}>\n          Green\n        </button>\n        <button \n          onClick={changeColor.bind(this, 'gray')}>\n          Gray\n        </button>\n        <button \n          onClick={changeColor.bind(this, '#ffc107')}>\n          Yellow\n        </button>\n      </div>\n    </>\n  );\n};\n"},13365:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});var o=t(67294),a=t(78994),r=t(74214),l=t(91573),c=t(94418),i=t(13061),u=t(72319),s=t(72405),d=t(91155);const m=function(){var e=(0,a.Z)().indexOf("/demoes")>-1,n=[{id:1,label:"React state update.",moreDetail:{label:"Learn more about state updates",link:i.REACT_PRIMARY_ROUTES.STATE},tabs:[{id:1,content:o.createElement(s.default,null),label:"Output"},{id:2,content:o.createElement(r.Z,{language:l.r.JSX},s.ReactHomeCounterDemoCode),label:"Code"}]},{id:2,label:"Handle form values.",moreDetail:{label:"Learn more about form handling",link:i.REACT_PRIMARY_ROUTES.FORM_HANDLING},tabs:[{id:1,content:o.createElement(d.default,null),label:"Output"},{id:2,content:o.createElement(r.Z,{language:l.r.JSX},d.ReactHomeDemoStateUpdateCode),label:"Code"}]},{id:3,label:"React DOM manipulation.",moreDetail:{label:"Learn more about DOM manipulation",link:i.REACT_PRIMARY_ROUTES.HOME_PAGE.url},tabs:[{id:1,content:o.createElement(u.default,null),label:"Output"},{id:2,content:o.createElement(r.Z,{language:l.r.JSX},u.ReactHomeDemoBackgroundChangeCode),label:"Code"}]}];return o.createElement(c.Z,{demoComponentList:n,homePage:e?i.REACT_PRIMARY_ROUTES.HOME_PAGE.url:void 0,homePageLabel:e?"React":void 0,language:"React"})}},72405:(e,n,t)=>{t.r(n),t.d(n,{ReactHomeCounterDemoCode:()=>p,default:()=>m});var o=t(70885),a=t(67294),r=t(68947),l=t(12050),c=t(9167),i=t(79868),u=t(25583),s=t(4247),d=t(43354);const m=function(){var e=(0,a.useState)(0),n=(0,o.Z)(e,2),t=n[0],m=n[1];return a.createElement(a.Fragment,null,a.createElement(r.Z,null,a.createElement(c.B,null,"Updating State Values")),a.createElement(s.Z,{justifyContent:d.xu.SpaceBetween},a.createElement(i.Z,{variant:u.V.Secondary,onClick:function(){m((function(){return t-1}))}},"Decrement"),a.createElement("div",null,a.createElement(c.B,null,"Counter:"),a.createElement(l.Z,null),a.createElement(c.I,null,t)),a.createElement(i.Z,{variant:u.V.Dark,onClick:function(){m((function(){return t+1}))}},"Increment")))};var p="const ReactStateUpdateDemo = () => {\n  const [counter, setCounter] = useState(0);\n\n  const increment = () => {\n    setCounter(() => counter + 1);\n  };\n\n  const decrement = () => {\n    setCounter(() => counter - 1);\n  };\n\n  return (\n    <>\n      <h6>Updating State Values</h6>\n      <button onClick={increment}>Increment</button>\n      <span><i>Counter</i>: </span>\n      <span><b>{counter}</b></span>\n      <button onClick={decrement}>Decrement</button>\n    </>\n  );\n};\n"},91155:(e,n,t)=>{t.r(n),t.d(n,{ReactHomeDemoStateUpdateCode:()=>b,default:()=>p});var o=t(4942),a=t(70885),r=t(67294),l=t(31555),c=t(34051),i=t(68947),u=t(9167),s=t(14271);function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}const p=function(){var e=(0,r.useState)({language:"React",version:16}),n=(0,a.Z)(e,2),t=n[0],d=n[1],p=function(e){var n=e.target,t=n.value,a=n.id;d((function(e){return m(m({},e),{},(0,o.Z)({},a,t))}))};return r.createElement(r.Fragment,null,r.createElement(i.Z,null,r.createElement(u.B,null,"Controlled Component State Update")),r.createElement(c.Z,null,r.createElement(l.Z,{xs:6,md:6,sm:6,className:"pe-2"},r.createElement(s.Z,{id:"language",placeHolder:"Enter value...",value:t.language,label:"Enter Language",onChange:p})),r.createElement(l.Z,{xs:6,md:6,sm:6},r.createElement(s.Z,{id:"version",placeHolder:"Enter version...",value:t.version,label:"Enter Version",type:"number",onChange:p}))),r.createElement(u.cJ,null),r.createElement(u.B,null,"Form Values:"),r.createElement(u.cJ,null),r.createElement("span",{className:"text-sm"},JSON.stringify(t,null," ")),r.createElement(u.cJ,null))};var b="const ReactStateUpdateDemo = () => {\n  const [inputValue, setInputValue] = useState({\n    language: 'React',\n    version: 16\n  });\n\n  const onHandleChange = (evt: any) => {\n    const { value, id } = evt.target;\n    setInputValue((prev: any) => {\n      return {\n        ...prev,\n        [id]: value\n      };\n    });\n  };\n\n  return (\n    <>\n      <h6>Controlled Component State Update</h6>\n      <label>Enter Language</label>\n      <input  \n        id='language'\n        placeHolder='Enter value...'\n        value={inputValue.language}\n        onChange={onHandleChange}\n      />\n\n      <label>Enter Version</label>\n      <input  \n        id='version'\n        placeHolder='Enter version...'\n        value={inputValue.version}\n        type='number'\n        onChange={onHandleChange}\n      />\n      \n      <i>Form Values: </i>\n      <span>\n        <b>\n          {JSON.stringify(inputValue, null, ' ')}\n        </b>\n      </span>\n    </>\n  );\n};\n"},13061:(e,n,t)=>{t.r(n),t.d(n,{REACT_PRIMARY_ROUTES:()=>l,REACT_ROUTE_PATH:()=>r,getReactGroupedMenu:()=>c});var o=t(52100),a="/react/",r=[{url:"".concat(a,"introduction"),label:"Introduction",group:"Basic Concepts"},{url:"".concat(a,"jsx"),label:"JSX",group:"Basic Concepts"},{url:"".concat(a,"components"),label:"Components",group:"Basic Concepts"},{url:"".concat(a,"class-component"),label:"Class Component",group:"Core Concepts"},{url:"".concat(a,"function-component"),label:"Function Component",group:"Core Concepts"},{url:"".concat(a,"controlled-component"),label:"Controlled Component",group:"Core Concepts"},{url:"".concat(a,"uncontrolled-component"),label:"Uncontrolled Component",group:"Core Concepts"},{url:"".concat(a,"fragments"),label:"Fragments",group:"Core Concepts"},{url:"".concat(a,"lists"),label:"Lists",group:"Core Concepts"},{url:"".concat(a,"forms"),label:"Forms",group:"Core Concepts"},{url:"".concat(a,"hooks"),label:"Hooks",group:"Advanced Concepts"},{url:"".concat(a,"context"),label:"Context",group:"Advanced Concepts"},{url:"".concat(a,"render-props"),label:"Render Props",group:"Advanced Concepts"},{url:"".concat(a,"error-boundary"),label:"Error Boundary",group:"Advanced Concepts"},{url:"".concat(a,"react-routes"),label:"React Router",group:"Advanced Concepts"}],l={HOME_PAGE:{url:"/react/home",label:"React"},STATE:"".concat(a,"function-component"),FORM_HANDLING:"".concat(a,"forms"),DEMO:{url:"/react/demoes",label:"React Demoes"}},c=function(){return(0,o.hw)(r)}},19020:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(87462),a=t(67294),r=t(29758),l=t(68207),c=function(e){return a.createElement(r.Z,(0,o.Z)({},e,{d:l.q.chevronLeft}))};const i=(0,a.memo)(c)},95289:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(87462),a=t(67294),r=t(29758),l=t(68207),c=function(e){return a.createElement(r.Z,(0,o.Z)({},e,{d:l.q.chevronRight}))};const i=(0,a.memo)(c)},74214:(e,n,t)=>{t.d(n,{Z:()=>R});var o=t(4942),a=t(94184),r=t.n(a),l=t(67294),c=t(17606),i=t(83819),u=t(28949),s=t(93379),d=t.n(s),m=t(7795),p=t.n(m),b=t(90569),g=t.n(b),f=t(3565),h=t.n(f),v=t(19216),E=t.n(v),C=t(44589),k=t.n(C),x=t(62428),Z={};Z.styleTagTransform=k(),Z.setAttributes=h(),Z.insert=g().bind(null,"head"),Z.domAPI=p(),Z.insertStyleElement=E(),d()(x.Z,Z),x.Z&&x.Z.locals&&x.Z.locals;var y=function(e){var n,t=e.children,a=e.language,s=void 0===a?"typescript":a,d=e.theme,m=e.showLineNumbers,p=void 0!==m&&m,b=e.codeBlock,g=void 0!==b&&b,f=e.highlight,h=e.copyBtn,v=void 0===h||h,E=(0,l.useContext)(u.I),C=r()((n={},(0,o.Z)(n,"".concat(i.HL,"-code"),!0),(0,o.Z)(n,"".concat(i.HL,"-code-no-copy-btn"),!v),n));return l.createElement("div",{className:C,style:{textAlign:"left"}},l.createElement(c.Z1,{text:t,language:s,showLineNumbers:p,theme:function(){switch(d){case"dracula":return c.cL;case"anOldHope":return c.dw;case"github":return c.bW;default:return E.theme===i.bF.DARK_THEME?c.g9:c.dw}}(),wrapLines:!0,codeBlock:g,highlight:f}))};const R=(0,l.memo)(y)},91573:(e,n,t)=>{t.d(n,{r:()=>o});var o={JavaScript:"javascript",TypeScript:"typescript",HTML:"html",CSS:"css",JSX:"jsx"}},94418:(e,n,t)=>{t.d(n,{Z:()=>B});var o=t(70885),a=t(67294),r=t(89250),l=t(83819),c=t(28949),i=t(19020),u=t(95289),s=t(87462),d=t(29758),m=t(68207),p=function(e){return a.createElement(d.Z,(0,s.Z)({},e,{d:m.q.info}))};const b=(0,a.memo)(p);var g=t(79868),f=t(25583),h=t(4942),v=t(94184),E=t.n(v),C=t(17905),k=t(25696),x=t(93379),Z=t.n(x),y=t(7795),R=t.n(y),S=t(90569),w=t.n(S),O=t(3565),A=t.n(O),T=t(19216),D=t.n(T),H=t(44589),P=t.n(H),N=t(19472),_={};_.styleTagTransform=P(),_.setAttributes=A(),_.insert=w().bind(null,"head"),_.domAPI=R(),_.insertStyleElement=D(),Z()(N.Z,_),N.Z&&N.Z.locals&&N.Z.locals;const L=function(e){var n=e.id,t=e.tabs,r=e.activeTab,c=e.stretch,i=void 0!==c&&c,u=e.fillEvenly,s=void 0!==u&&u,d=(0,a.useState)(r||t[0].id),m=(0,o.Z)(d,2),p=m[0],b=m[1],g=E()((0,h.Z)({},"".concat(l.HL,"-tabs"),!0));return a.createElement("div",{className:g},a.createElement(k.Z,{defaultActiveKey:r,id:n,fill:i,justify:s,onSelect:function(e){var n;(n=e)&&b((function(){return n}))}},t.map((function(e){return a.createElement(C.Z,{key:e.id,eventKey:e.id,title:e.label,disabled:e.disabled},e.id==p&&a.createElement(a.Fragment,null,e.content))}))))};var j=t(33650),V={};V.styleTagTransform=P(),V.setAttributes=A(),V.insert=w().bind(null,"head"),V.domAPI=R(),V.insertStyleElement=D(),Z()(j.Z,V),j.Z&&j.Z.locals&&j.Z.locals;var I=function(e){var n=e.demoComponentList,t=e.homePage,s=e.homePageLabel,d=e.language,m=(0,r.s0)(),p=(0,a.useContext)(c.I),h=(0,a.useState)(0),v=(0,o.Z)(h,2),E=v[0],C=v[1],k=n[E],x=function(e){e&&m(e)};return a.createElement("div",{className:"demo-component ".concat(s?"full-page-demo":""," "),key:"demo-".concat(k.id)},a.createElement("div",null,a.createElement("div",null,a.createElement(a.Fragment,null,s&&a.createElement(g.Z,{onClick:function(){x(t)},className:"back-button"},a.createElement(i.Z,null),a.createElement("span",{className:"label"},s)),a.createElement("div",null,a.createElement(a.Fragment,null,n.length>1&&a.createElement("div",{className:"prev-next-btn"},a.createElement(g.Z,{variant:f.V.Secondary,disabled:E<=0,className:"prev",onClick:function(){E>0&&C((function(e){return e-1}))},title:"See pevious demo"},a.createElement(i.Z,{height:16,width:16,fillColor:"white"})),a.createElement("div",{className:"demo-ctr"},"Example ",E+1," of ",n.length),a.createElement(g.Z,{variant:f.V.Primary,disabled:E===n.length-1,className:"next",onClick:function(){E<n.length-1&&C((function(e){return e+1}))},title:"See next demo"},a.createElement(u.Z,{fillColor:"white",height:16,width:16})),k.moreDetail&&a.createElement(g.Z,{variant:f.V.Clear,onClick:function(){k.moreDetail&&x(k.moreDetail.link)},className:"more-info-icon",title:k.moreDetail.label||"See more details"},a.createElement(b,{height:25,width:25,fillColor:p.theme===l.bF.DARK_THEME?"white":"#46465e"}))),k.label&&a.createElement(a.Fragment,null,a.createElement("div",{className:"demo-title"},k.label))))),a.createElement(L,{id:"".concat(d,"_").concat(k.id),tabs:k.tabs}))))};const B=(0,a.memo)(I)},14271:(e,n,t)=>{t.d(n,{Z:()=>y});var o=t(4942),a=t(94184),r=t.n(a),l=t(67294),c=t(90677),i=t(46431),u=t(83819),s=t(93379),d=t.n(s),m=t(7795),p=t.n(m),b=t(90569),g=t.n(b),f=t(3565),h=t.n(f),v=t(19216),E=t.n(v),C=t(44589),k=t.n(C),x=t(49982),Z={};Z.styleTagTransform=k(),Z.setAttributes=h(),Z.insert=g().bind(null,"head"),Z.domAPI=p(),Z.insertStyleElement=E(),d()(x.Z,Z),x.Z&&x.Z.locals&&x.Z.locals;const y=function(e){var n=e.id,t=e.value,a=e.type,s=void 0===a?"text":a,d=e.label,m=e.placeHolder,p=e.icon,b=e.onChange,g=e.onKeyUp,f=r()((0,o.Z)({},"".concat(u.HL,"-input"),!0));return l.createElement("div",{className:f},d&&l.createElement("label",{className:"input-label",htmlFor:n},d),l.createElement(i.Z,null,l.createElement(c.Z.Control,{id:n,type:s,placeholder:m,"aria-label":n,"aria-describedby":n,onChange:b&&b,onKeyUp:g&&g,value:t,size:"sm"}),p&&l.createElement(i.Z.Text,{id:"search-icon"},p)))}},62428:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(8081),a=t.n(o),r=t(23645),l=t.n(r)()(a());l.push([e.id,".ui-geeks-code{margin-top:1.5rem;margin-bottom:1.5rem}.ui-geeks-code-no-copy-btn button{display:none}\n",""]);const c=l},33650:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(8081),a=t.n(o),r=t(23645),l=t.n(r)()(a());l.push([e.id,".demo-component{border-radius:4px;padding:10px;background:#fffcfc;border:1px solid #e1e1e1;margin-right:10px;height:100%;text-align:left}.demo-component .prev-next-btn{margin-bottom:10px}.demo-component .prev-next-btn .ui-geeks-btn{padding-top:0}.demo-component .prev-next-btn .prev{margin-right:10px}.demo-component .prev-next-btn .demo-ctr{display:inline-block;margin-right:20px;margin-left:10px;font-size:0.8rem;font-style:italic}.demo-component .demo-title{margin-bottom:10px;font-size:1.2rem;color:#ff5e0e;font-weight:bold}.demo-component .result-item{font-size:0.8rem;border-bottom:1px solid silver;margin-bottom:5px}.demo-component .result-item .key-label{font-style:italic;margin-right:10px}.demo-component .result-item .key-value{font-weight:bold;float:right}.demo-component .more-info-icon{float:right}.demo-component .tab-content{min-height:280px;max-height:280px;overflow:auto}.demo-component .tab-content .ui-geeks-code{max-height:100%;overflow:auto;font-size:0.8rem}.demo-component .back-button{margin-left:-7px}.demo-component .back-button svg{margin-top:-7px}.demo-component .back-button .label{font-size:1.5rem;color:#008575;margin-left:5px}.full-page-demo{margin-left:-10px;margin-right:-10px;padding:10px}.full-page-demo .tab-content{min-height:280px;max-height:100%;overflow:auto}.full-page-demo .tab-content .ui-geeks-code{max-height:100%}.theme-dark .demo-component{background-color:#262626;color:#dedede;border:1px solid transparent}.theme-dark .full-page-demo{background-color:#262626}\n",""]);const c=l},49982:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(8081),a=t.n(o),r=t(23645),l=t.n(r)()(a());l.push([e.id,".ui-geeks-input .input-group-text{border:1px solid #6e45e2}.ui-geeks-input .form-control{border-radius:2px;min-height:25px;height:25px}.ui-geeks-input .form-control:focus{border:1px solid #6e45e2}.ui-geeks-input .input-label{display:block;color:#626262;margin-bottom:5px;cursor:pointer}.theme-dark .ui-geeks-input .input-label{color:#dedede}\n",""]);const c=l},19472:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(8081),a=t.n(o),r=t(23645),l=t.n(r)()(a());l.push([e.id,".ui-geeks-tabs{background-color:#fffcfc;border-radius:2px}.ui-geeks-tabs .nav-tabs{border-bottom:1px solid #dedede;font-size:0.9rem}.ui-geeks-tabs .nav-tabs .nav-link{height:30px;border-top-left-radius:0;border-top-right-radius:0;padding-top:3px}.ui-geeks-tabs .nav-tabs .nav-link:hover{border-color:transparent;border-bottom:1px solid #33cc7b}.ui-geeks-tabs .nav-tabs .nav-link.active{border-color:transparent;border-bottom:1px solid #6e45e2;background-color:transparent}.ui-geeks-tabs .tab-content{padding:10px 0px;border-bottom:1px solid #fffcfc;border-left:1px solid #fffcfc;border-right:1px solid #fffcfc}.ui-geeks-tabs .ui-geeks-code{margin-top:0;margin-bottom:0;font-size:0.9rem}.theme-dark .ui-geeks-tabs{border:1px solid transparent;background-color:#262626}.theme-dark .ui-geeks-tabs .nav-tabs{border-bottom:1px solid #343434}.theme-dark .ui-geeks-tabs .nav-tabs .nav-link.active{color:#dedede;background-color:#343434;border-top-color:#343434;border-left-color:#343434;border-right-color:#343434}.theme-dark .ui-geeks-tabs .tab-content{border:1px solid transparent}.theme-dark .ui-geeks-tabs .nav-link{color:#dedede}\n",""]);const c=l},34051:(e,n,t)=>{t.d(n,{Z:()=>u});var o=t(94184),a=t.n(o),r=t(67294),l=t(76792),c=t(85893);const i=r.forwardRef((({bsPrefix:e,className:n,as:t="div",...o},r)=>{const i=(0,l.vE)(e,"row"),u=(0,l.pi)(),s=(0,l.zG)(),d=`${i}-cols`,m=[];return u.forEach((e=>{const n=o[e];let t;delete o[e],null!=n&&"object"==typeof n?({cols:t}=n):t=n;const a=e!==s?`-${e}`:"";null!=t&&m.push(`${d}${a}-${t}`)})),(0,c.jsx)(t,{ref:r,...o,className:a()(n,i,...m)})}));i.displayName="Row";const u=i}}]);