"use strict";(self.webpackChunkui_geeks_in_web=self.webpackChunkui_geeks_in_web||[]).push([[9649,1214,9206,1224,4464,120,9796,6544,9399,8630],{71214:(e,t,l)=>{l.r(t),l.d(t,{default:()=>m});var n=l(67294),a=l(74214),s=l(87398),r=l(68947),c=l(12050),i=l(9167);const m=function(){return n.createElement(n.Fragment,null,n.createElement(s.Z,{as:"h2"},"constructor"),n.createElement(r.Z,null,"The ",n.createElement(i.I,null,"constructor")," method is a special method for creating and initializing an object created with a ",n.createElement(i.I,null,"class"),". There can be only one special method with the name ",n.createElement(i.B,null,'"constructor"')," in a ",n.createElement(i.I,null,"class"),". A ",n.createElement(i.I,null,"constructor")," can use ",n.createElement(i.BI,null,"super")," ",n.createElement(c.Z,null)," keyword to call the ",n.createElement(i.I,null,"constructor")," of the ",n.createElement(i.I,null,"base/super")," class."),n.createElement(a.Z,null,"class User {\n  constructor(firstName, lastName) {\n    this.firstName = firstName;\n    this.lastName = lastName;\n  }\n}\n"))}},19206:(e,t,l)=>{l.r(t),l.d(t,{default:()=>r});var n=l(67294),a=l(74214),s=l(87398);const r=function(){return n.createElement(n.Fragment,null,n.createElement(s.Z,{as:"h2"},"Class Declaration"),n.createElement(a.Z,null,'class User {\n  constructor(firstName, lastName) {\n    this.firstName = firstName;\n    this.lastName = lastName;\n  }\n\n  showName() {\n    console.log(this.firstName + "-" + this.lastName);\n  }\n}\n'))}},71224:(e,t,l)=>{l.r(t),l.d(t,{default:()=>m});var n=l(67294),a=l(74214),s=l(87398),r=l(68947),c=l(12050),i=l(9167);const m=function(){return n.createElement(n.Fragment,null,n.createElement(s.Z,{as:"h2"},"Class Expression"),n.createElement(r.Z,null,"Class expressions can be named or unnamed."),n.createElement(i.IU,null,"Example of named class expression:"),n.createElement(a.Z,null,"const User = class User {\n  constructor(firstName, lastName) {\n    this.firstName = firstName;\n    this.lastName = lastName;\n  }\n  showName() {\n    console.log(this.firstName + “-” + this.lastName);\n  }\n}\n"),n.createElement(r.Z,null,n.createElement(i.IU,null,"Example of unnamed class expression:"),n.createElement(a.Z,null,'const User = class {\n  constructor(firstName, lastName) {\n    this.firstName = firstName;\n    this.lastName = lastName;\n  }\n  showName() {\n    console.log(this.firstName + "-" + this.lastName);\n  }\n}\n')),n.createElement(r.Z,null,"Class definition is ",n.createElement(i.BI,null,"not hoisted"),", which means ",n.createElement(i.I,null,"class")," must be defined before they are constructed with the ",n.createElement(i.BI,null,"new")," operator."),n.createElement(a.Z,null,'const usr = new User("JavaScript", "Language"); // Reference Error\nclass User { /*.......... */ }\n'),n.createElement(i.cJ,null),n.createElement(r.Z,null,"The body of a class is executed in ",n.createElement(i.BI,null,"strict mode"),", therefore, all restrictions of ",n.createElement(i.I,null,"strict mode")," are applicable to the ",n.createElement(i.BI,null,"class"),n.createElement(c.Z,null)," body."))}},54464:(e,t,l)=>{l.r(t),l.d(t,{default:()=>o});var n=l(67294),a=l(74214),s=l(87398),r=l(68947),c=l(12050),i=l(9167),m=[{label:"Can only be accessed inside the class."},{label:"Can't be inherited"}],u=[{label:n.createElement(n.Fragment,null,"Are only accessible on the class itself or in ",n.createElement(i.BI,null,"this"),n.createElement(c.Z,null)," context of static members.")},{label:"Can't be inherited"}];const o=function(){return n.createElement(n.Fragment,null,n.createElement(s.Z,{as:"h2"},"Private Field Declarations"),n.createElement(r.Z,null,"Private class members can be created by using ",n.createElement(i.B,null,'"#"')," prefix. The privacy encapsulation of these class features is enforced by JavaScript itself. The ",n.createElement(i.B,null,"#")," is a part of the member name. Private fields can't be neither declared nor deleted inside the constructor. It is a syntax error to access private members outside the class. Also private members can't be inherited."),n.createElement(r.Z,null,"Private instance/prototype members:",n.createElement(i.GS,{items:m})),n.createElement(r.Z,null,"Private static members:",n.createElement(i.GS,{items:u})),n.createElement(r.Z,null,n.createElement(a.Z,null,'class User {\n    // "#GROUP" is a private property\n    #GROUP = "Student";\n    static MINIMUM_AGE = 18;\n    constructor(name, age) {\n        this.name = name;\n        this.age = age;\n\n        delete this.#GROUP;\n        this.#privatePropInConstructor = 10;\n        /* If we try to delete or declare new private properties \n            inside the constructor, it will throw an error.\n        */\n    }\n\n    // "#getUserDetail()" is a private method\n    #getUserDetail() { return this.name + " - " + this.age; }\n    getUserInfo() { return this.#GROUP + ":" + this.#getUserDetail(); }\n}\n'),n.createElement(r.Z,null,n.createElement(i.IU,null,"Example 1:"),n.createElement(a.Z,null,'const usr = new User("John", 25);\nusr.getUserInfo();  // "Student: John - 25"\n')),n.createElement(r.Z,null,n.createElement(i.IU,null,"Example 2:"),n.createElement(i.cJ,null),"Below code will throw error:",n.createElement(i.B,null,'"SyntaxError: Private field #GROUP must be declared in an enclosing class"'),", because ",n.createElement(i.I,null,"private members")," can't be accessed outside the class.",n.createElement(a.Z,null,"console.log(User.#GROUP);"))))}},49649:(e,t,l)=>{l.r(t),l.d(t,{default:()=>v});var n=l(67294),a=l(9231),s=l(59044),r=l(87398),c=l(68947),i=l(12050),m=l(9167),u=l(63333),o=l(49997),E=l(30514),h=l(71214),d=l(19206),f=l(71224),p=l(54464),b=l(10120),I=l(49399),g=l(88630),Z=[{label:n.createElement(n.Fragment,null,n.createElement(m.B,null,"Classes")," are templates for ",n.createElement(m.I,null,"objects"),", encapsulating data and methods.")},{label:n.createElement(n.Fragment,null,"Classes can be defined as: ",n.createElement(m.B,null,"Class Declaration")," and",n.createElement(i.Z,null)," ",n.createElement(m.B,null,"Class Expression"),".")},{label:n.createElement(n.Fragment,null,"Class definition is not ",n.createElement(m.B,null,"hoisted"),". The body of class executes in",n.createElement(m.B,null,"strict mode"),".")},{label:n.createElement(n.Fragment,null,n.createElement(m.BI,null,"Constructor")," is a special method for creating and initializing class instances.")},{label:n.createElement(n.Fragment,null,n.createElement(m.B,null,"Static members")," are called without instantiating class and can't be called with ",n.createElement(m.I,null,"class instances"),".")},{label:n.createElement(n.Fragment,null,"When a ",n.createElement(m.BI,null,"static")," or ",n.createElement(m.I,null,"prototype/instance")," methods are called without a value of ",n.createElement(m.BI,null,"this"),", the value of ",n.createElement(m.BI,null,"this")," will be",n.createElement(m.BI,null,"undefined")," inside the method.")},{label:n.createElement(n.Fragment,null,n.createElement(m.B,null,"Private")," members are creating using the ",n.createElement(m.B,null,'"#"')," prefix.")},{label:n.createElement(n.Fragment,null,"The ",n.createElement(m.BI,null,"extends")," keyword is used to implement ",n.createElement(m.B,null,"inheritance"),".")},{label:n.createElement(n.Fragment,null,"The ",n.createElement(m.BI,null,"super()")," calls the parent constructor with given parameters.")},{label:n.createElement(n.Fragment,null,n.createElement(m.B,null,"Abstract classes")," or ",n.createElement(m.B,null,"mix-ins")," are templates for classes, used to ",n.createElement(m.BI,null,"extend")," a class from multiple parent classes.")}],w=[{label:"Class Declaration"},{label:"Class Expression"}],B=function(){return(0,a.Z)("UI-Geeks: JavaScript | Class"),n.createElement(s.Z,null,n.createElement(r.Z,null,"Class"),n.createElement(c.Z,null,"The classes are templates for creating objects. They encapsulate data with methods to work on that data. Classes in fact are special functions."),n.createElement(c.Z,null,"Classes can be defined in two ways:",n.createElement(m.GS,{items:w})),n.createElement(c.Z,null,n.createElement(d.default,null),n.createElement(f.default,null),n.createElement(h.default,null),n.createElement(I.default,null),n.createElement(g.default,null),n.createElement(p.default,null)),n.createElement(c.Z,null,n.createElement(b.default,null)),n.createElement(o.Z,{items:Z}),n.createElement(c.Z,null,n.createElement(u.Z,{questions:E.ClassQuestions})))};const v=(0,n.memo)(B)},9796:(e,t,l)=>{l.r(t),l.d(t,{default:()=>m});var n=l(67294),a=l(74214),s=l(87398),r=l(68947),c=l(12050),i=l(9167);const m=function(){return n.createElement(n.Fragment,null,n.createElement(r.Z,null,"The ",n.createElement(i.BI,null,"extends")," ",n.createElement(i.I,null,"keyword")," is used to create a ",n.createElement(i.I,null,"class")," as a child of another ",n.createElement(i.I,null,"class"),", this mechanism is called",n.createElement(i.B,null,"inheritance"),". If there's a",n.createElement(c.Z,null)," ",n.createElement(i.I,null,"constructor")," present in the subclass, it needs to first call ",n.createElement(i.I,null,"super()"),n.createElement(c.Z,null)," before using ",n.createElement(i.BI,null,"this"),"."),n.createElement(r.Z,null,n.createElement(s.Z,{as:"h3"},"Base/Parent/Inherited Class"),n.createElement(r.Z,null,"This is the ",n.createElement(i.I,null,"class")," which will be used as a base for creating child",n.createElement(i.I,null,"classes"),". The basic role of ",n.createElement(i.BI,null,"base class")," is to contain",n.createElement(c.Z,null)," ",n.createElement(i.I,null,"common functionalities"),", which can be used by",n.createElement(i.BI,null,"multiple child classes"),"."),n.createElement(a.Z,null,"class Vehicle {\n  constructor(vehicleType, make, wheels) {\n    this.vehicleType = vehicleType;\n    this.make = make;\n    this.wheels = wheels;\n  }\n\n  showVehicleInfo() { \t\n    console.log(`${this.make} ${this.vehicleType} have ${this.wheels} wheels`);\n  }\n}\n")),n.createElement(r.Z,null,n.createElement(s.Z,{as:"h3"},"Child/Derived Class"),n.createElement(r.Z,null,"This is the ",n.createElement(i.I,null,"class")," which ",n.createElement(i.BI,null,"extends")," the functionality of the ",n.createElement(i.I,null,"base class"),". The role of a ",n.createElement(i.I,null,"derived class")," is to perform more specialized tasks. Derived ",n.createElement(i.I,null,"class"),n.createElement(i.B,null,"uses/overrides")," the ",n.createElement(i.I,null,"base class")," members, based on the need."),n.createElement(r.Z,null,n.createElement(i.BI,null,"super()"),": Calling ",n.createElement(i.I,null,"super()")," is important. It calls the parent class ",n.createElement(i.I,null,"constructor")," with the list of passed ",n.createElement(c.Z,null),n.createElement(i.I,null,"arguments"),". The ",n.createElement(i.BI,null,"super")," can also be used to call",n.createElement(i.B,null,"public")," ",n.createElement(i.I,null,"properties/methods")," of the parent ",n.createElement(i.I,null,"class"),"."),n.createElement(r.Z,null,n.createElement(i.IU,null,"Example 1:"),n.createElement(r.Z,null,"In below example, the ",n.createElement(i.BI,null,"showVehicleInfo()")," is not defined in",n.createElement(i.BI,null,"Bike class"),", but still this works, because it was ",n.createElement(c.Z,null),n.createElement(i.I,null,"inherited")," from the base class ",n.createElement(i.BI,null,"Vehicle"),"."),n.createElement(a.Z,null,'class Bike extends Vehicle {\n  constructor(make) {\n    super("Bike, make, 2);\n  }\n}\n\nconst bike = new Bike("Honda");\nbike.showVehicleInfo()  // "Honda Bike have 2 wheels"')),n.createElement(r.Z,null,n.createElement(i.IU,null,"Example 2:"),n.createElement(r.Z,null,"In below example, the ",n.createElement(i.BI,null,"showVehicleInfo()")," is not defined in",n.createElement(i.BI,null,"Car class"),", but still this works, because it was ",n.createElement(c.Z,null),n.createElement(i.I,null,"inherited")," from the base class ",n.createElement(i.BI,null,"Vehicle"),"."),n.createElement(a.Z,null,'class Car extends Vehicle {\n  constructor(make) {\n    super("Car", make, 4);\n  }\n}\n\nconst car = new Car("Maruti");\ncar.showVehicleInfo() // "Maruti Car have 4 wheels"'))))}},10120:(e,t,l)=>{l.r(t),l.d(t,{default:()=>i});var n=l(67294),a=l(87398),s=l(68947),r=l(9796),c=l(36544);const i=function(){return n.createElement(n.Fragment,null,n.createElement(a.Z,{as:"h2"},"Inheritance"),n.createElement(s.Z,null,n.createElement(r.default,null),n.createElement(c.default,null)))}},36544:(e,t,l)=>{l.r(t),l.d(t,{default:()=>m});var n=l(67294),a=l(74214),s=l(87398),r=l(68947),c=l(12050),i=l(9167);const m=function(){return n.createElement(n.Fragment,null,n.createElement(s.Z,{as:"h2"},"MIX-INS"),n.createElement(r.Z,null,n.createElement(i.B,null,"Abstract classes")," or ",n.createElement(i.B,null,"mix-ins")," are templates for classes. Class inheritance has a limitation that a ",n.createElement(i.I,null,"class")," can only",n.createElement(c.Z,null)," ",n.createElement(i.I,null,"extend")," one ",n.createElement(i.I,null,"class"),". A function with a super class as input and a subclass extending that superclass as output can be used to implement ",n.createElement(i.I,null,"mix-ins")," in JavaScript."),n.createElement(r.Z,null,n.createElement(i.IU,null,"Example:"),n.createElement(a.Z,null,"class BaseClass { \n  constructor(numArr) {\n    this.numArr = numArr;\n  }\n}\n"),n.createElement(a.Z,null,"const sumMixin = (Base) =>  class extends Base {\n  constructor(numArr) { super(numArr); }\n  sum() { return this.numArr.reduce((a, b) => a + b); }\n};"),n.createElement(a.Z,null,"const averageMixin = (Base) =>  class extends Base {\n  constructor(numArr) { super(numArr); }\n  average() { \n    return this.numArr.reduce((a, b) => a + b) / this.numArr.length; \n  }\n};\n"),n.createElement(a.Z,null,"class MathClass extends sumMixin(averageMixin(BaseClass)) { }\nconst math = new MathClass([2, 5, 6, 8]);\nmath.sum(); // 21\nmath.average(); // 5.25")))}},49399:(e,t,l)=>{l.r(t),l.d(t,{default:()=>m});var n=l(67294),a=l(74214),s=l(87398),r=l(68947),c=l(12050),i=l(9167);const m=function(){return n.createElement(n.Fragment,null,n.createElement(s.Z,{as:"h2"},"static Methods and Properties"),n.createElement(r.Z,null,"The ",n.createElement(i.BI,null,"static")," keyword defines a ",n.createElement(i.I,null,"static method")," or ",n.createElement(c.Z,null),n.createElement(i.I,null,"property")," for a ",n.createElement(i.I,null,"class"),". Static members are called without instantiating the ",n.createElement(i.I,null,"class")," and cannot be called through a ",n.createElement(c.Z,null),n.createElement(i.I,null,"class instance"),". The ",n.createElement(i.I,null,"static")," methods are often used to create utility functions for the ",n.createElement(i.I,null,"class"),", whereas ",n.createElement(i.I,null,"static"),n.createElement(c.Z,null)," properties are useful for caches, fixed-configuration or any other data that don't need to be replicated across ",n.createElement(i.I,null,"class"),n.createElement(c.Z,null)," instances."),n.createElement(a.Z,null,'class User {\n  // "MINIMUM_AGE" is a static property\n  static MINIMUM_AGE = 18;\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n\n  getUserDetail() { return this.name + " - " + this.age; }\n  // "getValidUsers()" is a static method \n  static getValidUsers(userList) {\n    return userList.filter(usr => usr.age > this.MINIMUM_AGE);\n  }\n}\n'),n.createElement(r.Z,null,n.createElement(i.IU,null,"Example 1:"),n.createElement(a.Z,null,'const usr = new User("John", 25);\nusr.getUserDetail();  // "John - 25"')),n.createElement(r.Z,null,n.createElement(i.IU,null,"Example 2:"),n.createElement(r.Z,null,"In below example, ",n.createElement(i.BI,null,"getValidUsers()")," is called on the",n.createElement(i.BI,null,"User class")," and not on the instance of the class, like",n.createElement(i.BI,null,"usr"),"."),n.createElement(a.Z,null,'const usr = new User("John", 25);\nconst usr2 = new User("Jack", 17);\nconst validUsers = User.getValidUsers([usr, usr2]);\nconsole.log(validUsers) // [{ name : "John", age : 25}]\n')),n.createElement(r.Z,null,n.createElement(i.IU,null,"Example 3:"),n.createElement(r.Z,null,"Below example prints ",n.createElement(i.I,null,'"undefined"'),", because ",n.createElement(i.I,null,"static")," members can't be accessed by instance variables."),n.createElement(a.Z,null,'const usr = new User("John", 25);\nconsole.log(usr2.MINIMUM_AGE);  // undefined\n')))}},88630:(e,t,l)=>{l.r(t),l.d(t,{default:()=>i});var n=l(67294),a=l(74214),s=l(87398),r=l(68947),c=l(9167);const i=function(){return n.createElement(n.Fragment,null,n.createElement(s.Z,{as:"h3"},'Binding "this" with prototype and static methods'),n.createElement(r.Z,null,"When a ",n.createElement(c.I,null,"static")," or ",n.createElement(c.I,null,"prototype/instance")," methods are called without a value of ",n.createElement(c.BI,null,"this"),", the value of ",n.createElement(c.BI,null,"this")," will be",n.createElement(c.BI,null,"undefined")," inside the method."),n.createElement(r.Z,null,n.createElement(c.IU,null,"Example 1:"),n.createElement(a.Z,null,'const usr = new User("John", 25);\nusr.getUserDetail()\t// "John - 25"\n')),n.createElement(r.Z,null,n.createElement(c.IU,null,"Example 2:"),n.createElement(r.Z,null,"Below code will throw TypeError, because ",n.createElement(c.BI,null,"this")," was",n.createElement(c.BI,null,"undefined")," in the method."),n.createElement(a.Z,null,'const getUserInfo = usr.getUserDetail();\ngetUserInfo();  // "TypeError: Cannot read properties of undefined"\n')))}},30514:(e,t,l)=>{l.r(t),l.d(t,{ClassQuestions:()=>c});var n=l(67294),a=l(83819),s=l(74214),r=l(53232),c=[{id:1,question:n.createElement(n.Fragment,null,"Classes are templates for ",a.Fb,", encapsulating data and methods."),options:[{label:"String",id:1},{label:"Objects",id:2},{label:"Function",id:3},{label:a.WR,id:4}],type:r.M.Radio,name:"class_1",answer:2},{id:2,question:n.createElement(n.Fragment,null,"Class definition is not hoisted."),options:[{label:"true",id:1},{label:"false",id:2}],type:r.M.Radio,name:"class_2",answer:1},{id:3,question:n.createElement(n.Fragment,null,a.Fb,' members are creating using the "#" prefix.'),options:[{label:"Public",id:1},{label:"Private",id:2},{label:"Instance",id:3},{label:"Constructor",id:4}],type:r.M.Radio,name:"class_3",answer:2},{id:4,question:n.createElement(n.Fragment,null,"The ",a.Fb," keyword is used to implement inheritance."),options:[{label:"extends",id:1},{label:"inherit",id:2},{label:"super",id:3},{label:"static",id:4}],type:r.M.Radio,name:"class_4",answer:1},{id:5,question:n.createElement(n.Fragment,null,"What would be the output of given code:",n.createElement(s.Z,null,'const usr = new User("JavaScript", "Language");\nconst User = class {\n  constructor(firstName, lastName) {\n    this.firstName = firstName;\n    this.lastName = lastName;\n  }\n  showName() {\n    console.log(this.firstName + "-" + this.lastName);\n  }\n}')),options:[{label:"JavaScript-Language",id:1},{label:"undefined",id:2},{label:"null",id:3},{label:"ReferenceError",id:4}],type:r.M.Radio,name:"class_5",answer:4}]},74214:(e,t,l)=>{l.d(t,{Z:()=>x});var n=l(4942),a=l(94184),s=l.n(a),r=l(67294),c=l(17606),i=l(83819),m=l(28949),u=l(93379),o=l.n(u),E=l(7795),h=l.n(E),d=l(90569),f=l.n(d),p=l(3565),b=l.n(p),I=l(19216),g=l.n(I),Z=l(44589),w=l.n(Z),B=l(62428),v={};v.styleTagTransform=w(),v.setAttributes=b(),v.insert=f().bind(null,"head"),v.domAPI=h(),v.insertStyleElement=g(),o()(B.Z,v),B.Z&&B.Z.locals&&B.Z.locals;var U=function(e){var t,l=e.children,a=e.language,u=void 0===a?"typescript":a,o=e.theme,E=e.showLineNumbers,h=void 0!==E&&E,d=e.codeBlock,f=void 0!==d&&d,p=e.highlight,b=e.copyBtn,I=void 0===b||b,g=(0,r.useContext)(m.I),Z=s()((t={},(0,n.Z)(t,"".concat(i.HL,"-code"),!0),(0,n.Z)(t,"".concat(i.HL,"-code-no-copy-btn"),!I),t));return r.createElement("div",{className:Z,style:{textAlign:"left"}},r.createElement(c.Z1,{text:l,language:u,showLineNumbers:h,theme:function(){switch(o){case"dracula":return c.cL;case"anOldHope":return c.dw;case"github":return c.bW;default:return g.theme===i.bF.DARK_THEME?c.g9:c.dw}}(),wrapLines:!0,codeBlock:f,highlight:p}))};const x=(0,r.memo)(U)},62428:(e,t,l)=>{l.d(t,{Z:()=>c});var n=l(8081),a=l.n(n),s=l(23645),r=l.n(s)()(a());r.push([e.id,".ui-geeks-code{margin-top:1.5rem;margin-bottom:1.5rem}.ui-geeks-code-no-copy-btn button{display:none}\n",""]);const c=r}}]);