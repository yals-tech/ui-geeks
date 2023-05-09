"use strict";(self.webpackChunkui_geeks_in_web=self.webpackChunkui_geeks_in_web||[]).push([[5840,1795,1035,4804,123,3267],{21795:(e,n,t)=>{t.r(n),t.d(n,{JS_BLOG_CONTENT:()=>a});var l=t(67294),r=(0,l.lazy)((function(){return Promise.all([t.e(7606),t.e(5275)]).then(t.bind(t,35275))})),a=[{id:1,label:"How to get user location.",url:"get-user-location",content:l.createElement(r,null)}]},1035:(e,n,t)=>{t.r(n),t.d(n,{JS_BLOG_MENU_ITEMS:()=>l,JS_FIRST_BLOG:()=>r});var l=t(21795).JS_BLOG_CONTENT.map((function(e){return{url:"".concat("/javascript/blogs/").concat(e.url),label:e.label}})),r=l[0]},27456:(e,n,t)=>{t.r(n),t.d(n,{default:()=>i});var l=t(67294),r=t(74214),a=t(59044),o=t(87398),c=t(68947),u=t(9167);const i=function(){return l.createElement(a.Z,null,l.createElement(o.Z,{as:"h1"},"A Very Big Sum"),l.createElement(c.Z,null,"In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.",l.createElement(u.cJ,null),l.createElement(u.cJ,null),l.createElement(u.B,null,"Function Description"),l.createElement(u.cJ,null),"Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.",l.createElement(u.cJ,null),l.createElement(u.cJ,null),l.createElement(u.I,null,"aVeryBigSum")," has the following parameter(s):",l.createElement(u.GS,{unOrdered:!0,items:[{label:"int ar[n]: an array of integers."}]}),l.createElement(c.Z,null,l.createElement(u.B,null,"Return"),l.createElement(u.GS,{unOrdered:!0,items:[{label:"long: the sum of all array elements"}]})),l.createElement(c.Z,null,l.createElement(u.B,null,"Input Format"),l.createElement(u.cJ,null),"The first line of the input consists of an integer .",l.createElement(u.cJ,null),"The next line contains space-separated integers contained in the array."),l.createElement(c.Z,null,l.createElement(u.B,null,"Output Format"),l.createElement(u.cJ,null),"Return the integer sum of the elements in the array."),l.createElement(c.Z,null,l.createElement(u.B,null,"Constraints"),l.createElement(u.cJ,null),"1 <= n <= 10",l.createElement(u.cJ,null),"1 <= ar[i] <= 10",l.createElement("sup",null,"10")),l.createElement(u.cJ,null),l.createElement(u.B,null,"Sample Input"),l.createElement(u.cJ,null),"5",l.createElement(u.cJ,null),l.createElement("span",null,"[1000000001, 1000000002, 1000000003, 1000000004, 1000000005]"),l.createElement(u.cJ,null),l.createElement(c.Z,null,l.createElement(u.cJ,null),l.createElement(u.B,null,"Output"),l.createElement(u.cJ,null),"5000000015")),l.createElement(c.Z,null,l.createElement(u.IU,null,"Code:"),l.createElement(r.Z,null,"function aVeryBigSum(ar) {\n  return ar.reduce((prevVal, val) => BigInt(prevVal) + BigInt(val));\n}")),l.createElement(c.Z,null,l.createElement(r.Z,null,"const val = aVeryBigSum([\n  1000000001, 1000000002, 1000000003, 1000000004, 1000000005\n]);\n\nconsole.log(val); //5000000015\n")))}},47565:(e,n,t)=>{t.r(n),t.d(n,{JS_CHALLENGE_CONTENT:()=>o});var l=t(67294),r=t(27456),a=(0,l.lazy)((function(){return t.e(1239).then(t.bind(t,76879))})),o=[{id:1,label:"Diagonal Difference",url:"diagonal-difference",content:l.createElement(a,null),lastUpdate:"10/20/2022",wordCount:245},{id:2,label:"A Very Big Sum",url:"a-very-big-sum",content:l.createElement(r.default,null),lastUpdate:"10/20/2022",wordCount:125}]},21640:(e,n,t)=>{t.r(n),t.d(n,{JS_CHALLENGE_MENU_ITEMS:()=>l,JS_FIRST_CHALLENGE:()=>r});var l=t(47565).JS_CHALLENGE_CONTENT.map((function(e){return{url:"".concat("/javascript/code-challenges/").concat(e.url),label:e.label}})),r=l[0]},85840:(e,n,t)=>{t.r(n),t.d(n,{default:()=>b});var l=t(67294),r=t(79655),a=t(89250),o=t(13462),c=t(66979),u=t(44127),i=t(1035),s=t(21640),d=(t(48711),t(10123)),m=t(40179),g=t(3267),p=function(){return(0,o.Z)(),l.createElement(c.Z,{menuLinks:m.JSLINK,menuItems:g.JS_ROUTE_PATH,breadcrumbLink:d.JSBreadcrumbLink,language:"JavaScript",customMenuContent:l.createElement(l.Fragment,null,l.createElement(u.Z,null,l.createElement(r.rU,{to:i.JS_BLOG_MENU_ITEMS[0].url},"JavaScript Blogs (",i.JS_BLOG_MENU_ITEMS.length,")")),l.createElement(u.Z,null,l.createElement(r.rU,{to:s.JS_CHALLENGE_MENU_ITEMS[0].url},"Code Challenges (",s.JS_CHALLENGE_MENU_ITEMS.length,")")))},l.createElement(a.j3,null))};const b=(0,l.memo)(p)},10123:(e,n,t)=>{t.r(n),t.d(n,{JSBreadcrumbLink:()=>l});var l=[{label:"Home",link:"/"},{label:"JavaScript",link:"/javascript/home"}]},3267:(e,n,t)=>{t.r(n),t.d(n,{JS_PRIMARY_ROUTES:()=>o,JS_ROUTE_PATH:()=>a,JS_routePrefix:()=>r,getJSGroupedMenu:()=>c});var l=t(52100),r="/javascript/",a=[{url:"".concat(r,"introduction"),label:"Introduction",group:"Introduction"},{url:"".concat(r,"history"),label:"History",group:"Introduction"},{url:"".concat(r,"include-code"),label:"Including Scripts",group:"Introduction"},{url:"".concat(r,"console"),label:"Console",group:"Introduction"},{url:"".concat(r,"data-types"),label:"Data types",group:"Fundamental Concepts"},{url:"".concat(r,"grammer"),label:"Grammer and Types",group:"Fundamental Concepts"},{url:"".concat(r,"operators"),label:"Operators",group:"Fundamental Concepts"},{url:"".concat(r,"control-structures"),label:"Control Structures",group:"Fundamental Concepts"},{url:"".concat(r,"objects"),label:"Objects",group:"Fundamental Concepts"},{url:"".concat(r,"arrays"),label:"Arrays",group:"Fundamental Concepts"},{url:"".concat(r,"functions"),label:"Functions",group:"Fundamental Concepts"},{url:"".concat(r,"closures"),label:"Closures",group:"Advanved Concepts"},{url:"".concat(r,"arrow-functions"),label:"Arrow Functions",group:"Advanved Concepts"},{url:"".concat(r,"modules"),label:"Modules",group:"Advanved Concepts"},{url:"".concat(r,"this-keyword"),label:"this Keyword",group:"Advanved Concepts"},{url:"".concat(r,"class-keyword"),label:"Class",group:"Advanved Concepts"},{url:"".concat(r,"prototype-chain"),label:"Prototype Chain",group:"Advanved Concepts"},{url:"".concat(r,"strict-mode"),label:"Strict Mode",group:"Advanved Concepts"},{url:"".concat(r,"hoisting"),label:"Hoisting",group:"Advanved Concepts"},{url:"".concat(r,"exception-handling"),label:"Exception Handling",group:"Advanved Concepts"},{url:"".concat(r,"iterators-and-generators"),label:"Iterators and Generators",group:"Advanved Concepts"}],o={HOME_PAGE:{url:"/javascript/home",label:"React"},ARRAY:"".concat(r,"arrays"),STRING:"".concat(r,"data-types?qtext=String"),DEMO:{url:"javascript/demoes",label:"JavaScript Demoes"}},c=function(){return(0,l.hw)(a)}},74214:(e,n,t)=>{t.d(n,{Z:()=>J});var l=t(4942),r=t(94184),a=t.n(r),o=t(67294),c=t(17606),u=t(83819),i=t(28949),s=t(93379),d=t.n(s),m=t(7795),g=t.n(m),p=t(90569),b=t.n(p),E=t(3565),h=t.n(E),v=t(19216),f=t.n(v),k=t(44589),S=t.n(k),y=t(62428),_={};_.styleTagTransform=S(),_.setAttributes=h(),_.insert=b().bind(null,"head"),_.domAPI=g(),_.insertStyleElement=f(),d()(y.Z,_),y.Z&&y.Z.locals&&y.Z.locals;var C=function(e){var n,t=e.children,r=e.language,s=void 0===r?"typescript":r,d=e.theme,m=e.showLineNumbers,g=void 0!==m&&m,p=e.codeBlock,b=void 0!==p&&p,E=e.highlight,h=e.copyBtn,v=void 0===h||h,f=(0,o.useContext)(i.I),k=a()((n={},(0,l.Z)(n,"".concat(u.HL,"-code"),!0),(0,l.Z)(n,"".concat(u.HL,"-code-no-copy-btn"),!v),n));return o.createElement("div",{className:k,style:{textAlign:"left"}},o.createElement(c.Z1,{text:t,language:s,showLineNumbers:g,theme:function(){switch(d){case"dracula":return c.cL;case"anOldHope":return c.dw;case"github":return c.bW;default:return f.theme===u.bF.DARK_THEME?c.g9:c.dw}}(),wrapLines:!0,codeBlock:b,highlight:E}))};const J=(0,o.memo)(C)},44127:(e,n,t)=>{t.d(n,{Z:()=>y});var l=t(4942),r=t(94184),a=t.n(r),o=t(67294),c=t(83819),u=t(93379),i=t.n(u),s=t(7795),d=t.n(s),m=t(90569),g=t.n(m),p=t(3565),b=t.n(p),E=t(19216),h=t.n(E),v=t(44589),f=t.n(v),k=t(81997),S={};S.styleTagTransform=f(),S.setAttributes=b(),S.insert=g().bind(null,"head"),S.domAPI=d(),S.insertStyleElement=h(),i()(k.Z,S),k.Z&&k.Z.locals&&k.Z.locals;const y=function(e){var n,t=e.children,r=e.themeStyle,u=void 0===r?"":r,i=a()((n={},(0,l.Z)(n,"".concat(c.HL,"-box"),!0),(0,l.Z)(n,"theme-".concat(u),u),n));return o.createElement("div",{className:i},t)}},30849:(e,n,t)=>{t.d(n,{Z:()=>c});var l=t(8081),r=t.n(l),a=t(23645),o=t.n(a)()(r());o.push([e.id,".intro-headline{background-color:#6e45e2;height:500px}.intro-headline h1{color:#f8f8f8}.mobile-menu-wrapper{z-index:9}\n",""]);const c=o},62428:(e,n,t)=>{t.d(n,{Z:()=>c});var l=t(8081),r=t.n(l),a=t(23645),o=t.n(a)()(r());o.push([e.id,".ui-geeks-code{margin-top:1.5rem;margin-bottom:1.5rem}.ui-geeks-code-no-copy-btn button{display:none}\n",""]);const c=o},81997:(e,n,t)=>{t.d(n,{Z:()=>c});var l=t(8081),r=t.n(l),a=t(23645),o=t.n(a)()(r());o.push([e.id,".ui-geeks-box{padding:10px;border-radius:4px;background-color:#eeeef0;border:1px solid #e1e1e1;margin-bottom:10px}.ui-geeks-box:hover{background-color:#e1e1e1}.ui-geeks-box a{text-decoration:none;color:#626262}.ui-geeks-box a:hover{color:#6e45e2}.ui-geeks-box.theme-green{background-color:#389e7f !important}.ui-geeks-box.theme-green:hover{background-color:#33cc7b !important}.ui-geeks-box.theme-green a{color:#f8f8f8}.ui-geeks-box.theme-orange{background-color:#fb4f4f !important}.ui-geeks-box.theme-orange:hover{background-color:#ff5e0e !important}.ui-geeks-box.theme-orange a{color:#f8f8f8}.ui-geeks-box.theme-blue{background-color:#0e76a8 !important}.ui-geeks-box.theme-blue:hover{background-color:#1557bf !important}.ui-geeks-box.theme-blue a{color:#f8f8f8}.ui-geeks-box.theme-yellow{background-color:#effa85 !important}.ui-geeks-box.theme-yellow:hover{background-color:#d4d21d !important}.ui-geeks-box.theme-yellow a{color:#46465e}.theme-dark .ui-geeks-box{background-color:#343434;border:1px solid #343434}.theme-dark .ui-geeks-box:hover{background-color:#262626}.theme-dark .ui-geeks-box a{color:#dedede}.theme-dark .ui-geeks-box.theme-yellow a{color:#121212 !important}\n",""]);const c=o},48711:(e,n,t)=>{t.r(n),t.d(n,{default:()=>h});var l=t(93379),r=t.n(l),a=t(7795),o=t.n(a),c=t(90569),u=t.n(c),i=t(3565),s=t.n(i),d=t(19216),m=t.n(d),g=t(44589),p=t.n(g),b=t(30849),E={};E.styleTagTransform=p(),E.setAttributes=s(),E.insert=u().bind(null,"head"),E.domAPI=o(),E.insertStyleElement=m(),r()(b.Z,E);const h=b.Z&&b.Z.locals?b.Z.locals:void 0}}]);