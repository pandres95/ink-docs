"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[2504],{33233:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var n=a(87462),s=a(67294),o=a(3905),c=a(34853);const r=()=>{const[e,t]=(0,s.useState)(null),a=(0,s.useMemo)((()=>{var e,t;if("undefined"==typeof window)return"";const a=new URLSearchParams(null==(e=window)||null==(t=e.location)?void 0:t.search);return(null==a?void 0:a.get("acc"))||void 0}),[]),[n,o]=(0,s.useState)(a),[r,i]=(0,s.useState)(),[l,u]=(0,s.useState)(),[d,m]=(0,s.useState)(!1);return s.createElement("div",{className:"faucetContainer"},s.createElement("h3",{className:"faucetTitle"},"Get Testnet Tokens"),s.createElement("div",{className:"faucetPlantContainer"},s.createElement("img",{src:"/img/plantOne.svg",alt:"illustration of a sea grass plant",className:"faucetPlantOne"}),s.createElement("img",{src:"/img/plantTwo.svg",alt:"illustration of a sea plant",className:"faucetPlantTwo"})),s.createElement("div",{className:"faucetHeroContainer"},s.createElement("img",{src:"/img/chest.svg",alt:"treasure chest",className:"faucetHeroImage"})),s.createElement("form",{className:"withHero"},s.createElement("fieldset",null,s.createElement("label",{htmlFor:"address-input"},"Your SS58 Address"),s.createElement("input",{className:"addressInput",id:"address-input",type:"text",value:n,placeholder:"e.g. 5HprbfKUFdN4qfweVbgRtqDPHfNtoi8NoWPE45e5bD5AEKiR",onChange:e=>{o(e.target.value),u(void 0),i(void 0)}})),s.createElement(c.Z,{sitekey:"6LcgFI4nAAAAAATrEMoJ6zBacsx5udc1UhGFXemH",onChange:t}),s.createElement("button",{disabled:d||!e||!n,onClick:async t=>{t.preventDefault(),await(async()=>{try{i(void 0),u(void 0),m(!0);const t={address:n,parachain_id:"1002",recaptcha:e},a=await fetch("https://rococo-faucet.parity-testnet.parity.io/drip/web",{method:"POST",body:JSON.stringify(t),headers:{Accept:"application/json","Content-Type":"application/json"}}),s=await a.json();"error"in s?u(s.error):i(s.hash)}catch(t){console.error(t),u("Hmm... something went wrong.")}finally{m(!1)}})()}},d?"Requesting...":"Request")),s.createElement("div",{className:"faucetResultContainer"},r&&s.createElement("button",{className:"faucet-success w-full border-none",onClick:()=>window.open(`https://rococo.subscan.io/extrinsic/${r}`,"_blank")},s.createElement("div",{className:"faucet-success-ic"},s.createElement("p",{className:"faucet-success-msg"},"Your funds have been sent!"),s.createElement("p",{className:"faucet-success-cta"},"Click here to view the transaction"))),l&&s.createElement("p",{className:"error"},l)))},i={title:"Faucet",slug:"/faucet",hide_title:!0},l=void 0,u={unversionedId:"testnet/faucet",id:"version-5.x/testnet/faucet",title:"Faucet",description:"We are operating a faucet for our Contracts Testnet on Rococo.",source:"@site/versioned_docs/version-5.x/testnet/faucet.md",sourceDirName:"testnet",slug:"/faucet",permalink:"/5.x/faucet",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/testnet/faucet.md",tags:[],version:"5.x",frontMatter:{title:"Faucet",slug:"/faucet",hide_title:!0},sidebar:"reference",previous:{title:"Contracts on Rococo",permalink:"/5.x/testnet"},next:{title:"OpenBrush",permalink:"/5.x/getting-started/use-openbrush"}},d={},m=[],p={toc:m},f="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(f,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r,{mdxType:"Faucet"}),(0,o.kt)("p",null,"We are operating a faucet for our ",(0,o.kt)("a",{parentName:"p",href:"/testnet"},"Contracts Testnet on Rococo"),".\nBy requesting funds from the form above you will receive ",(0,o.kt)("inlineCode",{parentName:"p"},"ROC"),"\ntokens to your account on this parachain."),(0,o.kt)("p",null,"Note that the funds won't be available on the relaychain, the faucet teleports\nthem  directly to our parachain (",(0,o.kt)("a",{parentName:"p",href:"/testnet"},"see here for more details"),").\nThe polkadot-js UI will display them under ",(0,o.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-contracts-rpc.polkadot.io#/accounts"},'the "Accounts" tab for the Contracts parachain'),":"),(0,o.kt)("img",{src:"/img/roc-in-wallet.png",alt:"Rococo testnet tokens in wallet"}))}h.isMDXComponent=!0}}]);