"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[7397],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=l,g=p["".concat(i,".").concat(d)]||p[d]||f[d]||o;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:l,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1333:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),l=(n(7294),n(3905));const o={title:"useAllWallets",description:"A React hook for getting a list of all supported wallet extensions"},a="useAllWallets",s={unversionedId:"frontend/react/hooks/wallets/use-all-wallets",id:"frontend/react/hooks/wallets/use-all-wallets",title:"useAllWallets",description:"A React hook for getting a list of all supported wallet extensions",source:"@site/docs/frontend/react/hooks/wallets/use-all-wallets.md",sourceDirName:"frontend/react/hooks/wallets",slug:"/frontend/react/hooks/wallets/use-all-wallets",permalink:"/frontend/react/hooks/wallets/use-all-wallets",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/react/hooks/wallets/use-all-wallets.md",tags:[],version:"current",frontMatter:{title:"useAllWallets",description:"A React hook for getting a list of all supported wallet extensions"},sidebar:"reference",previous:{title:"useWallet",permalink:"/frontend/react/hooks/wallets/use-wallet"},next:{title:"useInstalledWallets",permalink:"/frontend/react/hooks/wallets/use-installed-wallets"}},i={},c=[{value:"Usage",id:"usage",level:2},{value:"Return Type",id:"return-type",level:2}],u={toc:c},p="wrapper";function f(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"useallwallets"},"useAllWallets"),(0,l.kt)("p",null,"This hook returns a list of all supported wallet extensions."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useAllWallets } from 'useink'\n\nfunction PrintWallets() {\n  const wallets = useAllWallets()\n  useEffect(() => console.log(wallets), [wallets])\n\n  return null;\n}\n")),(0,l.kt)("h2",{id:"return-type"},"Return Type"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  extensionName: string;\n  title: string;\n  noExtensionMessage?: string;\n  installUrl: string;\n  logo: WalletLogoProps;\n  installed: boolean | undefined;\n  extension: any;\n  signer: any;\n  enable: (dappName: string) => unknown;\n  getAccounts: (anyType?: boolean) => Promise<WalletAccount[]>;\n  subscribeAccounts: (callback: SubscriptionFn) => unknown;\n  sign?: (address: string, payload: string) => unknown;\n  transformError: (err: WalletError) => Error;\n}[]\n")))}f.isMDXComponent=!0}}]);