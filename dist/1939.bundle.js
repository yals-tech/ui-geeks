"use strict";(self.webpackChunkui_geeks_in_web=self.webpackChunkui_geeks_in_web||[]).push([[1939],{91939:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var l=n(67294),a=n(74214),u=n(91573),c=n(87398),r=n(68947),o=n(12050),i=n(9167);const s=function(){return l.createElement(l.Fragment,null,l.createElement(c.Z,{as:"h2"},"Default Values"),l.createElement(r.Z,null,"In the React rendering lifecycle, the ",l.createElement(i.BI,null,"value")," attribute on form elements will override the value in the DOM. With an ",l.createElement(o.Z,null),l.createElement(i.I,null,"uncontrolled component"),", we often want React to specify the",l.createElement(i.B,null,"initial value"),", but leave subsequent updates ",l.createElement(i.I,null,"uncontrolled"),". In such cases, we can add ",l.createElement(i.BI,null,"defaultValue")," attribute instead of",l.createElement(i.BI,null,"value"),". Changing the value of ",l.createElement(i.BI,null,"defaultValue")," after a component has mounted will not cause any update of the value in the DOM."),l.createElement(r.Z,null,"Similarly, ",l.createElement(i.B,null,"checkbox"),", ",l.createElement(i.B,null,"radio")," elements have ",l.createElement(o.Z,null),l.createElement(i.BI,null,"defaultChecked")," attributes."),l.createElement(a.Z,{language:u.r.JSX},'const DefaultValueComponent = () => {\n  const textInput = useRef();\n  const checkboxInput = useRef();\n\n  useEffect(() =>  {\n    textInput.current.focusTextInput();\n  },[ ]);\n\n  return <div>\n    <input type="text"\n      ref={this.textInput}\n      defaultValue="Hello" />\n\n    <input type="checkbox"\n      ref={this.checkboxInput} \n      defaultChecked={true} />\n  </div>\n}'))}},74214:(e,t,n)=>{n.d(t,{Z:()=>x});var l=n(4942),a=n(94184),u=n.n(a),c=n(67294),r=n(17606),o=n(83819),i=n(28949),s=n(93379),d=n.n(s),m=n(7795),h=n.n(m),p=n(90569),f=n.n(p),b=n(3565),g=n.n(b),v=n(19216),E=n.n(v),I=n(44589),k=n.n(I),y=n(62428),w={};w.styleTagTransform=k(),w.setAttributes=g(),w.insert=f().bind(null,"head"),w.domAPI=h(),w.insertStyleElement=E(),d()(y.Z,w),y.Z&&y.Z.locals&&y.Z.locals;var Z=function(e){var t,n=e.children,a=e.language,s=void 0===a?"typescript":a,d=e.theme,m=e.showLineNumbers,h=void 0!==m&&m,p=e.codeBlock,f=void 0!==p&&p,b=e.highlight,g=e.copyBtn,v=void 0===g||g,E=(0,c.useContext)(i.I),I=u()((t={},(0,l.Z)(t,"".concat(o.HL,"-code"),!0),(0,l.Z)(t,"".concat(o.HL,"-code-no-copy-btn"),!v),t));return c.createElement("div",{className:I,style:{textAlign:"left"}},c.createElement(r.Z1,{text:n,language:s,showLineNumbers:h,theme:function(){switch(d){case"dracula":return r.cL;case"anOldHope":return r.dw;case"github":return r.bW;default:return E.theme===o.bF.DARK_THEME?r.g9:r.dw}}(),wrapLines:!0,codeBlock:f,highlight:b}))};const x=(0,c.memo)(Z)},91573:(e,t,n)=>{n.d(t,{r:()=>l});var l={JavaScript:"javascript",TypeScript:"typescript",HTML:"html",CSS:"css",JSX:"jsx"}},62428:(e,t,n)=>{n.d(t,{Z:()=>r});var l=n(8081),a=n.n(l),u=n(23645),c=n.n(u)()(a());c.push([e.id,".ui-geeks-code{margin-top:1.5rem;margin-bottom:1.5rem}.ui-geeks-code-no-copy-btn button{display:none}\n",""]);const r=c}}]);