"use strict";(self.webpackChunkui_geeks_in=self.webpackChunkui_geeks_in||[]).push([[1155],{91155:(e,n,t)=>{t.r(n),t.d(n,{ReactHomeDemoStateUpdateCode:()=>g,default:()=>m});var a=t(4942),l=t(70885),r=t(67294),o=t(31555),u=t(34051),s=t(68947),c=t(9167),i=t(14271);function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,a.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}const m=function(){var e=(0,r.useState)({language:"React",version:16}),n=(0,l.Z)(e,2),t=n[0],p=n[1],m=function(e){var n=e.target,t=n.value,l=n.id;p((function(e){return d(d({},e),{},(0,a.Z)({},l,t))}))};return r.createElement(r.Fragment,null,r.createElement(s.Z,null,r.createElement(c.B,null,"Controlled Component State Update")),r.createElement(u.Z,null,r.createElement(o.Z,{xs:6,md:6,sm:6,className:"pe-2"},r.createElement(i.Z,{id:"language",placeHolder:"Enter value...",value:t.language,label:"Enter Language",onChange:m})),r.createElement(o.Z,{xs:6,md:6,sm:6},r.createElement(i.Z,{id:"version",placeHolder:"Enter version...",value:t.version,label:"Enter Version",type:"number",onChange:m}))),r.createElement(c.cJ,null),r.createElement(c.B,null,"Form Values:"),r.createElement(c.cJ,null),r.createElement("span",{className:"text-sm"},JSON.stringify(t,null," ")),r.createElement(c.cJ,null))};var g="const ReactStateUpdateDemo = () => {\n  const [inputValue, setInputValue] = useState({\n    language: 'React',\n    version: 16\n  });\n\n  const onHandleChange = (evt: any) => {\n    const { value, id } = evt.target;\n    setInputValue((prev: any) => {\n      return {\n        ...prev,\n        [id]: value\n      };\n    });\n  };\n\n  return (\n    <>\n      <h6>Controlled Component State Update</h6>\n      <label>Enter Language</label>\n      <input  \n        id='language'\n        placeHolder='Enter value...'\n        value={inputValue.language}\n        onChange={onHandleChange}\n      />\n\n      <label>Enter Version</label>\n      <input  \n        id='version'\n        placeHolder='Enter version...'\n        value={inputValue.version}\n        type='number'\n        onChange={onHandleChange}\n      />\n      \n      <i>Form Values: </i>\n      <span>\n        <b>\n          {JSON.stringify(inputValue, null, ' ')}\n        </b>\n      </span>\n    </>\n  );\n};\n"},14271:(e,n,t)=>{t.d(n,{Z:()=>k});var a=t(4942),l=t(94184),r=t.n(l),o=t(67294),u=t(90677),s=t(46431),c=t(83819),i=t(93379),p=t.n(i),d=t(7795),m=t.n(d),g=t(90569),b=t.n(g),v=t(3565),f=t.n(v),E=t(19216),h=t.n(E),y=t(44589),Z=t.n(y),O=t(49982),C={};C.styleTagTransform=Z(),C.setAttributes=f(),C.insert=b().bind(null,"head"),C.domAPI=m(),C.insertStyleElement=h(),p()(O.Z,C),O.Z&&O.Z.locals&&O.Z.locals;const k=function(e){var n=e.id,t=e.value,l=e.type,i=void 0===l?"text":l,p=e.label,d=e.placeHolder,m=e.icon,g=e.onChange,b=e.onKeyUp,v=r()((0,a.Z)({},"".concat(c.HL,"-input"),!0));return o.createElement("div",{className:v},p&&o.createElement("label",{className:"input-label",htmlFor:n},p),o.createElement(s.Z,null,o.createElement(u.Z.Control,{id:n,type:i,placeholder:d,"aria-label":n,"aria-describedby":n,onChange:g&&g,onKeyUp:b&&b,value:t,size:"sm"}),m&&o.createElement(s.Z.Text,{id:"search-icon"},m)))}},49982:(e,n,t)=>{t.d(n,{Z:()=>u});var a=t(8081),l=t.n(a),r=t(23645),o=t.n(r)()(l());o.push([e.id,".ui-geeks-input .input-group-text{border:1px solid #6e45e2}.ui-geeks-input .form-control{border-radius:2px;min-height:25px;height:25px}.ui-geeks-input .form-control:focus{border:1px solid #6e45e2}.ui-geeks-input .input-label{display:block;color:#626262;margin-bottom:5px;cursor:pointer}.theme-dark .ui-geeks-input .input-label{color:#dedede}\n",""]);const u=o},34051:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(94184),l=t.n(a),r=t(67294),o=t(76792),u=t(85893);const s=r.forwardRef((({bsPrefix:e,className:n,as:t="div",...a},r)=>{const s=(0,o.vE)(e,"row"),c=(0,o.pi)(),i=(0,o.zG)(),p=`${s}-cols`,d=[];return c.forEach((e=>{const n=a[e];let t;delete a[e],null!=n&&"object"==typeof n?({cols:t}=n):t=n;const l=e!==i?`-${e}`:"";null!=t&&d.push(`${p}${l}-${t}`)})),(0,u.jsx)(t,{ref:r,...a,className:l()(n,s,...d)})}));s.displayName="Row";const c=s}}]);