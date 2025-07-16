(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))u(f);new MutationObserver(f=>{for(const d of f)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&u(p)}).observe(document,{childList:!0,subtree:!0});function c(f){const d={};return f.integrity&&(d.integrity=f.integrity),f.referrerPolicy&&(d.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?d.credentials="include":f.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function u(f){if(f.ep)return;f.ep=!0;const d=c(f);fetch(f.href,d)}})();function Cp(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var oc={exports:{}},Kl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xh;function Hp(){if(xh)return Kl;xh=1;var i=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function c(u,f,d){var p=null;if(d!==void 0&&(p=""+d),f.key!==void 0&&(p=""+f.key),"key"in f){d={};for(var y in f)y!=="key"&&(d[y]=f[y])}else d=f;return f=d.ref,{$$typeof:i,type:u,key:p,ref:f!==void 0?f:null,props:d}}return Kl.Fragment=o,Kl.jsx=c,Kl.jsxs=c,Kl}var Sh;function jp(){return Sh||(Sh=1,oc.exports=Hp()),oc.exports}var w=jp(),uc={exports:{}},nt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oh;function qp(){if(Oh)return nt;Oh=1;var i=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),p=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),N=Symbol.iterator;function _(x){return x===null||typeof x!="object"?null:(x=N&&x[N]||x["@@iterator"],typeof x=="function"?x:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,D={};function Y(x,B,G){this.props=x,this.context=B,this.refs=D,this.updater=G||k}Y.prototype.isReactComponent={},Y.prototype.setState=function(x,B){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,B,"setState")},Y.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function H(){}H.prototype=Y.prototype;function K(x,B,G){this.props=x,this.context=B,this.refs=D,this.updater=G||k}var Z=K.prototype=new H;Z.constructor=K,E(Z,Y.prototype),Z.isPureReactComponent=!0;var ut=Array.isArray,$={H:null,A:null,T:null,S:null,V:null},gt=Object.prototype.hasOwnProperty;function mt(x,B,G,L,P,ft){return G=ft.ref,{$$typeof:i,type:x,key:B,ref:G!==void 0?G:null,props:ft}}function Ot(x,B){return mt(x.type,B,void 0,void 0,void 0,x.props)}function ct(x){return typeof x=="object"&&x!==null&&x.$$typeof===i}function It(x){var B={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(G){return B[G]})}var ge=/\/+/g;function Jt(x,B){return typeof x=="object"&&x!==null&&x.key!=null?It(""+x.key):B.toString(36)}function qn(){}function Bn(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(qn,qn):(x.status="pending",x.then(function(B){x.status==="pending"&&(x.status="fulfilled",x.value=B)},function(B){x.status==="pending"&&(x.status="rejected",x.reason=B)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function $t(x,B,G,L,P){var ft=typeof x;(ft==="undefined"||ft==="boolean")&&(x=null);var et=!1;if(x===null)et=!0;else switch(ft){case"bigint":case"string":case"number":et=!0;break;case"object":switch(x.$$typeof){case i:case o:et=!0;break;case g:return et=x._init,$t(et(x._payload),B,G,L,P)}}if(et)return P=P(x),et=L===""?"."+Jt(x,0):L,ut(P)?(G="",et!=null&&(G=et.replace(ge,"$&/")+"/"),$t(P,B,G,"",function(sn){return sn})):P!=null&&(ct(P)&&(P=Ot(P,G+(P.key==null||x&&x.key===P.key?"":(""+P.key).replace(ge,"$&/")+"/")+et)),B.push(P)),1;et=0;var oe=L===""?".":L+":";if(ut(x))for(var _t=0;_t<x.length;_t++)L=x[_t],ft=oe+Jt(L,_t),et+=$t(L,B,G,ft,P);else if(_t=_(x),typeof _t=="function")for(x=_t.call(x),_t=0;!(L=x.next()).done;)L=L.value,ft=oe+Jt(L,_t++),et+=$t(L,B,G,ft,P);else if(ft==="object"){if(typeof x.then=="function")return $t(Bn(x),B,G,L,P);throw B=String(x),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return et}function C(x,B,G){if(x==null)return x;var L=[],P=0;return $t(x,L,"","",function(ft){return B.call(G,ft,P++)}),L}function X(x){if(x._status===-1){var B=x._result;B=B(),B.then(function(G){(x._status===0||x._status===-1)&&(x._status=1,x._result=G)},function(G){(x._status===0||x._status===-1)&&(x._status=2,x._result=G)}),x._status===-1&&(x._status=0,x._result=B)}if(x._status===1)return x._result.default;throw x._result}var I=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)};function Et(){}return nt.Children={map:C,forEach:function(x,B,G){C(x,function(){B.apply(this,arguments)},G)},count:function(x){var B=0;return C(x,function(){B++}),B},toArray:function(x){return C(x,function(B){return B})||[]},only:function(x){if(!ct(x))throw Error("React.Children.only expected to receive a single React element child.");return x}},nt.Component=Y,nt.Fragment=c,nt.Profiler=f,nt.PureComponent=K,nt.StrictMode=u,nt.Suspense=b,nt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=$,nt.__COMPILER_RUNTIME={__proto__:null,c:function(x){return $.H.useMemoCache(x)}},nt.cache=function(x){return function(){return x.apply(null,arguments)}},nt.cloneElement=function(x,B,G){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var L=E({},x.props),P=x.key,ft=void 0;if(B!=null)for(et in B.ref!==void 0&&(ft=void 0),B.key!==void 0&&(P=""+B.key),B)!gt.call(B,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&B.ref===void 0||(L[et]=B[et]);var et=arguments.length-2;if(et===1)L.children=G;else if(1<et){for(var oe=Array(et),_t=0;_t<et;_t++)oe[_t]=arguments[_t+2];L.children=oe}return mt(x.type,P,void 0,void 0,ft,L)},nt.createContext=function(x){return x={$$typeof:p,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:d,_context:x},x},nt.createElement=function(x,B,G){var L,P={},ft=null;if(B!=null)for(L in B.key!==void 0&&(ft=""+B.key),B)gt.call(B,L)&&L!=="key"&&L!=="__self"&&L!=="__source"&&(P[L]=B[L]);var et=arguments.length-2;if(et===1)P.children=G;else if(1<et){for(var oe=Array(et),_t=0;_t<et;_t++)oe[_t]=arguments[_t+2];P.children=oe}if(x&&x.defaultProps)for(L in et=x.defaultProps,et)P[L]===void 0&&(P[L]=et[L]);return mt(x,ft,void 0,void 0,null,P)},nt.createRef=function(){return{current:null}},nt.forwardRef=function(x){return{$$typeof:y,render:x}},nt.isValidElement=ct,nt.lazy=function(x){return{$$typeof:g,_payload:{_status:-1,_result:x},_init:X}},nt.memo=function(x,B){return{$$typeof:m,type:x,compare:B===void 0?null:B}},nt.startTransition=function(x){var B=$.T,G={};$.T=G;try{var L=x(),P=$.S;P!==null&&P(G,L),typeof L=="object"&&L!==null&&typeof L.then=="function"&&L.then(Et,I)}catch(ft){I(ft)}finally{$.T=B}},nt.unstable_useCacheRefresh=function(){return $.H.useCacheRefresh()},nt.use=function(x){return $.H.use(x)},nt.useActionState=function(x,B,G){return $.H.useActionState(x,B,G)},nt.useCallback=function(x,B){return $.H.useCallback(x,B)},nt.useContext=function(x){return $.H.useContext(x)},nt.useDebugValue=function(){},nt.useDeferredValue=function(x,B){return $.H.useDeferredValue(x,B)},nt.useEffect=function(x,B,G){var L=$.H;if(typeof G=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return L.useEffect(x,B)},nt.useId=function(){return $.H.useId()},nt.useImperativeHandle=function(x,B,G){return $.H.useImperativeHandle(x,B,G)},nt.useInsertionEffect=function(x,B){return $.H.useInsertionEffect(x,B)},nt.useLayoutEffect=function(x,B){return $.H.useLayoutEffect(x,B)},nt.useMemo=function(x,B){return $.H.useMemo(x,B)},nt.useOptimistic=function(x,B){return $.H.useOptimistic(x,B)},nt.useReducer=function(x,B,G){return $.H.useReducer(x,B,G)},nt.useRef=function(x){return $.H.useRef(x)},nt.useState=function(x){return $.H.useState(x)},nt.useSyncExternalStore=function(x,B,G){return $.H.useSyncExternalStore(x,B,G)},nt.useTransition=function(){return $.H.useTransition()},nt.version="19.1.0",nt}var Eh;function Sc(){return Eh||(Eh=1,uc.exports=qp()),uc.exports}var z=Sc();const vt=Cp(z);var cc={exports:{}},Jl={},sc={exports:{}},fc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Th;function Bp(){return Th||(Th=1,function(i){function o(C,X){var I=C.length;C.push(X);t:for(;0<I;){var Et=I-1>>>1,x=C[Et];if(0<f(x,X))C[Et]=X,C[I]=x,I=Et;else break t}}function c(C){return C.length===0?null:C[0]}function u(C){if(C.length===0)return null;var X=C[0],I=C.pop();if(I!==X){C[0]=I;t:for(var Et=0,x=C.length,B=x>>>1;Et<B;){var G=2*(Et+1)-1,L=C[G],P=G+1,ft=C[P];if(0>f(L,I))P<x&&0>f(ft,L)?(C[Et]=ft,C[P]=I,Et=P):(C[Et]=L,C[G]=I,Et=G);else if(P<x&&0>f(ft,I))C[Et]=ft,C[P]=I,Et=P;else break t}}return X}function f(C,X){var I=C.sortIndex-X.sortIndex;return I!==0?I:C.id-X.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;i.unstable_now=function(){return d.now()}}else{var p=Date,y=p.now();i.unstable_now=function(){return p.now()-y}}var b=[],m=[],g=1,N=null,_=3,k=!1,E=!1,D=!1,Y=!1,H=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,Z=typeof setImmediate<"u"?setImmediate:null;function ut(C){for(var X=c(m);X!==null;){if(X.callback===null)u(m);else if(X.startTime<=C)u(m),X.sortIndex=X.expirationTime,o(b,X);else break;X=c(m)}}function $(C){if(D=!1,ut(C),!E)if(c(b)!==null)E=!0,gt||(gt=!0,Jt());else{var X=c(m);X!==null&&$t($,X.startTime-C)}}var gt=!1,mt=-1,Ot=5,ct=-1;function It(){return Y?!0:!(i.unstable_now()-ct<Ot)}function ge(){if(Y=!1,gt){var C=i.unstable_now();ct=C;var X=!0;try{t:{E=!1,D&&(D=!1,K(mt),mt=-1),k=!0;var I=_;try{e:{for(ut(C),N=c(b);N!==null&&!(N.expirationTime>C&&It());){var Et=N.callback;if(typeof Et=="function"){N.callback=null,_=N.priorityLevel;var x=Et(N.expirationTime<=C);if(C=i.unstable_now(),typeof x=="function"){N.callback=x,ut(C),X=!0;break e}N===c(b)&&u(b),ut(C)}else u(b);N=c(b)}if(N!==null)X=!0;else{var B=c(m);B!==null&&$t($,B.startTime-C),X=!1}}break t}finally{N=null,_=I,k=!1}X=void 0}}finally{X?Jt():gt=!1}}}var Jt;if(typeof Z=="function")Jt=function(){Z(ge)};else if(typeof MessageChannel<"u"){var qn=new MessageChannel,Bn=qn.port2;qn.port1.onmessage=ge,Jt=function(){Bn.postMessage(null)}}else Jt=function(){H(ge,0)};function $t(C,X){mt=H(function(){C(i.unstable_now())},X)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(C){C.callback=null},i.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ot=0<C?Math.floor(1e3/C):5},i.unstable_getCurrentPriorityLevel=function(){return _},i.unstable_next=function(C){switch(_){case 1:case 2:case 3:var X=3;break;default:X=_}var I=_;_=X;try{return C()}finally{_=I}},i.unstable_requestPaint=function(){Y=!0},i.unstable_runWithPriority=function(C,X){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var I=_;_=C;try{return X()}finally{_=I}},i.unstable_scheduleCallback=function(C,X,I){var Et=i.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?Et+I:Et):I=Et,C){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=I+x,C={id:g++,callback:X,priorityLevel:C,startTime:I,expirationTime:x,sortIndex:-1},I>Et?(C.sortIndex=I,o(m,C),c(b)===null&&C===c(m)&&(D?(K(mt),mt=-1):D=!0,$t($,I-Et))):(C.sortIndex=x,o(b,C),E||k||(E=!0,gt||(gt=!0,Jt()))),C},i.unstable_shouldYield=It,i.unstable_wrapCallback=function(C){var X=_;return function(){var I=_;_=X;try{return C.apply(this,arguments)}finally{_=I}}}}(fc)),fc}var Ah;function Yp(){return Ah||(Ah=1,sc.exports=Bp()),sc.exports}var dc={exports:{}},Ft={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _h;function Lp(){if(_h)return Ft;_h=1;var i=Sc();function o(b){var m="https://react.dev/errors/"+b;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+b+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var u={d:{f:c,r:function(){throw Error(o(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},f=Symbol.for("react.portal");function d(b,m,g){var N=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:N==null?null:""+N,children:b,containerInfo:m,implementation:g}}var p=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function y(b,m){if(b==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Ft.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Ft.createPortal=function(b,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(o(299));return d(b,m,null,g)},Ft.flushSync=function(b){var m=p.T,g=u.p;try{if(p.T=null,u.p=2,b)return b()}finally{p.T=m,u.p=g,u.d.f()}},Ft.preconnect=function(b,m){typeof b=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,u.d.C(b,m))},Ft.prefetchDNS=function(b){typeof b=="string"&&u.d.D(b)},Ft.preinit=function(b,m){if(typeof b=="string"&&m&&typeof m.as=="string"){var g=m.as,N=y(g,m.crossOrigin),_=typeof m.integrity=="string"?m.integrity:void 0,k=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?u.d.S(b,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:N,integrity:_,fetchPriority:k}):g==="script"&&u.d.X(b,{crossOrigin:N,integrity:_,fetchPriority:k,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Ft.preinitModule=function(b,m){if(typeof b=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=y(m.as,m.crossOrigin);u.d.M(b,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&u.d.M(b)},Ft.preload=function(b,m){if(typeof b=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,N=y(g,m.crossOrigin);u.d.L(b,g,{crossOrigin:N,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Ft.preloadModule=function(b,m){if(typeof b=="string")if(m){var g=y(m.as,m.crossOrigin);u.d.m(b,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else u.d.m(b)},Ft.requestFormReset=function(b){u.d.r(b)},Ft.unstable_batchedUpdates=function(b,m){return b(m)},Ft.useFormState=function(b,m,g){return p.H.useFormState(b,m,g)},Ft.useFormStatus=function(){return p.H.useHostTransitionStatus()},Ft.version="19.1.0",Ft}var Dh;function Xp(){if(Dh)return dc.exports;Dh=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(o){console.error(o)}}return i(),dc.exports=Lp(),dc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zh;function Gp(){if(zh)return Jl;zh=1;var i=Yp(),o=Sc(),c=Xp();function u(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function d(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function p(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function y(t){if(d(t)!==t)throw Error(u(188))}function b(t){var e=t.alternate;if(!e){if(e=d(t),e===null)throw Error(u(188));return e!==t?null:t}for(var n=t,a=e;;){var l=n.return;if(l===null)break;var r=l.alternate;if(r===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===r.child){for(r=l.child;r;){if(r===n)return y(l),t;if(r===a)return y(l),e;r=r.sibling}throw Error(u(188))}if(n.return!==a.return)n=l,a=r;else{for(var s=!1,h=l.child;h;){if(h===n){s=!0,n=l,a=r;break}if(h===a){s=!0,a=l,n=r;break}h=h.sibling}if(!s){for(h=r.child;h;){if(h===n){s=!0,n=r,a=l;break}if(h===a){s=!0,a=r,n=l;break}h=h.sibling}if(!s)throw Error(u(189))}}if(n.alternate!==a)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?t:e}function m(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=m(t),e!==null)return e;t=t.sibling}return null}var g=Object.assign,N=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),H=Symbol.for("react.provider"),K=Symbol.for("react.consumer"),Z=Symbol.for("react.context"),ut=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),gt=Symbol.for("react.suspense_list"),mt=Symbol.for("react.memo"),Ot=Symbol.for("react.lazy"),ct=Symbol.for("react.activity"),It=Symbol.for("react.memo_cache_sentinel"),ge=Symbol.iterator;function Jt(t){return t===null||typeof t!="object"?null:(t=ge&&t[ge]||t["@@iterator"],typeof t=="function"?t:null)}var qn=Symbol.for("react.client.reference");function Bn(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===qn?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case E:return"Fragment";case Y:return"Profiler";case D:return"StrictMode";case $:return"Suspense";case gt:return"SuspenseList";case ct:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case k:return"Portal";case Z:return(t.displayName||"Context")+".Provider";case K:return(t._context.displayName||"Context")+".Consumer";case ut:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case mt:return e=t.displayName||null,e!==null?e:Bn(t.type)||"Memo";case Ot:e=t._payload,t=t._init;try{return Bn(t(e))}catch{}}return null}var $t=Array.isArray,C=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},Et=[],x=-1;function B(t){return{current:t}}function G(t){0>x||(t.current=Et[x],Et[x]=null,x--)}function L(t,e){x++,Et[x]=t.current,t.current=e}var P=B(null),ft=B(null),et=B(null),oe=B(null);function _t(t,e){switch(L(et,e),L(ft,t),L(P,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?Jd(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=Jd(e),t=$d(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}G(P),L(P,t)}function sn(){G(P),G(ft),G(et)}function Zr(t){t.memoizedState!==null&&L(oe,t);var e=P.current,n=$d(e,t.type);e!==n&&(L(ft,t),L(P,n))}function ci(t){ft.current===t&&(G(P),G(ft)),oe.current===t&&(G(oe),Xl._currentValue=I)}var Vr=Object.prototype.hasOwnProperty,Kr=i.unstable_scheduleCallback,Jr=i.unstable_cancelCallback,h0=i.unstable_shouldYield,m0=i.unstable_requestPaint,we=i.unstable_now,p0=i.unstable_getCurrentPriorityLevel,Dc=i.unstable_ImmediatePriority,zc=i.unstable_UserBlockingPriority,si=i.unstable_NormalPriority,b0=i.unstable_LowPriority,Mc=i.unstable_IdlePriority,v0=i.log,g0=i.unstable_setDisableYieldValue,Pa=null,ue=null;function fn(t){if(typeof v0=="function"&&g0(t),ue&&typeof ue.setStrictMode=="function")try{ue.setStrictMode(Pa,t)}catch{}}var ce=Math.clz32?Math.clz32:S0,y0=Math.log,x0=Math.LN2;function S0(t){return t>>>=0,t===0?32:31-(y0(t)/x0|0)|0}var fi=256,di=4194304;function Yn(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function hi(t,e,n){var a=t.pendingLanes;if(a===0)return 0;var l=0,r=t.suspendedLanes,s=t.pingedLanes;t=t.warmLanes;var h=a&134217727;return h!==0?(a=h&~r,a!==0?l=Yn(a):(s&=h,s!==0?l=Yn(s):n||(n=h&~t,n!==0&&(l=Yn(n))))):(h=a&~r,h!==0?l=Yn(h):s!==0?l=Yn(s):n||(n=a&~t,n!==0&&(l=Yn(n)))),l===0?0:e!==0&&e!==l&&(e&r)===0&&(r=l&-l,n=e&-e,r>=n||r===32&&(n&4194048)!==0)?e:l}function Wa(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function O0(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rc(){var t=fi;return fi<<=1,(fi&4194048)===0&&(fi=256),t}function Nc(){var t=di;return di<<=1,(di&62914560)===0&&(di=4194304),t}function $r(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Fa(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function E0(t,e,n,a,l,r){var s=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var h=t.entanglements,v=t.expirationTimes,A=t.hiddenUpdates;for(n=s&~n;0<n;){var U=31-ce(n),q=1<<U;h[U]=0,v[U]=-1;var M=A[U];if(M!==null)for(A[U]=null,U=0;U<M.length;U++){var R=M[U];R!==null&&(R.lane&=-536870913)}n&=~q}a!==0&&kc(t,a,0),r!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=r&~(s&~e))}function kc(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var a=31-ce(e);t.entangledLanes|=e,t.entanglements[a]=t.entanglements[a]|1073741824|n&4194090}function wc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var a=31-ce(n),l=1<<a;l&e|t[a]&e&&(t[a]|=e),n&=~l}}function Pr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Wr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Uc(){var t=X.p;return t!==0?t:(t=window.event,t===void 0?32:mh(t.type))}function T0(t,e){var n=X.p;try{return X.p=t,e()}finally{X.p=n}}var dn=Math.random().toString(36).slice(2),Pt="__reactFiber$"+dn,ne="__reactProps$"+dn,oa="__reactContainer$"+dn,Fr="__reactEvents$"+dn,A0="__reactListeners$"+dn,_0="__reactHandles$"+dn,Cc="__reactResources$"+dn,Ia="__reactMarker$"+dn;function Ir(t){delete t[Pt],delete t[ne],delete t[Fr],delete t[A0],delete t[_0]}function ua(t){var e=t[Pt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[oa]||n[Pt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Id(t);t!==null;){if(n=t[Pt])return n;t=Id(t)}return e}t=n,n=t.parentNode}return null}function ca(t){if(t=t[Pt]||t[oa]){var e=t.tag;if(e===5||e===6||e===13||e===26||e===27||e===3)return t}return null}function tl(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(u(33))}function sa(t){var e=t[Cc];return e||(e=t[Cc]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Yt(t){t[Ia]=!0}var Hc=new Set,jc={};function Ln(t,e){fa(t,e),fa(t+"Capture",e)}function fa(t,e){for(jc[t]=e,t=0;t<e.length;t++)Hc.add(e[t])}var D0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),qc={},Bc={};function z0(t){return Vr.call(Bc,t)?!0:Vr.call(qc,t)?!1:D0.test(t)?Bc[t]=!0:(qc[t]=!0,!1)}function mi(t,e,n){if(z0(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var a=e.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function pi(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function Le(t,e,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+a)}}var to,Yc;function da(t){if(to===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);to=e&&e[1]||"",Yc=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+to+t+Yc}var eo=!1;function no(t,e){if(!t||eo)return"";eo=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(e){var q=function(){throw Error()};if(Object.defineProperty(q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(q,[])}catch(R){var M=R}Reflect.construct(t,[],q)}else{try{q.call()}catch(R){M=R}t.call(q.prototype)}}else{try{throw Error()}catch(R){M=R}(q=t())&&typeof q.catch=="function"&&q.catch(function(){})}}catch(R){if(R&&M&&typeof R.stack=="string")return[R.stack,M.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=a.DetermineComponentFrameRoot(),s=r[0],h=r[1];if(s&&h){var v=s.split(`
`),A=h.split(`
`);for(l=a=0;a<v.length&&!v[a].includes("DetermineComponentFrameRoot");)a++;for(;l<A.length&&!A[l].includes("DetermineComponentFrameRoot");)l++;if(a===v.length||l===A.length)for(a=v.length-1,l=A.length-1;1<=a&&0<=l&&v[a]!==A[l];)l--;for(;1<=a&&0<=l;a--,l--)if(v[a]!==A[l]){if(a!==1||l!==1)do if(a--,l--,0>l||v[a]!==A[l]){var U=`
`+v[a].replace(" at new "," at ");return t.displayName&&U.includes("<anonymous>")&&(U=U.replace("<anonymous>",t.displayName)),U}while(1<=a&&0<=l);break}}}finally{eo=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?da(n):""}function M0(t){switch(t.tag){case 26:case 27:case 5:return da(t.type);case 16:return da("Lazy");case 13:return da("Suspense");case 19:return da("SuspenseList");case 0:case 15:return no(t.type,!1);case 11:return no(t.type.render,!1);case 1:return no(t.type,!0);case 31:return da("Activity");default:return""}}function Lc(t){try{var e="";do e+=M0(t),t=t.return;while(t);return e}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}function ye(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xc(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function R0(t){var e=Xc(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),a=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,r=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(s){a=""+s,r.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function bi(t){t._valueTracker||(t._valueTracker=R0(t))}function Gc(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),a="";return t&&(a=Xc(t)?t.checked?"true":"false":t.value),t=a,t!==n?(e.setValue(t),!0):!1}function vi(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var N0=/[\n"\\]/g;function xe(t){return t.replace(N0,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function ao(t,e,n,a,l,r,s,h){t.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?t.type=s:t.removeAttribute("type"),e!=null?s==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+ye(e)):t.value!==""+ye(e)&&(t.value=""+ye(e)):s!=="submit"&&s!=="reset"||t.removeAttribute("value"),e!=null?lo(t,s,ye(e)):n!=null?lo(t,s,ye(n)):a!=null&&t.removeAttribute("value"),l==null&&r!=null&&(t.defaultChecked=!!r),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?t.name=""+ye(h):t.removeAttribute("name")}function Qc(t,e,n,a,l,r,s,h){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(t.type=r),e!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||e!=null))return;n=n!=null?""+ye(n):"",e=e!=null?""+ye(e):n,h||e===t.value||(t.value=e),t.defaultValue=e}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=h?t.checked:!!a,t.defaultChecked=!!a,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.name=s)}function lo(t,e,n){e==="number"&&vi(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function ha(t,e,n,a){if(t=t.options,e){e={};for(var l=0;l<n.length;l++)e["$"+n[l]]=!0;for(n=0;n<t.length;n++)l=e.hasOwnProperty("$"+t[n].value),t[n].selected!==l&&(t[n].selected=l),l&&a&&(t[n].defaultSelected=!0)}else{for(n=""+ye(n),e=null,l=0;l<t.length;l++){if(t[l].value===n){t[l].selected=!0,a&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function Zc(t,e,n){if(e!=null&&(e=""+ye(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+ye(n):""}function Vc(t,e,n,a){if(e==null){if(a!=null){if(n!=null)throw Error(u(92));if($t(a)){if(1<a.length)throw Error(u(93));a=a[0]}n=a}n==null&&(n=""),e=n}n=ye(e),t.defaultValue=n,a=t.textContent,a===n&&a!==""&&a!==null&&(t.value=a)}function ma(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var k0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Kc(t,e,n){var a=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":a?t.setProperty(e,n):typeof n!="number"||n===0||k0.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function Jc(t,e,n){if(e!=null&&typeof e!="object")throw Error(u(62));if(t=t.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||e!=null&&e.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var l in e)a=e[l],e.hasOwnProperty(l)&&n[l]!==a&&Kc(t,l,a)}else for(var r in e)e.hasOwnProperty(r)&&Kc(t,r,e[r])}function io(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var w0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),U0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gi(t){return U0.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var ro=null;function oo(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var pa=null,ba=null;function $c(t){var e=ca(t);if(e&&(t=e.stateNode)){var n=t[ne]||null;t:switch(t=e.stateNode,e.type){case"input":if(ao(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+xe(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var a=n[e];if(a!==t&&a.form===t.form){var l=a[ne]||null;if(!l)throw Error(u(90));ao(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<n.length;e++)a=n[e],a.form===t.form&&Gc(a)}break t;case"textarea":Zc(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&ha(t,!!n.multiple,e,!1)}}}var uo=!1;function Pc(t,e,n){if(uo)return t(e,n);uo=!0;try{var a=t(e);return a}finally{if(uo=!1,(pa!==null||ba!==null)&&(ar(),pa&&(e=pa,t=ba,ba=pa=null,$c(e),t)))for(e=0;e<t.length;e++)$c(t[e])}}function el(t,e){var n=t.stateNode;if(n===null)return null;var a=n[ne]||null;if(a===null)return null;n=a[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(u(231,e,typeof n));return n}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),co=!1;if(Xe)try{var nl={};Object.defineProperty(nl,"passive",{get:function(){co=!0}}),window.addEventListener("test",nl,nl),window.removeEventListener("test",nl,nl)}catch{co=!1}var hn=null,so=null,yi=null;function Wc(){if(yi)return yi;var t,e=so,n=e.length,a,l="value"in hn?hn.value:hn.textContent,r=l.length;for(t=0;t<n&&e[t]===l[t];t++);var s=n-t;for(a=1;a<=s&&e[n-a]===l[r-a];a++);return yi=l.slice(t,1<a?1-a:void 0)}function xi(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Si(){return!0}function Fc(){return!1}function ae(t){function e(n,a,l,r,s){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var h in t)t.hasOwnProperty(h)&&(n=t[h],this[h]=n?n(r):r[h]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Si:Fc,this.isPropagationStopped=Fc,this}return g(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Si)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Si)},persist:function(){},isPersistent:Si}),e}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oi=ae(Xn),al=g({},Xn,{view:0,detail:0}),C0=ae(al),fo,ho,ll,Ei=g({},al,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:po,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ll&&(ll&&t.type==="mousemove"?(fo=t.screenX-ll.screenX,ho=t.screenY-ll.screenY):ho=fo=0,ll=t),fo)},movementY:function(t){return"movementY"in t?t.movementY:ho}}),Ic=ae(Ei),H0=g({},Ei,{dataTransfer:0}),j0=ae(H0),q0=g({},al,{relatedTarget:0}),mo=ae(q0),B0=g({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0}),Y0=ae(B0),L0=g({},Xn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),X0=ae(L0),G0=g({},Xn,{data:0}),ts=ae(G0),Q0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Z0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},V0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function K0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=V0[t])?!!e[t]:!1}function po(){return K0}var J0=g({},al,{key:function(t){if(t.key){var e=Q0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Z0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:po,charCode:function(t){return t.type==="keypress"?xi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$0=ae(J0),P0=g({},Ei,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),es=ae(P0),W0=g({},al,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:po}),F0=ae(W0),I0=g({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),tm=ae(I0),em=g({},Ei,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nm=ae(em),am=g({},Xn,{newState:0,oldState:0}),lm=ae(am),im=[9,13,27,32],bo=Xe&&"CompositionEvent"in window,il=null;Xe&&"documentMode"in document&&(il=document.documentMode);var rm=Xe&&"TextEvent"in window&&!il,ns=Xe&&(!bo||il&&8<il&&11>=il),as=" ",ls=!1;function is(t,e){switch(t){case"keyup":return im.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rs(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var va=!1;function om(t,e){switch(t){case"compositionend":return rs(e);case"keypress":return e.which!==32?null:(ls=!0,as);case"textInput":return t=e.data,t===as&&ls?null:t;default:return null}}function um(t,e){if(va)return t==="compositionend"||!bo&&is(t,e)?(t=Wc(),yi=so=hn=null,va=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ns&&e.locale!=="ko"?null:e.data;default:return null}}var cm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function os(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!cm[t.type]:e==="textarea"}function us(t,e,n,a){pa?ba?ba.push(a):ba=[a]:pa=a,e=cr(e,"onChange"),0<e.length&&(n=new Oi("onChange","change",null,n,a),t.push({event:n,listeners:e}))}var rl=null,ol=null;function sm(t){Gd(t,0)}function Ti(t){var e=tl(t);if(Gc(e))return t}function cs(t,e){if(t==="change")return e}var ss=!1;if(Xe){var vo;if(Xe){var go="oninput"in document;if(!go){var fs=document.createElement("div");fs.setAttribute("oninput","return;"),go=typeof fs.oninput=="function"}vo=go}else vo=!1;ss=vo&&(!document.documentMode||9<document.documentMode)}function ds(){rl&&(rl.detachEvent("onpropertychange",hs),ol=rl=null)}function hs(t){if(t.propertyName==="value"&&Ti(ol)){var e=[];us(e,ol,t,oo(t)),Pc(sm,e)}}function fm(t,e,n){t==="focusin"?(ds(),rl=e,ol=n,rl.attachEvent("onpropertychange",hs)):t==="focusout"&&ds()}function dm(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ti(ol)}function hm(t,e){if(t==="click")return Ti(e)}function mm(t,e){if(t==="input"||t==="change")return Ti(e)}function pm(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var se=typeof Object.is=="function"?Object.is:pm;function ul(t,e){if(se(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),a=Object.keys(e);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!Vr.call(e,l)||!se(t[l],e[l]))return!1}return!0}function ms(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ps(t,e){var n=ms(t);t=0;for(var a;n;){if(n.nodeType===3){if(a=t+n.textContent.length,t<=e&&a>=e)return{node:n,offset:e-t};t=a}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=ms(n)}}function bs(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?bs(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function vs(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=vi(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vi(t.document)}return e}function yo(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var bm=Xe&&"documentMode"in document&&11>=document.documentMode,ga=null,xo=null,cl=null,So=!1;function gs(t,e,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;So||ga==null||ga!==vi(a)||(a=ga,"selectionStart"in a&&yo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),cl&&ul(cl,a)||(cl=a,a=cr(xo,"onSelect"),0<a.length&&(e=new Oi("onSelect","select",null,e,n),t.push({event:e,listeners:a}),e.target=ga)))}function Gn(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ya={animationend:Gn("Animation","AnimationEnd"),animationiteration:Gn("Animation","AnimationIteration"),animationstart:Gn("Animation","AnimationStart"),transitionrun:Gn("Transition","TransitionRun"),transitionstart:Gn("Transition","TransitionStart"),transitioncancel:Gn("Transition","TransitionCancel"),transitionend:Gn("Transition","TransitionEnd")},Oo={},ys={};Xe&&(ys=document.createElement("div").style,"AnimationEvent"in window||(delete ya.animationend.animation,delete ya.animationiteration.animation,delete ya.animationstart.animation),"TransitionEvent"in window||delete ya.transitionend.transition);function Qn(t){if(Oo[t])return Oo[t];if(!ya[t])return t;var e=ya[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ys)return Oo[t]=e[n];return t}var xs=Qn("animationend"),Ss=Qn("animationiteration"),Os=Qn("animationstart"),vm=Qn("transitionrun"),gm=Qn("transitionstart"),ym=Qn("transitioncancel"),Es=Qn("transitionend"),Ts=new Map,Eo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Eo.push("scrollEnd");function ze(t,e){Ts.set(t,e),Ln(e,[t])}var As=new WeakMap;function Se(t,e){if(typeof t=="object"&&t!==null){var n=As.get(t);return n!==void 0?n:(e={value:t,source:e,stack:Lc(e)},As.set(t,e),e)}return{value:t,source:e,stack:Lc(e)}}var Oe=[],xa=0,To=0;function Ai(){for(var t=xa,e=To=xa=0;e<t;){var n=Oe[e];Oe[e++]=null;var a=Oe[e];Oe[e++]=null;var l=Oe[e];Oe[e++]=null;var r=Oe[e];if(Oe[e++]=null,a!==null&&l!==null){var s=a.pending;s===null?l.next=l:(l.next=s.next,s.next=l),a.pending=l}r!==0&&_s(n,l,r)}}function _i(t,e,n,a){Oe[xa++]=t,Oe[xa++]=e,Oe[xa++]=n,Oe[xa++]=a,To|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function Ao(t,e,n,a){return _i(t,e,n,a),Di(t)}function Sa(t,e){return _i(t,null,null,e),Di(t)}function _s(t,e,n){t.lanes|=n;var a=t.alternate;a!==null&&(a.lanes|=n);for(var l=!1,r=t.return;r!==null;)r.childLanes|=n,a=r.alternate,a!==null&&(a.childLanes|=n),r.tag===22&&(t=r.stateNode,t===null||t._visibility&1||(l=!0)),t=r,r=r.return;return t.tag===3?(r=t.stateNode,l&&e!==null&&(l=31-ce(n),t=r.hiddenUpdates,a=t[l],a===null?t[l]=[e]:a.push(e),e.lane=n|536870912),r):null}function Di(t){if(50<Ul)throw Ul=0,Nu=null,Error(u(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Oa={};function xm(t,e,n,a){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fe(t,e,n,a){return new xm(t,e,n,a)}function _o(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ge(t,e){var n=t.alternate;return n===null?(n=fe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function Ds(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function zi(t,e,n,a,l,r){var s=0;if(a=t,typeof t=="function")_o(t)&&(s=1);else if(typeof t=="string")s=Op(t,n,P.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case ct:return t=fe(31,n,e,l),t.elementType=ct,t.lanes=r,t;case E:return Zn(n.children,l,r,e);case D:s=8,l|=24;break;case Y:return t=fe(12,n,e,l|2),t.elementType=Y,t.lanes=r,t;case $:return t=fe(13,n,e,l),t.elementType=$,t.lanes=r,t;case gt:return t=fe(19,n,e,l),t.elementType=gt,t.lanes=r,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case H:case Z:s=10;break t;case K:s=9;break t;case ut:s=11;break t;case mt:s=14;break t;case Ot:s=16,a=null;break t}s=29,n=Error(u(130,t===null?"null":typeof t,"")),a=null}return e=fe(s,n,e,l),e.elementType=t,e.type=a,e.lanes=r,e}function Zn(t,e,n,a){return t=fe(7,t,a,e),t.lanes=n,t}function Do(t,e,n){return t=fe(6,t,null,e),t.lanes=n,t}function zo(t,e,n){return e=fe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Ea=[],Ta=0,Mi=null,Ri=0,Ee=[],Te=0,Vn=null,Qe=1,Ze="";function Kn(t,e){Ea[Ta++]=Ri,Ea[Ta++]=Mi,Mi=t,Ri=e}function zs(t,e,n){Ee[Te++]=Qe,Ee[Te++]=Ze,Ee[Te++]=Vn,Vn=t;var a=Qe;t=Ze;var l=32-ce(a)-1;a&=~(1<<l),n+=1;var r=32-ce(e)+l;if(30<r){var s=l-l%5;r=(a&(1<<s)-1).toString(32),a>>=s,l-=s,Qe=1<<32-ce(e)+l|n<<l|a,Ze=r+t}else Qe=1<<r|n<<l|a,Ze=t}function Mo(t){t.return!==null&&(Kn(t,1),zs(t,1,0))}function Ro(t){for(;t===Mi;)Mi=Ea[--Ta],Ea[Ta]=null,Ri=Ea[--Ta],Ea[Ta]=null;for(;t===Vn;)Vn=Ee[--Te],Ee[Te]=null,Ze=Ee[--Te],Ee[Te]=null,Qe=Ee[--Te],Ee[Te]=null}var te=null,Nt=null,ht=!1,Jn=null,Ue=!1,No=Error(u(519));function $n(t){var e=Error(u(418,""));throw dl(Se(e,t)),No}function Ms(t){var e=t.stateNode,n=t.type,a=t.memoizedProps;switch(e[Pt]=t,e[ne]=a,n){case"dialog":rt("cancel",e),rt("close",e);break;case"iframe":case"object":case"embed":rt("load",e);break;case"video":case"audio":for(n=0;n<Hl.length;n++)rt(Hl[n],e);break;case"source":rt("error",e);break;case"img":case"image":case"link":rt("error",e),rt("load",e);break;case"details":rt("toggle",e);break;case"input":rt("invalid",e),Qc(e,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),bi(e);break;case"select":rt("invalid",e);break;case"textarea":rt("invalid",e),Vc(e,a.value,a.defaultValue,a.children),bi(e)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||a.suppressHydrationWarning===!0||Kd(e.textContent,n)?(a.popover!=null&&(rt("beforetoggle",e),rt("toggle",e)),a.onScroll!=null&&rt("scroll",e),a.onScrollEnd!=null&&rt("scrollend",e),a.onClick!=null&&(e.onclick=sr),e=!0):e=!1,e||$n(t)}function Rs(t){for(te=t.return;te;)switch(te.tag){case 5:case 13:Ue=!1;return;case 27:case 3:Ue=!0;return;default:te=te.return}}function sl(t){if(t!==te)return!1;if(!ht)return Rs(t),ht=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Ku(t.type,t.memoizedProps)),n=!n),n&&Nt&&$n(t),Rs(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(u(317));t:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8)if(n=t.data,n==="/$"){if(e===0){Nt=Re(t.nextSibling);break t}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++;t=t.nextSibling}Nt=null}}else e===27?(e=Nt,Mn(t.type)?(t=Wu,Wu=null,Nt=t):Nt=e):Nt=te?Re(t.stateNode.nextSibling):null;return!0}function fl(){Nt=te=null,ht=!1}function Ns(){var t=Jn;return t!==null&&(re===null?re=t:re.push.apply(re,t),Jn=null),t}function dl(t){Jn===null?Jn=[t]:Jn.push(t)}var ko=B(null),Pn=null,Ve=null;function mn(t,e,n){L(ko,e._currentValue),e._currentValue=n}function Ke(t){t._currentValue=ko.current,G(ko)}function wo(t,e,n){for(;t!==null;){var a=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,a!==null&&(a.childLanes|=e)):a!==null&&(a.childLanes&e)!==e&&(a.childLanes|=e),t===n)break;t=t.return}}function Uo(t,e,n,a){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var r=l.dependencies;if(r!==null){var s=l.child;r=r.firstContext;t:for(;r!==null;){var h=r;r=l;for(var v=0;v<e.length;v++)if(h.context===e[v]){r.lanes|=n,h=r.alternate,h!==null&&(h.lanes|=n),wo(r.return,n,t),a||(s=null);break t}r=h.next}}else if(l.tag===18){if(s=l.return,s===null)throw Error(u(341));s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),wo(s,n,t),s=null}else s=l.child;if(s!==null)s.return=l;else for(s=l;s!==null;){if(s===t){s=null;break}if(l=s.sibling,l!==null){l.return=s.return,s=l;break}s=s.return}l=s}}function hl(t,e,n,a){t=null;for(var l=e,r=!1;l!==null;){if(!r){if((l.flags&524288)!==0)r=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var s=l.alternate;if(s===null)throw Error(u(387));if(s=s.memoizedProps,s!==null){var h=l.type;se(l.pendingProps.value,s.value)||(t!==null?t.push(h):t=[h])}}else if(l===oe.current){if(s=l.alternate,s===null)throw Error(u(387));s.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Xl):t=[Xl])}l=l.return}t!==null&&Uo(e,t,n,a),e.flags|=262144}function Ni(t){for(t=t.firstContext;t!==null;){if(!se(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Wn(t){Pn=t,Ve=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Wt(t){return ks(Pn,t)}function ki(t,e){return Pn===null&&Wn(t),ks(t,e)}function ks(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Ve===null){if(t===null)throw Error(u(308));Ve=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Ve=Ve.next=e;return n}var Sm=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,a){t.push(a)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},Om=i.unstable_scheduleCallback,Em=i.unstable_NormalPriority,jt={$$typeof:Z,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Co(){return{controller:new Sm,data:new Map,refCount:0}}function ml(t){t.refCount--,t.refCount===0&&Om(Em,function(){t.controller.abort()})}var pl=null,Ho=0,Aa=0,_a=null;function Tm(t,e){if(pl===null){var n=pl=[];Ho=0,Aa=qu(),_a={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Ho++,e.then(ws,ws),e}function ws(){if(--Ho===0&&pl!==null){_a!==null&&(_a.status="fulfilled");var t=pl;pl=null,Aa=0,_a=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Am(t,e){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return t.then(function(){a.status="fulfilled",a.value=e;for(var l=0;l<n.length;l++)(0,n[l])(e)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var Us=C.S;C.S=function(t,e){typeof e=="object"&&e!==null&&typeof e.then=="function"&&Tm(t,e),Us!==null&&Us(t,e)};var Fn=B(null);function jo(){var t=Fn.current;return t!==null?t:At.pooledCache}function wi(t,e){e===null?L(Fn,Fn.current):L(Fn,e.pool)}function Cs(){var t=jo();return t===null?null:{parent:jt._currentValue,pool:t}}var bl=Error(u(460)),Hs=Error(u(474)),Ui=Error(u(542)),qo={then:function(){}};function js(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ci(){}function qs(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(Ci,Ci),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Ys(t),t;default:if(typeof e.status=="string")e.then(Ci,Ci);else{if(t=At,t!==null&&100<t.shellSuspendCounter)throw Error(u(482));t=e,t.status="pending",t.then(function(a){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=a}},function(a){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=a}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Ys(t),t}throw vl=e,bl}}var vl=null;function Bs(){if(vl===null)throw Error(u(459));var t=vl;return vl=null,t}function Ys(t){if(t===bl||t===Ui)throw Error(u(483))}var pn=!1;function Bo(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Yo(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function bn(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function vn(t,e,n){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(pt&2)!==0){var l=a.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),a.pending=e,e=Di(t),_s(t,null,n),e}return _i(t,a,e,n),Di(t)}function gl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,wc(t,n)}}function Lo(t,e){var n=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?l=r=s:r=r.next=s,n=n.next}while(n!==null);r===null?l=r=e:r=r.next=e}else l=r=e;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:r,shared:a.shared,callbacks:a.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var Xo=!1;function yl(){if(Xo){var t=_a;if(t!==null)throw t}}function xl(t,e,n,a){Xo=!1;var l=t.updateQueue;pn=!1;var r=l.firstBaseUpdate,s=l.lastBaseUpdate,h=l.shared.pending;if(h!==null){l.shared.pending=null;var v=h,A=v.next;v.next=null,s===null?r=A:s.next=A,s=v;var U=t.alternate;U!==null&&(U=U.updateQueue,h=U.lastBaseUpdate,h!==s&&(h===null?U.firstBaseUpdate=A:h.next=A,U.lastBaseUpdate=v))}if(r!==null){var q=l.baseState;s=0,U=A=v=null,h=r;do{var M=h.lane&-536870913,R=M!==h.lane;if(R?(st&M)===M:(a&M)===M){M!==0&&M===Aa&&(Xo=!0),U!==null&&(U=U.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});t:{var tt=t,W=h;M=e;var St=n;switch(W.tag){case 1:if(tt=W.payload,typeof tt=="function"){q=tt.call(St,q,M);break t}q=tt;break t;case 3:tt.flags=tt.flags&-65537|128;case 0:if(tt=W.payload,M=typeof tt=="function"?tt.call(St,q,M):tt,M==null)break t;q=g({},q,M);break t;case 2:pn=!0}}M=h.callback,M!==null&&(t.flags|=64,R&&(t.flags|=8192),R=l.callbacks,R===null?l.callbacks=[M]:R.push(M))}else R={lane:M,tag:h.tag,payload:h.payload,callback:h.callback,next:null},U===null?(A=U=R,v=q):U=U.next=R,s|=M;if(h=h.next,h===null){if(h=l.shared.pending,h===null)break;R=h,h=R.next,R.next=null,l.lastBaseUpdate=R,l.shared.pending=null}}while(!0);U===null&&(v=q),l.baseState=v,l.firstBaseUpdate=A,l.lastBaseUpdate=U,r===null&&(l.shared.lanes=0),An|=s,t.lanes=s,t.memoizedState=q}}function Ls(t,e){if(typeof t!="function")throw Error(u(191,t));t.call(e)}function Xs(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)Ls(n[t],e)}var Da=B(null),Hi=B(0);function Gs(t,e){t=tn,L(Hi,t),L(Da,e),tn=t|e.baseLanes}function Go(){L(Hi,tn),L(Da,Da.current)}function Qo(){tn=Hi.current,G(Da),G(Hi)}var gn=0,at=null,yt=null,Ct=null,ji=!1,za=!1,In=!1,qi=0,Sl=0,Ma=null,_m=0;function wt(){throw Error(u(321))}function Zo(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!se(t[n],e[n]))return!1;return!0}function Vo(t,e,n,a,l,r){return gn=r,at=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,C.H=t===null||t.memoizedState===null?Df:zf,In=!1,r=n(a,l),In=!1,za&&(r=Zs(e,n,a,l)),Qs(t),r}function Qs(t){C.H=Qi;var e=yt!==null&&yt.next!==null;if(gn=0,Ct=yt=at=null,ji=!1,Sl=0,Ma=null,e)throw Error(u(300));t===null||Lt||(t=t.dependencies,t!==null&&Ni(t)&&(Lt=!0))}function Zs(t,e,n,a){at=t;var l=0;do{if(za&&(Ma=null),Sl=0,za=!1,25<=l)throw Error(u(301));if(l+=1,Ct=yt=null,t.updateQueue!=null){var r=t.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}C.H=wm,r=e(n,a)}while(za);return r}function Dm(){var t=C.H,e=t.useState()[0];return e=typeof e.then=="function"?Ol(e):e,t=t.useState()[0],(yt!==null?yt.memoizedState:null)!==t&&(at.flags|=1024),e}function Ko(){var t=qi!==0;return qi=0,t}function Jo(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function $o(t){if(ji){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}ji=!1}gn=0,Ct=yt=at=null,za=!1,Sl=qi=0,Ma=null}function le(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?at.memoizedState=Ct=t:Ct=Ct.next=t,Ct}function Ht(){if(yt===null){var t=at.alternate;t=t!==null?t.memoizedState:null}else t=yt.next;var e=Ct===null?at.memoizedState:Ct.next;if(e!==null)Ct=e,yt=t;else{if(t===null)throw at.alternate===null?Error(u(467)):Error(u(310));yt=t,t={memoizedState:yt.memoizedState,baseState:yt.baseState,baseQueue:yt.baseQueue,queue:yt.queue,next:null},Ct===null?at.memoizedState=Ct=t:Ct=Ct.next=t}return Ct}function Po(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ol(t){var e=Sl;return Sl+=1,Ma===null&&(Ma=[]),t=qs(Ma,t,e),e=at,(Ct===null?e.memoizedState:Ct.next)===null&&(e=e.alternate,C.H=e===null||e.memoizedState===null?Df:zf),t}function Bi(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Ol(t);if(t.$$typeof===Z)return Wt(t)}throw Error(u(438,String(t)))}function Wo(t){var e=null,n=at.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var a=at.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(e={data:a.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=Po(),at.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),a=0;a<t;a++)n[a]=It;return e.index++,n}function Je(t,e){return typeof e=="function"?e(t):e}function Yi(t){var e=Ht();return Fo(e,yt,t)}function Fo(t,e,n){var a=t.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=n;var l=t.baseQueue,r=a.pending;if(r!==null){if(l!==null){var s=l.next;l.next=r.next,r.next=s}e.baseQueue=l=r,a.pending=null}if(r=t.baseState,l===null)t.memoizedState=r;else{e=l.next;var h=s=null,v=null,A=e,U=!1;do{var q=A.lane&-536870913;if(q!==A.lane?(st&q)===q:(gn&q)===q){var M=A.revertLane;if(M===0)v!==null&&(v=v.next={lane:0,revertLane:0,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),q===Aa&&(U=!0);else if((gn&M)===M){A=A.next,M===Aa&&(U=!0);continue}else q={lane:0,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},v===null?(h=v=q,s=r):v=v.next=q,at.lanes|=M,An|=M;q=A.action,In&&n(r,q),r=A.hasEagerState?A.eagerState:n(r,q)}else M={lane:q,revertLane:A.revertLane,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},v===null?(h=v=M,s=r):v=v.next=M,at.lanes|=q,An|=q;A=A.next}while(A!==null&&A!==e);if(v===null?s=r:v.next=h,!se(r,t.memoizedState)&&(Lt=!0,U&&(n=_a,n!==null)))throw n;t.memoizedState=r,t.baseState=s,t.baseQueue=v,a.lastRenderedState=r}return l===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function Io(t){var e=Ht(),n=e.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=t;var a=n.dispatch,l=n.pending,r=e.memoizedState;if(l!==null){n.pending=null;var s=l=l.next;do r=t(r,s.action),s=s.next;while(s!==l);se(r,e.memoizedState)||(Lt=!0),e.memoizedState=r,e.baseQueue===null&&(e.baseState=r),n.lastRenderedState=r}return[r,a]}function Vs(t,e,n){var a=at,l=Ht(),r=ht;if(r){if(n===void 0)throw Error(u(407));n=n()}else n=e();var s=!se((yt||l).memoizedState,n);s&&(l.memoizedState=n,Lt=!0),l=l.queue;var h=$s.bind(null,a,l,t);if(El(2048,8,h,[t]),l.getSnapshot!==e||s||Ct!==null&&Ct.memoizedState.tag&1){if(a.flags|=2048,Ra(9,Li(),Js.bind(null,a,l,n,e),null),At===null)throw Error(u(349));r||(gn&124)!==0||Ks(a,e,n)}return n}function Ks(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=at.updateQueue,e===null?(e=Po(),at.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Js(t,e,n,a){e.value=n,e.getSnapshot=a,Ps(e)&&Ws(t)}function $s(t,e,n){return n(function(){Ps(e)&&Ws(t)})}function Ps(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!se(t,n)}catch{return!0}}function Ws(t){var e=Sa(t,2);e!==null&&be(e,t,2)}function tu(t){var e=le();if(typeof t=="function"){var n=t;if(t=n(),In){fn(!0);try{n()}finally{fn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Je,lastRenderedState:t},e}function Fs(t,e,n,a){return t.baseState=n,Fo(t,yt,typeof a=="function"?a:Je)}function zm(t,e,n,a,l){if(Gi(t))throw Error(u(485));if(t=e.action,t!==null){var r={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};C.T!==null?n(!0):r.isTransition=!1,a(r),n=e.pending,n===null?(r.next=e.pending=r,Is(e,r)):(r.next=n.next,e.pending=n.next=r)}}function Is(t,e){var n=e.action,a=e.payload,l=t.state;if(e.isTransition){var r=C.T,s={};C.T=s;try{var h=n(l,a),v=C.S;v!==null&&v(s,h),tf(t,e,h)}catch(A){eu(t,e,A)}finally{C.T=r}}else try{r=n(l,a),tf(t,e,r)}catch(A){eu(t,e,A)}}function tf(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){ef(t,e,a)},function(a){return eu(t,e,a)}):ef(t,e,n)}function ef(t,e,n){e.status="fulfilled",e.value=n,nf(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,Is(t,n)))}function eu(t,e,n){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do e.status="rejected",e.reason=n,nf(e),e=e.next;while(e!==a)}t.action=null}function nf(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function af(t,e){return e}function lf(t,e){if(ht){var n=At.formState;if(n!==null){t:{var a=at;if(ht){if(Nt){e:{for(var l=Nt,r=Ue;l.nodeType!==8;){if(!r){l=null;break e}if(l=Re(l.nextSibling),l===null){l=null;break e}}r=l.data,l=r==="F!"||r==="F"?l:null}if(l){Nt=Re(l.nextSibling),a=l.data==="F!";break t}}$n(a)}a=!1}a&&(e=n[0])}}return n=le(),n.memoizedState=n.baseState=e,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:af,lastRenderedState:e},n.queue=a,n=Tf.bind(null,at,a),a.dispatch=n,a=tu(!1),r=ru.bind(null,at,!1,a.queue),a=le(),l={state:e,dispatch:null,action:t,pending:null},a.queue=l,n=zm.bind(null,at,l,r,n),l.dispatch=n,a.memoizedState=t,[e,n,!1]}function rf(t){var e=Ht();return of(e,yt,t)}function of(t,e,n){if(e=Fo(t,e,af)[0],t=Yi(Je)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var a=Ol(e)}catch(s){throw s===bl?Ui:s}else a=e;e=Ht();var l=e.queue,r=l.dispatch;return n!==e.memoizedState&&(at.flags|=2048,Ra(9,Li(),Mm.bind(null,l,n),null)),[a,r,t]}function Mm(t,e){t.action=e}function uf(t){var e=Ht(),n=yt;if(n!==null)return of(e,n,t);Ht(),e=e.memoizedState,n=Ht();var a=n.queue.dispatch;return n.memoizedState=t,[e,a,!1]}function Ra(t,e,n,a){return t={tag:t,create:n,deps:a,inst:e,next:null},e=at.updateQueue,e===null&&(e=Po(),at.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(a=n.next,n.next=t,t.next=a,e.lastEffect=t),t}function Li(){return{destroy:void 0,resource:void 0}}function cf(){return Ht().memoizedState}function Xi(t,e,n,a){var l=le();a=a===void 0?null:a,at.flags|=t,l.memoizedState=Ra(1|e,Li(),n,a)}function El(t,e,n,a){var l=Ht();a=a===void 0?null:a;var r=l.memoizedState.inst;yt!==null&&a!==null&&Zo(a,yt.memoizedState.deps)?l.memoizedState=Ra(e,r,n,a):(at.flags|=t,l.memoizedState=Ra(1|e,r,n,a))}function sf(t,e){Xi(8390656,8,t,e)}function ff(t,e){El(2048,8,t,e)}function df(t,e){return El(4,2,t,e)}function hf(t,e){return El(4,4,t,e)}function mf(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function pf(t,e,n){n=n!=null?n.concat([t]):null,El(4,4,mf.bind(null,e,t),n)}function nu(){}function bf(t,e){var n=Ht();e=e===void 0?null:e;var a=n.memoizedState;return e!==null&&Zo(e,a[1])?a[0]:(n.memoizedState=[t,e],t)}function vf(t,e){var n=Ht();e=e===void 0?null:e;var a=n.memoizedState;if(e!==null&&Zo(e,a[1]))return a[0];if(a=t(),In){fn(!0);try{t()}finally{fn(!1)}}return n.memoizedState=[a,e],a}function au(t,e,n){return n===void 0||(gn&1073741824)!==0?t.memoizedState=e:(t.memoizedState=n,t=xd(),at.lanes|=t,An|=t,n)}function gf(t,e,n,a){return se(n,e)?n:Da.current!==null?(t=au(t,n,a),se(t,e)||(Lt=!0),t):(gn&42)===0?(Lt=!0,t.memoizedState=n):(t=xd(),at.lanes|=t,An|=t,e)}function yf(t,e,n,a,l){var r=X.p;X.p=r!==0&&8>r?r:8;var s=C.T,h={};C.T=h,ru(t,!1,e,n);try{var v=l(),A=C.S;if(A!==null&&A(h,v),v!==null&&typeof v=="object"&&typeof v.then=="function"){var U=Am(v,a);Tl(t,e,U,pe(t))}else Tl(t,e,a,pe(t))}catch(q){Tl(t,e,{then:function(){},status:"rejected",reason:q},pe())}finally{X.p=r,C.T=s}}function Rm(){}function lu(t,e,n,a){if(t.tag!==5)throw Error(u(476));var l=xf(t).queue;yf(t,l,e,I,n===null?Rm:function(){return Sf(t),n(a)})}function xf(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Je,lastRenderedState:I},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Je,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Sf(t){var e=xf(t).next.queue;Tl(t,e,{},pe())}function iu(){return Wt(Xl)}function Of(){return Ht().memoizedState}function Ef(){return Ht().memoizedState}function Nm(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=pe();t=bn(n);var a=vn(e,t,n);a!==null&&(be(a,e,n),gl(a,e,n)),e={cache:Co()},t.payload=e;return}e=e.return}}function km(t,e,n){var a=pe();n={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Gi(t)?Af(e,n):(n=Ao(t,e,n,a),n!==null&&(be(n,t,a),_f(n,e,a)))}function Tf(t,e,n){var a=pe();Tl(t,e,n,a)}function Tl(t,e,n,a){var l={lane:a,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gi(t))Af(e,l);else{var r=t.alternate;if(t.lanes===0&&(r===null||r.lanes===0)&&(r=e.lastRenderedReducer,r!==null))try{var s=e.lastRenderedState,h=r(s,n);if(l.hasEagerState=!0,l.eagerState=h,se(h,s))return _i(t,e,l,0),At===null&&Ai(),!1}catch{}finally{}if(n=Ao(t,e,l,a),n!==null)return be(n,t,a),_f(n,e,a),!0}return!1}function ru(t,e,n,a){if(a={lane:2,revertLane:qu(),action:a,hasEagerState:!1,eagerState:null,next:null},Gi(t)){if(e)throw Error(u(479))}else e=Ao(t,n,a,2),e!==null&&be(e,t,2)}function Gi(t){var e=t.alternate;return t===at||e!==null&&e===at}function Af(t,e){za=ji=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function _f(t,e,n){if((n&4194048)!==0){var a=e.lanes;a&=t.pendingLanes,n|=a,e.lanes=n,wc(t,n)}}var Qi={readContext:Wt,use:Bi,useCallback:wt,useContext:wt,useEffect:wt,useImperativeHandle:wt,useLayoutEffect:wt,useInsertionEffect:wt,useMemo:wt,useReducer:wt,useRef:wt,useState:wt,useDebugValue:wt,useDeferredValue:wt,useTransition:wt,useSyncExternalStore:wt,useId:wt,useHostTransitionStatus:wt,useFormState:wt,useActionState:wt,useOptimistic:wt,useMemoCache:wt,useCacheRefresh:wt},Df={readContext:Wt,use:Bi,useCallback:function(t,e){return le().memoizedState=[t,e===void 0?null:e],t},useContext:Wt,useEffect:sf,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,Xi(4194308,4,mf.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xi(4194308,4,t,e)},useInsertionEffect:function(t,e){Xi(4,2,t,e)},useMemo:function(t,e){var n=le();e=e===void 0?null:e;var a=t();if(In){fn(!0);try{t()}finally{fn(!1)}}return n.memoizedState=[a,e],a},useReducer:function(t,e,n){var a=le();if(n!==void 0){var l=n(e);if(In){fn(!0);try{n(e)}finally{fn(!1)}}}else l=e;return a.memoizedState=a.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},a.queue=t,t=t.dispatch=km.bind(null,at,t),[a.memoizedState,t]},useRef:function(t){var e=le();return t={current:t},e.memoizedState=t},useState:function(t){t=tu(t);var e=t.queue,n=Tf.bind(null,at,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:nu,useDeferredValue:function(t,e){var n=le();return au(n,t,e)},useTransition:function(){var t=tu(!1);return t=yf.bind(null,at,t.queue,!0,!1),le().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var a=at,l=le();if(ht){if(n===void 0)throw Error(u(407));n=n()}else{if(n=e(),At===null)throw Error(u(349));(st&124)!==0||Ks(a,e,n)}l.memoizedState=n;var r={value:n,getSnapshot:e};return l.queue=r,sf($s.bind(null,a,r,t),[t]),a.flags|=2048,Ra(9,Li(),Js.bind(null,a,r,n,e),null),n},useId:function(){var t=le(),e=At.identifierPrefix;if(ht){var n=Ze,a=Qe;n=(a&~(1<<32-ce(a)-1)).toString(32)+n,e="«"+e+"R"+n,n=qi++,0<n&&(e+="H"+n.toString(32)),e+="»"}else n=_m++,e="«"+e+"r"+n.toString(32)+"»";return t.memoizedState=e},useHostTransitionStatus:iu,useFormState:lf,useActionState:lf,useOptimistic:function(t){var e=le();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=ru.bind(null,at,!0,n),n.dispatch=e,[t,e]},useMemoCache:Wo,useCacheRefresh:function(){return le().memoizedState=Nm.bind(null,at)}},zf={readContext:Wt,use:Bi,useCallback:bf,useContext:Wt,useEffect:ff,useImperativeHandle:pf,useInsertionEffect:df,useLayoutEffect:hf,useMemo:vf,useReducer:Yi,useRef:cf,useState:function(){return Yi(Je)},useDebugValue:nu,useDeferredValue:function(t,e){var n=Ht();return gf(n,yt.memoizedState,t,e)},useTransition:function(){var t=Yi(Je)[0],e=Ht().memoizedState;return[typeof t=="boolean"?t:Ol(t),e]},useSyncExternalStore:Vs,useId:Of,useHostTransitionStatus:iu,useFormState:rf,useActionState:rf,useOptimistic:function(t,e){var n=Ht();return Fs(n,yt,t,e)},useMemoCache:Wo,useCacheRefresh:Ef},wm={readContext:Wt,use:Bi,useCallback:bf,useContext:Wt,useEffect:ff,useImperativeHandle:pf,useInsertionEffect:df,useLayoutEffect:hf,useMemo:vf,useReducer:Io,useRef:cf,useState:function(){return Io(Je)},useDebugValue:nu,useDeferredValue:function(t,e){var n=Ht();return yt===null?au(n,t,e):gf(n,yt.memoizedState,t,e)},useTransition:function(){var t=Io(Je)[0],e=Ht().memoizedState;return[typeof t=="boolean"?t:Ol(t),e]},useSyncExternalStore:Vs,useId:Of,useHostTransitionStatus:iu,useFormState:uf,useActionState:uf,useOptimistic:function(t,e){var n=Ht();return yt!==null?Fs(n,yt,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:Wo,useCacheRefresh:Ef},Na=null,Al=0;function Zi(t){var e=Al;return Al+=1,Na===null&&(Na=[]),qs(Na,t,e)}function _l(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Vi(t,e){throw e.$$typeof===N?Error(u(525)):(t=Object.prototype.toString.call(e),Error(u(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Mf(t){var e=t._init;return e(t._payload)}function Rf(t){function e(O,S){if(t){var T=O.deletions;T===null?(O.deletions=[S],O.flags|=16):T.push(S)}}function n(O,S){if(!t)return null;for(;S!==null;)e(O,S),S=S.sibling;return null}function a(O){for(var S=new Map;O!==null;)O.key!==null?S.set(O.key,O):S.set(O.index,O),O=O.sibling;return S}function l(O,S){return O=Ge(O,S),O.index=0,O.sibling=null,O}function r(O,S,T){return O.index=T,t?(T=O.alternate,T!==null?(T=T.index,T<S?(O.flags|=67108866,S):T):(O.flags|=67108866,S)):(O.flags|=1048576,S)}function s(O){return t&&O.alternate===null&&(O.flags|=67108866),O}function h(O,S,T,j){return S===null||S.tag!==6?(S=Do(T,O.mode,j),S.return=O,S):(S=l(S,T),S.return=O,S)}function v(O,S,T,j){var Q=T.type;return Q===E?U(O,S,T.props.children,j,T.key):S!==null&&(S.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Ot&&Mf(Q)===S.type)?(S=l(S,T.props),_l(S,T),S.return=O,S):(S=zi(T.type,T.key,T.props,null,O.mode,j),_l(S,T),S.return=O,S)}function A(O,S,T,j){return S===null||S.tag!==4||S.stateNode.containerInfo!==T.containerInfo||S.stateNode.implementation!==T.implementation?(S=zo(T,O.mode,j),S.return=O,S):(S=l(S,T.children||[]),S.return=O,S)}function U(O,S,T,j,Q){return S===null||S.tag!==7?(S=Zn(T,O.mode,j,Q),S.return=O,S):(S=l(S,T),S.return=O,S)}function q(O,S,T){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=Do(""+S,O.mode,T),S.return=O,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case _:return T=zi(S.type,S.key,S.props,null,O.mode,T),_l(T,S),T.return=O,T;case k:return S=zo(S,O.mode,T),S.return=O,S;case Ot:var j=S._init;return S=j(S._payload),q(O,S,T)}if($t(S)||Jt(S))return S=Zn(S,O.mode,T,null),S.return=O,S;if(typeof S.then=="function")return q(O,Zi(S),T);if(S.$$typeof===Z)return q(O,ki(O,S),T);Vi(O,S)}return null}function M(O,S,T,j){var Q=S!==null?S.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return Q!==null?null:h(O,S,""+T,j);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case _:return T.key===Q?v(O,S,T,j):null;case k:return T.key===Q?A(O,S,T,j):null;case Ot:return Q=T._init,T=Q(T._payload),M(O,S,T,j)}if($t(T)||Jt(T))return Q!==null?null:U(O,S,T,j,null);if(typeof T.then=="function")return M(O,S,Zi(T),j);if(T.$$typeof===Z)return M(O,S,ki(O,T),j);Vi(O,T)}return null}function R(O,S,T,j,Q){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return O=O.get(T)||null,h(S,O,""+j,Q);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case _:return O=O.get(j.key===null?T:j.key)||null,v(S,O,j,Q);case k:return O=O.get(j.key===null?T:j.key)||null,A(S,O,j,Q);case Ot:var lt=j._init;return j=lt(j._payload),R(O,S,T,j,Q)}if($t(j)||Jt(j))return O=O.get(T)||null,U(S,O,j,Q,null);if(typeof j.then=="function")return R(O,S,T,Zi(j),Q);if(j.$$typeof===Z)return R(O,S,T,ki(S,j),Q);Vi(S,j)}return null}function tt(O,S,T,j){for(var Q=null,lt=null,J=S,F=S=0,Gt=null;J!==null&&F<T.length;F++){J.index>F?(Gt=J,J=null):Gt=J.sibling;var dt=M(O,J,T[F],j);if(dt===null){J===null&&(J=Gt);break}t&&J&&dt.alternate===null&&e(O,J),S=r(dt,S,F),lt===null?Q=dt:lt.sibling=dt,lt=dt,J=Gt}if(F===T.length)return n(O,J),ht&&Kn(O,F),Q;if(J===null){for(;F<T.length;F++)J=q(O,T[F],j),J!==null&&(S=r(J,S,F),lt===null?Q=J:lt.sibling=J,lt=J);return ht&&Kn(O,F),Q}for(J=a(J);F<T.length;F++)Gt=R(J,O,F,T[F],j),Gt!==null&&(t&&Gt.alternate!==null&&J.delete(Gt.key===null?F:Gt.key),S=r(Gt,S,F),lt===null?Q=Gt:lt.sibling=Gt,lt=Gt);return t&&J.forEach(function(Un){return e(O,Un)}),ht&&Kn(O,F),Q}function W(O,S,T,j){if(T==null)throw Error(u(151));for(var Q=null,lt=null,J=S,F=S=0,Gt=null,dt=T.next();J!==null&&!dt.done;F++,dt=T.next()){J.index>F?(Gt=J,J=null):Gt=J.sibling;var Un=M(O,J,dt.value,j);if(Un===null){J===null&&(J=Gt);break}t&&J&&Un.alternate===null&&e(O,J),S=r(Un,S,F),lt===null?Q=Un:lt.sibling=Un,lt=Un,J=Gt}if(dt.done)return n(O,J),ht&&Kn(O,F),Q;if(J===null){for(;!dt.done;F++,dt=T.next())dt=q(O,dt.value,j),dt!==null&&(S=r(dt,S,F),lt===null?Q=dt:lt.sibling=dt,lt=dt);return ht&&Kn(O,F),Q}for(J=a(J);!dt.done;F++,dt=T.next())dt=R(J,O,F,dt.value,j),dt!==null&&(t&&dt.alternate!==null&&J.delete(dt.key===null?F:dt.key),S=r(dt,S,F),lt===null?Q=dt:lt.sibling=dt,lt=dt);return t&&J.forEach(function(Up){return e(O,Up)}),ht&&Kn(O,F),Q}function St(O,S,T,j){if(typeof T=="object"&&T!==null&&T.type===E&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case _:t:{for(var Q=T.key;S!==null;){if(S.key===Q){if(Q=T.type,Q===E){if(S.tag===7){n(O,S.sibling),j=l(S,T.props.children),j.return=O,O=j;break t}}else if(S.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===Ot&&Mf(Q)===S.type){n(O,S.sibling),j=l(S,T.props),_l(j,T),j.return=O,O=j;break t}n(O,S);break}else e(O,S);S=S.sibling}T.type===E?(j=Zn(T.props.children,O.mode,j,T.key),j.return=O,O=j):(j=zi(T.type,T.key,T.props,null,O.mode,j),_l(j,T),j.return=O,O=j)}return s(O);case k:t:{for(Q=T.key;S!==null;){if(S.key===Q)if(S.tag===4&&S.stateNode.containerInfo===T.containerInfo&&S.stateNode.implementation===T.implementation){n(O,S.sibling),j=l(S,T.children||[]),j.return=O,O=j;break t}else{n(O,S);break}else e(O,S);S=S.sibling}j=zo(T,O.mode,j),j.return=O,O=j}return s(O);case Ot:return Q=T._init,T=Q(T._payload),St(O,S,T,j)}if($t(T))return tt(O,S,T,j);if(Jt(T)){if(Q=Jt(T),typeof Q!="function")throw Error(u(150));return T=Q.call(T),W(O,S,T,j)}if(typeof T.then=="function")return St(O,S,Zi(T),j);if(T.$$typeof===Z)return St(O,S,ki(O,T),j);Vi(O,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,S!==null&&S.tag===6?(n(O,S.sibling),j=l(S,T),j.return=O,O=j):(n(O,S),j=Do(T,O.mode,j),j.return=O,O=j),s(O)):n(O,S)}return function(O,S,T,j){try{Al=0;var Q=St(O,S,T,j);return Na=null,Q}catch(J){if(J===bl||J===Ui)throw J;var lt=fe(29,J,null,O.mode);return lt.lanes=j,lt.return=O,lt}finally{}}}var ka=Rf(!0),Nf=Rf(!1),Ae=B(null),Ce=null;function yn(t){var e=t.alternate;L(qt,qt.current&1),L(Ae,t),Ce===null&&(e===null||Da.current!==null||e.memoizedState!==null)&&(Ce=t)}function kf(t){if(t.tag===22){if(L(qt,qt.current),L(Ae,t),Ce===null){var e=t.alternate;e!==null&&e.memoizedState!==null&&(Ce=t)}}else xn()}function xn(){L(qt,qt.current),L(Ae,Ae.current)}function $e(t){G(Ae),Ce===t&&(Ce=null),G(qt)}var qt=B(0);function Ki(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||Pu(n)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function ou(t,e,n,a){e=t.memoizedState,n=n(a,e),n=n==null?e:g({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var uu={enqueueSetState:function(t,e,n){t=t._reactInternals;var a=pe(),l=bn(a);l.payload=e,n!=null&&(l.callback=n),e=vn(t,l,a),e!==null&&(be(e,t,a),gl(e,t,a))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var a=pe(),l=bn(a);l.tag=1,l.payload=e,n!=null&&(l.callback=n),e=vn(t,l,a),e!==null&&(be(e,t,a),gl(e,t,a))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=pe(),a=bn(n);a.tag=2,e!=null&&(a.callback=e),e=vn(t,a,n),e!==null&&(be(e,t,n),gl(e,t,n))}};function wf(t,e,n,a,l,r,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,r,s):e.prototype&&e.prototype.isPureReactComponent?!ul(n,a)||!ul(l,r):!0}function Uf(t,e,n,a){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,a),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,a),e.state!==t&&uu.enqueueReplaceState(e,e.state,null)}function ta(t,e){var n=e;if("ref"in e){n={};for(var a in e)a!=="ref"&&(n[a]=e[a])}if(t=t.defaultProps){n===e&&(n=g({},n));for(var l in t)n[l]===void 0&&(n[l]=t[l])}return n}var Ji=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Cf(t){Ji(t)}function Hf(t){console.error(t)}function jf(t){Ji(t)}function $i(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(a){setTimeout(function(){throw a})}}function qf(t,e,n){try{var a=t.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function cu(t,e,n){return n=bn(n),n.tag=3,n.payload={element:null},n.callback=function(){$i(t,e)},n}function Bf(t){return t=bn(t),t.tag=3,t}function Yf(t,e,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var r=a.value;t.payload=function(){return l(r)},t.callback=function(){qf(e,n,a)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){qf(e,n,a),typeof l!="function"&&(_n===null?_n=new Set([this]):_n.add(this));var h=a.stack;this.componentDidCatch(a.value,{componentStack:h!==null?h:""})})}function Um(t,e,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(e=n.alternate,e!==null&&hl(e,n,l,!0),n=Ae.current,n!==null){switch(n.tag){case 13:return Ce===null?wu():n.alternate===null&&kt===0&&(kt=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===qo?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([a]):e.add(a),Cu(t,a,l)),!1;case 22:return n.flags|=65536,a===qo?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([a]):n.add(a)),Cu(t,a,l)),!1}throw Error(u(435,n.tag))}return Cu(t,a,l),wu(),!1}if(ht)return e=Ae.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=l,a!==No&&(t=Error(u(422),{cause:a}),dl(Se(t,n)))):(a!==No&&(e=Error(u(423),{cause:a}),dl(Se(e,n))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,a=Se(a,n),l=cu(t.stateNode,a,l),Lo(t,l),kt!==4&&(kt=2)),!1;var r=Error(u(520),{cause:a});if(r=Se(r,n),wl===null?wl=[r]:wl.push(r),kt!==4&&(kt=2),e===null)return!0;a=Se(a,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=l&-l,n.lanes|=t,t=cu(n.stateNode,a,t),Lo(n,t),!1;case 1:if(e=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(_n===null||!_n.has(r))))return n.flags|=65536,l&=-l,n.lanes|=l,l=Bf(l),Yf(l,t,n,a),Lo(n,l),!1}n=n.return}while(n!==null);return!1}var Lf=Error(u(461)),Lt=!1;function Qt(t,e,n,a){e.child=t===null?Nf(e,null,n,a):ka(e,t.child,n,a)}function Xf(t,e,n,a,l){n=n.render;var r=e.ref;if("ref"in a){var s={};for(var h in a)h!=="ref"&&(s[h]=a[h])}else s=a;return Wn(e),a=Vo(t,e,n,s,r,l),h=Ko(),t!==null&&!Lt?(Jo(t,e,l),Pe(t,e,l)):(ht&&h&&Mo(e),e.flags|=1,Qt(t,e,a,l),e.child)}function Gf(t,e,n,a,l){if(t===null){var r=n.type;return typeof r=="function"&&!_o(r)&&r.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=r,Qf(t,e,r,a,l)):(t=zi(n.type,null,a,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(r=t.child,!vu(t,l)){var s=r.memoizedProps;if(n=n.compare,n=n!==null?n:ul,n(s,a)&&t.ref===e.ref)return Pe(t,e,l)}return e.flags|=1,t=Ge(r,a),t.ref=e.ref,t.return=e,e.child=t}function Qf(t,e,n,a,l){if(t!==null){var r=t.memoizedProps;if(ul(r,a)&&t.ref===e.ref)if(Lt=!1,e.pendingProps=a=r,vu(t,l))(t.flags&131072)!==0&&(Lt=!0);else return e.lanes=t.lanes,Pe(t,e,l)}return su(t,e,n,a,l)}function Zf(t,e,n){var a=e.pendingProps,l=a.children,r=t!==null?t.memoizedState:null;if(a.mode==="hidden"){if((e.flags&128)!==0){if(a=r!==null?r.baseLanes|n:n,t!==null){for(l=e.child=t.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;e.childLanes=r&~a}else e.childLanes=0,e.child=null;return Vf(t,e,a,n)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&wi(e,r!==null?r.cachePool:null),r!==null?Gs(e,r):Go(),kf(e);else return e.lanes=e.childLanes=536870912,Vf(t,e,r!==null?r.baseLanes|n:n,n)}else r!==null?(wi(e,r.cachePool),Gs(e,r),xn(),e.memoizedState=null):(t!==null&&wi(e,null),Go(),xn());return Qt(t,e,l,n),e.child}function Vf(t,e,n,a){var l=jo();return l=l===null?null:{parent:jt._currentValue,pool:l},e.memoizedState={baseLanes:n,cachePool:l},t!==null&&wi(e,null),Go(),kf(e),t!==null&&hl(t,e,a,!0),null}function Pi(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function su(t,e,n,a,l){return Wn(e),n=Vo(t,e,n,a,void 0,l),a=Ko(),t!==null&&!Lt?(Jo(t,e,l),Pe(t,e,l)):(ht&&a&&Mo(e),e.flags|=1,Qt(t,e,n,l),e.child)}function Kf(t,e,n,a,l,r){return Wn(e),e.updateQueue=null,n=Zs(e,a,n,l),Qs(t),a=Ko(),t!==null&&!Lt?(Jo(t,e,r),Pe(t,e,r)):(ht&&a&&Mo(e),e.flags|=1,Qt(t,e,n,r),e.child)}function Jf(t,e,n,a,l){if(Wn(e),e.stateNode===null){var r=Oa,s=n.contextType;typeof s=="object"&&s!==null&&(r=Wt(s)),r=new n(a,r),e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=uu,e.stateNode=r,r._reactInternals=e,r=e.stateNode,r.props=a,r.state=e.memoizedState,r.refs={},Bo(e),s=n.contextType,r.context=typeof s=="object"&&s!==null?Wt(s):Oa,r.state=e.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(ou(e,n,s,a),r.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&uu.enqueueReplaceState(r,r.state,null),xl(e,a,r,l),yl(),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308),a=!0}else if(t===null){r=e.stateNode;var h=e.memoizedProps,v=ta(n,h);r.props=v;var A=r.context,U=n.contextType;s=Oa,typeof U=="object"&&U!==null&&(s=Wt(U));var q=n.getDerivedStateFromProps;U=typeof q=="function"||typeof r.getSnapshotBeforeUpdate=="function",h=e.pendingProps!==h,U||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(h||A!==s)&&Uf(e,r,a,s),pn=!1;var M=e.memoizedState;r.state=M,xl(e,a,r,l),yl(),A=e.memoizedState,h||M!==A||pn?(typeof q=="function"&&(ou(e,n,q,a),A=e.memoizedState),(v=pn||wf(e,n,v,a,M,A,s))?(U||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(e.flags|=4194308)):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=a,e.memoizedState=A),r.props=a,r.state=A,r.context=s,a=v):(typeof r.componentDidMount=="function"&&(e.flags|=4194308),a=!1)}else{r=e.stateNode,Yo(t,e),s=e.memoizedProps,U=ta(n,s),r.props=U,q=e.pendingProps,M=r.context,A=n.contextType,v=Oa,typeof A=="object"&&A!==null&&(v=Wt(A)),h=n.getDerivedStateFromProps,(A=typeof h=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==q||M!==v)&&Uf(e,r,a,v),pn=!1,M=e.memoizedState,r.state=M,xl(e,a,r,l),yl();var R=e.memoizedState;s!==q||M!==R||pn||t!==null&&t.dependencies!==null&&Ni(t.dependencies)?(typeof h=="function"&&(ou(e,n,h,a),R=e.memoizedState),(U=pn||wf(e,n,U,a,M,R,v)||t!==null&&t.dependencies!==null&&Ni(t.dependencies))?(A||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,R,v),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,R,v)),typeof r.componentDidUpdate=="function"&&(e.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===t.memoizedProps&&M===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&M===t.memoizedState||(e.flags|=1024),e.memoizedProps=a,e.memoizedState=R),r.props=a,r.state=R,r.context=v,a=U):(typeof r.componentDidUpdate!="function"||s===t.memoizedProps&&M===t.memoizedState||(e.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&M===t.memoizedState||(e.flags|=1024),a=!1)}return r=a,Pi(t,e),a=(e.flags&128)!==0,r||a?(r=e.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:r.render(),e.flags|=1,t!==null&&a?(e.child=ka(e,t.child,null,l),e.child=ka(e,null,n,l)):Qt(t,e,n,l),e.memoizedState=r.state,t=e.child):t=Pe(t,e,l),t}function $f(t,e,n,a){return fl(),e.flags|=256,Qt(t,e,n,a),e.child}var fu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function du(t){return{baseLanes:t,cachePool:Cs()}}function hu(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=_e),t}function Pf(t,e,n){var a=e.pendingProps,l=!1,r=(e.flags&128)!==0,s;if((s=r)||(s=t!==null&&t.memoizedState===null?!1:(qt.current&2)!==0),s&&(l=!0,e.flags&=-129),s=(e.flags&32)!==0,e.flags&=-33,t===null){if(ht){if(l?yn(e):xn(),ht){var h=Nt,v;if(v=h){t:{for(v=h,h=Ue;v.nodeType!==8;){if(!h){h=null;break t}if(v=Re(v.nextSibling),v===null){h=null;break t}}h=v}h!==null?(e.memoizedState={dehydrated:h,treeContext:Vn!==null?{id:Qe,overflow:Ze}:null,retryLane:536870912,hydrationErrors:null},v=fe(18,null,null,0),v.stateNode=h,v.return=e,e.child=v,te=e,Nt=null,v=!0):v=!1}v||$n(e)}if(h=e.memoizedState,h!==null&&(h=h.dehydrated,h!==null))return Pu(h)?e.lanes=32:e.lanes=536870912,null;$e(e)}return h=a.children,a=a.fallback,l?(xn(),l=e.mode,h=Wi({mode:"hidden",children:h},l),a=Zn(a,l,n,null),h.return=e,a.return=e,h.sibling=a,e.child=h,l=e.child,l.memoizedState=du(n),l.childLanes=hu(t,s,n),e.memoizedState=fu,a):(yn(e),mu(e,h))}if(v=t.memoizedState,v!==null&&(h=v.dehydrated,h!==null)){if(r)e.flags&256?(yn(e),e.flags&=-257,e=pu(t,e,n)):e.memoizedState!==null?(xn(),e.child=t.child,e.flags|=128,e=null):(xn(),l=a.fallback,h=e.mode,a=Wi({mode:"visible",children:a.children},h),l=Zn(l,h,n,null),l.flags|=2,a.return=e,l.return=e,a.sibling=l,e.child=a,ka(e,t.child,null,n),a=e.child,a.memoizedState=du(n),a.childLanes=hu(t,s,n),e.memoizedState=fu,e=l);else if(yn(e),Pu(h)){if(s=h.nextSibling&&h.nextSibling.dataset,s)var A=s.dgst;s=A,a=Error(u(419)),a.stack="",a.digest=s,dl({value:a,source:null,stack:null}),e=pu(t,e,n)}else if(Lt||hl(t,e,n,!1),s=(n&t.childLanes)!==0,Lt||s){if(s=At,s!==null&&(a=n&-n,a=(a&42)!==0?1:Pr(a),a=(a&(s.suspendedLanes|n))!==0?0:a,a!==0&&a!==v.retryLane))throw v.retryLane=a,Sa(t,a),be(s,t,a),Lf;h.data==="$?"||wu(),e=pu(t,e,n)}else h.data==="$?"?(e.flags|=192,e.child=t.child,e=null):(t=v.treeContext,Nt=Re(h.nextSibling),te=e,ht=!0,Jn=null,Ue=!1,t!==null&&(Ee[Te++]=Qe,Ee[Te++]=Ze,Ee[Te++]=Vn,Qe=t.id,Ze=t.overflow,Vn=e),e=mu(e,a.children),e.flags|=4096);return e}return l?(xn(),l=a.fallback,h=e.mode,v=t.child,A=v.sibling,a=Ge(v,{mode:"hidden",children:a.children}),a.subtreeFlags=v.subtreeFlags&65011712,A!==null?l=Ge(A,l):(l=Zn(l,h,n,null),l.flags|=2),l.return=e,a.return=e,a.sibling=l,e.child=a,a=l,l=e.child,h=t.child.memoizedState,h===null?h=du(n):(v=h.cachePool,v!==null?(A=jt._currentValue,v=v.parent!==A?{parent:A,pool:A}:v):v=Cs(),h={baseLanes:h.baseLanes|n,cachePool:v}),l.memoizedState=h,l.childLanes=hu(t,s,n),e.memoizedState=fu,a):(yn(e),n=t.child,t=n.sibling,n=Ge(n,{mode:"visible",children:a.children}),n.return=e,n.sibling=null,t!==null&&(s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)),e.child=n,e.memoizedState=null,n)}function mu(t,e){return e=Wi({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Wi(t,e){return t=fe(22,t,null,e),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function pu(t,e,n){return ka(e,t.child,null,n),t=mu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Wf(t,e,n){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e),wo(t.return,e,n)}function bu(t,e,n,a,l){var r=t.memoizedState;r===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l}:(r.isBackwards=e,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=n,r.tailMode=l)}function Ff(t,e,n){var a=e.pendingProps,l=a.revealOrder,r=a.tail;if(Qt(t,e,a.children,n),a=qt.current,(a&2)!==0)a=a&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wf(t,n,e);else if(t.tag===19)Wf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}switch(L(qt,a),l){case"forwards":for(n=e.child,l=null;n!==null;)t=n.alternate,t!==null&&Ki(t)===null&&(l=n),n=n.sibling;n=l,n===null?(l=e.child,e.child=null):(l=n.sibling,n.sibling=null),bu(e,!1,l,n,r);break;case"backwards":for(n=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&Ki(t)===null){e.child=l;break}t=l.sibling,l.sibling=n,n=l,l=t}bu(e,!0,n,null,r);break;case"together":bu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Pe(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),An|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(hl(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(u(153));if(e.child!==null){for(t=e.child,n=Ge(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ge(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function vu(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&Ni(t)))}function Cm(t,e,n){switch(e.tag){case 3:_t(e,e.stateNode.containerInfo),mn(e,jt,t.memoizedState.cache),fl();break;case 27:case 5:Zr(e);break;case 4:_t(e,e.stateNode.containerInfo);break;case 10:mn(e,e.type,e.memoizedProps.value);break;case 13:var a=e.memoizedState;if(a!==null)return a.dehydrated!==null?(yn(e),e.flags|=128,null):(n&e.child.childLanes)!==0?Pf(t,e,n):(yn(e),t=Pe(t,e,n),t!==null?t.sibling:null);yn(e);break;case 19:var l=(t.flags&128)!==0;if(a=(n&e.childLanes)!==0,a||(hl(t,e,n,!1),a=(n&e.childLanes)!==0),l){if(a)return Ff(t,e,n);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),L(qt,qt.current),a)break;return null;case 22:case 23:return e.lanes=0,Zf(t,e,n);case 24:mn(e,jt,t.memoizedState.cache)}return Pe(t,e,n)}function If(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Lt=!0;else{if(!vu(t,n)&&(e.flags&128)===0)return Lt=!1,Cm(t,e,n);Lt=(t.flags&131072)!==0}else Lt=!1,ht&&(e.flags&1048576)!==0&&zs(e,Ri,e.index);switch(e.lanes=0,e.tag){case 16:t:{t=e.pendingProps;var a=e.elementType,l=a._init;if(a=l(a._payload),e.type=a,typeof a=="function")_o(a)?(t=ta(a,t),e.tag=1,e=Jf(null,e,a,t,n)):(e.tag=0,e=su(null,e,a,t,n));else{if(a!=null){if(l=a.$$typeof,l===ut){e.tag=11,e=Xf(null,e,a,t,n);break t}else if(l===mt){e.tag=14,e=Gf(null,e,a,t,n);break t}}throw e=Bn(a)||a,Error(u(306,e,""))}}return e;case 0:return su(t,e,e.type,e.pendingProps,n);case 1:return a=e.type,l=ta(a,e.pendingProps),Jf(t,e,a,l,n);case 3:t:{if(_t(e,e.stateNode.containerInfo),t===null)throw Error(u(387));a=e.pendingProps;var r=e.memoizedState;l=r.element,Yo(t,e),xl(e,a,null,n);var s=e.memoizedState;if(a=s.cache,mn(e,jt,a),a!==r.cache&&Uo(e,[jt],n,!0),yl(),a=s.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:s.cache},e.updateQueue.baseState=r,e.memoizedState=r,e.flags&256){e=$f(t,e,a,n);break t}else if(a!==l){l=Se(Error(u(424)),e),dl(l),e=$f(t,e,a,n);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Nt=Re(t.firstChild),te=e,ht=!0,Jn=null,Ue=!0,n=Nf(e,null,a,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(fl(),a===l){e=Pe(t,e,n);break t}Qt(t,e,a,n)}e=e.child}return e;case 26:return Pi(t,e),t===null?(n=ah(e.type,null,e.pendingProps,null))?e.memoizedState=n:ht||(n=e.type,t=e.pendingProps,a=fr(et.current).createElement(n),a[Pt]=e,a[ne]=t,Vt(a,n,t),Yt(a),e.stateNode=a):e.memoizedState=ah(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return Zr(e),t===null&&ht&&(a=e.stateNode=th(e.type,e.pendingProps,et.current),te=e,Ue=!0,l=Nt,Mn(e.type)?(Wu=l,Nt=Re(a.firstChild)):Nt=l),Qt(t,e,e.pendingProps.children,n),Pi(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&ht&&((l=a=Nt)&&(a=cp(a,e.type,e.pendingProps,Ue),a!==null?(e.stateNode=a,te=e,Nt=Re(a.firstChild),Ue=!1,l=!0):l=!1),l||$n(e)),Zr(e),l=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Ku(l,r)?a=null:s!==null&&Ku(l,s)&&(e.flags|=32),e.memoizedState!==null&&(l=Vo(t,e,Dm,null,null,n),Xl._currentValue=l),Pi(t,e),Qt(t,e,a,n),e.child;case 6:return t===null&&ht&&((t=n=Nt)&&(n=sp(n,e.pendingProps,Ue),n!==null?(e.stateNode=n,te=e,Nt=null,t=!0):t=!1),t||$n(e)),null;case 13:return Pf(t,e,n);case 4:return _t(e,e.stateNode.containerInfo),a=e.pendingProps,t===null?e.child=ka(e,null,a,n):Qt(t,e,a,n),e.child;case 11:return Xf(t,e,e.type,e.pendingProps,n);case 7:return Qt(t,e,e.pendingProps,n),e.child;case 8:return Qt(t,e,e.pendingProps.children,n),e.child;case 12:return Qt(t,e,e.pendingProps.children,n),e.child;case 10:return a=e.pendingProps,mn(e,e.type,a.value),Qt(t,e,a.children,n),e.child;case 9:return l=e.type._context,a=e.pendingProps.children,Wn(e),l=Wt(l),a=a(l),e.flags|=1,Qt(t,e,a,n),e.child;case 14:return Gf(t,e,e.type,e.pendingProps,n);case 15:return Qf(t,e,e.type,e.pendingProps,n);case 19:return Ff(t,e,n);case 31:return a=e.pendingProps,n=e.mode,a={mode:a.mode,children:a.children},t===null?(n=Wi(a,n),n.ref=e.ref,e.child=n,n.return=e,e=n):(n=Ge(t.child,a),n.ref=e.ref,e.child=n,n.return=e,e=n),e;case 22:return Zf(t,e,n);case 24:return Wn(e),a=Wt(jt),t===null?(l=jo(),l===null&&(l=At,r=Co(),l.pooledCache=r,r.refCount++,r!==null&&(l.pooledCacheLanes|=n),l=r),e.memoizedState={parent:a,cache:l},Bo(e),mn(e,jt,l)):((t.lanes&n)!==0&&(Yo(t,e),xl(e,null,null,n),yl()),l=t.memoizedState,r=e.memoizedState,l.parent!==a?(l={parent:a,cache:a},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),mn(e,jt,a)):(a=r.cache,mn(e,jt,a),a!==l.cache&&Uo(e,[jt],n,!0))),Qt(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(u(156,e.tag))}function We(t){t.flags|=4}function td(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!uh(e)){if(e=Ae.current,e!==null&&((st&4194048)===st?Ce!==null:(st&62914560)!==st&&(st&536870912)===0||e!==Ce))throw vl=qo,Hs;t.flags|=8192}}function Fi(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Nc():536870912,t.lanes|=e,Ha|=e)}function Dl(t,e){if(!ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function Mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,a=0;if(e)for(var l=t.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=a,t.childLanes=n,e}function Hm(t,e,n){var a=e.pendingProps;switch(Ro(e),e.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(e),null;case 1:return Mt(e),null;case 3:return n=e.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Ke(jt),sn(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(sl(e)?We(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,Ns())),Mt(e),null;case 26:return n=e.memoizedState,t===null?(We(e),n!==null?(Mt(e),td(e,n)):(Mt(e),e.flags&=-16777217)):n?n!==t.memoizedState?(We(e),Mt(e),td(e,n)):(Mt(e),e.flags&=-16777217):(t.memoizedProps!==a&&We(e),Mt(e),e.flags&=-16777217),null;case 27:ci(e),n=et.current;var l=e.type;if(t!==null&&e.stateNode!=null)t.memoizedProps!==a&&We(e);else{if(!a){if(e.stateNode===null)throw Error(u(166));return Mt(e),null}t=P.current,sl(e)?Ms(e):(t=th(l,a,n),e.stateNode=t,We(e))}return Mt(e),null;case 5:if(ci(e),n=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==a&&We(e);else{if(!a){if(e.stateNode===null)throw Error(u(166));return Mt(e),null}if(t=P.current,sl(e))Ms(e);else{switch(l=fr(et.current),t){case 1:t=l.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:t=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":t=l.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":t=l.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof a.is=="string"?l.createElement("select",{is:a.is}):l.createElement("select"),a.multiple?t.multiple=!0:a.size&&(t.size=a.size);break;default:t=typeof a.is=="string"?l.createElement(n,{is:a.is}):l.createElement(n)}}t[Pt]=e,t[ne]=a;t:for(l=e.child;l!==null;){if(l.tag===5||l.tag===6)t.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break t;for(;l.sibling===null;){if(l.return===null||l.return===e)break t;l=l.return}l.sibling.return=l.return,l=l.sibling}e.stateNode=t;t:switch(Vt(t,n,a),n){case"button":case"input":case"select":case"textarea":t=!!a.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&We(e)}}return Mt(e),e.flags&=-16777217,null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==a&&We(e);else{if(typeof a!="string"&&e.stateNode===null)throw Error(u(166));if(t=et.current,sl(e)){if(t=e.stateNode,n=e.memoizedProps,a=null,l=te,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}t[Pt]=e,t=!!(t.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Kd(t.nodeValue,n)),t||$n(e)}else t=fr(t).createTextNode(a),t[Pt]=e,e.stateNode=t}return Mt(e),null;case 13:if(a=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=sl(e),a!==null&&a.dehydrated!==null){if(t===null){if(!l)throw Error(u(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(u(317));l[Pt]=e}else fl(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Mt(e),l=!1}else l=Ns(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?($e(e),e):($e(e),null)}if($e(e),(e.flags&128)!==0)return e.lanes=n,e;if(n=a!==null,t=t!==null&&t.memoizedState!==null,n){a=e.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool);var r=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==l&&(a.flags|=2048)}return n!==t&&n&&(e.child.flags|=8192),Fi(e,e.updateQueue),Mt(e),null;case 4:return sn(),t===null&&Xu(e.stateNode.containerInfo),Mt(e),null;case 10:return Ke(e.type),Mt(e),null;case 19:if(G(qt),l=e.memoizedState,l===null)return Mt(e),null;if(a=(e.flags&128)!==0,r=l.rendering,r===null)if(a)Dl(l,!1);else{if(kt!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(r=Ki(t),r!==null){for(e.flags|=128,Dl(l,!1),t=r.updateQueue,e.updateQueue=t,Fi(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)Ds(n,t),n=n.sibling;return L(qt,qt.current&1|2),e.child}t=t.sibling}l.tail!==null&&we()>er&&(e.flags|=128,a=!0,Dl(l,!1),e.lanes=4194304)}else{if(!a)if(t=Ki(r),t!==null){if(e.flags|=128,a=!0,t=t.updateQueue,e.updateQueue=t,Fi(e,t),Dl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!r.alternate&&!ht)return Mt(e),null}else 2*we()-l.renderingStartTime>er&&n!==536870912&&(e.flags|=128,a=!0,Dl(l,!1),e.lanes=4194304);l.isBackwards?(r.sibling=e.child,e.child=r):(t=l.last,t!==null?t.sibling=r:e.child=r,l.last=r)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=we(),e.sibling=null,t=qt.current,L(qt,a?t&1|2:t&1),e):(Mt(e),null);case 22:case 23:return $e(e),Qo(),a=e.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(e.flags|=8192):a&&(e.flags|=8192),a?(n&536870912)!==0&&(e.flags&128)===0&&(Mt(e),e.subtreeFlags&6&&(e.flags|=8192)):Mt(e),n=e.updateQueue,n!==null&&Fi(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),a=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),a!==n&&(e.flags|=2048),t!==null&&G(Fn),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),Ke(jt),Mt(e),null;case 25:return null;case 30:return null}throw Error(u(156,e.tag))}function jm(t,e){switch(Ro(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ke(jt),sn(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return ci(e),null;case 13:if($e(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(u(340));fl()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return G(qt),null;case 4:return sn(),null;case 10:return Ke(e.type),null;case 22:case 23:return $e(e),Qo(),t!==null&&G(Fn),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Ke(jt),null;case 25:return null;default:return null}}function ed(t,e){switch(Ro(e),e.tag){case 3:Ke(jt),sn();break;case 26:case 27:case 5:ci(e);break;case 4:sn();break;case 13:$e(e);break;case 19:G(qt);break;case 10:Ke(e.type);break;case 22:case 23:$e(e),Qo(),t!==null&&G(Fn);break;case 24:Ke(jt)}}function zl(t,e){try{var n=e.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&t)===t){a=void 0;var r=n.create,s=n.inst;a=r(),s.destroy=a}n=n.next}while(n!==l)}}catch(h){Tt(e,e.return,h)}}function Sn(t,e,n){try{var a=e.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var r=l.next;a=r;do{if((a.tag&t)===t){var s=a.inst,h=s.destroy;if(h!==void 0){s.destroy=void 0,l=e;var v=n,A=h;try{A()}catch(U){Tt(l,v,U)}}}a=a.next}while(a!==r)}}catch(U){Tt(e,e.return,U)}}function nd(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{Xs(e,n)}catch(a){Tt(t,t.return,a)}}}function ad(t,e,n){n.props=ta(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(a){Tt(t,e,a)}}function Ml(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var a=t.stateNode;break;case 30:a=t.stateNode;break;default:a=t.stateNode}typeof n=="function"?t.refCleanup=n(a):n.current=a}}catch(l){Tt(t,e,l)}}function He(t,e){var n=t.ref,a=t.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){Tt(t,e,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){Tt(t,e,l)}else n.current=null}function ld(t){var e=t.type,n=t.memoizedProps,a=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break t;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){Tt(t,t.return,l)}}function gu(t,e,n){try{var a=t.stateNode;lp(a,t.type,n,e),a[ne]=e}catch(l){Tt(t,t.return,l)}}function id(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Mn(t.type)||t.tag===4}function yu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||id(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Mn(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xu(t,e,n){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=sr));else if(a!==4&&(a===27&&Mn(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(xu(t,e,n),t=t.sibling;t!==null;)xu(t,e,n),t=t.sibling}function Ii(t,e,n){var a=t.tag;if(a===5||a===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(a!==4&&(a===27&&Mn(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(Ii(t,e,n),t=t.sibling;t!==null;)Ii(t,e,n),t=t.sibling}function rd(t){var e=t.stateNode,n=t.memoizedProps;try{for(var a=t.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);Vt(e,a,n),e[Pt]=t,e[ne]=n}catch(r){Tt(t,t.return,r)}}var Fe=!1,Ut=!1,Su=!1,od=typeof WeakSet=="function"?WeakSet:Set,Xt=null;function qm(t,e){if(t=t.containerInfo,Zu=vr,t=vs(t),yo(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else t:{n=(n=t.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break t}var s=0,h=-1,v=-1,A=0,U=0,q=t,M=null;e:for(;;){for(var R;q!==n||l!==0&&q.nodeType!==3||(h=s+l),q!==r||a!==0&&q.nodeType!==3||(v=s+a),q.nodeType===3&&(s+=q.nodeValue.length),(R=q.firstChild)!==null;)M=q,q=R;for(;;){if(q===t)break e;if(M===n&&++A===l&&(h=s),M===r&&++U===a&&(v=s),(R=q.nextSibling)!==null)break;q=M,M=q.parentNode}q=R}n=h===-1||v===-1?null:{start:h,end:v}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vu={focusedElem:t,selectionRange:n},vr=!1,Xt=e;Xt!==null;)if(e=Xt,t=e.child,(e.subtreeFlags&1024)!==0&&t!==null)t.return=e,Xt=t;else for(;Xt!==null;){switch(e=Xt,r=e.alternate,t=e.flags,e.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&r!==null){t=void 0,n=e,l=r.memoizedProps,r=r.memoizedState,a=n.stateNode;try{var tt=ta(n.type,l,n.elementType===n.type);t=a.getSnapshotBeforeUpdate(tt,r),a.__reactInternalSnapshotBeforeUpdate=t}catch(W){Tt(n,n.return,W)}}break;case 3:if((t&1024)!==0){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)$u(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":$u(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(u(163))}if(t=e.sibling,t!==null){t.return=e.return,Xt=t;break}Xt=e.return}}function ud(t,e,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:On(t,n),a&4&&zl(5,n);break;case 1:if(On(t,n),a&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(s){Tt(n,n.return,s)}else{var l=ta(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(l,e,t.__reactInternalSnapshotBeforeUpdate)}catch(s){Tt(n,n.return,s)}}a&64&&nd(n),a&512&&Ml(n,n.return);break;case 3:if(On(t,n),a&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{Xs(t,e)}catch(s){Tt(n,n.return,s)}}break;case 27:e===null&&a&4&&rd(n);case 26:case 5:On(t,n),e===null&&a&4&&ld(n),a&512&&Ml(n,n.return);break;case 12:On(t,n);break;case 13:On(t,n),a&4&&fd(t,n),a&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=Km.bind(null,n),fp(t,n))));break;case 22:if(a=n.memoizedState!==null||Fe,!a){e=e!==null&&e.memoizedState!==null||Ut,l=Fe;var r=Ut;Fe=a,(Ut=e)&&!r?En(t,n,(n.subtreeFlags&8772)!==0):On(t,n),Fe=l,Ut=r}break;case 30:break;default:On(t,n)}}function cd(t){var e=t.alternate;e!==null&&(t.alternate=null,cd(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Ir(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Dt=null,ie=!1;function Ie(t,e,n){for(n=n.child;n!==null;)sd(t,e,n),n=n.sibling}function sd(t,e,n){if(ue&&typeof ue.onCommitFiberUnmount=="function")try{ue.onCommitFiberUnmount(Pa,n)}catch{}switch(n.tag){case 26:Ut||He(n,e),Ie(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ut||He(n,e);var a=Dt,l=ie;Mn(n.type)&&(Dt=n.stateNode,ie=!1),Ie(t,e,n),ql(n.stateNode),Dt=a,ie=l;break;case 5:Ut||He(n,e);case 6:if(a=Dt,l=ie,Dt=null,Ie(t,e,n),Dt=a,ie=l,Dt!==null)if(ie)try{(Dt.nodeType===9?Dt.body:Dt.nodeName==="HTML"?Dt.ownerDocument.body:Dt).removeChild(n.stateNode)}catch(r){Tt(n,e,r)}else try{Dt.removeChild(n.stateNode)}catch(r){Tt(n,e,r)}break;case 18:Dt!==null&&(ie?(t=Dt,Fd(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),Vl(t)):Fd(Dt,n.stateNode));break;case 4:a=Dt,l=ie,Dt=n.stateNode.containerInfo,ie=!0,Ie(t,e,n),Dt=a,ie=l;break;case 0:case 11:case 14:case 15:Ut||Sn(2,n,e),Ut||Sn(4,n,e),Ie(t,e,n);break;case 1:Ut||(He(n,e),a=n.stateNode,typeof a.componentWillUnmount=="function"&&ad(n,e,a)),Ie(t,e,n);break;case 21:Ie(t,e,n);break;case 22:Ut=(a=Ut)||n.memoizedState!==null,Ie(t,e,n),Ut=a;break;default:Ie(t,e,n)}}function fd(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Vl(t)}catch(n){Tt(e,e.return,n)}}function Bm(t){switch(t.tag){case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new od),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new od),e;default:throw Error(u(435,t.tag))}}function Ou(t,e){var n=Bm(t);e.forEach(function(a){var l=Jm.bind(null,t,a);n.has(a)||(n.add(a),a.then(l,l))})}function de(t,e){var n=e.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],r=t,s=e,h=s;t:for(;h!==null;){switch(h.tag){case 27:if(Mn(h.type)){Dt=h.stateNode,ie=!1;break t}break;case 5:Dt=h.stateNode,ie=!1;break t;case 3:case 4:Dt=h.stateNode.containerInfo,ie=!0;break t}h=h.return}if(Dt===null)throw Error(u(160));sd(r,s,l),Dt=null,ie=!1,r=l.alternate,r!==null&&(r.return=null),l.return=null}if(e.subtreeFlags&13878)for(e=e.child;e!==null;)dd(e,t),e=e.sibling}var Me=null;function dd(t,e){var n=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:de(e,t),he(t),a&4&&(Sn(3,t,t.return),zl(3,t),Sn(5,t,t.return));break;case 1:de(e,t),he(t),a&512&&(Ut||n===null||He(n,n.return)),a&64&&Fe&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=Me;if(de(e,t),he(t),a&512&&(Ut||n===null||He(n,n.return)),a&4){var r=n!==null?n.memoizedState:null;if(a=t.memoizedState,n===null)if(a===null)if(t.stateNode===null){t:{a=t.type,n=t.memoizedProps,l=l.ownerDocument||l;e:switch(a){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Ia]||r[Pt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(a),l.head.insertBefore(r,l.querySelector("head > title"))),Vt(r,a,n),r[Pt]=t,Yt(r),a=r;break t;case"link":var s=rh("link","href",l).get(a+(n.href||""));if(s){for(var h=0;h<s.length;h++)if(r=s[h],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(h,1);break e}}r=l.createElement(a),Vt(r,a,n),l.head.appendChild(r);break;case"meta":if(s=rh("meta","content",l).get(a+(n.content||""))){for(h=0;h<s.length;h++)if(r=s[h],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(h,1);break e}}r=l.createElement(a),Vt(r,a,n),l.head.appendChild(r);break;default:throw Error(u(468,a))}r[Pt]=t,Yt(r),a=r}t.stateNode=a}else oh(l,t.type,t.stateNode);else t.stateNode=ih(l,a,t.memoizedProps);else r!==a?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,a===null?oh(l,t.type,t.stateNode):ih(l,a,t.memoizedProps)):a===null&&t.stateNode!==null&&gu(t,t.memoizedProps,n.memoizedProps)}break;case 27:de(e,t),he(t),a&512&&(Ut||n===null||He(n,n.return)),n!==null&&a&4&&gu(t,t.memoizedProps,n.memoizedProps);break;case 5:if(de(e,t),he(t),a&512&&(Ut||n===null||He(n,n.return)),t.flags&32){l=t.stateNode;try{ma(l,"")}catch(R){Tt(t,t.return,R)}}a&4&&t.stateNode!=null&&(l=t.memoizedProps,gu(t,l,n!==null?n.memoizedProps:l)),a&1024&&(Su=!0);break;case 6:if(de(e,t),he(t),a&4){if(t.stateNode===null)throw Error(u(162));a=t.memoizedProps,n=t.stateNode;try{n.nodeValue=a}catch(R){Tt(t,t.return,R)}}break;case 3:if(mr=null,l=Me,Me=dr(e.containerInfo),de(e,t),Me=l,he(t),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Vl(e.containerInfo)}catch(R){Tt(t,t.return,R)}Su&&(Su=!1,hd(t));break;case 4:a=Me,Me=dr(t.stateNode.containerInfo),de(e,t),he(t),Me=a;break;case 12:de(e,t),he(t);break;case 13:de(e,t),he(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(zu=we()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Ou(t,a)));break;case 22:l=t.memoizedState!==null;var v=n!==null&&n.memoizedState!==null,A=Fe,U=Ut;if(Fe=A||l,Ut=U||v,de(e,t),Ut=U,Fe=A,he(t),a&8192)t:for(e=t.stateNode,e._visibility=l?e._visibility&-2:e._visibility|1,l&&(n===null||v||Fe||Ut||ea(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){v=n=e;try{if(r=v.stateNode,l)s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{h=v.stateNode;var q=v.memoizedProps.style,M=q!=null&&q.hasOwnProperty("display")?q.display:null;h.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch(R){Tt(v,v.return,R)}}}else if(e.tag===6){if(n===null){v=e;try{v.stateNode.nodeValue=l?"":v.memoizedProps}catch(R){Tt(v,v.return,R)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break t;for(;e.sibling===null;){if(e.return===null||e.return===t)break t;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}a&4&&(a=t.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Ou(t,n))));break;case 19:de(e,t),he(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Ou(t,a)));break;case 30:break;case 21:break;default:de(e,t),he(t)}}function he(t){var e=t.flags;if(e&2){try{for(var n,a=t.return;a!==null;){if(id(a)){n=a;break}a=a.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var l=n.stateNode,r=yu(t);Ii(t,r,l);break;case 5:var s=n.stateNode;n.flags&32&&(ma(s,""),n.flags&=-33);var h=yu(t);Ii(t,h,s);break;case 3:case 4:var v=n.stateNode.containerInfo,A=yu(t);xu(t,A,v);break;default:throw Error(u(161))}}catch(U){Tt(t,t.return,U)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function hd(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;hd(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function On(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)ud(t,e.alternate,e),e=e.sibling}function ea(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:Sn(4,e,e.return),ea(e);break;case 1:He(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&ad(e,e.return,n),ea(e);break;case 27:ql(e.stateNode);case 26:case 5:He(e,e.return),ea(e);break;case 22:e.memoizedState===null&&ea(e);break;case 30:ea(e);break;default:ea(e)}t=t.sibling}}function En(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var a=e.alternate,l=t,r=e,s=r.flags;switch(r.tag){case 0:case 11:case 15:En(l,r,n),zl(4,r);break;case 1:if(En(l,r,n),a=r,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(A){Tt(a,a.return,A)}if(a=r,l=a.updateQueue,l!==null){var h=a.stateNode;try{var v=l.shared.hiddenCallbacks;if(v!==null)for(l.shared.hiddenCallbacks=null,l=0;l<v.length;l++)Ls(v[l],h)}catch(A){Tt(a,a.return,A)}}n&&s&64&&nd(r),Ml(r,r.return);break;case 27:rd(r);case 26:case 5:En(l,r,n),n&&a===null&&s&4&&ld(r),Ml(r,r.return);break;case 12:En(l,r,n);break;case 13:En(l,r,n),n&&s&4&&fd(l,r);break;case 22:r.memoizedState===null&&En(l,r,n),Ml(r,r.return);break;case 30:break;default:En(l,r,n)}e=e.sibling}}function Eu(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&ml(n))}function Tu(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ml(t))}function je(t,e,n,a){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)md(t,e,n,a),e=e.sibling}function md(t,e,n,a){var l=e.flags;switch(e.tag){case 0:case 11:case 15:je(t,e,n,a),l&2048&&zl(9,e);break;case 1:je(t,e,n,a);break;case 3:je(t,e,n,a),l&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ml(t)));break;case 12:if(l&2048){je(t,e,n,a),t=e.stateNode;try{var r=e.memoizedProps,s=r.id,h=r.onPostCommit;typeof h=="function"&&h(s,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(v){Tt(e,e.return,v)}}else je(t,e,n,a);break;case 13:je(t,e,n,a);break;case 23:break;case 22:r=e.stateNode,s=e.alternate,e.memoizedState!==null?r._visibility&2?je(t,e,n,a):Rl(t,e):r._visibility&2?je(t,e,n,a):(r._visibility|=2,wa(t,e,n,a,(e.subtreeFlags&10256)!==0)),l&2048&&Eu(s,e);break;case 24:je(t,e,n,a),l&2048&&Tu(e.alternate,e);break;default:je(t,e,n,a)}}function wa(t,e,n,a,l){for(l=l&&(e.subtreeFlags&10256)!==0,e=e.child;e!==null;){var r=t,s=e,h=n,v=a,A=s.flags;switch(s.tag){case 0:case 11:case 15:wa(r,s,h,v,l),zl(8,s);break;case 23:break;case 22:var U=s.stateNode;s.memoizedState!==null?U._visibility&2?wa(r,s,h,v,l):Rl(r,s):(U._visibility|=2,wa(r,s,h,v,l)),l&&A&2048&&Eu(s.alternate,s);break;case 24:wa(r,s,h,v,l),l&&A&2048&&Tu(s.alternate,s);break;default:wa(r,s,h,v,l)}e=e.sibling}}function Rl(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,a=e,l=a.flags;switch(a.tag){case 22:Rl(n,a),l&2048&&Eu(a.alternate,a);break;case 24:Rl(n,a),l&2048&&Tu(a.alternate,a);break;default:Rl(n,a)}e=e.sibling}}var Nl=8192;function Ua(t){if(t.subtreeFlags&Nl)for(t=t.child;t!==null;)pd(t),t=t.sibling}function pd(t){switch(t.tag){case 26:Ua(t),t.flags&Nl&&t.memoizedState!==null&&Tp(Me,t.memoizedState,t.memoizedProps);break;case 5:Ua(t);break;case 3:case 4:var e=Me;Me=dr(t.stateNode.containerInfo),Ua(t),Me=e;break;case 22:t.memoizedState===null&&(e=t.alternate,e!==null&&e.memoizedState!==null?(e=Nl,Nl=16777216,Ua(t),Nl=e):Ua(t));break;default:Ua(t)}}function bd(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function kl(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var a=e[n];Xt=a,gd(a,t)}bd(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)vd(t),t=t.sibling}function vd(t){switch(t.tag){case 0:case 11:case 15:kl(t),t.flags&2048&&Sn(9,t,t.return);break;case 3:kl(t);break;case 12:kl(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,tr(t)):kl(t);break;default:kl(t)}}function tr(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var a=e[n];Xt=a,gd(a,t)}bd(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:Sn(8,e,e.return),tr(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,tr(e));break;default:tr(e)}t=t.sibling}}function gd(t,e){for(;Xt!==null;){var n=Xt;switch(n.tag){case 0:case 11:case 15:Sn(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:ml(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,Xt=a;else t:for(n=t;Xt!==null;){a=Xt;var l=a.sibling,r=a.return;if(cd(a),a===n){Xt=null;break t}if(l!==null){l.return=r,Xt=l;break t}Xt=r}}}var Ym={getCacheForType:function(t){var e=Wt(jt),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n}},Lm=typeof WeakMap=="function"?WeakMap:Map,pt=0,At=null,it=null,st=0,bt=0,me=null,Tn=!1,Ca=!1,Au=!1,tn=0,kt=0,An=0,na=0,_u=0,_e=0,Ha=0,wl=null,re=null,Du=!1,zu=0,er=1/0,nr=null,_n=null,Zt=0,Dn=null,ja=null,qa=0,Mu=0,Ru=null,yd=null,Ul=0,Nu=null;function pe(){if((pt&2)!==0&&st!==0)return st&-st;if(C.T!==null){var t=Aa;return t!==0?t:qu()}return Uc()}function xd(){_e===0&&(_e=(st&536870912)===0||ht?Rc():536870912);var t=Ae.current;return t!==null&&(t.flags|=32),_e}function be(t,e,n){(t===At&&(bt===2||bt===9)||t.cancelPendingCommit!==null)&&(Ba(t,0),zn(t,st,_e,!1)),Fa(t,n),((pt&2)===0||t!==At)&&(t===At&&((pt&2)===0&&(na|=n),kt===4&&zn(t,st,_e,!1)),qe(t))}function Sd(t,e,n){if((pt&6)!==0)throw Error(u(327));var a=!n&&(e&124)===0&&(e&t.expiredLanes)===0||Wa(t,e),l=a?Qm(t,e):Uu(t,e,!0),r=a;do{if(l===0){Ca&&!a&&zn(t,e,0,!1);break}else{if(n=t.current.alternate,r&&!Xm(n)){l=Uu(t,e,!1),r=!1;continue}if(l===2){if(r=e,t.errorRecoveryDisabledLanes&r)var s=0;else s=t.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){e=s;t:{var h=t;l=wl;var v=h.current.memoizedState.isDehydrated;if(v&&(Ba(h,s).flags|=256),s=Uu(h,s,!1),s!==2){if(Au&&!v){h.errorRecoveryDisabledLanes|=r,na|=r,l=4;break t}r=re,re=l,r!==null&&(re===null?re=r:re.push.apply(re,r))}l=s}if(r=!1,l!==2)continue}}if(l===1){Ba(t,0),zn(t,e,0,!0);break}t:{switch(a=t,r=l,r){case 0:case 1:throw Error(u(345));case 4:if((e&4194048)!==e)break;case 6:zn(a,e,_e,!Tn);break t;case 2:re=null;break;case 3:case 5:break;default:throw Error(u(329))}if((e&62914560)===e&&(l=zu+300-we(),10<l)){if(zn(a,e,_e,!Tn),hi(a,0,!0)!==0)break t;a.timeoutHandle=Pd(Od.bind(null,a,n,re,nr,Du,e,_e,na,Ha,Tn,r,2,-0,0),l);break t}Od(a,n,re,nr,Du,e,_e,na,Ha,Tn,r,0,-0,0)}}break}while(!0);qe(t)}function Od(t,e,n,a,l,r,s,h,v,A,U,q,M,R){if(t.timeoutHandle=-1,q=e.subtreeFlags,(q&8192||(q&16785408)===16785408)&&(Ll={stylesheets:null,count:0,unsuspend:Ep},pd(e),q=Ap(),q!==null)){t.cancelPendingCommit=q(Md.bind(null,t,e,r,n,a,l,s,h,v,U,1,M,R)),zn(t,r,s,!A);return}Md(t,e,r,n,a,l,s,h,v)}function Xm(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],r=l.getSnapshot;l=l.value;try{if(!se(r(),l))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function zn(t,e,n,a){e&=~_u,e&=~na,t.suspendedLanes|=e,t.pingedLanes&=~e,a&&(t.warmLanes|=e),a=t.expirationTimes;for(var l=e;0<l;){var r=31-ce(l),s=1<<r;a[r]=-1,l&=~s}n!==0&&kc(t,n,e)}function ar(){return(pt&6)===0?(Cl(0),!1):!0}function ku(){if(it!==null){if(bt===0)var t=it.return;else t=it,Ve=Pn=null,$o(t),Na=null,Al=0,t=it;for(;t!==null;)ed(t.alternate,t),t=t.return;it=null}}function Ba(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,rp(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),ku(),At=t,it=n=Ge(t.current,null),st=e,bt=0,me=null,Tn=!1,Ca=Wa(t,e),Au=!1,Ha=_e=_u=na=An=kt=0,re=wl=null,Du=!1,(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var l=31-ce(a),r=1<<l;e|=t[l],a&=~r}return tn=e,Ai(),n}function Ed(t,e){at=null,C.H=Qi,e===bl||e===Ui?(e=Bs(),bt=3):e===Hs?(e=Bs(),bt=4):bt=e===Lf?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,me=e,it===null&&(kt=1,$i(t,Se(e,t.current)))}function Td(){var t=C.H;return C.H=Qi,t===null?Qi:t}function Ad(){var t=C.A;return C.A=Ym,t}function wu(){kt=4,Tn||(st&4194048)!==st&&Ae.current!==null||(Ca=!0),(An&134217727)===0&&(na&134217727)===0||At===null||zn(At,st,_e,!1)}function Uu(t,e,n){var a=pt;pt|=2;var l=Td(),r=Ad();(At!==t||st!==e)&&(nr=null,Ba(t,e)),e=!1;var s=kt;t:do try{if(bt!==0&&it!==null){var h=it,v=me;switch(bt){case 8:ku(),s=6;break t;case 3:case 2:case 9:case 6:Ae.current===null&&(e=!0);var A=bt;if(bt=0,me=null,Ya(t,h,v,A),n&&Ca){s=0;break t}break;default:A=bt,bt=0,me=null,Ya(t,h,v,A)}}Gm(),s=kt;break}catch(U){Ed(t,U)}while(!0);return e&&t.shellSuspendCounter++,Ve=Pn=null,pt=a,C.H=l,C.A=r,it===null&&(At=null,st=0,Ai()),s}function Gm(){for(;it!==null;)_d(it)}function Qm(t,e){var n=pt;pt|=2;var a=Td(),l=Ad();At!==t||st!==e?(nr=null,er=we()+500,Ba(t,e)):Ca=Wa(t,e);t:do try{if(bt!==0&&it!==null){e=it;var r=me;e:switch(bt){case 1:bt=0,me=null,Ya(t,e,r,1);break;case 2:case 9:if(js(r)){bt=0,me=null,Dd(e);break}e=function(){bt!==2&&bt!==9||At!==t||(bt=7),qe(t)},r.then(e,e);break t;case 3:bt=7;break t;case 4:bt=5;break t;case 7:js(r)?(bt=0,me=null,Dd(e)):(bt=0,me=null,Ya(t,e,r,7));break;case 5:var s=null;switch(it.tag){case 26:s=it.memoizedState;case 5:case 27:var h=it;if(!s||uh(s)){bt=0,me=null;var v=h.sibling;if(v!==null)it=v;else{var A=h.return;A!==null?(it=A,lr(A)):it=null}break e}}bt=0,me=null,Ya(t,e,r,5);break;case 6:bt=0,me=null,Ya(t,e,r,6);break;case 8:ku(),kt=6;break t;default:throw Error(u(462))}}Zm();break}catch(U){Ed(t,U)}while(!0);return Ve=Pn=null,C.H=a,C.A=l,pt=n,it!==null?0:(At=null,st=0,Ai(),kt)}function Zm(){for(;it!==null&&!h0();)_d(it)}function _d(t){var e=If(t.alternate,t,tn);t.memoizedProps=t.pendingProps,e===null?lr(t):it=e}function Dd(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=Kf(n,e,e.pendingProps,e.type,void 0,st);break;case 11:e=Kf(n,e,e.pendingProps,e.type.render,e.ref,st);break;case 5:$o(e);default:ed(n,e),e=it=Ds(e,tn),e=If(n,e,tn)}t.memoizedProps=t.pendingProps,e===null?lr(t):it=e}function Ya(t,e,n,a){Ve=Pn=null,$o(e),Na=null,Al=0;var l=e.return;try{if(Um(t,l,e,n,st)){kt=1,$i(t,Se(n,t.current)),it=null;return}}catch(r){if(l!==null)throw it=l,r;kt=1,$i(t,Se(n,t.current)),it=null;return}e.flags&32768?(ht||a===1?t=!0:Ca||(st&536870912)!==0?t=!1:(Tn=t=!0,(a===2||a===9||a===3||a===6)&&(a=Ae.current,a!==null&&a.tag===13&&(a.flags|=16384))),zd(e,t)):lr(e)}function lr(t){var e=t;do{if((e.flags&32768)!==0){zd(e,Tn);return}t=e.return;var n=Hm(e.alternate,e,tn);if(n!==null){it=n;return}if(e=e.sibling,e!==null){it=e;return}it=e=t}while(e!==null);kt===0&&(kt=5)}function zd(t,e){do{var n=jm(t.alternate,t);if(n!==null){n.flags&=32767,it=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){it=t;return}it=t=n}while(t!==null);kt=6,it=null}function Md(t,e,n,a,l,r,s,h,v){t.cancelPendingCommit=null;do ir();while(Zt!==0);if((pt&6)!==0)throw Error(u(327));if(e!==null){if(e===t.current)throw Error(u(177));if(r=e.lanes|e.childLanes,r|=To,E0(t,n,r,s,h,v),t===At&&(it=At=null,st=0),ja=e,Dn=t,qa=n,Mu=r,Ru=l,yd=a,(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,$m(si,function(){return Ud(),null})):(t.callbackNode=null,t.callbackPriority=0),a=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||a){a=C.T,C.T=null,l=X.p,X.p=2,s=pt,pt|=4;try{qm(t,e,n)}finally{pt=s,X.p=l,C.T=a}}Zt=1,Rd(),Nd(),kd()}}function Rd(){if(Zt===1){Zt=0;var t=Dn,e=ja,n=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||n){n=C.T,C.T=null;var a=X.p;X.p=2;var l=pt;pt|=4;try{dd(e,t);var r=Vu,s=vs(t.containerInfo),h=r.focusedElem,v=r.selectionRange;if(s!==h&&h&&h.ownerDocument&&bs(h.ownerDocument.documentElement,h)){if(v!==null&&yo(h)){var A=v.start,U=v.end;if(U===void 0&&(U=A),"selectionStart"in h)h.selectionStart=A,h.selectionEnd=Math.min(U,h.value.length);else{var q=h.ownerDocument||document,M=q&&q.defaultView||window;if(M.getSelection){var R=M.getSelection(),tt=h.textContent.length,W=Math.min(v.start,tt),St=v.end===void 0?W:Math.min(v.end,tt);!R.extend&&W>St&&(s=St,St=W,W=s);var O=ps(h,W),S=ps(h,St);if(O&&S&&(R.rangeCount!==1||R.anchorNode!==O.node||R.anchorOffset!==O.offset||R.focusNode!==S.node||R.focusOffset!==S.offset)){var T=q.createRange();T.setStart(O.node,O.offset),R.removeAllRanges(),W>St?(R.addRange(T),R.extend(S.node,S.offset)):(T.setEnd(S.node,S.offset),R.addRange(T))}}}}for(q=[],R=h;R=R.parentNode;)R.nodeType===1&&q.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<q.length;h++){var j=q[h];j.element.scrollLeft=j.left,j.element.scrollTop=j.top}}vr=!!Zu,Vu=Zu=null}finally{pt=l,X.p=a,C.T=n}}t.current=e,Zt=2}}function Nd(){if(Zt===2){Zt=0;var t=Dn,e=ja,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=C.T,C.T=null;var a=X.p;X.p=2;var l=pt;pt|=4;try{ud(t,e.alternate,e)}finally{pt=l,X.p=a,C.T=n}}Zt=3}}function kd(){if(Zt===4||Zt===3){Zt=0,m0();var t=Dn,e=ja,n=qa,a=yd;(e.subtreeFlags&10256)!==0||(e.flags&10256)!==0?Zt=5:(Zt=0,ja=Dn=null,wd(t,t.pendingLanes));var l=t.pendingLanes;if(l===0&&(_n=null),Wr(n),e=e.stateNode,ue&&typeof ue.onCommitFiberRoot=="function")try{ue.onCommitFiberRoot(Pa,e,void 0,(e.current.flags&128)===128)}catch{}if(a!==null){e=C.T,l=X.p,X.p=2,C.T=null;try{for(var r=t.onRecoverableError,s=0;s<a.length;s++){var h=a[s];r(h.value,{componentStack:h.stack})}}finally{C.T=e,X.p=l}}(qa&3)!==0&&ir(),qe(t),l=t.pendingLanes,(n&4194090)!==0&&(l&42)!==0?t===Nu?Ul++:(Ul=0,Nu=t):Ul=0,Cl(0)}}function wd(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,ml(e)))}function ir(t){return Rd(),Nd(),kd(),Ud()}function Ud(){if(Zt!==5)return!1;var t=Dn,e=Mu;Mu=0;var n=Wr(qa),a=C.T,l=X.p;try{X.p=32>n?32:n,C.T=null,n=Ru,Ru=null;var r=Dn,s=qa;if(Zt=0,ja=Dn=null,qa=0,(pt&6)!==0)throw Error(u(331));var h=pt;if(pt|=4,vd(r.current),md(r,r.current,s,n),pt=h,Cl(0,!1),ue&&typeof ue.onPostCommitFiberRoot=="function")try{ue.onPostCommitFiberRoot(Pa,r)}catch{}return!0}finally{X.p=l,C.T=a,wd(t,e)}}function Cd(t,e,n){e=Se(n,e),e=cu(t.stateNode,e,2),t=vn(t,e,2),t!==null&&(Fa(t,2),qe(t))}function Tt(t,e,n){if(t.tag===3)Cd(t,t,n);else for(;e!==null;){if(e.tag===3){Cd(e,t,n);break}else if(e.tag===1){var a=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(_n===null||!_n.has(a))){t=Se(n,t),n=Bf(2),a=vn(e,n,2),a!==null&&(Yf(n,a,e,t),Fa(a,2),qe(a));break}}e=e.return}}function Cu(t,e,n){var a=t.pingCache;if(a===null){a=t.pingCache=new Lm;var l=new Set;a.set(e,l)}else l=a.get(e),l===void 0&&(l=new Set,a.set(e,l));l.has(n)||(Au=!0,l.add(n),t=Vm.bind(null,t,e,n),e.then(t,t))}function Vm(t,e,n){var a=t.pingCache;a!==null&&a.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,At===t&&(st&n)===n&&(kt===4||kt===3&&(st&62914560)===st&&300>we()-zu?(pt&2)===0&&Ba(t,0):_u|=n,Ha===st&&(Ha=0)),qe(t)}function Hd(t,e){e===0&&(e=Nc()),t=Sa(t,e),t!==null&&(Fa(t,e),qe(t))}function Km(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Hd(t,n)}function Jm(t,e){var n=0;switch(t.tag){case 13:var a=t.stateNode,l=t.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(e),Hd(t,n)}function $m(t,e){return Kr(t,e)}var rr=null,La=null,Hu=!1,or=!1,ju=!1,aa=0;function qe(t){t!==La&&t.next===null&&(La===null?rr=La=t:La=La.next=t),or=!0,Hu||(Hu=!0,Wm())}function Cl(t,e){if(!ju&&or){ju=!0;do for(var n=!1,a=rr;a!==null;){if(t!==0){var l=a.pendingLanes;if(l===0)var r=0;else{var s=a.suspendedLanes,h=a.pingedLanes;r=(1<<31-ce(42|t)+1)-1,r&=l&~(s&~h),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,Yd(a,r))}else r=st,r=hi(a,a===At?r:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(r&3)===0||Wa(a,r)||(n=!0,Yd(a,r));a=a.next}while(n);ju=!1}}function Pm(){jd()}function jd(){or=Hu=!1;var t=0;aa!==0&&(ip()&&(t=aa),aa=0);for(var e=we(),n=null,a=rr;a!==null;){var l=a.next,r=qd(a,e);r===0?(a.next=null,n===null?rr=l:n.next=l,l===null&&(La=n)):(n=a,(t!==0||(r&3)!==0)&&(or=!0)),a=l}Cl(t)}function qd(t,e){for(var n=t.suspendedLanes,a=t.pingedLanes,l=t.expirationTimes,r=t.pendingLanes&-62914561;0<r;){var s=31-ce(r),h=1<<s,v=l[s];v===-1?((h&n)===0||(h&a)!==0)&&(l[s]=O0(h,e)):v<=e&&(t.expiredLanes|=h),r&=~h}if(e=At,n=st,n=hi(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a=t.callbackNode,n===0||t===e&&(bt===2||bt===9)||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Jr(a),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||Wa(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(a!==null&&Jr(a),Wr(n)){case 2:case 8:n=zc;break;case 32:n=si;break;case 268435456:n=Mc;break;default:n=si}return a=Bd.bind(null,t),n=Kr(n,a),t.callbackPriority=e,t.callbackNode=n,e}return a!==null&&a!==null&&Jr(a),t.callbackPriority=2,t.callbackNode=null,2}function Bd(t,e){if(Zt!==0&&Zt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(ir()&&t.callbackNode!==n)return null;var a=st;return a=hi(t,t===At?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),a===0?null:(Sd(t,a,e),qd(t,we()),t.callbackNode!=null&&t.callbackNode===n?Bd.bind(null,t):null)}function Yd(t,e){if(ir())return null;Sd(t,e,!0)}function Wm(){op(function(){(pt&6)!==0?Kr(Dc,Pm):jd()})}function qu(){return aa===0&&(aa=Rc()),aa}function Ld(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:gi(""+t)}function Xd(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function Fm(t,e,n,a,l){if(e==="submit"&&n&&n.stateNode===l){var r=Ld((l[ne]||null).action),s=a.submitter;s&&(e=(e=s[ne]||null)?Ld(e.formAction):s.getAttribute("formAction"),e!==null&&(r=e,s=null));var h=new Oi("action","action",null,a,l);t.push({event:h,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(aa!==0){var v=s?Xd(l,s):new FormData(l);lu(n,{pending:!0,data:v,method:l.method,action:r},null,v)}}else typeof r=="function"&&(h.preventDefault(),v=s?Xd(l,s):new FormData(l),lu(n,{pending:!0,data:v,method:l.method,action:r},r,v))},currentTarget:l}]})}}for(var Bu=0;Bu<Eo.length;Bu++){var Yu=Eo[Bu],Im=Yu.toLowerCase(),tp=Yu[0].toUpperCase()+Yu.slice(1);ze(Im,"on"+tp)}ze(xs,"onAnimationEnd"),ze(Ss,"onAnimationIteration"),ze(Os,"onAnimationStart"),ze("dblclick","onDoubleClick"),ze("focusin","onFocus"),ze("focusout","onBlur"),ze(vm,"onTransitionRun"),ze(gm,"onTransitionStart"),ze(ym,"onTransitionCancel"),ze(Es,"onTransitionEnd"),fa("onMouseEnter",["mouseout","mouseover"]),fa("onMouseLeave",["mouseout","mouseover"]),fa("onPointerEnter",["pointerout","pointerover"]),fa("onPointerLeave",["pointerout","pointerover"]),Ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ln("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ep=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Hl));function Gd(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var a=t[n],l=a.event;a=a.listeners;t:{var r=void 0;if(e)for(var s=a.length-1;0<=s;s--){var h=a[s],v=h.instance,A=h.currentTarget;if(h=h.listener,v!==r&&l.isPropagationStopped())break t;r=h,l.currentTarget=A;try{r(l)}catch(U){Ji(U)}l.currentTarget=null,r=v}else for(s=0;s<a.length;s++){if(h=a[s],v=h.instance,A=h.currentTarget,h=h.listener,v!==r&&l.isPropagationStopped())break t;r=h,l.currentTarget=A;try{r(l)}catch(U){Ji(U)}l.currentTarget=null,r=v}}}}function rt(t,e){var n=e[Fr];n===void 0&&(n=e[Fr]=new Set);var a=t+"__bubble";n.has(a)||(Qd(e,t,2,!1),n.add(a))}function Lu(t,e,n){var a=0;e&&(a|=4),Qd(n,t,a,e)}var ur="_reactListening"+Math.random().toString(36).slice(2);function Xu(t){if(!t[ur]){t[ur]=!0,Hc.forEach(function(n){n!=="selectionchange"&&(ep.has(n)||Lu(n,!1,t),Lu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ur]||(e[ur]=!0,Lu("selectionchange",!1,e))}}function Qd(t,e,n,a){switch(mh(e)){case 2:var l=zp;break;case 8:l=Mp;break;default:l=nc}n=l.bind(null,e,n,t),l=void 0,!co||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),a?l!==void 0?t.addEventListener(e,n,{capture:!0,passive:l}):t.addEventListener(e,n,!0):l!==void 0?t.addEventListener(e,n,{passive:l}):t.addEventListener(e,n,!1)}function Gu(t,e,n,a,l){var r=a;if((e&1)===0&&(e&2)===0&&a!==null)t:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var h=a.stateNode.containerInfo;if(h===l)break;if(s===4)for(s=a.return;s!==null;){var v=s.tag;if((v===3||v===4)&&s.stateNode.containerInfo===l)return;s=s.return}for(;h!==null;){if(s=ua(h),s===null)return;if(v=s.tag,v===5||v===6||v===26||v===27){a=r=s;continue t}h=h.parentNode}}a=a.return}Pc(function(){var A=r,U=oo(n),q=[];t:{var M=Ts.get(t);if(M!==void 0){var R=Oi,tt=t;switch(t){case"keypress":if(xi(n)===0)break t;case"keydown":case"keyup":R=$0;break;case"focusin":tt="focus",R=mo;break;case"focusout":tt="blur",R=mo;break;case"beforeblur":case"afterblur":R=mo;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Ic;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=j0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=F0;break;case xs:case Ss:case Os:R=Y0;break;case Es:R=tm;break;case"scroll":case"scrollend":R=C0;break;case"wheel":R=nm;break;case"copy":case"cut":case"paste":R=X0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=es;break;case"toggle":case"beforetoggle":R=lm}var W=(e&4)!==0,St=!W&&(t==="scroll"||t==="scrollend"),O=W?M!==null?M+"Capture":null:M;W=[];for(var S=A,T;S!==null;){var j=S;if(T=j.stateNode,j=j.tag,j!==5&&j!==26&&j!==27||T===null||O===null||(j=el(S,O),j!=null&&W.push(jl(S,j,T))),St)break;S=S.return}0<W.length&&(M=new R(M,tt,null,n,U),q.push({event:M,listeners:W}))}}if((e&7)===0){t:{if(M=t==="mouseover"||t==="pointerover",R=t==="mouseout"||t==="pointerout",M&&n!==ro&&(tt=n.relatedTarget||n.fromElement)&&(ua(tt)||tt[oa]))break t;if((R||M)&&(M=U.window===U?U:(M=U.ownerDocument)?M.defaultView||M.parentWindow:window,R?(tt=n.relatedTarget||n.toElement,R=A,tt=tt?ua(tt):null,tt!==null&&(St=d(tt),W=tt.tag,tt!==St||W!==5&&W!==27&&W!==6)&&(tt=null)):(R=null,tt=A),R!==tt)){if(W=Ic,j="onMouseLeave",O="onMouseEnter",S="mouse",(t==="pointerout"||t==="pointerover")&&(W=es,j="onPointerLeave",O="onPointerEnter",S="pointer"),St=R==null?M:tl(R),T=tt==null?M:tl(tt),M=new W(j,S+"leave",R,n,U),M.target=St,M.relatedTarget=T,j=null,ua(U)===A&&(W=new W(O,S+"enter",tt,n,U),W.target=T,W.relatedTarget=St,j=W),St=j,R&&tt)e:{for(W=R,O=tt,S=0,T=W;T;T=Xa(T))S++;for(T=0,j=O;j;j=Xa(j))T++;for(;0<S-T;)W=Xa(W),S--;for(;0<T-S;)O=Xa(O),T--;for(;S--;){if(W===O||O!==null&&W===O.alternate)break e;W=Xa(W),O=Xa(O)}W=null}else W=null;R!==null&&Zd(q,M,R,W,!1),tt!==null&&St!==null&&Zd(q,St,tt,W,!0)}}t:{if(M=A?tl(A):window,R=M.nodeName&&M.nodeName.toLowerCase(),R==="select"||R==="input"&&M.type==="file")var Q=cs;else if(os(M))if(ss)Q=mm;else{Q=dm;var lt=fm}else R=M.nodeName,!R||R.toLowerCase()!=="input"||M.type!=="checkbox"&&M.type!=="radio"?A&&io(A.elementType)&&(Q=cs):Q=hm;if(Q&&(Q=Q(t,A))){us(q,Q,n,U);break t}lt&&lt(t,M,A),t==="focusout"&&A&&M.type==="number"&&A.memoizedProps.value!=null&&lo(M,"number",M.value)}switch(lt=A?tl(A):window,t){case"focusin":(os(lt)||lt.contentEditable==="true")&&(ga=lt,xo=A,cl=null);break;case"focusout":cl=xo=ga=null;break;case"mousedown":So=!0;break;case"contextmenu":case"mouseup":case"dragend":So=!1,gs(q,n,U);break;case"selectionchange":if(bm)break;case"keydown":case"keyup":gs(q,n,U)}var J;if(bo)t:{switch(t){case"compositionstart":var F="onCompositionStart";break t;case"compositionend":F="onCompositionEnd";break t;case"compositionupdate":F="onCompositionUpdate";break t}F=void 0}else va?is(t,n)&&(F="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(ns&&n.locale!=="ko"&&(va||F!=="onCompositionStart"?F==="onCompositionEnd"&&va&&(J=Wc()):(hn=U,so="value"in hn?hn.value:hn.textContent,va=!0)),lt=cr(A,F),0<lt.length&&(F=new ts(F,t,null,n,U),q.push({event:F,listeners:lt}),J?F.data=J:(J=rs(n),J!==null&&(F.data=J)))),(J=rm?om(t,n):um(t,n))&&(F=cr(A,"onBeforeInput"),0<F.length&&(lt=new ts("onBeforeInput","beforeinput",null,n,U),q.push({event:lt,listeners:F}),lt.data=J)),Fm(q,t,A,n,U)}Gd(q,e)})}function jl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function cr(t,e){for(var n=e+"Capture",a=[];t!==null;){var l=t,r=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||r===null||(l=el(t,n),l!=null&&a.unshift(jl(t,l,r)),l=el(t,e),l!=null&&a.push(jl(t,l,r))),t.tag===3)return a;t=t.return}return[]}function Xa(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Zd(t,e,n,a,l){for(var r=e._reactName,s=[];n!==null&&n!==a;){var h=n,v=h.alternate,A=h.stateNode;if(h=h.tag,v!==null&&v===a)break;h!==5&&h!==26&&h!==27||A===null||(v=A,l?(A=el(n,r),A!=null&&s.unshift(jl(n,A,v))):l||(A=el(n,r),A!=null&&s.push(jl(n,A,v)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var np=/\r\n?/g,ap=/\u0000|\uFFFD/g;function Vd(t){return(typeof t=="string"?t:""+t).replace(np,`
`).replace(ap,"")}function Kd(t,e){return e=Vd(e),Vd(t)===e}function sr(){}function xt(t,e,n,a,l,r){switch(n){case"children":typeof a=="string"?e==="body"||e==="textarea"&&a===""||ma(t,a):(typeof a=="number"||typeof a=="bigint")&&e!=="body"&&ma(t,""+a);break;case"className":pi(t,"class",a);break;case"tabIndex":pi(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":pi(t,n,a);break;case"style":Jc(t,a,r);break;case"data":if(e!=="object"){pi(t,"data",a);break}case"src":case"href":if(a===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(n);break}a=gi(""+a),t.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(e!=="input"&&xt(t,e,"name",l.name,l,null),xt(t,e,"formEncType",l.formEncType,l,null),xt(t,e,"formMethod",l.formMethod,l,null),xt(t,e,"formTarget",l.formTarget,l,null)):(xt(t,e,"encType",l.encType,l,null),xt(t,e,"method",l.method,l,null),xt(t,e,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(n);break}a=gi(""+a),t.setAttribute(n,a);break;case"onClick":a!=null&&(t.onclick=sr);break;case"onScroll":a!=null&&rt("scroll",t);break;case"onScrollEnd":a!=null&&rt("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(u(60));t.innerHTML=n}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}n=gi(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,""+a):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":a===!0?t.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(n,a):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(n,a):t.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(n):t.setAttribute(n,a);break;case"popover":rt("beforetoggle",t),rt("toggle",t),mi(t,"popover",a);break;case"xlinkActuate":Le(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Le(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Le(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Le(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Le(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Le(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Le(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Le(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Le(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":mi(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=w0.get(n)||n,mi(t,n,a))}}function Qu(t,e,n,a,l,r){switch(n){case"style":Jc(t,a,r);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(u(60));t.innerHTML=n}}break;case"children":typeof a=="string"?ma(t,a):(typeof a=="number"||typeof a=="bigint")&&ma(t,""+a);break;case"onScroll":a!=null&&rt("scroll",t);break;case"onScrollEnd":a!=null&&rt("scrollend",t);break;case"onClick":a!=null&&(t.onclick=sr);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!jc.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),e=n.slice(2,l?n.length-7:void 0),r=t[ne]||null,r=r!=null?r[n]:null,typeof r=="function"&&t.removeEventListener(e,r,l),typeof a=="function")){typeof r!="function"&&r!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,a,l);break t}n in t?t[n]=a:a===!0?t.setAttribute(n,""):mi(t,n,a)}}}function Vt(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":rt("error",t),rt("load",t);var a=!1,l=!1,r;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(s!=null)switch(r){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,e));default:xt(t,e,r,s,n,null)}}l&&xt(t,e,"srcSet",n.srcSet,n,null),a&&xt(t,e,"src",n.src,n,null);return;case"input":rt("invalid",t);var h=r=s=l=null,v=null,A=null;for(a in n)if(n.hasOwnProperty(a)){var U=n[a];if(U!=null)switch(a){case"name":l=U;break;case"type":s=U;break;case"checked":v=U;break;case"defaultChecked":A=U;break;case"value":r=U;break;case"defaultValue":h=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(u(137,e));break;default:xt(t,e,a,U,n,null)}}Qc(t,r,h,v,A,s,l,!1),bi(t);return;case"select":rt("invalid",t),a=s=r=null;for(l in n)if(n.hasOwnProperty(l)&&(h=n[l],h!=null))switch(l){case"value":r=h;break;case"defaultValue":s=h;break;case"multiple":a=h;default:xt(t,e,l,h,n,null)}e=r,n=s,t.multiple=!!a,e!=null?ha(t,!!a,e,!1):n!=null&&ha(t,!!a,n,!0);return;case"textarea":rt("invalid",t),r=l=a=null;for(s in n)if(n.hasOwnProperty(s)&&(h=n[s],h!=null))switch(s){case"value":a=h;break;case"defaultValue":l=h;break;case"children":r=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(u(91));break;default:xt(t,e,s,h,n,null)}Vc(t,a,l,r),bi(t);return;case"option":for(v in n)if(n.hasOwnProperty(v)&&(a=n[v],a!=null))switch(v){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:xt(t,e,v,a,n,null)}return;case"dialog":rt("beforetoggle",t),rt("toggle",t),rt("cancel",t),rt("close",t);break;case"iframe":case"object":rt("load",t);break;case"video":case"audio":for(a=0;a<Hl.length;a++)rt(Hl[a],t);break;case"image":rt("error",t),rt("load",t);break;case"details":rt("toggle",t);break;case"embed":case"source":case"link":rt("error",t),rt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in n)if(n.hasOwnProperty(A)&&(a=n[A],a!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,e));default:xt(t,e,A,a,n,null)}return;default:if(io(e)){for(U in n)n.hasOwnProperty(U)&&(a=n[U],a!==void 0&&Qu(t,e,U,a,n,void 0));return}}for(h in n)n.hasOwnProperty(h)&&(a=n[h],a!=null&&xt(t,e,h,a,n,null))}function lp(t,e,n,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,r=null,s=null,h=null,v=null,A=null,U=null;for(R in n){var q=n[R];if(n.hasOwnProperty(R)&&q!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":v=q;default:a.hasOwnProperty(R)||xt(t,e,R,null,a,q)}}for(var M in a){var R=a[M];if(q=n[M],a.hasOwnProperty(M)&&(R!=null||q!=null))switch(M){case"type":r=R;break;case"name":l=R;break;case"checked":A=R;break;case"defaultChecked":U=R;break;case"value":s=R;break;case"defaultValue":h=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(u(137,e));break;default:R!==q&&xt(t,e,M,R,a,q)}}ao(t,s,h,v,A,U,r,l);return;case"select":R=s=h=M=null;for(r in n)if(v=n[r],n.hasOwnProperty(r)&&v!=null)switch(r){case"value":break;case"multiple":R=v;default:a.hasOwnProperty(r)||xt(t,e,r,null,a,v)}for(l in a)if(r=a[l],v=n[l],a.hasOwnProperty(l)&&(r!=null||v!=null))switch(l){case"value":M=r;break;case"defaultValue":h=r;break;case"multiple":s=r;default:r!==v&&xt(t,e,l,r,a,v)}e=h,n=s,a=R,M!=null?ha(t,!!n,M,!1):!!a!=!!n&&(e!=null?ha(t,!!n,e,!0):ha(t,!!n,n?[]:"",!1));return;case"textarea":R=M=null;for(h in n)if(l=n[h],n.hasOwnProperty(h)&&l!=null&&!a.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:xt(t,e,h,null,a,l)}for(s in a)if(l=a[s],r=n[s],a.hasOwnProperty(s)&&(l!=null||r!=null))switch(s){case"value":M=l;break;case"defaultValue":R=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(u(91));break;default:l!==r&&xt(t,e,s,l,a,r)}Zc(t,M,R);return;case"option":for(var tt in n)if(M=n[tt],n.hasOwnProperty(tt)&&M!=null&&!a.hasOwnProperty(tt))switch(tt){case"selected":t.selected=!1;break;default:xt(t,e,tt,null,a,M)}for(v in a)if(M=a[v],R=n[v],a.hasOwnProperty(v)&&M!==R&&(M!=null||R!=null))switch(v){case"selected":t.selected=M&&typeof M!="function"&&typeof M!="symbol";break;default:xt(t,e,v,M,a,R)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var W in n)M=n[W],n.hasOwnProperty(W)&&M!=null&&!a.hasOwnProperty(W)&&xt(t,e,W,null,a,M);for(A in a)if(M=a[A],R=n[A],a.hasOwnProperty(A)&&M!==R&&(M!=null||R!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(u(137,e));break;default:xt(t,e,A,M,a,R)}return;default:if(io(e)){for(var St in n)M=n[St],n.hasOwnProperty(St)&&M!==void 0&&!a.hasOwnProperty(St)&&Qu(t,e,St,void 0,a,M);for(U in a)M=a[U],R=n[U],!a.hasOwnProperty(U)||M===R||M===void 0&&R===void 0||Qu(t,e,U,M,a,R);return}}for(var O in n)M=n[O],n.hasOwnProperty(O)&&M!=null&&!a.hasOwnProperty(O)&&xt(t,e,O,null,a,M);for(q in a)M=a[q],R=n[q],!a.hasOwnProperty(q)||M===R||M==null&&R==null||xt(t,e,q,M,a,R)}var Zu=null,Vu=null;function fr(t){return t.nodeType===9?t:t.ownerDocument}function Jd(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $d(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Ku(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ju=null;function ip(){var t=window.event;return t&&t.type==="popstate"?t===Ju?!1:(Ju=t,!0):(Ju=null,!1)}var Pd=typeof setTimeout=="function"?setTimeout:void 0,rp=typeof clearTimeout=="function"?clearTimeout:void 0,Wd=typeof Promise=="function"?Promise:void 0,op=typeof queueMicrotask=="function"?queueMicrotask:typeof Wd<"u"?function(t){return Wd.resolve(null).then(t).catch(up)}:Pd;function up(t){setTimeout(function(){throw t})}function Mn(t){return t==="head"}function Fd(t,e){var n=e,a=0,l=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(0<a&&8>a){n=a;var s=t.ownerDocument;if(n&1&&ql(s.documentElement),n&2&&ql(s.body),n&4)for(n=s.head,ql(n),s=n.firstChild;s;){var h=s.nextSibling,v=s.nodeName;s[Ia]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=h}}if(l===0){t.removeChild(r),Vl(e);return}l--}else n==="$"||n==="$?"||n==="$!"?l++:a=n.charCodeAt(0)-48;else a=0;n=r}while(n);Vl(e)}function $u(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":$u(n),Ir(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function cp(t,e,n,a){for(;t.nodeType===1;){var l=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[Ia])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(r=t.getAttribute("rel"),r==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(r!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(r=t.getAttribute("src"),(r!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&r&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var r=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===r)return t}else return t;if(t=Re(t.nextSibling),t===null)break}return null}function sp(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Re(t.nextSibling),t===null))return null;return t}function Pu(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function fp(t,e){var n=t.ownerDocument;if(t.data!=="$?"||n.readyState==="complete")e();else{var a=function(){e(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),t._reactRetry=a}}function Re(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="F!"||e==="F")break;if(e==="/$")return null}}return t}var Wu=null;function Id(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}function th(t,e,n){switch(e=fr(n),t){case"html":if(t=e.documentElement,!t)throw Error(u(452));return t;case"head":if(t=e.head,!t)throw Error(u(453));return t;case"body":if(t=e.body,!t)throw Error(u(454));return t;default:throw Error(u(451))}}function ql(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Ir(t)}var De=new Map,eh=new Set;function dr(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var en=X.d;X.d={f:dp,r:hp,D:mp,C:pp,L:bp,m:vp,X:yp,S:gp,M:xp};function dp(){var t=en.f(),e=ar();return t||e}function hp(t){var e=ca(t);e!==null&&e.tag===5&&e.type==="form"?Sf(e):en.r(t)}var Ga=typeof document>"u"?null:document;function nh(t,e,n){var a=Ga;if(a&&typeof e=="string"&&e){var l=xe(e);l='link[rel="'+t+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),eh.has(l)||(eh.add(l),t={rel:t,crossOrigin:n,href:e},a.querySelector(l)===null&&(e=a.createElement("link"),Vt(e,"link",t),Yt(e),a.head.appendChild(e)))}}function mp(t){en.D(t),nh("dns-prefetch",t,null)}function pp(t,e){en.C(t,e),nh("preconnect",t,e)}function bp(t,e,n){en.L(t,e,n);var a=Ga;if(a&&t&&e){var l='link[rel="preload"][as="'+xe(e)+'"]';e==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+xe(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+xe(n.imageSizes)+'"]')):l+='[href="'+xe(t)+'"]';var r=l;switch(e){case"style":r=Qa(t);break;case"script":r=Za(t)}De.has(r)||(t=g({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),De.set(r,t),a.querySelector(l)!==null||e==="style"&&a.querySelector(Bl(r))||e==="script"&&a.querySelector(Yl(r))||(e=a.createElement("link"),Vt(e,"link",t),Yt(e),a.head.appendChild(e)))}}function vp(t,e){en.m(t,e);var n=Ga;if(n&&t){var a=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+xe(a)+'"][href="'+xe(t)+'"]',r=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Za(t)}if(!De.has(r)&&(t=g({rel:"modulepreload",href:t},e),De.set(r,t),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Yl(r)))return}a=n.createElement("link"),Vt(a,"link",t),Yt(a),n.head.appendChild(a)}}}function gp(t,e,n){en.S(t,e,n);var a=Ga;if(a&&t){var l=sa(a).hoistableStyles,r=Qa(t);e=e||"default";var s=l.get(r);if(!s){var h={loading:0,preload:null};if(s=a.querySelector(Bl(r)))h.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":e},n),(n=De.get(r))&&Fu(t,n);var v=s=a.createElement("link");Yt(v),Vt(v,"link",t),v._p=new Promise(function(A,U){v.onload=A,v.onerror=U}),v.addEventListener("load",function(){h.loading|=1}),v.addEventListener("error",function(){h.loading|=2}),h.loading|=4,hr(s,e,a)}s={type:"stylesheet",instance:s,count:1,state:h},l.set(r,s)}}}function yp(t,e){en.X(t,e);var n=Ga;if(n&&t){var a=sa(n).hoistableScripts,l=Za(t),r=a.get(l);r||(r=n.querySelector(Yl(l)),r||(t=g({src:t,async:!0},e),(e=De.get(l))&&Iu(t,e),r=n.createElement("script"),Yt(r),Vt(r,"link",t),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function xp(t,e){en.M(t,e);var n=Ga;if(n&&t){var a=sa(n).hoistableScripts,l=Za(t),r=a.get(l);r||(r=n.querySelector(Yl(l)),r||(t=g({src:t,async:!0,type:"module"},e),(e=De.get(l))&&Iu(t,e),r=n.createElement("script"),Yt(r),Vt(r,"link",t),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(l,r))}}function ah(t,e,n,a){var l=(l=et.current)?dr(l):null;if(!l)throw Error(u(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=Qa(n.href),n=sa(l).hoistableStyles,a=n.get(e),a||(a={type:"style",instance:null,count:0,state:null},n.set(e,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Qa(n.href);var r=sa(l).hoistableStyles,s=r.get(t);if(s||(l=l.ownerDocument||l,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(t,s),(r=l.querySelector(Bl(t)))&&!r._p&&(s.instance=r,s.state.loading=5),De.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},De.set(t,n),r||Sp(l,t,n,s.state))),e&&a===null)throw Error(u(528,""));return s}if(e&&a!==null)throw Error(u(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Za(n),n=sa(l).hoistableScripts,a=n.get(e),a||(a={type:"script",instance:null,count:0,state:null},n.set(e,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,t))}}function Qa(t){return'href="'+xe(t)+'"'}function Bl(t){return'link[rel="stylesheet"]['+t+"]"}function lh(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Sp(t,e,n,a){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?a.loading=1:(e=t.createElement("link"),a.preload=e,e.addEventListener("load",function(){return a.loading|=1}),e.addEventListener("error",function(){return a.loading|=2}),Vt(e,"link",n),Yt(e),t.head.appendChild(e))}function Za(t){return'[src="'+xe(t)+'"]'}function Yl(t){return"script[async]"+t}function ih(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var a=t.querySelector('style[data-href~="'+xe(n.href)+'"]');if(a)return e.instance=a,Yt(a),a;var l=g({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Yt(a),Vt(a,"style",l),hr(a,n.precedence,t),e.instance=a;case"stylesheet":l=Qa(n.href);var r=t.querySelector(Bl(l));if(r)return e.state.loading|=4,e.instance=r,Yt(r),r;a=lh(n),(l=De.get(l))&&Fu(a,l),r=(t.ownerDocument||t).createElement("link"),Yt(r);var s=r;return s._p=new Promise(function(h,v){s.onload=h,s.onerror=v}),Vt(r,"link",a),e.state.loading|=4,hr(r,n.precedence,t),e.instance=r;case"script":return r=Za(n.src),(l=t.querySelector(Yl(r)))?(e.instance=l,Yt(l),l):(a=n,(l=De.get(r))&&(a=g({},n),Iu(a,l)),t=t.ownerDocument||t,l=t.createElement("script"),Yt(l),Vt(l,"link",a),t.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(u(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(a=e.instance,e.state.loading|=4,hr(a,n.precedence,t));return e.instance}function hr(t,e,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,r=l,s=0;s<a.length;s++){var h=a[s];if(h.dataset.precedence===e)r=h;else if(r!==l)break}r?r.parentNode.insertBefore(t,r.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function Fu(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Iu(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var mr=null;function rh(t,e,n){if(mr===null){var a=new Map,l=mr=new Map;l.set(n,a)}else l=mr,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(t))return a;for(a.set(t,null),n=n.getElementsByTagName(t),l=0;l<n.length;l++){var r=n[l];if(!(r[Ia]||r[Pt]||t==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(e)||"";s=t+s;var h=a.get(s);h?h.push(r):a.set(s,[r])}}return a}function oh(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function Op(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function uh(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Ll=null;function Ep(){}function Tp(t,e,n){if(Ll===null)throw Error(u(475));var a=Ll;if(e.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var l=Qa(n.href),r=t.querySelector(Bl(l));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(a.count++,a=pr.bind(a),t.then(a,a)),e.state.loading|=4,e.instance=r,Yt(r);return}r=t.ownerDocument||t,n=lh(n),(l=De.get(l))&&Fu(n,l),r=r.createElement("link"),Yt(r);var s=r;s._p=new Promise(function(h,v){s.onload=h,s.onerror=v}),Vt(r,"link",n),e.instance=r}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,t),(t=e.state.preload)&&(e.state.loading&3)===0&&(a.count++,e=pr.bind(a),t.addEventListener("load",e),t.addEventListener("error",e))}}function Ap(){if(Ll===null)throw Error(u(475));var t=Ll;return t.stylesheets&&t.count===0&&tc(t,t.stylesheets),0<t.count?function(e){var n=setTimeout(function(){if(t.stylesheets&&tc(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4);return t.unsuspend=e,function(){t.unsuspend=null,clearTimeout(n)}}:null}function pr(){if(this.count--,this.count===0){if(this.stylesheets)tc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var br=null;function tc(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,br=new Map,e.forEach(_p,t),br=null,pr.call(t))}function _p(t,e){if(!(e.state.loading&4)){var n=br.get(t);if(n)var a=n.get(null);else{n=new Map,br.set(t,n);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<l.length;r++){var s=l[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),a=s)}a&&n.set(null,a)}l=e.instance,s=l.getAttribute("data-precedence"),r=n.get(s)||a,r===a&&n.set(null,l),n.set(s,l),this.count++,a=pr.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),r?r.parentNode.insertBefore(l,r.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),e.state.loading|=4}}var Xl={$$typeof:Z,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function Dp(t,e,n,a,l,r,s,h){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=$r(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$r(0),this.hiddenUpdates=$r(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=h,this.incompleteTransitions=new Map}function ch(t,e,n,a,l,r,s,h,v,A,U,q){return t=new Dp(t,e,n,s,h,v,A,q),e=1,r===!0&&(e|=24),r=fe(3,null,null,e),t.current=r,r.stateNode=t,e=Co(),e.refCount++,t.pooledCache=e,e.refCount++,r.memoizedState={element:a,isDehydrated:n,cache:e},Bo(r),t}function sh(t){return t?(t=Oa,t):Oa}function fh(t,e,n,a,l,r){l=sh(l),a.context===null?a.context=l:a.pendingContext=l,a=bn(e),a.payload={element:n},r=r===void 0?null:r,r!==null&&(a.callback=r),n=vn(t,a,e),n!==null&&(be(n,t,e),gl(n,t,e))}function dh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ec(t,e){dh(t,e),(t=t.alternate)&&dh(t,e)}function hh(t){if(t.tag===13){var e=Sa(t,67108864);e!==null&&be(e,t,67108864),ec(t,67108864)}}var vr=!0;function zp(t,e,n,a){var l=C.T;C.T=null;var r=X.p;try{X.p=2,nc(t,e,n,a)}finally{X.p=r,C.T=l}}function Mp(t,e,n,a){var l=C.T;C.T=null;var r=X.p;try{X.p=8,nc(t,e,n,a)}finally{X.p=r,C.T=l}}function nc(t,e,n,a){if(vr){var l=ac(a);if(l===null)Gu(t,e,a,gr,n),ph(t,a);else if(Np(l,t,e,n,a))a.stopPropagation();else if(ph(t,a),e&4&&-1<Rp.indexOf(t)){for(;l!==null;){var r=ca(l);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=Yn(r.pendingLanes);if(s!==0){var h=r;for(h.pendingLanes|=2,h.entangledLanes|=2;s;){var v=1<<31-ce(s);h.entanglements[1]|=v,s&=~v}qe(r),(pt&6)===0&&(er=we()+500,Cl(0))}}break;case 13:h=Sa(r,2),h!==null&&be(h,r,2),ar(),ec(r,2)}if(r=ac(a),r===null&&Gu(t,e,a,gr,n),r===l)break;l=r}l!==null&&a.stopPropagation()}else Gu(t,e,a,null,n)}}function ac(t){return t=oo(t),lc(t)}var gr=null;function lc(t){if(gr=null,t=ua(t),t!==null){var e=d(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=p(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return gr=t,null}function mh(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(p0()){case Dc:return 2;case zc:return 8;case si:case b0:return 32;case Mc:return 268435456;default:return 32}default:return 32}}var ic=!1,Rn=null,Nn=null,kn=null,Gl=new Map,Ql=new Map,wn=[],Rp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ph(t,e){switch(t){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":Gl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ql.delete(e.pointerId)}}function Zl(t,e,n,a,l,r){return t===null||t.nativeEvent!==r?(t={blockedOn:e,domEventName:n,eventSystemFlags:a,nativeEvent:r,targetContainers:[l]},e!==null&&(e=ca(e),e!==null&&hh(e)),t):(t.eventSystemFlags|=a,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function Np(t,e,n,a,l){switch(e){case"focusin":return Rn=Zl(Rn,t,e,n,a,l),!0;case"dragenter":return Nn=Zl(Nn,t,e,n,a,l),!0;case"mouseover":return kn=Zl(kn,t,e,n,a,l),!0;case"pointerover":var r=l.pointerId;return Gl.set(r,Zl(Gl.get(r)||null,t,e,n,a,l)),!0;case"gotpointercapture":return r=l.pointerId,Ql.set(r,Zl(Ql.get(r)||null,t,e,n,a,l)),!0}return!1}function bh(t){var e=ua(t.target);if(e!==null){var n=d(e);if(n!==null){if(e=n.tag,e===13){if(e=p(n),e!==null){t.blockedOn=e,T0(t.priority,function(){if(n.tag===13){var a=pe();a=Pr(a);var l=Sa(n,a);l!==null&&be(l,n,a),ec(n,a)}});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function yr(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ac(t.nativeEvent);if(n===null){n=t.nativeEvent;var a=new n.constructor(n.type,n);ro=a,n.target.dispatchEvent(a),ro=null}else return e=ca(n),e!==null&&hh(e),t.blockedOn=n,!1;e.shift()}return!0}function vh(t,e,n){yr(t)&&n.delete(e)}function kp(){ic=!1,Rn!==null&&yr(Rn)&&(Rn=null),Nn!==null&&yr(Nn)&&(Nn=null),kn!==null&&yr(kn)&&(kn=null),Gl.forEach(vh),Ql.forEach(vh)}function xr(t,e){t.blockedOn===e&&(t.blockedOn=null,ic||(ic=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,kp)))}var Sr=null;function gh(t){Sr!==t&&(Sr=t,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){Sr===t&&(Sr=null);for(var e=0;e<t.length;e+=3){var n=t[e],a=t[e+1],l=t[e+2];if(typeof a!="function"){if(lc(a||n)===null)continue;break}var r=ca(n);r!==null&&(t.splice(e,3),e-=3,lu(r,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function Vl(t){function e(v){return xr(v,t)}Rn!==null&&xr(Rn,t),Nn!==null&&xr(Nn,t),kn!==null&&xr(kn,t),Gl.forEach(e),Ql.forEach(e);for(var n=0;n<wn.length;n++){var a=wn[n];a.blockedOn===t&&(a.blockedOn=null)}for(;0<wn.length&&(n=wn[0],n.blockedOn===null);)bh(n),n.blockedOn===null&&wn.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],r=n[a+1],s=l[ne]||null;if(typeof r=="function")s||gh(n);else if(s){var h=null;if(r&&r.hasAttribute("formAction")){if(l=r,s=r[ne]||null)h=s.formAction;else if(lc(l)!==null)continue}else h=s.action;typeof h=="function"?n[a+1]=h:(n.splice(a,3),a-=3),gh(n)}}}function rc(t){this._internalRoot=t}Or.prototype.render=rc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(u(409));var n=e.current,a=pe();fh(n,a,t,e,null,null)},Or.prototype.unmount=rc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;fh(t.current,2,null,t,null,null),ar(),e[oa]=null}};function Or(t){this._internalRoot=t}Or.prototype.unstable_scheduleHydration=function(t){if(t){var e=Uc();t={blockedOn:null,target:t,priority:e};for(var n=0;n<wn.length&&e!==0&&e<wn[n].priority;n++);wn.splice(n,0,t),n===0&&bh(t)}};var yh=o.version;if(yh!=="19.1.0")throw Error(u(527,yh,"19.1.0"));X.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(u(188)):(t=Object.keys(t).join(","),Error(u(268,t)));return t=b(e),t=t!==null?m(t):null,t=t===null?null:t.stateNode,t};var wp={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Er=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Er.isDisabled&&Er.supportsFiber)try{Pa=Er.inject(wp),ue=Er}catch{}}return Jl.createRoot=function(t,e){if(!f(t))throw Error(u(299));var n=!1,a="",l=Cf,r=Hf,s=jf,h=null;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(a=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(r=e.onCaughtError),e.onRecoverableError!==void 0&&(s=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(h=e.unstable_transitionCallbacks)),e=ch(t,1,!1,null,null,n,a,l,r,s,h,null),t[oa]=e.current,Xu(t),new rc(e)},Jl.hydrateRoot=function(t,e,n){if(!f(t))throw Error(u(299));var a=!1,l="",r=Cf,s=Hf,h=jf,v=null,A=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(h=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(v=n.unstable_transitionCallbacks),n.formState!==void 0&&(A=n.formState)),e=ch(t,1,!0,e,n??null,a,l,r,s,h,v,A),e.context=sh(null),n=e.current,a=pe(),a=Pr(a),l=bn(a),l.callback=null,vn(n,l,a),n=a,e.current.lanes=n,Fa(e,n),qe(e),t[oa]=e.current,Xu(t),new Or(e)},Jl.version="19.1.0",Jl}var Mh;function Qp(){if(Mh)return cc.exports;Mh=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(o){console.error(o)}}return i(),cc.exports=Gp(),cc.exports}var Zp=Qp();let Vp={data:""},Kp=i=>typeof window=="object"?((i?i.querySelector("#_goober"):window._goober)||Object.assign((i||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:i||Vp,Jp=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,$p=/\/\*[^]*?\*\/|  +/g,Rh=/\n+/g,Hn=(i,o)=>{let c="",u="",f="";for(let d in i){let p=i[d];d[0]=="@"?d[1]=="i"?c=d+" "+p+";":u+=d[1]=="f"?Hn(p,d):d+"{"+Hn(p,d[1]=="k"?"":o)+"}":typeof p=="object"?u+=Hn(p,o?o.replace(/([^,])+/g,y=>d.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,b=>/&/.test(b)?b.replace(/&/g,y):y?y+" "+b:b)):d):p!=null&&(d=/^--/.test(d)?d:d.replace(/[A-Z]/g,"-$&").toLowerCase(),f+=Hn.p?Hn.p(d,p):d+":"+p+";")}return c+(o&&f?o+"{"+f+"}":f)+u},nn={},Gh=i=>{if(typeof i=="object"){let o="";for(let c in i)o+=c+Gh(i[c]);return o}return i},Pp=(i,o,c,u,f)=>{let d=Gh(i),p=nn[d]||(nn[d]=(b=>{let m=0,g=11;for(;m<b.length;)g=101*g+b.charCodeAt(m++)>>>0;return"go"+g})(d));if(!nn[p]){let b=d!==i?i:(m=>{let g,N,_=[{}];for(;g=Jp.exec(m.replace($p,""));)g[4]?_.shift():g[3]?(N=g[3].replace(Rh," ").trim(),_.unshift(_[0][N]=_[0][N]||{})):_[0][g[1]]=g[2].replace(Rh," ").trim();return _[0]})(i);nn[p]=Hn(f?{["@keyframes "+p]:b}:b,c?"":"."+p)}let y=c&&nn.g?nn.g:null;return c&&(nn.g=nn[p]),((b,m,g,N)=>{N?m.data=m.data.replace(N,b):m.data.indexOf(b)===-1&&(m.data=g?b+m.data:m.data+b)})(nn[p],o,u,y),p},Wp=(i,o,c)=>i.reduce((u,f,d)=>{let p=o[d];if(p&&p.call){let y=p(c),b=y&&y.props&&y.props.className||/^go/.test(y)&&y;p=b?"."+b:y&&typeof y=="object"?y.props?"":Hn(y,""):y===!1?"":y}return u+f+(p??"")},"");function Yr(i){let o=this||{},c=i.call?i(o.p):i;return Pp(c.unshift?c.raw?Wp(c,[].slice.call(arguments,1),o.p):c.reduce((u,f)=>Object.assign(u,f&&f.call?f(o.p):f),{}):c,Kp(o.target),o.g,o.o,o.k)}let Qh,bc,vc;Yr.bind({g:1});let on=Yr.bind({k:1});function Fp(i,o,c,u){Hn.p=o,Qh=i,bc=c,vc=u}function jn(i,o){let c=this||{};return function(){let u=arguments;function f(d,p){let y=Object.assign({},d),b=y.className||f.className;c.p=Object.assign({theme:bc&&bc()},y),c.o=/ *go\d+/.test(b),y.className=Yr.apply(c,u)+(b?" "+b:"");let m=i;return i[0]&&(m=y.as||i,delete y.as),vc&&m[0]&&vc(y),Qh(m,y)}return f}}var Ip=i=>typeof i=="function",jr=(i,o)=>Ip(i)?i(o):i,tb=(()=>{let i=0;return()=>(++i).toString()})(),Zh=(()=>{let i;return()=>{if(i===void 0&&typeof window<"u"){let o=matchMedia("(prefers-reduced-motion: reduce)");i=!o||o.matches}return i}})(),eb=20,Vh=(i,o)=>{switch(o.type){case 0:return{...i,toasts:[o.toast,...i.toasts].slice(0,eb)};case 1:return{...i,toasts:i.toasts.map(d=>d.id===o.toast.id?{...d,...o.toast}:d)};case 2:let{toast:c}=o;return Vh(i,{type:i.toasts.find(d=>d.id===c.id)?1:0,toast:c});case 3:let{toastId:u}=o;return{...i,toasts:i.toasts.map(d=>d.id===u||u===void 0?{...d,dismissed:!0,visible:!1}:d)};case 4:return o.toastId===void 0?{...i,toasts:[]}:{...i,toasts:i.toasts.filter(d=>d.id!==o.toastId)};case 5:return{...i,pausedAt:o.time};case 6:let f=o.time-(i.pausedAt||0);return{...i,pausedAt:void 0,toasts:i.toasts.map(d=>({...d,pauseDuration:d.pauseDuration+f}))}}},wr=[],la={toasts:[],pausedAt:void 0},ia=i=>{la=Vh(la,i),wr.forEach(o=>{o(la)})},nb={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ab=(i={})=>{let[o,c]=z.useState(la),u=z.useRef(la);z.useEffect(()=>(u.current!==la&&c(la),wr.push(c),()=>{let d=wr.indexOf(c);d>-1&&wr.splice(d,1)}),[]);let f=o.toasts.map(d=>{var p,y,b;return{...i,...i[d.type],...d,removeDelay:d.removeDelay||((p=i[d.type])==null?void 0:p.removeDelay)||i?.removeDelay,duration:d.duration||((y=i[d.type])==null?void 0:y.duration)||i?.duration||nb[d.type],style:{...i.style,...(b=i[d.type])==null?void 0:b.style,...d.style}}});return{...o,toasts:f}},lb=(i,o="blank",c)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:o,ariaProps:{role:"status","aria-live":"polite"},message:i,pauseDuration:0,...c,id:c?.id||tb()}),ei=i=>(o,c)=>{let u=lb(o,i,c);return ia({type:2,toast:u}),u.id},ee=(i,o)=>ei("blank")(i,o);ee.error=ei("error");ee.success=ei("success");ee.loading=ei("loading");ee.custom=ei("custom");ee.dismiss=i=>{ia({type:3,toastId:i})};ee.remove=i=>ia({type:4,toastId:i});ee.promise=(i,o,c)=>{let u=ee.loading(o.loading,{...c,...c?.loading});return typeof i=="function"&&(i=i()),i.then(f=>{let d=o.success?jr(o.success,f):void 0;return d?ee.success(d,{id:u,...c,...c?.success}):ee.dismiss(u),f}).catch(f=>{let d=o.error?jr(o.error,f):void 0;d?ee.error(d,{id:u,...c,...c?.error}):ee.dismiss(u)}),i};var ib=(i,o)=>{ia({type:1,toast:{id:i,height:o}})},rb=()=>{ia({type:5,time:Date.now()})},Il=new Map,ob=1e3,ub=(i,o=ob)=>{if(Il.has(i))return;let c=setTimeout(()=>{Il.delete(i),ia({type:4,toastId:i})},o);Il.set(i,c)},cb=i=>{let{toasts:o,pausedAt:c}=ab(i);z.useEffect(()=>{if(c)return;let d=Date.now(),p=o.map(y=>{if(y.duration===1/0)return;let b=(y.duration||0)+y.pauseDuration-(d-y.createdAt);if(b<0){y.visible&&ee.dismiss(y.id);return}return setTimeout(()=>ee.dismiss(y.id),b)});return()=>{p.forEach(y=>y&&clearTimeout(y))}},[o,c]);let u=z.useCallback(()=>{c&&ia({type:6,time:Date.now()})},[c]),f=z.useCallback((d,p)=>{let{reverseOrder:y=!1,gutter:b=8,defaultPosition:m}=p||{},g=o.filter(k=>(k.position||m)===(d.position||m)&&k.height),N=g.findIndex(k=>k.id===d.id),_=g.filter((k,E)=>E<N&&k.visible).length;return g.filter(k=>k.visible).slice(...y?[_+1]:[0,_]).reduce((k,E)=>k+(E.height||0)+b,0)},[o]);return z.useEffect(()=>{o.forEach(d=>{if(d.dismissed)ub(d.id,d.removeDelay);else{let p=Il.get(d.id);p&&(clearTimeout(p),Il.delete(d.id))}})},[o]),{toasts:o,handlers:{updateHeight:ib,startPause:rb,endPause:u,calculateOffset:f}}},sb=on`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,fb=on`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,db=on`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,hb=jn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${i=>i.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${sb} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${fb} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${i=>i.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${db} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,mb=on`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,pb=jn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${i=>i.secondary||"#e0e0e0"};
  border-right-color: ${i=>i.primary||"#616161"};
  animation: ${mb} 1s linear infinite;
`,bb=on`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,vb=on`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,gb=jn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${i=>i.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${bb} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${vb} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${i=>i.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,yb=jn("div")`
  position: absolute;
`,xb=jn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Sb=on`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ob=jn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Sb} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Eb=({toast:i})=>{let{icon:o,type:c,iconTheme:u}=i;return o!==void 0?typeof o=="string"?z.createElement(Ob,null,o):o:c==="blank"?null:z.createElement(xb,null,z.createElement(pb,{...u}),c!=="loading"&&z.createElement(yb,null,c==="error"?z.createElement(hb,{...u}):z.createElement(gb,{...u})))},Tb=i=>`
0% {transform: translate3d(0,${i*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Ab=i=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${i*-150}%,-1px) scale(.6); opacity:0;}
`,_b="0%{opacity:0;} 100%{opacity:1;}",Db="0%{opacity:1;} 100%{opacity:0;}",zb=jn("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Mb=jn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Rb=(i,o)=>{let c=i.includes("top")?1:-1,[u,f]=Zh()?[_b,Db]:[Tb(c),Ab(c)];return{animation:o?`${on(u)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${on(f)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Nb=z.memo(({toast:i,position:o,style:c,children:u})=>{let f=i.height?Rb(i.position||o||"top-center",i.visible):{opacity:0},d=z.createElement(Eb,{toast:i}),p=z.createElement(Mb,{...i.ariaProps},jr(i.message,i));return z.createElement(zb,{className:i.className,style:{...f,...c,...i.style}},typeof u=="function"?u({icon:d,message:p}):z.createElement(z.Fragment,null,d,p))});Fp(z.createElement);var kb=({id:i,className:o,style:c,onHeightUpdate:u,children:f})=>{let d=z.useCallback(p=>{if(p){let y=()=>{let b=p.getBoundingClientRect().height;u(i,b)};y(),new MutationObserver(y).observe(p,{subtree:!0,childList:!0,characterData:!0})}},[i,u]);return z.createElement("div",{ref:d,className:o,style:c},f)},wb=(i,o)=>{let c=i.includes("top"),u=c?{top:0}:{bottom:0},f=i.includes("center")?{justifyContent:"center"}:i.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Zh()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${o*(c?1:-1)}px)`,...u,...f}},Ub=Yr`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Tr=16,Cb=({reverseOrder:i,position:o="top-center",toastOptions:c,gutter:u,children:f,containerStyle:d,containerClassName:p})=>{let{toasts:y,handlers:b}=cb(c);return z.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:Tr,left:Tr,right:Tr,bottom:Tr,pointerEvents:"none",...d},className:p,onMouseEnter:b.startPause,onMouseLeave:b.endPause},y.map(m=>{let g=m.position||o,N=b.calculateOffset(m,{reverseOrder:i,gutter:u,defaultPosition:o}),_=wb(g,N);return z.createElement(kb,{id:m.id,key:m.id,onHeightUpdate:b.updateHeight,className:m.visible?Ub:"",style:_},m.type==="custom"?jr(m.message,m):f?f(m):z.createElement(Nb,{toast:m,position:g}))}))},Kt=ee;const Ka=vt.createContext();function Hb({children:i}){const o="https://userstable.onrender.com/api/users",c=()=>({username:"nhlamulo",password:"testpassword","Content-Type":"application/json"}),u=async()=>{try{const _=await fetch(`${o}`,{method:"GET",headers:c()});return _.ok?await _.json():(Kt.error("Error fetching users"),[])}catch(_){throw console.error(_),_}},f=async _=>{try{(await fetch(`${o}/${_}`,{method:"GET",headers:c()})).ok||Kt.error("Could not get a user")}catch(k){throw console.error(k),k}},d=async _=>{try{(await fetch(`${o}`,{method:"POST",headers:c(),body:JSON.stringify(_)})).ok||Kt.error("Could not create a user")}catch(k){throw console.error(k),k}},p=async(_,k)=>{try{if(!(await fetch(`${o}/${_}`,{method:"PUT",headers:c(),body:JSON.stringify(k)})).ok)return Kt.error("Could not update a user")}catch(E){throw console.error(E),E}},y=async _=>{try{if(!(await fetch(`${o}/${_}`,{method:"DELETE",headers:c()})).ok)return Kt.error("Could not delete a user")}catch(k){throw console.error(k),k}},[b,m]=z.useState(null),[g,N]=z.useState(localStorage.getItem("isAuthenticated")==="true");return z.useEffect(()=>{localStorage.setItem("isAuthenticated",g.toString())},[g]),w.jsx(Ka.Provider,{value:{getUsers:u,getAUser:f,addAUser:d,updateAUser:p,deleteAUser:y,selectedUser:b,setSelectedUser:m,isAuthenticated:g,setIsAuthenticated:N},children:i})}var $l={},Nh;function jb(){if(Nh)return $l;Nh=1,Object.defineProperty($l,"__esModule",{value:!0}),$l.parse=p,$l.serialize=m;const i=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,o=/^[\u0021-\u003A\u003C-\u007E]*$/,c=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,u=/^[\u0020-\u003A\u003D-\u007E]*$/,f=Object.prototype.toString,d=(()=>{const _=function(){};return _.prototype=Object.create(null),_})();function p(_,k){const E=new d,D=_.length;if(D<2)return E;const Y=k?.decode||g;let H=0;do{const K=_.indexOf("=",H);if(K===-1)break;const Z=_.indexOf(";",H),ut=Z===-1?D:Z;if(K>ut){H=_.lastIndexOf(";",K-1)+1;continue}const $=y(_,H,K),gt=b(_,K,$),mt=_.slice($,gt);if(E[mt]===void 0){let Ot=y(_,K+1,ut),ct=b(_,ut,Ot);const It=Y(_.slice(Ot,ct));E[mt]=It}H=ut+1}while(H<D);return E}function y(_,k,E){do{const D=_.charCodeAt(k);if(D!==32&&D!==9)return k}while(++k<E);return E}function b(_,k,E){for(;k>E;){const D=_.charCodeAt(--k);if(D!==32&&D!==9)return k+1}return E}function m(_,k,E){const D=E?.encode||encodeURIComponent;if(!i.test(_))throw new TypeError(`argument name is invalid: ${_}`);const Y=D(k);if(!o.test(Y))throw new TypeError(`argument val is invalid: ${k}`);let H=_+"="+Y;if(!E)return H;if(E.maxAge!==void 0){if(!Number.isInteger(E.maxAge))throw new TypeError(`option maxAge is invalid: ${E.maxAge}`);H+="; Max-Age="+E.maxAge}if(E.domain){if(!c.test(E.domain))throw new TypeError(`option domain is invalid: ${E.domain}`);H+="; Domain="+E.domain}if(E.path){if(!u.test(E.path))throw new TypeError(`option path is invalid: ${E.path}`);H+="; Path="+E.path}if(E.expires){if(!N(E.expires)||!Number.isFinite(E.expires.valueOf()))throw new TypeError(`option expires is invalid: ${E.expires}`);H+="; Expires="+E.expires.toUTCString()}if(E.httpOnly&&(H+="; HttpOnly"),E.secure&&(H+="; Secure"),E.partitioned&&(H+="; Partitioned"),E.priority)switch(typeof E.priority=="string"?E.priority.toLowerCase():void 0){case"low":H+="; Priority=Low";break;case"medium":H+="; Priority=Medium";break;case"high":H+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${E.priority}`)}if(E.sameSite)switch(typeof E.sameSite=="string"?E.sameSite.toLowerCase():E.sameSite){case!0:case"strict":H+="; SameSite=Strict";break;case"lax":H+="; SameSite=Lax";break;case"none":H+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${E.sameSite}`)}return H}function g(_){if(_.indexOf("%")===-1)return _;try{return decodeURIComponent(_)}catch{return _}}function N(_){return f.call(_)==="[object Date]"}return $l}jb();var kh="popstate";function qb(i={}){function o(u,f){let{pathname:d,search:p,hash:y}=u.location;return gc("",{pathname:d,search:p,hash:y},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function c(u,f){return typeof f=="string"?f:ti(f)}return Yb(o,c,null,i)}function Rt(i,o){if(i===!1||i===null||typeof i>"u")throw new Error(o)}function Be(i,o){if(!i){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function Bb(){return Math.random().toString(36).substring(2,10)}function wh(i,o){return{usr:i.state,key:i.key,idx:o}}function gc(i,o,c=null,u){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof o=="string"?Ja(o):o,state:c,key:o&&o.key||u||Bb()}}function ti({pathname:i="/",search:o="",hash:c=""}){return o&&o!=="?"&&(i+=o.charAt(0)==="?"?o:"?"+o),c&&c!=="#"&&(i+=c.charAt(0)==="#"?c:"#"+c),i}function Ja(i){let o={};if(i){let c=i.indexOf("#");c>=0&&(o.hash=i.substring(c),i=i.substring(0,c));let u=i.indexOf("?");u>=0&&(o.search=i.substring(u),i=i.substring(0,u)),i&&(o.pathname=i)}return o}function Yb(i,o,c,u={}){let{window:f=document.defaultView,v5Compat:d=!1}=u,p=f.history,y="POP",b=null,m=g();m==null&&(m=0,p.replaceState({...p.state,idx:m},""));function g(){return(p.state||{idx:null}).idx}function N(){y="POP";let Y=g(),H=Y==null?null:Y-m;m=Y,b&&b({action:y,location:D.location,delta:H})}function _(Y,H){y="PUSH";let K=gc(D.location,Y,H);m=g()+1;let Z=wh(K,m),ut=D.createHref(K);try{p.pushState(Z,"",ut)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;f.location.assign(ut)}d&&b&&b({action:y,location:D.location,delta:1})}function k(Y,H){y="REPLACE";let K=gc(D.location,Y,H);m=g();let Z=wh(K,m),ut=D.createHref(K);p.replaceState(Z,"",ut),d&&b&&b({action:y,location:D.location,delta:0})}function E(Y){return Lb(Y)}let D={get action(){return y},get location(){return i(f,p)},listen(Y){if(b)throw new Error("A history only accepts one active listener");return f.addEventListener(kh,N),b=Y,()=>{f.removeEventListener(kh,N),b=null}},createHref(Y){return o(f,Y)},createURL:E,encodeLocation(Y){let H=E(Y);return{pathname:H.pathname,search:H.search,hash:H.hash}},push:_,replace:k,go(Y){return p.go(Y)}};return D}function Lb(i,o=!1){let c="http://localhost";typeof window<"u"&&(c=window.location.origin!=="null"?window.location.origin:window.location.href),Rt(c,"No window.location.(origin|href) available to create URL");let u=typeof i=="string"?i:ti(i);return u=u.replace(/ $/,"%20"),!o&&u.startsWith("//")&&(u=c+u),new URL(u,c)}function Kh(i,o,c="/"){return Xb(i,o,c,!1)}function Xb(i,o,c,u){let f=typeof o=="string"?Ja(o):o,d=un(f.pathname||"/",c);if(d==null)return null;let p=Jh(i);Gb(p);let y=null;for(let b=0;y==null&&b<p.length;++b){let m=tv(d);y=Fb(p[b],m,u)}return y}function Jh(i,o=[],c=[],u=""){let f=(d,p,y)=>{let b={relativePath:y===void 0?d.path||"":y,caseSensitive:d.caseSensitive===!0,childrenIndex:p,route:d};b.relativePath.startsWith("/")&&(Rt(b.relativePath.startsWith(u),`Absolute route path "${b.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(u.length));let m=rn([u,b.relativePath]),g=c.concat(b);d.children&&d.children.length>0&&(Rt(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Jh(d.children,o,g,m)),!(d.path==null&&!d.index)&&o.push({path:m,score:Pb(m,d.index),routesMeta:g})};return i.forEach((d,p)=>{if(d.path===""||!d.path?.includes("?"))f(d,p);else for(let y of $h(d.path))f(d,p,y)}),o}function $h(i){let o=i.split("/");if(o.length===0)return[];let[c,...u]=o,f=c.endsWith("?"),d=c.replace(/\?$/,"");if(u.length===0)return f?[d,""]:[d];let p=$h(u.join("/")),y=[];return y.push(...p.map(b=>b===""?d:[d,b].join("/"))),f&&y.push(...p),y.map(b=>i.startsWith("/")&&b===""?"/":b)}function Gb(i){i.sort((o,c)=>o.score!==c.score?c.score-o.score:Wb(o.routesMeta.map(u=>u.childrenIndex),c.routesMeta.map(u=>u.childrenIndex)))}var Qb=/^:[\w-]+$/,Zb=3,Vb=2,Kb=1,Jb=10,$b=-2,Uh=i=>i==="*";function Pb(i,o){let c=i.split("/"),u=c.length;return c.some(Uh)&&(u+=$b),o&&(u+=Vb),c.filter(f=>!Uh(f)).reduce((f,d)=>f+(Qb.test(d)?Zb:d===""?Kb:Jb),u)}function Wb(i,o){return i.length===o.length&&i.slice(0,-1).every((u,f)=>u===o[f])?i[i.length-1]-o[o.length-1]:0}function Fb(i,o,c=!1){let{routesMeta:u}=i,f={},d="/",p=[];for(let y=0;y<u.length;++y){let b=u[y],m=y===u.length-1,g=d==="/"?o:o.slice(d.length)||"/",N=qr({path:b.relativePath,caseSensitive:b.caseSensitive,end:m},g),_=b.route;if(!N&&m&&c&&!u[u.length-1].route.index&&(N=qr({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},g)),!N)return null;Object.assign(f,N.params),p.push({params:f,pathname:rn([d,N.pathname]),pathnameBase:lv(rn([d,N.pathnameBase])),route:_}),N.pathnameBase!=="/"&&(d=rn([d,N.pathnameBase]))}return p}function qr(i,o){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[c,u]=Ib(i.path,i.caseSensitive,i.end),f=o.match(c);if(!f)return null;let d=f[0],p=d.replace(/(.)\/+$/,"$1"),y=f.slice(1);return{params:u.reduce((m,{paramName:g,isOptional:N},_)=>{if(g==="*"){let E=y[_]||"";p=d.slice(0,d.length-E.length).replace(/(.)\/+$/,"$1")}const k=y[_];return N&&!k?m[g]=void 0:m[g]=(k||"").replace(/%2F/g,"/"),m},{}),pathname:d,pathnameBase:p,pattern:i}}function Ib(i,o=!1,c=!0){Be(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let u=[],f="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(p,y,b)=>(u.push({paramName:y,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(u.push({paramName:"*"}),f+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):c?f+="\\/*$":i!==""&&i!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,o?void 0:"i"),u]}function tv(i){try{return i.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Be(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),i}}function un(i,o){if(o==="/")return i;if(!i.toLowerCase().startsWith(o.toLowerCase()))return null;let c=o.endsWith("/")?o.length-1:o.length,u=i.charAt(c);return u&&u!=="/"?null:i.slice(c)||"/"}function ev(i,o="/"){let{pathname:c,search:u="",hash:f=""}=typeof i=="string"?Ja(i):i;return{pathname:c?c.startsWith("/")?c:nv(c,o):o,search:iv(u),hash:rv(f)}}function nv(i,o){let c=o.replace(/\/+$/,"").split("/");return i.split("/").forEach(f=>{f===".."?c.length>1&&c.pop():f!=="."&&c.push(f)}),c.length>1?c.join("/"):"/"}function hc(i,o,c,u){return`Cannot include a '${i}' character in a manually specified \`to.${o}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function av(i){return i.filter((o,c)=>c===0||o.route.path&&o.route.path.length>0)}function Ph(i){let o=av(i);return o.map((c,u)=>u===o.length-1?c.pathname:c.pathnameBase)}function Wh(i,o,c,u=!1){let f;typeof i=="string"?f=Ja(i):(f={...i},Rt(!f.pathname||!f.pathname.includes("?"),hc("?","pathname","search",f)),Rt(!f.pathname||!f.pathname.includes("#"),hc("#","pathname","hash",f)),Rt(!f.search||!f.search.includes("#"),hc("#","search","hash",f)));let d=i===""||f.pathname==="",p=d?"/":f.pathname,y;if(p==null)y=c;else{let N=o.length-1;if(!u&&p.startsWith("..")){let _=p.split("/");for(;_[0]==="..";)_.shift(),N-=1;f.pathname=_.join("/")}y=N>=0?o[N]:"/"}let b=ev(f,y),m=p&&p!=="/"&&p.endsWith("/"),g=(d||p===".")&&c.endsWith("/");return!b.pathname.endsWith("/")&&(m||g)&&(b.pathname+="/"),b}var rn=i=>i.join("/").replace(/\/\/+/g,"/"),lv=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),iv=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,rv=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function ov(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}var Fh=["POST","PUT","PATCH","DELETE"];new Set(Fh);var uv=["GET",...Fh];new Set(uv);var $a=z.createContext(null);$a.displayName="DataRouter";var Lr=z.createContext(null);Lr.displayName="DataRouterState";var Ih=z.createContext({isTransitioning:!1});Ih.displayName="ViewTransition";var cv=z.createContext(new Map);cv.displayName="Fetchers";var sv=z.createContext(null);sv.displayName="Await";var Ye=z.createContext(null);Ye.displayName="Navigation";var ni=z.createContext(null);ni.displayName="Location";var cn=z.createContext({outlet:null,matches:[],isDataRoute:!1});cn.displayName="Route";var Oc=z.createContext(null);Oc.displayName="RouteError";function fv(i,{relative:o}={}){Rt(ai(),"useHref() may be used only in the context of a <Router> component.");let{basename:c,navigator:u}=z.useContext(Ye),{hash:f,pathname:d,search:p}=li(i,{relative:o}),y=d;return c!=="/"&&(y=d==="/"?c:rn([c,d])),u.createHref({pathname:y,search:p,hash:f})}function ai(){return z.useContext(ni)!=null}function ra(){return Rt(ai(),"useLocation() may be used only in the context of a <Router> component."),z.useContext(ni).location}var t0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function e0(i){z.useContext(Ye).static||z.useLayoutEffect(i)}function Xr(){let{isDataRoute:i}=z.useContext(cn);return i?Tv():dv()}function dv(){Rt(ai(),"useNavigate() may be used only in the context of a <Router> component.");let i=z.useContext($a),{basename:o,navigator:c}=z.useContext(Ye),{matches:u}=z.useContext(cn),{pathname:f}=ra(),d=JSON.stringify(Ph(u)),p=z.useRef(!1);return e0(()=>{p.current=!0}),z.useCallback((b,m={})=>{if(Be(p.current,t0),!p.current)return;if(typeof b=="number"){c.go(b);return}let g=Wh(b,JSON.parse(d),f,m.relative==="path");i==null&&o!=="/"&&(g.pathname=g.pathname==="/"?o:rn([o,g.pathname])),(m.replace?c.replace:c.push)(g,m.state,m)},[o,c,d,f,i])}z.createContext(null);function li(i,{relative:o}={}){let{matches:c}=z.useContext(cn),{pathname:u}=ra(),f=JSON.stringify(Ph(c));return z.useMemo(()=>Wh(i,JSON.parse(f),u,o==="path"),[i,f,u,o])}function hv(i,o){return n0(i,o)}function n0(i,o,c,u){Rt(ai(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=z.useContext(Ye),{matches:d}=z.useContext(cn),p=d[d.length-1],y=p?p.params:{},b=p?p.pathname:"/",m=p?p.pathnameBase:"/",g=p&&p.route;{let H=g&&g.path||"";a0(b,!g||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${b}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let N=ra(),_;if(o){let H=typeof o=="string"?Ja(o):o;Rt(m==="/"||H.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${H.pathname}" was given in the \`location\` prop.`),_=H}else _=N;let k=_.pathname||"/",E=k;if(m!=="/"){let H=m.replace(/^\//,"").split("/");E="/"+k.replace(/^\//,"").split("/").slice(H.length).join("/")}let D=Kh(i,{pathname:E});Be(g||D!=null,`No routes matched location "${_.pathname}${_.search}${_.hash}" `),Be(D==null||D[D.length-1].route.element!==void 0||D[D.length-1].route.Component!==void 0||D[D.length-1].route.lazy!==void 0,`Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Y=gv(D&&D.map(H=>Object.assign({},H,{params:Object.assign({},y,H.params),pathname:rn([m,f.encodeLocation?f.encodeLocation(H.pathname).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?m:rn([m,f.encodeLocation?f.encodeLocation(H.pathnameBase).pathname:H.pathnameBase])})),d,c,u);return o&&Y?z.createElement(ni.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",..._},navigationType:"POP"}},Y):Y}function mv(){let i=Ev(),o=ov(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),c=i instanceof Error?i.stack:null,u="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:u},d={padding:"2px 4px",backgroundColor:u},p=null;return console.error("Error handled by React Router default ErrorBoundary:",i),p=z.createElement(z.Fragment,null,z.createElement("p",null,"💿 Hey developer 👋"),z.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",z.createElement("code",{style:d},"ErrorBoundary")," or"," ",z.createElement("code",{style:d},"errorElement")," prop on your route.")),z.createElement(z.Fragment,null,z.createElement("h2",null,"Unexpected Application Error!"),z.createElement("h3",{style:{fontStyle:"italic"}},o),c?z.createElement("pre",{style:f},c):null,p)}var pv=z.createElement(mv,null),bv=class extends z.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,o){return o.location!==i.location||o.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:o.error,location:o.location,revalidation:i.revalidation||o.revalidation}}componentDidCatch(i,o){console.error("React Router caught the following error during render",i,o)}render(){return this.state.error!==void 0?z.createElement(cn.Provider,{value:this.props.routeContext},z.createElement(Oc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function vv({routeContext:i,match:o,children:c}){let u=z.useContext($a);return u&&u.static&&u.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=o.route.id),z.createElement(cn.Provider,{value:i},c)}function gv(i,o=[],c=null,u=null){if(i==null){if(!c)return null;if(c.errors)i=c.matches;else if(o.length===0&&!c.initialized&&c.matches.length>0)i=c.matches;else return null}let f=i,d=c?.errors;if(d!=null){let b=f.findIndex(m=>m.route.id&&d?.[m.route.id]!==void 0);Rt(b>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(d).join(",")}`),f=f.slice(0,Math.min(f.length,b+1))}let p=!1,y=-1;if(c)for(let b=0;b<f.length;b++){let m=f[b];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(y=b),m.route.id){let{loaderData:g,errors:N}=c,_=m.route.loader&&!g.hasOwnProperty(m.route.id)&&(!N||N[m.route.id]===void 0);if(m.route.lazy||_){p=!0,y>=0?f=f.slice(0,y+1):f=[f[0]];break}}}return f.reduceRight((b,m,g)=>{let N,_=!1,k=null,E=null;c&&(N=d&&m.route.id?d[m.route.id]:void 0,k=m.route.errorElement||pv,p&&(y<0&&g===0?(a0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),_=!0,E=null):y===g&&(_=!0,E=m.route.hydrateFallbackElement||null)));let D=o.concat(f.slice(0,g+1)),Y=()=>{let H;return N?H=k:_?H=E:m.route.Component?H=z.createElement(m.route.Component,null):m.route.element?H=m.route.element:H=b,z.createElement(vv,{match:m,routeContext:{outlet:b,matches:D,isDataRoute:c!=null},children:H})};return c&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?z.createElement(bv,{location:c.location,revalidation:c.revalidation,component:k,error:N,children:Y(),routeContext:{outlet:null,matches:D,isDataRoute:!0}}):Y()},null)}function Ec(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function yv(i){let o=z.useContext($a);return Rt(o,Ec(i)),o}function xv(i){let o=z.useContext(Lr);return Rt(o,Ec(i)),o}function Sv(i){let o=z.useContext(cn);return Rt(o,Ec(i)),o}function Tc(i){let o=Sv(i),c=o.matches[o.matches.length-1];return Rt(c.route.id,`${i} can only be used on routes that contain a unique "id"`),c.route.id}function Ov(){return Tc("useRouteId")}function Ev(){let i=z.useContext(Oc),o=xv("useRouteError"),c=Tc("useRouteError");return i!==void 0?i:o.errors?.[c]}function Tv(){let{router:i}=yv("useNavigate"),o=Tc("useNavigate"),c=z.useRef(!1);return e0(()=>{c.current=!0}),z.useCallback(async(f,d={})=>{Be(c.current,t0),c.current&&(typeof f=="number"?i.navigate(f):await i.navigate(f,{fromRouteId:o,...d}))},[i,o])}var Ch={};function a0(i,o,c){!o&&!Ch[i]&&(Ch[i]=!0,Be(!1,c))}z.memo(Av);function Av({routes:i,future:o,state:c}){return n0(i,void 0,c,o)}function Ur(i){Rt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function _v({basename:i="/",children:o=null,location:c,navigationType:u="POP",navigator:f,static:d=!1}){Rt(!ai(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=i.replace(/^\/*/,"/"),y=z.useMemo(()=>({basename:p,navigator:f,static:d,future:{}}),[p,f,d]);typeof c=="string"&&(c=Ja(c));let{pathname:b="/",search:m="",hash:g="",state:N=null,key:_="default"}=c,k=z.useMemo(()=>{let E=un(b,p);return E==null?null:{location:{pathname:E,search:m,hash:g,state:N,key:_},navigationType:u}},[p,b,m,g,N,_,u]);return Be(k!=null,`<Router basename="${p}"> is not able to match the URL "${b}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:z.createElement(Ye.Provider,{value:y},z.createElement(ni.Provider,{children:o,value:k}))}function Dv({children:i,location:o}){return hv(yc(i),o)}function yc(i,o=[]){let c=[];return z.Children.forEach(i,(u,f)=>{if(!z.isValidElement(u))return;let d=[...o,f];if(u.type===z.Fragment){c.push.apply(c,yc(u.props.children,d));return}Rt(u.type===Ur,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Rt(!u.props.index||!u.props.children,"An index route cannot have child routes.");let p={id:u.props.id||d.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(p.children=yc(u.props.children,d)),c.push(p)}),c}var Cr="get",Hr="application/x-www-form-urlencoded";function Gr(i){return i!=null&&typeof i.tagName=="string"}function zv(i){return Gr(i)&&i.tagName.toLowerCase()==="button"}function Mv(i){return Gr(i)&&i.tagName.toLowerCase()==="form"}function Rv(i){return Gr(i)&&i.tagName.toLowerCase()==="input"}function Nv(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function kv(i,o){return i.button===0&&(!o||o==="_self")&&!Nv(i)}var Ar=null;function wv(){if(Ar===null)try{new FormData(document.createElement("form"),0),Ar=!1}catch{Ar=!0}return Ar}var Uv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function mc(i){return i!=null&&!Uv.has(i)?(Be(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Hr}"`),null):i}function Cv(i,o){let c,u,f,d,p;if(Mv(i)){let y=i.getAttribute("action");u=y?un(y,o):null,c=i.getAttribute("method")||Cr,f=mc(i.getAttribute("enctype"))||Hr,d=new FormData(i)}else if(zv(i)||Rv(i)&&(i.type==="submit"||i.type==="image")){let y=i.form;if(y==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=i.getAttribute("formaction")||y.getAttribute("action");if(u=b?un(b,o):null,c=i.getAttribute("formmethod")||y.getAttribute("method")||Cr,f=mc(i.getAttribute("formenctype"))||mc(y.getAttribute("enctype"))||Hr,d=new FormData(y,i),!wv()){let{name:m,type:g,value:N}=i;if(g==="image"){let _=m?`${m}.`:"";d.append(`${_}x`,"0"),d.append(`${_}y`,"0")}else m&&d.append(m,N)}}else{if(Gr(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');c=Cr,u=null,f=Hr,p=i}return d&&f==="text/plain"&&(p=d,d=void 0),{action:u,method:c.toLowerCase(),encType:f,formData:d,body:p}}function Ac(i,o){if(i===!1||i===null||typeof i>"u")throw new Error(o)}async function Hv(i,o){if(i.id in o)return o[i.id];try{let c=await import(i.module);return o[i.id]=c,c}catch(c){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(c),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function jv(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function qv(i,o,c){let u=await Promise.all(i.map(async f=>{let d=o.routes[f.route.id];if(d){let p=await Hv(d,c);return p.links?p.links():[]}return[]}));return Xv(u.flat(1).filter(jv).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function Hh(i,o,c,u,f,d){let p=(b,m)=>c[m]?b.route.id!==c[m].route.id:!0,y=(b,m)=>c[m].pathname!==b.pathname||c[m].route.path?.endsWith("*")&&c[m].params["*"]!==b.params["*"];return d==="assets"?o.filter((b,m)=>p(b,m)||y(b,m)):d==="data"?o.filter((b,m)=>{let g=u.routes[b.route.id];if(!g||!g.hasLoader)return!1;if(p(b,m)||y(b,m))return!0;if(b.route.shouldRevalidate){let N=b.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:c[0]?.params||{},nextUrl:new URL(i,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof N=="boolean")return N}return!0}):[]}function Bv(i,o,{includeHydrateFallback:c}={}){return Yv(i.map(u=>{let f=o.routes[u.route.id];if(!f)return[];let d=[f.module];return f.clientActionModule&&(d=d.concat(f.clientActionModule)),f.clientLoaderModule&&(d=d.concat(f.clientLoaderModule)),c&&f.hydrateFallbackModule&&(d=d.concat(f.hydrateFallbackModule)),f.imports&&(d=d.concat(f.imports)),d}).flat(1))}function Yv(i){return[...new Set(i)]}function Lv(i){let o={},c=Object.keys(i).sort();for(let u of c)o[u]=i[u];return o}function Xv(i,o){let c=new Set;return new Set(o),i.reduce((u,f)=>{let d=JSON.stringify(Lv(f));return c.has(d)||(c.add(d),u.push({key:d,link:f})),u},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Gv=new Set([100,101,204,205]);function Qv(i,o){let c=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return c.pathname==="/"?c.pathname="_root.data":o&&un(c.pathname,o)==="/"?c.pathname=`${o.replace(/\/$/,"")}/_root.data`:c.pathname=`${c.pathname.replace(/\/$/,"")}.data`,c}function l0(){let i=z.useContext($a);return Ac(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function Zv(){let i=z.useContext(Lr);return Ac(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var _c=z.createContext(void 0);_c.displayName="FrameworkContext";function i0(){let i=z.useContext(_c);return Ac(i,"You must render this element inside a <HydratedRouter> element"),i}function Vv(i,o){let c=z.useContext(_c),[u,f]=z.useState(!1),[d,p]=z.useState(!1),{onFocus:y,onBlur:b,onMouseEnter:m,onMouseLeave:g,onTouchStart:N}=o,_=z.useRef(null);z.useEffect(()=>{if(i==="render"&&p(!0),i==="viewport"){let D=H=>{H.forEach(K=>{p(K.isIntersecting)})},Y=new IntersectionObserver(D,{threshold:.5});return _.current&&Y.observe(_.current),()=>{Y.disconnect()}}},[i]),z.useEffect(()=>{if(u){let D=setTimeout(()=>{p(!0)},100);return()=>{clearTimeout(D)}}},[u]);let k=()=>{f(!0)},E=()=>{f(!1),p(!1)};return c?i!=="intent"?[d,_,{}]:[d,_,{onFocus:Pl(y,k),onBlur:Pl(b,E),onMouseEnter:Pl(m,k),onMouseLeave:Pl(g,E),onTouchStart:Pl(N,k)}]:[!1,_,{}]}function Pl(i,o){return c=>{i&&i(c),c.defaultPrevented||o(c)}}function Kv({page:i,...o}){let{router:c}=l0(),u=z.useMemo(()=>Kh(c.routes,i,c.basename),[c.routes,i,c.basename]);return u?z.createElement($v,{page:i,matches:u,...o}):null}function Jv(i){let{manifest:o,routeModules:c}=i0(),[u,f]=z.useState([]);return z.useEffect(()=>{let d=!1;return qv(i,o,c).then(p=>{d||f(p)}),()=>{d=!0}},[i,o,c]),u}function $v({page:i,matches:o,...c}){let u=ra(),{manifest:f,routeModules:d}=i0(),{basename:p}=l0(),{loaderData:y,matches:b}=Zv(),m=z.useMemo(()=>Hh(i,o,b,f,u,"data"),[i,o,b,f,u]),g=z.useMemo(()=>Hh(i,o,b,f,u,"assets"),[i,o,b,f,u]),N=z.useMemo(()=>{if(i===u.pathname+u.search+u.hash)return[];let E=new Set,D=!1;if(o.forEach(H=>{let K=f.routes[H.route.id];!K||!K.hasLoader||(!m.some(Z=>Z.route.id===H.route.id)&&H.route.id in y&&d[H.route.id]?.shouldRevalidate||K.hasClientLoader?D=!0:E.add(H.route.id))}),E.size===0)return[];let Y=Qv(i,p);return D&&E.size>0&&Y.searchParams.set("_routes",o.filter(H=>E.has(H.route.id)).map(H=>H.route.id).join(",")),[Y.pathname+Y.search]},[p,y,u,f,m,o,i,d]),_=z.useMemo(()=>Bv(g,f),[g,f]),k=Jv(g);return z.createElement(z.Fragment,null,N.map(E=>z.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...c})),_.map(E=>z.createElement("link",{key:E,rel:"modulepreload",href:E,...c})),k.map(({key:E,link:D})=>z.createElement("link",{key:E,...D})))}function Pv(...i){return o=>{i.forEach(c=>{typeof c=="function"?c(o):c!=null&&(c.current=o)})}}var r0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{r0&&(window.__reactRouterVersion="7.6.3")}catch{}function Wv({basename:i,children:o,window:c}){let u=z.useRef();u.current==null&&(u.current=qb({window:c,v5Compat:!0}));let f=u.current,[d,p]=z.useState({action:f.action,location:f.location}),y=z.useCallback(b=>{z.startTransition(()=>p(b))},[p]);return z.useLayoutEffect(()=>f.listen(y),[f,y]),z.createElement(_v,{basename:i,children:o,location:d.location,navigationType:d.action,navigator:f})}var o0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,u0=z.forwardRef(function({onClick:o,discover:c="render",prefetch:u="none",relative:f,reloadDocument:d,replace:p,state:y,target:b,to:m,preventScrollReset:g,viewTransition:N,..._},k){let{basename:E}=z.useContext(Ye),D=typeof m=="string"&&o0.test(m),Y,H=!1;if(typeof m=="string"&&D&&(Y=m,r0))try{let ct=new URL(window.location.href),It=m.startsWith("//")?new URL(ct.protocol+m):new URL(m),ge=un(It.pathname,E);It.origin===ct.origin&&ge!=null?m=ge+It.search+It.hash:H=!0}catch{Be(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let K=fv(m,{relative:f}),[Z,ut,$]=Vv(u,_),gt=eg(m,{replace:p,state:y,target:b,preventScrollReset:g,relative:f,viewTransition:N});function mt(ct){o&&o(ct),ct.defaultPrevented||gt(ct)}let Ot=z.createElement("a",{..._,...$,href:Y||K,onClick:H||d?o:mt,ref:Pv(k,ut),target:b,"data-discover":!D&&c==="render"?"true":void 0});return Z&&!D?z.createElement(z.Fragment,null,Ot,z.createElement(Kv,{page:K})):Ot});u0.displayName="Link";var Fv=z.forwardRef(function({"aria-current":o="page",caseSensitive:c=!1,className:u="",end:f=!1,style:d,to:p,viewTransition:y,children:b,...m},g){let N=li(p,{relative:m.relative}),_=ra(),k=z.useContext(Lr),{navigator:E,basename:D}=z.useContext(Ye),Y=k!=null&&rg(N)&&y===!0,H=E.encodeLocation?E.encodeLocation(N).pathname:N.pathname,K=_.pathname,Z=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;c||(K=K.toLowerCase(),Z=Z?Z.toLowerCase():null,H=H.toLowerCase()),Z&&D&&(Z=un(Z,D)||Z);const ut=H!=="/"&&H.endsWith("/")?H.length-1:H.length;let $=K===H||!f&&K.startsWith(H)&&K.charAt(ut)==="/",gt=Z!=null&&(Z===H||!f&&Z.startsWith(H)&&Z.charAt(H.length)==="/"),mt={isActive:$,isPending:gt,isTransitioning:Y},Ot=$?o:void 0,ct;typeof u=="function"?ct=u(mt):ct=[u,$?"active":null,gt?"pending":null,Y?"transitioning":null].filter(Boolean).join(" ");let It=typeof d=="function"?d(mt):d;return z.createElement(u0,{...m,"aria-current":Ot,className:ct,ref:g,style:It,to:p,viewTransition:y},typeof b=="function"?b(mt):b)});Fv.displayName="NavLink";var Iv=z.forwardRef(({discover:i="render",fetcherKey:o,navigate:c,reloadDocument:u,replace:f,state:d,method:p=Cr,action:y,onSubmit:b,relative:m,preventScrollReset:g,viewTransition:N,..._},k)=>{let E=lg(),D=ig(y,{relative:m}),Y=p.toLowerCase()==="get"?"get":"post",H=typeof y=="string"&&o0.test(y),K=Z=>{if(b&&b(Z),Z.defaultPrevented)return;Z.preventDefault();let ut=Z.nativeEvent.submitter,$=ut?.getAttribute("formmethod")||p;E(ut||Z.currentTarget,{fetcherKey:o,method:$,navigate:c,replace:f,state:d,relative:m,preventScrollReset:g,viewTransition:N})};return z.createElement("form",{ref:k,method:Y,action:D,onSubmit:u?b:K,..._,"data-discover":!H&&i==="render"?"true":void 0})});Iv.displayName="Form";function tg(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function c0(i){let o=z.useContext($a);return Rt(o,tg(i)),o}function eg(i,{target:o,replace:c,state:u,preventScrollReset:f,relative:d,viewTransition:p}={}){let y=Xr(),b=ra(),m=li(i,{relative:d});return z.useCallback(g=>{if(kv(g,o)){g.preventDefault();let N=c!==void 0?c:ti(b)===ti(m);y(i,{replace:N,state:u,preventScrollReset:f,relative:d,viewTransition:p})}},[b,y,m,c,u,o,i,f,d,p])}var ng=0,ag=()=>`__${String(++ng)}__`;function lg(){let{router:i}=c0("useSubmit"),{basename:o}=z.useContext(Ye),c=Ov();return z.useCallback(async(u,f={})=>{let{action:d,method:p,encType:y,formData:b,body:m}=Cv(u,o);if(f.navigate===!1){let g=f.fetcherKey||ag();await i.fetch(g,c,f.action||d,{preventScrollReset:f.preventScrollReset,formData:b,body:m,formMethod:f.method||p,formEncType:f.encType||y,flushSync:f.flushSync})}else await i.navigate(f.action||d,{preventScrollReset:f.preventScrollReset,formData:b,body:m,formMethod:f.method||p,formEncType:f.encType||y,replace:f.replace,state:f.state,fromRouteId:c,flushSync:f.flushSync,viewTransition:f.viewTransition})},[i,o,c])}function ig(i,{relative:o}={}){let{basename:c}=z.useContext(Ye),u=z.useContext(cn);Rt(u,"useFormAction must be used inside a RouteContext");let[f]=u.matches.slice(-1),d={...li(i||".",{relative:o})},p=ra();if(i==null){d.search=p.search;let y=new URLSearchParams(d.search),b=y.getAll("index");if(b.some(g=>g==="")){y.delete("index"),b.filter(N=>N).forEach(N=>y.append("index",N));let g=y.toString();d.search=g?`?${g}`:""}}return(!i||i===".")&&f.route.index&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),c!=="/"&&(d.pathname=d.pathname==="/"?c:rn([c,d.pathname])),ti(d)}function rg(i,o={}){let c=z.useContext(Ih);Rt(c!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=c0("useViewTransitionState"),f=li(i,{relative:o.relative});if(!c.isTransitioning)return!1;let d=un(c.currentLocation.pathname,u)||c.currentLocation.pathname,p=un(c.nextLocation.pathname,u)||c.nextLocation.pathname;return qr(f.pathname,p)!=null||qr(f.pathname,d)!=null}[...Gv];function og(){return w.jsx("section",{className:"app-header",children:w.jsx("h1",{className:"app-title",children:"Users Table App"})})}function ug(){const{setIsAuthenticated:i}=z.useContext(Ka),[o,c]=z.useState(""),[u,f]=z.useState(""),d=p=>{if(p.preventDefault(),!o||!u){Kt.error("Please fill in all fields");return}if(o!=="nhlamulo"||u!=="testpassword"){Kt.error("Invalid username or password");return}else setTimeout(()=>{Kt.success("Login successful"),localStorage.setItem("isAuthenticated","true"),i(!0)},2e3)};return w.jsxs("section",{className:"auth",children:[w.jsxs("div",{className:"auth-header",children:[w.jsx("div",{className:"auth-header-title",children:"Sign In"}),w.jsx("p",{className:"auth-header-caption",children:"sign in with your credentianls to continue"})]}),w.jsxs("form",{className:"auth-form",children:[w.jsx("div",{className:"form-fields",children:w.jsx("input",{type:"text",name:"username",id:"username",placeholder:"username",value:o,onChange:p=>c(p.target.value)})}),w.jsx("div",{className:"form-fields",children:w.jsx("input",{type:"password",name:"password",id:"password",placeholder:"password",value:u,onChange:p=>f(p.target.value)})}),w.jsx("div",{className:"form-submit",children:w.jsx("button",{className:"submit-form",onClick:d,children:"Login"})})]}),w.jsx("div",{className:"auth-footer",children:w.jsxs("div",{className:"auth-footer-demo-credentials",children:[w.jsx("h1",{children:"Demo Account"}),w.jsx("p",{children:"username: nhlamulo"}),w.jsx("p",{children:"password: testpassword"})]})})]})}function cg(){const{addAUser:i}=z.useContext(Ka),o=Xr(),[c,u]=z.useState(!1),[f,d]=z.useState({name:"",date_of_birth:"",occupation:"",gender:"",date_added:""}),p=m=>{const{name:g,value:N}=m.target;d(_=>({..._,[g]:N}))},y=async m=>{if(m.preventDefault(),!f.name||!f.date_of_birth||!f.occupation||!f.gender||!f.date_added){Kt.error("Please fill in all fields.");return}try{u(!0),await i(f),Kt.success("User added successfully!"),d({name:"",date_of_birth:"",occupation:"",gender:"",date_added:""}),setTimeout(()=>{o("/")},2e3)}catch(g){console.error(g),Kt.error("Failed to add user")}finally{u(!1)}},b=()=>{o("/")};return w.jsx("section",{className:"user-form",children:w.jsx("div",{className:"user-form-container",children:w.jsxs("div",{className:"users-forms",children:[w.jsx("div",{className:"users-forms-header",children:w.jsx("h1",{children:"Add New User"})}),w.jsxs("form",{onSubmit:y,className:"users-forms-fields",children:[w.jsxs("div",{className:"form-group",children:[w.jsx("label",{htmlFor:"name",children:"Name:"}),w.jsx("input",{type:"text",name:"name",id:"name",placeholder:"e.g., Nhlamulo Magwaza",value:f.name,onChange:p})]}),w.jsxs("div",{className:"form-group",children:[w.jsx("label",{htmlFor:"date_of_birth",children:"Date of Birth:"}),w.jsx("input",{type:"date",name:"date_of_birth",id:"date_of_birth",value:f.date_of_birth,onChange:p})]}),w.jsxs("div",{className:"form-group",children:[w.jsx("label",{htmlFor:"occupation",children:"Occupation:"}),w.jsx("input",{type:"text",name:"occupation",id:"occupation",placeholder:"e.g., Fullstack Dev",value:f.occupation,onChange:p})]}),w.jsxs("div",{className:"form-group",children:[w.jsx("label",{htmlFor:"gender",children:"Gender:"}),w.jsxs("select",{name:"gender",id:"gender",value:f.gender,onChange:p,children:[w.jsx("option",{value:"",children:"Select Gender"}),w.jsx("option",{value:"Male",children:"Male"}),w.jsx("option",{value:"Female",children:"Female"})]})]}),w.jsxs("div",{className:"form-group",children:[w.jsx("label",{htmlFor:"date_added",children:"Date Added:"}),w.jsx("input",{type:"date",name:"date_added",id:"date_added",value:f.date_added,onChange:p})]})]}),w.jsxs("div",{className:"users-forms-actions",children:[w.jsx("button",{type:"button",onClick:y,className:"add-user-button",children:c?"Adding...":"Add User"}),w.jsx("button",{type:"button",onClick:b,className:"add-user-button",children:"Back"})]})]})})})}function sg(){const{selectedUser:i,updateAUser:o}=z.useContext(Ka),c=Xr(),[u,f]=z.useState(!1),[d,p]=z.useState({id:i?.id||"",name:"",date_of_birth:"",occupation:"",gender:"",date_added:""});z.useEffect(()=>{i&&p({id:i.id||"",name:i.name||"",date_of_birth:i.date_of_birth?new Date(i.date_of_birth).toISOString().split("T")[0]:"",occupation:i.occupation||"",gender:i.gender||"",date_added:i.date_added?new Date(i.date_added).toISOString().split("T")[0]:""})},[i]);const y=g=>{const{name:N,value:_}=g.target;p(k=>({...k,[N]:_}))},b=async g=>{if(g.preventDefault(),!i||!i.id){Kt.error("No user selected to update");return}try{f(!0),await o(i.id,d),Kt.success("User updated successfully!"),setTimeout(()=>{c("/")},2e3)}catch(N){console.error(N),Kt.error("Failed to update user")}finally{f(!1)}},m=()=>{c("/")};return i?w.jsx("section",{className:"user-form",children:w.jsx("div",{className:"user-form-container",children:w.jsxs("div",{className:"users-forms",children:[w.jsx("div",{className:"users-forms-header",children:w.jsx("h1",{children:"Update User"})}),w.jsxs("form",{onSubmit:b,className:"users-forms-fields",children:[w.jsxs("div",{className:"form-group",children:[w.jsx("label",{htmlFor:"name",children:"Name:"}),w.jsx("input",{type:"text",name:"name",id:"name",placeholder:"e.g., Nhlamulo Magwaza",value:d.name,onChange:y})]}),w.jsxs("div",{className:"form-group",children:[w.jsx("label",{htmlFor:"date_of_birth",children:"Date of Birth:"}),w.jsx("input",{type:"date",name:"date_of_birth",id:"date_of_birth",value:d.date_of_birth,onChange:y})]}),w.jsxs("div",{className:"form-group",children:[w.jsx("label",{htmlFor:"occupation",children:"Occupation:"}),w.jsx("input",{type:"text",name:"occupation",id:"occupation",placeholder:"e.g., Fullstack Dev",value:d.occupation,onChange:y})]}),w.jsxs("div",{className:"form-group",children:[w.jsx("label",{htmlFor:"gender",children:"Gender:"}),w.jsxs("select",{name:"gender",id:"gender",value:d.gender,onChange:y,children:[w.jsx("option",{value:"",children:"Select Gender"}),w.jsx("option",{value:"Male",children:"Male"}),w.jsx("option",{value:"Female",children:"Female"})]})]}),w.jsxs("div",{className:"form-group",children:[w.jsx("label",{htmlFor:"date_added",children:"Date Added:"}),w.jsx("input",{type:"date",name:"date_added",id:"date_added",value:d.date_added,onChange:y})]})]}),w.jsxs("div",{className:"users-forms-actions",children:[w.jsx("button",{type:"button",className:"add-user-button",onClick:b,children:u?"Updating...":"Update User"}),w.jsx("button",{type:"button",onClick:m,className:"add-user-button",children:"Back"})]})]})})}):w.jsx("section",{className:"user-form",children:w.jsx("div",{className:"user-form-container",children:w.jsxs("div",{className:"users-forms",children:[w.jsx("div",{className:"users-forms-header",children:w.jsx("h1",{children:"No User Selected"})}),w.jsx("p",{children:"Please select a user from the table to edit"}),w.jsx("div",{className:"users-forms-actions",children:w.jsx("button",{type:"button",style:{marginTop:"2rem"},onClick:m,className:"add-user-button",children:"Back to Users"})})]})})})}function Bt(i,o){o===void 0&&(o={});var c=o.insertAt;if(i&&typeof document<"u"){var u=document.head||document.getElementsByTagName("head")[0],f=document.createElement("style");f.type="text/css",c==="top"&&u.firstChild?u.insertBefore(f,u.firstChild):u.appendChild(f),f.styleSheet?f.styleSheet.cssText=i:f.appendChild(document.createTextNode(i))}}Bt(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var ot=function(){return ot=Object.assign||function(i){for(var o,c=1,u=arguments.length;c<u;c++)for(var f in o=arguments[c])Object.prototype.hasOwnProperty.call(o,f)&&(i[f]=o[f]);return i},ot.apply(this,arguments)};function Br(i){return Br=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Br(i)}var fg=/^\s+/,dg=/\s+$/;function V(i,o){if(o=o||{},(i=i||"")instanceof V)return i;if(!(this instanceof V))return new V(i,o);var c=function(u){var f={r:0,g:0,b:0},d=1,p=null,y=null,b=null,m=!1,g=!1;typeof u=="string"&&(u=function(E){E=E.replace(fg,"").replace(dg,"").toLowerCase();var D,Y=!1;if(xc[E])E=xc[E],Y=!0;else if(E=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(D=Ne.rgb.exec(E))?{r:D[1],g:D[2],b:D[3]}:(D=Ne.rgba.exec(E))?{r:D[1],g:D[2],b:D[3],a:D[4]}:(D=Ne.hsl.exec(E))?{h:D[1],s:D[2],l:D[3]}:(D=Ne.hsla.exec(E))?{h:D[1],s:D[2],l:D[3],a:D[4]}:(D=Ne.hsv.exec(E))?{h:D[1],s:D[2],v:D[3]}:(D=Ne.hsva.exec(E))?{h:D[1],s:D[2],v:D[3],a:D[4]}:(D=Ne.hex8.exec(E))?{r:ve(D[1]),g:ve(D[2]),b:ve(D[3]),a:Xh(D[4]),format:Y?"name":"hex8"}:(D=Ne.hex6.exec(E))?{r:ve(D[1]),g:ve(D[2]),b:ve(D[3]),format:Y?"name":"hex"}:(D=Ne.hex4.exec(E))?{r:ve(D[1]+""+D[1]),g:ve(D[2]+""+D[2]),b:ve(D[3]+""+D[3]),a:Xh(D[4]+""+D[4]),format:Y?"name":"hex8"}:(D=Ne.hex3.exec(E))?{r:ve(D[1]+""+D[1]),g:ve(D[2]+""+D[2]),b:ve(D[3]+""+D[3]),format:Y?"name":"hex"}:!1}(u)),Br(u)=="object"&&(an(u.r)&&an(u.g)&&an(u.b)?(N=u.r,_=u.g,k=u.b,f={r:255*zt(N,255),g:255*zt(_,255),b:255*zt(k,255)},m=!0,g=String(u.r).substr(-1)==="%"?"prgb":"rgb"):an(u.h)&&an(u.s)&&an(u.v)?(p=Fl(u.s),y=Fl(u.v),f=function(E,D,Y){E=6*zt(E,360),D=zt(D,100),Y=zt(Y,100);var H=Math.floor(E),K=E-H,Z=Y*(1-D),ut=Y*(1-K*D),$=Y*(1-(1-K)*D),gt=H%6,mt=[Y,ut,Z,Z,$,Y][gt],Ot=[$,Y,Y,ut,Z,Z][gt],ct=[Z,Z,$,Y,Y,ut][gt];return{r:255*mt,g:255*Ot,b:255*ct}}(u.h,p,y),m=!0,g="hsv"):an(u.h)&&an(u.s)&&an(u.l)&&(p=Fl(u.s),b=Fl(u.l),f=function(E,D,Y){var H,K,Z;function ut(mt,Ot,ct){return ct<0&&(ct+=1),ct>1&&(ct-=1),ct<1/6?mt+6*(Ot-mt)*ct:ct<.5?Ot:ct<2/3?mt+(Ot-mt)*(2/3-ct)*6:mt}if(E=zt(E,360),D=zt(D,100),Y=zt(Y,100),D===0)H=K=Z=Y;else{var $=Y<.5?Y*(1+D):Y+D-Y*D,gt=2*Y-$;H=ut(gt,$,E+1/3),K=ut(gt,$,E),Z=ut(gt,$,E-1/3)}return{r:255*H,g:255*K,b:255*Z}}(u.h,p,b),m=!0,g="hsl"),u.hasOwnProperty("a")&&(d=u.a));var N,_,k;return d=s0(d),{ok:m,format:u.format||g,r:Math.min(255,Math.max(f.r,0)),g:Math.min(255,Math.max(f.g,0)),b:Math.min(255,Math.max(f.b,0)),a:d}}(i);this._originalInput=i,this._r=c.r,this._g=c.g,this._b=c.b,this._a=c.a,this._roundA=Math.round(100*this._a)/100,this._format=o.format||c.format,this._gradientType=o.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=c.ok}function jh(i,o,c){i=zt(i,255),o=zt(o,255),c=zt(c,255);var u,f,d=Math.max(i,o,c),p=Math.min(i,o,c),y=(d+p)/2;if(d==p)u=f=0;else{var b=d-p;switch(f=y>.5?b/(2-d-p):b/(d+p),d){case i:u=(o-c)/b+(o<c?6:0);break;case o:u=(c-i)/b+2;break;case c:u=(i-o)/b+4}u/=6}return{h:u,s:f,l:y}}function qh(i,o,c){i=zt(i,255),o=zt(o,255),c=zt(c,255);var u,f,d=Math.max(i,o,c),p=Math.min(i,o,c),y=d,b=d-p;if(f=d===0?0:b/d,d==p)u=0;else{switch(d){case i:u=(o-c)/b+(o<c?6:0);break;case o:u=(c-i)/b+2;break;case c:u=(i-o)/b+4}u/=6}return{h:u,s:f,v:y}}function Bh(i,o,c,u){var f=[ke(Math.round(i).toString(16)),ke(Math.round(o).toString(16)),ke(Math.round(c).toString(16))];return u&&f[0].charAt(0)==f[0].charAt(1)&&f[1].charAt(0)==f[1].charAt(1)&&f[2].charAt(0)==f[2].charAt(1)?f[0].charAt(0)+f[1].charAt(0)+f[2].charAt(0):f.join("")}function Yh(i,o,c,u){return[ke(f0(u)),ke(Math.round(i).toString(16)),ke(Math.round(o).toString(16)),ke(Math.round(c).toString(16))].join("")}function hg(i,o){o=o===0?0:o||10;var c=V(i).toHsl();return c.s-=o/100,c.s=Qr(c.s),V(c)}function mg(i,o){o=o===0?0:o||10;var c=V(i).toHsl();return c.s+=o/100,c.s=Qr(c.s),V(c)}function pg(i){return V(i).desaturate(100)}function bg(i,o){o=o===0?0:o||10;var c=V(i).toHsl();return c.l+=o/100,c.l=Qr(c.l),V(c)}function vg(i,o){o=o===0?0:o||10;var c=V(i).toRgb();return c.r=Math.max(0,Math.min(255,c.r-Math.round(-o/100*255))),c.g=Math.max(0,Math.min(255,c.g-Math.round(-o/100*255))),c.b=Math.max(0,Math.min(255,c.b-Math.round(-o/100*255))),V(c)}function gg(i,o){o=o===0?0:o||10;var c=V(i).toHsl();return c.l-=o/100,c.l=Qr(c.l),V(c)}function yg(i,o){var c=V(i).toHsl(),u=(c.h+o)%360;return c.h=u<0?360+u:u,V(c)}function xg(i){var o=V(i).toHsl();return o.h=(o.h+180)%360,V(o)}function Lh(i,o){if(isNaN(o)||o<=0)throw new Error("Argument to polyad must be a positive number");for(var c=V(i).toHsl(),u=[V(i)],f=360/o,d=1;d<o;d++)u.push(V({h:(c.h+d*f)%360,s:c.s,l:c.l}));return u}function Sg(i){var o=V(i).toHsl(),c=o.h;return[V(i),V({h:(c+72)%360,s:o.s,l:o.l}),V({h:(c+216)%360,s:o.s,l:o.l})]}function Og(i,o,c){o=o||6,c=c||30;var u=V(i).toHsl(),f=360/c,d=[V(i)];for(u.h=(u.h-(f*o>>1)+720)%360;--o;)u.h=(u.h+f)%360,d.push(V(u));return d}function Eg(i,o){o=o||6;for(var c=V(i).toHsv(),u=c.h,f=c.s,d=c.v,p=[],y=1/o;o--;)p.push(V({h:u,s:f,v:d})),d=(d+y)%1;return p}V.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var i=this.toRgb();return(299*i.r+587*i.g+114*i.b)/1e3},getLuminance:function(){var i,o,c,u=this.toRgb();return i=u.r/255,o=u.g/255,c=u.b/255,.2126*(i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4))+.7152*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))+.0722*(c<=.03928?c/12.92:Math.pow((c+.055)/1.055,2.4))},setAlpha:function(i){return this._a=s0(i),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var i=qh(this._r,this._g,this._b);return{h:360*i.h,s:i.s,v:i.v,a:this._a}},toHsvString:function(){var i=qh(this._r,this._g,this._b),o=Math.round(360*i.h),c=Math.round(100*i.s),u=Math.round(100*i.v);return this._a==1?"hsv("+o+", "+c+"%, "+u+"%)":"hsva("+o+", "+c+"%, "+u+"%, "+this._roundA+")"},toHsl:function(){var i=jh(this._r,this._g,this._b);return{h:360*i.h,s:i.s,l:i.l,a:this._a}},toHslString:function(){var i=jh(this._r,this._g,this._b),o=Math.round(360*i.h),c=Math.round(100*i.s),u=Math.round(100*i.l);return this._a==1?"hsl("+o+", "+c+"%, "+u+"%)":"hsla("+o+", "+c+"%, "+u+"%, "+this._roundA+")"},toHex:function(i){return Bh(this._r,this._g,this._b,i)},toHexString:function(i){return"#"+this.toHex(i)},toHex8:function(i){return function(o,c,u,f,d){var p=[ke(Math.round(o).toString(16)),ke(Math.round(c).toString(16)),ke(Math.round(u).toString(16)),ke(f0(f))];return d&&p[0].charAt(0)==p[0].charAt(1)&&p[1].charAt(0)==p[1].charAt(1)&&p[2].charAt(0)==p[2].charAt(1)&&p[3].charAt(0)==p[3].charAt(1)?p[0].charAt(0)+p[1].charAt(0)+p[2].charAt(0)+p[3].charAt(0):p.join("")}(this._r,this._g,this._b,this._a,i)},toHex8String:function(i){return"#"+this.toHex8(i)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*zt(this._r,255))+"%",g:Math.round(100*zt(this._g,255))+"%",b:Math.round(100*zt(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*zt(this._r,255))+"%, "+Math.round(100*zt(this._g,255))+"%, "+Math.round(100*zt(this._b,255))+"%)":"rgba("+Math.round(100*zt(this._r,255))+"%, "+Math.round(100*zt(this._g,255))+"%, "+Math.round(100*zt(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(Tg[Bh(this._r,this._g,this._b,!0)]||!1)},toFilter:function(i){var o="#"+Yh(this._r,this._g,this._b,this._a),c=o,u=this._gradientType?"GradientType = 1, ":"";if(i){var f=V(i);c="#"+Yh(f._r,f._g,f._b,f._a)}return"progid:DXImageTransform.Microsoft.gradient("+u+"startColorstr="+o+",endColorstr="+c+")"},toString:function(i){var o=!!i;i=i||this._format;var c=!1,u=this._a<1&&this._a>=0;return o||!u||i!=="hex"&&i!=="hex6"&&i!=="hex3"&&i!=="hex4"&&i!=="hex8"&&i!=="name"?(i==="rgb"&&(c=this.toRgbString()),i==="prgb"&&(c=this.toPercentageRgbString()),i!=="hex"&&i!=="hex6"||(c=this.toHexString()),i==="hex3"&&(c=this.toHexString(!0)),i==="hex4"&&(c=this.toHex8String(!0)),i==="hex8"&&(c=this.toHex8String()),i==="name"&&(c=this.toName()),i==="hsl"&&(c=this.toHslString()),i==="hsv"&&(c=this.toHsvString()),c||this.toHexString()):i==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return V(this.toString())},_applyModification:function(i,o){var c=i.apply(null,[this].concat([].slice.call(o)));return this._r=c._r,this._g=c._g,this._b=c._b,this.setAlpha(c._a),this},lighten:function(){return this._applyModification(bg,arguments)},brighten:function(){return this._applyModification(vg,arguments)},darken:function(){return this._applyModification(gg,arguments)},desaturate:function(){return this._applyModification(hg,arguments)},saturate:function(){return this._applyModification(mg,arguments)},greyscale:function(){return this._applyModification(pg,arguments)},spin:function(){return this._applyModification(yg,arguments)},_applyCombination:function(i,o){return i.apply(null,[this].concat([].slice.call(o)))},analogous:function(){return this._applyCombination(Og,arguments)},complement:function(){return this._applyCombination(xg,arguments)},monochromatic:function(){return this._applyCombination(Eg,arguments)},splitcomplement:function(){return this._applyCombination(Sg,arguments)},triad:function(){return this._applyCombination(Lh,[3])},tetrad:function(){return this._applyCombination(Lh,[4])}},V.fromRatio=function(i,o){if(Br(i)=="object"){var c={};for(var u in i)i.hasOwnProperty(u)&&(c[u]=u==="a"?i[u]:Fl(i[u]));i=c}return V(i,o)},V.equals=function(i,o){return!(!i||!o)&&V(i).toRgbString()==V(o).toRgbString()},V.random=function(){return V.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},V.mix=function(i,o,c){c=c===0?0:c||50;var u=V(i).toRgb(),f=V(o).toRgb(),d=c/100;return V({r:(f.r-u.r)*d+u.r,g:(f.g-u.g)*d+u.g,b:(f.b-u.b)*d+u.b,a:(f.a-u.a)*d+u.a})},V.readability=function(i,o){var c=V(i),u=V(o);return(Math.max(c.getLuminance(),u.getLuminance())+.05)/(Math.min(c.getLuminance(),u.getLuminance())+.05)},V.isReadable=function(i,o,c){var u,f,d=V.readability(i,o);switch(f=!1,(u=function(p){var y,b;return y=((p=p||{level:"AA",size:"small"}).level||"AA").toUpperCase(),b=(p.size||"small").toLowerCase(),y!=="AA"&&y!=="AAA"&&(y="AA"),b!=="small"&&b!=="large"&&(b="small"),{level:y,size:b}}(c)).level+u.size){case"AAsmall":case"AAAlarge":f=d>=4.5;break;case"AAlarge":f=d>=3;break;case"AAAsmall":f=d>=7}return f},V.mostReadable=function(i,o,c){var u,f,d,p,y=null,b=0;f=(c=c||{}).includeFallbackColors,d=c.level,p=c.size;for(var m=0;m<o.length;m++)(u=V.readability(i,o[m]))>b&&(b=u,y=V(o[m]));return V.isReadable(i,y,{level:d,size:p})||!f?y:(c.includeFallbackColors=!1,V.mostReadable(i,["#fff","#000"],c))};var xc=V.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Tg=V.hexNames=function(i){var o={};for(var c in i)i.hasOwnProperty(c)&&(o[i[c]]=c);return o}(xc);function s0(i){return i=parseFloat(i),(isNaN(i)||i<0||i>1)&&(i=1),i}function zt(i,o){(function(u){return typeof u=="string"&&u.indexOf(".")!=-1&&parseFloat(u)===1})(i)&&(i="100%");var c=function(u){return typeof u=="string"&&u.indexOf("%")!=-1}(i);return i=Math.min(o,Math.max(0,parseFloat(i))),c&&(i=parseInt(i*o,10)/100),Math.abs(i-o)<1e-6?1:i%o/parseFloat(o)}function Qr(i){return Math.min(1,Math.max(0,i))}function ve(i){return parseInt(i,16)}function ke(i){return i.length==1?"0"+i:""+i}function Fl(i){return i<=1&&(i=100*i+"%"),i}function f0(i){return Math.round(255*parseFloat(i)).toString(16)}function Xh(i){return ve(i)/255}var Cn,_r,Dr,Ne=(_r="[\\s|\\(]+("+(Cn="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+Cn+")[,|\\s]+("+Cn+")\\s*\\)?",Dr="[\\s|\\(]+("+Cn+")[,|\\s]+("+Cn+")[,|\\s]+("+Cn+")[,|\\s]+("+Cn+")\\s*\\)?",{CSS_UNIT:new RegExp(Cn),rgb:new RegExp("rgb"+_r),rgba:new RegExp("rgba"+Dr),hsl:new RegExp("hsl"+_r),hsla:new RegExp("hsla"+Dr),hsv:new RegExp("hsv"+_r),hsva:new RegExp("hsva"+Dr),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function an(i){return!!Ne.CSS_UNIT.exec(i)}var ii=function(i,o){var c=(typeof i=="string"?parseInt(i):i)||0;if(c>=-5&&c<=5){var u=c,f=parseFloat(o),d=f+u*(f/5)*-1;return(d==0||d<=Number.EPSILON)&&(d=.1),{animationPeriod:d+"s"}}return{animationPeriod:o}},ri=function(i,o){var c=i||{},u="";switch(o){case"small":u="12px";break;case"medium":u="16px";break;case"large":u="20px";break;default:u=void 0}var f={};if(c.fontSize){var d=c.fontSize;f=function(p,y){var b={};for(var m in p)Object.prototype.hasOwnProperty.call(p,m)&&y.indexOf(m)<0&&(b[m]=p[m]);if(p!=null&&typeof Object.getOwnPropertySymbols=="function"){var g=0;for(m=Object.getOwnPropertySymbols(p);g<m.length;g++)y.indexOf(m[g])<0&&Object.prototype.propertyIsEnumerable.call(p,m[g])&&(b[m[g]]=p[m[g]])}return b}(c,["fontSize"]),u=d}return{fontSize:u,styles:f}},Ag={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},oi=function(i){var o=i.className,c=i.text,u=i.textColor,f=i.staticText,d=i.style;return c?vt.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(o||"").trim(),style:ot(ot(ot({},f&&Ag),u&&{color:u,mixBlendMode:"unset"}),d&&d)},typeof c=="string"&&c.length?c:"loading"):null},ln="rgb(50, 205, 50)";function ui(i,o){if(o===void 0&&(o=0),i.length===0)throw new Error("Input array cannot be empty!");var c=[];return function u(f,d){return d===void 0&&(d=0),c.push.apply(c,f),c.length<d&&u(c,d),c.slice(0,d)}(i,o)}Bt(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);V(ln).toRgb();Array.from({length:4},function(i,o){return"--atom-phase".concat(o+1,"-rgb")});Bt(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(i,o){return"--commet-phase".concat(o+1,"-color")});Bt(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);var zr=Array.from({length:4},function(i,o){return"--OP-annulus-phase".concat(o+1,"-color")}),_g=function(i){var o,c=ri(i?.style,i?.size),u=c.styles,f=c.fontSize,d=i?.easing,p=ii(i?.speedPlus,"1.5s").animationPeriod,y=function(m){var g={},N=zr.length;if(m instanceof Array){for(var _=ui(m,N),k=0;k<_.length&&!(k>=4);k++)g[zr[k]]=_[k];return g}try{if(typeof m!="string")throw new Error("Color String expected");for(var E=0;E<N;E++)g[zr[E]]=m}catch(D){for(D instanceof Error?console.warn("[".concat(D.message,']: Received "').concat(typeof m,'" instead with value, ').concat(JSON.stringify(m))):console.warn("".concat(JSON.stringify(m),' received in <OrbitProgress variant="disc" /> indicator cannot be processed. Using default instead!')),E=0;E<N;E++)g[zr[E]]=ln}return g}((o=i?.color)!==null&&o!==void 0?o:""),b=i?.dense?4.3:2.9;return vt.createElement("span",{className:"rli-d-i-b OP-annulus-rli-bounding-box",style:ot(ot(ot(ot(ot({},f&&{fontSize:f}),p&&{"--rli-animation-duration":p}),d&&{"--rli-animation-function":d}),y),u),role:"status","aria-live":"polite","aria-label":"Loading"},vt.createElement("span",{className:"rli-d-i-b OP-annulus-indicator"},vt.createElement("svg",{className:"whirl",viewBox:"25 25 50 50"},vt.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:b,strokeMiterlimit:"10"})),vt.createElement(oi,{className:"OP-annulus-text",text:i?.text,textColor:i?.textColor})))};function pc(i){return i&&i.Math===Math&&i}Bt(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);var Va=pc(typeof window=="object"&&window)||pc(typeof self=="object"&&self)||pc(typeof global=="object"&&global)||function(){return this}()||Function("return this")();function d0(){var i,o;return!((i=Va?.crypto)===null||i===void 0)&&i.randomUUID?Va.crypto.randomUUID():!((o=Va?.btoa)===null||o===void 0)&&o.name?Va.btoa(new Date(Math.ceil(1e13*Math.random())).getTime()+""):Date.now().toString(36)+Math.random().toString(36).substring(0)}var Mr=Array.from({length:4},function(i,o){return"--OP-dotted-phase".concat(o+1,"-color")}),Dg=function(i){var o,c=ri(i?.style,i?.size),u=c.styles,f=c.fontSize,d=i?.easing,p=ii(i?.speedPlus,"1.2s").animationPeriod,y=function(m){var g={},N=Mr.length;if(m instanceof Array){for(var _=ui(m,N),k=0;k<_.length&&!(k>=4);k++)g[Mr[k]]=_[k];return g}try{if(typeof m!="string")throw new Error("Color String expected");for(var E=0;E<N;E++)g[Mr[E]]=m}catch(D){for(D instanceof Error?console.warn("[".concat(D.message,']: Received "').concat(typeof m,'" with value, ').concat(JSON.stringify(m))):console.warn("".concat(JSON.stringify(m),' received in <OrbitProgress variant="dotted" /> indicator cannot be processed. Using default instead!')),E=0;E<N;E++)g[Mr[E]]=ln}return g}((o=i?.color)!==null&&o!==void 0?o:""),b=i?.dense?16:12;return vt.createElement("span",{className:"rli-d-i-b OP-dotted-rli-bounding-box",style:ot(ot(ot(ot(ot({},f&&{fontSize:f}),p&&{"--rli-animation-duration":p}),d&&{"--rli-animation-function":d}),y),u),role:"status","aria-live":"polite","aria-label":"Loading"},vt.createElement("span",{className:"rli-d-i-b OP-dotted-indicator"},Array.from({length:b}).map(function(m,g){var N=function(E,D,Y){if(D===16){var H=360*E/D,K=D-E,Z=Number.parseFloat(Y)/D*K*-1;return{transform:"rotate(".concat(H,"deg)"),animationDelay:"".concat(Z,"s")}}return{transform:"",animationDelay:""}}(g,b,p),_=N.animationDelay,k=N.transform;return vt.createElement("span",{key:d0(),className:"rli-d-i-b dot-shape-holder",style:k?{transform:k}:void 0},vt.createElement("span",{className:"dot",style:_?{animationDelay:_}:void 0}))}),vt.createElement(oi,{className:"OP-dotted-text",text:i?.text,textColor:i?.textColor})))};Bt(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);var Rr=Array.from({length:4},function(i,o){return"--OP-spokes-phase".concat(o+1,"-color")}),zg=function(i){var o,c=ri(i?.style,i?.size),u=c.styles,f=c.fontSize,d=i?.easing,p=ii(i?.speedPlus,"1.2s").animationPeriod,y=function(m){var g={},N=Rr.length;if(m instanceof Array){for(var _=ui(m,N),k=0;k<_.length&&!(k>=4);k++)g[Rr[k]]=_[k];return g}try{if(typeof m!="string")throw new Error("Color String expected");for(var E=0;E<N;E++)g[Rr[E]]=m}catch(D){for(D instanceof Error?console.warn("[".concat(D.message,']: Received "').concat(typeof m,'" instead with value, ').concat(JSON.stringify(m))):console.warn("".concat(JSON.stringify(m),' received in <OrbitProgress variant="spokes" /> indicator cannot be processed. Using default instead!')),E=0;E<N;E++)g[Rr[E]]=ln}return g}((o=i?.color)!==null&&o!==void 0?o:""),b=i?.dense?16:12;return vt.createElement("span",{className:"rli-d-i-b OP-spokes-rli-bounding-box",style:ot(ot(ot(ot(ot({},f&&{fontSize:f}),p&&{"--rli-animation-duration":p}),d&&{"--rli-animation-function":d}),y),u),role:"status","aria-live":"polite","aria-label":"Loading"},vt.createElement("span",{className:"rli-d-i-b OP-spokes-indicator"},Array.from({length:b},function(m,g){return vt.createElement("span",{key:d0(),className:"rli-d-i-b spoke",style:Mg(g,b,p)})})),vt.createElement(oi,{text:i?.text,textColor:i?.textColor}))};function Mg(i,o,c){if(o===16){var u=o-i,f=Number.parseFloat(c)/o;return{transform:"rotate(".concat(360*i/o,"deg) translate(-50%, ").concat("-1.56em",")"),animationDelay:"".concat((u-1)*f*-1,"s")}}}Bt(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);var Nr=Array.from({length:4},function(i,o){return"--OP-annulus-dual-sectors-phase".concat(o+1,"-color")}),Rg=function(i){var o,c=ri(i?.style,i?.size),u=c.styles,f=c.fontSize,d=i?.easing,p=ii(i?.speedPlus,"1.2s").animationPeriod,y=function(m){var g={},N=Nr.length;if(m instanceof Array){for(var _=ui(m,N),k=0;k<_.length&&!(k>=4);k++)g[Nr[k]]=_[k];return g}try{if(typeof m!="string")throw new Error("Color String expected");for(var E=0;E<N;E++)g[Nr[E]]=m}catch(D){for(D instanceof Error?console.warn("[".concat(D.message,']: Received "').concat(typeof m,'" with value, ').concat(JSON.stringify(m))):console.warn("".concat(JSON.stringify(m),' received in <OrbitProgress variant="annulus-splits" /> indicator cannot be processed. Using default instead!')),E=0;E<N;E++)g[Nr[E]]=ln}return g}((o=i?.color)!==null&&o!==void 0?o:""),b=i.dense?"0.45em":"";return vt.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-rli-bounding-box",style:ot(ot(ot(ot(ot({},f&&{fontSize:f}),p&&{"--rli-animation-duration":p}),d&&{"--rli-animation-function":d}),y),u),role:"status","aria-live":"polite","aria-label":"Loading"},vt.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-indicator"},vt.createElement("span",{className:"rli-d-i-b annulus-sectors",style:ot({},b&&{borderWidth:b})}),vt.createElement(oi,{className:"OP-annulus-dual-sectors-text",text:i?.text,textColor:i?.textColor})))};Bt(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);var Wl=Array.from({length:4},function(i,o){return["--OP-annulus-track-phase".concat(o+1,"-color"),"--OP-annulus-sector-phase".concat(o+1,"-color")]}),kr=function(i){return i===void 0&&(i=1),.25*i},Ng=function(i){var o,c=ri(i?.style,i?.size),u=c.styles,f=c.fontSize,d=i?.easing,p=ii(i?.speedPlus,"1s").animationPeriod,y=function(m){var g={},N=Wl.length;if(m instanceof Array){for(var _=ui(m,N),k=0;k<_.length&&!(k>=4);k++){var E=Wl[k];try{if(!(H=V(_[k])).isValid())throw new Error("Invalid Color: ".concat(H.getOriginalInput()));var D=H.setAlpha(kr(H.getAlpha())).toRgbString(),Y=_[k];g[E[0]]=D,g[E[1]]=Y}catch{Y=ln,D=(H=V(ln)).setAlpha(kr(H.getAlpha())).toRgbString(),g[E[0]]=D,g[E[1]]=Y}}return g}try{var H=V(m);if(typeof m!="string")throw new Error("Color String expected");if(!H.isValid())throw new Error("Invalid Color: ".concat(H.getOriginalInput()));Y=m,D=H.setAlpha(kr(H.getAlpha())).toRgbString();for(var K=0;K<N;K++)g[(E=Wl[K])[0]]=D,g[E[1]]=Y}catch(Z){for(Z instanceof Error?console.warn("[".concat(Z.message,']: Received "').concat(typeof m,'" with value, ').concat(JSON.stringify(m))):console.warn("".concat(JSON.stringify(m),' received in <OrbitProgress variant="annulus-track" /> indicator cannot be processed. Using default instead!')),Y=ln,D=(H=V(ln)).setAlpha(kr(H.getAlpha())).toRgbString(),K=0;K<Wl.length;K++)g[(E=Wl[K])[0]]=D,g[E[1]]=Y}return g}((o=i?.color)!==null&&o!==void 0?o:""),b=i.dense?"0.45em":"";return vt.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-rli-bounding-box",style:ot(ot(ot(ot(ot({},f&&{fontSize:f}),p&&{"--rli-animation-duration":p}),d&&{"--rli-animation-function":d}),y),u),role:"status","aria-live":"polite","aria-label":"Loading"},vt.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-indicator"},vt.createElement("span",{className:"rli-d-i-b annulus-track-ring",style:ot({},b&&{borderWidth:b})}),vt.createElement(oi,{className:"OP-annulus-sector-text",text:i?.text,textColor:i?.textColor})))},kg=function(i){var o=Object(i).variant,c=o===void 0?"disc":o;return c==="dotted"?vt.createElement(Dg,ot({},i)):c==="spokes"?vt.createElement(zg,ot({},i)):c==="disc"?vt.createElement(_g,ot({},i)):c==="split-disc"?vt.createElement(Rg,ot({},i)):c==="track-disc"?vt.createElement(Ng,ot({},i)):null};Bt(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(i,o){return"--four-square-phase".concat(o+1,"-color")});Bt(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(i,o){return"--mosaic-phase".concat(o+1,"-color")});Bt(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(i,o){return"--riple-phase".concat(o+1,"-color")});Bt(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},function(i,o){return"--TD-pulsate-phase".concat(o+1,"-color")});Bt(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},function(i,o){return"--TD-brick-stack-phase".concat(o+1,"-color")});Bt(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},function(i,o){return"--TD-bob-phase".concat(o+1,"-color")});Bt(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},function(i,o){return"--TD-bounce-phase".concat(o+1,"-color")});Bt(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(i,o){return"--shape-phase".concat(o+1,"-color")});Bt(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(i,o){return"--trophySpin-phase".concat(o+1,"-color")});Bt(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(i,o){return"--slab-phase".concat(o+1,"-color")});Bt(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(i,o){return"--life-line-phase".concat(o+1,"-color")});function wg(){const{getUsers:i,setSelectedUser:o,deleteAUser:c}=z.useContext(Ka),[u,f]=z.useState([]),[d,p]=z.useState(!1),y=Xr(),b=async N=>{if(window.confirm("Are you sure you want to delete this user?"))try{p(!0),await c(N),Kt.success("User deleted successfully!"),g()}catch(_){console.error(_),Kt.error("Error deleting user")}finally{p(!1)}},m=N=>{o(N),y("/user/edit")},g=async()=>{p(!0);try{const N=await i();console.log(N),f(N)}catch(N){Kt.error("Error fetching users"),console.log(N)}finally{p(!1)}};return z.useEffect(()=>{g();const N=setInterval(()=>{g()},12e4);return()=>clearInterval(N)},[]),w.jsx(w.Fragment,{children:d?w.jsx("div",{className:"loading",style:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"2rem"},children:w.jsx(kg,{size:"medium",color:"#fff"})}):w.jsx("div",{className:"users-table",children:w.jsxs("div",{className:"table-container",children:[w.jsxs("table",{className:"user-table",children:[w.jsx("thead",{children:w.jsxs("tr",{children:[w.jsx("th",{children:"Name"}),w.jsx("th",{children:"Date of Birth"}),w.jsx("th",{children:"Occupation"}),w.jsx("th",{children:"Gender"}),w.jsx("th",{children:"Date Added"}),w.jsx("th",{children:"Actions"})]})}),w.jsx("tbody",{children:u.map(N=>w.jsxs("tr",{children:[w.jsx("td",{"data-label":"Name",children:N.name}),w.jsx("td",{"data-label":"Date of Birth",children:new Date(N.date_of_birth).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}),w.jsx("td",{"data-label":"Occupation",children:N.occupation}),w.jsx("td",{"data-label":"Gender",children:N.gender}),w.jsx("td",{"data-label":"Date Added",children:new Date(N.date_added).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}),w.jsxs("td",{"data-label":"Actions",className:"edits-column",children:[w.jsx("button",{onClick:()=>m(N),className:"edit-button","aria-label":`Edit ${N.name}`,children:"Edit"}),w.jsx("button",{onClick:()=>b(N.id),className:"delete-button","aria-label":`Delete ${N.name}`,children:"Delete"})]})]},N.id))})]}),w.jsx("button",{className:"add-user",onClick:()=>y("/user/add"),children:"Add A User"})]})})})}function Ug(){const{isAuthenticated:i}=z.useContext(Ka);return w.jsx(w.Fragment,{children:i?w.jsxs(w.Fragment,{children:[w.jsx(og,{}),w.jsxs(Dv,{children:[w.jsx(Ur,{path:"/",exact:!0,element:w.jsx(wg,{})}),w.jsx(Ur,{path:"/user/edit",exact:!0,element:w.jsx(sg,{})}),w.jsx(Ur,{path:"/user/add",exact:!0,element:w.jsx(cg,{})})]})]}):w.jsx(ug,{})})}Zp.createRoot(document.getElementById("root")).render(w.jsx(z.StrictMode,{children:w.jsx(Wv,{children:w.jsxs(Hb,{children:[w.jsx(Ug,{}),w.jsx(Cb,{})]})})}));
