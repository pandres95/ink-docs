"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[4340],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},u=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},d="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,s(s({ref:e},u),{},{components:n})):r.createElement(m,s({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,s=new Array(o);s[0]=f;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[d]="string"==typeof t?t:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2007:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={title:"useTx",description:"A React hook for signing and sending a transaction for a contract and tracking state."},s="useTx",i={unversionedId:"frontend/react/hooks/contracts/use-tx",id:"frontend/react/hooks/contracts/use-tx",title:"useTx",description:"A React hook for signing and sending a transaction for a contract and tracking state.",source:"@site/docs/frontend/react/hooks/contracts/use-tx.md",sourceDirName:"frontend/react/hooks/contracts",slug:"/frontend/react/hooks/contracts/use-tx",permalink:"/frontend/react/hooks/contracts/use-tx",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/react/hooks/contracts/use-tx.md",tags:[],version:"current",frontMatter:{title:"useTx",description:"A React hook for signing and sending a transaction for a contract and tracking state."},sidebar:"reference",previous:{title:"useEvents",permalink:"/frontend/react/hooks/contracts/use-events"},next:{title:"useTxPaymentInfo",permalink:"/frontend/react/hooks/contracts/use-tx-payment-info"}},c={},l=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Return Value",id:"return-value",level:2},{value:"Transaction Statuses",id:"transaction-statuses",level:2},{value:"Want to Learn More?",id:"want-to-learn-more",level:2},{value:"Common Patterns With useTx",id:"common-patterns-with-usetx",level:2}],u={toc:l},d="wrapper";function p(t){let{components:e,...n}=t;return(0,a.kt)(d,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usetx"},"useTx"),(0,a.kt)("p",null,"A hook for sending a transaction for a contract and decoding successful responses or\nreceiving errors. This hook is used in combination with the result of\n",(0,a.kt)("a",{parentName:"p",href:"/frontend/core/hooks/contracts/use-contract"},"useContract"),"."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/frontend/utils/pick"},"useink/utils helpers")," for compatible functions that work\nwell with this hook. "),(0,a.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useTx, useContract, shouldDisable } from 'useink'\nimport { pickDecoded } from 'useink/utils'\nimport metadata from './metadata.json'\n\ninterface Result {\n  color: string;\n}\n\nexport const MyContractView: React.FC = () => {\n  const contract = useContract('..address', metadata)\n  const setColor = useTx<Result>(contract, 'setColor')\n  const args = ['blue']\n\n  return (\n    <>\n      <button onClick={() => setColor.signAndSend(args)} disable={shouldDisable(setColor)}>\n        {shouldDisable(setColor) ? 'Changing Color...' : 'Change Color'}\n      </button>\n\n      <h2>Get the result the hard way: {setColor.result.ok ? setColor.result.value.decoded.color : '--'}</h2>\n      <h2>Or the easy way: {pickDecoded(get.result)?.color || '--'}</h2>\n    </>\n  )\n}\n")),(0,a.kt)("h2",{id:"return-value"},"Return Value"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"export interface Tx<T> {\n  signAndSend: (\n    args?: unknown[],\n    options?: ContractOptions,\n    cb?: ContractSubmittableResultCallback,\n  ) => void;\n  status: Status;\n  result: ContractSubmittableResult | undefined;\n  resetState: () => void;\n}\n")),(0,a.kt)("h2",{id:"transaction-statuses"},"Transaction Statuses"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"useink")," extends transaction statuses defined in the Substrate ",(0,a.kt)("inlineCode",{parentName:"p"},"transaction-pool"),"\npallet. These are used for pre-transaction senarios such as awaiting signature in a\nwallet, dry runs, or handling a JavaScript error."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export type Status =\n  | 'None'             \n  | 'PendingSignature' // A user is prompted to sign a transaction in their wallet extension.\n  | 'DryRun'           // A pre-flight is being sent without any payments.\n  | 'Errored'          // A JavaScript error occured\n  | 'Future'           \n  | 'Ready'            \n  | 'Broadcast'        \n  | 'InBlock'          \n  | 'Retracted'        \n  | 'FinalityTimeout'  \n  | 'Finalized'        \n  | 'Usurped'          \n  | 'Dropped'          \n  | 'Invalid';          \n")),(0,a.kt)("h2",{id:"want-to-learn-more"},"Want to Learn More?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Learn more about ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/paritytech/substrate/blob/65e7ab604d109e316a69b8801c3b182a7fa46bcb/client/transaction-pool/api/src/lib.rs#L59"},"the Substrate transaction-pool")),(0,a.kt)("li",{parentName:"ul"},"Read ",(0,a.kt)("a",{parentName:"li",href:"https://docs.substrate.io/learn/transaction-lifecycle/"},"Substrate documentation")),(0,a.kt)("li",{parentName:"ul"},"Watch a ",(0,a.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=3pfM0GOp02c"},"video on transaction lifecycles"))),(0,a.kt)("h2",{id:"common-patterns-with-usetx"},"Common Patterns With useTx"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/frontend/utils/tx-utils#shoulddisable"},"shouldDisable")," and\n",(0,a.kt)("a",{parentName:"p",href:"/frontend/utils/tx-utils#shoulddisablestrict"},"shouldDisableStrict"),"."))}p.isMDXComponent=!0}}]);