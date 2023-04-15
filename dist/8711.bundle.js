"use strict";(self.webpackChunkui_geeks_in_web=self.webpackChunkui_geeks_in_web||[]).push([[8711],{28711:(e,t,i)=>{i.r(t),i.d(t,{default:()=>p});var n=i(67294),a=i(83819),r=i(87398),l=i(12050),o=i(7527),c=i(9167),s=i(4247),m=i(43354),d=[{date:"May, 2013",mileStone:"v0.3",title:"First public release"},{date:"Oct, 2015",mileStone:"v0.14",title:"Splitted main React package into react and read-dom.",description:"Added stateless function component syntax."},{date:"Jul, 2016",mileStone:"v15.3",title:"",description:n.createElement(n.Fragment,null,"Added ",n.createElement(c.B,null,"React.PureComponent"))},{date:"Nov, 2016",mileStone:"v15.4",title:"",description:"Separated React-DOM and distributed as separate package."},{date:"Sep, 2017",mileStone:"v16.0",title:"",description:n.createElement(n.Fragment,null,"Added ",n.createElement(c.B,null,"Error Boundary"))},{date:"Feb, 2017",mileStone:"v16.8",title:"Added Hooks",description:"a way to use state and other React features without writing a class"},{date:"Jun, 2017",mileStone:"v15.6",title:"",description:n.createElement(n.Fragment,null,"Added support for ",n.createElement(c.B,null,"CSS variables in style")," attribute.")},{date:"Oct, 2017",mileStone:"v16.6",title:"Added memo(), lazy()",description:"React.memo() as an alternative to PureComponent and React.lazy() for code splitting."},{date:"Aug, 2019",mileStone:"v16.9",title:"",description:n.createElement(n.Fragment,null,"Added ",n.createElement(c.B,null,"React.Profile")," API for gathering performance measurements.")},{date:"Feb, 2020",mileStone:"v16.13",title:"",description:n.createElement(n.Fragment,null,"Added React ",n.createElement(c.B,null,"Concurrent Mode"),".")},{date:"Mar, 2022",mileStone:"v18.0",title:"",description:n.createElement(n.Fragment,null,"Added ",n.createElement(c.B,null,"useId Hook")," for generating unique IDs and ",n.createElement(l.Z,null),n.createElement(c.BI,null,"enabled automatic batching")," of state update.")}];const p=function(){return n.createElement(n.Fragment,null,n.createElement(r.Z,{as:"h2"},"Important Milestones"),n.createElement(s.Z,{justifyContent:m.xu.Center,alignItems:m.pi.Center,className:"".concat(a.HL,"-time-line-wrapper")},n.createElement(o.Z,{heading:"",timeLineList:d})))}},7527:(e,t,i)=>{i.d(t,{Z:()=>A});var n=i(4942),a=i(94184),r=i.n(a),l=i(67294),o=i(83819),c=i(87398),s=i(68947),m=i(93379),d=i.n(m),p=i(7795),u=i.n(p),g=i(90569),f=i.n(g),x=i(3565),k=i.n(x),h=i(19216),b=i.n(h),E=i(44589),v=i.n(E),S=i(12781),w={};w.styleTagTransform=v(),w.setAttributes=k(),w.insert=f().bind(null,"head"),w.domAPI=u(),w.insertStyleElement=b(),d()(S.Z,w),S.Z&&S.Z.locals&&S.Z.locals;var y=function(e){var t=e.timeLineList,i=e.heading,a=r()((0,n.Z)({},"".concat(o.HL,"-time-line"),!0));return l.createElement(l.Fragment,null,l.createElement(s.Z,{textAlign:"center"},l.createElement(c.Z,{as:"h2"},i)),l.createElement("div",{className:a},t.map((function(e,t){return l.createElement("div",{key:e.date,className:"container ".concat(t%2==0?"left":"right")},l.createElement("div",{className:"timeStamp"},e.date),l.createElement("span",{className:"milestone"},e.mileStone),l.createElement("div",{className:"content"},l.createElement("h2",null,e.title),l.createElement("p",null,e.description)))}))))};const A=(0,l.memo)(y)},12781:(e,t,i)=>{i.d(t,{Z:()=>o});var n=i(8081),a=i.n(n),r=i(23645),l=i.n(r)()(a());l.push([e.id,".ui-geeks-time-line{position:relative;width:100%;margin:0 auto;padding:15px 0;font-size:0.8rem !important}.ui-geeks-time-line *,.ui-geeks-time-line *::before,.ui-geeks-time-line *::after{box-sizing:border-box}.ui-geeks-time-line::after{content:'';position:absolute;width:2px;background:#389e7f;top:0;bottom:0;left:50%;margin-left:-1px}.ui-geeks-time-line .container{padding:10px 30px;position:relative;background:inherit;width:50%}.ui-geeks-time-line .container.left{left:0;display:inline-block}.ui-geeks-time-line .container.right{left:25%}.ui-geeks-time-line .container::after{content:'';position:absolute;width:16px;height:16px;top:calc(50% - 8px);right:-8px;background:#389e7f;border:2px solid #389e7f;border-radius:16px;z-index:1}.ui-geeks-time-line .container.right::after{left:-8px}.ui-geeks-time-line .container::before{content:'';position:absolute;width:50px;height:2px;top:calc(50% - 1px);right:8px;background:#389e7f;z-index:1}.ui-geeks-time-line .container.right::before{left:8px}.ui-geeks-time-line .container .timeStamp{position:absolute;display:inline-block;top:calc(50% - 8px);text-align:center;font-size:14px;font-weight:bold;color:#6e45e2;text-transform:uppercase;letter-spacing:1px;z-index:1}.ui-geeks-time-line .container.left .timeStamp{right:-110px}.ui-geeks-time-line .container.right .timeStamp{left:-110px}.ui-geeks-time-line .container .milestone{position:absolute;display:inline-block;width:40px;height:40px;padding:8px 0px;top:calc(50% - 20px);background:#5765c7;border:2px solid #5765c7;border-radius:40px;text-align:center;font-size:18px;color:#ffffff;z-index:1;font-size:0.8rem}.ui-geeks-time-line .container.left .milestone{right:56px}.ui-geeks-time-line .container.right .milestone{left:56px}.ui-geeks-time-line .container .content{padding:10px 90px 10px 15px;background:#e1e1e1;position:relative;border-radius:0 15px 15px 0}.ui-geeks-time-line .container.right .content{padding:10px 15px 10px 90px;border-radius:15px 0 0 15px}.ui-geeks-time-line .container .content h2{margin:0 0 5px 0;font-size:18px;font-size:1rem;font-weight:normal;font-weight:bold}.ui-geeks-time-line .container .content p{margin:0;line-height:22px;word-break:break-word}@media (max-width: 767.98px){.ui-geeks-time-line::after{left:90px}.ui-geeks-time-line .container{width:100%;padding-left:120px;padding-right:30px}.ui-geeks-time-line .container.right{left:0%;margin-left:0}.ui-geeks-time-line .container.left::after,.ui-geeks-time-line .container.right::after{left:82px}.ui-geeks-time-line .container.left::before,.ui-geeks-time-line .container.right::before{left:98px;border-color:transparent #006e51 transparent transparent}.ui-geeks-time-line .container.left .timeStamp,.ui-geeks-time-line .container.right .timeStamp{right:auto;left:-5px}.ui-geeks-time-line .container.left .milestone,.ui-geeks-time-line .container.right .milestone{right:auto;left:146px}.ui-geeks-time-line .container.left .content,.ui-geeks-time-line .container.right .content{padding:30px 30px 30px 90px;border-radius:500px 0 0 500px}}.device-type-mobile .ui-geeks-time-line-wrapper{margin-left:25px}.theme-dark .ui-geeks-time-line .content{background-color:#343434}.theme-dark .ui-geeks-time-line .timeStamp{color:#dbceff}\n",""]);const o=l}}]);