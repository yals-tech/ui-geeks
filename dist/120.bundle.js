"use strict";(self.webpackChunkui_geeks_in_web=self.webpackChunkui_geeks_in_web||[]).push([[120,9796,6544],{9796:(e,n,l)=>{l.r(n),l.d(n,{default:()=>i});var t=l(67294),a=l(74214),s=l(87398),r=l(68947),c=l(12050),u=l(9167);const i=function(){return t.createElement(t.Fragment,null,t.createElement(r.Z,null,"The ",t.createElement(u.BI,null,"extends")," ",t.createElement(u.I,null,"keyword")," is used to create a ",t.createElement(u.I,null,"class")," as a child of another ",t.createElement(u.I,null,"class"),", this mechanism is called",t.createElement(u.B,null,"inheritance"),". If there's a",t.createElement(c.Z,null)," ",t.createElement(u.I,null,"constructor")," present in the subclass, it needs to first call ",t.createElement(u.I,null,"super()"),t.createElement(c.Z,null)," before using ",t.createElement(u.BI,null,"this"),"."),t.createElement(r.Z,null,t.createElement(s.Z,{as:"h3"},"Base/Parent/Inherited Class"),t.createElement(r.Z,null,"This is the ",t.createElement(u.I,null,"class")," which will be used as a base for creating child",t.createElement(u.I,null,"classes"),". The basic role of ",t.createElement(u.BI,null,"base class")," is to contain",t.createElement(c.Z,null)," ",t.createElement(u.I,null,"common functionalities"),", which can be used by",t.createElement(u.BI,null,"multiple child classes"),"."),t.createElement(a.Z,null,"class Vehicle {\n  constructor(vehicleType, make, wheels) {\n    this.vehicleType = vehicleType;\n    this.make = make;\n    this.wheels = wheels;\n  }\n\n  showVehicleInfo() { \t\n    console.log(`${this.make} ${this.vehicleType} have ${this.wheels} wheels`);\n  }\n}\n")),t.createElement(r.Z,null,t.createElement(s.Z,{as:"h3"},"Child/Derived Class"),t.createElement(r.Z,null,"This is the ",t.createElement(u.I,null,"class")," which ",t.createElement(u.BI,null,"extends")," the functionality of the ",t.createElement(u.I,null,"base class"),". The role of a ",t.createElement(u.I,null,"derived class")," is to perform more specialized tasks. Derived ",t.createElement(u.I,null,"class"),t.createElement(u.B,null,"uses/overrides")," the ",t.createElement(u.I,null,"base class")," members, based on the need."),t.createElement(r.Z,null,t.createElement(u.BI,null,"super()"),": Calling ",t.createElement(u.I,null,"super()")," is important. It calls the parent class ",t.createElement(u.I,null,"constructor")," with the list of passed ",t.createElement(c.Z,null),t.createElement(u.I,null,"arguments"),". The ",t.createElement(u.BI,null,"super")," can also be used to call",t.createElement(u.B,null,"public")," ",t.createElement(u.I,null,"properties/methods")," of the parent ",t.createElement(u.I,null,"class"),"."),t.createElement(r.Z,null,t.createElement(u.IU,null,"Example 1:"),t.createElement(r.Z,null,"In below example, the ",t.createElement(u.BI,null,"showVehicleInfo()")," is not defined in",t.createElement(u.BI,null,"Bike class"),", but still this works, because it was ",t.createElement(c.Z,null),t.createElement(u.I,null,"inherited")," from the base class ",t.createElement(u.BI,null,"Vehicle"),"."),t.createElement(a.Z,null,'class Bike extends Vehicle {\n  constructor(make) {\n    super("Bike, make, 2);\n  }\n}\n\nconst bike = new Bike("Honda");\nbike.showVehicleInfo()  // "Honda Bike have 2 wheels"')),t.createElement(r.Z,null,t.createElement(u.IU,null,"Example 2:"),t.createElement(r.Z,null,"In below example, the ",t.createElement(u.BI,null,"showVehicleInfo()")," is not defined in",t.createElement(u.BI,null,"Car class"),", but still this works, because it was ",t.createElement(c.Z,null),t.createElement(u.I,null,"inherited")," from the base class ",t.createElement(u.BI,null,"Vehicle"),"."),t.createElement(a.Z,null,'class Car extends Vehicle {\n  constructor(make) {\n    super("Car", make, 4);\n  }\n}\n\nconst car = new Car("Maruti");\ncar.showVehicleInfo() // "Maruti Car have 4 wheels"'))))}},10120:(e,n,l)=>{l.r(n),l.d(n,{default:()=>u});var t=l(67294),a=l(87398),s=l(68947),r=l(9796),c=l(36544);const u=function(){return t.createElement(t.Fragment,null,t.createElement(a.Z,{as:"h2"},"Inheritance"),t.createElement(s.Z,null,t.createElement(r.default,null),t.createElement(c.default,null)))}},36544:(e,n,l)=>{l.r(n),l.d(n,{default:()=>i});var t=l(67294),a=l(74214),s=l(87398),r=l(68947),c=l(12050),u=l(9167);const i=function(){return t.createElement(t.Fragment,null,t.createElement(s.Z,{as:"h2"},"MIX-INS"),t.createElement(r.Z,null,t.createElement(u.B,null,"Abstract classes")," or ",t.createElement(u.B,null,"mix-ins")," are templates for classes. Class inheritance has a limitation that a ",t.createElement(u.I,null,"class")," can only",t.createElement(c.Z,null)," ",t.createElement(u.I,null,"extend")," one ",t.createElement(u.I,null,"class"),". A function with a super class as input and a subclass extending that superclass as output can be used to implement ",t.createElement(u.I,null,"mix-ins")," in JavaScript."),t.createElement(r.Z,null,t.createElement(u.IU,null,"Example:"),t.createElement(a.Z,null,"class BaseClass { \n  constructor(numArr) {\n    this.numArr = numArr;\n  }\n}\n"),t.createElement(a.Z,null,"const sumMixin = (Base) =>  class extends Base {\n  constructor(numArr) { super(numArr); }\n  sum() { return this.numArr.reduce((a, b) => a + b); }\n};"),t.createElement(a.Z,null,"const averageMixin = (Base) =>  class extends Base {\n  constructor(numArr) { super(numArr); }\n  average() { \n    return this.numArr.reduce((a, b) => a + b) / this.numArr.length; \n  }\n};\n"),t.createElement(a.Z,null,"class MathClass extends sumMixin(averageMixin(BaseClass)) { }\nconst math = new MathClass([2, 5, 6, 8]);\nmath.sum(); // 21\nmath.average(); // 5.25")))}},74214:(e,n,l)=>{l.d(n,{Z:()=>x});var t=l(4942),a=l(94184),s=l.n(a),r=l(67294),c=l(17606),u=l(83819),i=l(28949),m=l(93379),o=l.n(m),h=l(7795),E=l.n(h),d=l(90569),I=l.n(d),p=l(3565),b=l.n(p),Z=l(19216),f=l.n(Z),w=l(44589),B=l.n(w),g=l(62428),k={};k.styleTagTransform=B(),k.setAttributes=b(),k.insert=I().bind(null,"head"),k.domAPI=E(),k.insertStyleElement=f(),o()(g.Z,k),g.Z&&g.Z.locals&&g.Z.locals;var v=function(e){var n,l=e.children,a=e.language,m=void 0===a?"typescript":a,o=e.theme,h=e.showLineNumbers,E=void 0!==h&&h,d=e.codeBlock,I=void 0!==d&&d,p=e.highlight,b=e.copyBtn,Z=void 0===b||b,f=(0,r.useContext)(i.I),w=s()((n={},(0,t.Z)(n,"".concat(u.HL,"-code"),!0),(0,t.Z)(n,"".concat(u.HL,"-code-no-copy-btn"),!Z),n));return r.createElement("div",{className:w,style:{textAlign:"left"}},r.createElement(c.Z1,{text:l,language:m,showLineNumbers:E,theme:function(){switch(o){case"dracula":return c.cL;case"anOldHope":return c.dw;case"github":return c.bW;default:return f.theme===u.bF.DARK_THEME?c.g9:c.dw}}(),wrapLines:!0,codeBlock:I,highlight:p}))};const x=(0,r.memo)(v)},62428:(e,n,l)=>{l.d(n,{Z:()=>c});var t=l(8081),a=l.n(t),s=l(23645),r=l.n(s)()(a());r.push([e.id,".ui-geeks-code{margin-top:1.5rem;margin-bottom:1.5rem}.ui-geeks-code-no-copy-btn button{display:none}\n",""]);const c=r}}]);