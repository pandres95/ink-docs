"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[1437],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),p=o,h=d["".concat(c,".").concat(p)]||d[p]||f[p]||a;return t?r.createElement(h,i(i({ref:n},u),{},{components:t})):r.createElement(h,i({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2474:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const a={title:"Configuration",description:"Learn about what configurations and defaults are available in useink"},i="Configuration",s={unversionedId:"frontend/configuration",id:"frontend/configuration",title:"Configuration",description:"Learn about what configurations and defaults are available in useink",source:"@site/docs/frontend/configuration.md",sourceDirName:"frontend",slug:"/frontend/configuration",permalink:"/es/frontend/configuration",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/configuration.md",tags:[],version:"current",frontMatter:{title:"Configuration",description:"Learn about what configurations and defaults are available in useink"},sidebar:"reference",previous:{title:"useBlockHeader",permalink:"/es/frontend/react/hooks/substrate/use-block-header"},next:{title:"Overview",permalink:"/es/frontend/core/overview"}},c={},l=[{value:"ConfigProps",id:"configprops",level:2},{value:"Adding a Custom Chain Config",id:"adding-a-custom-chain-config",level:2}],u={toc:l},d="wrapper";function f(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"UseInkProvider")," takes props of type ",(0,o.kt)("inlineCode",{parentName:"p"},"ConfigProps"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { UseInkProvider } from 'useink';\nimport { RococoContractsTestnet } from 'useink/chains';\n\nfunction App({ children }) {\n  const config = {\n    chains: [RococoContractsTestnet],\n    caller: {\n      // An optional default caller address to be used before a user connects their wallet.\n      default: \"5EyR7vEk7DtvEWeefGcXXMV6hKwB8Ex5uvjHufm466mbjJkR\", \n    }\n  }\n\n  return (\n    <UseInkProvider config={config}>\n      <MyRoutes />\n    </UseInkProvider>\n  );\n}\n\nexport default App\n")),(0,o.kt)("h2",{id:"configprops"},"ConfigProps"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export type ConfigProps = {\n  // dappName: This is the name that is displayed when a user first connects their wallet.\n  // It is also the key used for localStorage in some features.\n  dappName?: string; \n  // chains: see `useink/chains` for more chain configurations. \n  chains: ArrayOneOrMore<Chain>; \n  // caller: If you want to read from the blockchain before a user connect's their wallet \n  // then you can set a default caller address globally or on a per chain basis. When making \n  // a call to a contract the priority level of which address to use will be:\n  // 1. The address of the user's connected wallet\n  // 2. The address for the chain specified in this config for the chainId. e.g. { astar: '5E.....' }\n  // 3. The address for the chain specified in `caller.default` in this config.\n  // If this `caller` is omitted in the config then a user must connect their wallet before they can \n  // call a contract message. \n  // NOTE: Default caller addresses cannot be used for transactions, which require a signature.\n  // See https://use.ink/frontend/react/hooks/contracts/use-call and related hooks for examples.\n  caller?: {\n    default?: string; // Set the default for all chains that do not have a \n  } & Partial<Result<ChainId, string>>;\n  events?: { \n    // expiration: Time in miliseconds before an event is removed from state.\n    // This is used in the useEvent() hook for contracts\n    // Set to 0 to prevent events from being removed from state\n    // Default: 5000 (5 seconds)\n    expiration?: number; \n    // checkInterval: The amount of time to wait before checking which events need to be removed.\n    checkInterval?: number; \n  };\n  wallet?: {\n    // skipAutoConnect: Skip a dApp from using localStorage to restore a previously connected account\n    // Default: true\n    skipAutoConnect?: boolean; \n  };\n};\n")),(0,o.kt)("h2",{id:"adding-a-custom-chain-config"},"Adding a Custom Chain Config"),(0,o.kt)("p",null,"You can add your own chain config by modifying the ",(0,o.kt)("inlineCode",{parentName:"p"},"Custom")," chain config. e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { UseInkProvider } from 'useink';\nimport { Custom, Chain } from 'useink/chains';\n\nconst MyChain: Chain = {\n  ...Custom,\n  // NOTE: The value of 'id' should be 'custom'. ChainId must be of a known value that we \n  // have already defined in useink/chains. We do this because chainId is used as an \n  // argument in many hooks and we want to prevent bugs due to mispelled chain names. \n  // For example: `useBlockHeader('astart')` would return undefined because `astart` \n  // is not a chainId. `astar` is the correct name. ChainId has known values so that \n  // TypeScript will show you your error before runtime.\n  id: 'custom', \n  name: 'My New Blockchain',\n  rpcs: ['wss://my-new-rpc.xyz'],\n}\n\n\nfunction App({ children }) {\n  return (\n    <UseInkProvider config={{ chains: [MyChain] }}>\n      <MyRoutes />\n    </UseInkProvider>\n  );\n}\n\nexport default App\n")),(0,o.kt)("p",null,"Using the above config you can call hooks with or without the ",(0,o.kt)("inlineCode",{parentName:"p"},"chainId")," as an argument. "),(0,o.kt)("p",null,"e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"useBlockHeaders()")," (defaults to 'custom') or ",(0,o.kt)("inlineCode",{parentName:"p"},"useBlockHeaders('custom')")))}f.isMDXComponent=!0}}]);