"use strict";(self.webpackChunkui_geeks_in=self.webpackChunkui_geeks_in||[]).push([[5565,7990,2835],{51796:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var l=n(67294),a=n(87398),r=n(68947),c=n(1602),u=n(11480),o=n(32835),s=n(72585),m=n(22993),i=n(8615);const d=function(){return l.createElement(l.Fragment,null,l.createElement(a.Z,{as:"h2"},"Additional Hooks"),l.createElement(r.Z,null,"The following Hooks are either variants of the basic ones or only needed for specific edge cases."),l.createElement(m.default,null),l.createElement(c.default,null),l.createElement(s.default,null),l.createElement(i.default,null),l.createElement(u.default,null),l.createElement(o.default,null))}},97990:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var l=n(67294),a=n(87398),r=n(68947),c=n(12050),u=n(9167),o=[{label:l.createElement(l.Fragment,null,"Only call Hooks ",l.createElement(u.B,null,"at the top level"),". Don't call Hooks inside loops, conditions or nested functions.")},{label:l.createElement(l.Fragment,null,"Only call Hooks ",l.createElement(u.B,null,"from React function components"),". Don't call Hooks from regular JavaScript functions.")}];const s=function(){return l.createElement(l.Fragment,null,l.createElement(r.Z,null,l.createElement(u.B,null,"Hooks")," were added in React ",l.createElement(u.B,null,"v16.8"),". Hooks lets us use",l.createElement(c.Z,null)," ",l.createElement(u.I,null,"state")," and other React features without writing a class component. Hooks are functions that let us ",l.createElement(u.B,null,'"hook into"')," React",l.createElement(u.I,null,"state")," and ",l.createElement(u.I,null,"lifecycle")," features from function components. Hooks ",l.createElement(u.B,null,"don't work")," inside class components."),l.createElement(r.Z,null,"React provides a few built-in Hooks like ",l.createElement(u.I,null,"useState()"),", ",l.createElement(c.Z,null),l.createElement(u.I,null,"useEffect()"),", etc. We can also create custom hooks to reuse stateful behavior between different components."),l.createElement(a.Z,{as:"h2"},"Rules of Hooks"),l.createElement(r.Z,null,"Hooks are JavaScript functions, but they impose two additional rules:",l.createElement(u.GS,{unOrdered:!0,expanded:!0,items:o})))}},5565:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var l=n(67294),a=n(9231),r=n(59044),c=n(87398),u=n(12050),o=n(9167),s=n(49997),m=n(51796),i=n(2537),d=n(97990),E=[{label:l.createElement(l.Fragment,null,"Hooks, added in ",l.createElement(o.B,null,"v16.8"),", allows adding state and other react features in function components. Hooks ",l.createElement(o.B,null,"don't")," work in ",l.createElement(u.Z,null),l.createElement(o.I,null,"class components"),".")},{label:l.createElement(l.Fragment,null,l.createElement(o.B,null,"Rules of Hooks"),": Only call at ",l.createElement(o.B,null,"top level")," and can be called from ",l.createElement(o.I,null,"function components"),".")},{label:l.createElement(l.Fragment,null,"The ",l.createElement(o.BI,null,"useState()")," hook allows adding ",l.createElement(o.I,null,"state")," to function components. Returns a ",l.createElement(o.B,null,"pair")," with ",l.createElement(o.B,null,"current value")," and an",l.createElement(o.B,null,"update function"),". State updates may be ",l.createElement(o.B,null,"batched")," for performance benefits.")},{label:l.createElement(l.Fragment,null,"The ",l.createElement(o.BI,null,"useEffect()")," is used to perform ",l.createElement(u.Z,null),l.createElement(o.I,null,"side-effects/lifecycle events"),". It is equivalent to",l.createElement(o.I,null,"componentDidMount(), componentDidUpdate()")," and",l.createElement(u.Z,null)," ",l.createElement(o.I,null,"componentWillUnmount()"),".")},{label:l.createElement(l.Fragment,null,"The ",l.createElement(o.BI,null,"useContext()")," is used to access ",l.createElement(o.B,null,"Context")," values inside the function component.")},{label:l.createElement(l.Fragment,null,"The ",l.createElement(o.BI,null,"useReducer()")," hook, an alternative to ",l.createElement(o.I,null,"useState()"),", used to handle complex state logic. It optimizes performance of the component.")},{label:l.createElement(l.Fragment,null,"The ",l.createElement(o.BI,null,"useCallback()")," hook is used to create ",l.createElement(o.B,null,"memoized"),l.createElement(u.Z,null)," callbacks, which is called on change of dependencies. The",l.createElement(o.BI,null,"useMemo()")," hook can be used as an alternative to this, to achieve further performance benefits.")},{label:l.createElement(l.Fragment,null,"The ",l.createElement(o.BI,null,"useRef()")," hook is used to handle uncontrolled elements.")},{label:l.createElement(l.Fragment,null,"The ",l.createElement(o.BI,null,"useImperativeHandle()")," is used with ",l.createElement(o.I,null,"forwardRef()")," to handle parent ",l.createElement(o.B,null,"ref"),".")},{label:l.createElement(l.Fragment,null,"The ",l.createElement(o.BI,null,"useLayoutEffect()"),", is identical to ",l.createElement(o.I,null,"useEffect"),", but it fires ",l.createElement(o.B,null,"synchronously")," after DOM updates.")}];const h=function(){return(0,a.Z)("UI-Geeks: React | Hooks"),l.createElement(r.Z,null,l.createElement(c.Z,null,"Hooks"),l.createElement(d.default,null),l.createElement(i.default,null),l.createElement(m.default,null),l.createElement(s.Z,{items:E}))}},1602:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var l=n(67294),a=n(74214),r=n(91573),c=n(87398),u=n(68947),o=n(12050),s=n(9167);const m=function(){return l.createElement(l.Fragment,null,l.createElement(c.Z,{as:"h3"},"useCallback()"),l.createElement(u.Z,null,"This Hook is used to create a ",l.createElement(s.I,null,"memoized callback"),", which will execute only on the change of the given dependencies."),l.createElement(u.Z,null,l.createElement(s.IU,null,"Syntax:"),l.createElement(a.Z,{language:r.r.JSX},"const memoizedCallback = useCallback(() => {\n  // expensive expressions\n}, [/* dependency list */])")),l.createElement(u.Z,null,"The ",l.createElement(s.BI,null,"useCallback")," will return a memoized version of the",l.createElement(o.Z,null)," ",l.createElement(s.B,null,"callback")," that only changes if one of the dependencies has changed."),l.createElement(u.Z,null,"The ",l.createElement(s.BI,null,"useCallback(fn, deps)")," is equivalent to",l.createElement(o.Z,null)," ",l.createElement(s.BI,null,"useMemo(() => fn, deps)"),"."),l.createElement(u.Z,null,l.createElement(s.IU,null,"Example:"),l.createElement(a.Z,{language:r.r.JSX},"const memoizedCallback = useCallback(() => {\n  doSomeExpensive(a, b);\n}, [a, b]);\n")),l.createElement(u.Z,null,"In the above code, ",l.createElement(s.B,null,'"doSomeExpensive"')," method will be called on change on the given dependencies ",l.createElement(s.B,null,'"a"')," and ",l.createElement(s.B,null,'"b"'),"."))}},11480:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var l=n(67294),a=n(74214),r=n(91573),c=n(87398),u=n(68947),o=n(9167);const s=function(){return l.createElement(l.Fragment,null,l.createElement(c.Z,{as:"h3"},"useImperativeHandle()"),l.createElement(u.Z,null,"This Hook customizes the instance value that is exposed to parent components when using ref. The useImperativeHandle should be used with forwardRef."),l.createElement(u.Z,null,l.createElement(o.IU,null,"Syntax:"),l.createElement(a.Z,{language:r.r.JSX},"useImperativeHandle(ref, createHandle, [deps])")),l.createElement(u.Z,null,l.createElement(o.IU,null,"Example:"),l.createElement(a.Z,{language:r.r.JSX},"const CustomInput = (props, ref) => {\n  const inputRef = useRef();\n  useImperativeHandle(ref, () => ({\n    focus: () => { inputRef.current.focus(); }\n  }));\n\n  return <input ref={inputRef} />;\n}\n\nCustomInput = forwardRef(CustomInput);\n")),l.createElement(u.Z,null,"In above code, a parent component that renders",l.createElement(o.BI,null,"<CustomInput ref={inputRef} />")," would be able to call",l.createElement(o.BI,null,"inputRef.current.focus()"),"."))}},32835:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var l=n(67294),a=n(87398),r=n(68947),c=n(12050),u=n(9167);const o=function(){return l.createElement(l.Fragment,null,l.createElement(a.Z,{as:"h3"},"useLayoutEffect()"),l.createElement(r.Z,null,"This Hook is identical to ",l.createElement(u.BI,null,"useEffect"),", but it fires",l.createElement(c.Z,null)," ",l.createElement(u.B,null,"synchronously")," after all DOM mutations. Use this Hook to read layout from the DOM and synchronously re-render. Updates scheduled inside ",l.createElement(u.I,null,"useLayoutEffect")," will be flushed synchronously, before the browser has a chance to paint."),l.createElement(r.Z,null,"Prefer the standard ",l.createElement(u.I,null,"useEffect")," when possible to avoid blocking visual updates."))}},72585:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var l=n(67294),a=n(74214),r=n(91573),c=n(87398),u=n(68947),o=n(9167);const s=function(){return l.createElement(l.Fragment,null,l.createElement(c.Z,{as:"h3"},"useMemo()"),l.createElement(u.Z,null,"The ",l.createElement(o.B,null,"useMemo")," will only recompute the ",l.createElement(o.B,null,"memoized value")," when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render. If no dependency array is provided, a new value will be computed on every render."),l.createElement(u.Z,null,l.createElement(o.IU,null,"Syntax:"),l.createElement(a.Z,{language:r.r.JSX},"const memoizedValue = useMemo(() => expensiveFunction, [/* dependencies */]);")),l.createElement(u.Z,null,l.createElement(o.IU,null,"Example:"),l.createElement(a.Z,{language:r.r.JSX},"const memoizedValue = useMemo(() => \n  computeExpensiveValue(a, b),\n[a, b]);")))}},22993:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var l=n(67294),a=n(74214),r=n(91573),c=n(87398),u=n(68947),o=n(12050),s=n(9167);const m=function(){return l.createElement(l.Fragment,null,l.createElement(c.Z,{as:"h3"},"useReducer()"),l.createElement(u.Z,null,"This Hooks is an alternative to ",l.createElement(s.I,null,"useState")," Hook. It is usually preferable over ",l.createElement(s.I,null,"useState")," when we have complex state logic that involves multiple sub-values or when the next state depends on the previous one. useReducer also optimizes the performance of the component."),l.createElement(u.Z,null,l.createElement(s.IU,null,"Syntax:"),l.createElement(a.Z,{language:r.r.JSX},"const [state, dispatch] = useReducer(reducer, intialArg, init);")),l.createElement(u.Z,null,l.createElement(s.B,null,"state"),": This variable holds the current value of the state."),l.createElement(u.Z,null,l.createElement(s.B,null,"dispatch"),": This method is used to trigger a change to the state value."),l.createElement(u.Z,null,l.createElement(s.B,null,"reducer"),": This is a method of type ",l.createElement(o.Z,null),l.createElement(s.BI,null,"(state, action) => newState"),". It accepts ",l.createElement(s.B,null,'"action"'),l.createElement(o.Z,null)," from ",l.createElement(s.B,null,"dispatch"),", uses the ",l.createElement(s.BI,null,"current state")," to compute ",l.createElement(s.BI,null,"newState")," and returns the newState."),l.createElement(u.Z,null,l.createElement(s.B,null,"intialArg"),": It is the initial value of the state."),l.createElement(u.Z,null,l.createElement(s.B,null,"init"),": This is an ",l.createElement(s.I,null,"optional function"),", used for ",l.createElement(o.Z,null),l.createElement(s.I,null,"lazy initialization")," of the ",l.createElement(s.I,null,"state"),". If provided, the initial state will be set to ",l.createElement(s.BI,null,"init(initialArg)"),". It lets us extract the logic for calculating the initial state outside the reducer."),l.createElement(u.Z,null,l.createElement(s.IU,null,"Example:"),l.createElement(a.Z,{language:r.r.JSX},"const init = (initialCount) => {\n  return { count: initialCount };\n}"),l.createElement(a.Z,{language:r.r.JSX},'const reducer(state, action) {\n  switch(action.type) {\n    case "increment": return { count : state.count + 1 };\n    case "decrement": return { count : state.count - 1 };\n    case "reset": return init(action.payload);\n    default: throw new Error();\n  }\n}')),l.createElement(a.Z,{language:r.r.JSX},'const Counter = (props) => {\n  const { initialCount } = props;\n  const [state, dispatch] = useReducer(reducer, initialCount, init);\n\n  const handleReset = () => {\n    dispatch({ type: "reset", payload: initialCount });\n  }\n  const handleIncrement = () => { dispatch({ type: "increment" }); \t}\n  const handleDecrement = () => { dispatch({ type: "decrement" }); }\n\n  return <>\n    Count: {state.count}\n    <button onClick={handleReset}>Reset</button>\n    <button onClick={handleIncrement}>Increment</button>\n    <button onClick={handleDecrement}>Decrement</button>\n  </>\n}'))}},8615:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var l=n(67294),a=n(74214),r=n(91573),c=n(87398),u=n(68947),o=n(12050),s=n(9167);const m=function(){return l.createElement(l.Fragment,null,l.createElement(c.Z,{as:"h3"},"useRef()"),l.createElement(u.Z,null,"The ",l.createElement(s.B,null,"useRef")," returns a mutable ",l.createElement(s.I,null,"ref")," object whose",l.createElement(o.Z,null)," ",l.createElement(s.BI,null,'".current"')," property is initialized to the passed argument ",l.createElement(s.I,null,"(initialValue)"),". The returned object will persist for the full lifetime of the component. This hook is used with ",l.createElement(o.Z,null),l.createElement(s.B,null,"uncontrolled components"),"."),l.createElement(u.Z,null,l.createElement(s.IU,null,"Example:"),l.createElement(a.Z,{language:r.r.JSX},'const AutoFocusInput = () => {\n  const textInput = useRef();\n  useEffect(() =>  {\n    textInput.current.focusTextInput();\n  },[ ]);\n  return <input type="text" ref={this.textInput} />\n}\n')),l.createElement(u.Z,null,"React will assign the ",l.createElement(s.BI,null,'"current"')," property with the DOM element when the component ",l.createElement(s.I,null,"mounts"),", and assign it back to ",l.createElement(s.BI,null,"null"),l.createElement(o.Z,null)," when it ",l.createElement(s.I,null,"unmounts"),". For ",l.createElement(s.I,null,"class components"),",",l.createElement(o.Z,null)," ",l.createElement(s.BI,null,"ref")," updates happen before ",l.createElement(o.Z,null),l.createElement(s.BI,null,"componentDidMount()")," or ",l.createElement(s.BI,null,"componentDidUpdate()")," lifecycle methods."))}},59044:(e,t,n)=>{n.d(t,{Z:()=>B});var l=n(4942),a=n(94184),r=n.n(a),c=n(67294),u=n(83819),o=n(93379),s=n.n(o),m=n(7795),i=n.n(m),d=n(90569),E=n.n(d),h=n(3565),f=n.n(h),p=n(19216),I=n.n(p),Z=n(44589),g=n.n(Z),b=n(94364),v={};v.styleTagTransform=g(),v.setAttributes=f(),v.insert=E().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=I(),s()(b.Z,v),b.Z&&b.Z.locals&&b.Z.locals;var k=function(e){var t=e.children,n=r()((0,l.Z)({},"".concat(u.HL,"-container"),!0));return c.createElement("div",{className:n},t)};const B=(0,c.memo)(k)},49997:(e,t,n)=>{n.d(t,{Z:()=>y});var l=n(4942),a=n(94184),r=n.n(a),c=n(67294),u=n(83819),o=n(87398),s=n(9167),m=n(93379),i=n.n(m),d=n(7795),E=n.n(d),h=n(90569),f=n.n(h),p=n(3565),I=n.n(p),Z=n(19216),g=n.n(Z),b=n(44589),v=n.n(b),k=n(89166),B={};B.styleTagTransform=v(),B.setAttributes=I(),B.insert=f().bind(null,"head"),B.domAPI=E(),B.insertStyleElement=g(),i()(k.Z,B),k.Z&&k.Z.locals&&k.Z.locals;const y=function(e){var t=e.label,n=void 0===t?"Summary":t,a=e.items,m=r()((0,l.Z)({},"".concat(u.HL,"-summary"),!0));return c.createElement("div",{className:m},c.createElement(o.Z,{as:"h4"},n),c.createElement(s.GS,{unOrdered:!0,items:a}))}},9231:(e,t,n)=>{n.d(t,{Z:()=>a});var l=n(67294);const a=function(e){(0,l.useEffect)((function(){return document.title=e,function(){document.title="UI Geeks | UI Learning Platform"}}),[])}},94364:(e,t,n)=>{n.d(t,{Z:()=>u});var l=n(8081),a=n.n(l),r=n(23645),c=n.n(r)()(a());c.push([e.id,".ui-geeks-container{padding:1rem}\n",""]);const u=c},89166:(e,t,n)=>{n.d(t,{Z:()=>u});var l=n(8081),a=n.n(l),r=n(23645),c=n.n(r)()(a());c.push([e.id,".ui-geeks-summary{border-top:2px solid #e1e1e1;padding-bottom:10px}.ui-geeks-summary .ui-geeks-heading{margin-top:1rem;margin-bottom:1rem}\n",""]);const u=c}}]);