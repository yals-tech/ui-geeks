(self.webpackChunkui_geeks_in_web_platform=self.webpackChunkui_geeks_in_web_platform||[]).push([[5082,131,5008,7279,2496],{56851:(e,n)=>{"use strict";n.Q=function(e){for(var n,t=[],a=String(e||""),r=a.indexOf(","),l=0,o=!1;!o;)-1===r&&(r=a.length,o=!0),!(n=a.slice(l,r).trim())&&o||t.push(n),l=r+1,r=a.indexOf(",",l);return t}},78892:e=>{"use strict";e.exports=function(e,t){for(var a,r,l,o=e||"",i=t||"div",s={},u=0;u<o.length;)n.lastIndex=u,l=n.exec(o),(a=o.slice(u,l?l.index:o.length))&&(r?"#"===r?s.id=a:s.className?s.className.push(a):s.className=[a]:i=a,u+=a.length),l&&(r=l[0],u++);return{type:"element",tagName:i,properties:s,children:[]}};var n=/[#.]/g},62502:(e,n,t)=>{"use strict";var a=t(99560),r=t(66632),l=t(78892),o=t(36582).Q,i=t(56851).Q;e.exports=function(e,n,t){var r=t?function(e){for(var n,t=e.length,a=-1,r={};++a<t;)r[(n=e[a]).toLowerCase()]=n;return r}(t):null;return function(e,t){var a,o=l(e,n),i=Array.prototype.slice.call(arguments,2),p=o.tagName.toLowerCase();if(o.tagName=r&&s.call(r,p)?r[p]:p,t&&u(t,o)&&(i.unshift(t),t=null),t)for(a in t)d(o.properties,a,t[a]);return c(o.children,i),"template"===o.tagName&&(o.content={type:"root",children:o.children},o.children=[]),o};function d(n,t,r){var l,s,u;null!=r&&r==r&&(s=(l=a(e,t)).property,"string"==typeof(u=r)&&(l.spaceSeparated?u=o(u):l.commaSeparated?u=i(u):l.commaOrSpaceSeparated&&(u=o(i(u).join(" ")))),"style"===s&&"string"!=typeof r&&(u=function(e){var n,t=[];for(n in e)t.push([n,e[n]].join(": "));return t.join("; ")}(u)),"className"===s&&n.className&&(u=n.className.concat(u)),n[s]=function(e,n,t){var a,r,l;if("object"!=typeof t||!("length"in t))return p(e,n,t);for(r=t.length,a=-1,l=[];++a<r;)l[a]=p(e,n,t[a]);return l}(l,s,u))}};var s={}.hasOwnProperty;function u(e,n){return"string"==typeof e||"length"in e||function(e,n){var t=n.type;return!("input"===e||!t||"string"!=typeof t)&&("object"==typeof n.children&&"length"in n.children||(t=t.toLowerCase(),"button"===e?"menu"!==t&&"submit"!==t&&"reset"!==t&&"button"!==t:"value"in n))}(n.tagName,e)}function c(e,n){var t,a;if("string"!=typeof n&&"number"!=typeof n)if("object"==typeof n&&"length"in n)for(t=-1,a=n.length;++t<a;)c(e,n[t]);else{if("object"!=typeof n||!("type"in n))throw new Error("Expected node, nodes, or string, got `"+n+"`");e.push(n)}else e.push({type:"text",value:String(n)})}function p(e,n,t){var a=t;return e.number||e.positiveNumber?isNaN(a)||""===a||(a=Number(a)):(e.boolean||e.overloadedBoolean)&&("string"!=typeof a||""!==a&&r(t)!==r(n)||(a=!0)),a}},52579:(e,n,t)=>{"use strict";var a=t(97247),r=t(62502)(a,"div");r.displayName="html",e.exports=r},31742:(e,n,t)=>{"use strict";e.exports=t(52579)},46260:e=>{"use strict";e.exports=function(e){var n="string"==typeof e?e.charCodeAt(0):e;return n>=97&&n<=122||n>=65&&n<=90}},7961:(e,n,t)=>{"use strict";var a=t(46260),r=t(46195);e.exports=function(e){return a(e)||r(e)}},46195:e=>{"use strict";e.exports=function(e){var n="string"==typeof e?e.charCodeAt(0):e;return n>=48&&n<=57}},79480:e=>{"use strict";e.exports=function(e){var n="string"==typeof e?e.charCodeAt(0):e;return n>=97&&n<=102||n>=65&&n<=70||n>=48&&n<=57}},89435:e=>{"use strict";var n;e.exports=function(e){var t,a="&"+e+";";return(n=n||document.createElement("i")).innerHTML=a,(59!==(t=n.textContent).charCodeAt(t.length-1)||"semi"===e)&&(t!==a&&t)}},57574:(e,n,t)=>{"use strict";var a=t(37452),r=t(93580),l=t(46195),o=t(79480),i=t(7961),s=t(89435);e.exports=function(e,n){var t,l,o={};for(l in n||(n={}),d)t=n[l],o[l]=null==t?d[l]:t;return(o.position.indent||o.position.start)&&(o.indent=o.position.indent||[],o.position=o.position.start),function(e,n){var t,l,o,d,x,w,k,A,S,F,C,P,N,O,E,L,j,M,_,T,$=n.additional,D=n.nonTerminated,I=n.text,R=n.reference,z=n.warning,B=n.textContext,U=n.referenceContext,H=n.warningContext,q=n.position,W=n.indent||[],Z=e.length,G=0,V=-1,K=q.column||1,Q=q.line||1,J="",Y=[];for("string"==typeof $&&($=$.charCodeAt(0)),L=X(),A=z?function(e,n){var t=X();t.column+=n,t.offset+=n,z.call(H,v[e],t,e)}:p,G--,Z++;++G<Z;)if(10===x&&(K=W[V]||1),38===(x=e.charCodeAt(G))){if(9===(k=e.charCodeAt(G+1))||10===k||12===k||32===k||38===k||60===k||k!=k||$&&k===$){J+=c(x),K++;continue}for(P=N=G+1,_=N,35===k?(_=++P,88===(k=e.charCodeAt(_))||120===k?(O=f,_=++P):O=m):O=g,t="",C="",d="",E=y[O],_--;++_<Z&&E(k=e.charCodeAt(_));)d+=c(k),O===g&&u.call(a,d)&&(t=d,C=a[d]);(o=59===e.charCodeAt(_))&&(_++,(l=O===g&&s(d))&&(t=d,C=l)),M=1+_-N,(o||D)&&(d?O===g?(o&&!C?A(5,1):(t!==d&&(M=1+(_=P+t.length)-P,o=!1),o||(S=t?1:3,n.attribute?61===(k=e.charCodeAt(_))?(A(S,M),C=null):i(k)?C=null:A(S,M):A(S,M))),w=C):(o||A(2,M),(T=w=parseInt(d,h[O]))>=55296&&T<=57343||T>1114111?(A(7,M),w=c(65533)):w in r?(A(6,M),w=r[w]):(F="",b(w)&&A(6,M),w>65535&&(F+=c((w-=65536)>>>10|55296),w=56320|1023&w),w=F+c(w))):O!==g&&A(4,M)),w?(ee(),L=X(),G=_-1,K+=_-N+1,Y.push(w),(j=X()).offset++,R&&R.call(U,w,{start:L,end:j},e.slice(N-1,_)),L=j):(d=e.slice(N-1,_),J+=d,K+=d.length,G=_-1)}else 10===x&&(Q++,V++,K=0),x==x?(J+=c(x),K++):ee();return Y.join("");function X(){return{line:Q,column:K,offset:G+(q.offset||0)}}function ee(){J&&(Y.push(J),I&&I.call(B,J,{start:L,end:X()}),J="")}}(e,o)};var u={}.hasOwnProperty,c=String.fromCharCode,p=Function.prototype,d={warning:null,reference:null,text:null,warningContext:null,referenceContext:null,textContext:null,position:{},additional:null,attribute:!1,nonTerminated:!0},g="named",f="hexadecimal",m="decimal",h={};h[f]=16,h[m]=10;var y={};y[g]=i,y[m]=l,y[f]=o;var v={};function b(e){return e>=1&&e<=8||11===e||e>=13&&e<=31||e>=127&&e<=159||e>=64976&&e<=65007||65535==(65535&e)||65534==(65535&e)}v[1]="Named character references must be terminated by a semicolon",v[2]="Numeric character references must be terminated by a semicolon",v[3]="Named character references cannot be empty",v[4]="Numeric character references cannot be empty",v[5]="Named character references must be known",v[6]="Numeric character references cannot be disallowed",v[7]="Numeric character references cannot be outside the permissible Unicode range"},99560:(e,n,t)=>{"use strict";var a=t(66632),r=t(98805),l=t(57643),o="data";e.exports=function(e,n){var t=a(n),d=n,g=l;return t in e.normal?e.property[e.normal[t]]:(t.length>4&&t.slice(0,4)===o&&i.test(n)&&("-"===n.charAt(4)?d=function(e){var n=e.slice(5).replace(s,p);return o+n.charAt(0).toUpperCase()+n.slice(1)}(n):n=function(e){var n=e.slice(4);return s.test(n)?e:("-"!==(n=n.replace(u,c)).charAt(0)&&(n="-"+n),o+n)}(n),g=r),new g(d,n))};var i=/^data[-\w.:]+$/i,s=/-[a-z]/g,u=/[A-Z]/g;function c(e){return"-"+e.toLowerCase()}function p(e){return e.charAt(1).toUpperCase()}},97247:(e,n,t)=>{"use strict";var a=t(19940),r=t(8289),l=t(5812),o=t(94397),i=t(67716),s=t(61805);e.exports=a([l,r,o,i,s])},67716:(e,n,t)=>{"use strict";var a=t(17e3),r=t(17596),l=a.booleanish,o=a.number,i=a.spaceSeparated;e.exports=r({transform:function(e,n){return"role"===n?n:"aria-"+n.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:l,ariaAutoComplete:null,ariaBusy:l,ariaChecked:l,ariaColCount:o,ariaColIndex:o,ariaColSpan:o,ariaControls:i,ariaCurrent:null,ariaDescribedBy:i,ariaDetails:null,ariaDisabled:l,ariaDropEffect:i,ariaErrorMessage:null,ariaExpanded:l,ariaFlowTo:i,ariaGrabbed:l,ariaHasPopup:null,ariaHidden:l,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:i,ariaLevel:o,ariaLive:null,ariaModal:l,ariaMultiLine:l,ariaMultiSelectable:l,ariaOrientation:null,ariaOwns:i,ariaPlaceholder:null,ariaPosInSet:o,ariaPressed:l,ariaReadOnly:l,ariaRelevant:null,ariaRequired:l,ariaRoleDescription:i,ariaRowCount:o,ariaRowIndex:o,ariaRowSpan:o,ariaSelected:l,ariaSetSize:o,ariaSort:null,ariaValueMax:o,ariaValueMin:o,ariaValueNow:o,ariaValueText:null,role:null}})},61805:(e,n,t)=>{"use strict";var a=t(17e3),r=t(17596),l=t(10855),o=a.boolean,i=a.overloadedBoolean,s=a.booleanish,u=a.number,c=a.spaceSeparated,p=a.commaSeparated;e.exports=r({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:l,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:p,acceptCharset:c,accessKey:c,action:null,allow:null,allowFullScreen:o,allowPaymentRequest:o,allowUserMedia:o,alt:null,as:null,async:o,autoCapitalize:null,autoComplete:c,autoFocus:o,autoPlay:o,capture:o,charSet:null,checked:o,cite:null,className:c,cols:u,colSpan:null,content:null,contentEditable:s,controls:o,controlsList:c,coords:u|p,crossOrigin:null,data:null,dateTime:null,decoding:null,default:o,defer:o,dir:null,dirName:null,disabled:o,download:i,draggable:s,encType:null,enterKeyHint:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:o,formTarget:null,headers:c,height:u,hidden:o,high:u,href:null,hrefLang:null,htmlFor:c,httpEquiv:c,id:null,imageSizes:null,imageSrcSet:p,inputMode:null,integrity:null,is:null,isMap:o,itemId:null,itemProp:c,itemRef:c,itemScope:o,itemType:c,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:o,low:u,manifest:null,max:null,maxLength:u,media:null,method:null,min:null,minLength:u,multiple:o,muted:o,name:null,nonce:null,noModule:o,noValidate:o,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforePrint:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextMenu:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:o,optimum:u,pattern:null,ping:c,placeholder:null,playsInline:o,poster:null,preload:null,readOnly:o,referrerPolicy:null,rel:c,required:o,reversed:o,rows:u,rowSpan:u,sandbox:c,scope:null,scoped:o,seamless:o,selected:o,shape:null,size:u,sizes:null,slot:null,span:u,spellCheck:s,src:null,srcDoc:null,srcLang:null,srcSet:p,start:u,step:null,style:null,tabIndex:u,target:null,title:null,translate:null,type:null,typeMustMatch:o,useMap:null,value:s,width:u,wrap:null,align:null,aLink:null,archive:c,axis:null,background:null,bgColor:null,border:u,borderColor:null,bottomMargin:u,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:o,declare:o,event:null,face:null,frame:null,frameBorder:null,hSpace:u,leftMargin:u,link:null,longDesc:null,lowSrc:null,marginHeight:u,marginWidth:u,noResize:o,noHref:o,noShade:o,noWrap:o,object:null,profile:null,prompt:null,rev:null,rightMargin:u,rules:null,scheme:null,scrolling:s,standby:null,summary:null,text:null,topMargin:u,valueType:null,version:null,vAlign:null,vLink:null,vSpace:u,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:o,disableRemotePlayback:o,prefix:null,property:null,results:u,security:null,unselectable:null}})},10855:(e,n,t)=>{"use strict";var a=t(28740);e.exports=function(e,n){return a(e,n.toLowerCase())}},28740:e=>{"use strict";e.exports=function(e,n){return n in e?e[n]:n}},17596:(e,n,t)=>{"use strict";var a=t(66632),r=t(99607),l=t(98805);e.exports=function(e){var n,t,o=e.space,i=e.mustUseProperty||[],s=e.attributes||{},u=e.properties,c=e.transform,p={},d={};for(n in u)t=new l(n,c(s,n),u[n],o),-1!==i.indexOf(n)&&(t.mustUseProperty=!0),p[n]=t,d[a(n)]=n,d[a(t.attribute)]=n;return new r(p,d,o)}},98805:(e,n,t)=>{"use strict";var a=t(57643),r=t(17e3);e.exports=i,i.prototype=new a,i.prototype.defined=!0;var l=["boolean","booleanish","overloadedBoolean","number","commaSeparated","spaceSeparated","commaOrSpaceSeparated"],o=l.length;function i(e,n,t,i){var u,c=-1;for(s(this,"space",i),a.call(this,e,n);++c<o;)s(this,u=l[c],(t&r[u])===r[u])}function s(e,n,t){t&&(e[n]=t)}},57643:e=>{"use strict";e.exports=t;var n=t.prototype;function t(e,n){this.property=e,this.attribute=n}n.space=null,n.attribute=null,n.property=null,n.boolean=!1,n.booleanish=!1,n.overloadedBoolean=!1,n.number=!1,n.commaSeparated=!1,n.spaceSeparated=!1,n.commaOrSpaceSeparated=!1,n.mustUseProperty=!1,n.defined=!1},19940:(e,n,t)=>{"use strict";var a=t(47529),r=t(99607);e.exports=function(e){for(var n,t,l=e.length,o=[],i=[],s=-1;++s<l;)n=e[s],o.push(n.property),i.push(n.normal),t=n.space;return new r(a.apply(null,o),a.apply(null,i),t)}},99607:e=>{"use strict";e.exports=t;var n=t.prototype;function t(e,n,t){this.property=e,this.normal=n,t&&(this.space=t)}n.space=null,n.normal={},n.property={}},17e3:(e,n)=>{"use strict";var t=0;function a(){return Math.pow(2,++t)}n.boolean=a(),n.booleanish=a(),n.overloadedBoolean=a(),n.number=a(),n.spaceSeparated=a(),n.commaSeparated=a(),n.commaOrSpaceSeparated=a()},8289:(e,n,t)=>{"use strict";var a=t(17596);e.exports=a({space:"xlink",transform:function(e,n){return"xlink:"+n.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}})},5812:(e,n,t)=>{"use strict";var a=t(17596);e.exports=a({space:"xml",transform:function(e,n){return"xml:"+n.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}})},94397:(e,n,t)=>{"use strict";var a=t(17596),r=t(10855);e.exports=a({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:r,properties:{xmlns:null,xmlnsXLink:null}})},66632:e=>{"use strict";e.exports=function(e){return e.toLowerCase()}},11215:(e,n,t)=>{"use strict";var a,r,l=(a="Prism"in t.g,r=a?t.g.Prism:void 0,function(){a?t.g.Prism=r:delete t.g.Prism,a=void 0,r=void 0});("undefined"==typeof window?"undefined"==typeof self?{}:self:window).Prism={manual:!0,disableWorkerMessageHandler:!0};var o=t(31742),i=t(57574),s=t(59216),u=t(2717),c=t(12049),p=t(29726),d=t(36155);l();var g={}.hasOwnProperty;function f(){}f.prototype=s;var m=new f;function h(e){if("function"!=typeof e||!e.displayName)throw new Error("Expected `function` for `grammar`, got `"+e+"`");void 0===m.languages[e.displayName]&&e(m)}e.exports=m,m.highlight=function(e,n){var t,a=s.highlight;if("string"!=typeof e)throw new Error("Expected `string` for `value`, got `"+e+"`");if("Object"===m.util.type(n))t=n,n=null;else{if("string"!=typeof n)throw new Error("Expected `string` for `name`, got `"+n+"`");if(!g.call(m.languages,n))throw new Error("Unknown language: `"+n+"` is not registered");t=m.languages[n]}return a.call(this,e,t,n)},m.register=h,m.alias=function(e,n){var t,a,r,l,o=m.languages,i=e;for(t in n&&((i={})[e]=n),i)for(r=(a="string"==typeof(a=i[t])?[a]:a).length,l=-1;++l<r;)o[a[l]]=o[t]},m.registered=function(e){if("string"!=typeof e)throw new Error("Expected `string` for `language`, got `"+e+"`");return g.call(m.languages,e)},m.listLanguages=function(){var e,n=m.languages,t=[];for(e in n)g.call(n,e)&&"object"==typeof n[e]&&t.push(e);return t},h(u),h(c),h(p),h(d),m.util.encode=function(e){return e},m.Token.stringify=function(e,n,t){var a;return"string"==typeof e?{type:"text",value:e}:"Array"===m.util.type(e)?function(e,n){for(var t,a=[],r=e.length,l=-1;++l<r;)""!==(t=e[l])&&null!=t&&a.push(t);for(l=-1,r=a.length;++l<r;)t=a[l],a[l]=m.Token.stringify(t,n,a);return a}(e,n):(a={type:e.type,content:m.Token.stringify(e.content,n,t),tag:"span",classes:["token",e.type],attributes:{},language:n,parent:t},e.alias&&(a.classes=a.classes.concat(e.alias)),m.hooks.run("wrap",a),o(a.tag+"."+a.classes.join("."),function(e){var n;for(n in e)e[n]=i(e[n]);return e}(a.attributes),a.content))}},29726:e=>{"use strict";function n(e){e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/}}e.exports=n,n.displayName="clike",n.aliases=[]},12049:e=>{"use strict";function n(e){!function(e){var n=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+n.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+n.source+")*?(?=\\s*\\{)"),string:{pattern:n,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var t=e.languages.markup;t&&(t.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:t.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},t.tag))}(e)}e.exports=n,n.displayName="css",n.aliases=[]},36155:e=>{"use strict";function n(e){e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}}}),e.languages.markup&&e.languages.markup.tag.addInlined("script","javascript"),e.languages.js=e.languages.javascript}e.exports=n,n.displayName="javascript",n.aliases=["js"]},2717:e=>{"use strict";function n(e){e.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.value.replace(/&amp;/,"&"))})),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(n,t){var a={};a["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[t]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};r["language-"+t]={pattern:/[\s\S]+/,inside:e.languages[t]};var l={};l[n]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,n),"i"),lookbehind:!0,greedy:!0,inside:r},e.languages.insertBefore("markup","cdata",l)}}),e.languages.xml=e.languages.extend("markup",{}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup}e.exports=n,n.displayName="markup",n.aliases=["xml","html","mathml","svg"]},59216:(e,n,t)=>{var a=function(e){var n=/\blang(?:uage)?-([\w-]+)\b/i,t=0,a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof r?new r(e.type,a.util.encode(e.content),e.alias):Array.isArray(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++t}),e.__id},clone:function e(n,t){var r,l,o=a.util.type(n);switch(t=t||{},o){case"Object":if(l=a.util.objId(n),t[l])return t[l];for(var i in r={},t[l]=r,n)n.hasOwnProperty(i)&&(r[i]=e(n[i],t));return r;case"Array":return l=a.util.objId(n),t[l]?t[l]:(r=[],t[l]=r,n.forEach((function(n,a){r[a]=e(n,t)})),r);default:return n}}},languages:{extend:function(e,n){var t=a.util.clone(a.languages[e]);for(var r in n)t[r]=n[r];return t},insertBefore:function(e,n,t,r){var l=(r=r||a.languages)[e],o={};for(var i in l)if(l.hasOwnProperty(i)){if(i==n)for(var s in t)t.hasOwnProperty(s)&&(o[s]=t[s]);t.hasOwnProperty(i)||(o[i]=l[i])}var u=r[e];return r[e]=o,a.languages.DFS(a.languages,(function(n,t){t===u&&n!=e&&(this[n]=o)})),o},DFS:function e(n,t,r,l){l=l||{};var o=a.util.objId;for(var i in n)if(n.hasOwnProperty(i)){t.call(n,i,n[i],r||i);var s=n[i],u=a.util.type(s);"Object"!==u||l[o(s)]?"Array"!==u||l[o(s)]||(l[o(s)]=!0,e(s,t,i,l)):(l[o(s)]=!0,e(s,t,null,l))}}},plugins:{},highlightAll:function(e,n){a.highlightAllUnder(document,e,n)},highlightAllUnder:function(e,n,t){var r={callback:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r);for(var l,o=e.querySelectorAll(r.selector),i=0;l=o[i++];)a.highlightElement(l,!0===n,r.callback)},highlightElement:function(t,r,l){for(var o,i="none",s=t;s&&!n.test(s.className);)s=s.parentNode;s&&(i=(s.className.match(n)||[,"none"])[1].toLowerCase(),o=a.languages[i]),t.className=t.className.replace(n,"").replace(/\s+/g," ")+" language-"+i,t.parentNode&&(s=t.parentNode,/pre/i.test(s.nodeName)&&(s.className=s.className.replace(n,"").replace(/\s+/g," ")+" language-"+i));var u={element:t,language:i,grammar:o,code:t.textContent},c=function(e){u.highlightedCode=e,a.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,a.hooks.run("after-highlight",u),a.hooks.run("complete",u),l&&l.call(u.element)};if(a.hooks.run("before-sanity-check",u),u.code)if(a.hooks.run("before-highlight",u),u.grammar)if(r&&e.Worker){var p=new Worker(a.filename);p.onmessage=function(e){c(e.data)},p.postMessage(JSON.stringify({language:u.language,code:u.code,immediateClose:!0}))}else c(a.highlight(u.code,u.grammar,u.language));else c(a.util.encode(u.code));else a.hooks.run("complete",u)},highlight:function(e,n,t){var l={code:e,grammar:n,language:t};return a.hooks.run("before-tokenize",l),l.tokens=a.tokenize(l.code,l.grammar),a.hooks.run("after-tokenize",l),r.stringify(a.util.encode(l.tokens),l.language)},matchGrammar:function(e,n,t,l,o,i,s){for(var u in t)if(t.hasOwnProperty(u)&&t[u]){if(u==s)return;var c=t[u];c="Array"===a.util.type(c)?c:[c];for(var p=0;p<c.length;++p){var d=c[p],g=d.inside,f=!!d.lookbehind,m=!!d.greedy,h=0,y=d.alias;if(m&&!d.pattern.global){var v=d.pattern.toString().match(/[imuy]*$/)[0];d.pattern=RegExp(d.pattern.source,v+"g")}d=d.pattern||d;for(var b=l,x=o;b<n.length;x+=n[b].length,++b){var w=n[b];if(n.length>e.length)return;if(!(w instanceof r)){if(m&&b!=n.length-1){if(d.lastIndex=x,!(P=d.exec(e)))break;for(var k=P.index+(f?P[1].length:0),A=P.index+P[0].length,S=b,F=x,C=n.length;S<C&&(F<A||!n[S].type&&!n[S-1].greedy);++S)k>=(F+=n[S].length)&&(++b,x=F);if(n[b]instanceof r)continue;N=S-b,w=e.slice(x,F),P.index-=x}else{d.lastIndex=0;var P=d.exec(w),N=1}if(P){f&&(h=P[1]?P[1].length:0),A=(k=P.index+h)+(P=P[0].slice(h)).length;var O=w.slice(0,k),E=w.slice(A),L=[b,N];O&&(++b,x+=O.length,L.push(O));var j=new r(u,g?a.tokenize(P,g):P,y,P,m);if(L.push(j),E&&L.push(E),Array.prototype.splice.apply(n,L),1!=N&&a.matchGrammar(e,n,t,b,x,!0,u),i)break}else if(i)break}}}}},tokenize:function(e,n){var t=[e],r=n.rest;if(r){for(var l in r)n[l]=r[l];delete n.rest}return a.matchGrammar(e,t,n,0,0,!1),t},hooks:{all:{},add:function(e,n){var t=a.hooks.all;t[e]=t[e]||[],t[e].push(n)},run:function(e,n){var t=a.hooks.all[e];if(t&&t.length)for(var r,l=0;r=t[l++];)r(n)}},Token:r};function r(e,n,t,a,r){this.type=e,this.content=n,this.alias=t,this.length=0|(a||"").length,this.greedy=!!r}if(e.Prism=a,r.stringify=function(e,n){if("string"==typeof e)return e;if(Array.isArray(e))return e.map((function(e){return r.stringify(e,n)})).join("");var t={type:e.type,content:r.stringify(e.content,n),tag:"span",classes:["token",e.type],attributes:{},language:n};if(e.alias){var l=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(t.classes,l)}a.hooks.run("wrap",t);var o=Object.keys(t.attributes).map((function(e){return e+'="'+(t.attributes[e]||"").replace(/"/g,"&quot;")+'"'})).join(" ");return"<"+t.tag+' class="'+t.classes.join(" ")+'"'+(o?" "+o:"")+">"+t.content+"</"+t.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(n){var t=JSON.parse(n.data),r=t.language,l=t.code,o=t.immediateClose;e.postMessage(a.highlight(l,a.languages[r],r)),o&&e.close()}),!1),a):a;var l=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return l&&(a.filename=l.src,a.manual||l.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),a}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=a),void 0!==t.g&&(t.g.Prism=a)},36582:(e,n)=>{"use strict";n.Q=function(e){var n=String(e||"").trim();return""===n?[]:n.split(t)};var t=/[ \t\n\r\f]+/g},47529:e=>{e.exports=function(){for(var e={},t=0;t<arguments.length;t++){var a=arguments[t];for(var r in a)n.call(a,r)&&(e[r]=a[r])}return e};var n=Object.prototype.hasOwnProperty},37452:e=>{"use strict";e.exports=JSON.parse('{"AElig":"Æ","AMP":"&","Aacute":"Á","Acirc":"Â","Agrave":"À","Aring":"Å","Atilde":"Ã","Auml":"Ä","COPY":"©","Ccedil":"Ç","ETH":"Ð","Eacute":"É","Ecirc":"Ê","Egrave":"È","Euml":"Ë","GT":">","Iacute":"Í","Icirc":"Î","Igrave":"Ì","Iuml":"Ï","LT":"<","Ntilde":"Ñ","Oacute":"Ó","Ocirc":"Ô","Ograve":"Ò","Oslash":"Ø","Otilde":"Õ","Ouml":"Ö","QUOT":"\\"","REG":"®","THORN":"Þ","Uacute":"Ú","Ucirc":"Û","Ugrave":"Ù","Uuml":"Ü","Yacute":"Ý","aacute":"á","acirc":"â","acute":"´","aelig":"æ","agrave":"à","amp":"&","aring":"å","atilde":"ã","auml":"ä","brvbar":"¦","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","curren":"¤","deg":"°","divide":"÷","eacute":"é","ecirc":"ê","egrave":"è","eth":"ð","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","iacute":"í","icirc":"î","iexcl":"¡","igrave":"ì","iquest":"¿","iuml":"ï","laquo":"«","lt":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","ntilde":"ñ","oacute":"ó","ocirc":"ô","ograve":"ò","ordf":"ª","ordm":"º","oslash":"ø","otilde":"õ","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\\"","raquo":"»","reg":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","thorn":"þ","times":"×","uacute":"ú","ucirc":"û","ugrave":"ù","uml":"¨","uuml":"ü","yacute":"ý","yen":"¥","yuml":"ÿ"}')},93580:e=>{"use strict";e.exports=JSON.parse('{"0":"�","128":"€","130":"‚","131":"ƒ","132":"„","133":"…","134":"†","135":"‡","136":"ˆ","137":"‰","138":"Š","139":"‹","140":"Œ","142":"Ž","145":"‘","146":"’","147":"“","148":"”","149":"•","150":"–","151":"—","152":"˜","153":"™","154":"š","155":"›","156":"œ","158":"ž","159":"Ÿ"}')}}]);