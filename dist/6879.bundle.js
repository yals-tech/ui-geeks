"use strict";(self.webpackChunkui_geeks_in=self.webpackChunkui_geeks_in||[]).push([[6879,1239],{76879:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});var l=t(67294),a=t(74214),r=t(59044),c=t(87398),i=t(68947),u=t(9167);const m=function(){return l.createElement(r.Z,null,l.createElement(c.Z,{as:"h1"},"Get Diagonal Difference"),l.createElement(i.Z,null,"Given a square matrix, calculate the absolute difference between the sums of its diagonals."),l.createElement(i.Z,null,"For example, the square matrix is shown below:"),l.createElement(i.Z,null,"1",l.createElement(u.Ai,null),"2",l.createElement(u.Ai,null),"3",l.createElement(u.cJ,null),"4",l.createElement(u.Ai,null),"5",l.createElement(u.Ai,null),"6",l.createElement(u.cJ,null),"9",l.createElement(u.Ai,null),"8",l.createElement(u.Ai,null),"9"),l.createElement(i.Z,null,"The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3 + 9 = 17. Their absolute difference is |15 - 17| = 2.",l.createElement(i.Z,null,l.createElement(u.cJ,null),l.createElement(u.B,null,"Function description"),l.createElement(i.Z,null,"Complete the function in the editor below.")),"diagonalDifference takes the following parameter:",l.createElement(u.cJ,null),l.createElement(u.GS,{unOrdered:!0,items:[{label:"int arr[n][m]: an array of integers"}]}),l.createElement(u.cJ,null),l.createElement(u.B,null,"Return"),l.createElement(u.GS,{unOrdered:!0,items:[{label:"int: the absolute diagonal difference"}]}),l.createElement(u.cJ,null),l.createElement(u.B,null,"Input Format"),l.createElement(u.cJ,null),"The first line contains a single integer, ",l.createElement(u.BI,null,"n"),", the number of rows and columns in the square matrix ",l.createElement(u.I,null,"arr"),". Each of the next lines describes a row, ",l.createElement(u.I,null,"arr[i]"),", and consists of ",l.createElement(u.I,null,"n")," space-separated integers ",l.createElement(u.I,null,"arr[i][j]"),".",l.createElement(u.cJ,null),l.createElement(u.B,null,"Constraints"),l.createElement(u.GS,{unOrdered:!0,items:[{label:"-100 <= arr[i][j] <= 100"}]}),l.createElement(u.cJ,null),l.createElement(u.B,null,"Output Format"),l.createElement(u.cJ,null),"Return the absolute difference between the sums of the matrix's two diagonals as a single integer.",l.createElement(u.cJ,null),l.createElement(u.cJ,null),l.createElement(i.Z,null,l.createElement(u.B,null,"Sample Input"),l.createElement(u.cJ,null),"3",l.createElement(u.cJ,null),l.createElement(u.cJ,null),"8",l.createElement(u.Ai,null),"2",l.createElement(u.Ai,null),"4",l.createElement(u.cJ,null),"4",l.createElement(u.Ai,null),"5",l.createElement(u.Ai,null),"6",l.createElement(u.cJ,null),"2",l.createElement(u.Ai,null),"8",l.createElement(u.Ai,null),"-12",l.createElement(u.cJ,null),l.createElement(u.cJ,null),l.createElement(u.B,null,"Sample Output"),l.createElement(u.cJ,null),l.createElement(u.B,null,"10"))),l.createElement(i.Z,null,l.createElement(u.IU,null,"Code:"),l.createElement(a.Z,null,"function diagonalDifference(arr) {\n  const arrSize = arr.length;\n  let primaryDiagonalSum = 0;\n  let secondaryDiagonalSum = 0;\n\n  for (let i = 0; i <= arrSize; i++) {\n    const arrItem = arr[i];\n    for (let j = 0; j < arrSize; j++) {\n      if (i === j) {\n        primaryDiagonalSum += arrItem[j];\n      }\n\n      if (j === arrSize - 1 - i) {\n        secondaryDiagonalSum += arrItem[j];\n      }\n    }\n  }\n\n  return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);\n}\n")),l.createElement(i.Z,null,l.createElement(a.Z,null,"const val = diagonalDifference([\n  [8, 2, 4],\n  [4, 5, 6],\n  [2, 8, -12]\n]);\n\nconsole.log(val); // 10\n")))}},74214:(e,n,t)=>{t.d(n,{Z:()=>S});var l=t(4942),a=t(94184),r=t.n(a),c=t(67294),i=t(17606),u=t(83819),m=t(28949),o=t(93379),s=t.n(o),E=t(7795),d=t.n(E),g=t(90569),h=t.n(g),f=t(3565),p=t.n(f),b=t(19216),Z=t.n(b),J=t(44589),v=t.n(J),A=t(62428),w={};w.styleTagTransform=v(),w.setAttributes=p(),w.insert=h().bind(null,"head"),w.domAPI=d(),w.insertStyleElement=Z(),s()(A.Z,w),A.Z&&A.Z.locals&&A.Z.locals;var y=function(e){var n,t=e.children,a=e.language,o=void 0===a?"typescript":a,s=e.theme,E=e.showLineNumbers,d=void 0!==E&&E,g=e.codeBlock,h=void 0!==g&&g,f=e.highlight,p=e.copyBtn,b=void 0===p||p,Z=(0,c.useContext)(m.I),J=r()((n={},(0,l.Z)(n,"".concat(u.HL,"-code"),!0),(0,l.Z)(n,"".concat(u.HL,"-code-no-copy-btn"),!b),n));return c.createElement("div",{className:J,style:{textAlign:"left"}},c.createElement(i.Z1,{text:t,language:o,showLineNumbers:d,theme:function(){switch(s){case"dracula":return i.cL;case"anOldHope":return i.dw;case"github":return i.bW;default:return Z.theme===u.bF.DARK_THEME?i.g9:i.dw}}(),wrapLines:!0,codeBlock:h,highlight:f}))};const S=(0,c.memo)(y)},59044:(e,n,t)=>{t.d(n,{Z:()=>w});var l=t(4942),a=t(94184),r=t.n(a),c=t(67294),i=t(83819),u=t(93379),m=t.n(u),o=t(7795),s=t.n(o),E=t(90569),d=t.n(E),g=t(3565),h=t.n(g),f=t(19216),p=t.n(f),b=t(44589),Z=t.n(b),J=t(94364),v={};v.styleTagTransform=Z(),v.setAttributes=h(),v.insert=d().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=p(),m()(J.Z,v),J.Z&&J.Z.locals&&J.Z.locals;var A=function(e){var n=e.children,t=r()((0,l.Z)({},"".concat(i.HL,"-container"),!0));return c.createElement("div",{className:t},n)};const w=(0,c.memo)(A)},62428:(e,n,t)=>{t.d(n,{Z:()=>i});var l=t(8081),a=t.n(l),r=t(23645),c=t.n(r)()(a());c.push([e.id,".ui-geeks-code{margin-top:1.5rem;margin-bottom:1.5rem}.ui-geeks-code-no-copy-btn button{display:none}\n",""]);const i=c},94364:(e,n,t)=>{t.d(n,{Z:()=>i});var l=t(8081),a=t.n(l),r=t(23645),c=t.n(r)()(a());c.push([e.id,".ui-geeks-container{padding:1rem}\n",""]);const i=c}}]);