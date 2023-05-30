"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[8624],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),i=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=i(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=i(n),f=a,y=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(y,s(s({ref:t},l),{},{components:n})):r.createElement(y,s({ref:t},l))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[d]="string"==typeof e?e:a,s[1]=c;for(var i=2;i<o;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6941:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={title:"useDryRun",description:"A React hook for calling a transaction as a dry run."},s="useDryRun",c={unversionedId:"frontend/react/hooks/contracts/use-dry-run",id:"frontend/react/hooks/contracts/use-dry-run",title:"useDryRun",description:"A React hook for calling a transaction as a dry run.",source:"@site/docs/frontend/react/hooks/contracts/use-dry-run.md",sourceDirName:"frontend/react/hooks/contracts",slug:"/frontend/react/hooks/contracts/use-dry-run",permalink:"/es/frontend/react/hooks/contracts/use-dry-run",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/react/hooks/contracts/use-dry-run.md",tags:[],version:"current",frontMatter:{title:"useDryRun",description:"A React hook for calling a transaction as a dry run."},sidebar:"reference",previous:{title:"useContract",permalink:"/es/frontend/react/hooks/contracts/use-contract"},next:{title:"useEventSubscription",permalink:"/es/frontend/react/hooks/contracts/use-event-subscription"}},u={},i=[{value:"Usage",id:"usage",level:2},{value:"Calling with a default caller address",id:"calling-with-a-default-caller-address",level:2},{value:"Return Value",id:"return-value",level:2}],l={toc:i},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usedryrun"},"useDryRun"),(0,a.kt)("p",null,"A hook for calling a transaction as a dry run - a transction without spending any gas. Dry\nruns are useful to test if a transaction will be successful and for querying the exact\nWeight amount a transaction will need to succeed. This hook is used under the hood in\n",(0,a.kt)("a",{parentName:"p",href:"/frontend/core/hooks/contracts/use-tx"},"useTx"),", so you should only use this if you wish to\ndisplay Dry Run information to the user before triggering a transaction."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/frontend/utils/pick"},"useink/utils helpers")," for compatible functions that work\nwell with this hook. "),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useDryRun, useContract } from 'useink'\nimport { pickTxInfo } from 'useink/utils'\n\nexport const MyContractView: React.FC = () => {\n  const contract = useContract('...address', metadata, 'zeitgeist')\n  \n  const get = useDryRun<boolean>(contract, 'get')\n\n  return (\n    <>\n      <button onClick={() => get.send()}>\n        {get.isSubmitting ? 'Send Dry Run' : 'Sending...'}\n      </div>\n\n      <h2>Get the fee the hard way: {get.result.ok ? get.result.value.partialFee : '--'}</h2>\n      <h2>Or the easy way: {pickTxInfo(get.result)?.partialFee || '--'}</h2>\n    </>\n  )\n}\n")),(0,a.kt)("h2",{id:"calling-with-a-default-caller-address"},"Calling with a default caller address"),(0,a.kt)("p",null,"You must first define a default caller in ",(0,a.kt)("a",{parentName:"p",href:"/frontend/configuration#configprops"},"configuration"),", then call the contract with options:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const dryRun = useDryRun(cRococoContract, 'flip');\nconst args = [];\n\ndryRun.send(args, { defaultCaller: true });\n")),(0,a.kt)("h2",{id:"return-value"},"Return Value"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface DryRun<T> {\n  send: Send<T>;\n  isSubmitting: boolean;\n  result?: DryRunResult<T>;\n  resolved: Boolean;\n  resetState: () => void; // A convenience function to reset result state\n}\n")))}p.isMDXComponent=!0}}]);