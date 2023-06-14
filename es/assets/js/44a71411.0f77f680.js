"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[1581],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2986:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={title:"useUnixMilliToDate",description:"A React hook for converting unix timestamps in milliseconds to a Date object."},a="useUnixMilliToDate",s={unversionedId:"frontend/react/hooks/helpers/use-unix-milli-to-date",id:"frontend/react/hooks/helpers/use-unix-milli-to-date",title:"useUnixMilliToDate",description:"A React hook for converting unix timestamps in milliseconds to a Date object.",source:"@site/docs/frontend/react/hooks/helpers/use-unix-milli-to-date.md",sourceDirName:"frontend/react/hooks/helpers",slug:"/frontend/react/hooks/helpers/use-unix-milli-to-date",permalink:"/es/frontend/react/hooks/helpers/use-unix-milli-to-date",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/react/hooks/helpers/use-unix-milli-to-date.md",tags:[],version:"current",frontMatter:{title:"useUnixMilliToDate",description:"A React hook for converting unix timestamps in milliseconds to a Date object."},sidebar:"reference",previous:{title:"useTimestampQuery",permalink:"/es/frontend/react/hooks/substrate/use-timestamp-query"},next:{title:"Configuration",permalink:"/es/frontend/configuration"}},l={},c=[{value:"Usage",id:"usage",level:2},{value:"Return Value",id:"return-value",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"useunixmillitodate"},"useUnixMilliToDate"),(0,o.kt)("p",null,"A React hook for converting unix timestamps in milli seconds to a Date object. Values are\ncached internally via ",(0,o.kt)("inlineCode",{parentName:"p"},"useMemo")," to optimize page renders."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useUnixMilliToDate, useTimestampNow } from 'useink'\n\nfunction Now() {\n  // See `useTimestampDate`, which does this work for you.\n  const now = useTimestampNow('phala');\n  const date = useUnixMilliToDate(now);\n\n  return <p>{date.toLocaleTimeString()}</p>;\n}\n")),(0,o.kt)("h2",{id:"return-value"},"Return Value"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"Date | undefined\n")))}m.isMDXComponent=!0}}]);