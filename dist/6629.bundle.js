"use strict";(self.webpackChunkui_geeks_in_web=self.webpackChunkui_geeks_in_web||[]).push([[6629],{46629:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var l=n(67294),r=n(74214),a=n(87398),c=n(68947),o=n(12050),i=n(9167);const s=function(){return l.createElement(l.Fragment,null,l.createElement(a.Z,{as:"h4"},"slice()"),l.createElement(c.Z,null,"Returns a sub-array of the array. ",l.createElement(i.I,null,"slice()")," method returns a",l.createElement(o.Z,null)," ",l.createElement(i.I,null,"shallow copy")," ",l.createElement(o.Z,null),"of the portion of an array into a new array, selected from",l.createElement(i.B,null,'"start"')," index to ",l.createElement(i.B,null,'"end"'),' index ("end" index not included). The array will not be modified.'),l.createElement(c.Z,null,l.createElement(i.I,null,"Syntax:"),l.createElement(i.cJ,null),"slice();",l.createElement(i.cJ,null),"slice(",l.createElement(i.B,null,"start"),");",l.createElement(i.cJ,null),"slice(",l.createElement(i.B,null,"start, end"),");"),l.createElement(c.Z,null,l.createElement(i.B,null,"start:")," Zero based index of the starting items for the extraction."),l.createElement(r.Z,null,'let arr = ["cat", "dog", "lion", "fox", "tiger"];\narr.slice(2)  // ["lion", "fox", "tiger"]\n// Extracting all elements from index 2 to end of the array.\n'),l.createElement(c.Z,null,"A negative index can be used, indicating an offset from the end of the array."),l.createElement(r.Z,null,'let arr = ["cat", "dog", "lion", "fox", "tiger", "elephant"];\narr.slice(-1);  // ["elephant"]\n// Extracting one element from the end of the array,\n// i.e., extracting the last item of the array.'),l.createElement(c.Z,null,"If ",l.createElement(i.B,null,"start")," is undefined, slice starts from index 0."),l.createElement(r.Z,null,'let arr = ["cat", "dog", "lion", "fox", "tiger", "elephant"];\narr.slice();  // ["cat", "dog", "lion", "fox", "tiger", "elephant"]'),l.createElement(c.Z,null,"If ",l.createElement(i.B,null,"start")," is greater than the index range of the array, an empty array is returned."),l.createElement(r.Z,null,'let arr = ["cat", "dog", "lion", "fox", "tiger", "elephant"];\narr.slice(10);  // [ ]'),l.createElement(i.cJ,null),l.createElement(c.Z,null,l.createElement(i.B,null,"end:")," Index of the first element to exclude from the returned array. ",l.createElement(i.I,null,"slice()")," extracts up to but not including the ",l.createElement(i.B,null,'"end"'),l.createElement(o.Z,null)," index."),l.createElement(r.Z,null,'let arr = ["cat", "dog", "lion", "fox", "tiger"];\narr.slice(1, 4) // ["dog", "lion", "fox"]\n// Extracts elements from index 1 up to index 3 (end index - 1).'),l.createElement(c.Z,null,"A negative index can be used, indicating an offset from the end of the array."),l.createElement(r.Z,null,'let arr = ["cat", "dog", "lion", "fox", "tiger"];\narr.slice(1, -2)  // ["dog", "lion"]\n// Extracting from start index 1 to excluding the last 2 elements from the end.'),l.createElement(c.Z,null,"If ",l.createElement(i.B,null,"end")," is omitted, ",l.createElement(i.I,null,"slice()")," extracts through end of the array, i.e., ",l.createElement(i.I,null,"arr.length"),"."),l.createElement(r.Z,null,'let arr = ["cat", "dog", "lion", "fox", "tiger"];\narr.slice(2)  // ["lion", "fox", "tiger"]\n// Extracting from start index 2 to end of the array.'),l.createElement(c.Z,null,"If the ",l.createElement(i.B,null,"end")," is greater than the length of the array,",l.createElement(i.I,null,"slice()")," extracts through the end of the array i.e., end becomes the length of the array."),l.createElement(r.Z,null,'let arr = ["cat", "dog", "lion", "fox", "tiger"];\narr.slice(2, 10)  // ["lion", "fox", "tiger"]\n'))}},74214:(e,t,n)=>{n.d(t,{Z:()=>v});var l=n(4942),r=n(94184),a=n.n(r),c=n(67294),o=n(17606),i=n(83819),s=n(28949),u=n(93379),d=n.n(u),m=n(7795),h=n.n(m),g=n(90569),f=n.n(g),E=n(3565),x=n.n(E),Z=n(19216),y=n.n(Z),p=n(44589),b=n.n(p),B=n(62428),I={};I.styleTagTransform=b(),I.setAttributes=x(),I.insert=f().bind(null,"head"),I.domAPI=h(),I.insertStyleElement=y(),d()(B.Z,I),B.Z&&B.Z.locals&&B.Z.locals;var w=function(e){var t,n=e.children,r=e.language,u=void 0===r?"typescript":r,d=e.theme,m=e.showLineNumbers,h=void 0!==m&&m,g=e.codeBlock,f=void 0!==g&&g,E=e.highlight,x=e.copyBtn,Z=void 0===x||x,y=(0,c.useContext)(s.I),p=a()((t={},(0,l.Z)(t,"".concat(i.HL,"-code"),!0),(0,l.Z)(t,"".concat(i.HL,"-code-no-copy-btn"),!Z),t));return c.createElement("div",{className:p,style:{textAlign:"left"}},c.createElement(o.Z1,{text:n,language:u,showLineNumbers:h,theme:function(){switch(d){case"dracula":return o.cL;case"anOldHope":return o.dw;case"github":return o.bW;default:return y.theme===i.bF.DARK_THEME?o.g9:o.dw}}(),wrapLines:!0,codeBlock:f,highlight:E}))};const v=(0,c.memo)(w)},62428:(e,t,n)=>{n.d(t,{Z:()=>o});var l=n(8081),r=n.n(l),a=n(23645),c=n.n(a)()(r());c.push([e.id,".ui-geeks-code{margin-top:1.5rem;margin-bottom:1.5rem}.ui-geeks-code-no-copy-btn button{display:none}\n",""]);const o=c}}]);