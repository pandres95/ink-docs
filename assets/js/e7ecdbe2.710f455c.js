"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[8605],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(k,i(i({ref:t},p),{},{components:n})):a.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),l=n(16550),s=n(91980),c=n(67392),p=n(50012);function d(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function u(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=u(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=k({queryString:n,groupId:a}),[d,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),y=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{y&&l(y)}),[y]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var y=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:c}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),u=e=>{const t=e.currentTarget,n=p.indexOf(t),a=c[n].value;a!==l&&(d(t),s(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;n=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;n=p[t]??p[p.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:u},i,{className:(0,o.Z)("tabs__item",g.tabItem,null==i?void 0:i.className,{"tabs__item--active":l===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=h(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},r.createElement(f,(0,a.Z)({},e,t)),r.createElement(w,(0,a.Z)({},e,t)))}function b(e){const t=(0,y.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},36328:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294);const r=e=>{let{src:t,caption:n,width:r="460px"}=e;return a.createElement("center",null,a.createElement("figure",null,a.createElement("img",{src:t,alt:n,width:r}),a.createElement("figcaption",null,n)))}},72355:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),o=n(36328),i=n(74866),l=n(85162);const s={sidebar_position:1,toc_min_heading_level:2,toc_max_heading_level:4,slug:"/getting-started/swanky/cli"},c="Swanky CLI",p={unversionedId:"third-party-tools/swanky/cli",id:"version-5.x/third-party-tools/swanky/cli",title:"Swanky CLI",description:"Swanky CLI is a Node.js based CLI application that abstracts away and extends the functionality of Polkadot.js, cargo contract, and other Wasm developer tools.",source:"@site/versioned_docs/version-5.x/third-party-tools/swanky/cli.md",sourceDirName:"third-party-tools/swanky",slug:"/getting-started/swanky/cli",permalink:"/5.x/getting-started/swanky/cli",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/third-party-tools/swanky/cli.md",tags:[],version:"5.x",sidebarPosition:1,frontMatter:{sidebar_position:1,toc_min_heading_level:2,toc_max_heading_level:4,slug:"/getting-started/swanky/cli"},sidebar:"reference",previous:{title:"Swanky Suite",permalink:"/5.x/getting-started/swanky"},next:{title:"Swanky Node",permalink:"/5.x/getting-started/swanky/node"}},d={},u=[{value:"Installing",id:"installing",level:2},{value:"Dev container (Recommended)",id:"dev-container-recommended",level:3},{value:"Download the precompiled binaries",id:"download-the-precompiled-binaries",level:3},{value:"Globally with npm",id:"globally-with-npm",level:3},{value:"Using swanky-cli",id:"using-swanky-cli",level:2},{value:"Bootstrap a new project",id:"bootstrap-a-new-project",level:3},{value:"Check dependencies and compatibility",id:"check-dependencies-and-compatibility",level:3},{value:"Manage accounts",id:"manage-accounts",level:3},{value:"Interact with contracts",id:"interact-with-contracts",level:3},{value:"Compile",id:"compile",level:4},{value:"Get detailed contract description",id:"get-detailed-contract-description",level:4},{value:"Run E2E tests",id:"run-e2e-tests",level:4},{value:"Deploy your contract",id:"deploy-your-contract",level:4},{value:"Run queries and transactions",id:"run-queries-and-transactions",level:4},{value:"Add a new contract from template",id:"add-a-new-contract-from-template",level:4},{value:"Interact with a local node",id:"interact-with-a-local-node",level:3},{value:"Using plugins",id:"using-plugins",level:2}],m={toc:u},k="wrapper";function h(e){let{components:t,...s}=e;return(0,r.kt)(k,(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"swanky-cli"},"Swanky CLI"),(0,r.kt)("p",null,"Swanky CLI is a Node.js based CLI application that abstracts away and extends the functionality of Polkadot.js, ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo contract"),", and other Wasm developer tools.\nIt aims to ease development of and interaction with Wasm smart contracts and provides simple tools to bootstrap contract environment (project) with contract and integration tests templates, manage local node and accounts, language agnostic compile, deploy contracts to both local and remote networks, compatibility checks between the contract pallet and compiler..."),(0,r.kt)("p",null,"With all of the features mentioned above, even more is in active or planned development. The whole project is public, and everyone is welcome to contribute or suggest features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/AstarNetwork/swanky-cli"},"Swanky CLI repo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/orgs/AstarNetwork/projects/3"},"Swanky CLI project"))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Templates provided in the current version of swanky-cli, as well as environment and supported tools target ink! v4, and use ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo contract")," v2")),(0,r.kt)("h2",{id:"installing"},"Installing"),(0,r.kt)("p",null,"The CLI can be installed and used in different ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"using a preconfigured environment of a dev-container"),(0,r.kt)("li",{parentName:"ul"},"downloading a precompiled binary"),(0,r.kt)("li",{parentName:"ul"},"as an npm package")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Note that using the precompiled binaries, NPM, or compiling it yourself requires you to have the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.astar.network/docs/build/environment/ink_environment"},"local environment set up")," correctly")),(0,r.kt)("h3",{id:"dev-container-recommended"},"Dev container (Recommended)"),(0,r.kt)("p",null,"Using ",(0,r.kt)("a",{parentName:"p",href:"https://docs.astar.network/docs/build/environment/dev-container"},"dev container")," is the recommended method to use ",(0,r.kt)("inlineCode",{parentName:"p"},"swanky-cli"),", it includes all the environment setup and will support auto-updates in the future."),(0,r.kt)("p",null,"To run your project in the dev container follow the steps on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AstarNetwork/swanky-dev-container"},"swanky-dev-container Github"),"."),(0,r.kt)("h3",{id:"download-the-precompiled-binaries"},"Download the precompiled binaries"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the correct archive for your platform from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AstarNetwork/swanky-cli/releases"},"releases section of swanky-cli github page"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Extract the archive to the appropriate location, for example the ",(0,r.kt)("inlineCode",{parentName:"p"},"software")," directory.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"swanky")," executable to your path variable by creating a symbolic link to it from a common ",(0,r.kt)("inlineCode",{parentName:"p"},"bin")," directory or somewhere similar."))),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"MacOS",label:"MacOS",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"ln -s /Users/my_name/software/swanky-cli/bin/swanky /usr/local/bin\n"))),(0,r.kt)(l.Z,{value:"Debian/Ubuntu",label:"Debian/Ubuntu",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"ln -s /home/my_name/swanky-cli/bin/swanky /usr/local/bin\n")))),(0,r.kt)("h3",{id:"globally-with-npm"},"Globally with npm"),(0,r.kt)("p",null,"This approach may seem simpler, but due to the nature of ",(0,r.kt)("inlineCode",{parentName:"p"},"Node.js")," dependency management, may result in version inconsistency or other errors."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh-session"},"$ npm install -g @astar-network/swanky-cli\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh-session"},"$ npx @astar-network/swanky-cli [command]\n")),(0,r.kt)("h2",{id:"using-swanky-cli"},"Using swanky-cli"),(0,r.kt)("p",null,"If you're using a dev container, or have followed the installation instructions, you should have ",(0,r.kt)("inlineCode",{parentName:"p"},"swanky")," command available in your terminal."),(0,r.kt)("p",null,"Running it without any arguments (or with ",(0,r.kt)("inlineCode",{parentName:"p"},"-h"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"--help"),") will provide you with a list of top-level commands and the app version."),(0,r.kt)("p",null,"Passing ",(0,r.kt)("inlineCode",{parentName:"p"},"help")," as an argument and providing it ",(0,r.kt)("inlineCode",{parentName:"p"},"-n"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"--nested-commands")," flag will show full list of commands, including nested ones:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swanky help --nested-commands\n")),(0,r.kt)(o.Z,{caption:"Full list of commands",src:n(57591).Z,width:"65%",mdxType:"Figure"}),(0,r.kt)("p",null,"Note that every command and subcommand also supports ",(0,r.kt)("inlineCode",{parentName:"p"},"-h"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," flags to display their usage instructions."),(0,r.kt)("p",null,"Likewise, most of the commands support ",(0,r.kt)("inlineCode",{parentName:"p"},"-v")," /",(0,r.kt)("inlineCode",{parentName:"p"},"--verbose")," flag, which you can use to get more detailed output (useful for debugging and reporting errors)."),(0,r.kt)("h3",{id:"bootstrap-a-new-project"},"Bootstrap a new project"),(0,r.kt)("p",null,"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"swanky init")," command, you'll be prompted for a series of answers to define your project and the first smart contract within it."),(0,r.kt)("p",null,"After gathering all the required information, the app will proceed to check your environment, scaffold the project, download and install (optionally) swanky node and the project dependencies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"swanky init PROJECT_NAME\n")),(0,r.kt)(o.Z,{caption:"Init process",src:n(18494).Z,width:"65%",mdxType:"Figure"}),(0,r.kt)("p",null,"The resulting folder structure should look something like this:"),(0,r.kt)(o.Z,{caption:"Folder structure",src:n(29381).Z,width:"65%",mdxType:"Figure"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Resources:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/AstarNetwork/swanky-cli/tree/master#quick-start"},(0,r.kt)("em",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"em"},"swanky init")," command usage manual"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/AstarNetwork/swanky-cli/tree/master/src/templates"},(0,r.kt)("em",{parentName:"a"},"available templates")))),(0,r.kt)("h3",{id:"check-dependencies-and-compatibility"},"Check dependencies and compatibility"),(0,r.kt)("p",null,"You can quickly check the presence and versions of required dependencies by running ",(0,r.kt)("inlineCode",{parentName:"p"},"swanky check")," command."),(0,r.kt)(o.Z,{caption:"Verify dependencies",src:n(53257).Z,width:"65%",mdxType:"Figure"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For now, you will need to be be in a project folder to run this command."),(0,r.kt)("p",{parentName:"admonition"},"This command will be updated to fix that, and provide more useful information.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Resources:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/AstarNetwork/swanky-cli/tree/master#swanky-contract-compile-contractname"},(0,r.kt)("em",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"em"},"swanky check")," command usage manual")))),(0,r.kt)("h3",{id:"manage-accounts"},"Manage accounts"),(0,r.kt)("p",null,"Create and list accounts used for contract interaction."),(0,r.kt)("p",null,"These are the accounts stored inside your ",(0,r.kt)("inlineCode",{parentName:"p"},"swanky.config.json"),", so the command needs to be ran from within the project directory."),(0,r.kt)("p",null,"During account creation you'll have an option of passing your own mnemonic, or have Swanky generate one for you by passing ",(0,r.kt)("inlineCode",{parentName:"p"},"-g")," flag."),(0,r.kt)("p",null,'You can also mark the account as "production" which will require you to set a password and encrypt the mnemonic.'),(0,r.kt)("p",null,"Be careful not to use a dev account on live networks, as their mnemonic is stored in plain text in the config!"),(0,r.kt)(o.Z,{caption:"Creating and listing accounts",src:n(49440).Z,width:"65%",mdxType:"Figure"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Newly generated accounts that are not the preconfigured dev accounts (Alice, Bob, Charlie...) will have no funds initially, so you'll have to transfer some manually.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Resources:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/AstarNetwork/swanky-cli#swanky-account-create"},(0,r.kt)("em",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"em"},"swanky account")," command usage manual")))),(0,r.kt)("h3",{id:"interact-with-contracts"},"Interact with contracts"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"swanky contract")," command offers several subcommands for different interactions with your contracts."),(0,r.kt)(o.Z,{caption:"Different `contract` subcommands",src:n(51349).Z,width:"65%",mdxType:"Figure"}),(0,r.kt)("p",null,"The command names are self explanatory, and to get more detailed information on using a specific command, you can use the help flag with it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"swanky contract SUB_COMMAND --help\n")),(0,r.kt)("h4",{id:"compile"},"Compile"),(0,r.kt)("p",null,"Depending on the contracts definition in ",(0,r.kt)("inlineCode",{parentName:"p"},"swanky.config.json"),", calling ",(0,r.kt)("inlineCode",{parentName:"p"},"swanky contract compile CONTRACT_NAME")," will run either cargo-contract or ask! compiler (via npm script)."),(0,r.kt)("p",null,"If you have multiple contracts and wish to compile them all at once, you can pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"--all")," flag instead of the contract name."),(0,r.kt)("p",null,"Likewise, if you're compiling for production, you need to pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"--prod")," flag."),(0,r.kt)(o.Z,{caption:"Compile all contracts",src:n(94035).Z,width:"65%",mdxType:"Figure"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Resources:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/AstarNetwork/swanky-cli/tree/master#swanky-contract-compile-contractname"},(0,r.kt)("em",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"em"},"swanky account")," command usage manual")))),(0,r.kt)("h4",{id:"get-detailed-contract-description"},"Get detailed contract description"),(0,r.kt)("p",null,"Compiling the contract will generate it's metadata too."),(0,r.kt)("p",null,"Swanky provides ",(0,r.kt)("inlineCode",{parentName:"p"},"contract explain CONTRACT_NAME")," command to get a more human friendly version of that metadata:"),(0,r.kt)(o.Z,{caption:"Getting contract metadata information",src:n(58322).Z,width:"65%",mdxType:"Figure"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Resources:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/AstarNetwork/swanky-cli/tree/master#swanky-contract-compile-contractname"},(0,r.kt)("em",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"em"},"contract compile")," command usage manual")))),(0,r.kt)("h4",{id:"run-e2e-tests"},"Run E2E tests"),(0,r.kt)("p",null,"You can test your contracts using ",(0,r.kt)("a",{parentName:"p",href:"https://mochajs.org/"},"Mocha")," framework and ",(0,r.kt)("a",{parentName:"p",href:"https://www.chaijs.com/"},"Chai")," assertions."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Please note these tests are not ink! E2E tests, but are written in TypeScript, and require a local node to be running."),(0,r.kt)("p",{parentName:"admonition"},"You can get more information on ink! E2E test framework in the ",(0,r.kt)("a",{parentName:"p",href:"https://use.ink/basics/contract-testing/#end-to-end-e2e-tests"},"ink! documentation"),".")),(0,r.kt)("p",null,"A contract template will provide you with a simple test as well, which you can use as a starting point.\nThe tests utilize ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/docs/api/"},"@polkadot/api")," library, and contract types generated by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/727-Ventures/typechain-polkadot"},"typechain-polkadot"),".\nThe types are generated during the compile step and copied to ",(0,r.kt)("inlineCode",{parentName:"p"},"test/*/typedContract/")," directory, along with the contract artifacts in the ",(0,r.kt)("inlineCode",{parentName:"p"},"test/*/artifacts/")," directory. If you need only the types generated\n(if you for example deleted or edited them), you can do that without going through the whole compilation step by using ",(0,r.kt)("inlineCode",{parentName:"p"},"swanky contract typegen")," command."),(0,r.kt)("p",null,"Running ",(0,r.kt)("inlineCode",{parentName:"p"},"swanky contract test CONTRACT_NAME")," will detect all ",(0,r.kt)("inlineCode",{parentName:"p"},"*.test.ts")," files in the ",(0,r.kt)("inlineCode",{parentName:"p"},"test/contract_name/")," directory, and run them sequentially, or in all directories inside ",(0,r.kt)("inlineCode",{parentName:"p"},"test/")," if you pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"-a"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"--all")," flag."),(0,r.kt)(o.Z,{caption:"Run tests for a contract",src:n(57313).Z,width:"65%",mdxType:"Figure"}),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Running the tests programmatically may throw warnings about duplicate dependencies on ",(0,r.kt)("inlineCode",{parentName:"p"},"@polkadot/*")," libraries.\nThis occurs because those libraries are included in swanky app itself, as well as in the test files.\nApart from the warning text spamming, no negative consequence of this has been observed."),(0,r.kt)("p",{parentName:"admonition"},"If you want to avoid the warnings anyway, you can run tests as a yarn/npm command:"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"yarn test")," or"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"npm run test"))),(0,r.kt)("p",null,"Web based report will be generated and stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"artifacts/")," directory. You can copy the path of the reports and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"serve")," app to view them in browser. (",(0,r.kt)("inlineCode",{parentName:"p"},"serve")," is included in swanky-dev-container)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"serve PATH_TO_REPORTS\n")),(0,r.kt)(o.Z,{caption:"Web based test report",src:n(63997).Z,width:"65%",mdxType:"Figure"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Resources:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/AstarNetwork/swanky-cli/tree/master#swanky-contract-test-contractname"},(0,r.kt)("em",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"em"},"swanky contract test")," command usage manual")))),(0,r.kt)("h4",{id:"deploy-your-contract"},"Deploy your contract"),(0,r.kt)("p",null,"When your contract is compiled and tested, you can deploy it to a local node or a remote network."),(0,r.kt)("p",null,"You will need to supply account you wish to deploy the contract from (",(0,r.kt)("inlineCode",{parentName:"p"},"-account"),"), max amount of gas to be used (",(0,r.kt)("inlineCode",{parentName:"p"},"-g"),"), and any arguments required by your contract's constructor (",(0,r.kt)("inlineCode",{parentName:"p"},"-a"),")."),(0,r.kt)("p",null,"By default, your contract will be deployed to a local node, but you can pass a custom network via ",(0,r.kt)("inlineCode",{parentName:"p"},"-n"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"--network")," flag. Available networks are configured in ",(0,r.kt)("inlineCode",{parentName:"p"},"swanky.config.json")," file."),(0,r.kt)(o.Z,{caption:"Deploying the contract",src:n(32876).Z,width:"65%",mdxType:"Figure"}),(0,r.kt)("p",null,"Successfully running the ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy")," command will print out the address your contract is deployed to, as well as save it into ",(0,r.kt)("inlineCode",{parentName:"p"},"swanky.config.json")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Resources:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/AstarNetwork/swanky-cli/tree/master#swanky-contract-deploy-contractname"},(0,r.kt)("em",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"em"},"swanky contract deploy")," command usage manual")))),(0,r.kt)("h4",{id:"run-queries-and-transactions"},"Run queries and transactions"),(0,r.kt)("p",null,"Once your contract is deployed, you can call it from the CLI using ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"tx")," commands."),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," for read-only calls, and ",(0,r.kt)("inlineCode",{parentName:"p"},"tx")," for the calls that change the chain state and require signing (and a gas fee)."),(0,r.kt)("p",null,"Both commands require ",(0,r.kt)("inlineCode",{parentName:"p"},"CONTRACT_NAME")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"MESSAGE_NAME")," parameters, and for ",(0,r.kt)("inlineCode",{parentName:"p"},"tx")," a caller account needs to be provided too. (",(0,r.kt)("inlineCode",{parentName:"p"},"-a"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"--account"),")."),(0,r.kt)("p",null,"If the message you're calling requires arguments to be passed, you can do that using ",(0,r.kt)("inlineCode",{parentName:"p"},"-p"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"--param")," flag."),(0,r.kt)(o.Z,{caption:"Calling a query on a contract",src:n(70173).Z,width:"65%",mdxType:"Figure"}),(0,r.kt)(o.Z,{caption:"Calling a transaction on a contract",src:n(19109).Z,width:"65%",mdxType:"Figure"}),(0,r.kt)("p",null,"Result of a ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," is straight forward, ",(0,r.kt)("inlineCode",{parentName:"p"},"OK")," followed by what ever the response is."),(0,r.kt)("p",null,"The transaction (",(0,r.kt)("inlineCode",{parentName:"p"},"tx"),") is a bit more raw though. Important to note are the ",(0,r.kt)("inlineCode",{parentName:"p"},"dispatchError")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"internalError")," fields, plus the ",(0,r.kt)("inlineCode",{parentName:"p"},"status")," field.\nIf the errors are ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),", and the status ",(0,r.kt)("inlineCode",{parentName:"p"},"finalized"),", your transaction has been successful."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Gas fee for ",(0,r.kt)("inlineCode",{parentName:"p"},"tx")," is calculated and applied automatically, but you can provide a gas limit manually by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"-g"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"--gas")," flag."),(0,r.kt)("p",{parentName:"admonition"},"Keep in mind that the transaction will fail if you provide too low a value.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Resources:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/AstarNetwork/swanky-cli/tree/master#swanky-contract-query-contractname-messagename"},(0,r.kt)("em",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"em"},"swanky contract query")," command usage manual"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/AstarNetwork/swanky-cli/tree/master#swanky-contract-tx-contractname-messagename"},(0,r.kt)("em",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"em"},"swanky contract tx")," command usage manual")))),(0,r.kt)("h4",{id:"add-a-new-contract-from-template"},"Add a new contract from template"),(0,r.kt)("p",null,"You can create additional contracts in the same project, using the ",(0,r.kt)("inlineCode",{parentName:"p"},"contract new")," command and selecting from predefined templates."),(0,r.kt)("p",null,"The contract will be referred by ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," when using the relevant contract commands, and you can check the details in ",(0,r.kt)("inlineCode",{parentName:"p"},"swanky.config.json")),(0,r.kt)(o.Z,{caption:"Adding a new contract",src:n(5180).Z,width:"65%",mdxType:"Figure"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Resources:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/AstarNetwork/swanky-cli/tree/master#swanky-contract-new-contractname"},(0,r.kt)("em",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"em"},"swanky contract new")," command usage manual")))),(0,r.kt)("h3",{id:"interact-with-a-local-node"},"Interact with a local node"),(0,r.kt)("p",null,"If you have chosen to download and use the Swanky Node during init step, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"swanky node")," commands to start and manage it."),(0,r.kt)("p",null,"Simply running ",(0,r.kt)("inlineCode",{parentName:"p"},"swanky node start")," will start the node, and the node will preserve the state across restarts."),(0,r.kt)("p",null,"If you want to reset the node state, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"swanky node purge")," command."),(0,r.kt)(o.Z,{caption:"Starting the swanky node",src:n(11436).Z,width:"65%",mdxType:"Figure"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Note that node needs to be running if you are using a default local network with ",(0,r.kt)("inlineCode",{parentName:"p"},"deploy"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"query")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"tx")," commands.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you want to use an external UI to interact with the node, you might run into some CORS issues."),(0,r.kt)("p",{parentName:"admonition"},"This can be solved by passing a custom array of whitelisted urls using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--rpcCors")," flag.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Resources:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/AstarNetwork/swanky-cli/tree/master#swanky-node-purge"},(0,r.kt)("em",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"em"},"swanky node")," commands usage manual")))),(0,r.kt)("h2",{id:"using-plugins"},"Using plugins"),(0,r.kt)("p",null,"Swanky CLI's functionality can be extended by the use of plugins, and it's a way to add new, case specific commands without modifying the core codebase."),(0,r.kt)("p",null,"One WIP example is the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AstarNetwork/swanky-plugin-phala"},"Phala plugin")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you are interested in developing a plugin, you can refer to the Phala example, and the ",(0,r.kt)("a",{parentName:"p",href:"https://oclif.io/docs/plugins"},"Oclif plugin documentation"),", or you can post a request in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AstarNetwork/swanky-cli/issues"},"swanky-cli repo"),"'s issues.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Resources:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/AstarNetwork/swanky-cli/tree/master#swanky-plugins"},(0,r.kt)("em",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"em"},"swanky plugin")," commands usage manual")))))}h.isMDXComponent=!0},49440:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/acc-create-b1d64dae10e8beb93d3de2d42c25dbee.png"},53257:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/check-6e0142844f6d056c08461bff990de9dd.png"},94035:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/compile-9421de01d96c2ec3ee7ad750384ce081.png"},51349:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/contract-commands-96e45b4acbecce82d020d0dac7f9d626.png"},58322:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/contract-explain-acb4f6438394dc98cecb46b2ad07c9e9.png"},5180:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/contract-new-92235c01e5634419801358cafd4a6580.png"},70173:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/contract-query-79a68c5c476702c83699f709e53096af.png"},19109:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/contract-tx-96aa5e18952ecd4a89229f5e35a205db.png"},32876:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/deploy-e8df84a0145815a37a928347c018e15c.png"},29381:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/folder-structure-b5d966f0d49689459cf49632f5f1e9aa.png"},57591:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/help-f114702279d70809522d9216889a6b8d.png"},18494:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/init-94089ca6c093bd53855642a08bcdd244.png"},11436:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/node-start-691dacb8b068ae1f3fd5a35a76578af7.png"},63997:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/test-report-31f35653b8e9fb0e69456fede0360650.png"},57313:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/test-e1b2f006f0f9478bbdd414870268c15e.png"}}]);