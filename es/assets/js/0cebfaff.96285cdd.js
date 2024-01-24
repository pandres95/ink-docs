"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[696],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),l=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(a),h=n,f=p["".concat(s,".").concat(h)]||p[h]||u[h]||r;return a?i.createElement(f,o(o({ref:t},d),{},{components:a})):i.createElement(f,o({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:n,o[1]=c;for(var l=2;l<r;l++)o[l]=a[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},85947:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=a(87462),n=(a(67294),a(3905));const r={title:"Sirato",slug:"/basics/verification/sirato",hide_title:!0},o=void 0,c={unversionedId:"basics/verification/sirato",id:"basics/verification/sirato",title:"Sirato",description:"Web3 Labs have made available a public version of their",source:"@site/docs/basics/verification/sirato.md",sourceDirName:"basics/verification",slug:"/basics/verification/sirato",permalink:"/es/basics/verification/sirato",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/basics/verification/sirato.md",tags:[],version:"current",frontMatter:{title:"Sirato",slug:"/basics/verification/sirato",hide_title:!0},sidebar:"reference",previous:{title:"Contract Verification",permalink:"/es/basics/verification/contract-verification"},next:{title:"Introducci\xf3n",permalink:"/es/macros-attributes"}},s={},l=[{value:"Performing a verifiable build",id:"performing-a-verifiable-build",level:2},{value:"Verifying an ink! smart contract",id:"verifying-an-ink-smart-contract",level:2},{value:"Using the verification service web app",id:"using-the-verification-service-web-app",level:3},{value:"Using Sirato",id:"using-sirato",level:3},{value:"Unverified metadata upload",id:"unverified-metadata-upload",level:3}],d={toc:l},p="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("img",{src:"/img/title/verification.svg",className:"titlePic"}),(0,n.kt)("h1",{id:"sirato-verification-service"},"Sirato Verification Service"),(0,n.kt)("p",null,"Web3 Labs have made available a public version of their\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/web3labs/ink-verifier-server"},"verification service"),"\nto cater for the ink! and DotSama ecosystems. This can be used alongside\nthe verifiable build image container to verify ink! smart contracts."),(0,n.kt)("p",null,"The following steps outline how to create a verifiable build and\nsubsequently verify it using these services."),(0,n.kt)("h2",{id:"performing-a-verifiable-build"},"Performing a verifiable build"),(0,n.kt)("p",null,"You should already be familiar with using ",(0,n.kt)("inlineCode",{parentName:"p"},"cargo-contract")," to\n",(0,n.kt)("a",{parentName:"p",href:"/getting-started/building-your-contract"},"compile your contract"),"."),(0,n.kt)("p",null,"You will need to install the ink! verified image crate:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cargo install \u2014 git \nhttps://github.com/web3labs/ink-verifier-image.git\n")),(0,n.kt)("p",null,"You can now perform a verified build by running the following\ncommand in the smart contracts project folder:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"build-verifiable-ink -i ghcr.io/web3labs/ink-verifier .\n")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Reproducable builds only work with cargo-contract >= 2.0.2 and\ncontracts generated with that version onwards. To work around\nthis you can use the signed metadata file instead.")),(0,n.kt)("p",null,"If you were to use the\n",(0,n.kt)("a",{parentName:"p",href:"/getting-started/creating-an-ink-project"},"flipper example")," you would see\noutput similar to the below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"...\n [5/5] Generating bundle\n\nOriginal wasm size: 20.6K, Optimized: 1.4K\n\nThe contract was built in RELEASE mode.\n\nYour contract artifacts are ready. You can find them in:\n/build/package/src/target/ink\n\n  - flipper.contract (code + metadata)\n  - flipper.wasm (the contract's code)\n  - flipper.json (the contract's metadata)\n  adding: src/ (stored 0%)\n  adding: src/Cargo.lock (deflated 75%)\n  adding: src/Cargo.toml (deflated 52%)\n  adding: src/lib.rs (deflated 72%)\n  adding: flipper.contract (deflated 64%)\nVerification package in /build/target/ink/package.zip\nArchive:  /build/target/ink/package.zip\n  Length      Date    Time    Name\n---------  ---------- -----   ----\n        0  2023-03-08 21:41   src/\n   105695  2023-03-08 21:28   src/Cargo.lock\n      573  2023-03-08 20:40   src/Cargo.toml\n     5177  2023-03-08 20:40   src/lib.rs\n     5278  2023-03-08 21:41   flipper.contract\n---------                     -------\n   116723                     5 files\n")),(0,n.kt)("p",null,"If you have any issues running the build, you can built it yourself by\nrunning the following commands:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd ../\ngit clone https://github.com/web3labs/ink-verifier-image.git\ncd ink-verifier-image\ndocker build . -t ink-verifier:develop\ncd ../flipper\nbuild-verifiable-ink -t develop .\n")),(0,n.kt)("p",null,"There will now be a package zipfile available which contains the contract\nsource code, metadata and Wasm binary:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"tree -L 3\n.\n\u251c\u2500\u2500 Cargo.lock\n\u251c\u2500\u2500 Cargo.toml\n\u251c\u2500\u2500 lib.rs\n\u2514\u2500\u2500 target\n    \u2514\u2500\u2500 ink\n        \u2514\u2500\u2500 package.zip\n")),(0,n.kt)("p",null,"Now that you have created the verified build, you can\n",(0,n.kt)("a",{parentName:"p",href:"/getting-started/deploy-your-contract"},"deploy your contract"),"."),(0,n.kt)("p",null,"Once deployed, you will need to make a note of the contract's code hash in\norder to verify it."),(0,n.kt)("h2",{id:"verifying-an-ink-smart-contract"},"Verifying an ink! smart contract"),(0,n.kt)("h3",{id:"using-the-verification-service-web-app"},"Using the verification service web app"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/web3labs/ink-verifier-server"},"ink! Verification Service"),"\nis a RESTful web service created for verifying smart contracts deployed using\n",(0,n.kt)("a",{parentName:"p",href:"https://crates.io/crates/pallet-contracts"},"pallet-contracts"),"."),(0,n.kt)("p",null,"Web3 Labs host a public instance of the service at\n",(0,n.kt)("a",{parentName:"p",href:"https://ink-verifier.sirato.xyz/"},"ink-verifier.sirato.xyz"),". A Swagger interface\nto the service is also avilable at\n",(0,n.kt)("a",{parentName:"p",href:"https://ink-verifier.sirato.xyz/api/api-docs/"},"ink-verifier.sirato.xyz/api/api-docs/"),"."),(0,n.kt)("img",{src:"/img/verification-service-api.png",alt:"ink! Verification Service Swagger endpoint"}),(0,n.kt)("p",null,"The verification process entails the following steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"A requestor uploads the source packge archive for a network and code hash"),(0,n.kt)("li",{parentName:"ol"},"The server checks that:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The source code for the network and code hash is not already verified or\nbeing verified"),(0,n.kt)("li",{parentName:"ul"},"There is enough host resources to start a new verification"))),(0,n.kt)("li",{parentName:"ol"},"The server downloads the pristine Wasm byte code correspondening to the\nprovided network and code hash"),(0,n.kt)("li",{parentName:"ol"},"The server streams the archive if it is a compressed archive"),(0,n.kt)("li",{parentName:"ol"},"The server moves the staging files to the processing directory"),(0,n.kt)("li",{parentName:"ol"},"The server runs a container process for the verifier image to verify the\npackage in processing. See source code verification workflow for details"),(0,n.kt)("li",{parentName:"ol"},"On the event of container exit the server moves the verified artificats to\nthe publish directory if the verification was successful, otherwise keeps a log in the errors directory")),(0,n.kt)("p",null,"It works with any network that is defined in the\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/polkadot-js/apps/tree/master/packages/apps-config/src/endpoints"},"@polkadot/apps-config"),"\npackage."),(0,n.kt)("p",null,"In order to verify a deployed contract using the service you will need to use\nthe ",(0,n.kt)("inlineCode",{parentName:"p"},"/verify/{network}/{codeHash}")," endpoint which is documented\n",(0,n.kt)("a",{parentName:"p",href:"https://ink-verifier.sirato.xyz/api/api-docs/#/default/post_verify__network___codeHash_"},"here"),"."),(0,n.kt)("p",null,"Once a contract has been verified you can use the\n",(0,n.kt)("inlineCode",{parentName:"p"},"/contract/{codeHash}/metadata.json")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"/contract/{codeHash}/src")," endpoints\nto retrieve metadata and source code respectively."),(0,n.kt)("h3",{id:"using-sirato"},"Using Sirato"),(0,n.kt)("p",null,"Sirato Substrate is a smart contract explorer for ink! smart contracts. It\nintegrates with the contract verification service allowing users to upload\npackage files generated by the verifiable build image via the Sirato UI instead\nof having to use the web endpoint."),(0,n.kt)("p",null,"In addition once a contract has been verified, details of any contract activity\nand events taking place on a parachain or Substrate chain are decoded for the\nuser in Sirato."),(0,n.kt)("p",null,"For instance, in order to verify a contract deployed on the Rococo parachain,\nyou can head to the Sirato instance at\n",(0,n.kt)("a",{parentName:"p",href:"https://substrate.sirato.xyz/"},"substrate.sirato.xyz"),"."),(0,n.kt)("img",{src:"/img/sirato-substrate.png",alt:"Sirato Substrate"}),(0,n.kt)("p",null,"From there you can navigate to the deployed code by clicking on the Code\nreference that matches the code hash returned by the cargo contract instantiate\ncall."),(0,n.kt)("p",null,"Alternatively, you can navigate directly by entering the URL\n",(0,n.kt)("inlineCode",{parentName:"p"},"https://substrate.sirato.xyz/codes/0x<code-hash>"),"."),(0,n.kt)("img",{src:"/img/sirato-contract-instance.png",alt:"Sirato contract instance view"}),(0,n.kt)("p",null,"Now click on the source code tab:"),(0,n.kt)("img",{src:"/img/sirato-package-upload.png",alt:"Sirato package upload page"}),(0,n.kt)("p",null,"Then upload the verified ",(0,n.kt)("inlineCode",{parentName:"p"},"package.zip")," file that you generated earlier."),(0,n.kt)("img",{src:"/img/sirato-package-upload-done.png",alt:"Sirato package upload complete"}),(0,n.kt)("p",null,"You can now start the verification process which kicks off a build of the\nprovided resources."),(0,n.kt)("img",{src:"/img/sirato-package-verify.png",alt:"Sirato package verification"}),(0,n.kt)("p",null,"Once the process has finished you will see the message\n",(0,n.kt)("inlineCode",{parentName:"p"},"Contract successfully verified"),"."),(0,n.kt)("img",{src:"/img/sirato-verify-complete.png",alt:"Sirato package verification complete"}),(0,n.kt)("p",null,"Clicking Browse verified files will display the associated metadata and\nsource files for your contract."),(0,n.kt)("img",{src:"/img/sirato-browse-verified.png",alt:"Sirato browse verified contract"}),(0,n.kt)("p",null,"If we then browse back to our contract instance, any methods or events will\nnow be decoded."),(0,n.kt)("img",{src:"/img/sirato-decoded-transaction.png",alt:"Sirato decoded contract transaction"}),(0,n.kt)("p",null,"We can verify this by invoking a method on the contract. We can now see the\ndecoded method that was called in Sirato."),(0,n.kt)("img",{src:"/img/sirato-decoded-transaction2.png",alt:"Another Sirato decoded contract transaction"}),(0,n.kt)("h3",{id:"unverified-metadata-upload"},"Unverified metadata upload"),(0,n.kt)("p",null,"The verification service supports uploading signed contract metadata as an\nadditional alternative to reproducible builds generated metadata. Please note\nthat the signed metadata is not verified and the owner of the code hash is\ntrusted."),(0,n.kt)("p",null,"This feature responds to:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"The support for ",(0,n.kt)("inlineCode",{parentName:"li"},"build_info")," data is only available from ",(0,n.kt)("inlineCode",{parentName:"li"},"cargo-contract"),"\n2.0.2."),(0,n.kt)("li",{parentName:"ol"},"There is no official image or procedure regarding reproducible builds\nyet."),(0,n.kt)("li",{parentName:"ol"},"We want to expand the service utility in the meantime.")),(0,n.kt)("p",null,"Although it is a far from ideal way to bind the metadata to a given code\nhash it prevents trivial exploitation by:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Verifying that the signature is from the owner account of the code hash."),(0,n.kt)("li",{parentName:"ul"},"Verifying that the signed message matches the sha256 of the uploaded\nmetadata.json + the code hash of the uploaded contract bytecode.")),(0,n.kt)("p",null,"To provide signed metadata, you will need to use\nthe ",(0,n.kt)("inlineCode",{parentName:"p"},"/upload/{network}/{codeHash}")," endpoint which is documented\n",(0,n.kt)("a",{parentName:"p",href:"https://ink-verifier.sirato.xyz/api/api-docs/#/default/post_upload__network___codeHash_"},"here")),(0,n.kt)("p",null,"For the request body you will need to sign this message using the account that\nuploaded the contract. You can use the ",(0,n.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=ws%3A%2F%2F127.0.0.1%3A9944#/signing"},"sign and verify tool"),"\nin Polkadot.js. "),(0,n.kt)("p",null,"It is also possible to use Sirato for this, you can find instructions\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/web3labs/ink-verifier-server/blob/main/docs/TUTORIAL.md#s2---owner-signed-metadata"},"here"),"."))}u.isMDXComponent=!0}}]);